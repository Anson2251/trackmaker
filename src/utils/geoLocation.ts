import * as prcoords from "prcoords/js/PRCoords.js";

export interface Location {
    latitude: number,
    longitude: number
}

const geoLocationPresent: Location = {
    latitude: 0,
    longitude: 0
};

let onchangeCallback: { id: number, callback: (location: Location) => void }[] = [];
function doCallbacks() {
    onchangeCallback.forEach((item) => item.callback(geoLocationPresent));
}

export let updateServiceStarted = false;
export let updateServiceUpdating = true;

export function getGeoLocationPresent() {
    return geoLocationPresent;
}

export function isUpdateServiceExist() {
    return updateServiceStarted;
}

export function isUpdateServiceUpdating() {
    return updateServiceUpdating;
}

export function startUpdatingService() {
    if (updateServiceStarted) return;
    updateServiceUpdating = true;

    const successCallback = (position: GeolocationPosition) => {
        const newPosition = convertCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        geoLocationPresent.latitude = newPosition.latitude
        geoLocationPresent.longitude = newPosition.longitude
        updateServiceStarted = true;
        updateServiceUpdating = false;
        console.log(newPosition)
        doCallbacks();
    }

    const errorcallback = (error: GeolocationPositionError) => {
        console.error("Error: " + error.message);
        updateServiceUpdating = false;
    }

    const options: PositionOptions = { enableHighAccuracy: true }

    // for the initial value
    navigator.geolocation.getCurrentPosition(successCallback, errorcallback, options);
    return navigator.geolocation.watchPosition(successCallback, errorcallback, options);
}

export function stopUpdatingService(id: number) {
    navigator.geolocation.clearWatch(id);
    updateServiceStarted = false;
}

export function convertCoordinates(location: Location): Location {
    const converted = prcoords.wgs_gcj({ lat: location.latitude, lon: location.longitude }, true)
    return { latitude: converted.lat, longitude: converted.lon }
}

export function supportGeolocation(): boolean {
    return !!navigator.geolocation
}

export function addChangeListener(callback: (location: Location) => void) {
    const id = onchangeCallback.length > 0 ? onchangeCallback[onchangeCallback.length - 1].id + 1 : 0;
    onchangeCallback.push({ id: id, callback: callback });
}

export function removeChangeListener(id: number) {
    onchangeCallback = onchangeCallback.filter((item) => item.id !== id);
}

