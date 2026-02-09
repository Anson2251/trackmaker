import { v4 as uuidV4 } from "uuid";
import type { GeographicPoint } from '../../libs/geolocation/types';
import type {
    GeographicRouteItemType,
    GeographicRouteItemProperties,
    GeographicRouteItemGeoJSON,
    GeoJSONPoint,
} from "@/libs/cartosketch/definitions";
import { GeographicGeneralMetaDefaultValue } from "@/libs/cartosketch/definitions";
import type { GeographicGeneralMetaType } from "@/libs/cartosketch/definitions";

/**
 * Export a route item as GeoJSON
 */
export function exportRouteAsGeoJSON(route: GeographicRouteItemType): GeographicRouteItemGeoJSON {
    return {
        type: "Feature",
        properties: {
            ...route.properties,
            ...route.meta,
            description: JSON.stringify({
                name: route.meta.name,
                id: route.id,
            }),
        },
        geometry: {
            type: "LineString",
            coordinates: route.points.map((point) => {
                return [point.longitude, point.latitude];
            }),
        },
    };
}

/**
 * Import a route from GeoJSON
 */
export function importRouteFromGeoJSON(geojson: GeographicRouteItemGeoJSON, name?: string, id?: string): GeographicRouteItemType {
    const properties = geojson.properties ?? {} as GeographicRouteItemProperties;
    const type = geojson.geometry?.type as string;
    const coordinates = geojson.geometry?.coordinates as GeoJSONPoint[];

    if (type !== "LineString") throw new Error(`[importRouteFromGeoJSON] Unsupported geometry type for routes ${type}`);

    id = id ?? uuidV4();

    const defaultMeta = GeographicGeneralMetaDefaultValue();
    if (geojson.properties !== null && geojson.properties !== undefined) {
        for (const key of Object.keys(defaultMeta)) {
            const val = geojson.properties[key as keyof typeof geojson.properties];
            if (val !== undefined) {
                (defaultMeta as Record<string, unknown>)[key] = val;
            }
        }
    }

    return {
        id,
        meta: { ...defaultMeta, record_timespan: 0, distance: 0 },
        properties,
        points: coordinates?.map((point) => ({
            latitude: point[1],
            longitude: point[0],
            accuracy: 0,
            toLngLatLike: () => [point[0], point[1]] as [number, number],
            varianceInMeter: 0
        })) ?? []
    };
}

/**
 * Create a new empty route
 */
export function createRoute(
    name: string,
    properties: GeographicRouteItemProperties = {},
    meta: Partial<GeographicGeneralMetaType> = {}
): GeographicRouteItemType {
    return {
        id: uuidV4(),
        meta: { ...GeographicGeneralMetaDefaultValue(), record_timespan: 0, distance: 0, ...meta, name },
        properties,
        points: []
    };
}

/**
 * Update route modification timestamp
 */
export function touchRoute(route: GeographicRouteItemType): void {
    route.meta.modification_timestamp = Date.now();
}

/**
 * Append a point to a route
 */
export function appendPointToRoute(route: GeographicRouteItemType, point: GeographicPoint): void {
    route.points.push(point);
    touchRoute(route);
}

/**
 * Set route points
 */
export function setRoutePoints(route: GeographicRouteItemType, points: GeographicPoint[]): void {
    route.points = points;
    touchRoute(route);
}
