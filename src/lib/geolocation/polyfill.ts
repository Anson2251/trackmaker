import { invoke } from "@tauri-apps/api/core";
import type {GeolocationProviderLike, GeolocationProviderLikeConstructor, Position} from "./types"

/*
This file contains the custom geolocation functionality for the Tauri application.
*/

/**
 * The `locateTauri` function uses the Tauri API to get the current location of the device.
 *
 * THIS FUNCTION **WOULD NOT VALIDATE** THE RETURN VALUES FROM THE GIVEN TAURI HANDLER.
 * @returns Promise<Coordinates>
 */
export async function locateTauri(handlerName: string): Promise<Position> {
	const location = await (invoke(handlerName) as Promise<{ latitude: number; longitude: number }>);
	return {
		...location,
		altitude: null,
		accuracy: 0,
		altitudeAccuracy: null,
		heading: null,
		speed: null
	}
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
		options?: PositionOptions
	): void {
		this.handleLocationRequest()
			.then(successCallback)
			.catch(error => {
				errorCallback?.(this.createPositionError(error) as any);
			});
	}

	watchPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback,
		options?: PositionOptions
	): number {
		const watchId = window.setInterval(() => {
			this.handleLocationRequest()
				.then(successCallback)
				.catch(error => {
					errorCallback?.(this.createPositionError(error) as any);
				});
		}, options?.maximumAge || 1000);

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
		try {
			const position = await locateTauri(this.tauriHandlerName);
			const coord = {
				...position,
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

