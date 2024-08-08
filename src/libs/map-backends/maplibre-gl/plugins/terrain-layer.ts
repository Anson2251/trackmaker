import type { MapPlugin } from "@/libs/map-backends/plugin";
import MapLibreGLBackend from "../maplibre-gl-backend";
import { mapTilerKey } from "@/configs";

export class MapLibreGLPlugin_TerrainLayer implements MapPlugin<MapLibreGLBackend> {
    host: MapLibreGLBackend;
    space: string;
    behaviour: ((e: WheelEvent) => void) | undefined;
    shown = false;
    constructor(parentMap: MapLibreGLBackend) {
        this.host = parentMap;
        this.space = "terrainLayer";
    }

    private initialise() {
        this.host.map.addSource("terrainSource", {
            type: 'raster-dem',
            url: `https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=${mapTilerKey}`,
            tileSize: 256
        });
        this.host.map.addSource("hillshadeSource", {
            type: 'raster-dem',
            url: `https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=${mapTilerKey}`,
            tileSize: 256
        });
        this.host.map.addLayer({
            id: 'hills',
            type: 'hillshade',
            source: 'hillshadeSource',
            layout: { visibility: 'visible' },
            paint: { 'hillshade-shadow-color': '#473B24' },
        }, this.host.getSymbolLayerID());
        this.host.map.getLayer('hills')!.visibility = 'none';
    }

    private show() {
        if(this.shown) return;
        this.shown = true;
        this.host.map.getLayer('hills')!.visibility = 'visible';
        this.host.map.setTerrain({
            source: 'terrainSource',
            exaggeration: 1,
        });
    }

    hide(){
        if(!this.shown) return;
        this.shown = false;
        this.host.map.getLayer('hills')!.visibility = 'none';
        this.host.map.setTerrain({
            source: 'terrainSource',
            exaggeration: 0,
        });
    }

    mount(): Promise<boolean> {
        return new Promise((resolve) => {
            const initialiser = setInterval(() => {
                if (this.host.map.isStyleLoaded()) {
                    this.initialise();
                    const processTerrainLayer = () => {
                        if(this.host.getPitch() > 0) {
                            this.show();
                        }
                        else {
                            this.hide();
                        }
                    };
                    this.host.addEventHandler("pitch", processTerrainLayer, true);
                    this.host.addEventHandler("load", processTerrainLayer, true);
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

export default MapLibreGLPlugin_TerrainLayer;
