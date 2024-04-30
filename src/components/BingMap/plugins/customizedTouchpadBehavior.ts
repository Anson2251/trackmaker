import inputDevicePreferences from "@/script/inputDevicePreferences";
import bingMapPlugin from "./base";
import bingMaps from "../map";

export class bingMapCustomizedTouchpadBehavior extends bingMapPlugin {
    map: bingMaps;
    space = "customizedTouchpadBehavior";
    constructor(parentMap: bingMaps){
        super(parentMap);
        this.map = parentMap;

        parentMap.map.setOptions({ disableScrollWheelZoom: true });
        useCustomizedTouchpadBehavior(this.map, (location: Microsoft.Maps.Location, zoom: number) => {
            this.map.setView({ center: location, zoom: zoom });
        })
    }
}

/**
 * Attaches customized touchpad behavior to a specified container element.
 *
 * @param containerID - The ID of the container element.
 * @param map - The bingMaps object representing the map.
 * @param onMove - The callback function to be called when the map is moved.
 */
export function useCustomizedTouchpadBehavior(map: bingMaps, onMove: (location: Microsoft.Maps.Location, zoom: number) => void) {
    // translate factor for each zoom level
    const zoomFactor = [5000, 2500, 1000, 500, 250, 200, 100, 50, 25, 10, 5, 2, 1, 0.4, 0.25, 0.20, 0.15, 0.12, 0.05, 0.025, 0.01]
    
    const behaviour = (e: WheelEvent) => {
        inputDevicePreferences.updateDeivceType(e);
        e.preventDefault();

        const zoom = map.getZoom();
        const factor = 5000 / zoomFactor[Math.round(zoom)] || 1;
        const location = map.getViewCentre();

        if (!e.ctrlKey) { // move the map
            location.latitude = Math.max(-90, Math.min(90, (location.latitude - e.deltaY / factor))); // limit latitude to -90 to 90
            location.longitude = (location.longitude + e.deltaX / factor + 180) % 360 - 180; // limit longitude to -180 to 180
            onMove(location, zoom);
        } else { // scale the map
            const newZoom = Math.min(Math.max(zoom - e.deltaY * 0.05, map.getZoomRange().min), map.getZoomRange().max); // limit zoom to 3-20 inclusive
            onMove(location, newZoom);
        }
    }
    map.container.addEventListener("wheel", behaviour, { passive: false })
}

export default bingMapCustomizedTouchpadBehavior;
