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
import { headingToLocalVelocity, localVectorToHeading, normalizeHeading } from '@/libs/heading';
import {
    getKalmanInitialAccelerationUncertainty,
    getKalmanInitialPositionUncertainty,
    getKalmanInitialVelocityUncertainty,
    getKalmanGpsSpeedUncertainty,
    isDebugModeEnabled
} from '../../default-settings';

type LocationProcessorOptions = Partial<KalmanConfig> & {
    useIMU?: boolean;
    source?: 'kalman' | 'kalman-no-imu';
};

const MIN_SPEED_FOR_GPS_HEADING = 2;
const MIN_DISTANCE_FOR_GPS_COURSE = 3;
const MAX_DELTA_TIME_FOR_GPS_COURSE_MS = 5000;

export class LocationProcessor {
    private workerClient: KalmanWorkerClient;
    private coordinateTransformer: CoordinateTransformer;
    private imuManager: IMUFusionManager;
    private callback: LocationCallback | null = null;
    private isInitialized = false;
    private lastOutputTime = 0;
    private lastOutputAccuracy = 0;
    private debugEnabled = false;
    private withoutIMU: boolean = false;
    private source: 'kalman' | 'kalman-no-imu' = 'kalman';
    private config: KalmanConfig;
    private cachedState: KalmanState | null = null;
    private cachedGain: Matrix | null = null;
    private processingQueue: Promise<void> = Promise.resolve();
    private lastCartesianGPSReading: CartesianGPSReading | null = null;

    constructor(
        callback: LocationCallback,
        imuUpdateInterval: number = 100,
        options?: LocationProcessorOptions
    ) {
        this.workerClient = new KalmanWorkerClient();
        this.coordinateTransformer = new CoordinateTransformer();
        this.imuManager = new IMUFusionManager(imuUpdateInterval);
        this.callback = callback;
        this.debugEnabled = options?.debugEnabled ?? isDebugModeEnabled();
        this.withoutIMU = options?.useIMU === false;
        this.source = options?.source ?? 'kalman';
        this.config = {
            initialAccelerationUncertainty: options?.initialAccelerationUncertainty ?? getKalmanInitialAccelerationUncertainty(),
            initialPositionUncertainty: options?.initialPositionUncertainty ?? getKalmanInitialPositionUncertainty(),
            initialVelocityUncertainty: options?.initialVelocityUncertainty ?? getKalmanInitialVelocityUncertainty(),
            gpsSpeedUncertainty: options?.gpsSpeedUncertainty ?? getKalmanGpsSpeedUncertainty(),
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

            const cartesianReading: CartesianGPSReading = {
                x: cartesian.x,
                y: cartesian.y,
                accuracy: initialGPSReading.accuracy,
                timestamp: initialGPSReading.timestamp,
                speed: this.getTrustedGPSSpeed(initialGPSReading),
            };
            cartesianReading.velocity = this.getTrustedGPSVelocity(initialGPSReading, cartesianReading);
            this.lastOutputAccuracy = initialGPSReading.accuracy;
            this.lastCartesianGPSReading = cartesianReading;

            // Initialize IMU manager (only if not in no-IMU mode)
            if (!this.withoutIMU) {
                const imuInitResult = await this.imuManager.initialize();
                if (imuInitResult.isErr()) {
                    console.warn('[LocationProcessor] IMU not available, using GPS-only mode');
                    this.withoutIMU = true;
                    this.source = 'kalman-no-imu';
                }
            } else {
                console.info('[LocationProcessor] Running in no-IMU mode, skipping IMU initialization');
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
            // Skip IMU listening if in no-IMU mode
            if (this.withoutIMU) {
                this.isInitialized = true;
                console.info('[LocationProcessor] Started location processing (no-IMU mode)');
                return ok(undefined);
            }

            const imuAvailable = await this.imuManager.isAvailable();

            if (imuAvailable) {
                const startResult = await this.imuManager.startListening(
                    (reading: IMUReading) => { void this.processIMUReading(reading); }
                );
                if (startResult.isErr()) {
                    console.warn('[LocationProcessor] Failed to start IMU, using GPS-only');
                    this.withoutIMU = true;
                    this.source = 'kalman-no-imu';
                }
            } else {
                this.withoutIMU = true;
                this.source = 'kalman-no-imu';
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
            this.lastCartesianGPSReading = null;
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

        await this.enqueueProcessing(async () => {
            // Transform GPS reading to Cartesian coordinates
            const cartesian = await this.coordinateTransformer.geographicToLocal({
                longitude: gpsReading.longitude,
                latitude: gpsReading.latitude
            });

            const cartesianReading: CartesianGPSReading = {
                x: cartesian.x,
                y: cartesian.y,
                accuracy: gpsReading.accuracy,
                timestamp: gpsReading.timestamp,
                speed: this.getTrustedGPSSpeed(gpsReading),
            };
            cartesianReading.velocity = this.getTrustedGPSVelocity(gpsReading, cartesianReading);

            // Send to worker
            await this.workerClient.processGPS(cartesianReading);
            this.lastOutputAccuracy = gpsReading.accuracy;
            this.lastCartesianGPSReading = cartesianReading;

            // Get filtered position and notify callback
            await this.outputFilteredPosition();
        }, '[LocationProcessor] Error processing GPS location:');
    }

    async processIMUReading(imuReading: IMUReading): Promise<void> {
        if (!this.isInitialized || !this.workerClient.isReady()) {
            if (this.isInitialized && !this.workerClient.isReady()) {
                console.log('[LocationProcessor] Kalman filter not yet initialized, buffering IMU reading');
            }
            return;
        }

        await this.enqueueProcessing(async () => {
            if (this.debugEnabled) {
                console.log('[LocationProcessor] Processing IMU reading:', {
                    timestamp: imuReading.timestamp,
                    acceleration: imuReading.acceleration
                });
            }

            await this.workerClient.processIMU(imuReading);
            await this.outputPredictedPosition();
        }, '[LocationProcessor] Error processing IMU reading:');
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
            await this.processingQueue;
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

    private async enqueueProcessing(work: () => Promise<void>, errorPrefix: string): Promise<void> {
        const run = this.processingQueue.then(work);
        this.processingQueue = run.catch(() => undefined);

        try {
            await run;
        } catch (error) {
            console.error(errorPrefix, error);
        }
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

    private getTrustedGPSVelocity(reading: GPSReading, cartesianReading: CartesianGPSReading): { x: number; y: number } | undefined {
        const { speed, heading } = reading;
        if (speed === undefined || !Number.isFinite(speed) || speed < 0) {
            return undefined;
        }

        // GPS heading is usually too noisy at very low speed to be useful.
        if (heading !== undefined && Number.isFinite(heading) && speed >= MIN_SPEED_FOR_GPS_HEADING) {
            return this.gpsVelocityToLocal(speed, normalizeHeading(heading));
        }

        const fallbackHeading = this.estimateCourseHeadingFromCartesianDelta(cartesianReading, this.lastCartesianGPSReading);
        if (fallbackHeading === undefined) {
            return undefined;
        }

        return this.gpsVelocityToLocal(speed, fallbackHeading);
    }

    private estimateCourseHeadingFromCartesianDelta(
        currentReading: CartesianGPSReading,
        previousReading: CartesianGPSReading | null,
    ): number | undefined {
        if (!previousReading) {
            return undefined;
        }

        const deltaTimeMs = currentReading.timestamp - previousReading.timestamp;
        if (deltaTimeMs <= 0 || deltaTimeMs > MAX_DELTA_TIME_FOR_GPS_COURSE_MS) {
            return undefined;
        }

        const deltaX = currentReading.x - previousReading.x;
        const deltaY = currentReading.y - previousReading.y;
        const distance = Math.hypot(deltaX, deltaY);
        const minDistance = Math.max(
            MIN_DISTANCE_FOR_GPS_COURSE,
            Math.min((currentReading.accuracy + previousReading.accuracy) / 2, 20),
        );

        if (distance < minDistance) {
            return undefined;
        }

        return localVectorToHeading(deltaX, deltaY);
    }

    private getTrustedGPSSpeed(reading: GPSReading): number | undefined {
        const { speed } = reading;
        if (speed === undefined || !Number.isFinite(speed) || speed < 0) {
            return undefined;
        }

        return speed;
    }

    private gpsVelocityToLocal(speed: number, heading: number): { x: number; y: number } {
        return headingToLocalVelocity(speed, heading);
    }

    private notifyCallback(location: GeographicPoint): void {
        if (this.callback) {
            try {
                this.callback(location, this.source);
            } catch (error) {
                console.error('[LocationProcessor] Callback error:', error);
            }
        }
    }
}
