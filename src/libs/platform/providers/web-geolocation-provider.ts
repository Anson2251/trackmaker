/**
 * Web geolocation provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import type { IGeolocationProvider } from '../types';
import { GeolocationProviderError, GeolocationProviderErrorCode } from '../errors';
import { getGpsUpdateInterval, getEarlySetting } from '@/libs/default-settings';

export class WebGeolocationProvider implements IGeolocationProvider {
    private initialized = false;
    private compatibilityModeWatches = new Map<number, number>();
    private compatibilityModeCallbacks = new Map<number, PositionCallback>();
    private lastCompatibilityPosition: { lat: number; lng: number, acc: number } | null = null;
    private compatibilityIntervalId: number | null = null;

    async init(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GeolocationProviderError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        if (!this.isSupported()) {
            return err(new GeolocationProviderError(
                'Geolocation is not supported by this browser',
                GeolocationProviderErrorCode.UNSUPPORTED
            ));
        }

        const permissionResult = await this.getPermissionStatus();
        if (permissionResult.isErr()) {
            return err(permissionResult.error);
        }

        if (permissionResult.value === 'prompt' && permissionCallback) {
            const granted = await permissionCallback(permissionResult.value, 'permission.location.prompt');
            if (!granted) {
                return err(new GeolocationProviderError(
                    'Geolocation permission denied',
                    GeolocationProviderErrorCode.PERMISSION_DENIED
                ));
            }
            const recheckResult = await this.getPermissionStatus();
            if (recheckResult.isErr()) {
                return err(recheckResult.error);
            }
            if (recheckResult.value === 'denied') {
                return err(new GeolocationProviderError(
                    'Geolocation permission denied',
                    GeolocationProviderErrorCode.PERMISSION_DENIED
                ));
            }
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
            const positionResult = await this.getCurrentPosition();
            if (positionResult.isOk()) {
                return ok('granted');
            }
            return ok('denied');
        } catch (error) {
            if (this.isPositionError(error)) {
                if (error.code === error.PERMISSION_DENIED) {
                    return ok('denied');
                }
                return ok('prompt');
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

    async watchPosition(callback: PositionCallback, options?: { highFrequency?: boolean }): Promise<Result<number, GeolocationProviderError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        const gpsInterval = getGpsUpdateInterval();
        const useCompatibilityMode = getEarlySetting('watchCompatibilityMode');
        const highFrequency = options?.highFrequency ?? false;

        // Compatibility mode: use polling with getCurrentPosition instead of watchPosition
        // This is more reliable on some devices/browsers that have issues with watchPosition
        if (useCompatibilityMode || highFrequency) {
            if (highFrequency) console.log('[Geolocation] High frequency mode enabled')
            else console.info('[Geolocation] Using compatibility mode for position watch');

            try {
                const watchId = Date.now();
                this.compatibilityModeCallbacks.set(watchId, callback);

                // Start shared interval if not already running
                if (this.compatibilityIntervalId === null) {
                    this.compatibilityIntervalId = window.setInterval(async () => {
                        const result = await this.getCurrentPosition();
                        if (result.isOk()) {
                            const pos = result.value;
                            const newPos = { lat: pos.coords.latitude, lng: pos.coords.longitude, acc: pos.coords.accuracy };

                            // Skip if position hasn't changed (deduplication)
                            if (this.lastCompatibilityPosition &&
                                this.lastCompatibilityPosition.lat === newPos.lat &&
                                this.lastCompatibilityPosition.lng === newPos.lng &&
                                this.lastCompatibilityPosition.acc === newPos.acc
                            ) {
                                return;
                            }

                            this.lastCompatibilityPosition = newPos;

                            // Notify all callbacks
                            for (const cb of this.compatibilityModeCallbacks.values()) {
                                try {
                                    cb(pos);
                                } catch (error) {
                                    console.error('[Geolocation] Callback error:', error);
                                }
                            }
                        }
                    }, highFrequency ? 100 : gpsInterval);
                }

                this.compatibilityModeWatches.set(watchId, this.compatibilityIntervalId);
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
                    maximumAge: highFrequency ? 0 : gpsInterval
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
                this.compatibilityModeCallbacks.delete(watchId);
                this.compatibilityModeWatches.delete(watchId);

                // Only clear interval when no more callbacks
                if (this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null) {
                    window.clearInterval(this.compatibilityIntervalId);
                    this.compatibilityIntervalId = null;
                    this.lastCompatibilityPosition = null;
                }
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
