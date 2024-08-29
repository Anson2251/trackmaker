import { cloneDeep } from "lodash-es";

export const supportGeolocation = !!navigator.geolocation;

export type LocationAccessInfoType = {
    state: boolean,
    message?: string,
    code?: number
}

/** Check whether the access to the geolocation is permitted */
export async function checkGeolocationAccess(): Promise<LocationAccessInfoType> {
    return new Promise<LocationAccessInfoType>((resolve) => {
        if(!supportGeolocation) {
            resolve({ state: false, message: "Geolocation is not supported by this browser.", code: 0 });
        }
        navigator.geolocation.getCurrentPosition(
            () => resolve({ state: true }),
            (error) => {
                let msg = "";
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        msg = "Geolocation access denied";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        msg = "Geolocation position unavailable";
                        break;
                    case error.TIMEOUT:
                        msg = "Geolocation request timed out";
                        break;
                    default:
                        msg = "Unknown error occurred";
                        break;
                }
                resolve({ state: false, message: msg, code: error.code });
            }
        );
    });
}

// Call the function to check geolocation access
checkGeolocationAccess();


export function clonePoint<T>(point: T): T {
    return cloneDeep(point);
}

export * from "./definitions";
export * from "./conversion";
export * from "./update-service";
