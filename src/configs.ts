import type { ModuleItem } from "@/utils/load-modules";

import creditInfo from "@/assets/credits.json";
import dataProviderInfo from "@/assets/data-provider.json";
import { GeolocationManager } from './libs/geolocation';
import { ImuOrientationManager } from '@/libs/imu/services/imu-orientation-manager';
import { createApp, type App } from "vue";
import { createPinia } from "pinia";
import { isTauri, getPlatformServices } from "@/libs/platform";
import { initProj4rsModule } from "./utils/proj4-distance";
import { isDebugModeEnabled } from '@/libs/default-settings';

// Extend Window interface for our custom properties
declare global {
    interface Window {
        GeolocationManager: GeolocationManager;
        ImuOrientationManager: ImuOrientationManager;
        permissionConfirm?: (messageId: string) => Promise<boolean>;
    }
}

export const modules: ModuleItem[] = [
    {
        name: "trackmaker",
        displayName: "TrackMaker",
        moduleInit: async () => {
            const app = createApp((await import("./App.vue")).default);
            app.use(createPinia());
            app.use((await import("./router")).default);
            app.use((await import("@/locales")).i18n);


            if (window.splashScreen) (window.splashScreen as App).unmount()
            document.getElementById("splash")?.remove();
            const appContainer = document.getElementById("app");
            if (appContainer) appContainer.style.display = "inherit";

            app.mount("#app");
        },
        dependencies: ["platform-services", "geolocation", "proj4-wasm", "imu-orientation"]
    },
    {
        name: "proj4-wasm",
        displayName: "Proj4 Wasm",
        moduleInit: async () => {
            await initProj4rsModule();
        },
        dependencies: []
    },
    {
        name: "platform-services",
        displayName: "Platform Services",
        moduleInit: async () => {
            let debugMode = false;
            try {
                debugMode = isDebugModeEnabled();
            } catch {
                // Silently fail, debug mode defaults to off
            }
            try {
                if (debugMode) console.time("Platform services initialise");

                // Initialize platform services
                const platformServicesResult = getPlatformServices();
                if (platformServicesResult.isErr()) {
                    throw platformServicesResult.error;
                }

                const platformServices = platformServicesResult.value;

                // Initialize storage through platform services
                const storageProvider = platformServices.getStorage();
                if (storageProvider.isErr()) {
                    throw storageProvider.error;
                }

                // Initialize the storage provider
                const storageInitResult = await storageProvider.value.init();
                if (storageInitResult.isErr()) {
                    throw storageInitResult.error;
                }

                if (debugMode) console.timeEnd("Platform services initialise");
                console.info("[Platform] Platform services initialized successfully");
            } catch (error) {
                console.error("[Platform] Failed to initialize platform services:", error);
                return Promise.reject(error instanceof Error ? error : new Error(String(error)));
            }
        },
        dependencies: []
    },
    {
        name: "geolocation",
        displayName: "Geolocation Service",
        moduleInit: async () => {
            let debugMode = false;
            try {
                debugMode = isDebugModeEnabled();
            } catch {
                // Silently fail, debug mode defaults to off
            }
            try {
                // Get platform services from window
                const platformServices = getPlatformServices();
                if (!platformServices) {
                    throw new Error("Platform services not initialized");
                }

                if (debugMode) console.time("Geolocation service initialise");

                const geoResult = await GeolocationManager.getInstance(undefined, async (status) => {
                    if (isTauri()) {
                        return; // Tauri environment handles permissions differently
                    }

                    const messageId = status === "prompt"
                        ? "permission.location.prompt"
                        : "permission.location.required";

                    // Use custom permission dialog from splash screen
                    if (window.permissionConfirm) {
                        return window.permissionConfirm(messageId);
                    }
                    // Fallback to native confirm if splash screen not available
                    return confirm(messageId);
                });
                if (geoResult.isErr()) {
                    throw geoResult.error;
                }
                const geolocationManager = geoResult.value;

                if (debugMode) console.timeEnd("Geolocation service initialise");
                if (debugMode) console.time("Geolocation service start");

                // Start location updates
                await geolocationManager.startLocationUpdates(() => {});

                if (debugMode) console.timeEnd("Geolocation service start");

                // Temporary fix: Request IMU permissions after geolocation initialization
                if (debugMode) console.info("[Geolocation] Requesting IMU permissions as temporary fix");

                window.GeolocationManager = geolocationManager; // expose new manager for direct access

                console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
            }
            catch (error) {
                console.error("[Geolocation] Failed to initialize geolocation service:", error);
                return Promise.reject(error instanceof Error ? error : new Error(String(error)));
            }
        },
        dependencies: ["platform-services"]
    },
    {
        name: "imu-orientation",
        displayName: "IMU & Orientation Service",
        moduleInit: async () => {
            try {
                console.time("IMU & Orientation service initialise");

                // Initialize IMU and orientation manager
                const imuResult = await ImuOrientationManager.getInstance(async () => {
                    if (window.permissionConfirm) {
                        return window.permissionConfirm("permission.imu.required");
                    }
                    return confirm("permission.imu.required");
                });
                if (imuResult.isErr()) {
                    throw imuResult.error;
                }
                const imuManager = imuResult.value;


                // Start services continuously to get the data
                await imuManager.startOrientationUpdates(() => {});
                await imuManager.startAccelerationUpdates({}, () => {});
                await imuManager.startGyroscopeUpdates({}, () => {});

                console.timeEnd("IMU & Orientation service initialise");
                console.info("[IMU & Orientation] Service initialized successfully with initial values");

                // Expose for direct access if needed
                window.ImuOrientationManager = imuManager;
            } catch (error) {
                console.error("[IMU & Orientation] Failed to initialize service:", error);
                return Promise.reject(error instanceof Error ? error : new Error(String(error)));
            }
        },
        dependencies: ["platform-services"]
    }
];

export const mapTilerKey = __MAPTILER_KEY__;

export type CreditItem = {
    id: string
    name: string
    description: string
    url: string
    homepage?: string
    licenseType?: string
    license?: string
}

export type DataProviderItem = {
    id: string
    name: string
    url: string
    license?: string
}

export const dataProviders: DataProviderItem[] = dataProviderInfo;

export const credits: CreditItem[] = creditInfo;
