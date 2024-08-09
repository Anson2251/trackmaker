import type { MapPlugin } from "@/libs/map-backends/plugin";
import MapLibreGLBackend from "../maplibre-gl-backend";
import { mapTilerKey } from "@/configs";

export class MapLibreGLPlugin_BuildingLayer implements MapPlugin<MapLibreGLBackend> {
    host: MapLibreGLBackend;
    space: string;
    behaviour: ((e: WheelEvent) => void) | undefined;
    shown = false;
    constructor(parentMap: MapLibreGLBackend) {
        this.host = parentMap;
        this.space = "terrainLayer";
    }

    private initialise() {
        this.host.map.addSource('maptiler-tiles-building', {
            url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${mapTilerKey}`,
            type: 'vector',
        });
        this.host.map.addLayer({
            'id': '3d-buildings',
            'source': 'maptiler-tiles-building',
            'source-layer': 'building',
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'render_height'], 0, 'lightgray', 200, 'royalblue', 400, 'lightblue'
                ],
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    16,
                    ['get', 'render_height']
                ],
                'fill-extrusion-base': ['case',
                    ['>=', ['get', 'zoom'], 16],
                    ['get', 'render_min_height'], 0
                ]
            }
        }, this.host.getSymbolLayerID());
        // this.host.map.getLayer("3d-buildings")!.visibility = "none";
        this.shown = true;
    }

    show(){
        if(this.shown) return;
        this.shown = true;
        this.host.map.getLayer("3d-buildings")!.visibility = "visible";
    }

    hide(){
        if(!this.shown) return;
        this.shown = false;
        this.host.map.getLayer("3d-buildings")!.visibility = "none";
    }

    mount(): Promise<boolean> {
        console.log("Building layer mounted");
        return new Promise((resolve) => {
            const initialiser = setInterval(() => {
                if (this.host.map.isStyleLoaded()) {
                    this.initialise();
                    const processBuildingLayer = () => {
                        if(this.host.getPitch() > 0) {
                            this.show();
                        }
                        else {
                            this.hide();
                        }
                    };
                    this.host.addEventHandler("pitch", processBuildingLayer, true);
                    setTimeout(processBuildingLayer, 100);
                    clearInterval(initialiser);
                    resolve(true);
                }
            });
        });
    }

    unmount(): boolean {
        this.host.map.removeLayer("3d-buildings");
        this.host.map.removeSource("maptiler-tiles-building");
        return true;
    }
}

export default MapLibreGLPlugin_BuildingLayer;