import { Result, ok, err } from 'neverthrow';
import { GeographicPoint } from '../types';
import type { GPSReading, IMUReading, LocationCallback } from '../types';
import type { KalmanConfig, KalmanState } from './kalman-types';
import { IMUFusionManager } from './imu-fusion-manager';
import { GeolocationError } from '../../error-handling/geolocation';
import { Matrix } from 'ml-matrix';
import { KalmanWorkerClient } from './worker-client';
import { CoordinateTransformer } from '../utils/coordinate-transformer';
import type { CartesianGPSReading } from './worker-types';
import {
    getKalmanInitialAccelerationUncertainty,
    getKalmanInitialPositionUncertainty,
    getKalmanInitialVelocityUncertainty,
    getKalmanGpsSpeedUncertainty,
    getKalmanImuAccelerationUncertainty,
    getKalmanVelocityProcessNoise,
    isDebugModeEnabled
} from '../../default-settings';

export class LocationProcessor {
    private workerClient: KalmanWorkerClient;
    private coordinateTransformer: CoordinateTransformer;
    private imuManager: IMUFusionManager;
    private callback: LocationCallback | null = null;
    private isInitialized = false;
    private lastOutputTime = 0;
    private lastOutputAccuracy = 0;
    private debugEnabled = false;
    private config: KalmanConfig;
    private cachedState: KalmanState | null = null;
    private cachedGain: Matrix | null = null;

    constructor(
        callback: LocationCallback,
        imuUpdateInterval: number = 100,
        config?: Partial<KalmanConfig>
    ) {
        this.workerClient = new KalmanWorkerClient();
        this.coordinateTransformer = new CoordinateTransformer();
        this.imuManager = new IMUFusionManager(imuUpdateInterval);
        this.callback = callback;
        this.debugEnabled = config?.debugEnabled ?? isDebugModeEnabled();
        this.config = {
            initialAccelerationUncertainty: config?.initialAccelerationUncertainty ?? getKalmanInitialAccelerationUncertainty(),
            initialPositionUncertainty: config?.initialPositionUncertainty ?? getKalmanInitialPositionUncertainty(),
            initialVelocityUncertainty: config?.initialVelocityUncertainty ?? getKalmanInitialVelocityUncertainty(),
            gpsSpeedUncertainty: config?.gpsSpeedUncertainty ?? getKalmanGpsSpeedUncertainty(),
            imuAccelerationUncertainty: config?.imuAccelerationUncertainty ?? getKalmanImuAccelerationUncertainty(),
            velocityProcessNoise: config?.velocityProcessNoise ?? getKalmanVelocityProcessNoise(),
            debugEnabled: this.debugEnabled,
        };
    }

    async initialize(initialGPSReading: GPSReading): Promise<Result<void, GeolocationError>> {
        try {
            // Initialize coordinate transformer with first GPS reading
            this.coordinateTransformer.setReferencePoint({
                longitude: initialGPSReading.longitude,
                latitude: initialGPSReading.latitude
            });

            // Transform initial GPS reading to Cartesian coordinates
            const cartesian = await this.coordinateTransformer.geographicToLocal({
                longitude: initialGPSReading.longitude,
                latitude: initialGPSReading.latitude
            });

            // Convert velocity if available
            let velocity;
            if (initialGPSReading.speed !== undefined && initialGPSReading.heading !== undefined) {
                velocity = this.gpsVelocityToLocal(initialGPSReading.speed, initialGPSReading.heading);
            }

            const cartesianReading: CartesianGPSReading = {
                x: cartesian.x,
                y: cartesian.y,
                accuracy: initialGPSReading.accuracy,
                timestamp: initialGPSReading.timestamp,
                velocity
            };

            // Initialize IMU manager
            const imuInitResult = await this.imuManager.initialize();
            if (imuInitResult.isErr()) {
                console.warn('[LocationProcessor] IMU not available, using GPS-only mode');
            }

            // Initialize worker with configuration
            const workerConfig = {
                ...this.config,
                debugEnabled: this.debugEnabled
            };

            await this.workerClient.initialize(workerConfig, cartesianReading);
            this.isInitialized = true;
            await this.updateCachedState();

            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Failed to initialize location processor',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    async startGPS(): Promise<Result<void, GeolocationError>> {
        try {
            const imuAvailable = await this.imuManager.isAvailable();

            if (imuAvailable) {
                const startResult = await this.imuManager.startListening(
                    (reading: IMUReading) => { void this.processIMUReading(reading); }
                );
                if (startResult.isErr()) {
                    console.warn('[LocationProcessor] Failed to start IMU, using GPS-only');
                }
            }

            this.isInitialized = true;
            console.info('[LocationProcessor] Started location processing');
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Failed to start GPS processing',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    async stopGPS(): Promise<Result<void, GeolocationError>> {
        try {
            const stopResult = await this.imuManager.stopListening();
            if (stopResult.isErr()) {
                console.warn('[LocationProcessor] Failed to stop IMU:', stopResult.error);
            }

            this.workerClient.dispose();
            this.isInitialized = false;
            this.cachedState = null;
            this.cachedGain = null;
            console.info('[LocationProcessor] Stopped location processing');
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Failed to stop GPS processing',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    async processGPSLocation(gpsReading: GPSReading): Promise<void> {
        if (!this.isInitialized) {
            console.warn('[LocationProcessor] Processor not initialized, ignoring GPS reading');
            return;
        }

        try {
            // Transform GPS reading to Cartesian coordinates
            const cartesian = await this.coordinateTransformer.geographicToLocal({
                longitude: gpsReading.longitude,
                latitude: gpsReading.latitude
            });

            // Convert velocity if available
            let velocity;
            if (gpsReading.speed !== undefined && gpsReading.heading !== undefined) {
                velocity = this.gpsVelocityToLocal(gpsReading.speed, gpsReading.heading);
            }

            const cartesianReading: CartesianGPSReading = {
                x: cartesian.x,
                y: cartesian.y,
                accuracy: gpsReading.accuracy,
                timestamp: gpsReading.timestamp,
                velocity
            };

            // Send to worker
            await this.workerClient.processGPS(cartesianReading);
            this.lastOutputAccuracy = gpsReading.accuracy;

            // Get filtered position and notify callback
            await this.outputFilteredPosition();
        } catch (error) {
            console.error('[LocationProcessor] Error processing GPS location:', error);
        }
    }

    async processIMUReading(imuReading: IMUReading): Promise<void> {
        if (!this.isInitialized || !this.workerClient.isReady()) {
            if (this.isInitialized && !this.workerClient.isReady()) {
                console.log('[LocationProcessor] Kalman filter not yet initialized, buffering IMU reading');
            }
            return;
        }

        try {
            if (this.debugEnabled) {
                console.log('[LocationProcessor] Processing IMU reading:', {
                    timestamp: imuReading.timestamp,
                    acceleration: imuReading.acceleration
                });
            }

            await this.workerClient.processIMU(imuReading);
            await this.outputPredictedPosition();
        } catch (error) {
            console.error('[LocationProcessor] Error processing IMU reading:', error);
        }
    }

    private async outputFilteredPosition(): Promise<void> {
        try {
            const filteredPos = await this.workerClient.getFilteredPosition();

            // Convert back to geographic coordinates
            const geographic = await this.coordinateTransformer.localToGeographic(filteredPos);
            const point = new GeographicPoint(
                geographic.latitude,
                geographic.longitude,
                this.lastOutputAccuracy || 10
            );

            await this.updateCachedState();
            this.notifyCallback(point);
        } catch (error) {
            console.error('[LocationProcessor] Error outputting filtered position:', error);
        }
    }

    private async outputPredictedPosition(): Promise<void> {
        const now = performance.now();
        if (now - this.lastOutputTime < 50) {
            return;
        }
        this.lastOutputTime = now;

        try {
            const filteredPos = await this.workerClient.getFilteredPosition();

            // Convert back to geographic coordinates
            const geographic = await this.coordinateTransformer.localToGeographic(filteredPos);
            const point = new GeographicPoint(
                geographic.latitude,
                geographic.longitude,
                this.lastOutputAccuracy || 10
            );

            await this.updateCachedState();
            this.notifyCallback(point);
        } catch (error) {
            console.error('[LocationProcessor] Error outputting predicted position:', error);
        }
    }

    async getCurrentFilteredPosition(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.workerClient.isReady()) {
            return err(new GeolocationError(
                'Kalman filter not initialized',
                'UPDATE_SERVICE_ERROR' as any
            ));
        }

        try {
            const filteredPos = await this.workerClient.getFilteredPosition();
            const geographic = await this.coordinateTransformer.localToGeographic(filteredPos);
            const point = new GeographicPoint(
                geographic.latitude,
                geographic.longitude,
                this.lastOutputAccuracy || 10
            );
            return ok(point);
        } catch (error) {
            return err(new GeolocationError(
                'Failed to get filtered position',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    getLastKalmanGain(): Matrix | null {
        return this.cachedGain;
    }

    getKalmanState(): KalmanState | null {
        return this.cachedState;
    }

    isProcessorInitialized(): boolean {
        return this.isInitialized;
    }

    private async updateCachedState(): Promise<void> {
        try {
            const workerState = await this.workerClient.getState();
            // Convert covariance from number[][] to Matrix
            const covariance = new Matrix(workerState.covariance);
            this.cachedState = {
                position: workerState.position,
                velocity: workerState.velocity,
                acceleration: workerState.acceleration,
                covariance,
                timestamp: workerState.timestamp
            };
            // Update Kalman gain cache
            const gain = await this.workerClient.getLastKalmanGain();
            this.cachedGain = gain ? new Matrix(gain) : null;
        } catch (error) {
            console.error('[LocationProcessor] Failed to update cached Kalman state:', error);
        }
    }

    private gpsVelocityToLocal(speed: number, heading: number): { x: number; y: number } {
        // Convert heading (degrees clockwise from true north) to radians
        const headingRad = heading * Math.PI / 180;
        const vEast = speed * Math.sin(headingRad);
        const vNorth = speed * Math.cos(headingRad);
        return { x: vEast, y: vNorth };
    }

    private notifyCallback(location: GeographicPoint): void {
        if (this.callback) {
            try {
                this.callback(location, 'kalman');
            } catch (error) {
                console.error('[LocationProcessor] Callback error:', error);
            }
        }
    }
}
