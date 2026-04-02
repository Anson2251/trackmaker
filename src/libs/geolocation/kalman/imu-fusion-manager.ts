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
    private accelerationListenerId: number | null = null;
    private gyroscopeListenerId: number | null = null;
    private lastAccelerationReading: { x: number; y: number; z: number; timestamp: number } | null = null;
    private lastGyroscopeReading: { x: number; y: number; z: number; timestamp: number } | null = null;

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
            this.imuCallbacks.push(callback);
            this.lastAccelerationReading = null;
            this.lastGyroscopeReading = null;

            this.accelerationListenerId = this.imuProvider.onAccelerationReading((reading) => {
                this.lastAccelerationReading = reading;
                this.emitCombinedReading('acceleration', reading.timestamp);
            });
            this.gyroscopeListenerId = this.imuProvider.onGyroscopeReading((reading) => {
                this.lastGyroscopeReading = reading;
                this.emitCombinedReading('gyroscope', reading.timestamp);
            });
            this.isListening = true;

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
            if (this.accelerationListenerId !== null) {
                const removeResult = this.imuProvider.removeEventListener(this.accelerationListenerId);
                if (removeResult.isErr()) {
                    console.warn('[IMUFusionManager] Failed to remove acceleration listener:', removeResult.error);
                }
                this.accelerationListenerId = null;
            }
            if (this.gyroscopeListenerId !== null) {
                const removeResult = this.imuProvider.removeEventListener(this.gyroscopeListenerId);
                if (removeResult.isErr()) {
                    console.warn('[IMUFusionManager] Failed to remove gyroscope listener:', removeResult.error);
                }
                this.gyroscopeListenerId = null;
            }

            this.imuCallbacks = [];
            this.lastAccelerationReading = null;
            this.lastGyroscopeReading = null;
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

    private emitCombinedReading(source: 'acceleration' | 'gyroscope', timestamp: number): void {
        const reading: IMUReading = { timestamp };

        if (this.lastAccelerationReading) {
            reading.acceleration = {
                x: this.lastAccelerationReading.x,
                y: this.lastAccelerationReading.y,
                z: this.lastAccelerationReading.z,
            };
        }

        if (this.lastGyroscopeReading) {
            reading.gyroscope = {
                x: this.lastGyroscopeReading.x,
                y: this.lastGyroscopeReading.y,
                z: this.lastGyroscopeReading.z,
            };
        }

        if (!reading.acceleration && !reading.gyroscope) {
            return;
        }

        for (const callback of this.imuCallbacks) {
            try {
                callback(reading);
            } catch (error) {
                console.error(`[IMUFusionManager] ${source} callback error:`, error);
            }
        }
    }
}
