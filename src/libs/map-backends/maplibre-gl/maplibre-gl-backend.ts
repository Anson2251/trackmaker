import MapBackend, { allocateMapID} from "@/libs/map-backends/backend";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as GeoLocation from "@/utils/geolocation";
import type { DefaultOptionTypes } from "@/libs/map-backends/backend";

export const allocateBingMapID = allocateMapID;

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
    constructor(container: HTMLElement, options: MapLibreGLBackendOptionTypes) {
        super(container, options, ["pitch", "bearing"], []);
    }

    initialiseMap(options: MapLibreGLBackendOptionTypes): maplibregl.Map {
        const map = new maplibregl.Map({
            container: this.container, // container id
            style: `${options.type}?key=${options.credentials}`, // style URL
            center: GeoLocation.Conversion.convertLocationPoint(this.getCentre(), GeoLocation.PointTypes.LNGLAT), // starting position [lng, lat]
            zoom: this.zoom, // starting zoom
            maxZoom: this.getZoomRange().max,
            minZoom: this.getZoomRange().min,
        });

        this.properties.nativeHandlers = [];

        return map;
    }

    startSynchroniseMap(): void {
        this.addEventHandler('viewchangeend', () => {
            this.map.setCenter(GeoLocation.Conversion.convertLocationPoint(this.getCentre(), GeoLocation.PointTypes.LNGLAT));
            this.map.setZoom(this.getZoom());
            this.map.setBearing(this.getBearing());
            this.map.setPitch(this.getPitch());
        }, false);

        this.addEventHandler('pitchend', () => {
            this.setPitch(this.map.getPitch(), true);
        }, true);
        this.addEventHandler('zoomend', () => {
            this.setZoom(this.map.getZoom(), false);
        }, true);
        this.addEventHandler('moveend', () => {
            this.setCentre(GeoLocation.Conversion.convertLocationPoint(this.map.getCenter().toArray(), GeoLocation.PointTypes.GEOGRAPHIC), true);
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
