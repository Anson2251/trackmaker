/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import CartoSketchComponent from "./component";
import { v4 as uuidV4 } from "uuid";
import type { GeographicPoint } from "@/utils/geolocation";

type PolylineProperties = {
    strokeColor?: string,
    strokeThickness: number,
    visible?: boolean,
}

export type PolylineGeoJSON = {
    type: "Feature",
    properties: PolylineProperties,
    geometry: {
        type: "LineString",
        coordinates: Array<[number, number]>,
    },
}

export class BingMapsPolyline extends CartoSketchComponent<string | number | boolean> {
    properties: Readonly<PolylineProperties>;
    private line: Microsoft.Maps.Polyline;
    constructor(polyline: Microsoft.Maps.Polyline, properties: PolylineProperties) {
        super();
        this.line = polyline;
        this.properties = properties;
        this.id = uuidV4();
        this.name = this.id;
    }

    onPropertyChange(): void {
        this.line.setOptions(this.properties)
    }

    getLine(): Microsoft.Maps.Polyline {
        return this.line;
    }

    getNativeID(): number {
        return (this.line as any).id;
    }

    getLocations(): GeographicPoint[] {
        return this.line.getLocations().map((point) => {
            return {
                latitude: point.latitude,
                longitude: point.longitude,
            };
        });
    }

    exportToGeoJSON(): PolylineGeoJSON {
        return {
            type: "Feature",
            properties: this.properties,
            geometry: {
                type: "LineString",
                coordinates: this.line.getLocations().map((point) => {
                    return [point.longitude, point.latitude];
                }),
            },
        };
    }
}

export function PolylineFromGeoJSON(geoJSON: any): { line: Microsoft.Maps.Polyline, component: BingMapsPolyline } {
    if (geoJSON.geometry.type as string !== "Point") throw new Error(`Cannot convert GeoJSON type: ${geoJSON.geometry.type} into BingMapsPolyline`);
    const locations = geoJSON.geometry.coordinates as Array<[number, number]>;
    const line = new Microsoft.Maps.Polyline(locations.map(l => new Microsoft.Maps.Location(l[1], l[0])), geoJSON.properties);
    return {
        line: line,
        component: new BingMapsPolyline(line, geoJSON.properties),
    }
}

export default BingMapsPolyline;
