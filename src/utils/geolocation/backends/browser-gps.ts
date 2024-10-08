import type { GeographicPointType, LocationResponseErrorType } from "../definitions";

export namespace BrowserGeolocationBackend {
    export async function isCurrentlyAvailable(): Promise<boolean> {
        try {
            const result = await navigator.permissions.query({ name: 'geolocation' });
            if (result.state === 'granted') return Promise.resolve(true);
            else return Promise.resolve(false);
        }
        catch {
            return Promise.resolve(false);
        }
    }

    export function getCurrentPosition() {
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

    export function watchPosition(callback: (location: GeographicPointType) => void) {
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

    export async function clearWatch(channelId: number) {
        navigator.geolocation.clearWatch(channelId);
    }
}

export default BrowserGeolocationBackend;
