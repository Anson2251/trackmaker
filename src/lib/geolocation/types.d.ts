export interface Position {
	readonly latitude: number;
	readonly longitude: number;
	readonly altitude: number | null;
	readonly accuracy: number;
	readonly altitudeAccuracy: number | null;
	readonly heading: number | null;
	readonly speed: number | null;
}

export interface Coordinate {
	latitude: number;
	longitude: number;
}

export interface PositionOption {
	enableHighAccuracy?: boolean;
	maximumAge?: number;
	timeout?: number;
}

export interface GeolocationProviderLike {
	getCurrentPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback,
		options?: PositionOption
	): void;
	watchPosition(
		successCallback: PositionCallback,
		errorCallback?: PositionErrorCallback,
		options?: PositionOption
	): number;
	clearWatch(watchId: number): void;
}

export interface GeolocationProviderLikeConstructor {
	new (handlerName: string): GeolocationProviderLike;
}
