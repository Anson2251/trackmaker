import { cloneDeep } from "lodash-es";
import type { GeoJSONPointType, GeographicPointType } from "./types";
import gcoord from "gcoord";

/**
 * Point type constants for better tree-shaking and performance
 */
export const PointTypes = {
    GEOGRAPHIC: 0,
    GEOJSON: 1,
    LNGLAT: 2,
} as const;

export type PointTypes = typeof PointTypes[keyof typeof PointTypes];

export type LngLatPointType = readonly [number, number];

/**
 * All possible point types that can be converted
 */
export type AllPossiblePointTypes = GeoJSONPointType | GeographicPointType | LngLatPointType;

/**
 * Convert WGS coordinate to GCJ coordinate
 * @param location WGS point to convert
 * @returns GCJ point
 * @throws {Error} If location is invalid or conversion fails
 */
export function wgs2gcj(location: GeographicPointType): GeographicPointType {
    if (!isValidGeographicPoint(location)) {
        throw new Error('Invalid geographic point: longitude and latitude must be numbers');
    }

    const converted = gcoord.transform([location.longitude, location.latitude], gcoord.WGS84, gcoord.GCJ02);
    return { longitude: converted[0], latitude: converted[1] };
}

/**
 * Validates a geographic point
 * @param point The point to validate
 * @returns True if the point is valid
 */
function isValidGeographicPoint(point: GeographicPointType): point is GeographicPointType {
    return typeof point?.longitude === 'number' &&
        typeof point?.latitude === 'number' &&
        !isNaN(point.longitude) &&
        !isNaN(point.latitude);
}

/**
 * Get coordinates from different point types in GeographicPointType format
 * @param point The point to convert
 * @param type The type of the input point
 * @returns GeographicPointType representation of the point
 * @throws {Error} If point is invalid or conversion fails
 */
export function getCoordinate(point: GeographicPointType, type: typeof PointTypes.GEOGRAPHIC): GeographicPointType;
export function getCoordinate(point: GeoJSONPointType, type: typeof PointTypes.GEOJSON): GeographicPointType;
export function getCoordinate(point: LngLatPointType, type: typeof PointTypes.LNGLAT): GeographicPointType;
export function getCoordinate(point: AllPossiblePointTypes, type: PointTypes): GeographicPointType {
    if (!point) {
        throw new Error('Point cannot be null or undefined');
    }

    switch (type) {
        case PointTypes.GEOGRAPHIC: {
            const geoPoint = point as GeographicPointType;
            if (!isValidGeographicPoint(geoPoint)) {
                throw new Error('Invalid geographic point');
            }
            return cloneDeep(geoPoint);
        }
        case PointTypes.GEOJSON: {
            const geoJsonPoint = point as GeoJSONPointType;
            if (!isValidGeoJSONPoint(geoJsonPoint)) {
                throw new Error('Invalid GeoJSON point');
            }
            return {
                latitude: geoJsonPoint.coordinates[1],
                longitude: geoJsonPoint.coordinates[0]
            };
        }
        case PointTypes.LNGLAT: {
            const lngLatPoint = point as LngLatPointType;
            if (!isValidLngLatPoint(lngLatPoint)) {
                throw new Error('Invalid LngLat point');
            }
            return {
                latitude: lngLatPoint[1],
                longitude: lngLatPoint[0]
            };
        }
        default:
            throw new Error(`Unknown point type: ${type}`);
    }
}

/**
 * Validates a GeoJSON point
 * @param point The point to validate
 * @returns True if the point is valid
 */
function isValidGeoJSONPoint(point: GeoJSONPointType): point is GeoJSONPointType {
    return point?.type === "Point" &&
        Array.isArray(point?.coordinates) &&
        point.coordinates.length === 2 &&
        typeof point.coordinates[0] === 'number' &&
        typeof point.coordinates[1] === 'number' &&
        !isNaN(point.coordinates[0]) &&
        !isNaN(point.coordinates[1]);
}

/**
 * Validates a LngLat point
 * @param point The point to validate
 * @returns True if the point is valid
 */
function isValidLngLatPoint(point: LngLatPointType): point is LngLatPointType {
    return Array.isArray(point) &&
        point.length === 2 &&
        typeof point[0] === 'number' &&
        typeof point[1] === 'number' &&
        !isNaN(point[0]) &&
        !isNaN(point[1]);
}

/**
 * Create a location point in the specified format
 * @param location The geographic location to convert
 * @param type The target format type
 * @returns The location in the specified format
 * @throws {Error} If location is invalid or conversion fails
 */
export function createLocationPoint(location: GeographicPointType, type: typeof PointTypes.GEOGRAPHIC): GeographicPointType;
export function createLocationPoint(location: GeographicPointType, type: typeof PointTypes.GEOJSON): GeoJSONPointType;
export function createLocationPoint(location: GeographicPointType, type: typeof PointTypes.LNGLAT): LngLatPointType;
export function createLocationPoint(location: GeographicPointType | null | undefined, type: PointTypes): AllPossiblePointTypes {
    if (!location) {
        throw new Error('Location cannot be null or undefined');
    }

    if (!isValidGeographicPoint(location)) {
        throw new Error('Invalid geographic location');
    }

    switch (type) {
        case PointTypes.GEOGRAPHIC: {
            return cloneDeep(location);
        }
        case PointTypes.GEOJSON: {
            return {
                type: "Point",
                coordinates: [location.longitude, location.latitude]
            };
        }
        case PointTypes.LNGLAT: {
            return [location.longitude, location.latitude] as LngLatPointType;
        }
        default:
            throw new Error(`Unknown point type: ${type}`);
    }
}

/**
 * Convert a point from one format to another
 * @param point The point to convert
 * @param to The target format type
 * @returns The point in the specified format
 * @throws {Error} If point is invalid or conversion fails
 */
export function convertLocationPoint(point: AllPossiblePointTypes, to: typeof PointTypes.GEOGRAPHIC): GeographicPointType;
export function convertLocationPoint(point: AllPossiblePointTypes, to: typeof PointTypes.GEOJSON): GeoJSONPointType;
export function convertLocationPoint(point: AllPossiblePointTypes, to: typeof PointTypes.LNGLAT): LngLatPointType;
export function convertLocationPoint(point: AllPossiblePointTypes, to: PointTypes): AllPossiblePointTypes {
    if (!point) {
        throw new Error('Point cannot be null or undefined');
    }

    let geographicPoint: GeographicPointType;

    if (Array.isArray(point)) {
        geographicPoint = getCoordinate(point as LngLatPointType, PointTypes.LNGLAT);
    } else if ((point as GeoJSONPointType).type === "Point") {
        geographicPoint = getCoordinate(point as GeoJSONPointType, PointTypes.GEOJSON);
    } else {
        geographicPoint = getCoordinate(point as GeographicPointType, PointTypes.GEOGRAPHIC);
    }

    // Use a type-safe approach to handle the conversion
    switch (to) {
        case PointTypes.GEOGRAPHIC:
            return createLocationPoint(geographicPoint, PointTypes.GEOGRAPHIC);
        case PointTypes.GEOJSON:
            return createLocationPoint(geographicPoint, PointTypes.GEOJSON);
        case PointTypes.LNGLAT:
            return createLocationPoint(geographicPoint, PointTypes.LNGLAT);
        default:
            throw new Error(`Unknown target type: ${to}`);
    }
}

export default {
    getCoordinate,
    createLocationPoint,
    convertLocationPoint
};


