import type { GeoJSONPointType, GeographicPointType } from "./types";
import gcoord from "gcoord";
import { cloneDeep } from "lodash-es";

export enum PointTypes {
    GEOGRAPHIC = 0,
    GEOJSON = 1,
    LNGLAT = 2,
}

export type LngLatPointType = [number, number];

/**
* Convert WGS coordinate to GCJ coordinate
* @param location WGS point to convert
* @return GCJ point
*/
export function wgs2gcj(location: GeographicPointType): GeographicPointType {
    const converted = gcoord.transform([location.longitude, location.latitude], gcoord.WGS84, gcoord.GCJ02);
    return { longitude: converted[0], latitude: converted[1] };
}

export type AllPossiblePointTypes = GeoJSONPointType | GeographicPointType | LngLatPointType;

export function getCoordinate(point: GeographicPointType, type: PointTypes.GEOGRAPHIC): GeographicPointType;
export function getCoordinate(point: GeoJSONPointType, type: PointTypes.GEOJSON): GeographicPointType;
export function getCoordinate(point: LngLatPointType, type: PointTypes.LNGLAT): GeographicPointType;
export function getCoordinate(point: AllPossiblePointTypes, type: PointTypes): GeographicPointType {
    switch (type) {
        case PointTypes.GEOGRAPHIC: {
            return cloneDeep(point) as GeographicPointType;
        }
        case PointTypes.GEOJSON: {
            return {
                latitude: (point as GeoJSONPointType).coordinates[1],
                longitude: (point as GeoJSONPointType).coordinates[0]
            };
        }
        case PointTypes.LNGLAT: {
            return {
                latitude: (point as LngLatPointType)[1],
                longitude: (point as LngLatPointType)[0]
            };
        }
    }
}

export function createLocationPoint(location: GeographicPointType, type: PointTypes.GEOGRAPHIC): GeographicPointType;
export function createLocationPoint(location: GeographicPointType, type: PointTypes.GEOJSON): GeoJSONPointType;
export function createLocationPoint(location: GeographicPointType, type: PointTypes.LNGLAT): LngLatPointType;
export function createLocationPoint(location: GeographicPointType, type: PointTypes): AllPossiblePointTypes {
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
            return [
                location.longitude,
                location.latitude
            ];
        }
    }
}

export function convertLocationPoint(point: AllPossiblePointTypes, to: PointTypes.GEOGRAPHIC): GeographicPointType;
export function convertLocationPoint(point: AllPossiblePointTypes, to: PointTypes.GEOJSON): GeoJSONPointType;
export function convertLocationPoint(point: AllPossiblePointTypes, to: PointTypes.LNGLAT): LngLatPointType;
export function convertLocationPoint(point: AllPossiblePointTypes, to: PointTypes): AllPossiblePointTypes {
    if (Array.isArray(point)) {
        return createLocationPoint(getCoordinate(point as LngLatPointType, PointTypes.LNGLAT), to as PointTypes.GEOGRAPHIC | PointTypes.GEOJSON | PointTypes.LNGLAT);
    }

    if ((point as GeoJSONPointType).type === "Point") {
        return createLocationPoint(getCoordinate(point as GeoJSONPointType, PointTypes.GEOJSON), to as PointTypes.GEOGRAPHIC | PointTypes.GEOJSON | PointTypes.LNGLAT);
    }

    return createLocationPoint(getCoordinate(point as GeographicPointType, PointTypes.GEOGRAPHIC), to as PointTypes.GEOGRAPHIC | PointTypes.GEOJSON | PointTypes.LNGLAT);
}

export default {
    getCoordinate,
    createLocationPoint,
    convertLocationPoint
};


