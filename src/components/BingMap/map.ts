/// <reference path="../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
// import { bingMapsKey } from "@/script/credentials";
import { bingMapsKey } from "@/config";
import bingMapPlugin from "./plugins/base";
import inputDevicePreferences from "@/script/inputDevicePreferences";

export interface MyBingMapOptions {
    centre?: Microsoft.Maps.Location,
    type?: Microsoft.Maps.MapTypeId,
    zoom?: number,
    credentials?: string,
    customizedTouchpadBehavior?: boolean,
    liteMode?: boolean,
    enableInertia?: boolean,
    showDashboard?: boolean,
    forceHidpi?: boolean // only for liteMode
    maxZoom?: number,
    minZoom?: number
}

export class bingMaps {
    private zoom: number = 5;
    private viewCentre: Microsoft.Maps.Location = new Microsoft.Maps.Location(0, 0)
    private centre: Microsoft.Maps.Location = new Microsoft.Maps.Location(0, 0)
    private credentials: string = bingMapsKey;
    private mapType: Microsoft.Maps.MapTypeId = Microsoft.Maps.MapTypeId.road;
    container: HTMLElement;
    map: Microsoft.Maps.Map;
    private eventHandlers: { id: number, type: string, handler: (eventArg?: any) => void }[] = [];
    private maxZoom: number = 20;
    private minZoom: number = 3;
    //pushPinLayer: bingMapsPushPins;
    private centrePinID: number | undefined;
    plugins: any = {};
    constructor( container: HTMLElement, options: MyBingMapOptions, plugins: (typeof bingMapPlugin)[] = [] ) {
        this.container = container;
        this.mapType = options.type || this.mapType;
        this.centre = options.centre || this.centre;
        this.viewCentre = this.centre.clone();
        this.zoom = options.zoom || this.zoom;
        this.maxZoom = options.maxZoom || this.maxZoom;
        this.minZoom = options.minZoom || this.minZoom;

        if(options.liteMode && window.devicePixelRatio > 1 && options.forceHidpi) {
            if(container.id){
                this.enableLiteForceHiDPI(container.id);
            } else {
                console.warn("The forceHidpi option is only available when the container has an id");
            }
        }

        this.map = new Microsoft.Maps.Map(container, {
            credentials: options.credentials || this.credentials,
            center: this.viewCentre,
            zoom: this.zoom,
            enableInertia: options.enableInertia === undefined ? true : options.enableInertia,
            liteMode: options.liteMode === undefined ? false : options.liteMode,
            showDashboard: options.showDashboard === undefined ? true : options.showDashboard,
            supportedMapTypes: [Microsoft.Maps.MapTypeId.road, Microsoft.Maps.MapTypeId.canvasDark, Microsoft.Maps.MapTypeId.canvasLight, Microsoft.Maps.MapTypeId.grayscale],
            maxZoom: this.maxZoom,
            minZoom: this.minZoom,
            enableClickableLogo: false
        });

        this.map.setMapType(this.mapType);
        if(this.plugins.pushPinLayer){
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

        const loadPluginsSuccess = this.loadPlugins(plugins);
        if(!loadPluginsSuccess) console.warn("Failed to load certain plugins for bing map");

        //this.addEventHandler()
        if (options.customizedTouchpadBehavior === undefined ? true : options.customizedTouchpadBehavior) {
            useCustomizedTouchpadBehavior(container.getAttribute("id")!, this, (location, newZoom) => {
                this.setView({ center: location, zoom: newZoom })
            });
        }
    }

    setCentre(centre: Microsoft.Maps.Location, updateMapView: boolean = true) {
        this.centre = centre.clone();

        if(this.plugins.pushPinLayer){
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

    loadPlugins(plugins:  (typeof bingMapPlugin)[]){
        let success = true;
        plugins.forEach((plugin) => {
            const mountSuccess = (new plugin(this)).mount()
            if(!mountSuccess) console.log("Failed to mount plugin " + plugin);
            success = success && mountSuccess;
        }); // mount plugins
        return success;
    }

    setZoom(zoom: number, updateMapView: boolean = true) {
        if (!this.verifyZoom(zoom)) {
            console.warn("Invalid zoom value. Must be between 0 and 15 inclusive");
            zoom = 15;
            return false;
        }
        this.zoom = zoom;
        if (updateMapView) {
            this.onMapViewChanged();
        }
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
        if(valid){
            this.zoom += 1;
            this.onMapViewChanged();
        }
    }

    zoomOut() {
        const valid = this.verifyZoom(this.zoom - 1);
        if(valid){
            this.zoom -= 1;
            this.onMapViewChanged();
        }
    }

    getZoomRange(){
        return {min: this.minZoom, max: this.maxZoom};
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

    private enableLiteForceHiDPI(containerID: string): string {
        const styleElement = document.createElement("style");
        styleElement.id = `${containerID}-force-hidpi-style-support`;
        styleElement.innerHTML = `
            #${containerID} > div {
                transform: scale(${1 / window.devicePixelRatio}) !important;
                transform-origin: top left !important;
                width: ${window.devicePixelRatio * 100}% !important;
                height: ${window.devicePixelRatio * 100}% !important;
            }
            #${containerID} * {
                border-radius: ${8 * window.devicePixelRatio}px !important;
            }
        `;
        document.head.appendChild(styleElement);
        return styleElement.id;
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
export function initMapScript(timeout = 10000, scriptURL?: string): Promise<void> {
    // <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol'></script>
    return new Promise((resolve, reject) => {
        if ((window as any).LoadedBingMapScripts) resolve();
        else (window as any).LoadedBingMapScripts = false;
        const callbackName = "onBingMapLoad";
        const mkt = "zh-CN"


        if (!document.getElementById("bingMapScript")) { // if the script is not already loaded (not inserted into the document head)
            const bingMapURL = scriptURL || `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}&setMkt=${mkt}`;
            // set the callback name to remove the loading status
            const script = document.createElement('script'); // load script
            script.type = 'text/javascript';
            script.src = bingMapURL;
            script.async = true;
            script.id = "bingMapScript";
            document.head.appendChild(script);
        }

        let timer = 0;
        const waitReady = setInterval(() => { // in case of timeout
            timer += 100;
            if (timer >= timeout) {
                clearInterval(waitReady);
                reject("Loading bing map timeout");
            }
            if ((window as any).LoadedBingMapScripts) {
                clearInterval(waitReady);
                resolve();
            }
        }, 100);

        if (!(window as any)[callbackName]) {
            (window as any)[callbackName] = () => { // success to load the script
                clearInterval(waitReady);
                (window as any).LoadedBingMapScripts = true;
                (window as any)[callbackName] = null;
                resolve();
            }
        }
    })
}

/**
 * Attaches customized touchpad behavior to a specified container element.
 *
 * @param containerID - The ID of the container element.
 * @param map - The bingMaps object representing the map.
 * @param onMove - The callback function to be called when the map is moved.
 */
export function useCustomizedTouchpadBehavior(containerID: string, map: bingMaps, onMove: (location: Microsoft.Maps.Location, zoom: number) => void) {
    const container = document.getElementById(containerID);
    if (container === null) return;
    map.map.setOptions({ disableScrollWheelZoom: true });

    // translate factor for each zoom level
    const zoomFactor = [5000, 2500, 1000, 500, 250, 200, 100, 50, 25, 10, 5, 2, 1, 0.4, 0.25, 0.20, 0.15, 0.12, 0.05, 0.025, 0.01]
    const behaviour = (e: WheelEvent) => {
        inputDevicePreferences.updateDeivceType(e);
        e.preventDefault();

        const zoom = map.getZoom();
        const factor = 5000 / zoomFactor[Math.round(zoom)];
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
    container.addEventListener("wheel", behaviour, { passive: false })
}

export default bingMaps;