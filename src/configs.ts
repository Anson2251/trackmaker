import type { ModuleItem } from "@/utils/load-modules";

import dataProviderInfo from "@/assets/data-provider.json";
import { GeolocationManager } from './libs/geolocation';
import { createApp, type App } from "vue";
import { createPinia } from "pinia";
import { isTauri, getPlatformServices, PlatformServices } from "@/libs/platform";
import { initProj4rsModule } from "./utils/proj4-distance";
import { getIMUUpdateFrequency, isDebugModeEnabled } from '@/libs/default-settings';

// Extend Window interface for our custom properties
declare global {
    interface Window {
        GeolocationManager: GeolocationManager;
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
        dependencies: ["geolocation", "platform-services", "proj4-wasm"]
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

                const geoPermissionCallback = async (status: PermissionState, messageId: string): Promise<boolean> => {
                    if (isTauri()) {
                        return false;
                    }
                    if (window.permissionConfirm) {
                        return window.permissionConfirm(messageId);
                    }
                    return false;
                };

                const platformServicesResult = await PlatformServices.init({
                    geolocation: {
                        permissionCallback: geoPermissionCallback
                    },
                    imu: {
                        permissionCallback: geoPermissionCallback
                    },
                    deviceOrientation: {
                        permissionCallback: geoPermissionCallback
                    }
                });
                if (platformServicesResult.isErr()) {
                    throw platformServicesResult.error;
                }

                const platformServices = platformServicesResult.value;

                const storageProvider = platformServices.getStorage();
                if (storageProvider.isErr()) {
                    throw storageProvider.error;
                }

                const storageInitResult = await storageProvider.value.init();
                if (storageInitResult.isErr()) {
                    throw storageInitResult.error;
                }

                // Initialize IMU and orientation providers
                const orientationResult = platformServices.getDeviceOrientation();
                if (orientationResult.isOk()) {
                    const orientationProvider = orientationResult.value;
                    const orientationInitResult = await orientationProvider.init();
                    if (orientationInitResult.isErr()) {
                        console.warn("[Platform] DeviceOrientation not supported on this platform");
                    }
                    else {
                        await orientationProvider.start();
                    }
                }

                const imuResult = platformServices.getIMU();
                if (imuResult.isOk()) {
                    const imuProvider = imuResult.value;
                    const imuInitResult = await imuProvider.init();
                    if (imuInitResult.isErr()) {
                        console.warn("[Platform] IMU not supported on this platform");
                    }
                    else {
                        await imuProvider.startAcceleration({ frequency: getIMUUpdateFrequency(), normalizeToENU: true });
                        await imuProvider.startGyroscope({ frequency: getIMUUpdateFrequency(), normalizeToENU: true });
                    }
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

                const geoResult = await GeolocationManager.getInstance();
                if (geoResult.isErr()) {
                    throw geoResult.error;
                }
                const geolocationManager = geoResult.value;

                if (debugMode) console.timeEnd("Geolocation service initialise");
                if (debugMode) console.time("Geolocation service start");

                // Start location updates
                await geolocationManager.startLocationUpdates(() => {});

                if (debugMode) console.timeEnd("Geolocation service start");

                window.GeolocationManager = geolocationManager; // expose new manager for direct access

                console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
            }
            catch (error) {
                console.error("[Geolocation] Failed to initialize geolocation service:", error);
                return Promise.reject(error instanceof Error ? error : new Error(String(error)));
            }
        },
        dependencies: ["platform-services"]
    }
];

export const mapTilerKey = __MAPTILER_KEY__;

export type DataProviderItem = {
    id: string
    name: string
    url: string
    license?: string
}

export const dataProviders: DataProviderItem[] = dataProviderInfo;

export const credits: CreditItem[] = __PROJECT_CREDITS__;
