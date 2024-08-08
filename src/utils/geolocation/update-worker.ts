// THIS FILE SHOULD BE RUN IN THE WEB WORKER ENVIRONMENT

import type { GeographicPointType, LocationResponseType } from "./definitions";
import { wgs2gcj } from "./conversion";

function postLocationRequest() {
    postMessage({ msg: "location-request" });
}

function postLocation(location: GeographicPointType) {
    postMessage({ msg: "location", data: location });
}

function postError(error: LocationResponseType["error"]) {
    postMessage({ msg: "error", data: error });
}

function requestLocation(): Promise<GeographicPointType> {
    requestingLocationStatus = true;
    return new Promise((resolve, reject) => {
        receiveLocationFunction = (data) => {
            requestingLocationStatus = false;
            if (data.status) resolve(data.location);
            else reject(data.error);
        };
        postLocationRequest();
    });
}

let updaterID = 0;
let requestingLocationStatus = false;
let receiveLocationFunction: ((location: any) => void) = () => { };

/**
 * Creates a location updater that periodically requests the user's geolocation and calls the provided callbacks when the location changes.
 *
 * @param {number} updateInterval - The interval (in milliseconds) at which the location should be updated. Default is 200ms.
 * @param {(location: GeographicPointType) => void} onChange - The callback function to be called when the location changes.
 * @param {(error: LocationResponseType["error"]) => void} [onError=()=>{}] - The callback function to be called when an error occurs. Default is an empty function.
 */
function locationUpdater(updateInterval: number = 200, onChange: (location: GeographicPointType) => void, onError: ((error: LocationResponseType["error"]) => void) = () => { }) {
    let previousLocation: GeographicPointType = {
        latitude: 0,
        longitude: 0
    };

    updaterID = setInterval(() => {
        const successCallback = (position: GeographicPointType) => {
            const newPosition = wgs2gcj({
                latitude: position.latitude,
                longitude: position.longitude
            });
            if (newPosition.latitude !== previousLocation.latitude || newPosition.longitude !== previousLocation.longitude) {
                console.log(`[geolocation-update-worker] Geolocation changed to: (LAT ${newPosition.latitude}, LNG ${newPosition.longitude})`);
                onChange(newPosition);
                previousLocation = newPosition;
            }
        };

        const failureCallback = (error: LocationResponseType["error"]) => {
            console.error(`[geolocation-update-worker] Fail to get the geolocation. Code: ${error.code}, Msg: ${error.message}`);
            onError(error);
        };

        if (requestingLocationStatus) return;
        requestLocation().then(successCallback).catch(failureCallback);
    }, updateInterval);
}

onmessage = (event) => {
    switch (event.data.msg) {
        case "start": {
            locationUpdater(event.data.interval, postLocation, postError);
            break;
        }
        case "stop": {
            clearInterval(updaterID);
            break;
        }
        case "location-post": {
            receiveLocationFunction(event.data.location);
            break;
        }
    }
};


