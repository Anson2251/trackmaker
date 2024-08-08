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
