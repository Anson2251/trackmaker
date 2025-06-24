import { isEqual, reject } from "lodash-es";
import type { GeographicPointType, GeolocationBackend, LocationResponseErrorType } from "../types";

const watchCompatibilityMode = false

export class BrowserGeolocationBackend implements GeolocationBackend {
    async getPermissionStatus() {
        if (!navigator.permissions) {
            console.error("navigator.permissions is not supported in this browser");
            return "granted" // I don't know why some chrome based browsers on Android do ont have navigator.permissions
        }
        const result = await navigator.permissions.query({ name: 'geolocation' });
        const status = result.state;
        console.log("GPS permission status: ", status)
        return status
    }

    getCurrentPosition() {
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
                {
                    enableHighAccuracy: false,
                    timeout: 30000,
                    maximumAge: Infinity
                }
            );
        });
    }

    watchPosition(callback: (location: Readonly<GeographicPointType>) => void) {
        if (watchCompatibilityMode) {
            return new Promise<number>((resolve, reject) => {
                this.getCurrentPosition()
                    .then(() => {
                        let previousLocation: GeographicPointType | null = null
                        resolve(setInterval(async () => {
                            this.getCurrentPosition().then(newLocation => {
                                if (previousLocation && isEqual(previousLocation, newLocation)) return
                                previousLocation = newLocation
                                callback(Object.freeze(newLocation))
                            })
                        }, 5000) as unknown as number)
                    })
                    .catch(reject)
            })
        }
        else {
            return new Promise<number>((resolve, reject) => {
                if (!navigator.geolocation) reject(new Error("Geolocation is not supported by this browser."));
                resolve(navigator.geolocation.watchPosition(
                    (position) => callback({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }),
                    (error) => {
                        throw new Error(`Error while watching the geolocation [GPS]. Code: ${error.code}, Msg: ${error.message}`);
                    },
                    {
                        enableHighAccuracy: false,
                        timeout: 30000,
                        maximumAge: Infinity
                    }
                ));
            });
        }

        // return new Promise<number>((resolve) => {
        //     setInterval(() => {
        //         console.log("Mock GPS")
        //         callback({
        //             latitude: Math.random() * 180 - 90,
        //             longitude: Math.random() * 360 - 180
        //         })
        //     }, 1000)
        //     resolve(1)
        // })
    }

    clearWatch(channelId: number) {
        navigator.geolocation.clearWatch(channelId);
    }
}

export default BrowserGeolocationBackend;
