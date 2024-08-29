import * as TauriGeolocation from "@tauri-apps/plugin-geolocation";
import { type GeographicPointType, type LocationResponseErrorType, LocationResponseErrorEnum} from "../definitions";

const InTauriEnvironment = __TAURI_ENVIRONMENT__;

export namespace TauriGeolocationBackend {
    export async function isCurrentlyAvailable(){
        if(!InTauriEnvironment) return Promise.resolve(false);

        const permission = await TauriGeolocation.checkPermissions();
        if(permission.status === "ok") {
            return Promise.resolve(permission.data.location === "granted");
        }
        else {
            return Promise.resolve(false);
        }
    }

    export function requestPermissions(...types: TauriGeolocation.PermissionType[]): Promise<void> {
        return new Promise((resolve, reject) => {
            if(!InTauriEnvironment) reject({ code: LocationResponseErrorEnum.UNKNOWN, message: "Not in Tauri environment." });
            TauriGeolocation.requestPermissions(types).then((status) => {
                if (status.status === "ok") resolve();
                else reject(status.error);
            });
        });
    }

    export function getCurrentPosition(): Promise<GeographicPointType> {
        return new Promise((resolve, reject: ((reason: LocationResponseErrorType) => void)) => {
            if(!InTauriEnvironment) reject({ code: LocationResponseErrorEnum.UNKNOWN, message: "Not in Tauri environment." });
            const permission = requestPermissions("location");

            permission.then(() => {
                const position = TauriGeolocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 100
                });

                position.then((pos) => {
                    if (pos.status === "ok") {
                        resolve({
                            latitude: pos.data.coords.latitude,
                            longitude: pos.data.coords.longitude
                        });
                    }
                    else {
                        reject({ code: LocationResponseErrorEnum.UNKNOWN, message: pos.error });
                    }
                }).catch((err) => {
                    reject({ code: LocationResponseErrorEnum.POSITION_UNAVAILABLE, message: err });
                });
            });

            permission.catch((err) => {
                reject({ code: LocationResponseErrorEnum.PERMISSION_DENIED, message: err });
            });
        });
    }

    export function watchPosition(callback: (location: GeographicPointType) => void): Promise<number> {
        return new Promise((resolve, reject) => {
            if(!InTauriEnvironment) reject({ code: LocationResponseErrorEnum.UNKNOWN, message: "Not in Tauri environment." });
            const permission = requestPermissions("location");

            permission.then(() => {
                const position = TauriGeolocation.watchPosition({
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 100
                }, (pos) => {
                    if(typeof pos === "string") throw new Error(`Error while watching the geolocation [GPS]. Code: ${LocationResponseErrorEnum.UNKNOWN}, Msg: ${pos}`);
                    callback({
                        latitude: (pos as TauriGeolocation.Position).coords.latitude,
                        longitude: (pos as TauriGeolocation.Position).coords.longitude
                    });
                });

                resolve(position);
            });

            permission.catch((err) => {
                reject({ code: LocationResponseErrorEnum.PERMISSION_DENIED, message: err });
            });
        });
    }

    export function clearWatch(channelId: number) {
        return new Promise<void>((resolve, reject) => {
            if(!InTauriEnvironment) reject({ code: LocationResponseErrorEnum.UNKNOWN, message: "Not in Tauri environment." });
            TauriGeolocation.clearWatch(channelId)
                .then((status) => {
                    if (status.status === "ok") resolve();
                    else reject({ code: LocationResponseErrorEnum.UNKNOWN, message: status.error });
                })
                .catch((err) => reject({ code: LocationResponseErrorEnum.UNKNOWN, message: err }));
        });
    }
}

export default TauriGeolocationBackend;