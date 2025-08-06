import { v4 as uuidV4 } from "uuid";
import { cloneDeep } from "lodash-es";
import { type GeographicPointType } from '../../libs/geolocation/types';

import type {
    GeographicRouteGeoJSON,
    GeographicRouteType,
    GeographicRouteItemType,
    GeographicRouteItemProperties,
    GeographicRouteItemGeoJSON,
    GeoJSONPoint
} from "@/libs/cartosketch/definitions";

export class CartoSketchRouteCollection {
    readonly id: string;
    name: string;
    routesInternal: CartoSketchRouteItem[];
    constructor(name: string, routes: CartoSketchRouteItem[] = [], id: string = uuidV4()) {
        this.id = id;
        this.name = name;
        this.routesInternal = routes;
    }

    get routes() {
        return cloneDeep(this.routesInternal);
    }

    set routes(routes: CartoSketchRouteItem[]){
        this.routesInternal = cloneDeep(routes)
    }

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
    }

    updateRoute(route: CartoSketchRouteItem) {
        const index = this.routesInternal.findIndex((r) => r.id === route.id);
        if (index === -1) throw new Error(`[CartoSketch.Route] Route ${route.id} not found`);
        this.routesInternal[index] = cloneDeep(route);
    }

    removeRoute(id: string) {
        const index = this.routesInternal.findIndex((route) => route.id === id);
        if (index !== -1) this.routesInternal.splice(index, 1);
    }

    exportAsGeoJSON(): GeographicRouteGeoJSON {
        return {
            type: "FeatureCollection",
            features: this.routesInternal.map((route) => route.exportAsGeoJSON())
        };
    }

    exportToStorage(): GeographicRouteType {
        return {
            id: this.id,
            name: this.name,
            routes: this.routesInternal.map((route) => route.exportToStorage())
        };
    }
}


export class CartoSketchRouteItem {
    name: string;
    readonly id: string;
    readonly properties: GeographicRouteItemProperties;
    private points: GeographicPointType[];
    constructor(name: string, id: string = uuidV4(), points: GeographicPointType[] = [], properties: GeographicRouteItemProperties = {}) {
        this.name = name;
        this.id = id;
        this.properties = properties;
        this.points = points;
    }

    setPoints(points: GeographicPointType[]) {
        this.points = cloneDeep(points);
    }

    appendPoint(point: GeographicPointType) {
        this.points.push(cloneDeep(point) as GeographicPointType);
    }

    getPoints() {
        return cloneDeep(this.points);
    }

    setProperties(properties: GeographicRouteItemProperties) {
        const newProperties = cloneDeep(properties)
        Object.assign(this.properties, newProperties);
    }

    exportAsGeoJSON(): GeographicRouteItemGeoJSON {
        return {
            type: "Feature",
            properties: {
                ...this.properties,
                description: JSON.stringify({
                    name: this.name,
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
            name: this.name,
            id: this.id,
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
    name = name ?? id;

    const collection = (geojson.features as GeographicRouteItemGeoJSON[]).map((feature: GeographicRouteItemGeoJSON, index: number) => {
        return importItemFromGeoJSON(feature, `${name}-${index}`);
    });

    return new CartoSketchRouteCollection(name, collection, id);
}

export function importItemFromGeoJSON(geojson: GeographicRouteItemGeoJSON, name?: string, id?: string): CartoSketchRouteItem {
    const properties = geojson.properties as GeographicRouteItemProperties;
    const type = geojson.geometry.type as string;
    const coordinates = geojson.geometry.coordinates as GeoJSONPoint[];

    if (type !== "LineString") throw new Error(`[importItemFromGeoJSON] Unsupported geometry type for routes ${type}`);

    id = id ?? uuidV4();
    name = name ?? id;

    return new CartoSketchRouteItem(name, id, coordinates.map((point) => ({ latitude: point[1], longitude: point[0] } as GeographicPointType)), properties);
}


export function importItemFromStorage(data: GeographicRouteItemType): CartoSketchRouteItem {
    return new CartoSketchRouteItem(data.name, data.id, data.points, data.properties);
}

export function readCollectionFromStorage(data: GeographicRouteType): CartoSketchRouteCollection {
    return new CartoSketchRouteCollection(data.name, data.routes.map((route) => importItemFromStorage(route)), data.id);
}

