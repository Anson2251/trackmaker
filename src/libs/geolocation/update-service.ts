import type { GeographicPointType, GeolocationBackend } from "./types";
import BrowserGeolocationBackend from "./backends/browser-gps";
import IPGeolocationBackend from "./backends/ip";
import { injectTauriGeolocationProvider } from "./tauri-polyfill";

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

function triggerHandler(type: HandlerItemType['type'], presentLocation: GeographicPointType, ...args: any[]) {
    handlers
        .filter((handler) => handler.type === type && !(handler.once && handler.triggered))
        .forEach((handler) => {
            handler.triggered = true;
            handler.callback(Object.freeze(presentLocation), ...args);
        });
}

function removeHandler(id: number) {
    handlers.splice(handlers.findIndex((handler) => handler.id === id), 1);
}

export class UpdateService {
    presentLocation: GeographicPointType = { latitude: 0, longitude: 0 };
    serviceRunning = false;
    initialised = false;
    built = false
    backend: GeolocationBackend | undefined;

    async build(promptCallback: (() => Promise<void>) = async () => { }) {
        const gps = new BrowserGeolocationBackend();
        let granted = await gps.getPermissionStatus();
        if (granted === 'prompt') {
            await promptCallback();
            granted = await gps.getPermissionStatus();
            console.log("Permission changed to", granted)
        }

        let gpsAvailable = await (new Promise<boolean>((resolve) => navigator.geolocation.getCurrentPosition(() => resolve(true), () => resolve(false), { timeout: 5000 })));

        if (granted === 'granted' && gpsAvailable) {
            this.backend = gps;
            if (__TAURI_ENVIRONMENT__) injectTauriGeolocationProvider();
            console.log("Using GPS Geolocation backend");
        }
        else {
            if (granted === 'granted') console.warn("GPS not available, or getting location timed out. Falling back to using IP Geolocation backend");
            console.log("Using IP Geolocation backend");
            this.backend = new IPGeolocationBackend();
        }

        this.built = true;
    }

    /** Get the current geographic location */
    getPresent() {
        return Object.freeze(this.presentLocation);
    }

    /** Whether the updater service is running */
    isStarted = () => this.serviceRunning;

    /** Whether the default value in the worker has been overwritten */
    isInitialised = () => this.initialised;

    /** Start the updater service */
    async start() {
        let handler = -1;
        if (!this.backend) throw new Error("Backend not initialised");

        this.presentLocation = await this.backend.getCurrentPosition();

        if (!this.serviceRunning) {
            this.serviceRunning = true;
            handler = await this.backend.watchPosition((location) => {
                this.initialised = true;
                this.presentLocation = location;
                triggerHandler("change", this.presentLocation);
            });
        }
        
        triggerHandler("start", this.presentLocation);

        return handler;
    }

    /** Stop the updater service */
    stop(handler: number) {
        if (!this.backend) throw new Error("Backend not initialised")
        this.serviceRunning = false;
        this.backend.clearWatch(handler);
    }

    /** Add a handler to the service. It will be triggered on "change" */
    addListener = (callback: (location: GeographicPointType) => void) => addLocationHandler("change", callback);

    addHandler = (type: HandlerItemType['type'], callback: HandlerItemType['callback'], once: boolean) => addLocationHandler(type, callback, once);

    /** Remove a handler from the service 
     * @param {number} id - The ID of the handler to remove
    */
    removeListener = (id: number) => removeHandler(id);
}
