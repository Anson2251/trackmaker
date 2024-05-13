/// <reference path="../../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import type { GeographicPoint } from "@/utils/geolocation";
import CartoSketchComponent from "./component";
import { v4 as uuidV4 } from "uuid";

type PushPinProperties = {
    color: string;
    draggable: boolean;
    icon: string;
    text: string;
    title: string;
    subTitle: string;
    visible: boolean;
}

export type PushPinGeoJSON = {
    type: "Feature",
    properties: PushPinProperties,
    geometry: {
        type: "Point",
        coordinates: [number, number],
    },
}

export class BingMapsPushPin extends CartoSketchComponent<string | boolean> {
    properties: Readonly<PushPinProperties>;
    private pin: Microsoft.Maps.Pushpin;
    constructor(pin: Microsoft.Maps.Pushpin) {
        super();
        this.properties = {
            color: pin.getColor().toString(),
            draggable: pin.getDraggable(),
            icon: pin.getIcon(),
            text: pin.getText(),
            title: pin.getTitle(),
            subTitle: pin.getSubTitle(),
            visible: pin.getVisible(),
        };
        this.pin = pin;
        this.id = uuidV4();
        this.name = this.id;
    }

    onPropertyChange(): void {
        this.pin.setOptions(this.properties);
    }

    setLocation(location: GeographicPoint): void {
        this.pin.setLocation(new Microsoft.Maps.Location(location.latitude, location.longitude));
    }

    getLocation(): GeographicPoint {
        const nativeLocation = this.pin.getLocation();
        return {
            latitude: nativeLocation.latitude,
            longitude: nativeLocation.longitude,
        }
    }

    getNativeID(): number {
        return (this.pin as any).id;
    }

    exportToGeoJSON(): PushPinGeoJSON {
        const location = this.getLocation();
        return {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [location.longitude, location.latitude],
            },
            properties: this.properties,
        }
    }
}

export function PushPinFromGeoJSON(geoJSON: any): { pin: Microsoft.Maps.Pushpin, component: BingMapsPushPin } {
    if (geoJSON.geometry.type as string !== "Point") throw new Error(`Cannot convert GeoJSON type: ${geoJSON.geometry.type} into BingMapsPushPin`);
    const location = new Microsoft.Maps.Location(geoJSON.geometry.coordinates[1], geoJSON.geometry.coordinates[0]);
    const pin = new Microsoft.Maps.Pushpin(location, geoJSON.properties);
    return {
        pin: pin,
        component: new BingMapsPushPin(pin),
    }
}

export default BingMapsPushPin;
