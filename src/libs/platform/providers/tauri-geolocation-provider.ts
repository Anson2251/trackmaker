/**
 * Tauri geolocation provider implementation
 *
 * Architecture:
 * - Mobile (iOS/Android): Uses Tauri geolocation plugin directly for full GPS capabilities
 * - Desktop (macOS/Windows/Linux): Uses Rust backend with singleton GeolocationManager
 *
 * Provides navigator.geolocation-compatible API with all available fields:
 * - coords: { latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed }
 * - timestamp
 */

import { Result, ok, err } from 'neverthrow';
import { invoke } from '@tauri-apps/api/core';
import { platform } from '@tauri-apps/plugin-os';
import type { IGeolocationProvider } from '../types';
import { GeolocationProviderError, GeolocationProviderErrorCode } from '../errors';
import { getGpsUpdateInterval } from '@/libs/default-settings';

// Permission state type from platform types
type PermissionState = 'granted' | 'denied' | 'prompt';

// Types from Tauri geolocation plugin
interface TauriPosition {
    coords: {
        latitude: number;
        longitude: number;
        altitude: number | null;
        accuracy: number;
        altitudeAccuracy: number | null;
        heading: number | null;
        speed: number | null;
    };
    timestamp: number;
}

type TauriPermissionState = 'granted' | 'denied' | 'prompt' | 'prompt-with-rationale';

// Type for Rust Position response
interface RustPosition {
    coords: {
        latitude: number;
        longitude: number;
        altitude: number | null;
        accuracy: number;
        altitude_accuracy: number | null;
        heading: number | null;
        speed: number | null;
    };
    timestamp: number;
}

export class TauriGeolocationProvider implements IGeolocationProvider {
    private initialized = false;
    private isMobile = false;
    private watchCallbacks = new Map<number, number>();
    private mobileUnwatchFn: (() => void) | null = null;

    // Lazy-loaded Tauri geolocation plugin (only used on mobile)
    // Using any to handle dynamic import type mismatches
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private tauriGeolocation: any = null;

    constructor() {
        // Detect platform
        const currentPlatform = platform();
        this.isMobile = currentPlatform === 'ios' || currentPlatform === 'android';
    }

    async init(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GeolocationProviderError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        if (this.isMobile) {
            return this.initMobile(permissionCallback);
        } else {
            return this.initDesktop(permissionCallback);
        }
    }

    private async initMobile(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GeolocationProviderError>> {
        try {
            // Dynamically import Tauri geolocation plugin (only on mobile)
            const geolocation = await import('@tauri-apps/plugin-geolocation');
            this.tauriGeolocation = {
                checkPermissions: geolocation.checkPermissions,
                requestPermissions: geolocation.requestPermissions,
                getCurrentPosition: geolocation.getCurrentPosition,
                watchPosition: geolocation.watchPosition,
                clearWatch: geolocation.clearWatch,
            };

            // Check permissions
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            const permissions = await this.tauriGeolocation.checkPermissions() as { location: TauriPermissionState };

            if (permissions.location === 'prompt' || permissions.location === 'prompt-with-rationale') {
                // Try to request permissions
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                const newPermissions = await this.tauriGeolocation.requestPermissions(['location']) as { location: TauriPermissionState };

                if (newPermissions.location !== 'granted') {
                    if (permissionCallback) {
                        const granted = await permissionCallback(newPermissions.location as PermissionState, 'permission.location.prompt');
                        if (!granted) {
                            return err(new GeolocationProviderError(
                                'Geolocation permission denied',
                                GeolocationProviderErrorCode.PERMISSION_DENIED
                            ));
                        }
                    } else {
                        return err(new GeolocationProviderError(
                            'Geolocation permission not granted',
                            GeolocationProviderErrorCode.PERMISSION_DENIED
                        ));
                    }
                }
            } else if (permissions.location === 'denied') {
                return err(new GeolocationProviderError(
                    'Geolocation permission denied',
                    GeolocationProviderErrorCode.PERMISSION_DENIED
                ));
            }

            this.initialized = true;
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationProviderError(
                'Failed to initialize mobile geolocation',
                GeolocationProviderErrorCode.INITIALIZATION_FAILED,
                error as Error
            ));
        }
    }

    private async initDesktop(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GeolocationProviderError>> {
        try {
            // Initialize Rust geolocation manager
            await invoke('init_geolocation_manager');

            // Check permission status
            const permissionResult = await this.getPermissionStatus();
            if (permissionResult.isErr()) {
                return err(permissionResult.error);
            }

            if (permissionResult.value === 'prompt') {
                // Try to request permission via Rust backend (works on macOS)
                let rustPermissionGranted = false;
                try {
                    await invoke('request_geolocation_permission');
                    rustPermissionGranted = true;

                    const recheckResult = await this.getPermissionStatus();
                    if (recheckResult.isErr() || recheckResult.value === 'denied') {
                        return err(new GeolocationProviderError(
                            'Geolocation permission denied by system',
                            GeolocationProviderErrorCode.PERMISSION_DENIED
                        ));
                    }
                } catch {
                    // Rust command not available - fall through to callback
                }

                if (!rustPermissionGranted && permissionCallback) {
                    const granted = await permissionCallback('prompt', 'permission.location.prompt');
                    if (!granted) {
                        return err(new GeolocationProviderError(
                            'Geolocation permission denied',
                            GeolocationProviderErrorCode.PERMISSION_DENIED
                        ));
                    }
                } else if (!rustPermissionGranted) {
                    return err(new GeolocationProviderError(
                        'Geolocation permission not granted',
                        GeolocationProviderErrorCode.PERMISSION_DENIED
                    ));
                }
            } else if (permissionResult.value === 'denied') {
                return err(new GeolocationProviderError(
                    'Geolocation permission denied',
                    GeolocationProviderErrorCode.PERMISSION_DENIED
                ));
            }

            this.initialized = true;
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationProviderError(
                'Failed to initialize desktop geolocation',
                GeolocationProviderErrorCode.INITIALIZATION_FAILED,
                error as Error
            ));
        }
    }

    async getPermissionStatus(): Promise<Result<PermissionState, GeolocationProviderError>> {
        if (this.isMobile && this.tauriGeolocation) {
            try {
                const permissions = await this.tauriGeolocation.checkPermissions();
                return ok(permissions.location);
            } catch (error) {
                return err(new GeolocationProviderError(
                    'Failed to get mobile permission status',
                    GeolocationProviderErrorCode.PERMISSION_DENIED,
                    error as Error
                ));
            }
        } else {
            // Desktop: use Rust backend or browser API
            try {
                const status = await invoke<string>('get_geolocation_permission_status');
                return ok(status as PermissionState);
            } catch {
                // Fall back to browser permissions API
                if (!navigator.permissions) {
                    return ok('prompt');
                }
                try {
                    const result = await navigator.permissions.query({ name: 'geolocation' });
                    return ok(result.state as PermissionState);
                } catch (error) {
                    return err(new GeolocationProviderError(
                        'Failed to get permission status',
                        GeolocationProviderErrorCode.PERMISSION_DENIED,
                        error as Error
                    ));
                }
            }
        }
    }

    async requestPermission(): Promise<Result<PermissionState, GeolocationProviderError>> {
        if (this.isMobile && this.tauriGeolocation) {
            try {
                const permissions = await this.tauriGeolocation.requestPermissions(['location']);
                return ok(permissions.location);
            } catch (error) {
                return err(new GeolocationProviderError(
                    'Failed to request mobile permission',
                    GeolocationProviderErrorCode.PERMISSION_DENIED,
                    error as Error
                ));
            }
        } else {
            // Desktop: try to get current position to trigger permission request
            try {
                await this.getCurrentPosition();
                return ok('granted');
            } catch (error) {
                return err(new GeolocationProviderError(
                    'Failed to request permission',
                    GeolocationProviderErrorCode.PERMISSION_DENIED,
                    error as Error
                ));
            }
        }
    }

    async getCurrentPosition(): Promise<Result<GeolocationPosition, GeolocationProviderError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        try {
            if (this.isMobile && this.tauriGeolocation) {
                const position = await this.tauriGeolocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 10000,
                });
                return ok(this.convertTauriPositionToGeolocationPosition(position));
            } else {
                // Desktop: use Rust backend
                const position = await invoke<RustPosition>('get_current_position');
                return ok(this.convertRustPositionToGeolocationPosition(position));
            }
        } catch (error) {
            return err(new GeolocationProviderError(
                'Failed to get current position',
                GeolocationProviderErrorCode.POSITION_UNAVAILABLE,
                error as Error
            ));
        }
    }

    async watchPosition(
        callback: PositionCallback,
        options?: { highFrequency?: boolean }
    ): Promise<Result<number, GeolocationProviderError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        try {
            if (this.isMobile && this.tauriGeolocation) {
                // Use Tauri plugin's watch on mobile
                const watchId = await this.tauriGeolocation.watchPosition(
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                    },
                    (position: TauriPosition) => {
                        callback(this.convertTauriPositionToGeolocationPosition(position));
                    }
                );
                this.watchCallbacks.set(watchId, watchId);
                return ok(watchId);
            } else {
                // Desktop: use polling via setInterval
                const gpsInterval = getGpsUpdateInterval();
                const interval = options?.highFrequency ? 100 : gpsInterval;

                const intervalId = window.setInterval(async () => {
                    try {
                        const position = await this.getCurrentPosition();
                        if (position.isOk()) {
                            callback(position.value);
                        }
                    } catch (error) {
                        console.error('Error in watch position:', error);
                    }
                }, interval);

                this.watchCallbacks.set(intervalId, intervalId);
                return ok(intervalId);
            }
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
            if (this.isMobile && this.tauriGeolocation) {
                this.tauriGeolocation.clearWatch(watchId).catch(console.error);
            } else {
                clearInterval(watchId);
            }
            this.watchCallbacks.delete(watchId);
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationProviderError(
                'Failed to clear watch',
                GeolocationProviderErrorCode.CLEAR_WATCH_FAILED,
                error as Error
            ));
        }
    }

    /**
     * Convert Tauri geolocation plugin Position to standard GeolocationPosition
     */
    private convertTauriPositionToGeolocationPosition(tauriPosition: TauriPosition): GeolocationPosition {
        const coord: GeolocationCoordinates = {
            latitude: tauriPosition.coords.latitude,
            longitude: tauriPosition.coords.longitude,
            altitude: tauriPosition.coords.altitude,
            accuracy: tauriPosition.coords.accuracy,
            altitudeAccuracy: tauriPosition.coords.altitudeAccuracy,
            heading: tauriPosition.coords.heading,
            speed: tauriPosition.coords.speed,
        } as GeolocationCoordinates;

        return {
            coords: coord,
            timestamp: tauriPosition.timestamp,
        } as GeolocationPosition;
    }

    /**
     * Convert Rust Position to standard GeolocationPosition
     */
    private convertRustPositionToGeolocationPosition(rustPosition: RustPosition): GeolocationPosition {
        const coord: GeolocationCoordinates = {
            latitude: rustPosition.coords.latitude,
            longitude: rustPosition.coords.longitude,
            altitude: rustPosition.coords.altitude,
            accuracy: rustPosition.coords.accuracy,
            altitudeAccuracy: rustPosition.coords.altitude_accuracy,
            heading: rustPosition.coords.heading,
            speed: rustPosition.coords.speed,
        } as GeolocationCoordinates;

        return {
            coords: coord,
            timestamp: rustPosition.timestamp,
        } as GeolocationPosition;
    }

    /**
     * Inject this provider as navigator.geolocation
     * Provides a navigator.geolocation-compatible API
     */
    injectNavigatorGeolocation(): void {
        type GeolocationInjectedType = (typeof navigator)["geolocation"] & { injected: boolean };

        if ((navigator.geolocation as GeolocationInjectedType)["injected"]) {
            return;
        }

        navigator.geolocation.getCurrentPosition = (
            successCallback: PositionCallback,
            errorCallback?: PositionErrorCallback,
            _options?: PositionOptions
        ) => {
            this.getCurrentPosition()
                .then((result) => {
                    if (result.isOk()) {
                        successCallback(result.value);
                    } else {
                        errorCallback?.(this.createPositionError(result.error));
                    }
                })
                .catch((error) => {
                    errorCallback?.(this.createPositionError(error));
                });
        };

        navigator.geolocation.watchPosition = (
            successCallback: PositionCallback,
            errorCallback?: PositionErrorCallback,
            options?: PositionOptions
        ) => {
            const watchPromise = this.watchPosition(
                (position: GeolocationPosition) => successCallback(position),
                { highFrequency: options?.enableHighAccuracy }
            );

            watchPromise.then((result) => {
                if (result.isErr() && errorCallback) {
                    errorCallback(this.createPositionError(result.error));
                }
            });

            // Return a temporary ID that will be replaced when watchPromise resolves
            return 0;
        };

        navigator.geolocation.clearWatch = (watchId: number) => {
            this.clearWatch(watchId);
        };

        (navigator.geolocation as GeolocationInjectedType)["injected"] = true;
    }

    private createPositionError(error: Error | GeolocationProviderError): GeolocationPositionError {
        const message = error instanceof GeolocationProviderError ? error.message : error.message;

        return {
            code: 2, // POSITION_UNAVAILABLE
            message,
            PERMISSION_DENIED: 1,
            POSITION_UNAVAILABLE: 2,
            TIMEOUT: 3,
        } as GeolocationPositionError;
    }
}
