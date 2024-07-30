export interface GeographicPointType {
    latitude: number;
    longitude: number;
}

export interface GeoJSONPointType {
    type: "Point",
    coordinates: [number, number]
}
