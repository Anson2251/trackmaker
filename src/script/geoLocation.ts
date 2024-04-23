import  * as prcoords  from "prcoords/js/PRCoords.js";

export interface Location {
    latitude: number,
    longitude: number
}

export function getGeolocation(): Promise<Location> {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) =>  {
                resolve(convertCoordinates({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }));
            }, (error) => {
                reject("Error: " + error.message);
            });
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
}

export function convertCoordinates(location: Location): Location {
    const converted = prcoords.wgs_gcj({lat: location.latitude, lon: location.longitude}, true)
    return { latitude: converted.lat, longitude: converted.lon }
}

export function supportGeolocation(): boolean {
    return !!navigator.geolocation
}

