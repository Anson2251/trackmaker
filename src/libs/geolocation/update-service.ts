/* eslint-disable no-async-promise-executor */

import type { GeographicPointType, GeolocationBackend } from "./types";
import { LocationResponseErrorEnum } from "./types";
import BrowserGeolocationBackend from "./backends/browser-gps";
import IPGeolocationBackend from "./backends/ip";
import { injectTauriGeolocationProvider } from "./tauri-polyfill";
import { isEqual } from "lodash-es";

type HandlerItemType = {
    id: number
    callback: (geoLocation: GeographicPointType, ...any: unknown[]) => void
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

function triggerHandler(type: HandlerItemType['type'], presentLocation: GeographicPointType, ...args: unknown[]) {
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
    private presentLocation: GeographicPointType = { latitude: 0, longitude: 0 };
    private serviceRunning = false;
    built = false
    backend: GeolocationBackend | undefined;
    usingGPS: boolean = false;
    watchHandler: number = -1;

    async build(promptCallback: ((status: PermissionState) => Promise<boolean | void>) = async () => { }) {
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
            return;
        }

        const useIpGeolocationBackend = () => {
            this.backend = new IPGeolocationBackend();
            console.log("Using IP Geolocation backend");
            this.built = true;
        };

        const handlePermissionState = async (state: PermissionState) => {
            console.log(`Permission ${state}`);

            switch (state) {
                case 'granted': {
                    // Try to get current position to verify GPS functionality
                    try {
                        await gps.getCurrentPosition();
                        this.backend = gps;
                        console.log("Using GPS Geolocation backend");
                        this.usingGPS = true;
                        this.built = true;
                    } catch (error) {
                        const err = error as { code?: number; message?: string };
                        alert("GPS permission granted but current position retrieval failed. Falling back to IP geolocation.\nError Message: " + (err.message || 'Unknown error'));
                        console.error("GPS backend initialization failed:", err.message);

                        // Handle iOS HTTPS requirement error specifically
                        if (err.code === LocationResponseErrorEnum.IOS_HTTPS_REQUIRED) {
                            console.error("iOS requires HTTPS for geolocation. Falling back to IP geolocation.");
                        }

                        useIpGeolocationBackend();
                    }
                    break;
                }

                case 'prompt': {
                    console.log("GPS permission prompt required, prompting user");
                    const grantedState = await promptCallback(state);
                    if (grantedState) {
                        // User granted permission through prompt, try GPS
                        return handlePermissionState('granted');
                    } else {
                        // User denied or cancelled prompt, check actual status
                        const actualStatus = await gps.getPermissionStatus();
                        if (actualStatus === 'granted') {
                            return handlePermissionState('granted');
                        } else {
                            useIpGeolocationBackend();
                        }
                    }
                    break;
                }

                case 'denied': {
                    console.log("GPS permission denied, using IP geolocation");
                    useIpGeolocationBackend();
                    break;
                }

                default:
                    console.log("Unknown permission state, using IP geolocation");
                    useIpGeolocationBackend();
                    break;
            }
        };

        // Check if permissions API is supported
        if ('permissions' in navigator) {
            try {
                const result = await navigator.permissions.query({ name: 'geolocation' });

                // Handle initial permission state
                await handlePermissionState(result.state);

                // Add listener for permission changes
                result.addEventListener('change', async () => {
                    console.log("Permission state changed to:", result.state);
                    if (result.state === 'granted') {
                        // Re-initialize with GPS if permission granted
                        await handlePermissionState('granted');
                    } else if (result.state === 'denied') {
                        // Switch to IP geolocation
                        useIpGeolocationBackend();
                    }
                });

            } catch (error) {
                console.warn("Permissions API query failed, falling back to getPermissionStatus:", error);
                // Fallback to legacy permission checking
                const granted = await gps.getPermissionStatus();
                await handlePermissionState(granted as PermissionState);
            }
        } else {
            // Legacy browser support
            console.warn("Permissions API not supported, using legacy permission checking");
            const granted = await gps.getPermissionStatus();
            await handlePermissionState(granted as PermissionState);
        }
    }

    /** Get the current geographic location */
    get present() {
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
        } catch (error: unknown) {
            const res = error as GeolocationPositionError;
            console.error("GPS refresh failed:", res.message);

            // Automatic fallback to IP geolocation on timeout or iOS HTTPS error
            if (res.code === LocationResponseErrorEnum.TIMEOUT ||
                res.code === LocationResponseErrorEnum.IOS_HTTPS_REQUIRED) {
                console.warn("Falling back to IP geolocation");
                this.backend = new IPGeolocationBackend();
                return this.refresh();
            }

            throw error;
        }
    }

    /** Whether the updater service is running */
    get isStarted() {
        return this.serviceRunning
    };

    /** Start the updater service */
    start() {
        if (!this.backend) throw new Error("Backend not initialised");
        return new Promise(async (resolve) => {
            if (this.serviceRunning) return resolve(this.watchHandler)


            this.watchHandler = await this.backend!.watchPosition((location) => {
                this.presentLocation = location;
                triggerHandler("change", this.presentLocation);
            });

            this.serviceRunning = true;
            triggerHandler("start", this.presentLocation);
            resolve(this.watchHandler)
        })
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
