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
    private initPromise: Promise<Result<void, GenericError>> | null = null;

    constructor() {
        this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this);
    }

    async init(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GenericError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        if (this.initPromise) {
            return this.initPromise;
        }

        this.initPromise = this.doInit(permissionCallback);
        const result = await this.initPromise;

        if (result.isErr()) {
            this.initPromise = null;
        }

        return result;
    }

    async doInit(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GenericError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        const supported = await this.isSupported();
        if (!supported) {
            return err(new GenericError('Device orientation is not supported by this browser'));
        }

        const permissionResult = await this.getPermissionStatus();
        if (permissionResult.isErr()) {
            return err(permissionResult.error);
        }

        if (permissionResult.value === 'prompt' && permissionCallback) {
            const permitted = await permissionCallback(permissionResult.value, 'permission.imu.required');
            const recheckResult = await this.getPermissionStatus();
            if (recheckResult.isErr()) {
                return err(recheckResult.error);
            }
            if (recheckResult.value === 'denied' || !permitted) {
                return err(new GenericError('Device orientation permission denied'));
            }
        }

        this.initialized = true;
        return ok(undefined);
    }

    private async getPermissionStatus(): Promise<Result<PermissionState, GenericError>> {
        try {
            // oxlint-disable-next-line no-unsafe-member-access
            if (typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
                // oxlint-disable-next-line no-unsafe-call no-unsafe-member-access
                const permission = await (DeviceOrientationEvent as any).requestPermission();
                if (permission === 'granted') {
                    return ok('granted');
                } else if (permission === 'denied') {
                    return ok('denied');
                }
                return ok('prompt');
            }
            return ok('granted');
        } catch {
            return ok('prompt');
        }
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

    private async isSupported(): Promise<boolean> {
        // Check if the browser API exists
        if (!('DeviceOrientationEvent' in window)) {
            return false;
        }

        try {
            // Create a promise that resolves when we receive orientation data
            const dataPromise = new Promise<boolean>((resolve) => {
                const onOrientation = (event: DeviceOrientationEvent) => {
                    if (event.alpha !== null || event.beta !== null || event.gamma !== null) {
                        window.removeEventListener('deviceorientation', onOrientation);
                        resolve(true);
                    }
                };

                // Add event listener
                window.addEventListener('deviceorientation', onOrientation);
            });

            // Create a timeout promise that rejects after 1 second
            const timeoutPromise = new Promise<boolean>((_, reject) => {
                setTimeout(() => reject(new Error('Device orientation detection timeout')), 1000);
            });

            // Race between getting data and timeout
            return await Promise.race([dataPromise, timeoutPromise]);
        } catch {
            // If we timeout or get an error, assume orientation is not available
            return false;
        }
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
            timestamp: performance.now()
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
