import type { GeographicPointType } from "./definitions";
import { cloneDeep } from "lodash-es";
import BrowserGeolocationBackend from "./backends/browser-gps";
import TauriGeolocationBackend from "./backends/tauri-gps";
import IPGeolocationBackend from "./backends/ip";

type HandlerItemType = {
    id: number
    callback: (geoLocation: GeographicPointType, ...any: any[]) => void
    type: "change" | "error" | "start" | "stop"
    triggered: boolean
    once: boolean
}

const handlers: HandlerItemType[] = [];

function addLocationHandler(type: HandlerItemType['type'], callback: HandlerItemType['callback'], once: boolean = false) {
    const handler: HandlerItemType = {
        id: (handlers.length > 0 ? handlers[handlers.length - 1].id : 0) + 1,
        type,
        callback,
        triggered: false,
        once,
    };
    handlers.push(handler);
    return handler.id;
}

function triggerHandler(type: HandlerItemType['type'], ...args: any[]) {
    handlers
        .filter((handler) => handler.type === type && !(handler.once && handler.triggered))
        .forEach((handler) => {
            handler.triggered = true;
            handler.callback(cloneDeep(presentLocation), ...args);
        });
}

function removeHandler(id: number) {
    handlers.splice(handlers.findIndex((handler) => handler.id === id), 1);
}

let presentLocation: GeographicPointType = { latitude: 0, longitude: 0 };
let serviceRunning = false;
let initialised = false;

let currentBackend: "ip" | "browser" | "tauri" = "ip";

export const backends = {
    ip: IPGeolocationBackend,
    browser: BrowserGeolocationBackend,
    tauri: TauriGeolocationBackend
};

export namespace UpdateService {
    /** Get the current geographic location */
    export function getPresent() {
        return cloneDeep(presentLocation);
    }

    /** Whether the updater service is running */
    export const isStarted = () => serviceRunning;

    /** Whether the default value in the worker has been overwritten */
    export const isInitialised = () => initialised;

    export async function decideBackend() {
        if(__TAURI_ENVIRONMENT__){
            return await TauriGeolocationBackend.isCurrentlyAvailable() ? "tauri" : "ip";
        }
        else {
            return await BrowserGeolocationBackend.isCurrentlyAvailable() ? "browser" : "ip";
        }
    }

    /** Start the updater service */
    export async function start(){
        currentBackend = await decideBackend();
        let handler = -1;

        if(!serviceRunning){
            serviceRunning = true;
            handler = await backends[currentBackend].watchPosition((location) => {
                initialised = true;
                presentLocation = location;
                triggerHandler("change");
            });
        }

        return handler;
    }

    /** Stop the updater service */
    export function stop(handler: number){
        serviceRunning = false;
        backends[currentBackend].clearWatch(handler);
    }

    /** Add a handler to the service. It will be triggered on "change" */
    export const addListener = (callback: (location: GeographicPointType) => void) => addLocationHandler("change", callback);

    export const addHandler = (type: HandlerItemType['type'], callback: HandlerItemType['callback'], once: boolean) => addLocationHandler(type, callback, once);
    
    /** Remove a handler from the service 
     * @param {number} id - The ID of the handler to remove
    */
    export const removeListener = (id: number) => removeHandler(id);
}
