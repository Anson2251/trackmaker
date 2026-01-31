import { Result, err, ok } from "neverthrow";
import { Matrix } from "ml-matrix";
import { GeographicPoint } from "../types";
import {
    GeolocationError,
    GeolocationUpdateServiceError,
} from "../../error-handling/geolocation";
import { logError, toAppError } from "../../error-handling";
import { BackendManager } from "../core/backend-manager";
import { LocationStateManager } from "../core/location-state-manager";
import { GPSBackend } from "../backends/gps-backend";
import { IPFallbackBackend } from "../backends/ip-fallback-backend";
import { KalmanBackend } from "../backends/kalman-backend";
import { cloneDeep } from "lodash-es";
import { isKalmanFilterEnabled, getIMUUpdateFrequency, getEarlySetting, getKalmanInitialAccelerationUncertainty, getKalmanInitialPositionUncertainty, getKalmanInitialVelocityUncertainty, getKalmanGpsSpeedUncertainty } from "@/libs/default-settings";
import { wgs2gcj } from "../utils/coordinate-transformer";
import type { KalmanState } from "../kalman/kalman-types";

export interface LocationUpdateHandler {
    (location: GeographicPoint, ...args: unknown[]): void | Promise<void>;
}

export interface GeolocationManagerInterface {
    initialize(): Promise<Result<void, GeolocationError>>;
    getCurrentLocation(): Promise<Result<GeographicPoint, GeolocationError>>;
    startLocationUpdates(
        callback: LocationUpdateHandler,
    ): Promise<Result<number, GeolocationError>>;
    stopLocationUpdates(
        handlerId: number,
    ): Promise<Result<void, GeolocationError>>;
    isServiceRunning(): boolean;
    isUsingGPS(): boolean;
    getLastKnownLocation(): GeographicPoint;
    addLocationListener(callback: LocationUpdateHandler): number;
    removeLocationListener(id: number): void;
    getCurrentBackend(): "kalman" | "gps" | "ip" | null;
    getLastKalmanGain(): Matrix | null;
    getKalmanState(): KalmanState | null;
}

export class GeolocationManager implements GeolocationManagerInterface {
    private static instance: GeolocationManager | null = null;
    private isInitialized = false;
    private backendManager: BackendManager;
    private stateManager: LocationStateManager;
    private locationUpdateCallbacks: Map<number, LocationUpdateHandler> =
        new Map();
    private nextCallbackId = 1;

    private constructor() {
        // Initialize backends based on user setting, conditionally include Kalman based on settings
        const strategies = [];
        const backendPreference = getEarlySetting('geolocationBackend');

        // Determine which backends to include based on user preference
        const includeKalman = backendPreference === 'auto' ? isKalmanFilterEnabled() : backendPreference === 'kalman';
        const includeGPS = backendPreference === 'auto' || backendPreference === 'gps';
        const includeIP = backendPreference === 'auto' || backendPreference === 'ip';

        // Include Kalman backend only if enabled in settings
        if (includeKalman) {
            const frequency = getIMUUpdateFrequency();
            const imuUpdateInterval = frequency > 0 ? Math.floor(1000 / frequency) : 50; // Default to 20Hz if immediate
            strategies.push(new KalmanBackend({
                imuUpdateInterval,
                initialAccelerationUncertainty: getKalmanInitialAccelerationUncertainty(),
                initialPositionUncertainty: getKalmanInitialPositionUncertainty(),
                initialVelocityUncertainty: getKalmanInitialVelocityUncertainty(),
                gpsSpeedUncertainty: getKalmanGpsSpeedUncertainty(),
                debugEnabled: false
            }));
        }

        // Include GPS backend based on preference
        if (includeGPS) {
            strategies.push(new GPSBackend());
        }

        // Include IP fallback backend based on preference
        if (includeIP) {
            strategies.push(new IPFallbackBackend());
        }

        console.info(`[GeolocationManager] Initializing with backend preference: ${backendPreference}, strategies: ${strategies.map(s => s.name).join(', ')}`);

        this.backendManager = new BackendManager(strategies);
        this.stateManager = new LocationStateManager();
    }

    static async getInstance(): Promise<Result<GeolocationManager, GeolocationError>> {
        if (!GeolocationManager.instance) {
            GeolocationManager.instance = new GeolocationManager();
        }

        if (!GeolocationManager.instance.isInitialized) {
            const initResult = await GeolocationManager.instance.initialize();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        return ok(GeolocationManager.instance);
    }

    static getExistingInstance(): GeolocationManager {
        if (!GeolocationManager.instance) {
            throw new Error(
                "GeolocationManager not initialized. Call getInstance() first.",
            );
        }
        return GeolocationManager.instance;
    }

    static reset(): void {
        GeolocationManager.instance = null;
    }

    async initialize(): Promise<Result<void, GeolocationError>> {
        if (this.isInitialized) {
            console.info("[GeolocationManager] Already initialized");
            return ok(undefined);
        }

        console.info(
            "[GeolocationManager] Initializing geolocation services with new architecture",
        );

        try {
            this.stateManager.subscribe((location, _source) => {
                this.notifyCallbacks(location);
            });

            const backendInitResult = await this.backendManager.initialise();
            if (backendInitResult.isErr()) {
                console.warn(
                    "[GeolocationManager] No backend available for location",
                );
                return err(
                    new GeolocationUpdateServiceError(
                        "No geolocation backend available",
                        "no_backend_available",
                        backendInitResult.error,
                    ),
                );
            }

            const testLocation = await this.backendManager.getCurrentPosition();
            if (testLocation.isOk()) {
                this.stateManager.updateLocation(
                    testLocation.value,
                    this.backendManager.getActiveBackend()!,
                );

                this.isInitialized = true;
                console.info(
                    "[GeolocationManager] Geolocation services initialized successfully",
                );
                return ok(undefined);
            } else {
                return err(
                    new GeolocationUpdateServiceError(
                        "Backend selected fail to obtain geolocation",
                        "backend_error",
                        testLocation.error,
                    ),
                );
            }
        } catch (error) {
            const appError = toAppError(
                error,
                "Failed to initialize geolocation manager",
            );
            logError(appError, "GeolocationManager.initialize");
            return err(
                new GeolocationUpdateServiceError(
                    "Exception during initialization",
                    "initialization_failed",
                    appError,
                ),
            );
        }
    }

    async getCurrentLocation(): Promise<
        Result<GeographicPoint, GeolocationError>
    > {
        if (!this.isInitialized) {
            const error = new GeolocationUpdateServiceError(
                "Geolocation manager not initialized",
                "not_initialized",
            );
            logError(error, "GeolocationManager.getCurrentLocation");
            return err(error);
        }

        try {
            const result = await this.backendManager.getCurrentPosition();
            if (result.isOk()) {
                this.stateManager.updateLocation(
                    result.value,
                    this.backendManager.getActiveBackend() || "gps",
                );
            }
            return result;
        } catch (error) {
            const appError = toAppError(
                error,
                "Failed to get current location",
            );
            logError(appError, "GeolocationManager.getCurrentLocation");
            return err(
                new GeolocationUpdateServiceError(
                    "Failed to get current location",
                    "get_location_failed",
                    appError,
                ),
            );
        }
    }

    async startLocationUpdates(
        callback: LocationUpdateHandler,
    ): Promise<Result<number, GeolocationError>> {
        if (!this.isInitialized) {
            const error = new GeolocationUpdateServiceError(
                "Geolocation manager not initialized",
                "not_initialized",
            );
            logError(error, "GeolocationManager.startLocationUpdates");
            return err(error);
        }

        console.info("[GeolocationManager] Starting location updates");

        try {
            const callbackId = this.nextCallbackId++;
            this.locationUpdateCallbacks.set(callbackId, callback);

            // Start location updates with state manager callback
            const startResult = await this.backendManager.startWatching(
                (location, source) => {
                    this.stateManager.updateLocation(location, source);
                    this.notifyCallbacks(location);
                },
            );

            if (startResult.isErr()) {
                this.locationUpdateCallbacks.delete(callbackId);
                return err(startResult.error);
            }

            console.info(
                `[GeolocationManager] Location updates started with handler ${callbackId}`,
            );
            return ok(callbackId);
        } catch (error) {
            const appError = toAppError(
                error,
                "Failed to start location updates",
            );
            logError(appError, "GeolocationManager.startLocationUpdates");
            return err(
                new GeolocationUpdateServiceError(
                    "Failed to start location updates",
                    "start_updates_failed",
                    appError,
                ),
            );
        }
    }

    async stopLocationUpdates(
        handlerId: number,
    ): Promise<Result<void, GeolocationError>> {
        if (!this.isInitialized) {
            const error = new GeolocationUpdateServiceError(
                "Geolocation manager not initialized",
                "not_initialized",
            );
            logError(error, "GeolocationManager.stopLocationUpdates");
            return err(error);
        }

        console.info("[GeolocationManager] Stopping location updates");

        try {
            this.locationUpdateCallbacks.delete(handlerId);

            // If no more callbacks, stop watching
            if (this.locationUpdateCallbacks.size === 0) {
                const stopResult = await this.backendManager.stopWatching();
                if (stopResult.isErr()) {
                    return err(stopResult.error);
                }
            }

            console.info(
                `[GeolocationManager] Location updates stopped for handler ${handlerId}`,
            );
            return ok(undefined);
        } catch (error) {
            const appError = toAppError(
                error,
                "Failed to stop location updates",
            );
            logError(appError, "GeolocationManager.stopLocationUpdates");
            return err(
                new GeolocationUpdateServiceError(
                    "Failed to stop location updates",
                    "stop_updates_failed",
                    appError,
                ),
            );
        }
    }

    isServiceRunning(): boolean {
        return this.backendManager.isWatchingActive();
    }

    isUsingGPS(): boolean {
        const backend = this.backendManager.getActiveBackend();
        return backend === "gps" || backend === "kalman";
    }

    getCurrentBackend(): "kalman" | "gps" | "ip" | null {
        return this.backendManager.getActiveBackend();
    }

    getLastKnownLocation(): GeographicPoint {
        const location = this.stateManager.getCurrentLocation();
        if (!location) {
            console.warn(
                "[GeolocationManager] No known location available - returning default coordinates (0, 0)",
            );
            return new GeographicPoint(0, 0);
        }
        return location;
    }

    addLocationListener(callback: LocationUpdateHandler): number {
        const id = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(id, callback);
        return id;
    }

    removeLocationListener(id: number): void {
        this.locationUpdateCallbacks.delete(id);
    }

    getLastKalmanGain(): Matrix | null {
        const backend = this.backendManager.getActiveBackend();
        if (backend === "kalman") {
            // Get the KalmanBackend instance from backend manager
            const kalmanBackend = this.backendManager.strategies.find(
                (s) => s.name === "kalman",
            );
            if (kalmanBackend && "getLastKalmanGain" in kalmanBackend) {
                return (kalmanBackend as KalmanBackend).getLastKalmanGain();
            }
        }
        return null;
    }

    getKalmanState(): KalmanState | null {
        const backend = this.backendManager.getActiveBackend();
        if (backend === "kalman") {
            // Get the KalmanBackend instance from backend manager
            const kalmanBackend = this.backendManager.strategies.find(
                (s) => s.name === "kalman",
            );
            if (kalmanBackend && "getKalmanState" in kalmanBackend) {
                return (kalmanBackend as KalmanBackend).getKalmanState();
            }
        }
        return null;
    }

    private applyGeolocationCorrection(
        location: GeographicPoint,
    ): GeographicPoint {
        // Apply WGS2GCJ correction if enabled in settings
        if (getEarlySetting("geolocationCorrection")) {
            return wgs2gcj(location);
        }

        // Return original coordinates if correction is disabled
        return location;
    }

    private notifyCallbacks(location: GeographicPoint): void {
        // Apply geolocation correction before notifying callbacks
        const correctedLocation = this.applyGeolocationCorrection(location);
        const clonedLocation = cloneDeep(correctedLocation);
        for (const callback of this.locationUpdateCallbacks.values()) {
            try {
                void callback(clonedLocation);
            } catch (error) {
                console.error("[GeolocationManager] Callback error:", error);
            }
        }
    }

    async refreshBackend(): Promise<Result<void, GeolocationError>> {
        // With new architecture, backend refresh is handled automatically
        return ok(undefined);
    }
}
