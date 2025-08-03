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
        console.info("[geolocation] Building geolocation service");
        const gps = new BrowserGeolocationBackend();

        if (__TAURI_ENVIRONMENT__) {
            console.info("[geolocation] Initializing Tauri geolocation backend");
            try {
                this.backend = gps;
                const method = await injectTauriGeolocationProvider();
                this.usingGPS = method === 'gps';
                console.info(`[geolocation] Using Tauri geolocation backend: ${method}`);
            } catch (error) {
                console.error("[geolocation] Tauri geolocation failed, falling back to IP:", error);
                this.backend = new IPGeolocationBackend();
                console.info("[geolocation] Using IP geolocation backend as fallback");
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
            console.info(`[geolocation] GPS permission state: ${state}`);

            switch (state) {
                case 'granted': {
                    console.info("[geolocation] GPS permission granted, testing GPS functionality");
                    // Try to get current position to verify GPS functionality
                    try {
                        await gps.getCurrentPosition();
                        this.backend = gps;
                        console.info("[geolocation] GPS backend initialized successfully");
                        this.usingGPS = true;
                        this.built = true;
                    } catch (error) {
                        const err = error as { code?: number; message?: string };
                        console.error("[geolocation] GPS backend initialization failed:", err.message);

                        // Handle iOS HTTPS requirement error specifically
                        if (err.code === LocationResponseErrorEnum.IOS_HTTPS_REQUIRED) {
                            console.warn("[geolocation] iOS HTTPS required for geolocation, falling back to IP");
                        }

                        useIpGeolocationBackend();
                    }
                    break;
                }

                case 'prompt': {
                    console.info("[geolocation] GPS permission prompt required");
                    const grantedState = await promptCallback(state);
                    if (grantedState) {
                        // User granted permission through prompt, try GPS
                        console.info("[geolocation] User granted permission via prompt");
                        return handlePermissionState('granted');
                    } else {
                        // User denied or cancelled prompt, check actual status
                        console.warn("[geolocation] User denied or cancelled permission prompt");
                        const actualStatus = await gps.getPermissionStatus();
                        if (actualStatus === 'granted') {
                            console.info("[geolocation] Actual permission status is granted");
                            return handlePermissionState('granted');
                        } else {
                            console.info("[geolocation] Falling back to IP geolocation");
                            useIpGeolocationBackend();
                        }
                    }
                    break;
                }

                case 'denied': {
                    console.warn("[geolocation] GPS permission denied, using IP geolocation");
                    useIpGeolocationBackend();
                    break;
                }

                default:
                    console.warn("[geolocation] Unknown permission state, using IP geolocation");
                    useIpGeolocationBackend();
                    break;
            }
        };

        // Check if permissions API is supported
        if ('permissions' in navigator) {
            console.info("[geolocation] Using permissions API for GPS permission");
            try {
                const result = await navigator.permissions.query({ name: 'geolocation' });

                // Handle initial permission state
                await handlePermissionState(result.state);

                // Add listener for permission changes
                result.addEventListener('change', async () => {
                    console.info(`[geolocation] Permission state changed to: ${result.state}`);
                    if (result.state === 'granted') {
                        console.info("[geolocation] Re-initializing with GPS backend");
                        await handlePermissionState('granted');
                    } else if (result.state === 'denied') {
                        console.warn("[geolocation] Permission denied, switching to IP backend");
                        useIpGeolocationBackend();
                    }
                });

            } catch (error) {
                console.warn("[geolocation] Permissions API failed, using legacy checking:", error);
                // Fallback to legacy permission checking
                const granted = await gps.getPermissionStatus();
                await handlePermissionState(granted as PermissionState);
            }
        } else {
            // Legacy browser support
            console.warn("[geolocation] Permissions API not supported, using legacy permission checking");
            const granted = await gps.getPermissionStatus();
            await handlePermissionState(granted as PermissionState);
        }
    }

    /** Get the current geographic location */
    get present() {
        return Object.freeze(this.presentLocation);
    }

    async refresh(): Promise<Readonly<GeographicPointType>> {
        if (!this.built) {
            console.error("[geolocation] Service not built");
            throw new Error("Geolocation service not built");
        }
        if (!this.backend) {
            console.error("[geolocation] Backend not initialised");
            throw new Error("Backend not initialised");
        }
        if (!this.serviceRunning) {
            console.error("[geolocation] Service not running");
            throw new Error("Updater service not running");
        }

        console.info("[geolocation] Refreshing location");
        try {
            const newLocation = await this.backend.getCurrentPosition();
            if (isEqual(newLocation, this.presentLocation)) {
                console.info("[geolocation] Location unchanged");
                return Object.freeze(newLocation);
            }
            this.presentLocation = newLocation;
            console.info("[geolocation] Location updated successfully");
            triggerHandler("change", newLocation);
            return Object.freeze(newLocation);
        } catch (error: unknown) {
            const res = error as GeolocationPositionError;
            console.error("[geolocation] Location refresh failed:", res.message);

            // Automatic fallback to IP geolocation on timeout or iOS HTTPS error
            if (res.code === LocationResponseErrorEnum.TIMEOUT ||
                res.code === LocationResponseErrorEnum.IOS_HTTPS_REQUIRED) {
                console.warn("[geolocation] Falling back to IP geolocation");
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
        if (!this.backend) {
            console.error("[geolocation] Cannot start: backend not initialised");
            throw new Error("Backend not initialised");
        }
        return new Promise(async (resolve) => {
            if (this.serviceRunning) {
                console.info("[geolocation] Service already running");
                return resolve(this.watchHandler);
            }

            console.info("[geolocation] Starting geolocation service");
            this.watchHandler = await this.backend!.watchPosition((location) => {
                console.info(`[geolocation TIME: ${(new Date()).toLocaleString()}] Position updated via watch`);
                this.presentLocation = location;
                triggerHandler("change", this.presentLocation);
            });

            this.serviceRunning = true;
            console.info("[geolocation] Geolocation service started successfully");
            triggerHandler("start", this.presentLocation);
            resolve(this.watchHandler)
        })
    }

    /** Stop the updater service */
    stop(handler: number) {
        if (!this.backend) {
            console.error("[geolocation] Cannot stop: backend not initialised");
            throw new Error("Backend not initialised");
        }
        console.info("[geolocation] Stopping geolocation service");
        this.serviceRunning = false;
        this.backend.clearWatch(handler);
        console.info("[geolocation] Geolocation service stopped");
    }

    /** Add a handler to the service. It will be triggered on "change" */
    addListener = (callback: (location: GeographicPointType) => void) => addLocationHandler("change", callback);

    addHandler = (type: HandlerItemType['type'], callback: HandlerItemType['callback'], once: boolean) => addLocationHandler(type, callback, once);

    /** Remove a handler from the service
     * @param {number} id - The ID of the handler to remove
    */
    removeListener = (id: number) => removeHandler(id);
}
