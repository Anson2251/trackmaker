import { invoke } from "@tauri-apps/api/core";
import { type Position } from './types'

/*
This file contains the custom geolocation functionality for the Tauri application.
*/

/**
 * The `locateTauri` function uses the Tauri API to get the current location of the device.
 *
 * THIS FUNCTION **WOULD NOT VALIDATE** THE RETURN VALUES FROM THE GIVEN TAURI HANDLER.
 * @returns Promise<Coordinates>
 */
export async function locateTauri(handlerName: string): Promise<{ point: Position, method: string }> {
	const location = await (invoke(handlerName) as Promise<{ point: { latitude: number; longitude: number }, method: string }>);
	return {
		point: {
			...location.point,
			altitude: null,
			accuracy: 0,
			altitudeAccuracy: null,
			heading: null,
			speed: null
		},
		method: location.method
	}
}

type GeolocationInjectedType = (typeof navigator)["geolocation"] & {injected: boolean};

export async function injectTauriGeolocationProvider(): Promise<string | null> {
	if (!__TAURI_ENVIRONMENT__) {
		console.warn("[geolocation] Cannot inject Tauri provider: not in Tauri environment");
		return null;
	}
	if ((navigator.geolocation as GeolocationInjectedType)["injected"]) {
		console.warn("[geolocation] Tauri provider already injected");
		return null;
	}
	(navigator.geolocation as GeolocationInjectedType)["injected"] = true;

	console.info("[geolocation] Injecting Tauri geolocation provider");
	const locatorInstance = new MyGeolocation("get_geolocation");

	navigator.geolocation.watchPosition = locatorInstance.watchPosition.bind(locatorInstance);
	navigator.geolocation.clearWatch = locatorInstance.clearWatch.bind(locatorInstance);
	navigator.geolocation.getCurrentPosition = locatorInstance.getCurrentPosition.bind(locatorInstance);
	console.info("[geolocation] Tauri geolocation provider injected successfully");
	return (await locateTauri('get_geolocation')).method
}

export class MyGeolocation implements Geolocation {
	private watchCallbacks = new Map<number, number>();
	private tauriHandlerName: string;

	constructor(tauriHandlerName: string) {
		this.tauriHandlerName = tauriHandlerName;
	}

	getCurrentPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		options?: PositionOptions
	): void {
		this.handleLocationRequest()
			.then(successCallback)
			.catch(error => {
				errorCallback?.(this.createPositionError(error));
			});
	}

	watchPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback,
		options?: PositionOptions
	): number {
		const maximumAge = (Number.isFinite(options?.maximumAge) && (options?.maximumAge as number) > 0 ? options?.maximumAge : 10000) ?? 10000;
		const watchId = window.setInterval(() => {
			this.handleLocationRequest()
				.then(successCallback)
				.catch(error => {
					errorCallback?.(this.createPositionError(error));
				});
		}, maximumAge);
		this.watchCallbacks.set(watchId, watchId);
		return watchId;
	}

	clearWatch(watchId: number): void {
		if (this.watchCallbacks.has(watchId)) {
			clearInterval(watchId);
			this.watchCallbacks.delete(watchId);
		}
	}

	private async handleLocationRequest(): Promise<GeolocationPosition> {
	    console.info("[geolocation] Requesting position from Tauri");
	    try {
	        const position = await locateTauri(this.tauriHandlerName);
	        console.info("[geolocation] Successfully retrieved position from Tauri");
	        const coord = {
	            ...position.point,
	            altitude: null,
	            accuracy: 0,
	            altitudeAccuracy: null,
	            heading: null,
	            speed: null,
	        }
	        const data = {
	            coords: {
	                ...coord,
	                toJSON: () => JSON.stringify(coord)
	            },
	            timestamp: Date.now(),
	        }
	        return {
	            ...data,
	            toJSON: () => JSON.stringify(data),
	        };
	    } catch (error) {
	        console.error("[geolocation] Failed to get position from Tauri:", error);
	        throw this.createPositionError(error as Error);
	    }
	}

	private createPositionError(error: Error): GeolocationPositionError {
		return {
			code: 2, // POSITION_UNAVAILABLE
			message: error.message,
			PERMISSION_DENIED: 1,
			POSITION_UNAVAILABLE: 2,
			TIMEOUT: 3,
		};
	}
}

