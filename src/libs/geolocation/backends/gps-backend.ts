import { Result, ok, err } from 'neverthrow';
import { GeographicPoint } from '../types';
import type { BackendStrategy, LocationCallback, LocationSource } from '../types';
import { GeolocationError } from '../../error-handling/geolocation';
import { getPlatformServices } from '@/libs/platform';
import type { IGeolocationProvider } from '@/libs/platform/types';

export class GPSBackend implements BackendStrategy {
    readonly name: LocationSource = 'gps';
    private provider: IGeolocationProvider | null = null;
    private watchId: number | null = null;
    private isInitialized = false;

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
            this.isInitialized = true;
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Exception during GPS backend initialization',
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
        if (!this.provider) {
            return err(new GeolocationError('GPS backend not initialized', 'BACKEND_NOT_AVAILABLE' as any));
        }

        const watchResult = await this.provider.watchPosition((position) => {
            const point = new GeographicPoint(
                position.coords.latitude,
                position.coords.longitude,
                position.coords.accuracy
            );
            callback(point, 'gps');
        });

        if (watchResult.isErr()) {
            return err(new GeolocationError(
                'Failed to start watching position',
                'UPDATE_SERVICE_ERROR' as any,
                watchResult.error
            ));
        }

        this.watchId = watchResult.value;
        return ok(undefined);
    }

    async stopWatching(): Promise<Result<void, GeolocationError>> {
        if (this.watchId !== null && this.provider) {
            const clearResult = this.provider.clearWatch(this.watchId);
            if (clearResult.isErr()) {
                return err(new GeolocationError(
                    'Failed to stop watching position',
                    'UPDATE_SERVICE_ERROR' as any,
                    clearResult.error
                ));
            }
            this.watchId = null;
        }
        return ok(undefined);
    }

    async getCurrentPosition(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.provider) {
            return err(new GeolocationError('GPS backend not initialized', 'BACKEND_NOT_AVAILABLE' as any));
        }

        const positionResult = await this.provider.getCurrentPosition();
        if (positionResult.isErr()) {
            return err(new GeolocationError(
                'Failed to get current position',
                'UPDATE_SERVICE_ERROR' as any,
                positionResult.error
            ));
        }

        const position = positionResult.value;
        return ok(new GeographicPoint(
            position.coords.latitude,
            position.coords.longitude,
            position.coords.accuracy
        ));
    }
}
