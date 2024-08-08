import MapBackend, { allocateMapID } from "@/libs/map-backends/backend";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Conversion as LocationConversion, type GeographicPointType, PointTypes } from "@/utils/geolocation";
import type { DefaultOptionTypes } from "@/libs/map-backends/backend";
import { isEqual } from "lodash-es";
import { getMapLibreGLStyle } from "./maplibre-gl-styles";
import { type MapPluginConstructor } from "../plugin";

export const allocateMapLibreGLMapID = allocateMapID;

const toLngLatPoint = (point: GeographicPointType): [number, number] => {
    return LocationConversion.convertLocationPoint(point, PointTypes.LNGLAT);
};

const toGeographicPoint = (point: [number, number]): GeographicPointType => {
    return LocationConversion.convertLocationPoint(point, PointTypes.GEOGRAPHIC);
};

export type MapLibreGLBackendType = MapBackend<maplibregl.Map, MapLibreGLBackendOptionTypes>;

export interface MapLibreGLBackendOptionTypes extends DefaultOptionTypes<string> {
    // style: string,
}

export interface MapLibreGLBackendHandlerType {
    handler: ((eventArg: any) => void),
    id: number,
    type: any
}

export declare interface MapLibreGLBackend {
    properties: {
        nativeHandlers: MapLibreGLBackendHandlerType[];
    }
}



export class MapLibreGLBackend extends MapBackend<maplibregl.Map, MapLibreGLBackendOptionTypes> {
    constructor(container: HTMLElement, options: MapLibreGLBackendOptionTypes, plugins: MapPluginConstructor<MapLibreGLBackend>[] = []) {
        super(container, options, ["pitch", "bearing"], plugins as any[]);
    }

    initialiseMap(options: MapLibreGLBackendOptionTypes): maplibregl.Map {
        const map = new maplibregl.Map({
            container: this.container, // container id
            style: getMapLibreGLStyle(options.type, options.credentials), // style URL
            center: LocationConversion.convertLocationPoint(this.getCentre(), PointTypes.LNGLAT), // starting position [lng, lat]
            zoom: this.getZoom(), // starting zoom
            maxZoom: this.getZoomRange().max,
            minZoom: this.getZoomRange().min,
        });

        this.properties.nativeHandlers = [];

        return map;
    }

    getSymbolLayerID(): string | undefined {
        const layers = this.map.getStyle().layers;

        let labelLayerId;
        for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol') {
                labelLayerId = layers[i].id;
                break;
            }
        }
        return labelLayerId;
    }

    startSynchroniseMap(): void {
        const checkMapViewCentre = () => {
            if (this.getMapViewFrozenStatus() && !isEqual(this.map.getCenter().toArray(), toLngLatPoint(this.getCentre()))) {
                this.map.setCenter(toLngLatPoint(this.getCentre()));
            }
        };

        this.addEventHandler('viewchangeend', () => {
            this.map.setCenter(toLngLatPoint(this.getViewCentre()));
            this.map.setZoom(this.getZoom());
            this.map.setBearing(this.getBearing());
            this.map.setPitch(this.getPitch());
        }, false);

        this.addEventHandler('pitchend', () => {
            this.setPitch(this.map.getPitch(), true);
        }, true);
        this.addEventHandler('zoom', () => {
            this.setViewCentre(toGeographicPoint(this.map.getCenter().toArray()), true);
            this.setZoom(this.map.getZoom(), true);
            checkMapViewCentre();
        }, true);
        this.addEventHandler('move', () => {
            this.setViewCentre(toGeographicPoint(this.map.getCenter().toArray()), true);
            checkMapViewCentre();
        }, true);
    }

    addNativeHandler(type: keyof maplibregl.MapLayerEventType, handler: (eventArg?: any) => void) {
        const id = (
            this.properties.nativeHandlers.length > 0
                ? this.properties.nativeHandlers[this.properties.nativeHandlers.length - 1].id + 1
                : 0
        );

        this.properties.nativeHandlers.push({ handler: handler, id: id, type: type });
        this.map.on(type, handler);
    }

    removeNativeHandler(id: any) {
        const correspondingHandler = this.properties.nativeHandlers.find((item) => item.id === id);
        if (!correspondingHandler) throw new Error(`Cannot find native handler with id ${id}`);
        this.map.off(correspondingHandler.type, correspondingHandler.handler);
    }
}

export default MapLibreGLBackend;
