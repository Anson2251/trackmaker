import { Result, ok, err } from 'neverthrow';
import { GeographicPoint } from '../types';
import type { GPSReading, IMUReading, LocationCallback } from '../types';
import { PureKalmanFilter, type KalmanConfig } from './kalman-filter';
import { IMUFusionManager } from './imu-fusion-manager';
import { GeolocationError } from '../../error-handling/geolocation';
import { Matrix } from 'ml-matrix';

export class LocationProcessor {
    private kalmanFilter: PureKalmanFilter;
    private imuManager: IMUFusionManager;
    private callback: LocationCallback | null = null;
    private isInitialized = false;
    private lastOutputTime = 0;
    private lastOutputAccuracy = 0;

    constructor(
        callback: LocationCallback,
        kalmanConfig: KalmanConfig,
        imuUpdateInterval: number = 100
    ) {
        this.kalmanFilter = new PureKalmanFilter(kalmanConfig);
        this.imuManager = new IMUFusionManager(imuUpdateInterval);
        this.callback = callback;
    }

    async initialize(initialGPSReading: GPSReading): Promise<Result<void, GeolocationError>> {
        try {
            const imuInitResult = await this.imuManager.initialize();
            if (imuInitResult.isErr()) {
                console.warn('[LocationProcessor] IMU not available, using GPS-only mode');
            }

            try {
                await this.kalmanFilter.initialize(initialGPSReading);
                this.isInitialized = true;
            } catch (error) {
                return err(new GeolocationError(
                    'Failed to initialize Kalman filter',
                    'UPDATE_SERVICE_ERROR' as any,
                    error as Error
                ));
            }

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
                    (reading: IMUReading) => this.processIMUReading(reading)
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

            this.isInitialized = false;
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
            if (!this.kalmanFilter.isFilterInitialized()) {
                await this.kalmanFilter.initialize(gpsReading);
                this.lastOutputAccuracy = gpsReading.accuracy;
                const filteredPos = await this.kalmanFilter.getFilteredPosition();
                const point = new GeographicPoint(
                    filteredPos.latitude,
                    filteredPos.longitude,
                    gpsReading.accuracy
                );
                this.notifyCallback(point);
                return;
            }

            await this.kalmanFilter.updateGPS(gpsReading);
            this.lastOutputAccuracy = gpsReading.accuracy;
            const filteredPos = await this.kalmanFilter.getFilteredPosition();
            const point = new GeographicPoint(
                filteredPos.latitude,
                filteredPos.longitude,
                gpsReading.accuracy
            );
            this.notifyCallback(point);
        } catch (error) {
            console.error('[LocationProcessor] Error processing GPS location:', error);
        }
    }

    processIMUReading(imuReading: IMUReading): void {
        if (!this.isInitialized || !this.kalmanFilter.isFilterInitialized()) {
            return;
        }

        try {
            this.kalmanFilter.updateIMU(imuReading);
            void this.outputPredictedPosition();
        } catch (error) {
            console.error('[LocationProcessor] Error processing IMU reading:', error);
        }
    }

    private async outputPredictedPosition(): Promise<void> {
        const now = performance.now();
        if (now - this.lastOutputTime < 50) {
            return;
        }
        this.lastOutputTime = now;

        try {
            const filteredPos = await this.kalmanFilter.getFilteredPosition();
            const point = new GeographicPoint(
                filteredPos.latitude,
                filteredPos.longitude,
                this.lastOutputAccuracy || 10
            );
            this.notifyCallback(point);
        } catch (error) {
            console.error('[LocationProcessor] Error outputting predicted position:', error);
        }
    }

    async getCurrentFilteredPosition(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.kalmanFilter.isFilterInitialized()) {
            return err(new GeolocationError(
                'Kalman filter not initialized',
                'UPDATE_SERVICE_ERROR' as any
            ));
        }

        try {
            const filteredPos = await this.kalmanFilter.getFilteredPosition();
            const point = new GeographicPoint(
                filteredPos.latitude,
                filteredPos.longitude,
                this.lastOutputAccuracy || 10 // Use last known GPS accuracy or reasonable default
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
        return this.kalmanFilter.getLastKalmanGain();
    }

    isProcessorInitialized(): boolean {
        return this.isInitialized;
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
