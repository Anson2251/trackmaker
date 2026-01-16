/**
 * Web IMU provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import { Matrix } from 'ml-matrix';
import type { IIMUProvider, IMUReading } from '../types';
import { GenericError } from '@/libs/error-handling';

export class WebIMUProvider implements IIMUProvider {
    private initialized = false;
    private accelerationListeners: Map<number, (reading: IMUReading) => void> = new Map();
    private gyroscopeListeners: Map<number, (reading: IMUReading) => void> = new Map();
    private nextListenerId = 0;
    private lastAccelerationReading: IMUReading | null = null;
    private lastGyroscopeReading: IMUReading | null = null;
    private normalizeAccelerationToENU = false;
    private normalizeGyroscopeToENU = false;
    private deviceOrientation: { alpha: number; beta: number; gamma: number } | null = null;
    private isAccelerationActive = false;
    private isGyroscopeActive = false;
    private motionEventListenerCount = 0;
    private boundHandleMotionEvent: (event: DeviceMotionEvent) => void;
    private boundHandleOrientationEvent: (event: DeviceOrientationEvent) => void;

    constructor() {
        this.boundHandleMotionEvent = this.handleMotionEvent.bind(this);
        this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this);
    }

    async init(permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>): Promise<Result<void, GenericError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        const permissionResult = await this.getPermissionStatus();
        if (permissionResult.isErr()) {
            return err(permissionResult.error);
        }

        if (permissionResult.value === 'prompt' && permissionCallback) {
            const granted = await permissionCallback(permissionResult.value, 'permission.imu.required');
            if (!granted) {
                return err(new GenericError('IMU permission denied'));
            }
            const recheckResult = await this.getPermissionStatus();
            if (recheckResult.isErr()) {
                return err(recheckResult.error);
            }
            if (recheckResult.value === 'denied') {
                return err(new GenericError('IMU permission denied'));
            }
        }

        // Checking the availability requires to get a trail data after the permission is granted
        if (!await this.isSupported()) {
            return err(new GenericError('Device motion is not supported by this browser'));
        }

        if ('DeviceOrientationEvent' in window) {
            window.addEventListener('deviceorientation', this.boundHandleOrientationEvent);
        }

        this.initialized = true;
        return ok(undefined);
    }

    private async getPermissionStatus(): Promise<Result<PermissionState, GenericError>> {
        try {
            // oxlint-disable-next-line no-unsafe-member-access
            if (typeof DeviceMotionEvent !== 'undefined' && typeof (DeviceMotionEvent as any).requestPermission === 'function') {
                // oxlint-disable-next-line no-unsafe-call no-unsafe-member-access
                const permission = await (DeviceMotionEvent as any).requestPermission();
                if (permission === 'granted') {
                    return ok('granted');
                } else if (permission === 'denied') {
                    return ok('denied');
                }
                return ok('prompt');
            } else {
                return ok('granted');
            }
        } catch {
            return ok('prompt');
        }
    }

    async startAcceleration(options: { frequency?: number; normalizeToENU?: boolean } = {}): Promise<Result<void, GenericError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        if (this.isAccelerationActive) {
            return ok(undefined);
        }

        this.normalizeAccelerationToENU = options.normalizeToENU ?? false;

        try {
            // Only add event listener if this is the first activation
            if (this.motionEventListenerCount === 0) {
                window.addEventListener('devicemotion', this.handleMotionEvent.bind(this), true);
            }
            this.motionEventListenerCount++;
            this.isAccelerationActive = true;
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to start acceleration monitoring', undefined, error as Error));
        }
    }

    async startGyroscope(options: { frequency?: number; normalizeToENU?: boolean } = {}): Promise<Result<void, GenericError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        if (this.isGyroscopeActive) {
            return ok(undefined);
        }

        this.normalizeGyroscopeToENU = options.normalizeToENU ?? false;

        try {
            // Only add event listener if this is the first activation
            if (this.motionEventListenerCount === 0) {
                window.addEventListener('devicemotion', this.handleMotionEvent.bind(this), true);
            }
            this.motionEventListenerCount++;
            this.isGyroscopeActive = true;
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to start gyroscope monitoring', undefined, error as Error));
        }
    }

    stopAcceleration(): Result<void, GenericError> {
        if (!this.isAccelerationActive) {
            return ok(undefined);
        }

        try {
            this.motionEventListenerCount--;
            this.isAccelerationActive = false;
            this.lastAccelerationReading = null;
            this.normalizeAccelerationToENU = false;

            // Only remove event listener if no more active listeners
            if (this.motionEventListenerCount === 0) {
                window.removeEventListener('devicemotion', this.boundHandleMotionEvent, true);
            }
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to stop acceleration monitoring', undefined, error as Error));
        }
    }

    stopGyroscope(): Result<void, GenericError> {
        if (!this.isGyroscopeActive) {
            return ok(undefined);
        }

        try {
            this.motionEventListenerCount--;
            this.isGyroscopeActive = false;
            this.lastGyroscopeReading = null;
            this.normalizeGyroscopeToENU = false;

            // Only remove event listener if no more active listeners
            if (this.motionEventListenerCount === 0) {
                window.removeEventListener('devicemotion', this.boundHandleMotionEvent, true);
            }
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to stop gyroscope monitoring', undefined, error as Error));
        }
    }

    async getAccelerationReading(): Promise<Result<IMUReading | null, GenericError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        return ok(this.lastAccelerationReading);
    }

    async getGyroscopeReading(): Promise<Result<IMUReading | null, GenericError>> {
        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        return ok(this.lastGyroscopeReading);
    }

    onAccelerationReading(callback: (reading: IMUReading) => void): number {
        const id = this.nextListenerId++;
        this.accelerationListeners.set(id, callback);

        // Immediately call callback with last reading if available
        if (this.lastAccelerationReading) {
            callback(this.lastAccelerationReading);
        }

        return id;
    }

    onGyroscopeReading(callback: (reading: IMUReading) => void): number {
        const id = this.nextListenerId++;
        this.gyroscopeListeners.set(id, callback);

        // Immediately call callback with last reading if available
        if (this.lastGyroscopeReading) {
            callback(this.lastGyroscopeReading);
        }

        return id;
    }

    removeEventListener(id: number): Result<void, GenericError> {
        this.accelerationListeners.delete(id);
        this.gyroscopeListeners.delete(id);
        return ok(undefined);
    }

    async isSupported(): Promise<boolean> {
        // Check if the browser APIs exist
        if (!('DeviceOrientationEvent' in window) || !('DeviceMotionEvent' in window)) {
            return false;
        }

        try {
            // Create a promise that resolves when we receive either orientation or motion data
            const dataPromise = new Promise<boolean>((resolve) => {
                let orientationResolved = false;
                let motionResolved = false;

                const cleanup = () => {
                    window.removeEventListener('deviceorientation', onOrientation);
                    window.removeEventListener('devicemotion', onMotion);
                };

                const onOrientation = (event: DeviceOrientationEvent) => {
                    if (event.alpha !== null || event.beta !== null || event.gamma !== null) {
                        if (!orientationResolved) {
                            orientationResolved = true;
                            cleanup();
                            resolve(true);
                        }
                    }
                };

                const onMotion = (event: DeviceMotionEvent) => {
                    if (event.acceleration || event.accelerationIncludingGravity || event.rotationRate) {
                        if (!motionResolved) {
                            motionResolved = true;
                            cleanup();
                            resolve(true);
                        }
                    }
                };

                // Add event listeners
                window.addEventListener('deviceorientation', onOrientation, { once: false });
                window.addEventListener('devicemotion', onMotion, { once: false });

                // Also check if we already have permission and data might be flowing
                // Some browsers may not fire events without user interaction
                // We'll rely on the timeout for those cases
            });

            // Create a timeout promise that rejects after 1 second
            const timeoutPromise = new Promise<boolean>((_, reject) => {
                setTimeout(() => reject(new Error('IMU detection timeout')), 1000);
            });

            // Race between getting data and timeout
            return await Promise.race([dataPromise, timeoutPromise]);
        } catch {
            // If we timeout or get an error, assume IMU is not available
            return false;
        }
    }

    private handleOrientationEvent(event: DeviceOrientationEvent): void {
        if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
            this.deviceOrientation = {
                alpha: event.alpha,
                beta: event.beta,
                gamma: event.gamma
            };
        }
    }

    private handleMotionEvent(event: DeviceMotionEvent): void {
        // Handle acceleration only if acceleration is active
        if (this.isAccelerationActive) {
            let acc = event.acceleration; // Prefer linear acceleration (excludes gravity)
            let source = 'linear';

            // Fallback to accelerationIncludingGravity if linear acceleration is not available
            if (!acc || acc.x === null || acc.y === null || acc.z === null) {
                acc = event.accelerationIncludingGravity;
                source = 'including_gravity';
            }

            if (acc && acc.x !== null && acc.y !== null && acc.z !== null) {
                let reading: IMUReading = {
                    x: acc.x,
                    y: acc.y,
                    z: acc.z,
                    timestamp: event.timeStamp || performance.now()
                };

                // If using accelerationIncludingGravity, we need to remove gravity component
                if (source === 'including_gravity' && this.deviceOrientation) {
                    // Estimate gravity vector in device coordinates using orientation
                    const gravity = this.estimateGravityVector(this.deviceOrientation);
                    reading.x -= gravity.x;
                    reading.y -= gravity.y;
                    reading.z -= gravity.z;
                }

                // Apply ENU normalization if requested
                if (this.normalizeAccelerationToENU && this.deviceOrientation) {
                    reading = this.normalizeToENU(reading, this.deviceOrientation);
                }

                this.lastAccelerationReading = reading;

                // Notify acceleration listeners
                for (const callback of this.accelerationListeners.values()) {
                    try {
                        callback(reading);
                    } catch (error) {
                        console.error('Error in acceleration callback:', error);
                    }
                }
            }
        }

        // Handle rotation rate (gyroscope) only if gyroscope is active
        if (this.isGyroscopeActive && event.rotationRate) {
            const rot = event.rotationRate;
            if (rot.alpha !== null && rot.beta !== null && rot.gamma !== null) {
                let reading: IMUReading = {
                    x: rot.alpha, // rotation around Z axis
                    y: rot.beta,  // rotation around X axis
                    z: rot.gamma, // rotation around Y axis
                    timestamp: event.timeStamp || performance.now()
                };

                // Apply ENU normalization if requested
                if (this.normalizeGyroscopeToENU && this.deviceOrientation) {
                    reading = this.normalizeToENU(reading, this.deviceOrientation);
                }

                this.lastGyroscopeReading = reading;

                // Notify gyroscope listeners
                for (const callback of this.gyroscopeListeners.values()) {
                    try {
                        callback(reading);
                    } catch (error) {
                        console.error('Error in gyroscope callback:', error);
                    }
                }
            }
        }
    }

    /**
     * Normalize IMU reading from device coordinates to ENU (East-North-Up) coordinates
     * Using proper rotation matrices with ml-matrix
     * DeviceOrientationEvent angles: alpha (yaw, Z-axis), beta (pitch, X-axis), gamma (roll, Y-axis)
     */
    private normalizeToENU(reading: IMUReading, orientation: { alpha: number; beta: number; gamma: number }): IMUReading {
        // Convert angles to radians
        const alpha = (orientation.alpha * Math.PI) / 180; // Yaw - rotation around Z axis
        const beta = (orientation.beta * Math.PI) / 180;   // Pitch - rotation around X axis
        const gamma = (orientation.gamma * Math.PI) / 180; // Roll - rotation around Y axis

        // Create rotation matrices
        // R_z(alpha) - yaw rotation around Z axis
        const Rz = new Matrix([
            [Math.cos(alpha), -Math.sin(alpha), 0],
            [Math.sin(alpha), Math.cos(alpha), 0],
            [0, 0, 1]
        ]);

        // R_y(gamma) - roll rotation around Y axis
        const Ry = new Matrix([
            [Math.cos(gamma), 0, Math.sin(gamma)],
            [0, 1, 0],
            [-Math.sin(gamma), 0, Math.cos(gamma)]
        ]);

        // R_x(beta) - pitch rotation around X axis
        const Rx = new Matrix([
            [1, 0, 0],
            [0, Math.cos(beta), -Math.sin(beta)],
            [0, Math.sin(beta), Math.cos(beta)]
        ]);

        // Combined rotation: R = R_z(alpha) * R_y(gamma) * R_x(beta)
        // Apply roll (gamma) first, then pitch (beta), then yaw (alpha)
        const R = Rz.mmul(Ry).mmul(Rx);

        // Input vector in device coordinates
        const v = new Matrix([[reading.x], [reading.y], [reading.z]]);

        // Transform to ENU coordinates
        const vENU = R.mmul(v);

        return {
            x: vENU.get(0, 0),  // East
            y: vENU.get(1, 0),  // North
            z: vENU.get(2, 0),  // Up
            timestamp: reading.timestamp
        };
    }

    /**
     * Estimate gravity vector in device coordinates based on orientation
     * Gravity points down in world coordinates (-Z in ENU)
     * DeviceOrientationEvent angles: alpha (yaw, Z-axis), beta (pitch, X-axis), gamma (roll, Y-axis)
     */
    private estimateGravityVector(orientation: { alpha: number; beta: number; gamma: number }): IMUReading {
        // Gravity magnitude
        const g = 9.81;

        // Convert angles to radians
        const alpha = (orientation.alpha * Math.PI) / 180; // Yaw - rotation around Z axis
        const beta = (orientation.beta * Math.PI) / 180;   // Pitch - rotation around X axis
        const gamma = (orientation.gamma * Math.PI) / 180; // Roll - rotation around Y axis

        // Create rotation matrices
        // R_z(alpha) - yaw rotation around Z axis
        const Rz = new Matrix([
            [Math.cos(alpha), -Math.sin(alpha), 0],
            [Math.sin(alpha), Math.cos(alpha), 0],
            [0, 0, 1]
        ]);

        // R_y(gamma) - roll rotation around Y axis
        const Ry = new Matrix([
            [Math.cos(gamma), 0, Math.sin(gamma)],
            [0, 1, 0],
            [-Math.sin(gamma), 0, Math.cos(gamma)]
        ]);

        // R_x(beta) - pitch rotation around X axis
        const Rx = new Matrix([
            [1, 0, 0],
            [0, Math.cos(beta), -Math.sin(beta)],
            [0, Math.sin(beta), Math.cos(beta)]
        ]);

        // Combined rotation: R = R_z(alpha) * R_y(gamma) * R_x(beta)
        // Apply roll (gamma) first, then pitch (beta), then yaw (alpha)
        const R = Rz.mmul(Ry).mmul(Rx);

        // Gravity in ENU coordinates: (0, 0, -g)
        const gravityENU = new Matrix([[0], [0], [-g]]);

        // Transform to device coordinates: R^T * gravityENU (inverse rotation)
        const gravityDevice = R.transpose().mmul(gravityENU);

        return {
            x: gravityDevice.get(0, 0),
            y: gravityDevice.get(1, 0),
            z: gravityDevice.get(2, 0),
            timestamp: performance.now()
        };
    }
}
