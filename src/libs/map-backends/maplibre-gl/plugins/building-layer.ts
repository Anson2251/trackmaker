import type { MapPlugin } from "@/libs/map-backends/plugin";
import MapLibreGLBackend from "../maplibre-gl-backend";
import { mapTilerKey } from "@/configs";

export class MapLibreGLPlugin_BuildingLayer implements MapPlugin<MapLibreGLBackend> {
    host: MapLibreGLBackend;
    space: string;
    behaviour: ((e: WheelEvent) => void) | undefined;
    constructor(parentMap: MapLibreGLBackend) {
        this.host = parentMap;
        this.space = "terrainLayer";
    }

    private initialise() {
        this.host.map.on('load', () => {
            // Insert the layer beneath any symbol layer.
            const layers = this.host.map.getStyle().layers;
    
            let labelLayerId;
            for (let i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && (layers[i] as any)!.layout['text-field']!) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }
    
            this.host.map.addSource('maptiler-tiles', {
                url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${mapTilerKey}`,
                type: 'vector',
            });
    
            this.host.map.addLayer(
                {
                    'id': '3d-buildings',
                    'source': 'maptiler-tiles',
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
                },
                labelLayerId
            );
        });
    }

    mount(): Promise<boolean> {
        return new Promise((resolve) => {
            const initialiser = setInterval(() => {
                if (this.host.map.isStyleLoaded()) {
                    this.initialise();
                    clearInterval(initialiser);
                    resolve(true);
                }
            });
        });
    }

    unmount(): boolean {
        this.host.map.removeLayer("hills");
        this.host.map.removeSource("terrainSource");
        this.host.map.removeSource("hillshadeSource");
        return true;
    }
}

export default MapLibreGLPlugin_BuildingLayer;
