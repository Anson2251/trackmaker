export interface Location {
    latitude: number,
    longitude: number
}

export function getGeolocation(): Promise<Location> {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) =>  {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                resolve(location);
            }, (error) => {
                reject("Error: " + error.message);
            });
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
}

export function supportGeolocation(): boolean {
    return !!navigator.geolocation
}

