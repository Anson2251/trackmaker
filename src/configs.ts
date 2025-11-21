import type { ModuleItem } from "@/utils/load-modules";

import creditInfo from "@/assets/credits.json";
import dataProviderInfo from "@/assets/data-provider.json";
import { GeolocationManager } from './libs/geolocation';
import { ImuOrientationManager, imuOrientationManager } from '@/libs/imu/services/imu-orientation-manager';
import { createApp, type App } from "vue";
import { createPinia } from "pinia";
import { isTauri, getPlatformServices } from "@/libs/platform";
import { initProj4rsModule } from "./utils/proj4-distance";

// Temporary mobile device detection function
function isMobileDevice(): boolean {
    // Check user agent
    const userAgent = navigator.userAgent || navigator.vendor || (window as Window & { opera?: string }).opera || "";

    // Common mobile device patterns
    const mobilePatterns = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
        /Mobile/i
    ];

    const isMobileUA = mobilePatterns.some(pattern => userAgent.match(pattern));

    // Additional check for touch capability (most mobile devices have touch)
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Check screen width as another hint (but not definitive)
    const isSmallScreen = window.innerWidth <= 768;

    return isMobileUA || (hasTouch && isSmallScreen);
}

// Temporary IMU permission request function
async function requestIMUPermission(): Promise<boolean> {
    try {
        // Only request on mobile devices
        if (!isMobileDevice()) {
            console.info('[IMU Permission] Not a mobile device, skipping IMU permission request');
            return true;
        }

        console.info('[IMU Permission] Mobile device detected, requesting IMU permissions');

        // For iOS 13+, we need to request device motion and orientation permissions
        if (typeof (DeviceMotionEvent as typeof DeviceMotionEvent & { requestPermission?: () => Promise<'granted' | 'denied'> }).requestPermission === 'function') {
            console.info('[IMU Permission] Requesting device motion permission');
            const motionPermission = await (DeviceMotionEvent as typeof DeviceMotionEvent & { requestPermission?: () => Promise<'granted' | 'denied'> }).requestPermission!();
            if (motionPermission !== 'granted') {
                console.warn('[IMU Permission] Device motion permission denied');
                return false;
            }
        }

        if (typeof (DeviceOrientationEvent as typeof DeviceOrientationEvent & { requestPermission?: () => Promise<'granted' | 'denied'> }).requestPermission === 'function') {
            console.info('[IMU Permission] Requesting device orientation permission');
            const orientationPermission = await (DeviceOrientationEvent as typeof DeviceOrientationEvent & { requestPermission?: () => Promise<'granted' | 'denied'> }).requestPermission!();
            if (orientationPermission !== 'granted') {
                console.warn('[IMU Permission] Device orientation permission denied');
                return false;
            }
        }

        console.info('[IMU Permission] IMU permissions granted successfully');
        return true;

    } catch (error) {
        console.warn('[IMU Permission] Failed to request IMU permission:', error);
        // Don't fail the initialization, just continue without IMU
        return true;
    }
}

// Extend Window interface for our custom properties
declare global {
    interface Window {
        GeolocationManager: GeolocationManager;
        ImuOrientationManager: ImuOrientationManager;
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
            try {
                console.time("Platform services initialise");

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

                console.timeEnd("Platform services initialise");
                console.info("[Platform] Platform services initialized successfully");
            } catch (error) {
                console.error("[Platform] Failed to initialize platform services:", error);
                return Promise.reject(error);
            }
        },
        dependencies: []
    },
    {
        name: "geolocation",
        displayName: "Geolocation Service",
        moduleInit: async () => {
            try {
                // Get platform services from window
                const platformServices = getPlatformServices();
                if (!platformServices) {
                    throw new Error("Platform services not initialized");
                }

                const geolocationManager = new GeolocationManager();
                console.time("Geolocation service initialise");

                // Initialize with permission prompt callback
                await geolocationManager.initialize(async (status) => {
                    if (isTauri()) {
                        return; // Tauri environment handles permissions differently
                    }

                    const confirmation = status === "prompt"
                        ? "Later your browser will request permission to access your location."
                        : "This app requires access to your location to track your movements."

                    // chrome's lighthouse requires to have a prompt message for geolocation access
                    return confirm(confirmation);
                });

                console.timeEnd("Geolocation service initialise");
                console.time("Geolocation service start");

                // Start location updates
                await geolocationManager.startLocationUpdates(() => {});

                console.timeEnd("Geolocation service start");

                // Temporary fix: Request IMU permissions after geolocation initialization
                console.info("[Geolocation] Requesting IMU permissions as temporary fix");
                await requestIMUPermission();

                window.GeolocationManager = geolocationManager; // expose new manager for direct access

                console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
            }
            catch (error) {
                console.error("[Geolocation] Failed to initialize geolocation service:", error);
                return Promise.reject(error);
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
                const initResult = await imuOrientationManager.initialize();
                if (initResult.isErr()) {
                    throw initResult.error;
                }

                // Start services continuously to get the data
                await imuOrientationManager.startOrientationUpdates(() => {});
                await imuOrientationManager.startAccelerationUpdates({}, () => {});
                await imuOrientationManager.startGyroscopeUpdates({}, () => {});

                console.timeEnd("IMU & Orientation service initialise");
                console.info("[IMU & Orientation] Service initialized successfully with initial values");

                // Expose for direct access if needed
                window.ImuOrientationManager = imuOrientationManager;
            } catch (error) {
                console.error("[IMU & Orientation] Failed to initialize service:", error);
                return Promise.reject(error);
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
