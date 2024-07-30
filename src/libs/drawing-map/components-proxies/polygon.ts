import DrawingComponentProxy from "./component";
import type { GeographicPointType } from "@/utils/geolocation";

export type PolygonProperties = {
    fillColor: string,
    strokeColor: string,
    strokeThickness: number,
    visible: boolean,
}

export type PolygonGeoJSON = {
    type: "Feature",
    properties: PolygonProperties,
    geometry: {
        type: "Polygon",
        coordinates: [number, number][],
    },
}

export class PolygonProxy extends DrawingComponentProxy<PolygonProperties> {
    type = "Polygon";
    constructor(shape: GeographicPointType[], properties: PolygonProperties, id?: string, name?: string) {
        super(shape, properties, id, name);
    }

    exportToGeoJSON(): PolygonGeoJSON {
        return {
            type: "Feature",
            properties: this.properties,
            geometry: {
                type: "Polygon",
                coordinates: this.coordinates.map((point) => {
                    return [point.longitude, point.latitude];
                }),
            },
        };
    }
}

export default PolygonProxy;
