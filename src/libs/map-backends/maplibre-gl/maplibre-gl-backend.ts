import MapBackend from "@/libs/map-backends/backend";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as GeoLocation from "@/utils/geolocation";
import type {DefaultOptionTypes} from "@/libs/map-backends/backend";

export interface MapLibreGLBackendOptionTypes extends DefaultOptionTypes<string> {
    style: string,
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
    constructor(container: HTMLElement, options: MapLibreGLBackendOptionTypes){
        super(container, options, []);
    }

    initialiseMap(options: MapLibreGLBackendOptionTypes): maplibregl.Map {
        const map = new maplibregl.Map({
            container: this.container, // container id
            style: options.style, // style URL
            center: GeoLocation.Conversion.geographicPoint2LngLatPoint(this.centre), // starting position [lng, lat]
            zoom: this.zoom // starting zoom
        });

        return map;
    }

    startSynchroniseMap(): void {
        // this.addNativeHandler(type, handler)
    }

    addNativeHandler(type: keyof maplibregl.MapLayerEventType, handler: (eventArg?: any) => void) {
        const id = (
            this.properties.nativeHandlers.length > 0
                ? this.properties.nativeHandlers[this.properties.nativeHandlers.length - 1].id + 1
                : 0
        );

        this.properties.nativeHandlers.push({handler: handler, id: id, type: type})
        this.map.on(type, handler)
    }

    removeNativeHandler(id: any) {
        const correspondingHandler = this.properties.nativeHandlers.find((item) => item.id === id);
        if (!correspondingHandler) throw new Error(`Cannot find native handler with id ${id}`);
        this.map.off(correspondingHandler.type, correspondingHandler.handler);
    }
}

export default MapLibreGLBackend;
