/**
 * Kalman filter geolocation backend
 * Wraps another geolocation backend and applies Kalman filtering to reduce GPS noise
 */

import { KalmanFilter, type KalmanConfig, type IMUReading, type GPSReading } from '../kalman-filter';
import { type GeolocationBackend, GeographicPoint } from '../types';

/**
 * Configuration for Kalman geolocation backend
 */
export interface KalmanBackendConfig extends KalmanConfig {
    enableIMUFusion?: boolean;
    imuUpdateInterval?: number; // milliseconds
    maxAge?: number; // Maximum age of GPS reading before prediction-only mode
}

export class KalmanGeolocationBackend implements GeolocationBackend {
    private wrappedBackend: GeolocationBackend;
    private kalmanFilter: KalmanFilter;
    private config: KalmanBackendConfig;
    private initialized = false;
    private watchId: number | null = null;
    private lastGPSReading: GeographicPoint | null = null;
    private imuUpdateTimer: number | null = null;
    private imuCallback: ((reading: IMUReading) => void) | null = null;
    private watchCallbacks: Map<number, (location: GeographicPoint) => void> = new Map();
    private nextCallbackId = 1;

    constructor(
        wrappedBackend: GeolocationBackend,
        config: Partial<KalmanBackendConfig> = {}
    ) {
        this.wrappedBackend = wrappedBackend;
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

    async getPermissionStatus(): Promise<"granted" | "denied" | "prompt" | "unknown"> {
        return this.wrappedBackend.getPermissionStatus();
    }

    async getCurrentPosition(): Promise<GeographicPoint> {
        // Get raw GPS position from wrapped backend
        const rawPosition = await this.wrappedBackend.getCurrentPosition();

        // Apply Kalman filtering
        const filteredPosition = await this.applyKalmanFilter(rawPosition);
        return filteredPosition;
    }

    async watchPosition(callback: (location: GeographicPoint) => void): Promise<number> {
        if (this.watchId !== null) {
            throw new Error('Watch already active');
        }

        const callbackId = this.nextCallbackId++;
        this.watchCallbacks.set(callbackId, callback);

        // Start watching with the wrapped backend
        this.watchId = await this.wrappedBackend.watchPosition(
            (position) => {
                (async () => {
                    const filteredPosition = await this.applyKalmanFilter(position);
                    this.watchCallbacks.forEach(cb => cb(filteredPosition));
                })().catch((error: unknown) => {
                    console.warn('[KalmanGeolocationBackend] Failed to process position update:', error);
                });
            }
        );

        // Start IMU fusion if enabled
        if (this.config.enableIMUFusion) {
            this.startIMUFusion();
        }

        return callbackId;
    }

    clearWatch(callbackId: number): void {
        // Clear IMU fusion if active
        this.stopIMUFusion();

        // Remove the callback
        this.watchCallbacks.delete(callbackId);

        // If no more callbacks, clear the wrapped backend's watch
        if (this.watchCallbacks.size === 0 && this.watchId !== null) {
            this.wrappedBackend.clearWatch(this.watchId);
            this.watchId = null;
            this.lastGPSReading = null;
        }
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

        // Update callbacks with new filtered position
        void this.updateCallbacksWithCurrentState();
    }

    /**
     * Get current filtered state (for debugging/monitoring)
     */
    public getKalmanState() {
        return this.kalmanFilter.getState();
    }

    private async applyKalmanFilter(position: GeographicPoint): Promise<GeographicPoint> {
        const gpsReading: GPSReading = {
            latitude: position.latitude,
            longitude: position.longitude,
            accuracy: position.accuracy,
            timestamp: Date.now()
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
            console.warn('[KalmanGeolocationBackend] Filter not initialized, returning raw position:', error);
            filteredCoords = {
                latitude: position.latitude,
                longitude: position.longitude
            };
        }

        // Calculate filtered accuracy based on covariance if filter is initialized
        let filteredAccuracy = position.accuracy;
        try {
            const state = this.kalmanFilter.getState();
            const positionVarianceX = state.covariance.get(0, 0);
            const positionVarianceY = state.covariance.get(1, 1);
            filteredAccuracy = Math.sqrt(positionVarianceX + positionVarianceY) * Math.sqrt(2 * Math.log(20));
        } catch (error) {
            // If filter is not initialized, use original accuracy
            console.warn('[KalmanGeolocationBackend] Cannot calculate filtered accuracy, using original:', error);
        }

        return new GeographicPoint(
            filteredCoords.latitude,
            filteredCoords.longitude,
            Math.max(filteredAccuracy, 1) // Ensure minimum accuracy
        );
    }

    private async updateCallbacksWithCurrentState(): Promise<void> {
        if (this.watchCallbacks.size === 0) {
            return;
        }

        try {
            const filteredCoords = await this.kalmanFilter.getFilteredPosition();
            const state = this.kalmanFilter.getState();
            const positionVarianceX = state.covariance.get(0, 0);
            const positionVarianceY = state.covariance.get(1, 1);
            const filteredAccuracy = Math.sqrt(positionVarianceX + positionVarianceY) * Math.sqrt(2 * Math.log(20));

            const filteredPoint = new GeographicPoint(
                filteredCoords.latitude,
                filteredCoords.longitude,
                Math.max(filteredAccuracy, 1)
            );

            this.watchCallbacks.forEach(callback => callback(filteredPoint));
        } catch (error) {
            console.warn('[KalmanGeolocationBackend] Failed to update callbacks with current state:', error);
        }
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
        }, this.config.imuUpdateInterval);
    }

    private stopIMUFusion(): void {
        if (this.imuUpdateTimer !== null) {
            clearInterval(this.imuUpdateTimer);
            this.imuUpdateTimer = null;
        }
    }
}

export default KalmanGeolocationBackend;
