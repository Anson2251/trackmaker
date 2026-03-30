import { Result, err, ok } from 'neverthrow';
import { GeographicPoint } from '../types';
import type { BackendStrategy, LocationCallback, LocationSource } from '../types';
import { GeolocationError } from '../../error-handling/geolocation';

export class BackendManager {
    readonly strategies: BackendStrategy[] = [];
    private activeStrategy: BackendStrategy | null = null;
    private watcherCount = 0;
    private isInitialized = false;

    constructor(strategies: BackendStrategy[]) {
        this.strategies = strategies;
    }

    async initialise(): Promise<Result<void, GeolocationError>> {
        if (this.isInitialized) {
            return ok(undefined);
        }

        for (const strategy of this.strategies) {
            try {
                if (await strategy.isAvailable()) {
                    this.activeStrategy = strategy;
                    const initResult = await this.activeStrategy.initialize();
                    if (initResult.isErr()) {
                        console.info(`[BackendManager] Backend ${strategy.name} not initialised`);
                        continue;
                    }
                    this.isInitialized = true;
                    console.info(`[BackendManager] Initialised with ${strategy.name} backend`);
                    return ok(undefined);
                } else {
                    console.info(`[BackendManager] Fail to initialise with ${strategy.name} backend, trying fallbacks`);

                }
            } catch (error) {
                console.warn(`[BackendManager] Failed to test ${strategy.name} backend:`, error);
                continue;
            }
        }

        return err(new GeolocationError('No backend available', 'BACKEND_NOT_AVAILABLE' as any));
    }

    async startWatching(callback: LocationCallback): Promise<Result<LocationSource, GeolocationError>> {
        if (!this.isInitialized) {
            return err(new GeolocationError('Backend not initialized', 'BACKEND_NOT_INITIALIZED' as any));
        }

        if (!this.activeStrategy) {
            return err(new GeolocationError('No backend available', 'BACKEND_NOT_AVAILABLE' as any));
        }

        if (this.watcherCount === 0) {
            const startResult = await this.activeStrategy.startWatching(callback);
            if (startResult.isErr()) {
                console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, startResult.error);
                return err(startResult.error);
            }
        }

        this.watcherCount++;
        console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`);
        return ok(this.activeStrategy.name);
    }

    async stopWatching(): Promise<Result<void, GeolocationError>> {
        if (this.watcherCount === 0 || !this.activeStrategy) {
            return ok(undefined);
        }

        this.watcherCount--;

        if (this.watcherCount === 0) {
            const stopResult = await this.activeStrategy.stopWatching();
            if (stopResult.isErr()) {
                return err(new GeolocationError(
                    `Failed to stop ${this.activeStrategy?.name || 'unknown'} backend`,
                    'UPDATE_SERVICE_ERROR' as any,
                    stopResult.error
                ));
            }
            console.info('[BackendManager] Stopped watching location');
        } else {
            console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
        }

        return ok(undefined);
    }

    async getCurrentPosition(): Promise<Result<GeographicPoint, GeolocationError>> {
        if (!this.isInitialized) {
            return err(new GeolocationError('Backend not initialized', 'BACKEND_NOT_INITIALIZED' as any));
        }

        if (!this.activeStrategy) {
            return err(new GeolocationError('No backend available for current position', 'BACKEND_NOT_AVAILABLE' as any));
        }

        const locationResult = await this.activeStrategy.getCurrentPosition();
        if (locationResult.isErr()) {
            console.warn(`[BackendManager] Failed to get location from ${this.activeStrategy.name}:`, locationResult.error);
            return err(locationResult.error);
        }

        return locationResult;
    }

    getActiveBackend(): LocationSource | null {
        return this.activeStrategy?.name || null;
    }

    isWatchingActive(): boolean {
        return this.watcherCount > 0;
    }
}
