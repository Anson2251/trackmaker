import type { LocationResponseType } from "./definitions";

/** A set of utilities for interacting with the location-updating worker */
export namespace Driver {
    /** Create a location-updating worker */
    export function createUpdater() {
        return new Worker(
            new URL("update-worker", import.meta.url),
            { type: 'module' }
        );

    }

    /** Start the worker
     * @param {Worker} updater - The location-updating worker
     * @param {number} interval - The update interval in milliseconds
     */
    export function startUpdater(updater: Worker, interval: number) {
        updater.postMessage({
            msg: "start",
            interval: interval
        });
    }

    /** Stop the worker
     * @param {Worker} updater - The location-updating worker
     */
    export function stopUpdater(updater: Worker) {
        updater.postMessage({
            msg: "stop",
        });
    }

    
    /**
     * Request the current location from the browser's geolocation API and send it to the location-updating worker.
     * @param {Worker} updater - The location-updating worker
     */
    export function responseLocation(updater: Worker) {
        // Create a new Promise that resolves with the retrieved location
        const retrieveLocation = new Promise<LocationResponseType>((resolve) => {
            // Define success and failure callbacks for the geolocation API
            const successCallback = (position: GeolocationPosition) => {
                // Convert the retrieved location from WGS84 to GCJ02
                const convertedLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                // Resolve the Promise with the converted location and no error
                resolve({
                    status: true,
                    location: convertedLocation,
                    error: {
                        code: 0,
                        message: ""
                    }
                });
            };
            const failureCallback = (error: GeolocationPositionError) => {
                // Resolve the Promise with a default location and the error
                resolve({
                    status: false,
                    location: {
                        latitude: 0,
                        longitude: 0
                    },
                    error: {
                        code: error.code,
                        message: error.message
                    }
                });
            };
            // Request the current location from the browser's geolocation API
            navigator.geolocation.getCurrentPosition(successCallback, failureCallback, { enableHighAccuracy: true });
        });

        // Once the location is retrieved, send it to the location-updating worker
        retrieveLocation.then((response) => {
            updater.postMessage({
                msg: "location-post",
                location: response
            });
        });
    }

}
