export class GeographicPoint {
    latitude: number;
    longitude: number;
    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    toLngLatLike(): [number, number] {
        return [this.longitude, this.latitude];
    }
}

export interface GeoJSONPointType {
    type: "Point",
    /** [Longitude, Latitude] */
    coordinates: [number, number]
}

export type LocationResponseType = {
    status: boolean;
    location: GeographicPoint;
    error: {
        code: number;
        message: string;
    }
};

export type LocationResponseErrorType = {
    code: LocationResponseErrorEnum;
    message: string;
}

export enum LocationResponseErrorEnum {
    PERMISSION_DENIED = 1,
    POSITION_UNAVAILABLE = 2,
    TIMEOUT = 3,
    UNKNOWN = 4,
    IOS_HTTPS_REQUIRED = 5,
    FIREFOX_PERMISSION_ISSUE = 6
}

export interface GeolocationBackend {
    getPermissionStatus(): Promise<"granted" | "denied" | "prompt" | "unknown">;
    getCurrentPosition(): Promise<GeographicPoint>
    watchPosition(callback: (location: GeographicPoint) => void): Promise<number>
    clearWatch(channelId: number): void
}


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
