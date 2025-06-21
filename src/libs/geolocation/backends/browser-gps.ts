import type { GeographicPointType, GeolocationBackend, LocationResponseErrorType } from "../types";

export class BrowserGeolocationBackend implements GeolocationBackend {
    async isCurrentlyAvailable(): Promise<boolean> {
        try {
            const result = await navigator.permissions.query({ name: 'geolocation' });
            if (result.state === 'granted') {
                try {
                    this.getCurrentPosition();
                    return Promise.resolve(true);
                }
                catch {
                    console.log('gps unavailable')
                    return Promise.resolve(false);
                }
            }
            else return Promise.resolve(false);
        }
        catch {
            return Promise.resolve(false);
        }
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
                })
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
                }
            ));
        });
    }

    clearWatch(channelId: number) {
        navigator.geolocation.clearWatch(channelId);
    }
}

export default BrowserGeolocationBackend;
