/**
 * Web geolocation provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import type { IGeolocationProvider } from '../types';
import { GeolocationProviderError, GeolocationProviderErrorCode } from '../errors';
import { getGpsUpdateInterval, getEarlySetting } from '@/libs/default-settings';

export class WebGeolocationProvider implements IGeolocationProvider {
    private initialized = false;
    private permissionCallback: ((state: PermissionState) => void) | undefined;
    private compatibilityModeWatches = new Map<number, number>(); // watchId -> intervalId
    private lastCompatibilityPosition: { lat: number; lng: number } | null = null; // For deduplication

    async init(permissionCallback?: (state: PermissionState) => void): Promise<Result<void, GeolocationProviderError>> {
        this.permissionCallback = permissionCallback;
        if (this.initialized) {
            return ok(undefined);
        }

        if (!this.isSupported()) {
            return err(new GeolocationProviderError(
                'Geolocation is not supported by this browser',
                GeolocationProviderErrorCode.UNSUPPORTED
            ));
        }

        this.initialized = true;
        return ok(undefined);
    }

    async getPermissionStatus(): Promise<Result<PermissionState, GeolocationProviderError>> {
        if (!navigator.permissions) {
            // Fallback for browsers without permissions API
            return this.fallbackPermissionCheck();
        }

        try {
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
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve(ok(position));
                },
                (error) => {
                    let errorCode: GeolocationProviderErrorCode;
                    const errorMessage = error.message;

                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorCode = GeolocationProviderErrorCode.PERMISSION_DENIED;
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorCode = GeolocationProviderErrorCode.POSITION_UNAVAILABLE;
                            break;
                        case error.TIMEOUT:
                            errorCode = GeolocationProviderErrorCode.TIMEOUT;
                            break;
                        default:
                            errorCode = GeolocationProviderErrorCode.POSITION_UNAVAILABLE;
                    }

                    resolve(err(new GeolocationProviderError(
                        errorMessage,
                        errorCode,
                        new Error(error.message)
                    )));
                },
                {
                    enableHighAccuracy: true,
                    timeout: 30000,
                    maximumAge: 10000
                }
            );
        });
    }

    async watchPosition(callback: PositionCallback): Promise<Result<number, GeolocationProviderError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        const gpsInterval = getGpsUpdateInterval();
        const useCompatibilityMode = getEarlySetting('watchCompatibilityMode');

        // Compatibility mode: use polling with getCurrentPosition instead of watchPosition
        // This is more reliable on some devices/browsers that have issues with watchPosition
        if (useCompatibilityMode) {
            console.info('[Geolocation] Using compatibility mode for position watch');
            try {
                const watchId = Date.now(); // Generate a unique ID
                const intervalId = window.setInterval(async () => {
                    const result = await this.getCurrentPosition();
                    if (result.isOk()) {
                        const pos = result.value;
                        const newPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };

                        // Skip if position hasn't changed (deduplication)
                        if (this.lastCompatibilityPosition &&
                            this.lastCompatibilityPosition.lat === newPos.lat &&
                            this.lastCompatibilityPosition.lng === newPos.lng) {
                            return;
                        }

                        this.lastCompatibilityPosition = newPos;
                        callback(pos);
                    }
                }, gpsInterval);

                this.compatibilityModeWatches.set(watchId, intervalId);
                return ok(watchId);
            } catch (error) {
                return err(new GeolocationProviderError(
                    'Failed to start watching position (compatibility mode)',
                    GeolocationProviderErrorCode.WATCH_FAILED,
                    error as Error
                ));
            }
        }

        // Standard mode: use native watchPosition
        try {
            const watchId = navigator.geolocation.watchPosition(
                callback,
                (error) => {
                    console.error('Geolocation watch error:', error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 30000,
                    maximumAge: gpsInterval
                }
            );

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
            // Check if this is a compatibility mode watch
            if (this.compatibilityModeWatches.has(watchId)) {
                const intervalId = this.compatibilityModeWatches.get(watchId)!;
                window.clearInterval(intervalId);
                this.compatibilityModeWatches.delete(watchId);
                this.lastCompatibilityPosition = null; // Reset deduplication state
            } else {
                // Standard mode: use native clearWatch
                navigator.geolocation.clearWatch(watchId);
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
        return 'geolocation' in navigator;
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
