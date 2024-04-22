/// <reference path="../../../node_modules/@types/bingmaps/index.d.ts" />
import { bingMapsKey } from "@/script/credentials";
import bingMapsPushPins from "./pushPin";

export class bingMaps {
    private zoom: number = 0;
    private viewCentre: Microsoft.Maps.Location = new Microsoft.Maps.Location(0, 0)
    private centre: Microsoft.Maps.Location = new Microsoft.Maps.Location(0, 0)
    private credentials: string = bingMapsKey;
    private mapType: Microsoft.Maps.MapTypeId = Microsoft.Maps.MapTypeId.road;
    container: HTMLElement;
    private map: Microsoft.Maps.Map;
    private eventHandlers: { id: number, type: string, handler: (eventArg?: any) => void }[] = [];
    pushPinLayer: bingMapsPushPins;

    private centrePinID: number;
    constructor(container: HTMLElement, centre?: Microsoft.Maps.Location, type?: Microsoft.Maps.MapTypeId, zoom: number = 0, credentials?: string, customizedTouchpadBehavior: boolean = false) {
        this.container = container;
        this.mapType = type || this.mapType;
        this.centre = centre || this.centre;
        this.zoom = zoom || this.zoom;

        this.map = new Microsoft.Maps.Map(container, {
            credentials: credentials || this.credentials,
            center: centre,
            mapTypeId: this.mapType,
            zoom: this.zoom
        });

        this.pushPinLayer = new bingMapsPushPins(this.map);
        this.centrePinID = this.pushPinLayer.add(this.viewCentre, { title: "You are here" });

        this.addEventHandler('viewchangeend', () => { // synchronize zoom and centre from map
            this.zoom =  this.map.getZoom()
            this.viewCentre = this.map.getCenter();
            this.onMapViewChanged(); // should be optimized because it is only use to call the other event handler, not the one to synchronize the map view
        }, true);
        this.addEventHandler("viewchangeend", () => { // synchronize zoom and centre to map
            this.map.setView({ zoom: Math.round(this.zoom), center: this.viewCentre })
        }, false);

        if(customizedTouchpadBehavior) {
            useCustomizedTouchpadBehavior(container.getAttribute("id")!, this, (location, newZoom) => {
                this.setView({ zoom: newZoom, center: location });
                this.zoom = newZoom;
                this.viewCentre = location;
            });
        }
    }

    getMap() {
        return this.map;
    }

    setMapType(type: Microsoft.Maps.MapTypeId) {
        this.mapType = type;
        this.map.setView({ mapTypeId: type })
    }

    getMapType() {
        return this.mapType;
    }

    setCentre(centre: Microsoft.Maps.Location) {
        this.centre = centre;
        this.pushPinLayer.remove(this.centrePinID);
        this.centrePinID = this.pushPinLayer.add(this.centre, { title: "You are here" });
        this.map.setView({ center: this.centre })
    }

    getCentre() {
        return this.centre;
    }

    setViewCentre(viewCentre: Microsoft.Maps.Location, updateMapView: boolean = true) {
        this.viewCentre = viewCentre;
        if(updateMapView) {
            this.onMapViewChanged();
        }
    }

    getViewCentre() {
        return this.viewCentre;
    }

    setZoom(zoom: number, updateMapView: boolean = true) {
        if (!this.verifyZoom(zoom)) {
            console.warn("Invalid zoom value. Must be between 0 and 15 inclusive");
            zoom = 15;
            return false;
        }
        this.zoom = zoom;
        if(updateMapView) {
            this.onMapViewChanged();
        }
        return true;
    }

    getZoom() {
        return this.zoom;
    }

    setView(view: Microsoft.Maps.IViewOptions){
        this.setZoom(view.zoom || this.zoom, false);
        this.setViewCentre(view.center || this.viewCentre, false);

        this.onMapViewChanged();
    }

    addEventHandler(type: string, handler: (map: bingMaps) => void, native: false): number
    addEventHandler(type: string, handler: (eventArg?: any) => void, native: true): Microsoft.Maps.IHandlerId
    addEventHandler(type: string, handler: (eventArg?: any) => void, native: boolean = false): number | Microsoft.Maps.IHandlerId {
        let eventID: number | Microsoft.Maps.IHandlerId;
        if(!native) eventID = this.addEventHandlersCustomized(type, handler);
        else eventID = Microsoft.Maps.Events.addHandler(this.map, type, handler);
        return eventID;
    }

    removeEventHandler(id: number, native: false): void
    removeEventHandler(id: Microsoft.Maps.IHandlerId, native: true): void
    removeEventHandler(id: number | Microsoft.Maps.IHandlerId, native: boolean = false) {
        if(!native) this.removeEventHandlersCustomized(id as number);
        else Microsoft.Maps.Events.removeHandler(id);
    }

    private addEventHandlersCustomized(type: string, handler: (eventArg?: any) => void) {
        const id = this.eventHandlers.length > 0 ? this.eventHandlers[this.eventHandlers.length - 1].id + 1 : 0;
        this.eventHandlers.push({ id: id, type: type, handler: handler })
        return id;
    }

    private removeEventHandlersCustomized(id: number): boolean{
        const index = this.eventHandlers.findIndex((handler) => handler.id === id);
        if(index !== -1){
            this.eventHandlers.splice(index, 1);
            return true;
        }
        return false;
    }

    private onMapViewChanged(){
        this.eventHandlers.forEach((handler) => {
            if(handler.type === "viewchangeend") handler.handler(this);
        })
    }

    private verifyZoom(zoom: number): boolean {
        return zoom >= 0 && zoom <= 20;
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
export function initMapScript(scriptURL?: string, timeout = 10000): Promise<null> {
    // <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol'></script>
    return new Promise((resolve, reject) => {
        if ((window as any).LoadedBingMapScripts) resolve(null);
        (window as any).LoadedBingMapScripts = false;
        const callbackName = "onBingMapLoad";

        if (!document.getElementById("bingMapScript")) { // if the script is not already loaded (not inserted into the document head)
            const bingMapURL = scriptURL || `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}`;
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
                resolve(null);
            }
        }, 100);

        if (!(window as any)[callbackName]) {
            (window as any)[callbackName] = () => { // success to load the script
                clearInterval(waitReady);
                (window as any).LoadedBingMapScripts = true;
                (window as any)[callbackName] = null;
                resolve(null);
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
    if(container === null) return;

    // translate factor for each zoom level
    const zoomFactor = [5000, 2500, 1000, 500, 250, 200, 100, 50, 25, 10, 5, 2, 1, 0.4, 0.18, 0.15, 0.1, 0.05, 0.025, 0.01]
    container.addEventListener("wheel", (e) => { // for customized zoom behaviors, disabled because of poor compatibility. only works in firefox
        e.preventDefault();

        const zoom = map.getZoom();
        const factor = 5000 / zoomFactor[Math.round(zoom)];
        const location = map.getViewCentre();

        if (!e.ctrlKey) { // move the map
            location.latitude = Math.max(-90, Math.min(90, (location.latitude - e.deltaY / factor))); // limit latitude to -90 to 90
            location.longitude = (location.longitude + e.deltaX / factor + 180) % 360 - 180; // limit longitude to -180 to 180
            onMove(location, zoom);
        } else { // scale the map
            const newZoom = Math.min(Math.max(zoom - e.deltaY * 0.05, 0), 20); // limit zoom to 0-20 inclusive
            onMove(location, newZoom);
        }
    }, { passive: false })

    // prevent default behavior of touchpad interaction
    document.querySelector(`#${containerID} > .MicrosoftMap`)?.addEventListener("wheel", (e) => {
        e.preventDefault();
    })
}

export default bingMaps;