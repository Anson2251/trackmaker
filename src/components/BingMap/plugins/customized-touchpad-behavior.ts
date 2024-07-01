import inputDevicePreferences from "@/utils/input-device-preferences";
import type {MapPlugin} from "@/libs/map-backends/plugin";
import BingMapBackend from "@/libs/map-backends/bing-maps/bing-map-backend";
import type {GeographicPoint} from "@/utils/geolocation";

function geographicPoint2MicrosoftLocation(point: GeographicPoint): Microsoft.Maps.Location {
    return new Microsoft.Maps.Location(point.latitude, point.longitude);
}

export class BingMapPlugin_CustomizedTouchpadBehavior implements MapPlugin<BingMapBackend>{
    host: BingMapBackend;
    space: string;
    behaviour: ((e: WheelEvent) => void) | undefined;
    constructor(parentMap: BingMapBackend){
        this.host = parentMap;
        this.space = "customizedTouchpadBehavior";
    }

    mount(): boolean {
        this.host.map.setOptions({ disableScrollWheelZoom: true });
        this.behaviour = useCustomizedTouchpadBehavior(this.host, (location: Microsoft.Maps.Location, zoom: number) => {
            this.host.setView({ centre: location, zoom: zoom });
        })
        this.host.container.addEventListener("wheel", this.behaviour, { passive: false })
        return true;
    }
    unmount(): boolean {
        this.host.map.setOptions({ disableScrollWheelZoom: false });
        if(this.behaviour) this.host.container.removeEventListener("wheel", this.behaviour)
        return true;
    }
}

/**
 * Attaches customized touchpad behavior to a specified container element.
 *
 * @param map - The bingMaps object representing the map.
 * @param onMove - The callback function to be called when the map is moved.
 */
export function useCustomizedTouchpadBehavior(map: BingMapBackend, onMove: (location: Microsoft.Maps.Location, zoom: number) => void) {
    // translate factor for each zoom level
    const screenFactor = map.properties.liteModeForceHiDPI ? window.devicePixelRatio : 1;
    const zoomFactor = [5000, 2500, 1000, 500, 250, 200, 100, 50, 25, 10, 5, 2, 1, 0.4, 0.25, 0.20, 0.15, 0.12, 0.05, 0.025, 0.01]

    return (e: WheelEvent) => {
        inputDevicePreferences.updateDeivceType(e);
        e.preventDefault();

        const zoom = map.getZoom();
        const factor = 5000 / zoomFactor[Math.round(zoom)] || 1;
        const location = map.getViewCentre();

        if (!(e.ctrlKey || e.metaKey)) { // move the map
            location.latitude = Math.max(-90, Math.min(90, (location.latitude - e.deltaY * screenFactor / factor))); // limit latitude to -90 to 90
            location.longitude = (location.longitude + e.deltaX * screenFactor / factor + 180) % 360 - 180; // limit longitude to -180 to 180
            onMove(geographicPoint2MicrosoftLocation(location), zoom);
        } else { // scale the map
            const newZoom = Math.min(Math.max(zoom - e.deltaY * 0.05, map.getZoomRange().min), map.getZoomRange().max); // limit zoom to 3-20 inclusive
            onMove(geographicPoint2MicrosoftLocation(location), newZoom);
        }
    };
}

export default BingMapPlugin_CustomizedTouchpadBehavior;
