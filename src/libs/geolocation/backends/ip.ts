/* eslint-disable no-async-promise-executor */
import { type GeographicPointType, type GeolocationBackend, LocationResponseErrorEnum } from "../types";
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

export interface GeolocationInfoType {
    city: string;
    latitude: number;
    longitude: number;
}

export const ipApiURL = "https://ipapi.co/json/";

type IpGeolocationData = Record<string, string | number>;

export class IPGeolocationBackend implements GeolocationBackend {
    async getPermissionStatus() {
        try {
            await fetch(ipApiURL);
            return "granted"
        }
        catch {
            return "denied"
        }
    }


    async fetchRaw(timeout = 10000): Promise<IpGeolocationData | void> {
        const fetchingPromise = new Promise<IpGeolocationData>(async (resolve, reject) => {
            try {
                const response = await fetch(ipApiURL);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                resolve(response.json());
            }
            catch {
                reject(new Error("Failed to fetch IP geolocation data"));
            }
        })

        const timeoutPromise = new Promise<void>((_, reject) => {
            setTimeout(() => reject(new Error("Request IP geolocation data timed out")), timeout);
        })

        return Promise.race([fetchingPromise, timeoutPromise]);
    }

    async getInfo(): Promise<GeolocationInfoType> {
        const response = await this.fetchRaw();
        if (!response) {
            throw new Error("Failed to fetch IP geolocation data");
        }
        return {
            city: response.cityName as string,
            latitude: response.latitude as number,
            longitude: response.longitude as number
        };
    }

    async getCurrentPosition(): Promise<GeographicPointType> {
        console.info("[geolocation] Getting current position from IP");
        const info = await this.getInfo();
        console.info("[geolocation] Successfully retrieved current position from IP");
        return {
            latitude: info.latitude,
            longitude: info.longitude
        };
    }

    watchPosition(callback: (location: GeographicPointType) => void) {
        console.info("[geolocation] Starting IP geolocation watch");
        const id = addHandler(callback);

        return new Promise<number>((resolve) => {
            if (watchHandler === -1) {
                const update = () => {
                    this.getCurrentPosition()
                        .then((location) => {
                            if (isEqual(location, lastLocation)) return;
                            console.info("[geolocation] IP geolocation position updated");
                            handlers.forEach((handler) => handler.callback(location));
                            lastLocation = cloneDeep(location);
                        })
                        .catch((err) => {
                            console.error("[geolocation] Error in IP geolocation watch:", err);
                            throw new Error(`Error while watching the geolocation [IP]. Code: ${LocationResponseErrorEnum.UNKNOWN}, Msg: ${err}`);
                        });
                };
                watchHandler = setInterval(() => update(), 20000) as unknown as number;
                console.info("[geolocation] IP geolocation watch interval started");
                update();
            }

            resolve(id);
        });
    }

    clearWatch(channelId: number) {
        console.info("[geolocation] Clearing IP geolocation watch handler");
        removeHandler(channelId);
        if (handlers.length === 0) {
            console.info("[geolocation] Stopping IP geolocation watch interval");
            clearInterval(watchHandler);
            watchHandler = -1;
        }
    }
}

export default IPGeolocationBackend;
