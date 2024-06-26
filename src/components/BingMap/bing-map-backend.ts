/// <reference path="../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import MapBackend, {type Options, allocateMapID} from "@/libs/map-backends/backend";
import type { GeographicPoint } from "@/utils/geolocation";
import type {MapPluginConstructor} from "@/libs/map-backends/plugin";

export const allocateBingMapID = allocateMapID;

function geographicPoint2MicrosoftLocation(point: GeographicPoint): Microsoft.Maps.Location {
    return new Microsoft.Maps.Location(point.latitude, point.longitude);
}

export type BingMapOptions = Options<Microsoft.Maps.MapTypeId> & {
    customizedTouchpadBehavior?: boolean,
    liteMode?: boolean,
    enableInertia?: boolean,
    showDashboard?: boolean,
    forceHiDPI?: boolean,
};

export type BingMapBackendType = MapBackend<Microsoft.Maps.Map, BingMapOptions>;

export class BingMapBackend extends MapBackend<Microsoft.Maps.Map, BingMapOptions> {
    // it is more safe to add all the custom properties into this.properties
    constructor(container: HTMLElement, options: BingMapOptions, plugins: MapPluginConstructor<BingMapBackend>[] = []) {
        super(container, options, plugins as unknown as MapPluginConstructor<MapBackend<Microsoft.Maps.Map, BingMapOptions>>[]);
        // for the ugly assertation, I think there is no way around currently to tackle the type error in a more elegant way
    }
    
    initialiseMap(options: BingMapOptions): Microsoft.Maps.Map {
        const map = new Microsoft.Maps.Map(this.container, {
            credentials: this.credentials,
            center: geographicPoint2MicrosoftLocation(this.viewCentre),
            zoom: this.zoom,
            enableInertia: (options.enableInertia === undefined ? true : options.enableInertia),
            liteMode: (options.liteMode === undefined ? false : options.liteMode),
            showDashboard: (options.showDashboard === undefined ? true : options.showDashboard),
            supportedMapTypes: this.supportMapTypes,
            maxZoom: this.maxZoom,
            minZoom: this.minZoom,
            enableClickableLogo: false,
            mapTypeId: this.mapType
        });

        if(options.forceHiDPI) this.properties.liteModeForceHiDPI = true;

        this.addEventHandler("ready", (_) => {
            if (this.plugins.pushPinLayer) {
                this.properties.centrePinID = this.plugins.pushPinLayer.add(geographicPoint2MicrosoftLocation(this.centre), { title: "You are here" });
            }
            console.log("bing map ready");
        }, false);

        return map;
    }

    startSynchroniseMap(): void {
        this.addEventHandler('viewchangeend', () => { // synchronize zoom and centre from map
            this.zoom = this.map.getZoom();
            this.viewCentre = this.map.getCenter();
            this.onMapViewChanged(); // should be optimized because it is only use to call the other event handler, not the one to synchronize the map view
        }, true);
        this.addEventHandler("viewchangeend", () => { // synchronize zoom and centre to map
            this.map.setView({ zoom: this.zoom, center: geographicPoint2MicrosoftLocation(this.viewCentre) });
            this.plugins.pushPinLayer.setLocation(this.properties.centrePinID, geographicPoint2MicrosoftLocation(this.centre));
            // console.log(this.centrePinID, this.centre, this.plugins.pushPinLayer.setLocation)
        }, false);
    }

    addNativeHandler(type: string, handler: (eventArg?: any) => void) {
        Microsoft.Maps.Events.addHandler(this.map, type, handler);
    }

    removeNativeHandler(id: any) {
        Microsoft.Maps.Events.removeHandler(id as Microsoft.Maps.IHandlerId);
    } 
}

/**
 * Initializes the Bing Maps script by appending a script tag to the document head.
 * If the script is already loaded, it resolves immediately.
 *
 * @param [scriptURL] - The URL of the Bing Maps script. Defaults to [https://www.bing.com/api/maps/mapcontrol](https://www.bing.com/api/maps/mapcontrol).
 * @param [timeout=10000] - The maximum time in milliseconds to wait for the script to load. Defaults to 10000.
 * @return A promise that resolves when the Bing Maps script is loaded, or rejects if the timeout is reached.
 */
export async function initMapScript(timeout = 10000, scriptURL = "https://www.bing.com/api/maps/mapcontrol"): Promise<void> {
    if ((window as any).LoadedBingMapScripts) return Promise.resolve();
    else (window as any).LoadedBingMapScripts = false;

    const callbackName = "onBingMapLoad";
    const scriptElementID = "bingMapScript";
    scriptURL = `${scriptURL}${scriptElementID.includes("?") ? "&" : "?"}callback=${callbackName}`;

    const loadScript = new Promise<void>((resolve) => {
        // if the script is not already loaded (not inserted into the document head)
        if (!document.getElementById(scriptElementID)) {
            document.head.appendChild(createBingMapsScriptElement(scriptURL, scriptElementID));
        }

        // set the callback name which will be called by bing maps script
        if (!(window as any)[callbackName]) { // skip it the function is already defined
            (window as any)[callbackName] = () => { // success to load the script
                (window as any).LoadedBingMapScripts = true;
                (window as any)[callbackName] = null;
                resolve();
            }
        }
    });

    const loadingTimeout = new Promise<void>((_, reject) => {
        setTimeout((() => reject("Loading bing map timeout")), timeout);
    });

    return Promise.race([loadScript, loadingTimeout]);
}

function createBingMapsScriptElement(scriptURL: string, scriptElementID: string): HTMLScriptElement {
    // <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol'></script>
    const script = document.createElement('script'); // load script
    script.type = 'text/javascript';
    script.src = scriptURL;
    script.async = true;
    script.id = scriptElementID;
    return script;
}

export default BingMapBackend;
