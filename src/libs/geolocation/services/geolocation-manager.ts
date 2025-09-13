import { Result, err, ok } from 'neverthrow';
import type { GeographicPointType } from '../types';
import {
    GeolocationError,
    GeolocationUpdateServiceError
} from '../../error-handling/geolocation';
import { logError, toAppError } from '../../error-handling';
import { PermissionService, type PermissionPromptCallback } from './permission-service';
import { getPlatformServices } from '@/libs/platform';
import type { IGeolocationProvider } from '@/libs/platform/types';
import IPGeolocationBackend from '../backends/ip';

export interface LocationUpdateHandler {
    (location: GeographicPointType, ...args: unknown[]): void;
}

export interface LocationServiceInterface {
    getCurrentLocation(): Promise<Result<GeographicPointType, GeolocationError>>;
    startWatching(callback: LocationUpdateHandler): Promise<Result<number, GeolocationError>>;
    stopWatching(handlerId: number): Result<void, GeolocationError>;
    isWatching(): boolean;
    getLastKnownLocation(): GeographicPointType;
}

export interface GeolocationManagerInterface {
    initialize(promptCallback?: PermissionPromptCallback): Promise<Result<void, GeolocationError>>;
    getCurrentLocation(): Promise<Result<GeographicPointType, GeolocationError>>;
    startLocationUpdates(callback: LocationUpdateHandler): Promise<Result<number, GeolocationError>>;
    stopLocationUpdates(handlerId: number): Result<void, GeolocationError>;
    isServiceRunning(): boolean;
    isUsingGPS(): boolean;
    getLastKnownLocation(): GeographicPointType;
    addLocationListener(callback: LocationUpdateHandler): number;
    removeLocationListener(id: number): void;
    getCurrentBackend(): 'platform' | 'ip' | null;
}

export class GeolocationManager implements GeolocationManagerInterface {
    private permissionService: PermissionService;
    private isInitialized = false;
    private platformGeolocationProvider: IGeolocationProvider | null = null;
    private ipBackend: IPGeolocationBackend | null = null;
    private isWatching = false;
    private watchId: number | null = null;
    private locationUpdateCallbacks: Map<number, LocationUpdateHandler> = new Map();
    private lastKnownLocation: GeographicPointType | null = null;
    private currentBackend: 'platform' | 'ip' | null = null;

    constructor(
        permissionService?: PermissionService,
    ) {
        this.permissionService = permissionService || new PermissionService();
        this.ipBackend = new IPGeolocationBackend();
    }

    async initialize(promptCallback?: PermissionPromptCallback): Promise<Result<void, GeolocationError>> {
        if (this.isInitialized) {
            console.info("[GeolocationManager] Already initialized");
            return ok(undefined);
        }

        console.info("[GeolocationManager] Initializing geolocation services with location trail strategy");

        try {
            // Get platform services and geolocation provider
            const platformServices = getPlatformServices();
            if (platformServices.isErr()) {
                console.warn("[GeolocationManager] Failed to get platform services, will try IP backend");
                return await this.initializeWithIPBackend();
            }

            const geolocationProvider = platformServices.value.getGeolocation();
            if (geolocationProvider.isErr()) {
                console.warn("[GeolocationManager] Failed to get geolocation provider, will try IP backend");
                return await this.initializeWithIPBackend();
            }

            this.platformGeolocationProvider = geolocationProvider.value;

            // Initialize the platform provider
            const initResult = await this.platformGeolocationProvider.init();
            if (initResult.isErr()) {
                console.warn("[GeolocationManager] Failed to initialize platform provider, will try IP backend");
                return await this.initializeWithIPBackend();
            }

            // Set platform provider in permission service for unified handling
            this.permissionService.setPlatformProvider(this.platformGeolocationProvider);

            // Step 1: Get permission status from platform provider
            const permissionResult = await this.permissionService.getPermissionStatus();
            if (permissionResult.isErr()) {
                logError(permissionResult.error, 'GeolocationManager.initialize.permission');
                console.warn("[GeolocationManager] Failed to get permission status, will try IP backend");
                return await this.initializeWithIPBackend();
            }

            const permissionState = permissionResult.value;

            // Step 2: Handle permission prompting if needed
            if (permissionState === 'prompt' && promptCallback) {
                const userResponse = await promptCallback(permissionState);
                if (userResponse) {
                    // Request permission through platform provider
                    const requestResult = await this.platformGeolocationProvider.requestPermission();
                    if (requestResult.isErr()) {
                        logError(requestResult.error, 'GeolocationManager.initialize.requestPermission');
                        console.warn("[GeolocationManager] Failed to request permission, will try IP backend");
                        return await this.initializeWithIPBackend();
                    }
                }
            }

            // Step 3: Location Trail Strategy - Try to get location via GPS first
            console.info("[GeolocationManager] Attempting to get location via platform provider (GPS)");
            const gpsLocationResult = await this.tryGetGPSLocation();

            if (gpsLocationResult.isOk()) {
                console.info("[GeolocationManager] Successfully got location via GPS, using platform provider");
                this.currentBackend = 'platform';
                this.lastKnownLocation = gpsLocationResult.value;
            } else {
                console.warn("[GeolocationManager] Failed to get location via GPS, falling back to IP backend");
                return await this.initializeWithIPBackend();
            }

            // Set up permission change listener through platform provider
            // Note: Platform providers handle their own permission change notifications
            this.permissionService.addPermissionChangeListener(async (newState) => {
                console.info(`[GeolocationManager] Permission changed to: ${newState}`);

                if (newState === 'denied' && this.isWatching) {
                    // Stop location updates if permission is denied
                    if (this.watchId !== null) {
                        this.stopLocationUpdates(this.watchId);
                    }
                }
            });

            this.isInitialized = true;
            console.info("[GeolocationManager] Geolocation services initialized successfully using platform provider");
            return ok(undefined);

        } catch {
            console.warn("[GeolocationManager] Exception during platform initialization, will try IP backend");
            return await this.initializeWithIPBackend();
        }
    }

    /**
     * Try to get location via GPS/platform provider
     */
    private async tryGetGPSLocation(): Promise<Result<GeographicPointType, GeolocationError>> {
        if (!this.platformGeolocationProvider) {
            return err(new GeolocationUpdateServiceError(
                'No platform geolocation provider available',
                'no_platform_provider'
            ));
        }

        try {
            const positionResult = await this.platformGeolocationProvider.getCurrentPosition();
            if (positionResult.isOk()) {
                const position = positionResult.value;
                return ok({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            } else {
                return err(new GeolocationUpdateServiceError(
                    'Failed to get location from platform provider',
                    'platform_location_failed',
                    positionResult.error
                ));
            }
        } catch (error) {
            return err(new GeolocationUpdateServiceError(
                'Exception while getting location from platform provider',
                'platform_location_exception',
                error as Error
            ));
        }
    }

    /**
     * Initialize with IP backend as fallback
     */
    private async initializeWithIPBackend(): Promise<Result<void, GeolocationError>> {
        console.info("[GeolocationManager] Initializing with IP backend as fallback");

        if (!this.ipBackend) {
            return err(new GeolocationUpdateServiceError(
                'IP backend not available',
                'ip_backend_unavailable'
            ));
        }

        try {
            // Try to get location via IP backend
            const ipLocation = await this.ipBackend.getCurrentPosition();
            console.info("[GeolocationManager] Successfully got location via IP backend");

            this.currentBackend = 'ip';
            this.lastKnownLocation = ipLocation;
            this.isInitialized = true;

            console.info("[GeolocationManager] Geolocation services initialized successfully using IP backend");
            return ok(undefined);

        } catch (error) {
            const initError = new GeolocationUpdateServiceError(
                'Failed to initialize geolocation manager with IP backend',
                'ip_backend_failed',
                error as Error
            );
            logError(initError, 'GeolocationManager.initializeWithIPBackend');
            return err(initError);
        }
    }

    async getCurrentLocation(): Promise<Result<GeographicPointType, GeolocationError>> {
        if (!this.isInitialized) {
            const error = new GeolocationUpdateServiceError("Geolocation manager not initialized", 'not_initialized');
            logError(error, 'GeolocationManager.getCurrentLocation');
            return err(error);
        }

        // Use the determined backend from initialization
        if (this.currentBackend === 'platform' && this.platformGeolocationProvider) {
            return await this.getLocationFromPlatformProvider();
        } else if (this.currentBackend === 'ip' && this.ipBackend) {
            return await this.getLocationFromIPBackend();
        } else {
            // Fallback - try platform first, then IP if available
            console.warn("[GeolocationManager] No backend determined, attempting fallback strategy");

            if (this.platformGeolocationProvider) {
                const platformResult = await this.getLocationFromPlatformProvider();
                if (platformResult.isOk()) {
                    this.currentBackend = 'platform';
                    return platformResult;
                }
            }

            if (this.ipBackend) {
                const ipResult = await this.getLocationFromIPBackend();
                if (ipResult.isOk()) {
                    this.currentBackend = 'ip';
                    return ipResult;
                }
            }

            return err(new GeolocationUpdateServiceError(
                'No working geolocation backend available',
                'no_working_backend'
            ));
        }
    }

    /**
     * Get location from platform provider
     */
    private async getLocationFromPlatformProvider(): Promise<Result<GeographicPointType, GeolocationError>> {
        if (!this.platformGeolocationProvider) {
            return err(new GeolocationUpdateServiceError(
                'Platform geolocation provider not available',
                'platform_provider_unavailable'
            ));
        }

        const platformResult = await this.platformGeolocationProvider.getCurrentPosition();
        if (platformResult.isOk()) {
            const position = platformResult.value;
            const geographicPoint: GeographicPointType = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            console.info("[GeolocationManager] Location retrieved from platform provider");
            this.lastKnownLocation = geographicPoint;
            return ok(geographicPoint);
        } else {
            // If platform provider failed, return the error
            logError(platformResult.error, 'GeolocationManager.getLocationFromPlatformProvider');
            return err(new GeolocationUpdateServiceError(
                'Failed to get location from platform provider',
                'platform_provider_failed',
                platformResult.error
            ));
        }
    }

    /**
     * Get location from IP backend
     */
    private async getLocationFromIPBackend(): Promise<Result<GeographicPointType, GeolocationError>> {
        if (!this.ipBackend) {
            return err(new GeolocationUpdateServiceError(
                'IP backend not available',
                'ip_backend_unavailable'
            ));
        }

        try {
            const location = await this.ipBackend.getCurrentPosition();
            console.info("[GeolocationManager] Location retrieved from IP backend");
            this.lastKnownLocation = location;
            return ok(location);
        } catch (error) {
            const appError = toAppError(error, 'Failed to get location from IP backend');
            logError(appError, 'GeolocationManager.getLocationFromIPBackend');
            return err(new GeolocationUpdateServiceError(
                'Failed to get location from IP backend',
                'ip_backend_failed',
                appError
            ));
        }
    }

    async startLocationUpdates(callback: LocationUpdateHandler): Promise<Result<number, GeolocationError>> {
        if (!this.isInitialized) {
            const error = new GeolocationUpdateServiceError("Geolocation manager not initialized", 'not_initialized');
            logError(error, 'GeolocationManager.startLocationUpdates');
            return err(error);
        }

        console.info("[GeolocationManager] Starting location updates");

        // Use the determined backend from initialization
        if (this.currentBackend === 'platform' && this.platformGeolocationProvider) {
            return await this.startPlatformLocationUpdates(callback);
        } else if (this.currentBackend === 'ip' && this.ipBackend) {
            return await this.startIPLocationUpdates(callback);
        } else {
            // Fallback - try platform first, then IP if available
            console.warn("[GeolocationManager] No backend determined, attempting fallback strategy");

            if (this.platformGeolocationProvider) {
                const platformResult = await this.startPlatformLocationUpdates(callback);
                if (platformResult.isOk()) {
                    this.currentBackend = 'platform';
                    return platformResult;
                }
            }

            if (this.ipBackend) {
                const ipResult = await this.startIPLocationUpdates(callback);
                if (ipResult.isOk()) {
                    this.currentBackend = 'ip';
                    return ipResult;
                }
            }

            return err(new GeolocationUpdateServiceError(
                'No working geolocation backend available for location updates',
                'no_working_backend_for_updates'
            ));
        }
    }

    /**
     * Start location updates using platform provider
     */
    private async startPlatformLocationUpdates(callback: LocationUpdateHandler): Promise<Result<number, GeolocationError>> {
        if (!this.platformGeolocationProvider) {
            return err(new GeolocationUpdateServiceError(
                'Platform geolocation provider not available',
                'platform_provider_unavailable'
            ));
        }

        const watchResult = await this.platformGeolocationProvider.watchPosition((position) => {
            const geographicPoint: GeographicPointType = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            this.lastKnownLocation = geographicPoint;
            callback(geographicPoint);
        });

        if (watchResult.isOk()) {
            console.info("[GeolocationManager] Location updates started via platform provider");
            this.isWatching = true;
            this.watchId = watchResult.value;
            return ok(watchResult.value);
        } else {
            // If platform provider watch failed, return the error
            return err(new GeolocationUpdateServiceError(
                'Failed to start location updates via platform provider',
                'platform_watch_failed',
                watchResult.error
            ));
        }
    }

    /**
     * Start location updates using IP backend
     */
    private async startIPLocationUpdates(callback: LocationUpdateHandler): Promise<Result<number, GeolocationError>> {
        if (!this.ipBackend) {
            return err(new GeolocationUpdateServiceError(
                'IP backend not available',
                'ip_backend_unavailable'
            ));
        }

        try {
            const watchId = await this.ipBackend.watchPosition((location) => {
                this.lastKnownLocation = location;
                callback(location);
            });

            console.info("[GeolocationManager] Location updates started via IP backend");
            this.isWatching = true;
            this.watchId = watchId;
            return ok(watchId);
        } catch (error) {
            const appError = toAppError(error, 'Failed to start location updates via IP backend');
            logError(appError, 'GeolocationManager.startIPLocationUpdates');
            return err(new GeolocationUpdateServiceError(
                'Failed to start location updates via IP backend',
                'ip_watch_failed',
                appError
            ));
        }
    }

    stopLocationUpdates(handlerId: number): Result<void, GeolocationError> {
        if (!this.isInitialized) {
            const error = new GeolocationUpdateServiceError("Geolocation manager not initialized", 'not_initialized');
            logError(error, 'GeolocationManager.stopLocationUpdates');
            return err(error);
        }

        console.info("[GeolocationManager] Stopping location updates");

        // Use the determined backend
        if (this.currentBackend === 'platform' && this.platformGeolocationProvider) {
            return this.stopPlatformLocationUpdates(handlerId);
        } else if (this.currentBackend === 'ip' && this.ipBackend) {
            return this.stopIPLocationUpdates(handlerId);
        } else {
            // Fallback - try both backends
            let lastError: GeolocationError | null = null;

            if (this.platformGeolocationProvider) {
                const platformResult = this.stopPlatformLocationUpdates(handlerId);
                if (platformResult.isOk()) {
                    return platformResult;
                }
                lastError = platformResult.error;
            }

            if (this.ipBackend) {
                const ipResult = this.stopIPLocationUpdates(handlerId);
                if (ipResult.isOk()) {
                    return ipResult;
                }
                lastError = ipResult.error;
            }

            return err(lastError || new GeolocationUpdateServiceError(
                'No working geolocation backend available for stopping updates',
                'no_working_backend_for_stop'
            ));
        }
    }

    /**
     * Stop location updates using platform provider
     */
    private stopPlatformLocationUpdates(handlerId: number): Result<void, GeolocationError> {
        if (!this.platformGeolocationProvider) {
            return err(new GeolocationUpdateServiceError(
                'Platform geolocation provider not available',
                'platform_provider_unavailable'
            ));
        }

        const clearResult = this.platformGeolocationProvider.clearWatch(handlerId);
        if (clearResult.isOk()) {
            console.info("[GeolocationManager] Location updates stopped via platform provider");
            this.isWatching = false;
            this.watchId = null;
            return ok(undefined);
        } else {
            // If platform provider clear watch failed, return the error
            return err(new GeolocationUpdateServiceError(
                'Failed to stop location updates via platform provider',
                'platform_clear_watch_failed',
                clearResult.error
            ));
        }
    }

    /**
     * Stop location updates using IP backend
     */
    private stopIPLocationUpdates(handlerId: number): Result<void, GeolocationError> {
        if (!this.ipBackend) {
            return err(new GeolocationUpdateServiceError(
                'IP backend not available',
                'ip_backend_unavailable'
            ));
        }

        try {
            this.ipBackend.clearWatch(handlerId);
            console.info("[GeolocationManager] Location updates stopped via IP backend");
            this.isWatching = false;
            this.watchId = null;
            return ok(undefined);
        } catch (error) {
            const appError = toAppError(error, 'Failed to stop location updates via IP backend');
            logError(appError, 'GeolocationManager.stopIPLocationUpdates');
            return err(new GeolocationUpdateServiceError(
                'Failed to stop location updates via IP backend',
                'ip_clear_watch_failed',
                appError
            ));
        }
    }

    isServiceRunning(): boolean {
        return this.isWatching;
    }

    isUsingGPS(): boolean {
        // Return true if using platform provider (GPS), false if using IP backend
        return this.currentBackend === 'platform';
    }

    /**
     * Get the current backend being used
     */
    getCurrentBackend(): 'platform' | 'ip' | null {
        return this.currentBackend;
    }

    getLastKnownLocation(): GeographicPointType {
        if (!this.lastKnownLocation) {
            return { latitude: 0, longitude: 0 };
        }
        return this.lastKnownLocation;
    }

    addLocationListener(callback: LocationUpdateHandler): number {
        const id = Date.now() + Math.random();
        this.locationUpdateCallbacks.set(id, callback);
        return id;
    }

    removeLocationListener(id: number): void {
        this.locationUpdateCallbacks.delete(id);
    }

    // Additional utility methods
    getPermissionStatus() {
        return this.permissionService.currentPermission;
    }

    async refreshBackend(): Promise<Result<void, GeolocationError>> {
        // With platform providers, backend refresh is handled automatically
        return ok(undefined);
    }
}
