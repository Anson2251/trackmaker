export interface GeographicPointType {
    latitude: number;
    longitude: number;
}

export interface GeoJSONPointType {
    type: "Point",
    /** [Longitude, Latitude] */
    coordinates: [number, number]
}

export type LocationResponseType = {
    status: boolean;
    location: GeographicPointType;
    error: {
        code: number;
        message: string;
    }
};

export type LocationResponseErrorType = {
    code: LocationResponseErrorEnum;
    message: string;
}

export enum LocationResponseErrorEnum {
    PERMISSION_DENIED = 1,
    POSITION_UNAVAILABLE = 2,
    TIMEOUT = 3,
    UNKNOWN = 4
}
