import type { GeographicPointType, GeolocationBackend, LocationResponseErrorType } from "../types";

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
                    timeout: 5000,
                    maximumAge: Infinity
                }
            );
        });
    }

    watchPosition(callback: (location: GeographicPointType) => void) {
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
                timeout: 5000,
                maximumAge: Infinity
            }
            ));
        });
    }

    clearWatch(channelId: number) {
        navigator.geolocation.clearWatch(channelId);
    }
}

export default BrowserGeolocationBackend;
