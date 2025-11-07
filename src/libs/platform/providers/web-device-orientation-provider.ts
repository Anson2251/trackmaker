/**
 * Web device orientation provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import type { IDeviceOrientationProvider, DeviceOrientationReading } from '../types';
import { GenericError } from '@/libs/error-handling';

export class WebDeviceOrientationProvider implements IDeviceOrientationProvider {
    private initialized = false;
    private isWatching = false;
    private listeners: Map<number, (orientation: DeviceOrientationReading) => void> = new Map();
    private nextListenerId = 0;
    private lastReading: DeviceOrientationReading | null = null;
    private boundHandleOrientationEvent: (event: DeviceOrientationEvent) => void;

    constructor() {
        this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this);
    }

    async init(): Promise<Result<void, GenericError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        if (!this.isSupported()) {
            return err(new GenericError('Device orientation is not supported by this browser'));
        }

        this.initialized = true;
        return ok(undefined);
    }

    async start(): Promise<Result<void, GenericError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        if (this.isWatching) {
            return ok(undefined);
        }

        try {
            window.addEventListener('deviceorientation', this.boundHandleOrientationEvent, true);
            this.isWatching = true;
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to start device orientation', undefined, error as Error));
        }
    }

    stop(): Result<void, GenericError> {
        if (!this.isWatching) {
            return ok(undefined);
        }

        try {
            window.removeEventListener('deviceorientation', this.boundHandleOrientationEvent, true);
            this.isWatching = false;
            this.lastReading = null;
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to stop device orientation', undefined, error as Error));
        }
    }

    async getCurrentOrientation(): Promise<Result<DeviceOrientationReading | null, GenericError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        return ok(this.lastReading);
    }

    onOrientationChange(callback: (orientation: DeviceOrientationReading) => void): number {
        const id = this.nextListenerId++;
        this.listeners.set(id, callback);

        // Start watching if this is the first listener
        if (!this.isWatching && this.listeners.size === 1) {
            this.start().catch(console.error);
        }

        // Immediately call callback with last reading if available
        if (this.lastReading) {
            callback(this.lastReading);
        }

        return id;
    }

    removeEventListener(id: number): Result<void, GenericError> {
        const removed = this.listeners.delete(id);

        if (removed && this.listeners.size === 0) {
            // Stop watching if there are no more listeners
            this.stop();
        }

        return ok(undefined);
    }

    isSupported(): boolean {
        return 'DeviceOrientationEvent' in window;
    }

    private handleOrientationEvent(event: DeviceOrientationEvent): void {
        if (event.alpha === null && event.beta === null && event.gamma === null) {
            return; // Ignore null events
        }

        const reading: DeviceOrientationReading = {
            alpha: event.alpha ?? 0,
            beta: event.beta ?? 0,
            gamma: event.gamma ?? 0,
            webkitCompassHeading: (event as DeviceOrientationEvent & { webkitCompassHeading?: number }).webkitCompassHeading,
            timestamp: Date.now()
        };

        this.lastReading = reading;

        // Notify all listeners
        for (const callback of this.listeners.values()) {
            try {
                callback(reading);
            } catch (error) {
                console.error('Error in device orientation callback:', error);
            }
        }
    }
}
