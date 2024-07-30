import type { GeographicPointType } from "./definitions";
import { wgs2gcj } from "./conversion";

function postLocationRequest() {
    postMessage({ msg: "location-request" });
}

function postLocation(location: GeographicPointType) {
    postMessage({ msg: "location", data: location });
}

function postError(error: GeolocationPositionError) {
    postMessage({ msg: "error", data: error || {} });
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

function locationUpdater(updateInterval: number = 200, onChange: (location: GeographicPointType) => void, onError: ((error: GeolocationPositionError) => void) = () => { }) {
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
                console.log(`Geolocation Changed to: (LAT ${newPosition.latitude}, LNG ${newPosition.longitude})`);
                onChange(newPosition);
                previousLocation = newPosition;
            }
        };

        const failureCallback = (error: GeolocationPositionError) => {
            console.error("Error: " + error);
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


