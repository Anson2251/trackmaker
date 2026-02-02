import { Result, ok, err } from 'neverthrow';
import { GeographicPoint } from '../types';
import type { BackendStrategy, LocationCallback, GPSReading } from '../types';
import { LocationProcessor } from '../kalman/location-processor';
import { GeolocationError } from '../../error-handling/geolocation';
import { getPlatformServices } from '@/libs/platform';
import type { IGeolocationProvider } from '@/libs/platform/types';

export class KalmanBackend implements BackendStrategy {
    readonly name = 'kalman';
    private provider: IGeolocationProvider | null = null;
    private processor: LocationProcessor | null = null;
    private watchId: number | null = null;
    private isInitialized = false;
    private userCallback: LocationCallback | null = null;
    private imuUpdateInterval: number;

    constructor(imuUpdateInterval: number = 100) {
        this.imuUpdateInterval = imuUpdateInterval;
    }

    async initialize(): Promise<Result<void, GeolocationError>> {
        if (this.isInitialized) {
            return ok(undefined);
        }

        try {
            const platformServices = getPlatformServices();
            if (platformServices.isErr()) {
                return err(new GeolocationError(
                    'Platform services not available',
                    'BACKEND_NOT_AVAILABLE' as any,
                    platformServices.error
                ));
            }

            const provider = platformServices.value.getGeolocationProvider();
            if (!provider) {
                return err(new GeolocationError(
                    'Geolocation provider not available',
                    'BACKEND_NOT_AVAILABLE' as any
                ));
            }

            this.provider = provider;

            const trailGeolocation = await this.provider.getCurrentPosition()
            if (trailGeolocation.isErr()) return err(new GeolocationError(
                'Failed to get the initial geolocation',
                'UPDATE_SERVICE_ERROR' as any,
                trailGeolocation.error
            ));

            this.processor = new LocationProcessor(
                (location, _source) => this.handleLocationUpdate(location),
                this.imuUpdateInterval
                // Config is read from settings in LocationProcessor
            );

            const processorInitResult = await this.processor.initialize({
                latitude: trailGeolocation.value.coords.latitude,
                longitude: trailGeolocation.value.coords.longitude,
                accuracy: trailGeolocation.value.coords.accuracy,
                timestamp: performance.now(),
                speed: trailGeolocation.value.coords.speed ?? undefined,
                heading: trailGeolocation.value.coords.heading ?? undefined
            });
            if (processorInitResult.isErr()) {
                return processorInitResult;
            }

            this.isInitialized = true;
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Exception during Kalman backend initialization',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    async isAvailable(): Promise<boolean> {
        if (!this.isInitialized) {
            const initResult = await this.initialize();
            if (initResult.isErr()) {
                return false;
            }
        }

        if (!this.provider) {
            return false;
        }

        try {
            const permissionResult = await this.provider.getPermissionStatus();
            return permissionResult.isOk() && permissionResult.value !== 'denied';
        } catch {
            return false;
        }
    }

    async startWatching(callback: LocationCallback): Promise<Result<void, GeolocationError>> {
        if (!this.provider || !this.processor) {
            return err(new GeolocationError('Kalman backend not properly initialized', 'BACKEND_NOT_AVAILABLE' as any));
        }

        try {
            this.userCallback = callback;

            const watchResult = await this.provider.watchPosition((position) => {
                const gpsReading: GPSReading = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                    timestamp: performance.now(),
                    speed: position.coords.speed ?? undefined,
                    heading: position.coords.heading ?? undefined
                };
                void this.processor?.processGPSLocation(gpsReading);
            }, { highFrequency: true });

            if (watchResult.isErr()) {
                return err(new GeolocationError(
                    'Failed to start watching position',
                    'UPDATE_SERVICE_ERROR' as any,
                    watchResult.error
                ));
            }

            this.watchId = watchResult.value;

            const startResult = await this.processor.startGPS();
            if (startResult.isErr()) {
                if (this.watchId !== null && this.provider) {
                    this.provider.clearWatch(this.watchId);
                }
                return startResult;
            }

            console.info('[KalmanBackend] Started Kalman-filtered location watching');
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Exception during start watching',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    async stopWatching(): Promise<Result<void, GeolocationError>> {
        if (!this.provider || !this.processor) {
            return ok(undefined);
        }

        try {
            const stopResult = await this.processor.stopGPS();
            if (stopResult.isErr()) {
                console.warn('[KalmanBackend] Failed to stop processor cleanly:', stopResult.error);
            }

            if (this.watchId !== null) {
                const clearResult = this.provider.clearWatch(this.watchId);
                if (clearResult.isErr()) {
                    console.warn('[KalmanBackend] Failed to clear watch:', clearResult.error);
                }
                this.watchId = null;
            }

            console.info('[KalmanBackend] Stopped Kalman-filtered location watching');
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Exception during stop watching',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    async getCurrentPosition(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.provider || !this.processor) {
            return err(new GeolocationError('Kalman backend not properly initialized', 'BACKEND_NOT_AVAILABLE' as any));
        }

        try {
            const positionResult = await this.provider.getCurrentPosition();
            if (positionResult.isErr()) {
                return err(new GeolocationError(
                    'Failed to get current position',
                    'UPDATE_SERVICE_ERROR' as any,
                    positionResult.error
                ));
            }

            const position = positionResult.value;
            const gpsReading: GPSReading = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
                timestamp: performance.now(), // Always use performance.now() for consistent delta time calculations
                speed: position.coords.speed ?? undefined,
                heading: position.coords.heading ?? undefined
            };

            await this.processor.processGPSLocation(gpsReading);

            return await this.processor.getCurrentFilteredPosition();
        } catch (error) {
            return err(new GeolocationError(
                'Exception getting current position',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    getLastKalmanGain() {
        return this.processor ? this.processor.getLastKalmanGain() : null;
    }

    getKalmanState() {
        return this.processor ? this.processor.getKalmanState() : null;
    }

    private handleLocationUpdate(location: GeographicPoint): void {
        if (this.userCallback) {
            try {
                this.userCallback(location, 'kalman');
            } catch (error) {
                console.error('[KalmanBackend] User callback error:', error);
            }
        }
    }
}
