/**
 * Tauri geolocation provider implementation
 */

import { Result, ok, err } from 'neverthrow';
import { invoke } from '@tauri-apps/api/core';
import type { IGeolocationProvider } from '../types';
import { GeolocationProviderError, GeolocationProviderErrorCode } from '../errors';

export class TauriGeolocationProvider implements IGeolocationProvider {
    private initialized = false;
    private permissionCallback: ((state: PermissionState) => void) | undefined;
    private tauriHandlerName: string;
    private watchCallbacks = new Map<number, number>();

    constructor(tauriHandlerName: string = 'get_geolocation') {
        this.tauriHandlerName = tauriHandlerName;
    }

    async init(permissionCallback?: (state: PermissionState) => void): Promise<Result<void, GeolocationProviderError>> {
        this.permissionCallback = permissionCallback;
        if (this.initialized) {
            return ok(undefined);
        }

        try {
            // Inject Tauri geolocation provider into navigator.geolocation
            await this.injectTauriProvider();
            this.initialized = true;
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationProviderError(
                'Failed to initialize Tauri geolocation provider',
                GeolocationProviderErrorCode.INITIALIZATION_FAILED,
                error as Error
            ));
        }
    }

    private async injectTauriProvider(): Promise<void> {
        // Check if already injected
        type GeolocationInjectedType = (typeof navigator)["geolocation"] & { injected: boolean };
        if ((navigator.geolocation as GeolocationInjectedType)["injected"]) {
            return;
        }

        // Create Tauri geolocation instance
        const tauriGeolocation = new TauriGeolocation(this.tauriHandlerName);

        // Override navigator.geolocation methods
        navigator.geolocation.getCurrentPosition = tauriGeolocation.getCurrentPosition.bind(tauriGeolocation);
        navigator.geolocation.watchPosition = tauriGeolocation.watchPosition.bind(tauriGeolocation);
        navigator.geolocation.clearWatch = tauriGeolocation.clearWatch.bind(tauriGeolocation);

        // Mark as injected
        (navigator.geolocation as GeolocationInjectedType)["injected"] = true;
    }

    async getPermissionStatus(): Promise<Result<PermissionState, GeolocationProviderError>> {
        try {
            if (!navigator.permissions) {
                // Fallback for browsers without permissions API
                return await this.fallbackPermissionCheck();
            }

            const result = await navigator.permissions.query({ name: 'geolocation' });
            return ok(result.state);
        } catch (error) {
            return err(new GeolocationProviderError(
                'Failed to get permission status',
                GeolocationProviderErrorCode.PERMISSION_DENIED,
                error as Error
            ));
        }
    }

    private async fallbackPermissionCheck(): Promise<Result<PermissionState, GeolocationProviderError>> {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                () => resolve(ok('granted')),
                (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        resolve(ok('denied'));
                    } else {
                        resolve(ok('prompt'));
                    }
                },
                { timeout: 5000, maximumAge: Infinity, enableHighAccuracy: false }
            );
        });
    }

    async requestPermission(): Promise<Result<PermissionState, GeolocationProviderError>> {
        try {
            // Try to get current position to trigger permission request
            await this.getCurrentPosition();
            return ok('granted');
        } catch (error) {
            if (this.isPositionError(error)) {
                if (error.code === error.PERMISSION_DENIED) {
                    return ok('denied');
                }
            }
            return err(new GeolocationProviderError(
                'Failed to request permission',
                GeolocationProviderErrorCode.PERMISSION_DENIED,
                error as Error
            ));
        }
    }

    async getCurrentPosition(): Promise<Result<GeolocationPosition, GeolocationProviderError>> {
        try {
            const position = await this.locateTauri();
            return ok(this.convertToGeolocationPosition(position));
        } catch (error) {
            return err(new GeolocationProviderError(
                'Failed to get current position',
                GeolocationProviderErrorCode.POSITION_UNAVAILABLE,
                error as Error
            ));
        }
    }

    private async locateTauri(): Promise<{ point: { latitude: number; longitude: number }, method: string }> {
        const location = await invoke<{ point: { latitude: number; longitude: number }, method: string }>(this.tauriHandlerName);
        return location;
    }

    private convertToGeolocationPosition(tauriPosition: { point: { latitude: number; longitude: number }, method: string }): GeolocationPosition {
        const coord = {
            latitude: tauriPosition.point.latitude,
            longitude: tauriPosition.point.longitude,
            altitude: null,
            accuracy: 0,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
        };

        const data = {
            coords: {
                ...coord,
                toJSON: () => JSON.stringify(coord)
            },
            timestamp: performance.now(),
        };

        return {
            ...data,
            toJSON: () => JSON.stringify(data),
        };
    }

    async watchPosition(callback: PositionCallback): Promise<Result<number, GeolocationProviderError>> {
        try {
            const watchId = window.setInterval(async () => {
                try {
                    const position = await this.getCurrentPosition();
                    if (position.isOk()) {
                        callback(position.value);
                    }
                } catch (error) {
                    console.error('Error in watch position:', error);
                }
            }, 10000); // Update every 10 seconds

            this.watchCallbacks.set(watchId, watchId);
            return ok(watchId);
        } catch (error) {
            return err(new GeolocationProviderError(
                'Failed to start watching position',
                GeolocationProviderErrorCode.WATCH_FAILED,
                error as Error
            ));
        }
    }

    clearWatch(watchId: number): Result<void, GeolocationProviderError> {
        try {
            if (this.watchCallbacks.has(watchId)) {
                clearInterval(watchId);
                this.watchCallbacks.delete(watchId);
            }
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationProviderError(
                'Failed to clear watch',
                GeolocationProviderErrorCode.CLEAR_WATCH_FAILED,
                error as Error
            ));
        }
    }

    isSupported(): boolean {
        return __TAURI_ENVIRONMENT__;
    }

    private isPositionError(error: unknown): error is GeolocationPositionError {
        return (
            typeof error === 'object' &&
            error !== null &&
            'code' in error &&
            'message' in error &&
            typeof (error as { code: unknown }).code === 'number'
        );
    }
}

/**
 * Tauri-specific Geolocation implementation
 */
class TauriGeolocation implements Geolocation {
    private tauriHandlerName: string;

    constructor(tauriHandlerName: string) {
        this.tauriHandlerName = tauriHandlerName;
    }

    getCurrentPosition(
        successCallback: PositionCallback,
        errorCallback?: PositionErrorCallback
    ): void {
        this.getTauriPosition()
            .then(successCallback)
            .catch((error: unknown) => {
                errorCallback?.(this.createPositionError(error as Error));
            });
    }

    watchPosition(
        successCallback: PositionCallback,
        errorCallback?: PositionErrorCallback,
        options?: PositionOptions
    ): number {
        const maximumAge = options?.maximumAge ?? 10000;
        const watchId = window.setInterval(() => {
            this.getTauriPosition()
                .then(successCallback)
                .catch((error: unknown) => {
                    errorCallback?.(this.createPositionError(error as Error));
                });
        }, maximumAge);
        return watchId;
    }

    clearWatch(watchId: number): void {
        clearInterval(watchId);
    }

    private async getTauriPosition(): Promise<GeolocationPosition> {
        const location = await invoke<{ point: { latitude: number; longitude: number }, method: string }>(this.tauriHandlerName);

        const coord = {
            latitude: location.point.latitude,
            longitude: location.point.longitude,
            altitude: null,
            accuracy: 0,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
        };

        const data = {
            coords: {
                ...coord,
                toJSON: () => JSON.stringify(coord)
            },
            timestamp: performance.now(),
        };

        return {
            ...data,
            toJSON: () => JSON.stringify(data),
        };
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
