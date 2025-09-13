/**
 * Web geolocation provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import type { IGeolocationProvider } from '../types';
import { GeolocationProviderError, GeolocationProviderErrorCode } from '../errors';

export class WebGeolocationProvider implements IGeolocationProvider {
    private initialized = false;

    async init(): Promise<Result<void, GeolocationProviderError>> {
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

        try {
            const watchId = navigator.geolocation.watchPosition(
                callback,
                (error) => {
                    console.error('Geolocation watch error:', error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 30000,
                    maximumAge: 10000
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
            navigator.geolocation.clearWatch(watchId);
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
