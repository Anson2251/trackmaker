/**
 * Web device orientation provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import type { IDeviceOrientationProvider, DeviceOrientationReading } from '../types';
import { GenericError } from '@/libs/error-handling';

interface DeviceOrientationEventWithPermission {
    requestPermission(): Promise<'granted' | 'denied' | 'prompt'>;
}

export class WebDeviceOrientationProvider implements IDeviceOrientationProvider {
    private initialized = false;
    private initPromise: Promise<Result<void, GenericError>> | null = null;
    private isWatching = false;
    private listeners: Map<number, (orientation: DeviceOrientationReading) => void> = new Map();
    private nextListenerId = 0;
    private lastReading: DeviceOrientationReading | null = null;
    private boundHandleOrientationEvent: (event: DeviceOrientationEvent) => void;
    private disposed = false;
    private orientationEventListenerCount = 0;

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

    private async doInit(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GenericError>> {
        if (this.disposed) {
            return err(new GenericError('Device orientation provider has been disposed'));
        }

        const permissionResult = await this.requestPermissionIfNeeded(permissionCallback);
        if (permissionResult.isErr()) {
            return err(permissionResult.error);
        }

        if (!await this.checkHardwareSupport()) {
            return err(new GenericError('Device orientation is not supported by this browser'));
        }

        this.initialized = true;
        return ok(undefined);
    }

    private async requestPermissionIfNeeded(
        permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>
    ): Promise<Result<void, GenericError>> {
        try {
            if (typeof DeviceOrientationEvent !== 'undefined' &&
                typeof (DeviceOrientationEvent as unknown as DeviceOrientationEventWithPermission).requestPermission === 'function') {

                let permission = "prompt"
                try {
                    permission = await (DeviceOrientationEvent as unknown as DeviceOrientationEventWithPermission).requestPermission();
                }
                catch { }

                if (permissionCallback && permission === 'prompt') {
                    const userWantsToGrant = await permissionCallback('prompt', 'permission.device-orientation.required');
                    if (!userWantsToGrant) {
                        return err(new GenericError('User declined to grant device orientation permission'));
                    }

                    const newPermission = await (DeviceOrientationEvent as unknown as DeviceOrientationEventWithPermission).requestPermission();
                    if (newPermission !== 'granted') {
                        return err(new GenericError('Device orientation permission denied'));
                    }
                }
                else if (permission === 'denied') {
                    return err(new GenericError('Device orientation permission denied'));
                }
                else {
                    return ok(undefined);
                }
            }

            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to request device orientation permission', undefined, error as Error));
        }
    }

    private async checkHardwareSupport(): Promise<boolean> {
        if (!('DeviceOrientationEvent' in window)) {
            return false;
        }

        return new Promise<boolean>((resolve) => {
            let resolved = false;

            const cleanup = () => {
                window.removeEventListener('deviceorientation', onOrientation);
            };

            const succeed = () => {
                if (!resolved) {
                    resolved = true;
                    cleanup();
                    resolve(true);
                }
            };

            const fail = () => {
                if (!resolved) {
                    resolved = true;
                    cleanup();
                    resolve(false);
                }
            };

            const onOrientation = (event: DeviceOrientationEvent) => {
                if (event.alpha !== null || event.beta !== null || event.gamma !== null) {
                    succeed();
                }
            };

            window.addEventListener('deviceorientation', onOrientation);

            setTimeout(fail, 1000);
        });
    }

    async start(): Promise<Result<void, GenericError>> {
        if (this.disposed) {
            return err(new GenericError('Device orientation provider has been disposed'));
        }

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
            if (this.orientationEventListenerCount === 0) {
                window.addEventListener('deviceorientation', this.boundHandleOrientationEvent, true);
            }
            this.orientationEventListenerCount++;
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
            this.orientationEventListenerCount--;
            this.isWatching = false;
            this.lastReading = null;

            if (this.orientationEventListenerCount === 0) {
                window.removeEventListener('deviceorientation', this.boundHandleOrientationEvent, true);
            }
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to stop device orientation', undefined, error as Error));
        }
    }

    async getCurrentOrientation(): Promise<Result<DeviceOrientationReading | null, GenericError>> {
        if (this.disposed) {
            return err(new GenericError('Device orientation provider has been disposed'));
        }

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

        if (this.lastReading) {
            callback(this.lastReading);
        }

        return id;
    }

    removeEventListener(id: number): Result<void, GenericError> {
        this.listeners.delete(id);
        return ok(undefined);
    }

    dispose(): void {
        if (this.disposed) {
            return;
        }

        this.disposed = true;

        this.stop();

        this.listeners.clear();

        this.initialized = false;
        this.initPromise = null;
        this.lastReading = null;
    }

    private handleOrientationEvent(event: DeviceOrientationEvent): void {
        if (event.alpha === null && event.beta === null && event.gamma === null) {
            return;
        }

        const reading: DeviceOrientationReading = {
            alpha: event.alpha ?? 0,
            beta: event.beta ?? 0,
            gamma: event.gamma ?? 0,
            webkitCompassHeading: (event as DeviceOrientationEvent & { webkitCompassHeading?: number }).webkitCompassHeading,
            timestamp: event.timeStamp || performance.now()
        };

        this.lastReading = reading;

        for (const callback of this.listeners.values()) {
            try {
                callback(reading);
            } catch (error) {
                console.error('Error in device orientation callback:', error);
            }
        }
    }
}
