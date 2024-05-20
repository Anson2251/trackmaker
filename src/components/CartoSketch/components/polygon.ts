/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import CartoSketchComponent from "./component";
import { v4 as uuidV4 } from "uuid";
import type { GeographicPoint } from "@/utils/geolocation";

type PolygonProperties = {
    fillColor?: string,
    strokeColor?: string,
    strokeThickness: number,
    visible?: boolean,
}

export type PolygonGeoJSON = {
    type: "Feature",
    properties: PolygonProperties,
    geometry: {
        type: "Polygon",
        coordinates: [number, number][],
    },
}

export class BingMapsPolygon extends CartoSketchComponent<string | number | boolean> {
    properties: Readonly<PolygonProperties>;
    private shape: Microsoft.Maps.Polygon;
    constructor(polygon: Microsoft.Maps.Polygon, properties: PolygonProperties) {
        super();
        this.shape = polygon;
        this.properties = properties;
        this.id = uuidV4();
        this.name = this.id;
    }

    onPropertyChange(): void {
        this.shape.setOptions(this.properties)
    }

    getLine(): Microsoft.Maps.Polygon {
        return this.shape;
    }

    getNativeID(): number {
        return (this.shape as any).id;
    }

    getLocations(): GeographicPoint[] {
        return this.shape.getLocations().map((point) => {
            return {
                latitude: point.latitude,
                longitude: point.longitude,
            };
        });
    }

    exportToGeoJSON(): PolygonGeoJSON {
        return {
            type: "Feature",
            properties: this.properties,
            geometry: {
                type: "Polygon",
                coordinates: this.shape.getLocations().map((point) => {
                    return [point.longitude, point.latitude];
                }),
            },
        };
    }
}

export function PushPinFromGeoJSON(geoJSON: any): { shape: Microsoft.Maps.Polygon, component: BingMapsPolygon } {
    if (geoJSON.geometry.type as string !== "Point") throw new Error(`Cannot convert GeoJSON type: ${geoJSON.geometry.type} into BingMapsPolygon`);
    const locations = geoJSON.geometry.coordinates as Array<[number, number]>;
    const shape = new Microsoft.Maps.Polygon(locations.map(l => new Microsoft.Maps.Location(l[1], l[0])), geoJSON.properties);
    return {
        shape: shape,
        component: new BingMapsPolygon(shape, geoJSON.properties),
    }
}

export default BingMapsPolygon;
