export interface GeographicPointType {
    latitude: number;
    longitude: number;
}

export interface GeoJSONPointType {
    type: "Point",
    /** [Longitude, Latitude] */
    coordinates: [number, number]
}
