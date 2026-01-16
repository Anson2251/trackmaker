import { Result, ok, err } from 'neverthrow';
import { GeographicPoint } from '../types';
import type { BackendStrategy, LocationCallback, LocationSource } from '../types';
import { GeolocationError } from '../../error-handling/geolocation';

const IP_API_URL = "https://ipapi.co/json/";

interface IpGeolocationData {
    latitude: number;
    longitude: number;
    cityName: string;
    [key: string]: string | number;
}

export class IPFallbackBackend implements BackendStrategy {
    readonly name: LocationSource = 'ip';
    private watchCallbacks = new Map<number, LocationCallback>();
    private watchInterval: number | null = null;
    private lastLocation: GeographicPoint | null = null;
    private nextCallbackId = 1;
    private activeWatcherCount = 0;

    async initialize(): Promise<Result<void, GeolocationError>> { return ok() }

    async isAvailable(): Promise<boolean> {
        try {
            const response = await fetch(IP_API_URL, {
                method: 'HEAD',
                signal: AbortSignal.timeout(5000)
            });
            return response.ok;
        } catch {
            return false;
        }
    }

    async startWatching(callback: LocationCallback): Promise<Result<void, GeolocationError>> {
        const callbackId = this.nextCallbackId++;
        this.watchCallbacks.set(callbackId, callback);
        this.activeWatcherCount++;

        if (this.watchInterval === null) {
            this.watchInterval = setInterval(() => {
                void this.updateLocation();
            }, 30000) as unknown as number;

            void this.updateLocation();
        }

        return ok(undefined);
    }

    async stopWatching(): Promise<Result<void, GeolocationError>> {
        try {
            this.watchCallbacks.clear();
            this.activeWatcherCount = 0;

            if (this.watchInterval !== null) {
                clearInterval(this.watchInterval);
                this.watchInterval = null;
            }
            this.lastLocation = null;
            return ok(undefined);
        } catch (error) {
            return err(new GeolocationError(
                'Failed to stop IP location watching',
                'UPDATE_SERVICE_ERROR' as any,
                error as Error
            ));
        }
    }

    async getCurrentPosition(): Promise<Result<GeographicPoint, GeolocationError>> {
        try {
            console.info("[IPFallbackBackend] Getting location from IP service");

            const response = await fetch(IP_API_URL, {
                signal: AbortSignal.timeout(10000)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: IpGeolocationData = await response.json();

            const location = new GeographicPoint(
                data.latitude,
                data.longitude,
                50000 // IP geolocation is typically less accurate
            );

            console.info("[IPFallbackBackend] Successfully retrieved location from IP service");
            return ok(location);
        } catch (error) {
            return err(new GeolocationError(
                'Failed to get location from IP service',
                'POSITION_UNAVAILABLE' as any,
                error as Error
            ));
        }
    }

    private async updateLocation(): Promise<void> {
        try {
            const locationResult = await this.getCurrentPosition();

            if (locationResult.isErr()) {
                console.error('[IPFallbackBackend] Error updating location:', locationResult.error);
                return;
            }

            const location = locationResult.value;

            // Only notify if location changed
            if (!this.lastLocation ||
                Math.abs(location.latitude - this.lastLocation.latitude) > 0.0001 ||
                Math.abs(location.longitude - this.lastLocation.longitude) > 0.0001) {

                this.lastLocation = location;

                // Notify all callbacks
                for (const callback of this.watchCallbacks.values()) {
                    try {
                        callback(location, 'ip');
                    } catch (error) {
                        console.error('[IPFallbackBackend] Callback error:', error);
                    }
                }
            }
        } catch (error) {
            console.error('[IPFallbackBackend] Error updating location:', error);
        }
    }
}
