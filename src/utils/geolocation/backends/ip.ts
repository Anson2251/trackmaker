import { type GeographicPointType, LocationResponseErrorEnum } from "../definitions";
import { cloneDeep, isEqual } from "lodash-es";

type HandlerType = {
    id: number
    callback: (geoLocation: GeographicPointType) => void
}

const handlers: HandlerType[] = [];

function addHandler(callback: HandlerType['callback']) {
    const handler: HandlerType = {
        id: (handlers.length > 0 ? handlers[handlers.length - 1].id : 0) + 1,
        callback
    };
    handlers.push(handler);
    return handler.id;
}

function removeHandler(id: number) {
    handlers.splice(handlers.findIndex((handler) => handler.id === id), 1);
}

let watchHandler: number = -1;

let lastLocation: GeographicPointType = {
    latitude: 0,
    longitude: 0
};

export namespace IPGeolocationBackend {
    export async function isCurrentlyAvailable(): Promise<boolean> {
        try {
            await fetch(ipApiURL);
            return Promise.resolve(true);
        }
        catch {
            return Promise.resolve(false);
        }
    }
    
    export interface GeolocationInfoType {
        city: string;
        latitude: number;
        longitude: number;
    }

    export const ipApiURL = "https://freeipapi.com/api/json";

    export function fetchRaw(): Promise<Record<string, string | number>> {
        return new Promise((resolve, reject) => {
            fetch(ipApiURL)
                .then(async (response) => resolve(await response.json()))
                .catch((err) => reject(err));
        });
    }

    export async function getInfo(): Promise<GeolocationInfoType> {
        const response = await fetchRaw();
        return {
            city: response.cityName as string,
            latitude: response.latitude as number,
            longitude: response.longitude as number
        };
    }

    export async function getCurrentPosition(): Promise<GeographicPointType> {
        const info = await getInfo();
        return {
            latitude: info.latitude,
            longitude: info.longitude
        };
    }

    export function watchPosition(callback: (location: GeographicPointType) => void) {
        const id = addHandler(callback);

        return new Promise<number>((resolve) => {
            if (watchHandler === -1) {
                const update = () => {
                    getCurrentPosition()
                        .then((location) => {
                            if(isEqual(location, lastLocation)) return;
                            handlers.forEach((handler) => {
                                handler.callback(location);
                            });
                            lastLocation = cloneDeep(location);
                        })
                        .catch((err) => {
                            throw new Error(`Error while watching the geolocation [IP]. Code: ${LocationResponseErrorEnum.UNKNOWN}, Msg: ${err}`);
                        });
                };
                watchHandler = setInterval(() => update(), 20000);
                update();
            }

            resolve(id);
        });
    }

    export function clearWatch(channelId: number) {
        removeHandler(channelId);
        if (handlers.length === 0) {
            clearInterval(watchHandler);
            watchHandler = -1;
        }
    }
}

export default IPGeolocationBackend;