/**
 * Web geolocation provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import type { IGeolocationProvider } from '../types';
import { GeolocationProviderError, GeolocationProviderErrorCode } from '../errors';
import { getGpsUpdateInterval, getKalmanGpsUpdateInterval, getEarlySetting } from '@/libs/default-settings';

export class WebGeolocationProvider implements IGeolocationProvider {
    private static readonly HIGH_FREQUENCY_NATIVE_STALE_FACTOR = 1.5;
    private static readonly POLL_ACCURACY_WORSE_FACTOR = 1.5;
    private initialized = false;
    private compatibilityModeWatches = new Map<number, { highFrequency: boolean; nativeWatchId: number | null }>();
    private compatibilityModeCallbacks = new Map<number, PositionCallback>();
    private highFrequencyCallbacks = new Map<number, PositionCallback>();
    private lastCompatibilityPosition: { lat: number; lng: number, acc: number } | null = null;
    private lastCompatibilityUpdateTime = 0;
    private compatibilityIntervalId: number | null = null;
    private highFrequencyIntervalId: number | null = null;
    private initPromise: Promise<Result<void, GeolocationProviderError>> | null = null;
    private nextCompatibilityWatchId = -1;
    private regularPollInFlight = false;
    private highFrequencyPollInFlight = false;
    private lastHighFrequencyNativeUpdateTime = 0;
    private lastHighFrequencyNativeAccuracy: number | null = null;

    async init(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GeolocationProviderError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        if (this.initPromise) {
            return this.initPromise;
        }

        this.initPromise = this.doInit(permissionCallback);
        const result = await this.initPromise;

        if (result.isErr()) {
            this.initPromise = null;
        }

        return result;
    }

    async doInit(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GeolocationProviderError>> {
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
                { timeout: 5000, maximumAge: Infinity, enableHighAccuracy: true }
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
                    maximumAge: 0
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

        const kalmanGpsInterval = getKalmanGpsUpdateInterval()
        const gpsInterval = getGpsUpdateInterval();
        const useCompatibilityMode = getEarlySetting('watchCompatibilityMode');
        const highFrequency = options?.highFrequency ?? false;
        const usePollingFallback = highFrequency;
        const usePollingOnly = useCompatibilityMode && !highFrequency;

        // High-frequency tracking uses native watchPosition plus polling fallback.
        // Regular compatibility mode remains polling-only for browsers where watchPosition is unreliable.
        if (usePollingOnly || usePollingFallback) {
            if (highFrequency) console.info('[Geolocation] Using hybrid watch + polling fallback for high-frequency tracking')
            else console.info('[Geolocation] Using compatibility mode for position watch');

            try {
                const watchId = this.nextCompatibilityWatchId--;
                const callbackMap = highFrequency ? this.highFrequencyCallbacks : this.compatibilityModeCallbacks;
                callbackMap.set(watchId, callback);
                let nativeWatchId: number | null = null;

                if (usePollingFallback) {
                    const nativeWatchResult = this.startNativeWatch((position) => {
                        this.lastHighFrequencyNativeUpdateTime = performance.now();
                        this.lastHighFrequencyNativeAccuracy = position.coords.accuracy;
                        callback(position);
                    });
                    if (nativeWatchResult.isOk()) {
                        nativeWatchId = nativeWatchResult.value;
                    } else {
                        console.warn('[Geolocation] Native watchPosition failed, continuing with polling fallback only:', nativeWatchResult.error);
                    }
                }

                if (highFrequency) {
                    if (this.highFrequencyIntervalId === null) {
                        this.highFrequencyIntervalId = window.setInterval(() => {
                            void this.pollCompatibilityWatch(true, kalmanGpsInterval);
                        }, kalmanGpsInterval);
                    }
                } else if (this.compatibilityIntervalId === null) {
                    this.compatibilityIntervalId = window.setInterval(() => {
                        void this.pollCompatibilityWatch(false, gpsInterval);
                    }, gpsInterval);
                }

                this.compatibilityModeWatches.set(watchId, { highFrequency, nativeWatchId });
                return ok(watchId);
            } catch (error) {
                return err(new GeolocationProviderError(
                    'Failed to start watching position (compatibility mode)',
                    GeolocationProviderErrorCode.WATCH_FAILED,
                    error as Error
                ));
            }
        }

        return this.startNativeWatch(callback);
    }

    clearWatch(watchId: number): Result<void, GeolocationProviderError> {
        try {
            // Check if this is a compatibility mode watch
            if (this.compatibilityModeWatches.has(watchId)) {
                const watch = this.compatibilityModeWatches.get(watchId)!;
                if (watch.highFrequency) {
                    this.highFrequencyCallbacks.delete(watchId);
                } else {
                    this.compatibilityModeCallbacks.delete(watchId);
                }
                this.compatibilityModeWatches.delete(watchId);

                if (watch.nativeWatchId !== null) {
                    navigator.geolocation.clearWatch(watch.nativeWatchId);
                }

                if (this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null) {
                    window.clearInterval(this.compatibilityIntervalId);
                    this.compatibilityIntervalId = null;
                    this.lastCompatibilityPosition = null;
                    this.lastCompatibilityUpdateTime = 0;
                    this.regularPollInFlight = false;
                }

                if (this.highFrequencyCallbacks.size === 0 && this.highFrequencyIntervalId !== null) {
                    window.clearInterval(this.highFrequencyIntervalId);
                    this.highFrequencyIntervalId = null;
                    this.highFrequencyPollInFlight = false;
                    this.lastHighFrequencyNativeUpdateTime = 0;
                    this.lastHighFrequencyNativeAccuracy = null;
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

    private isSupported(): boolean {
        return 'geolocation' in navigator;
    }

    private async pollCompatibilityWatch(highFrequency: boolean, gpsInterval: number): Promise<void> {
        const callbackMap = highFrequency ? this.highFrequencyCallbacks : this.compatibilityModeCallbacks;
        if (callbackMap.size === 0) {
            return;
        }

        if (highFrequency) {
            if (this.highFrequencyPollInFlight) {
                return;
            }
            this.highFrequencyPollInFlight = true;
        } else {
            if (this.regularPollInFlight) {
                return;
            }
            this.regularPollInFlight = true;
        }

        try {
            const result = await this.getCurrentPosition();
            if (result.isErr()) {
                return;
            }

            const pos = result.value;
            if (highFrequency) {
                const now = performance.now();
                const nativeFreshnessWindow = gpsInterval * WebGeolocationProvider.HIGH_FREQUENCY_NATIVE_STALE_FACTOR;
                const nativeRecentlyUpdated =
                    this.lastHighFrequencyNativeUpdateTime > 0 &&
                    now - this.lastHighFrequencyNativeUpdateTime < nativeFreshnessWindow;
                const pollAccuracyIsMuchWorse =
                    this.lastHighFrequencyNativeAccuracy !== null &&
                    pos.coords.accuracy > this.lastHighFrequencyNativeAccuracy * WebGeolocationProvider.POLL_ACCURACY_WORSE_FACTOR;

                if (nativeRecentlyUpdated || pollAccuracyIsMuchWorse) {
                    return;
                }
            }

            if (!highFrequency) {
                const newPos = { lat: pos.coords.latitude, lng: pos.coords.longitude, acc: pos.coords.accuracy };
                const now = Date.now();
                const forceUpdate = now - this.lastCompatibilityUpdateTime > gpsInterval;

                if (!forceUpdate && this.lastCompatibilityPosition &&
                    this.lastCompatibilityPosition.lat === newPos.lat &&
                    this.lastCompatibilityPosition.lng === newPos.lng &&
                    this.lastCompatibilityPosition.acc === newPos.acc
                ) {
                    return;
                }

                this.lastCompatibilityPosition = newPos;
                this.lastCompatibilityUpdateTime = now;
            }

            for (const cb of callbackMap.values()) {
                try {
                    cb(pos);
                } catch (error) {
                    console.error('[Geolocation] Callback error:', error);
                }
            }
        } finally {
            if (highFrequency) {
                this.highFrequencyPollInFlight = false;
            } else {
                this.regularPollInFlight = false;
            }
        }
    }

    private startNativeWatch(callback: PositionCallback): Result<number, GeolocationProviderError> {
        try {
            const watchId = navigator.geolocation.watchPosition(
                callback,
                (error) => {
                    console.error('[Geolocation] Native watchPosition error:', error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 30000,
                    // maximumAge controls cache freshness, not callback cadence.
                    maximumAge: 0
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
