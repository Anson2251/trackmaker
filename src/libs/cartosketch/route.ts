import { v4 as uuidV4 } from "uuid";
import type { GeographicPointType } from "../../utils/geolocation";
import { cloneDeep } from "lodash-es";

import type {
    GeographicRouteGeoJSON,
    GeographicRouteType,
    GeographicRouteItemType,
    GeographicRouteItemProperties,
    GeographicRouteItemGeoJSON,
    GeoJSONPoint
} from "@/libs/cartosketch/definitions";

export class CartoSketchRoute {
    readonly id: string;
    name: string;
    readonly routes: CartoSketchRouteItem[];
    constructor(name: string, routes: CartoSketchRouteItem[] = [], id: string = uuidV4()) {
        this.id = id;
        this.name = name;
        this.routes = routes;
    }

    getRoutes(): Readonly<CartoSketchRouteItem[]> {
        return Object.freeze(this.routes);
    }

    getRoute(id: string) {
        return this.routes.find((route) => route.id === id);
    }

    addRoute(route: CartoSketchRouteItem) {
        this.routes.push(route);
    }

    exportAsGeoJSON(): GeographicRouteGeoJSON {
        return {
            type: "FeatureCollection",
            features: this.routes.map((route) => route.exportAsGeoJSON())
        };
    }

    exportToStorage(): GeographicRouteType {
        return {
            id: this.id,
            name: this.name,
            routes: this.routes.map((route) => route.exportToStorage())
        };
    }
}

export namespace CartoSketchRoute {
    export function create(name: string, routes: CartoSketchRouteItem[] = [], id = uuidV4()): CartoSketchRoute {
        return new CartoSketchRoute(name, routes, id);
    }

    export function createItem(name: string, id = uuidV4(), points: GeographicPointType[] = [], properties: GeographicRouteItemProperties = {}): CartoSketchRouteItem {
        return new CartoSketchRouteItem(name, id, points, properties);
    }


    /**
     * Imports a geojson object into a CartoSketchRoute object.
     *
     * @param geojson - The geojson object to import.
     * @param [name] - The name of the route. If not provided, it will follow the id.
     * @param [id] - The id of the route. If not provided, a unique id will be generated.
     * @return The imported CartoSketchRoute object.
     */
    export function importFromGeoJSON(geojson: GeographicRouteGeoJSON | any, name?: string, id = uuidV4()): CartoSketchRoute {
        if (geojson.feature) throw new Error("Multiple features should be contained");

        name = name || id;

        const collection = (geojson.features as GeographicRouteItemGeoJSON[]).map((feature: GeographicRouteItemGeoJSON, index: number) => {
            return importItemFromGeoJSON(feature, `${name}-${index}`);
        });

        return new CartoSketchRoute(name, collection, id);
    }

    export function importItemFromGeoJSON(geojson: GeographicRouteItemGeoJSON | any, name?: string, id?: string): CartoSketchRouteItem {
        if (geojson.features) throw new Error("[importItemFromGeoJSON] Only one feature is supported");

        const properties = geojson.properties as GeographicRouteItemProperties;
        const type = geojson.geometry.type as string;
        const coordinates = geojson.geometry.coordinates as GeoJSONPoint[];

        if (type !== "LineString") throw new Error(`[importItemFromGeoJSON] Unsupported geometry type for routes ${type}`);

        id = id || uuidV4();
        name = name || id;

        return new CartoSketchRouteItem(name, id, coordinates.map((point) => ({ latitude: point[1], longitude: point[0] } as GeographicPointType)), properties);
    }

    export function importItemFromStorage(data: GeographicRouteItemType): CartoSketchRouteItem {
        return new CartoSketchRouteItem(data.name, data.id, data.points, data.properties);
    }

    export function readFromStorage(data: GeographicRouteType): CartoSketchRoute {
        return new CartoSketchRoute(data.name, data.routes.map((route) => importItemFromStorage(route)), data.id);
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
        return Object.freeze(this.points);
    }

    setProperties(properties: GeographicRouteItemProperties) {
        const newProperties = cloneDeep(properties) as GeographicRouteItemProperties;
        Object.assign(this.properties, newProperties);
    }

    exportAsGeoJSON(): GeographicRouteItemGeoJSON {
        return {
            type: "Feature",
            properties: Object.assign({}, this.properties, { name: this.name, id: this.id }),
            geometry: {
                type: "LineString",
                coordinates: this.points.map((point) => {
                    return [point.longitude, point.latitude];
                }),
            },
        };
    }

    exportAsBingMapsPrimitive(): Microsoft.Maps.Polyline {
        return new Microsoft.Maps.Polyline(this.points.map((point) => {
            return new Microsoft.Maps.Location(point.latitude, point.longitude);
        }), this.properties);
    }

    exportToStorage(): GeographicRouteItemType {
        return {
            name: this.name,
            id: this.id,
            properties: this.properties,
            points: this.points
        };
    }
}

export default CartoSketchRoute;
