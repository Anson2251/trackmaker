import { Result, err, ok } from 'neverthrow';
import { Matrix } from 'ml-matrix';
import { GeographicPoint } from '../types';
import {
    GeolocationError,
    GeolocationUpdateServiceError
} from '../../error-handling/geolocation';
import { logError, toAppError } from '../../error-handling';
import { PermissionService, type PermissionPromptCallback } from './permission-service';
import { getPlatformServices } from '@/libs/platform';
import type { IGeolocationProvider, IIMUProvider } from '@/libs/platform/types';
import IPGeolocationBackend from '../backends/ip';
import { KalmanGeolocationBackend } from '../backends/kalman';
import { cloneDeep } from 'lodash-es';

export interface LocationUpdateHandler {
    (location: GeographicPoint, ...args: unknown[]): void | Promise<void>;
}

export interface LocationServiceInterface {
    getCurrentLocation(): Promise<Result<GeographicPoint, GeolocationError>>;
    startWatching(callback: LocationUpdateHandler): Promise<Result<number, GeolocationError>>;
    stopWatching(handlerId: number): Result<void, GeolocationError>;
    isWatching(): boolean;
    getLastKnownLocation(): GeographicPoint;
}

export interface GeolocationManagerInterface {
    initialize(promptCallback?: PermissionPromptCallback): Promise<Result<void, GeolocationError>>;
    getCurrentLocation(): Promise<Result<GeographicPoint, GeolocationError>>;
    startLocationUpdates(callback: LocationUpdateHandler): Promise<Result<number, GeolocationError>>;
    stopLocationUpdates(handlerId: number): Result<void, GeolocationError>;
    isServiceRunning(): boolean;
    isUsingGPS(): boolean;
    getLastKnownLocation(): GeographicPoint;
    addLocationListener(callback: LocationUpdateHandler): number;
    removeLocationListener(id: number): void;
    getCurrentBackend(): 'kalman' | 'platform' | 'ip' | null;
    getLastKalmanGain(): Matrix | null;
}

export class GeolocationManager implements GeolocationManagerInterface {
    private permissionService: PermissionService;
    private isInitialized = false;
    private platformGeolocationProvider: IGeolocationProvider | null = null;
    private imuProvider: IIMUProvider | null = null;
    private ipBackend: IPGeolocationBackend | null = null;
    private kalmanBackend: KalmanGeolocationBackend | null = null;
    private isWatching = false;
    private watchId: number | null = null;
    private locationUpdateCallbacks: Map<number, LocationUpdateHandler> = new Map();
    private lastKnownLocation: GeographicPoint | null = null;
    private currentBackend: 'kalman' | 'platform' | 'ip' | null = null;

    constructor(
        permissionService?: PermissionService,
    ) {
        this.permissionService = permissionService || new PermissionService();
        this.ipBackend = new IPGeolocationBackend();
    }

    /**
     * Check if IMU is available and supported
     */
    private async isIMUAvailable(): Promise<boolean> {
        try {
            const platformServices = getPlatformServices();
            if (platformServices.isErr()) {
                return false;
            }

            const imuResult = platformServices.value.getIMU();
            if (imuResult.isErr()) {
                return false;
            }

            const imuProvider = imuResult.value;
            const initResult = await imuProvider.init();
            if (initResult.isErr()) {
                return false;
            }

            return imuProvider.isSupported();
        } catch (error) {
            console.warn('[GeolocationManager] Error checking IMU availability:', error);
            return false;
        }
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
                console.log("GPS Permission not granted, prompting user.");
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

            // Step 3: Check if IMU is available for Kalman filtering
            const imuAvailable = await this.isIMUAvailable();
            console.info(`[GeolocationManager] IMU available: ${imuAvailable}`);

            // Step 4: Location Trail Strategy - Try to get location via GPS first
            console.info("[GeolocationManager] Attempting to get location via platform provider (GPS)");
            const gpsLocationResult = await this.tryGetGPSLocation();

            if (gpsLocationResult.isOk()) {
                console.info("[GeolocationManager] Successfully got location via GPS");
                this.lastKnownLocation = gpsLocationResult.value;

                // If both GPS and IMU are available, use Kalman filter
                if (imuAvailable) {
                    console.info("[GeolocationManager] Both GPS and IMU available, initializing Kalman filter");
                    await this.initializeWithKalmanBackend();
                } else {
                    console.info("[GeolocationManager] Using platform provider (GPS-only mode)");
                    this.currentBackend = 'platform';
                }
            } else {
                console.warn("[GeolocationManager] Failed to get location via GPS, falling back to IP backend", gpsLocationResult.error);
                return await this.initializeWithIPBackend();
            }

            // Set up permission change listener through platform provider
            // Note: Platform providers handle their own permission change notifications
            this.permissionService.addPermissionChangeListener((newState) => {
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
            return this.initializeWithIPBackend();
        }
    }

    /**
     * Try to get location via GPS/platform provider
     */
    private async tryGetGPSLocation(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.platformGeolocationProvider) {
            return err(new GeolocationUpdateServiceError(
                'No platform geolocation provider available',
                'no_platform_provider'
            ));
        }

        try {
            console.log("Trying to get the location via Geolocation API")
            const positionResult = await this.platformGeolocationProvider.getCurrentPosition();
            if (positionResult.isOk()) {
                const position = positionResult.value;
                return ok(new GeographicPoint(
                position.coords.latitude,
                position.coords.longitude,
                position.coords.accuracy
                ));
            } else {
                console.log("Geolocation API Calling Failed")
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

    /**
     * Initialize with Kalman backend (GPS + IMU fusion)
     */
    private async initializeWithKalmanBackend(): Promise<Result<void, GeolocationError>> {
        console.info("[GeolocationManager] Initializing with Kalman backend (GPS + IMU fusion)");

        if (!this.platformGeolocationProvider) {
            return err(new GeolocationUpdateServiceError(
                'Platform geolocation provider not available',
                'platform_provider_unavailable'
            ));
        }

        try {
            // Get IMU provider
            const platformServices = getPlatformServices();
            if (platformServices.isErr()) {
                console.warn("[GeolocationManager] Failed to get platform services for IMU, falling back to GPS-only");
                this.currentBackend = 'platform';
                return ok(undefined);
            }

            const imuResult = platformServices.value.getIMU();
            if (imuResult.isErr()) {
                console.warn("[GeolocationManager] Failed to get IMU provider, falling back to GPS-only");
                this.currentBackend = 'platform';
                return ok(undefined);
            }

            this.imuProvider = imuResult.value;

            // Create a platform backend adapter
            const platformBackend = {
                getPermissionStatus: async () => {
                    const status = await this.permissionService.getPermissionStatus();
                    return status.isOk() ? status.value : 'unknown';
                },
                getCurrentPosition: async () => {
                    const result = await this.platformGeolocationProvider!.getCurrentPosition();
                    if (result.isOk()) {
                        return new GeographicPoint(
                            result.value.coords.latitude,
                            result.value.coords.longitude,
                            result.value.coords.accuracy
                        );
                    }
                    throw new Error('Failed to get position');
                },
                watchPosition: async (callback: (location: GeographicPoint) => void) => {
                    const watchResult = await this.platformGeolocationProvider!.watchPosition((position) => {
                        callback(new GeographicPoint(
                            position.coords.latitude,
                            position.coords.longitude,
                            position.coords.accuracy
                        ));
                    });
                    if (watchResult.isErr()) {
                        throw new Error('Failed to watch position');
                    }
                    return watchResult.value;
                },
                clearWatch: (channelId: number) => {
                    this.platformGeolocationProvider!.clearWatch(channelId);
                }
            };

            // Create Kalman backend with IMU fusion enabled
            this.kalmanBackend = new KalmanGeolocationBackend(
                platformBackend,
                {
                    enableIMUFusion: true,
                    imuUpdateInterval: 100, // 10Hz IMU updates
                    maxAge: 5000, // 5 seconds max age
                    sigmaAcceleration: 1.0,
                    initialPositionUncertainty: 20,
                    initialVelocityUncertainty: 4
                },
                this.imuProvider
            );

            this.currentBackend = 'kalman';
            console.info("[GeolocationManager] Kalman backend initialized successfully");
            return ok(undefined);

        } catch (error) {
            console.warn("[GeolocationManager] Failed to initialize Kalman backend, falling back to GPS-only:", error);
            this.currentBackend = 'platform';
            return ok(undefined);
        }
    }

    async getCurrentLocation(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.isInitialized) {
            const error = new GeolocationUpdateServiceError("Geolocation manager not initialized", 'not_initialized');
            logError(error, 'GeolocationManager.getCurrentLocation');
            return err(error);
        }

        // Use the determined backend from initialization
        if (this.currentBackend === 'kalman' && this.kalmanBackend) {
            return this.getLocationFromKalmanBackend();
        } else if (this.currentBackend === 'platform' && this.platformGeolocationProvider) {
            return this.getLocationFromPlatformProvider();
        } else if (this.currentBackend === 'ip' && this.ipBackend) {
            return this.getLocationFromIPBackend();
        } else {
            // Fallback - try Kalman first, then platform, then IP if available
            console.warn("[GeolocationManager] No backend determined, attempting fallback strategy");

            if (this.kalmanBackend) {
                const kalmanResult = await this.getLocationFromKalmanBackend();
                if (kalmanResult.isOk()) {
                    this.currentBackend = 'kalman';
                    return kalmanResult;
                }
            }

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
     * Get location from Kalman backend
     */
    private async getLocationFromKalmanBackend(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.kalmanBackend) {
            return err(new GeolocationUpdateServiceError(
                'Kalman backend not available',
                'kalman_backend_unavailable'
            ));
        }

        try {
            const location = await this.kalmanBackend.getCurrentPosition();
            console.info("[GeolocationManager] Location retrieved from Kalman backend");
            this.doLocationUpdate(location);
            return ok(location);
        } catch (error) {
            const appError = toAppError(error, 'Failed to get location from Kalman backend');
            logError(appError, 'GeolocationManager.getLocationFromKalmanBackend');
            return err(new GeolocationUpdateServiceError(
                'Failed to get location from Kalman backend',
                'kalman_backend_failed',
                appError
            ));
        }
    }

    /**
     * Get location from platform provider
     */
    private async getLocationFromPlatformProvider(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.platformGeolocationProvider) {
            return err(new GeolocationUpdateServiceError(
                'Platform geolocation provider not available',
                'platform_provider_unavailable'
            ));
        }

        const platformResult = await this.platformGeolocationProvider.getCurrentPosition();
        if (platformResult.isOk()) {
            const position = platformResult.value;
            const geographicPoint = new GeographicPoint(
                position.coords.latitude,
                position.coords.longitude,
                position.coords.accuracy
            );
            console.info("[GeolocationManager] Location retrieved from platform provider");
            this.doLocationUpdate(geographicPoint);
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
    private async getLocationFromIPBackend(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.ipBackend) {
            return err(new GeolocationUpdateServiceError(
                'IP backend not available',
                'ip_backend_unavailable'
            ));
        }

        try {
            const location = await this.ipBackend.getCurrentPosition();
            console.info("[GeolocationManager] Location retrieved from IP backend");
            this.doLocationUpdate(location);
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
        if (this.currentBackend === 'kalman' && this.kalmanBackend) {
            return this.startKalmanLocationUpdates(callback);
        } else if (this.currentBackend === 'platform' && this.platformGeolocationProvider) {
            return this.startPlatformLocationUpdates(callback);
        } else if (this.currentBackend === 'ip' && this.ipBackend) {
            return this.startIPLocationUpdates(callback);
        } else {
            // Fallback - try Kalman first, then platform, then IP if available
            console.warn("[GeolocationManager] No backend determined, attempting fallback strategy");

            if (this.kalmanBackend) {
                const kalmanResult = await this.startKalmanLocationUpdates(callback);
                if (kalmanResult.isOk()) {
                    this.currentBackend = 'kalman';
                    return kalmanResult;
                }
            }

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
     * Start location updates using Kalman backend
     */
    private async startKalmanLocationUpdates(callback: LocationUpdateHandler): Promise<Result<number, GeolocationError>> {
        if (!this.kalmanBackend) {
            return err(new GeolocationUpdateServiceError(
                'Kalman backend not available',
                'kalman_backend_unavailable'
            ));
        }

        try {
            const watchId = await this.kalmanBackend.watchPosition((location) => {
                this.lastKnownLocation = location;
                this.doLocationUpdate(location);
                void callback(location);
            });

            console.info("[GeolocationManager] Location updates started via Kalman backend");
            this.isWatching = true;
            this.watchId = watchId;
            return ok(watchId);
        } catch (error) {
            const appError = toAppError(error, 'Failed to start location updates via Kalman backend');
            logError(appError, 'GeolocationManager.startKalmanLocationUpdates');
            return err(new GeolocationUpdateServiceError(
                'Failed to start location updates via Kalman backend',
                'kalman_watch_failed',
                appError
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
            const geographicPoint = new GeographicPoint(
                position.coords.latitude,
                position.coords.longitude,
                position.coords.accuracy
            )
            this.doLocationUpdate(geographicPoint);
            void callback(geographicPoint);
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
                this.doLocationUpdate(location);
                void callback(location);
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
        if (this.currentBackend === 'kalman' && this.kalmanBackend) {
            return this.stopKalmanLocationUpdates(handlerId);
        } else if (this.currentBackend === 'platform' && this.platformGeolocationProvider) {
            return this.stopPlatformLocationUpdates(handlerId);
        } else if (this.currentBackend === 'ip' && this.ipBackend) {
            return this.stopIPLocationUpdates(handlerId);
        } else {
            // Fallback - try all backends
            let lastError: GeolocationError | null = null;

            if (this.kalmanBackend) {
                const kalmanResult = this.stopKalmanLocationUpdates(handlerId);
                if (kalmanResult.isOk()) {
                    return kalmanResult;
                }
                lastError = kalmanResult.error;
            }

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
     * Stop location updates using Kalman backend
     */
    private stopKalmanLocationUpdates(handlerId: number): Result<void, GeolocationError> {
        if (!this.kalmanBackend) {
            return err(new GeolocationUpdateServiceError(
                'Kalman backend not available',
                'kalman_backend_unavailable'
            ));
        }

        try {
            this.kalmanBackend.clearWatch(handlerId);
            console.info("[GeolocationManager] Location updates stopped via Kalman backend");
            this.isWatching = false;
            this.watchId = null;
            return ok(undefined);
        } catch (error) {
            const appError = toAppError(error, 'Failed to stop location updates via Kalman backend');
            logError(appError, 'GeolocationManager.stopKalmanLocationUpdates');
            return err(new GeolocationUpdateServiceError(
                'Failed to stop location updates via Kalman backend',
                'kalman_clear_watch_failed',
                appError
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
        return this.currentBackend === 'platform' || this.currentBackend === 'kalman';
    }

    /**
     * Get the current backend being used
     */
    getCurrentBackend(): 'kalman' | 'platform' | 'ip' | null {
        return this.currentBackend;
    }

    getLastKnownLocation(): GeographicPoint {
        if (!this.lastKnownLocation) {
            console.warn('[GeolocationManager] No known location available - returning default coordinates (0, 0)');
            return new GeographicPoint(0, 0);
        }
        return this.lastKnownLocation;
    }

    addLocationListener(callback: LocationUpdateHandler): number {
        const id = Number(`${Date.now()} + ${Math.floor(Math.random() * 10000)}`);
        this.locationUpdateCallbacks.set(id, callback);
        return id;
    }

    removeLocationListener(id: number): void {
        this.locationUpdateCallbacks.delete(id);
    }

    doLocationUpdate(location: GeographicPoint): void {
        this.lastKnownLocation = cloneDeep(location);
        this.locationUpdateCallbacks.forEach((callback) => void callback(cloneDeep(location)));
    }

    // Additional utility methods
    getPermissionStatus() {
        return this.permissionService.currentPermission;
    }

    async refreshBackend(): Promise<Result<void, GeolocationError>> {
        // With platform providers, backend refresh is handled automatically
        return ok(undefined);
    }

    /**
     * Get the last calculated Kalman gain matrix
     * Returns null if not using Kalman backend or no GPS update has been processed yet
     */
    getLastKalmanGain(): Matrix | null {
        if (this.currentBackend === 'kalman' && this.kalmanBackend) {
            return this.kalmanBackend.getLastKalmanGain();
        }
        return null;
    }
}
