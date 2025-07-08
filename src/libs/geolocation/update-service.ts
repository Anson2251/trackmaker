import type { GeographicPointType, GeolocationBackend } from "./types";
import { LocationResponseErrorEnum } from "./types";
import BrowserGeolocationBackend from "./backends/browser-gps";
import IPGeolocationBackend from "./backends/ip";
import { injectTauriGeolocationProvider } from "./tauri-polyfill";
import { isEqual } from "lodash-es";
import PlatformInfo from '@/utils/platform';

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
    built = false
    backend: GeolocationBackend | undefined;
    usingGPS: boolean = false;

    async build(promptCallback: (() => Promise<void>) = async () => { }) {
        const gps = new BrowserGeolocationBackend();

        if (__TAURI_ENVIRONMENT__) {
            try {
                this.backend = gps;
                const method = await injectTauriGeolocationProvider();
                this.usingGPS = method === 'gps';
                console.log("Using Tauri's Geolocation backend", method);
            } catch (error) {
                console.error("Tauri geolocation failed, falling back to IP:", error);
                this.backend = new IPGeolocationBackend();
                console.log("Using IP Geolocation backend");
            }
            this.built = true;
            return
        }

        let granted = await gps.getPermissionStatus();
        if (granted === 'prompt') {
            await promptCallback();
            granted = await gps.getPermissionStatus();
            console.log("Permission changed to", granted);
        }

        if (granted === 'granted') {
            // Try to get current position to verify GPS functionality
            await gps.getCurrentPosition()
                .then(() => {
                    this.backend = gps;
                    console.log("Using GPS Geolocation backend");
                    this.usingGPS = true;
                    this.built = true;
                })
                .catch((error) => {
                    alert("GPS permission granted but current position retrieval failed. Falling back to IP geolocation.\nError Message: " + error.message)
                    console.error("GPS backend initialization failed:", error.message);

                    // Handle iOS HTTPS requirement error specifically
                    if (error.code === LocationResponseErrorEnum.IOS_HTTPS_REQUIRED) {
                        console.error("iOS requires HTTPS for geolocation. Falling back to IP geolocation.");
                    }
                    this.backend = new IPGeolocationBackend();
                    console.log("Using IP Geolocation backend");
                    this.built = true;
                })

            return;
        }

        this.built = true;

    }

    /** Get the current geographic location */
    getPresent() {
        return Object.freeze(this.presentLocation);
    }

    async refresh(): Promise<Readonly<GeographicPointType>> {
        if (!this.built) throw new Error("Geolocation service not built");
        if (!this.backend) throw new Error("Backend not initialised");
        if (!this.serviceRunning) throw new Error("Updater service not running");

        try {
            const newLocation = await this.backend.getCurrentPosition();
            if (isEqual(newLocation, this.presentLocation)) return Object.freeze(newLocation);
            this.presentLocation = newLocation;
            triggerHandler("change", newLocation);
            return Object.freeze(newLocation);
        } catch (error: any) {
            console.error("GPS refresh failed:", error.message);

            // Automatic fallback to IP geolocation on timeout or iOS HTTPS error
            if (error.code === LocationResponseErrorEnum.TIMEOUT ||
                error.code === LocationResponseErrorEnum.IOS_HTTPS_REQUIRED) {
                console.warn("Falling back to IP geolocation");
                this.backend = new IPGeolocationBackend();
                return this.refresh();
            }

            throw error;
        }
    }

    /** Whether the updater service is running */
    isStarted = () => this.serviceRunning;

    /** Start the updater service */
    async start() {
        let handler = -1;
        if (!this.backend) throw new Error("Backend not initialised");

        try {
            this.presentLocation = await this.backend.getCurrentPosition();
        }
        catch (e) {
            console.warn("Fail to get initial location, using default location")
        }

        if (!this.serviceRunning) {
            this.serviceRunning = true;
            handler = await this.backend.watchPosition((location) => {
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
