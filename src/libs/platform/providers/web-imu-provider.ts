/**
 * Web IMU provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import type { IIMUProvider, IMUReading } from '../types';
import { GenericError } from '@/libs/error-handling';

export class WebIMUProvider implements IIMUProvider {
    private initialized = false;
    private permissionCallback: ((state: PermissionState) => void) | undefined;
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

    async init(permissionCallback?: (state: PermissionState) => void): Promise<Result<void, GenericError>> {
        this.permissionCallback = permissionCallback;
        if (this.initialized) {
            return ok(undefined);
        }

        if (!this.isSupported()) {
            return err(new GenericError('Device motion is not supported by this browser'));
        }

        // Listen to device orientation for ENU normalization
        if ('DeviceOrientationEvent' in window) {
            window.addEventListener('deviceorientation', this.boundHandleOrientationEvent);
        }

        this.initialized = true;
        return ok(undefined);
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

    isSupported(): boolean {
        return 'DeviceMotionEvent' in window;
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
                    timestamp: performance.now()
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
                    timestamp: performance.now()
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
     * This is a simplified transformation using device orientation
     */
    private normalizeToENU(reading: IMUReading, orientation: { alpha: number; beta: number; gamma: number }): IMUReading {
        // Convert angles to radians
        const alpha = (orientation.alpha * Math.PI) / 180; // Azimuth (yaw)
        const beta = (orientation.beta * Math.PI) / 180;   // Pitch
        const gamma = (orientation.gamma * Math.PI) / 180; // Roll

        // Simplified rotation matrices for yaw (alpha), pitch (beta), roll (gamma)
        // Full transformation: R = R_z(gamma) * R_y(beta) * R_x(alpha)
        // But for basic ENU, we primarily need yaw and pitch corrections

        const cosAlpha = Math.cos(alpha);
        const sinAlpha = Math.sin(alpha);
        const cosBeta = Math.cos(beta);
        const sinBeta = Math.sin(beta);
        const cosGamma = Math.cos(gamma);
        const sinGamma = Math.sin(gamma);

        // Apply yaw rotation (around Z)
        const xTemp = reading.x * cosAlpha - reading.y * sinAlpha;
        const yTemp = reading.x * sinAlpha + reading.y * cosAlpha;
        const zTemp = reading.z;

        // Apply pitch rotation (around Y)
        const xEnu = xTemp * cosBeta + zTemp * sinBeta;
        const yEnu = yTemp;
        const zEnu = -xTemp * sinBeta + zTemp * cosBeta;

        // Apply roll rotation (around X) - minimal effect for ENU
        // Often roll is ignored for basic ENU, but included here
        const finalX = xEnu;
        const finalY = yEnu * cosGamma - zEnu * sinGamma;
        const finalZ = yEnu * sinGamma + zEnu * cosGamma;

        return {
            x: finalX,  // East
            y: finalY,  // North
            z: finalZ,  // Up
            timestamp: reading.timestamp
        };
    }

    /**
     * Estimate gravity vector in device coordinates based on orientation
     * Gravity points down in world coordinates (-Z in ENU)
     */
    private estimateGravityVector(orientation: { alpha: number; beta: number; gamma: number }): IMUReading {
        // Gravity magnitude
        const g = 9.81;

        // Convert to radians
        const alpha = (orientation.alpha * Math.PI) / 180;
        const beta = (orientation.beta * Math.PI) / 180;
        const gamma = (orientation.gamma * Math.PI) / 180;

        // Gravity in world ENU: (0, 0, -g) - down
        // Transform back to device coordinates using inverse rotation
        // This is simplified; assumes basic orientation

        const cosAlpha = Math.cos(alpha);
        const sinAlpha = Math.sin(alpha);
        const sinBeta = Math.sin(beta);
        const cosGamma = Math.cos(gamma);
        const sinGamma = Math.sin(gamma);

        // Simplified gravity components in device frame
        // For full accuracy, use the transpose of the rotation matrix
        const gx = g * (sinBeta * cosGamma);
        const gy = g * (sinAlpha * sinBeta * sinGamma + cosAlpha * cosGamma);
        const gz = g * (cosAlpha * sinBeta * sinGamma - sinAlpha * cosGamma);

        return {
            x: gx,
            y: gy,
            z: gz,
            timestamp: performance.now()
        };
    }
}
