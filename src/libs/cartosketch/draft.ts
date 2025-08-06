import { v4 as uuidV4 } from "uuid";
import { cloneDeep } from 'lodash-es';

import type {
    GeographicDraftGeoJSON,
    GeographicDraftItemGeoJSON,
    GeographicDraftItemProperties,
    GeographicDraftItemType,
    GeographicDraftType,
    GeographicShape,
    GeoJSONPoint,
    SupportedShapeType
} from "@/libs/cartosketch/definitions";
import { supportedShapeTypes } from "@/libs/cartosketch/definitions";

export class CartoSketchDraft {
    readonly id: string;
    name: string;
    readonly drafts: CartoSketchDraftItem[];

    constructor(name: string, drafts: CartoSketchDraftItem[] = [], id: string = uuidV4()) {
        this.id = id;
        this.name = name;
        this.drafts = drafts;
    }

    getDrafts(): Readonly<CartoSketchDraftItem[]> {
        return cloneDeep(this.drafts);
    }

    getDraft(id: string) {
        return this.drafts.find((draft) => draft.id === id);
    }

    addDraft(draft: CartoSketchDraftItem) {
        this.drafts.push(draft);
    }

    exportAsGeoJSON(): GeographicDraftGeoJSON {
        return {
            type: "FeatureCollection",
            features: this.drafts.map((draft) => draft.exportAsGeoJSON())
        };
    }

    exportToStorage(): GeographicDraftType {
        return {
            id: this.id,
            name: this.name,
            drafts: this.drafts.map((draft) => draft.exportToStorage())
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
    const title = geojson.properties.title as string;

    if (!(type in supportedShapeTypes)) throw new Error(`Invalid or unsupported geometry type ${type} in feature ${title}`);
    if (!coordinates) throw new Error(`No coordinates provided in feature ${title}`);
    if (!title) throw new Error("No title provided");

    const properties: GeographicDraftItemProperties = {
        title: title,
        subTitle: geojson.properties.subTitle || "",
        label: geojson.properties.label || "",
        fillColor: geojson.properties.fillColor || "",
        strokeColor: geojson.properties.strokeColor || "",
        strokeThickness: geojson.properties.strokeThickness || 1,
        icon: geojson.properties.icon || "",
        visible: geojson.properties.visible || true,
    };

    const shape: GeographicShape = {
        type: type as SupportedShapeType,
        coordinates: coordinates,
    };

    return new CartoSketchDraftItem(name || title, shape, id, properties);
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
        return importItemFromGeoJSON(feature, `${name}-${index}`, undefined);
    });

    return new CartoSketchDraft(id, collection, id);
}

export function readItemFromStorage(data: GeographicDraftItemType): CartoSketchDraftItem {
    return new CartoSketchDraftItem(data.name, data.shape, data.id, data.properties);
}

export function readFromStorage(data: GeographicDraftType): CartoSketchDraft {
    return new CartoSketchDraft(data.name, data.drafts.map((draft) => readItemFromStorage(draft)), data.id);
}


export class CartoSketchDraftItem {
    name: string;
    readonly id: string;
    private shapeInternal: GeographicShape;
    properties: GeographicDraftItemProperties;

    constructor(name: string, shapes: GeographicShape, id: string = uuidV4(), properties: GeographicDraftItemProperties = {}) {
        this.name = name;
        this.id = id;
        this.shapeInternal = shapes;
        this.properties = properties;
    }

    shape = {
        get: () => cloneDeep(this.shapeInternal),
        set: (shape: GeographicShape) => this.shapeInternal = cloneDeep(shape)
    }

    setProperties(properties: Partial<GeographicDraftItemProperties>) {
        this.properties = {
            ...this.properties,
            ...properties
        }
    }

    exportAsGeoJSON(): GeographicDraftItemGeoJSON {
        return {
            type: "Feature",
            properties: Object.assign({}, this.properties, { name: this.name, id: this.id }),
            geometry: this.shapeInternal
        };
    }

    exportToStorage(): GeographicDraftItemType {
        return {
            name: this.name,
            id: this.id,
            properties: this.properties,
            shape: this.shapeInternal
        };
    }
}


export default CartoSketchDraft;
