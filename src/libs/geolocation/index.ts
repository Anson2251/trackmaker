import { ResultAsync, Result } from 'neverthrow'
import { MyGeolocation } from './polyfill'

import type { Position, Coordinate, PositionOption, GeolocationProviderLikeConstructor } from './types';

export type { Position, Coordinate, PositionOption, GeolocationProviderLikeConstructor };

export function locate(): ResultAsync<GeolocationPosition, GeolocationPositionError> {
	return ResultAsync.fromPromise(
		new Promise<GeolocationPosition>((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		}),
		(error) => error as GeolocationPositionError
	)
}

export function watch(callback: (position: GeolocationPosition) => void): number {
	return navigator.geolocation.watchPosition(callback, () => {
		console.warn("Geolocation watch position failed.")
	});
}

export function unwatch(id: number): void {
	navigator.geolocation.clearWatch(id);
}

export function injectTauriGeolocationProvider(): void {
	if(!__TAURI_ENVIRONMENT__) {
		console.warn("This function can only be called in a Tauri environment.");
		return;
	}
	if((navigator.geolocation as any)["injected"]) {
		console.warn("The custom geolocation provider is already injected and cannot be injected again.")
		return;
	}
	(navigator.geolocation as any)["injected"] = true;

	const locatorInstance = new MyGeolocation("get_geolocation");

	navigator.geolocation.watchPosition = locatorInstance.watchPosition.bind(locatorInstance);
	navigator.geolocation.clearWatch = locatorInstance.clearWatch.bind(locatorInstance);
	navigator.geolocation.getCurrentPosition = locatorInstance.getCurrentPosition.bind(locatorInstance);
	console.info("Tauri geolocation provider injected successfully.")
}
