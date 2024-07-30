import { wgs2gcj } from "./conversion";
import type { GeographicPointType } from "./definitions";


export namespace Driver {
    export function createUpdater() {
        return new Worker(
            new URL("update-worker", import.meta.url),
            { type: 'module' }
        );

    }

    export function startUpdater(updater: Worker, interval: number) {
        updater.postMessage({
            msg: "start",
            interval: interval
        });
    }

    export function stopUpdater(updater: Worker) {
        updater.postMessage({
            msg: "stop",
        });
    }

    export type LocationResponseType = {
        status: boolean;
        location: GeographicPointType;
        error: GeolocationPositionError | undefined;
    };
    export function responseLocation(updater: Worker) {
        const retrieveLocation = new Promise((resolve) => {
            const successCallback = (position: GeolocationPosition) => {
                resolve({
                    status: true,
                    location: wgs2gcj({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }),
                    error: {
                        code: 0,
                        message: "Success"
                    }
                });
            };
            const failureCallback = (error: GeolocationPositionError) => {
                resolve({
                    status: false,
                    location: {
                        latitude: 0,
                        longitude: 0
                    },
                    error: error
                });
            };
            navigator.geolocation.getCurrentPosition(successCallback, failureCallback, { enableHighAccuracy: true });
        });

        retrieveLocation.then((response) => {
            updater.postMessage({
                msg: "location-post",
                location: response
            });
        });
    }

}
