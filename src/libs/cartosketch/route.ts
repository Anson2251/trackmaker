import { v4 as uuidV4 } from "uuid";
import { cloneDeep } from "lodash-es";
import { type GeographicPointType } from '../../libs/geolocation/types';

import {
    type GeographicRouteGeoJSON,
    type GeographicRouteType,
    type GeographicRouteItemType,
    type GeographicRouteItemProperties,
    type GeographicRouteItemGeoJSON,
    type GeoJSONPoint,
    GeographicGeneralMetaDefaultValue
} from "@/libs/cartosketch/definitions";

import type { GeographicGeneralMetaType } from "@/libs/cartosketch/definitions";

export class CartoSketchRouteCollection {
    readonly id: string;
    meta: GeographicGeneralMetaType;
    routesInternal: CartoSketchRouteItem[];
    constructor(routes: CartoSketchRouteItem[] = [], id: string = uuidV4(), meta: GeographicGeneralMetaType = GeographicGeneralMetaDefaultValue()) {
        this.id = id;
        this.meta = meta || GeographicGeneralMetaDefaultValue();
        this.routesInternal = routes;
    }

    get name() {
        if (!this.meta) {
            this.meta = GeographicGeneralMetaDefaultValue();
        }
        return this.meta.name
    }
    set name(name: string) {
        if (!this.meta) {
            this.meta = GeographicGeneralMetaDefaultValue();
        }
        this.meta.name = name
    }

    get routes() { return cloneDeep(this.routesInternal); }
    set routes(routes: CartoSketchRouteItem[]){ this.routesInternal = cloneDeep(routes) }

    /**
     * Finds a route by its ID.
     * @param id - The ID of the route to find.
     * @returns The route with the specified ID, or undefined if not found.
     */
    findRoute(id: string) {
        return this.routesInternal.find((route) => route.id === id);
    }

    existRoute(id: string) {
        return this.routesInternal.some((route) => route.id === id);
    }

    addRoute(route: CartoSketchRouteItem) {
        if (this.existRoute(route.id)) throw new Error(`[CartoSketch.Route] Route ${route.id} already exist`)
        this.routesInternal.push(cloneDeep(route));
        this.updateModificationTime();
    }

    updateRoute(route: CartoSketchRouteItem) {
        const index = this.routesInternal.findIndex((r) => r.id === route.id);
        if (index === -1) throw new Error(`[CartoSketch.Route] Route ${route.id} not found`);
        this.routesInternal[index] = cloneDeep(route);
        this.updateModificationTime();
    }

    removeRoute(id: string) {
        const index = this.routesInternal.findIndex((route) => route.id === id);
        if (index !== -1) {
            this.routesInternal.splice(index, 1);
            this.updateModificationTime();
        }
    }

    updateModificationTime() {
        this.meta.modification_timestamp = Date.now();
    }

    exportAsGeoJSON(): GeographicRouteGeoJSON {
        return {
            type: "FeatureCollection",
            features: this.routesInternal.map((route) => route.exportAsGeoJSON()),
            properties: this.meta
        };
    }

    exportToStorage(): Readonly<GeographicRouteType> {
        return Object.freeze({
            id: this.id,
            meta: this.meta,
            routes: this.routesInternal.map((route) => route.exportToStorage())
        });
    }
}


export class CartoSketchRouteItem {
    readonly id: string;
    meta: GeographicGeneralMetaType;
    readonly properties: GeographicRouteItemProperties;
    private points: GeographicPointType[];
    constructor(id: string = uuidV4(), points: GeographicPointType[] = [], properties: GeographicRouteItemProperties = {}, meta: GeographicGeneralMetaType = GeographicGeneralMetaDefaultValue()) {
        this.id = id;
        this.meta = meta || GeographicGeneralMetaDefaultValue();
        this.properties = properties;
        this.points = points;
    }

    get name() {
        if (!this.meta) {
            this.meta = GeographicGeneralMetaDefaultValue();
        }
        return this.meta.name
    }
    set name(name: string) {
        if (!this.meta) {
            this.meta = GeographicGeneralMetaDefaultValue();
        }
        this.meta.name = name
    }

    setPoints(points: GeographicPointType[]) {
        this.points = cloneDeep(points);
        this.updateModificationTime();
    }

    appendPoint(point: GeographicPointType) {
        this.points.push(cloneDeep(point) as GeographicPointType);
        this.updateModificationTime();
    }

    getPoints() {
        return cloneDeep(this.points);
    }

    setProperties(properties: GeographicRouteItemProperties) {
        const newProperties = cloneDeep(properties)
        Object.assign(this.properties, newProperties);
        this.updateModificationTime();
    }

    updateModificationTime() {
        this.meta.modification_timestamp = Date.now();
    }

    exportAsGeoJSON(): GeographicRouteItemGeoJSON {
        return {
            type: "Feature",
            properties: {
                ...this.properties,
                ...this.meta,
                description: JSON.stringify({
                    name: this.meta.name,
                    id: this.id,
                }),
            },
            geometry: {
                type: "LineString",
                coordinates: this.points.map((point) => {
                    return [point.longitude, point.latitude];
                }),
            },
        };
    }

    /**
     * Exports the current geographic route item to a storage-compatible format.
     *
     * @returns {GeographicRouteItemType} An object containing the route's data including:
     * - name: The name of the route
     * - id: The unique identifier of the route
     * - properties: Additional properties/metadata of the route
     * - points: The geographical points that make up the route
     */
    exportToStorage(): GeographicRouteItemType {
        return cloneDeep({
            id: this.id,
            meta: this.meta,
            properties: this.properties,
            points: this.points
        });
    }
}



/**
 * Imports a geojson object into a CartoSketchRoute object.
 *
 * @param geojson - The geojson object to import.
 * @param [name] - The name of the route. If not provided, it will follow the id.
 * @param [id] - The id of the route. If not provided, a unique id will be generated.
 * @return The imported CartoSketchRoute object.
 */
export function importCollectionFromGeoJSON(geojson: GeographicRouteGeoJSON, name?: string, id = uuidV4()): CartoSketchRouteCollection {
    name = name ?? geojson.properties?.name ?? id;

    const collection = (geojson.features as GeographicRouteItemGeoJSON[]).map((feature: GeographicRouteItemGeoJSON, index: number) => {
        return importItemFromGeoJSON(feature, `${name}-${index}`);
    });

    const defaultMeta = GeographicGeneralMetaDefaultValue();
    if (geojson.properties) {
        for (const key of Object.keys(defaultMeta)) {
            const val = geojson.properties[key as keyof typeof geojson.properties];
            if (val !== undefined) {
                defaultMeta[key as keyof typeof defaultMeta] = val as never;
            }
        }
    }

    const routeCollection = new CartoSketchRouteCollection(collection, id, defaultMeta);

    return routeCollection;
}

export function importItemFromGeoJSON(geojson: GeographicRouteItemGeoJSON, name?: string, id?: string): CartoSketchRouteItem {
    const properties = geojson.properties || {} as GeographicRouteItemProperties;
    const type = geojson.geometry?.type as string;
    const coordinates = geojson.geometry?.coordinates as GeoJSONPoint[];

    if (type !== "LineString") throw new Error(`[importItemFromGeoJSON] Unsupported geometry type for routes ${type}`);

    id = id ?? uuidV4();

    const defaultMeta = GeographicGeneralMetaDefaultValue();
    if (geojson.properties) {
        for (const key of Object.keys(defaultMeta)) {
            const val = geojson.properties[key as keyof typeof geojson.properties];
            if (val !== undefined) {
                defaultMeta[key as keyof typeof defaultMeta] = val as never;
            }
        }
    }

    const routeItem = new CartoSketchRouteItem(id, coordinates?.map((point) => ({ latitude: point[1], longitude: point[0] } as GeographicPointType)) || [], properties, defaultMeta);

    return routeItem;
}


export function importItemFromStorage(data: GeographicRouteItemType): CartoSketchRouteItem {
    if (!data) {
        throw new Error('[importItemFromStorage] Invalid data provided');
    }
    const routeItem = new CartoSketchRouteItem(data.id || uuidV4(), data.points || [], data.properties || {}, data.meta);
    if (data.meta) {
        routeItem.meta = data.meta;
    }
    return routeItem;
}

export function readCollectionFromStorage(data: GeographicRouteType): CartoSketchRouteCollection {
    if (!data) {
        throw new Error('[readCollectionFromStorage] Invalid data provided');
    }
    const routes = (data.routes || []).map((route) => importItemFromStorage(route));
    const routeCollection = new CartoSketchRouteCollection(routes, data.id || uuidV4(), data.meta);
    if (data.meta) {
        routeCollection.meta = data.meta;
    }
    return routeCollection;
}

