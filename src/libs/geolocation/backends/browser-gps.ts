import { isEqual, reject } from "lodash-es";
import type { GeographicPointType, GeolocationBackend, LocationResponseErrorType } from "../types";
import { LocationResponseErrorEnum } from "../types";
import PlatformInfo from '@/utils/platform';
import { storeGet } from "@/libs/store";
import type { Settings } from "@/store/settings-store";
import { wgs2gcj } from "../conversion";

export class BrowserGeolocationBackend implements GeolocationBackend {
    private platform = new PlatformInfo();

    private get isIOS() {
        return this.platform.os.toLowerCase().includes('ios');
    }

    private get isMobile() {
        return this.platform.isMobile || this.platform.isTablet;
    }

    private validateEnvironment() {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported by this browser."));
            return;
        }
        if (this.isIOS && window.location.protocol !== 'https:') {
            throw {
                code: LocationResponseErrorEnum.IOS_HTTPS_REQUIRED,
                message: "Geolocation requires HTTPS on iOS"
            };
        }
    }

    private getOptions() {
        return {
            enableHighAccuracy: !this.isMobile,
            timeout: this.isMobile ? 20000 : 30000,
            maximumAge: this.isMobile ? 5000 : 10000
        };
    }

    async getPermissionStatus() {
        if (!navigator.permissions) {
            console.warn("navigator.permissions is not supported in this browser");
            return new Promise<"granted" | "denied" | "prompt">((resolve) => {
                navigator.geolocation.getCurrentPosition(
                    () => resolve("granted"),
                    (error) => {
                        if (error.code === error.PERMISSION_DENIED) {
                            resolve("denied");
                        } else {
                            resolve("prompt");
                        }
                    },
                    {
                        timeout: 5000,
                        maximumAge: Infinity,
                        enableHighAccuracy: false
                    }
                );
            });
        }

        const result = await navigator.permissions.query({ name: 'geolocation' });
        const status = result.state;
        console.log("GPS permission status: ", status);
        return status;
    }

    async getCurrentPosition() {
        try {
            this.validateEnvironment();
        } catch (error) {
            console.error("[geolocation] Environment validation failed");
            return Promise.reject(error);
        }

        const geolocationCorrection = (await storeGet<Settings>('settings'))?.geolocationCorrection as boolean ?? false;
        const options = this.getOptions();
        console.info("[geolocation] Requesting current position from GPS");

        return new Promise<GeographicPointType>((resolve, reject: (reason: LocationResponseErrorType) => void) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.info("[geolocation] Successfully retrieved current position");
                    if (geolocationCorrection) {
                        const coord = wgs2gcj({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        })
                        resolve(coord)
                    }
                    else resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    console.error(`[geolocation] Failed to get current position: code ${error.code}`);
                    reject({
                        code: error.code,
                        message: error.message
                    });
                },
                options
            );
        });
    }

    async watchPosition(callback: (location: Readonly<GeographicPointType>) => void) {
        try {
            this.validateEnvironment();
        } catch (error) {
            console.error("[geolocation] Environment validation failed for watch position");
            return Promise.reject(error);
        }

        const options = this.getOptions();
        console.info("[geolocation] Starting position watch");

        const compatibilityMode = (await storeGet<Settings>('settings'))?.watchCompatibilityMode as boolean ?? true;
        const geolocationCorrection = (await storeGet<Settings>('settings'))?.geolocationCorrection as boolean ?? false;
        if (compatibilityMode) {
            console.info("[geolocation] Using compatibility mode for position watch");
            return new Promise<number>((resolve) => {
                let previousLocation: GeographicPointType | null = null;

                resolve(setInterval(async () => {
                    this.getCurrentPosition().then(newLocation => {
                        if (previousLocation && isEqual(previousLocation, newLocation)) return;
                        previousLocation = newLocation;
                        console.info("[geolocation] Position updated via compatibility mode");
                        callback(Object.freeze(newLocation));
                    }).catch((error) => {
                        console.error("[geolocation] Error in compatibility mode watch:", error);
                        throw new Error(`Error while watching the geolocation in compatibility mode [GPS]. Code: ${error.code}, Msg: ${error.message}`);
                    });
                }, 5000) as unknown as number);
            });
        }
        else {
            return new Promise<number>((resolve) => {
                const watchId = navigator.geolocation.watchPosition(
                    (position) => {
                        console.info("[geolocation] Position updated via native watch");
                        if (geolocationCorrection) callback(wgs2gcj({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        }))
                        else callback({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        });
                    },
                    (error) => {
                        console.error("[geolocation] Error in native watch:", error);
                        throw new Error(`Error while watching the geolocation [GPS]. Code: ${error.code}, Msg: ${error.message}`);
                    },
                    options
                );
                resolve(watchId);
            });
        }
    }

    clearWatch(channelId: number) {
        console.info("[geolocation] Clearing position watch");
        navigator.geolocation.clearWatch(channelId);
    }
}

export default BrowserGeolocationBackend;
