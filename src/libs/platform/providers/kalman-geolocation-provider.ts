/**
 * Kalman filter geolocation provider
 * Wraps another geolocation provider and applies Kalman filtering to reduce GPS noise
 */

import { Result, ok, err } from 'neverthrow';
import type { IGeolocationProvider, IIMUEnabledGeolocationProvider } from '../types';
import { GeolocationProviderError, GeolocationProviderErrorCode } from '../errors';
import { KalmanFilter, type KalmanConfig, type IMUReading } from '@/libs/geolocation/kalman-filter';

// Use global DOM types for GeolocationPosition, PositionCallback, PermissionState
type GeolocationPosition = globalThis.GeolocationPosition;
type PositionCallback = globalThis.PositionCallback;
type PermissionState = globalThis.PermissionState;

/**
 * Configuration for Kalman geolocation provider
 */
export interface KalmanGeolocationConfig extends KalmanConfig {
    enableIMUFusion?: boolean;
    imuUpdateInterval?: number; // milliseconds
    maxAge?: number; // Maximum age of GPS reading before prediction-only mode
}

export class KalmanGeolocationProvider implements IIMUEnabledGeolocationProvider {
    private wrappedProvider: IGeolocationProvider;
    private kalmanFilter: KalmanFilter;
    private config: KalmanGeolocationConfig;
    private initialized = false;
    private watchId: number | null = null;
    private lastGPSReading: GeolocationPosition | null = null;
    private imuUpdateTimer: number | null = null;
    private imuCallback: ((reading: IMUReading) => void) | null = null;

    constructor(
        wrappedProvider: IGeolocationProvider,
        config: Partial<KalmanGeolocationConfig> = {}
    ) {
        this.wrappedProvider = wrappedProvider;
        this.config = {
            enableIMUFusion: false,
            imuUpdateInterval: 100, // 10Hz IMU updates
            maxAge: 5000, // 5 seconds max age
            sigmaAcceleration: 1.0,
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 4,
            ...config
        };

        this.kalmanFilter = new KalmanFilter({
            sigmaAcceleration: this.config.sigmaAcceleration,
            initialPositionUncertainty: this.config.initialPositionUncertainty,
            initialVelocityUncertainty: this.config.initialVelocityUncertainty
        });
    }

    async init(): Promise<Result<void, GeolocationProviderError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        // Initialize the wrapped provider
        const initResult = await this.wrappedProvider.init();
        if (initResult.isErr()) {
            return err(new GeolocationProviderError(
                initResult.error.message,
                GeolocationProviderErrorCode.INITIALIZATION_FAILED,
                initResult.error
            ));
        }

        this.initialized = true;
        return ok(undefined);
    }

    async getPermissionStatus(): Promise<Result<PermissionState, GeolocationProviderError>> {
        const result = await this.wrappedProvider.getPermissionStatus();
        return result.mapErr((error) =>
            new GeolocationProviderError(
                error.message,
                GeolocationProviderErrorCode.PERMISSION_DENIED,
                error
            )
        );
    }

    async requestPermission(): Promise<Result<PermissionState, GeolocationProviderError>> {
        const result = await this.wrappedProvider.requestPermission();
        return result.mapErr((error) =>
            new GeolocationProviderError(
                error.message,
                GeolocationProviderErrorCode.PERMISSION_DENIED,
                error
            )
        );
    }

    async getCurrentPosition(): Promise<Result<GeolocationPosition, GeolocationProviderError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        // Get raw GPS position from wrapped provider
        const rawPositionResult = await this.wrappedProvider.getCurrentPosition();
        if (rawPositionResult.isErr()) {
            return err(new GeolocationProviderError(
                rawPositionResult.error.message,
                GeolocationProviderErrorCode.POSITION_UNAVAILABLE,
                rawPositionResult.error
            ));
        }

        // Apply Kalman filtering
        const filteredPosition = await this.applyKalmanFilter(rawPositionResult.value);
        return ok(filteredPosition);
    }

    async watchPosition(callback: PositionCallback): Promise<Result<number, GeolocationProviderError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        if (this.watchId !== null) {
            return err(new GeolocationProviderError(
                'Watch already active',
                GeolocationProviderErrorCode.WATCH_FAILED
            ));
        }

        // Start watching with the wrapped provider
        const wrappedWatchResult = await this.wrappedProvider.watchPosition(
            async (position) => {
                const filteredPosition = await this.applyKalmanFilter(position);
                callback(filteredPosition);
            }
        );

        if (wrappedWatchResult.isErr()) {
            return err(new GeolocationProviderError(
                wrappedWatchResult.error.message,
                GeolocationProviderErrorCode.WATCH_FAILED,
                wrappedWatchResult.error
            ));
        }

        this.watchId = wrappedWatchResult.value;

        // Start IMU fusion if enabled
        if (this.config.enableIMUFusion) {
            this.startIMUFusion();
        }

        return ok(this.watchId);
    }

    clearWatch(watchId: number): Result<void, GeolocationProviderError> {
        // Clear IMU fusion if active
        this.stopIMUFusion();

        // Clear the wrapped provider's watch
        const result = this.wrappedProvider.clearWatch(watchId);
        if (result.isErr()) {
            return err(new GeolocationProviderError(
                result.error.message,
                GeolocationProviderErrorCode.CLEAR_WATCH_FAILED,
                result.error
            ));
        }

        this.watchId = null;
        this.lastGPSReading = null;
        return ok(undefined);
    }

    isSupported(): boolean {
        return this.wrappedProvider.isSupported();
    }

    /**
     * Set IMU callback for sensor fusion
     */
    public setIMUCallback(callback: (reading: IMUReading) => void): void {
        this.imuCallback = callback;
    }

    /**
     * Update filter with IMU data (called by external IMU provider)
     */
    public updateWithIMU(acceleration: { x: number; y: number; z: number }): void {
        if (!this.config.enableIMUFusion || !this.lastGPSReading) {
            return; // Don't use IMU until we have GPS initialization
        }

        const imuReading: IMUReading = {
            acceleration: { ...acceleration, z: 0 },
            timestamp: Date.now()
        };

        this.kalmanFilter.updateWithIMU(imuReading);

        // Call IMU callback if set
        if (this.imuCallback) {
            this.imuCallback(imuReading);
        }
    }

    /**
     * Get current filtered state (for debugging/monitoring)
     */
    public getKalmanState() {
        return this.kalmanFilter.getState();
    }

    private async applyKalmanFilter(position: GeolocationPosition): Promise<GeolocationPosition> {
        const gpsReading = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp
        };

        // Update Kalman filter
        await this.kalmanFilter.updateWithGPS(gpsReading);

        // Store last GPS reading
        this.lastGPSReading = position;

        // Get filtered position
        let filteredCoords;
        try {
            filteredCoords = await this.kalmanFilter.getFilteredPosition();
        } catch (error) {
            // If filter is not initialized, return raw position
            console.warn('[KalmanGeolocationProvider] Filter not initialized, returning raw position:', error);
            filteredCoords = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
        }

        // Calculate filtered accuracy based on covariance if filter is initialized
        let filteredAccuracy = position.coords.accuracy;
        try {
            const state = this.kalmanFilter.getState();
            const positionVarianceX = state.covariance.get(0, 0);
            const positionVarianceY = state.covariance.get(1, 1);
            filteredAccuracy = Math.sqrt(positionVarianceX + positionVarianceY) * Math.sqrt(2 * Math.log(20));
        } catch (error) {
            // If filter is not initialized, use original accuracy
            console.warn('[KalmanGeolocationProvider] Cannot calculate filtered accuracy, using original:', error);
        }

        return {
            coords: {
                latitude: filteredCoords.latitude,
                longitude: filteredCoords.longitude,
                accuracy: Math.max(filteredAccuracy, 1), // Ensure minimum accuracy
                altitude: position.coords.altitude,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                speed: position.coords.speed,
                // Add required toJSON method
                toJSON: () => ({
                    latitude: filteredCoords.latitude,
                    longitude: filteredCoords.longitude,
                    accuracy: Math.max(filteredAccuracy, 1),
                    altitude: position.coords.altitude,
                    altitudeAccuracy: position.coords.altitudeAccuracy,
                    heading: position.coords.heading,
                    speed: position.coords.speed
                })
            },
            timestamp: Date.now() // Update timestamp to current time
        } as GeolocationPosition;
    }

    private startIMUFusion(): void {
        if (this.imuUpdateTimer !== null) {
            return;
        }

        // In a real implementation, this would interface with an IMU provider
        // For now, we'll simulate periodic updates that could be provided by an external source
        this.imuUpdateTimer = window.setInterval(() => {
            // This would be replaced with actual IMU data from an IMU provider
            // For now, we'll just let the filter predict based on current state
        }, this.config.imuUpdateInterval!);
    }

    private stopIMUFusion(): void {
        if (this.imuUpdateTimer !== null) {
            clearInterval(this.imuUpdateTimer);
            this.imuUpdateTimer = null;
        }
    }
}