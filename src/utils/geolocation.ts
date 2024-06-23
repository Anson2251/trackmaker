import gcoord from "gcoord";

export interface GeographicPoint {
    latitude: number;
    longitude: number;
}

export interface GeoJSONPoint {
    type: "Point",
    coordinates: [number, number]
}

interface HandlerItem {
    id: number,
    callback: (location: GeographicPoint) => void
}

const geoLocationPresent: GeographicPoint = {
    latitude: 0,
    longitude: 0
};

let handlers: HandlerItem[] = [];

function doCallbacks() {
    handlers.forEach((item) => item.callback(geoLocationPresent));
}

export const supportGeolocation = !!navigator.geolocation;

export function clonePoint<T>(point: T): T {
    return JSON.parse(JSON.stringify(point));
}

export namespace Conversion {
    export function wgs2gcj(location: GeographicPoint): GeographicPoint {
        const converted = gcoord.transform([location.longitude, location.latitude], gcoord.WGS84, gcoord.GCJ02);
        return {longitude: converted[0], latitude: converted[1]}
    }

    export function geographicPoint2geojsonPoint(location: GeographicPoint): GeoJSONPoint {
        return {
            type: "Point",
            coordinates: [location.longitude, location.latitude]
        }
    }

    export function geojsonPoint2geographicPoint(location: GeoJSONPoint): GeographicPoint {
        return {
            longitude: location.coordinates[0],
            latitude: location.coordinates[1]
        }
    }
}

export namespace UpdateService {
    export let updateServiceStarted = false;
    export let updateServiceUpdating = true;

    export const getPresent = () => geoLocationPresent;
    export const isUpdateServiceExist = () => updateServiceStarted;
    export const isUpdateServiceUpdating = () => updateServiceUpdating;

    export function startUpdatingService() {
        if (updateServiceStarted) return;
        updateServiceUpdating = true;

        const successCallback = (position: GeolocationPosition) => {
            const newPosition = Conversion.wgs2gcj({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            geoLocationPresent.latitude = newPosition.latitude
            geoLocationPresent.longitude = newPosition.longitude
            updateServiceStarted = true;
            updateServiceUpdating = false;
            doCallbacks();
        }

        const errorCallback = (error: GeolocationPositionError) => {
            console.error("Error: " + error.message);
            updateServiceUpdating = false;
        }

        const options: PositionOptions = {enableHighAccuracy: true}

        // for the initial value
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
        return navigator.geolocation.watchPosition(successCallback, errorCallback, options);
    }

    export function stopUpdatingService(id: number) {
        navigator.geolocation.clearWatch(id);
        updateServiceStarted = false;
    }

    export function addListener(callback: (location: GeographicPoint) => void) {
        const id = handlers.length > 0 ? handlers[handlers.length - 1].id + 1 : 0;
        handlers.push({id: id, callback: callback});
    }

    export function removeListener(id: number) {
        handlers = handlers.filter((item) => item.id !== id);
    }
}



