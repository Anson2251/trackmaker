import { cloneDeep, isEqual, reject } from "lodash-es";
import type { GeographicPointType, GeolocationBackend, LocationResponseErrorType } from "../types";
import { LocationResponseErrorEnum } from "../types";
import PlatformInfo from '@/utils/platform';
import { useSettingsStore } from "@/store/settings-store";

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
            return new Promise<"granted" | "denied" | "prompt" | "unknown">((resolve) => {
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

    getCurrentPosition() {
        try {
            this.validateEnvironment();
        } catch (error) {
            return Promise.reject(error);
        }

        const options = this.getOptions();

        return new Promise<GeographicPointType>((resolve, reject: (reason: LocationResponseErrorType) => void) => {
            navigator.geolocation.getCurrentPosition(
                (position) => resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }),
                (error) => reject({
                    code: error.code,
                    message: error.message
                }),
                options
            );
        });
    }

    watchPosition(callback: (location: Readonly<GeographicPointType>) => void) {
        try {
            this.validateEnvironment();
        } catch (error) {
            return Promise.reject(error);
        }

        const options = this.getOptions();

        const settings = useSettingsStore()
        if (settings.settings.watchCompatibilityMode) {
            return new Promise<number>((resolve, reject) => {
                let previousLocation: GeographicPointType | null = null;

                resolve(setInterval(async () => {
                    this.getCurrentPosition().then(newLocation => {
                        if (previousLocation && isEqual(previousLocation, newLocation)) return;
                        previousLocation = newLocation;
                        callback(Object.freeze(newLocation));
                    }).catch((error) => { throw new Error(`Error while watching the geolocation in compatibility mode [GPS]. Code: ${error.code}, Msg: ${error.message}`); });
                }, 5000) as unknown as number);
            });
        }
        else {
            return new Promise<number>((resolve, reject) => {
                resolve(navigator.geolocation.watchPosition(
                    (position) => callback({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }),
                    (error) => {
                        throw new Error(`Error while watching the geolocation [GPS]. Code: ${error.code}, Msg: ${error.message}`);
                    },
                    options
                ));
            });
        }
    }

    clearWatch(channelId: number) {
        navigator.geolocation.clearWatch(channelId);
    }
}

export default BrowserGeolocationBackend;
