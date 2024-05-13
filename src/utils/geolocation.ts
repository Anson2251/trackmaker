import gcoord from "gcoord";

export interface GeographicPoint {
    latitude: number,
    longitude: number
}

const geoLocationPresent: GeographicPoint = {
    latitude: 0,
    longitude: 0
};

let onchangeCallback: { id: number, callback: (location: GeographicPoint) => void }[] = [];
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

export function convertCoordinates(location: GeographicPoint): GeographicPoint {
    // todo, left a setting to user to enable this feature.
    const converted = gcoord.transform([location.longitude, location.latitude], gcoord.WGS84, gcoord.GCJ02);
    return { longitude: converted[0], latitude: converted[1] }
}

export function supportGeolocation(): boolean {
    return !!navigator.geolocation
}

export function addChangeListener(callback: (location: GeographicPoint) => void) {
    const id = onchangeCallback.length > 0 ? onchangeCallback[onchangeCallback.length - 1].id + 1 : 0;
    onchangeCallback.push({ id: id, callback: callback });
}

export function removeChangeListener(id: number) {
    onchangeCallback = onchangeCallback.filter((item) => item.id !== id);
}

