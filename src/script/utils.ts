export async function getGeolocation(): Promise<{ latitude: number; longitude: number; }> {
    const promise: Promise<{latitude: number, longitude: number}> =  new Promise((resolve, reject) => {
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

    return await promise;
}

export function supportGeolocation(): boolean {
    return !!navigator.geolocation
}

