import { v4 as uuidV4 } from "uuid";
import { cloneDeep } from 'lodash-es';

import type {
    GeographicDraftGeoJSON,
    GeographicDraftItemGeoJSON,
    GeographicDraftItemProperties,
    GeographicDraftType,
    GeographicShape,
    GeoJSONPoint,
    SupportedShapeType,
    GeographicDraftItemType,
    GeographicGeneralMetaType
} from "@/libs/cartosketch/definitions";
import { GeographicGeneralMetaDefaultValue, supportedShapeTypes } from "@/libs/cartosketch/definitions";

export class CartoSketchDraft {
    readonly id: string;
    meta: GeographicGeneralMetaType;
    draftsInternal: CartoSketchDraftItem[];

    constructor(name: string, drafts: CartoSketchDraftItem[] = [], id: string = uuidV4(), meta: GeographicGeneralMetaType = GeographicGeneralMetaDefaultValue()) {
        this.id = id;
        this.meta = meta;
        this.draftsInternal = drafts;
    }

    get name() { return this.meta.name }
    set name(name: string) { this.meta.name = name }

    get drafts() { return cloneDeep(this.draftsInternal) }
    set drafts(drafts: CartoSketchDraftItem[]) { this.draftsInternal = drafts; }

    getDraft(id: string) {
        return this.draftsInternal.find((draft) => draft.id === id);
    }

    addDraft(draft: CartoSketchDraftItem) {
        this.draftsInternal.push(draft);
        this.updateModificationTime();
    }

    deleteDraft(id: string) {
        this.draftsInternal = this.draftsInternal.filter((draft) => draft.id !== id);
        this.updateModificationTime();
    }

    existDraft(id: string) {
        return this.draftsInternal.some((draft) => draft.id === id);
    }

    updateDraft(id: string, draft: CartoSketchDraftItem) {
        const draftStatic = draft.exportToStorage();
        const index = this.draftsInternal.findIndex((draft) => draft.id === id);
        if (index === -1) throw new Error(`Draft with id ${id} not found`);
        this.draftsInternal[index] = new CartoSketchDraftItem(draftStatic.shape, draft.id, draftStatic.meta, draftStatic.properties);
        this.updateModificationTime();
    }

    updateModificationTime() {
        this.meta.modification_timestamp = Date.now();
    }

    exportAsGeoJSON(): GeographicDraftGeoJSON {
        return {
            type: "FeatureCollection",
            features: this.draftsInternal.map((draft) => draft.exportAsGeoJSON()),
            properties: this.meta
        };
    }

    exportToStorage(): GeographicDraftType {
        return {
            id: this.id,
            meta: this.meta,
            drafts: this.draftsInternal.map((draft) => draft.exportToStorage())
        };
    }
}

/**
 * Create a new draft from the provided GeoJSON object, which only contains one feature.
 *
 * @param geojson - The GeoJSON object containing the draft information.
 * @param name
 * @param id
 * @return A Promise that resolves to the new draft object.
 */
export function importItemFromGeoJSON(geojson: GeographicDraftItemGeoJSON, name?: string, id?: string): CartoSketchDraftItem {
    const type = geojson.geometry.type as string;
    const coordinates = Array.isArray(geojson.geometry.coordinates[0]) ? geojson.geometry.coordinates : [geojson.geometry.coordinates] as GeoJSONPoint[];

    if (!(type in supportedShapeTypes)) throw new Error(`Invalid or unsupported geometry type ${type}`);
    if (!coordinates) throw new Error(`No coordinates provided in feature`);

    const properties: GeographicDraftItemProperties = {
        fillColor: geojson.properties.fillColor || "",
        strokeColor: geojson.properties.strokeColor || "",
        strokeThickness: geojson.properties.strokeThickness || 1,
        icon: geojson.properties.icon || "",
        visible: geojson.properties.visible !== undefined ? geojson.properties.visible : true,
    };

    const shape: GeographicShape = {
        type: type as SupportedShapeType,
        coordinates: coordinates,
    };

    // Create meta from GeoJSON properties
    const meta: GeographicGeneralMetaType = {
        name: geojson.properties.name || name || "Untitled Draft",
        description: geojson.properties.description || "",
        creation_timestamp: geojson.properties.creation_timestamp || Date.now(),
        modification_timestamp: geojson.properties.modification_timestamp || Date.now(),
        tags: geojson.properties.tags || [],
        created_by: geojson.properties.created_by || "",
        modified_by: geojson.properties.modified_by || ""
    };

    return new CartoSketchDraftItem(shape, id, meta, properties);
}

/**
 * Import a draft which is in the form of GeoJSON based on the provided name and draft content.
 * Newly imported draft will not be stored in the database
 *
 * @param geojson - The draft content to import.
 * @param name
 * @param id
 * @return A promise that resolves to the imported draft.
 */
export function importFromGeoJSON(geojson: GeographicDraftGeoJSON, name?: string, id = uuidV4()): CartoSketchDraft {
    const collection = geojson.features.map((feature, index: number) => {
        return importItemFromGeoJSON(feature, `${name || "Imported"}-${index}`, undefined);
    });

    const defaultMeta: GeographicGeneralMetaType = GeographicGeneralMetaDefaultValue();
    for (const key of Object.keys(defaultMeta)) {
        const val = geojson.properties[key as keyof typeof geojson.properties];
        if (val !== undefined) {
            defaultMeta[key as keyof typeof defaultMeta] = val as never;
        }
    }

    return new CartoSketchDraft(name || "Imported Draft", collection, id, defaultMeta);
}

export function readItemFromStorage(data: GeographicDraftItemType): CartoSketchDraftItem {
    return new CartoSketchDraftItem(data.shape, data.id, data.meta, data.properties);
}

export function readFromStorage(data: GeographicDraftType): CartoSketchDraft {
    const draft = new CartoSketchDraft(data.meta.name, data.drafts.map((draft) => readItemFromStorage(draft)), data.id, data.meta);
    draft.meta = data.meta;
    return draft;
}

export class CartoSketchDraftItem {
    readonly id: string;
    private shapeInternal: GeographicShape;
    meta: GeographicGeneralMetaType;
    properties: GeographicDraftItemProperties;

    constructor(shape: GeographicShape, id: string = uuidV4(), meta: GeographicGeneralMetaType, properties: GeographicDraftItemProperties = {}) {
        this.id = id;
        this.shapeInternal = cloneDeep(shape);
        this.meta = meta;
        this.properties = properties;
    }

    shape = {
        get: () => cloneDeep(this.shapeInternal),
        set: (shape: GeographicShape) => {
            this.shapeInternal = cloneDeep(shape);
            this.updateModificationTime();
        }
    }

    setProperties(properties: Partial<GeographicDraftItemProperties>) {
        this.properties = {
            ...this.properties,
            ...properties
        }
        this.updateModificationTime();
    }

    setMeta(meta: Partial<GeographicGeneralMetaType>) {
        this.meta = {
            ...this.meta,
            ...meta,
            modification_timestamp: Date.now()
        }
    }

    updateModificationTime() {
        this.meta.modification_timestamp = Date.now();
    }

    exportAsGeoJSON(): GeographicDraftItemGeoJSON {
        return {
            type: "Feature",
            properties: Object.assign({}, this.properties, this.meta),
            geometry: this.shapeInternal
        };
    }

    exportToStorage(): GeographicDraftItemType {
        return {
            id: this.id,
            meta: this.meta,
            properties: this.properties,
            shape: this.shapeInternal
        };
    }
}

export default CartoSketchDraft;
