import DrawingComponentProxy from "./component";
import type { GeographicPoint } from "@/utils/geolocation";

export type PolylineProperties = {
    strokeColor: string,
    strokeThickness: number,
    visible: boolean,
}

export type PolylineGeoJSON = {
    type: "Feature",
    properties: PolylineProperties,
    geometry: {
        type: "LineString",
        coordinates: Array<[number, number]>,
    },
}

export class PolylineProxy extends DrawingComponentProxy<PolylineProperties> {
    type = "LineString";
    constructor(coordinates: GeographicPoint[], properties: PolylineProperties, id?: string, name?: string) {
        super(coordinates, properties, id, name);
    }

    exportToGeoJSON(): PolylineGeoJSON {
        return {
            type: "Feature",
            properties: this.properties,
            geometry: {
                type: "LineString",
                coordinates: this.getLocations().map((point) => {
                    return [point.longitude, point.latitude];
                }),
            },
        };
    }
}

// export function importPolylineFromGeoJSON(GeoJSON: any, id?: string, name?: string): PolylineProxy {
//     if (GeoJSON.geometry.type as string !== "LineString") throw new Error(`Cannot convert GeoJSON type: ${GeoJSON.geometry.type} into polyline`);
//     const shape = (GeoJSON.geometry.coordinates as [number, number][]).map((point) => ({longitude: point[0], latitude: point[1]} as GeographicPoint));
//
//     const polylineName = (GeoJSON.properties.name || GeoJSON.properties.title || name) as string;
//     return new PolylineProxy(shape, GeoJSON.properties, id, polylineName);
// }
//
// export function importPolygonFromCartoSketchDraftItem(draft: Sketch.CartoSketch.Drafts.CartoSketchDraftItem): PolylineProxy {
//     const name = draft.name;
//     const id = draft.id;
//     const shape = draft.getShapes();
//     if(shape.type !== "Polygon") throw new Error(`Cannot convert draft item ${id}, with type: ${shape.type} into polygon`);
//
//     const coordinates = (shape.coordinates as [number, number][]).map((point) => ({longitude: point[0], latitude: point[1]} as GeographicPoint));
//     const properties = draft.properties;
//     const polygonProperties: PolylineProperties = {
//         strokeColor: properties.strokeColor || "#000000",
//         strokeThickness: properties.strokeThickness || 1,
//         visible: properties.visible ===  undefined ? true : properties.visible
//     }
//     return new PolylineProxy(coordinates, polygonProperties, id, name);
// }
export default PolylineProxy;
