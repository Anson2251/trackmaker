/// <reference path="../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
// import { bingMapsKey } from "@/script/credentials";
import { bingMapsKey } from "@/configs";
import bingMapsPluginTemplete from "./plugins/base";

export interface MyBingMapOptions {
    centre?: Microsoft.Maps.Location,
    type?: Microsoft.Maps.MapTypeId,
    zoom?: number,
    credentials?: string,
    customizedTouchpadBehavior?: boolean,
    liteMode?: boolean,
    enableInertia?: boolean,
    showDashboard?: boolean,
    forceHidpi?: boolean,
    maxZoom?: number,
    minZoom?: number,
}

export class bingMaps {
    private zoom: number = 5;
    private viewCentre: Microsoft.Maps.Location = new Microsoft.Maps.Location(0, 0)
    private centre: Microsoft.Maps.Location = new Microsoft.Maps.Location(0, 0)
    private readonly credentials: string;
    private mapType: Microsoft.Maps.MapTypeId;
    container: HTMLElement;
    map: Microsoft.Maps.Map;
    private eventHandlers: { id: number, type: string, handler: (eventArg?: any) => void }[] = [];
    private maxZoom: number = 20;
    private minZoom: number = 3;
    private centrePinID: number | undefined;
    readonly liteModeForceHiDpi?: boolean;
    plugins: any = {};
    readonly supportMapTypes: Microsoft.Maps.MapTypeId[];
    constructor(container: HTMLElement, options: MyBingMapOptions, plugins: (typeof bingMapsPluginTemplete)[] = []) {
        this.container = container;
        this.mapType = options.type || Microsoft.Maps.MapTypeId.road;
        this.centre = options.centre || this.centre;
        this.viewCentre = this.centre.clone();
        this.zoom = options.zoom || this.zoom;
        this.maxZoom = options.maxZoom || this.maxZoom;
        this.minZoom = options.minZoom || this.minZoom;
        this.credentials = options.credentials || bingMapsKey;

        if (options.liteMode && window.devicePixelRatio > 1 && options.forceHidpi) {
            if (container.id) this.liteModeForceHiDpi = true;
            else console.warn("The forceHidpi option is only available when the container has an id");
        }
        else {
            if(options.forceHidpi) console.warn("The forceHidpi option is only available in lite mode and when the screen has a devicePixelRatio > 1");
        }

        this.supportMapTypes = [Microsoft.Maps.MapTypeId.road, Microsoft.Maps.MapTypeId.canvasDark, Microsoft.Maps.MapTypeId.canvasLight, Microsoft.Maps.MapTypeId.grayscale];
        if(!this.supportMapTypes.includes(this.mapType)) {
            console.warn(`The map type ${this.mapType} is not supported. Fallback to the default map type ${this.supportMapTypes[0]}`);
            this.mapType = this.supportMapTypes[0];
        }

        this.map = new Microsoft.Maps.Map(container, {
            credentials: this.credentials,
            center: this.viewCentre,
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

        if (this.plugins.pushPinLayer) {
            this.centrePinID = this.plugins.pushPinLayer.add(this.viewCentre, { title: "You are here" });
        }

        this.addEventHandler('viewchangeend', () => { // synchronize zoom and centre from map
            this.zoom = this.map.getZoom();
            this.viewCentre = this.map.getCenter();
            this.onMapViewChanged(); // should be optimized because it is only use to call the other event handler, not the one to synchronize the map view
        }, true);
        this.addEventHandler("viewchangeend", () => { // synchronize zoom and centre to map
            this.map.setView({ zoom: this.zoom, center: this.viewCentre })
        }, false);

        this.loadPlugins(plugins);
    }

    setCentre(centre: Microsoft.Maps.Location, updateMapView: boolean = true) {
        this.centre = centre.clone();

        if (this.plugins.pushPinLayer) {
            this.plugins.pushPinLayer.remove(this.centrePinID);
            this.centrePinID = this.plugins.pushPinLayer.add(this.centre, { title: "You are here" });
        }
        if (updateMapView) this.map.setView({ center: this.centre })
    }

    getCentre() {
        return this.centre;
    }

    setViewCentre(viewCentre: Microsoft.Maps.Location, updateMapView: boolean = true) {
        this.viewCentre = viewCentre.clone();
        if (updateMapView) {
            this.onMapViewChanged();
        }
    }

    getViewCentre() {
        return this.viewCentre;
    }

    loadPlugins(plugins: (typeof bingMapsPluginTemplete)[]) {
        let success = true;
        const status: boolean[] = [];
        plugins.forEach((plugin) => {
            const mountSuccess = (() => {
                try {
                    return (new plugin(this)).mount()
                }
                catch (e) {
                    console.error(`Fail to initialize plugin: ${plugin.name}`, e);
                    return false;
                }
            })();
            status.push(mountSuccess);
            success = success && mountSuccess;
        }); // mount plugins
        if (!success) {
            console.warn("Failed to load certain plugins for bing map");
            console.table(plugins.map((p, i) => new Object({ Plugin: p.name, Status: status[i] })), ["Plugin", "Status"]);
        }
        return success;
    }

    setZoom(zoom: number, updateMapView: boolean = true) {
        if (!this.verifyZoom(zoom)) {
            console.warn(`Invalid zoom value. Must be between ${this.minZoom} and ${this.maxZoom} inclusive`);
            return false;
        }
        this.zoom = zoom;
        if (updateMapView) this.onMapViewChanged();
        return true;
    }

    getZoom() {
        return this.zoom;
    }

    setView(view: Microsoft.Maps.IViewOptions) {
        this.setZoom(view.zoom || this.zoom, false);
        this.setViewCentre(view.center || this.viewCentre, false);

        this.onMapViewChanged();
    }

    gotoCentre() {
        this.setViewCentre(this.centre);
    }

    zoomIn() {
        const valid = this.verifyZoom(this.zoom + 1);
        if (valid) {
            this.zoom += 1;
            this.onMapViewChanged();
            return true;
        }
        return false;
    }

    zoomOut() {
        const valid = this.verifyZoom(this.zoom - 1);
        if (valid) {
            this.zoom -= 1;
            this.onMapViewChanged();
            return true;
        }
        return false;
    }

    getZoomRange() {
        return { min: this.minZoom, max: this.maxZoom };
    }

    addEventHandler(type: string, handler: (map: bingMaps) => void, native: false): number
    addEventHandler(type: string, handler: (eventArg?: any) => void, native: true): Microsoft.Maps.IHandlerId
    addEventHandler(type: string, handler: (eventArg?: any) => void, native: boolean = false): number | Microsoft.Maps.IHandlerId {
        let eventID: number | Microsoft.Maps.IHandlerId;
        if (!native) eventID = this.addEventHandlersCustomized(type, handler);
        else eventID = Microsoft.Maps.Events.addHandler(this.map, type, handler);
        return eventID;
    }

    removeEventHandler(id: number, native: false): void
    removeEventHandler(id: Microsoft.Maps.IHandlerId, native: true): void
    removeEventHandler(id: number | Microsoft.Maps.IHandlerId, native: boolean = false) {
        if (!native) this.removeEventHandlersCustomized(id as number);
        else Microsoft.Maps.Events.removeHandler(id as Microsoft.Maps.IHandlerId);
    }

    private addEventHandlersCustomized(type: string, handler: (eventArg?: any) => void) {
        const id = this.eventHandlers.length > 0 ? this.eventHandlers[this.eventHandlers.length - 1].id + 1 : 0;
        this.eventHandlers.push({ id: id, type: type, handler: handler })
        return id;
    }

    private removeEventHandlersCustomized(id: number): boolean {
        const index = this.eventHandlers.findIndex((handler) => handler.id === id);
        if (index !== -1) {
            this.eventHandlers.splice(index, 1);
            return true;
        }
        return false;
    }

    private onMapViewChanged() {
        this.eventHandlers.forEach((handler) => {
            if (handler.type === "viewchangeend") handler.handler(this);
        })
    }

    private verifyZoom(zoom: number): boolean {
        return zoom >= this.minZoom && zoom <= this.maxZoom;
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


export default bingMaps;