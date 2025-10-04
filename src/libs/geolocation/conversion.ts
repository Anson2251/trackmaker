import { GeographicPoint, type GeoJSONPointType } from "./types";
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
export type AllPossiblePointTypes = GeoJSONPointType | GeographicPoint | LngLatPointType;

/**
 * Convert WGS coordinate to GCJ coordinate
 * @param location WGS point to convert
 * @returns GCJ point
 * @throws {Error} If location is invalid or conversion fails
 */
export function wgs2gcj(location: GeographicPoint): GeographicPoint {
    const converted = gcoord.transform([location.longitude, location.latitude], gcoord.WGS84, gcoord.GCJ02);
    return new GeographicPoint(converted[1], converted[0])
}
