import type { MapPlugin } from "@/libs/map-backends/plugin";
import MapLibreGLBackend from "../maplibre-gl-backend";
import { mapTilerKey } from "@/configs";

export class MapLibreGLPlugin_TerrainLayer implements MapPlugin<MapLibreGLBackend> {
    host: MapLibreGLBackend;
    space: string;
    behaviour: ((e: WheelEvent) => void) | undefined;
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
            paint: { 'hillshade-shadow-color': '#473B24' }
        });
        this.host.map.setTerrain({
            source: 'terrainSource',
            exaggeration: 1
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

export default MapLibreGLPlugin_TerrainLayer;
