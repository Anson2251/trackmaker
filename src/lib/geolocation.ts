/*
This file contains the custom geolocation functionality for the Tauri application.
*/

/**
 * The `locateTauri` function uses the Tauri API to get the current location of the device.
 * @returns Promise<Coordinates>
 */
export async function locateTauri(): Promise<Coordinates> {
	const { invoke } = await import("@tauri-apps/api/core");
	const location = await (invoke("get_geolocation") as Promise<{ latitude: number; longitude: number }>);
	return {
		...location,
		altitude: null,
		accuracy: 0,
		altitudeAccuracy: null,
		heading: null,
		speed: null
	}
}

interface Coordinates {
	readonly latitude: number;
	readonly longitude: number;
	readonly altitude: number | null;
	readonly accuracy: number;
	readonly altitudeAccuracy: number | null;
	readonly heading: number | null;
	readonly speed: number | null;
}

interface PositionError {
	readonly code: number;
	readonly message: string;
	readonly PERMISSION_DENIED: number;
	readonly POSITION_UNAVAILABLE: number;
	readonly TIMEOUT: number;
}

interface PositionOptions {
	enableHighAccuracy?: boolean;
	maximumAge?: number;
	timeout?: number;
}

interface GeolocationProviderLike {
	getCurrentPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback,
		options?: PositionOptions
	): void;
	watchPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback,
		options?: PositionOptions
	): number;
	clearWatch(watchId: number): void;
}

interface GeolocationProviderLikeConstructor {
	new (): GeolocationProviderLike;
}

export class IPGeolocation implements GeolocationProviderLike {
	private watchCallbacks = new Map<number, number>();

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
			const position = await locateTauri();
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

	private createPositionError(error: Error): PositionError {
		return {
			code: 2, // POSITION_UNAVAILABLE
			message: error.message,
			PERMISSION_DENIED: 1,
			POSITION_UNAVAILABLE: 2,
			TIMEOUT: 3,
		};
	}
}

export function injectCustomGeolocationProvider(locator: GeolocationProviderLikeConstructor): void {
	if((navigator.geolocation as any)["injected"]) {
		console.warn("The custom geolocation provider is already injected and cannot be injected again.")
		return;
	}
	(navigator.geolocation as any)["injected"] = true;

	const locatorInstance = new locator();

	navigator.geolocation.watchPosition = locatorInstance.watchPosition.bind(locatorInstance);
	navigator.geolocation.clearWatch = locatorInstance.clearWatch.bind(locatorInstance);
	navigator.geolocation.getCurrentPosition = locatorInstance.getCurrentPosition.bind(locatorInstance);
}
