import { ResultAsync } from 'neverthrow'

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

