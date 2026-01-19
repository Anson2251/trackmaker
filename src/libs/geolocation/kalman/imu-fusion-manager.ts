import { Result, ok, err } from 'neverthrow';
import type { IMUReading } from '../types';
import { GeolocationError } from '../../error-handling/geolocation';
import { getPlatformServices } from '@/libs/platform';
import type { IIMUProvider } from '@/libs/platform/types';
// import { getIMUUpdateFrequency } from '@/libs/default-settings';

export class IMUFusionManager {
    private imuProvider: IIMUProvider | null = null;
    private isListening = false;
    private imuCallbacks: ((reading: IMUReading) => void)[] = [];
    private imuUpdateInterval: number | null = null;

    constructor(private imuUpdateIntervalMs: number = 100) {}

    async initialize(): Promise<Result<void, GeolocationError>> {
        try {
            const platformServices = getPlatformServices();
            if (platformServices.isErr()) {
                return err(new GeolocationError(
                    'Platform services not available for IMU',
                    'BACKEND_NOT_AVAILABLE' as any,
                    platformServices.error
                ));
            }

            const imuResult = platformServices.value.getIMU();
            if (imuResult.isErr()) {
                return err(new GeolocationError(
                    'IMU provider not available',
                    'BACKEND_NOT_AVAILABLE' as any,
                    imuResult.error
                ));
            }

            this.imuProvider = imuResult.value;
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Exception during IMU initialization',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    async isAvailable(): Promise<boolean> {
        if (!this.imuProvider) {
            const initResult = await this.initialize();
            if (initResult.isErr()) {
                return false;
            }
        }

        return !!this.imuProvider;
    }

    async startListening(callback: (reading: IMUReading) => void): Promise<Result<void, GeolocationError>> {
        if (!this.imuProvider) {
            return err(new GeolocationError('IMU not initialized', 'BACKEND_NOT_AVAILABLE' as any));
        }

        if (this.isListening) {
            this.imuCallbacks.push(callback);
            return ok(undefined);
        }

        try {
            // IMPORTANT: We assume that the IMU update has been started and is available.
            // Register callback
            this.imuCallbacks.push(callback);
            this.isListening = true;

            // Start polling for IMU data
            this.startIMUPolling();

            console.info('[IMUFusionManager] Started IMU sensor fusion');
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Failed to start IMU listening',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    async stopListening(): Promise<Result<void, GeolocationError>> {
        if (!this.isListening || !this.imuProvider) {
            return ok(undefined);
        }

        try {
            // Stop polling
            if (this.imuUpdateInterval) {
                clearInterval(this.imuUpdateInterval);
                this.imuUpdateInterval = null;
            }

            // Stop sensors
            const accelResult = this.imuProvider.stopAcceleration();
            if (accelResult.isErr()) {
                console.warn('[IMUFusionManager] Failed to stop acceleration sensor:', accelResult.error);
            }

            const gyroResult = this.imuProvider.stopGyroscope();
            if (gyroResult.isErr()) {
                console.warn('[IMUFusionManager] Failed to stop gyroscope sensor:', gyroResult.error);
            }

            this.imuCallbacks = [];
            this.isListening = false;

            console.info('[IMUFusionManager] Stopped IMU sensor fusion');
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Failed to stop IMU listening',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    private startIMUPolling(): void {
        if (!this.imuProvider) return;

        this.imuUpdateInterval = setInterval(async () => {
            try {
                const reading = await this.getCombinedIMUReading();
                if (reading) {
                    for (const callback of this.imuCallbacks) {
                        try {
                            callback(reading);
                        } catch (error) {
                            console.error('[IMUFusionManager] IMU callback error:', error);
                        }
                    }
                }
            } catch (error) {
                console.error('[IMUFusionManager] Error polling IMU:', error);
            }
        }, this.imuUpdateIntervalMs) as unknown as number;
    }

    private async getCombinedIMUReading(): Promise<IMUReading | null> {
        if (!this.imuProvider) return null;

        try {
            const [accelResult, gyroResult] = await Promise.all([
                this.imuProvider.getAccelerationReading(),
                this.imuProvider.getGyroscopeReading()
            ]);

            const reading: IMUReading = {
                timestamp: performance.now()
            };

            if (accelResult.isOk() && accelResult.value) {
                reading.acceleration = {
                    x: accelResult.value.x,
                    y: accelResult.value.y,
                    z: accelResult.value.z
                };
            }

            if (gyroResult.isOk() && gyroResult.value) {
                reading.gyroscope = {
                    x: gyroResult.value.x,
                    y: gyroResult.value.y,
                    z: gyroResult.value.z
                };
            }

            return reading;
        } catch (error) {
            console.error('[IMUFusionManager] Error getting combined IMU reading:', error);
            return null;
        }
    }
}
