import {v4 as uuidV4} from "uuid";

import type {
    GeographicDraftGeoJSON,
    GeographicDraftItemGeoJSON,
    GeographicDraftItemProperties,
    GeographicDraftItemType,
    GeographicDraftType,
    GeographicRouteItemProperties,
    GeographicShape,
    GeoJSONPoint,
    SupportedShapeType
} from "@/libs/cartosketch/definitions";
import {supportedShapeTypes} from "@/libs/cartosketch/definitions";

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
        return Object.freeze(this.drafts);
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

export namespace CartoSketchDraft {
    export function create(name: string, drafts: CartoSketchDraftItem[] = [], id = uuidV4()): CartoSketchDraft {
        return new CartoSketchDraft(name, drafts, id);
    }

    export function createItem(name: string, id = uuidV4(), shape: GeographicShape, properties: GeographicDraftItemProperties = {}): CartoSketchDraftItem {
        return new CartoSketchDraftItem(name, shape, id, properties);
    }

    /**
     * Create a new draft from the provided GeoJSON object, which only contains one feature.
     *
     * @param geojson - The GeoJSON object containing the draft information.
     * @param name
     * @param id
     * @return A Promise that resolves to the new draft object.
     */
    export function importItemFromGeoJSON(geojson: GeographicDraftItemGeoJSON | any, name?: string, id?: string): CartoSketchDraftItem {
        if (Array.isArray(geojson.features))
            throw new Error("[createDraftItemFromGeoJSON] Only one feature is supported");

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
    export function importFromGeoJSON(geojson: any, name?: string, id = uuidV4()): CartoSketchDraft {
        if (geojson.feature) throw new Error("[importFromGeoJSON] Multiple features should be contained");

        const collection = (geojson.features as GeographicDraftItemGeoJSON[]).map((feature: GeographicDraftItemGeoJSON, index: number) => {
            return importItemFromGeoJSON(feature, `${name}-${index}`, undefined);
        });

        return new CartoSketchDraft(id, collection, id);
    }

    export function readItemFromStorage(data: GeographicDraftItemType): CartoSketchDraftItem {
        return new CartoSketchDraftItem(data.name, data.shape, data.id, data.properties);
    }

    export function readFromStorage(data: GeographicDraftType): CartoSketchDraft {
        return new CartoSketchDraft(data.name, data.drafts.map((draft) => CartoSketchDraft.readItemFromStorage(draft)), data.id);
    }
}


export class CartoSketchDraftItem {
    name: string;
    readonly id: string;
    private shape: GeographicShape;
    readonly properties: GeographicDraftItemProperties;

    constructor(name: string, shapes: GeographicShape, id: string = uuidV4(), properties: GeographicDraftItemProperties = {}) {
        this.name = name;
        this.id = id;
        this.shape = shapes;
        this.properties = properties;
    }

    setShapes(shapes: GeographicShape) {
        this.shape = shapes;
    }

    getShapes() {
        return Object.freeze(this.shape);
    }

    setProperties(properties: GeographicDraftItemProperties) {
        const newProperties = JSON.parse(JSON.stringify(properties)) as GeographicRouteItemProperties;
        Object.assign(this.properties, newProperties);
    }

    exportAsGeoJSON(): GeographicDraftItemGeoJSON {
        return {
            type: "Feature",
            properties: Object.assign({}, this.properties, {name: this.name, id: this.id}),
            geometry: this.shape
        };
    }

    exportToStorage(): GeographicDraftItemType {
        return {
            name: this.name,
            id: this.id,
            properties: this.properties,
            shape: this.shape
        };
    }
}


export default CartoSketchDraft;
