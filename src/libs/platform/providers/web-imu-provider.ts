/**
 * Web IMU provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import { Matrix } from 'ml-matrix';
import type { IIMUProvider, IMUReading } from '../types';
import { GenericError } from '@/libs/error-handling';

interface DeviceMotionEventWithPermission {
    requestPermission(): Promise<'granted' | 'denied' | 'prompt'>;
}

export class WebIMUProvider implements IIMUProvider {
    private initialized = false;
    private initPromise: Promise<Result<void, GenericError>> | null = null;
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
    private disposed = false;

    private readonly boundHandleMotionEvent: (event: DeviceMotionEvent) => void;
    private readonly boundHandleOrientationEvent: (event: DeviceOrientationEvent) => void;

    private readonly matrixRz: Matrix;      // yaw
    private readonly matrixRy: Matrix;      // roll
    private readonly matrixRx: Matrix;      // pitch
    private readonly matrixR: Matrix;       // rotation matrix
    private readonly matrixRTemp: Matrix;   // temp matrix for multiplication
    private readonly vectorInput: Matrix;   // input vector
    private readonly vectorOutput: Matrix;  // output vector
    private readonly gravityENU: Matrix;    // gravity in ENU [0, 0, -g]

    private static readonly GRAVITY = 9.81;
    private static readonly DEG_TO_RAD = Math.PI / 180;

    constructor() {
        this.boundHandleMotionEvent = this.handleMotionEvent.bind(this);
        this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this);

        this.matrixRz = Matrix.zeros(3, 3);
        this.matrixRy = Matrix.zeros(3, 3);
        this.matrixRx = Matrix.zeros(3, 3);
        this.matrixR = Matrix.zeros(3, 3);
        this.matrixRTemp = Matrix.zeros(3, 3);
        this.vectorInput = Matrix.zeros(3, 1);
        this.vectorOutput = Matrix.zeros(3, 1);
        this.gravityENU = new Matrix([[0], [0], [-WebIMUProvider.GRAVITY]]);
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
            return err(new GenericError('IMU provider has been disposed'));
        }

        const permissionResult = await this.requestPermissionIfNeeded(permissionCallback);
        if (permissionResult.isErr()) {
            return err(permissionResult.error);
        }

        if (!await this.checkHardwareSupport()) {
            return err(new GenericError('Device motion is not supported by this browser'));
        }

        if ('DeviceOrientationEvent' in window) {
            window.addEventListener('deviceorientation', this.boundHandleOrientationEvent);
        }

        this.initialized = true;
        return ok(undefined);
    }

    private async requestPermissionIfNeeded(
        permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>
    ): Promise<Result<void, GenericError>> {
        try {
            if (typeof DeviceMotionEvent !== 'undefined' &&
                typeof (DeviceMotionEvent as unknown as DeviceMotionEventWithPermission).requestPermission === 'function') {

                const permission = await (DeviceMotionEvent as unknown as DeviceMotionEventWithPermission).requestPermission();

                if (permissionCallback && permission === 'prompt') {
                    const userWantsToGrant = await permissionCallback('prompt', 'permission.imu.required');
                    if (!userWantsToGrant) {
                        return err(new GenericError('User declined to grant IMU permission'));
                    }
                }

                const newPermission = await (DeviceMotionEvent as unknown as DeviceMotionEventWithPermission).requestPermission();
                if (newPermission !== 'granted') {
                    return err(new GenericError('IMU permission denied'));
                }
            }

            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to request IMU permission', undefined, error as Error));
        }
    }

    private async checkHardwareSupport(): Promise<boolean> {
        if (!('DeviceOrientationEvent' in window) || !('DeviceMotionEvent' in window)) {
            return false;
        }

        return new Promise<boolean>((resolve) => {
            let resolved = false;

            const cleanup = () => {
                window.removeEventListener('deviceorientation', onOrientation);
                window.removeEventListener('devicemotion', onMotion);
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

            const onMotion = (event: DeviceMotionEvent) => {
                if (event.acceleration || event.accelerationIncludingGravity || event.rotationRate) {
                    succeed();
                }
            };

            window.addEventListener('deviceorientation', onOrientation);
            window.addEventListener('devicemotion', onMotion);

            setTimeout(fail, 1000);
        });
    }

    async startAcceleration(options: { frequency?: number; normalizeToENU?: boolean } = {}): Promise<Result<void, GenericError>> {
        if (this.disposed) {
            return err(new GenericError('IMU provider has been disposed'));
        }

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
            if (this.motionEventListenerCount === 0) {
                window.addEventListener('devicemotion', this.boundHandleMotionEvent, true);
            }
            this.motionEventListenerCount++;
            this.isAccelerationActive = true;
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to start acceleration monitoring', undefined, error as Error));
        }
    }

    async startGyroscope(options: { frequency?: number; normalizeToENU?: boolean } = {}): Promise<Result<void, GenericError>> {
        if (this.disposed) {
            return err(new GenericError('IMU provider has been disposed'));
        }

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
            if (this.motionEventListenerCount === 0) {
                window.addEventListener('devicemotion', this.boundHandleMotionEvent, true);
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

            if (this.motionEventListenerCount === 0) {
                window.removeEventListener('devicemotion', this.boundHandleMotionEvent, true);
            }
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to stop gyroscope monitoring', undefined, error as Error));
        }
    }

    async getAccelerationReading(): Promise<Result<IMUReading | null, GenericError>> {
        if (this.disposed) {
            return err(new GenericError('IMU provider has been disposed'));
        }

        if (!this.initialized) {
            const initResult = await this.init();
            if (initResult.isErr()) {
                return err(initResult.error);
            }
        }

        return ok(this.lastAccelerationReading);
    }

    async getGyroscopeReading(): Promise<Result<IMUReading | null, GenericError>> {
        if (this.disposed) {
            return err(new GenericError('IMU provider has been disposed'));
        }

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

        if (this.lastAccelerationReading) {
            callback(this.lastAccelerationReading);
        }

        return id;
    }

    onGyroscopeReading(callback: (reading: IMUReading) => void): number {
        const id = this.nextListenerId++;
        this.gyroscopeListeners.set(id, callback);

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

    dispose(): void {
        if (this.disposed) {
            return;
        }

        this.disposed = true;

        this.stopAcceleration();
        this.stopGyroscope();

        if ('DeviceOrientationEvent' in window) {
            window.removeEventListener('deviceorientation', this.boundHandleOrientationEvent);
        }

        this.accelerationListeners.clear();
        this.gyroscopeListeners.clear();

        this.initialized = false;
        this.initPromise = null;
        this.deviceOrientation = null;
        this.lastAccelerationReading = null;
        this.lastGyroscopeReading = null;
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
        const timestamp = event.timeStamp || performance.now();

        if (this.isAccelerationActive) {
            this.processAccelerationData(event, timestamp);
        }

        if (this.isGyroscopeActive) {
            this.processGyroscopeData(event, timestamp);
        }
    }

    private processAccelerationData(event: DeviceMotionEvent, timestamp: number): void {
        let acc = event.acceleration;
        let needsGravityRemoval = false;

        if (!acc || acc.x === null || acc.y === null || acc.z === null) {
            acc = event.accelerationIncludingGravity;
            needsGravityRemoval = true;
        }

        if (!acc || acc.x === null || acc.y === null || acc.z === null) {
            return;
        }

        let x = acc.x;
        let y = acc.y;
        let z = acc.z;

        if (needsGravityRemoval && this.deviceOrientation) {
            const gravity = this.computeGravityInDeviceFrame(this.deviceOrientation);
            x -= gravity.x;
            y -= gravity.y;
            z -= gravity.z;
        }

        let reading: IMUReading;
        if (this.normalizeAccelerationToENU && this.deviceOrientation) {
            reading = this.transformToENU(x, y, z, timestamp, this.deviceOrientation);
        } else {
            reading = { x, y, z, timestamp };
        }

        this.lastAccelerationReading = reading;
        this.notifyListeners(this.accelerationListeners, reading, 'acceleration');
    }

    private processGyroscopeData(event: DeviceMotionEvent, timestamp: number): void {
        const rot = event.rotationRate;
        if (!rot || rot.alpha === null || rot.beta === null || rot.gamma === null) {
            return;
        }

        // DeviceMotionEvent.rotationRate (deg/s):
        // alpha: yaw rate
        // beta: pitch rate
        // gamma: roll rate
        //
        // Map to standard IMUReading (x=pitch, y=roll, z=yaw):
        const x = rot.beta;   // pitch rate
        const y = rot.gamma;  // roll rate
        const z = rot.alpha;  // yaw rate

        let reading: IMUReading;
        if (this.normalizeGyroscopeToENU && this.deviceOrientation) {
            reading = this.transformToENU(x, y, z, timestamp, this.deviceOrientation);
        } else {
            reading = { x, y, z, timestamp };
        }

        this.lastGyroscopeReading = reading;
        this.notifyListeners(this.gyroscopeListeners, reading, 'gyroscope');
    }

    private notifyListeners(
        listeners: Map<number, (reading: IMUReading) => void>,
        reading: IMUReading,
        type: string
    ): void {
        for (const callback of listeners.values()) {
            try {
                callback(reading);
            } catch (error) {
                console.error(`Error in ${type} callback:`, error);
            }
        }
    }

    /**
     * Update preallocated rotation matrix
     * R = Rz(alpha) * Ry(gamma) * Rx(beta)
     */
    private updateRotationMatrices(orientation: { alpha: number; beta: number; gamma: number }): void {
        const alpha = orientation.alpha * WebIMUProvider.DEG_TO_RAD;
        const beta = orientation.beta * WebIMUProvider.DEG_TO_RAD;
        const gamma = orientation.gamma * WebIMUProvider.DEG_TO_RAD;

        const ca = Math.cos(alpha), sa = Math.sin(alpha);
        const cb = Math.cos(beta), sb = Math.sin(beta);
        const cg = Math.cos(gamma), sg = Math.sin(gamma);

        // Rz (yaw - 绕 Z 轴)
        this.matrixRz.set(0, 0, ca); this.matrixRz.set(0, 1, -sa); this.matrixRz.set(0, 2, 0);
        this.matrixRz.set(1, 0, sa); this.matrixRz.set(1, 1, ca); this.matrixRz.set(1, 2, 0);
        this.matrixRz.set(2, 0, 0); this.matrixRz.set(2, 1, 0); this.matrixRz.set(2, 2, 1);

        // Ry (roll - 绕 Y 轴)
        this.matrixRy.set(0, 0, cg); this.matrixRy.set(0, 1, 0); this.matrixRy.set(0, 2, sg);
        this.matrixRy.set(1, 0, 0); this.matrixRy.set(1, 1, 1); this.matrixRy.set(1, 2, 0);
        this.matrixRy.set(2, 0, -sg); this.matrixRy.set(2, 1, 0); this.matrixRy.set(2, 2, cg);

        // Rx (pitch - 绕 X 轴)
        this.matrixRx.set(0, 0, 1); this.matrixRx.set(0, 1, 0); this.matrixRx.set(0, 2, 0);
        this.matrixRx.set(1, 0, 0); this.matrixRx.set(1, 1, cb); this.matrixRx.set(1, 2, -sb);
        this.matrixRx.set(2, 0, 0); this.matrixRx.set(2, 1, sb); this.matrixRx.set(2, 2, cb);

        // R = Rz * Ry * Rx
        // calc Rz * Ry -> matrixRTemp
        this.multiplyMatricesInPlace(this.matrixRz, this.matrixRy, this.matrixRTemp);
        // calc matrixRTemp * Rx -> matrixR
        this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRx, this.matrixR);
    }

    /**
     * Multiplication in-place: result = a * b
     */
    private multiplyMatricesInPlace(a: Matrix, b: Matrix, result: Matrix): void {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let sum = 0;
                for (let k = 0; k < 3; k++) {
                    sum += a.get(i, k) * b.get(k, j);
                }
                result.set(i, j, sum);
            }
        }
    }

    /**
     * Multiplication in-place: result = matrix * vector
     */
    private multiplyMatrixVectorInPlace(matrix: Matrix, vector: Matrix, result: Matrix): void {
        for (let i = 0; i < 3; i++) {
            let sum = 0;
            for (let j = 0; j < 3; j++) {
                sum += matrix.get(i, j) * vector.get(j, 0);
            }
            result.set(i, 0, sum);
        }
    }

    /**
     * Map device gyroscope reading to ENU (East-North-Up) coordinate system
     */
    private transformToENU(
        x: number,
        y: number,
        z: number,
        timestamp: number,
        orientation: { alpha: number; beta: number; gamma: number }
    ): IMUReading {
        this.updateRotationMatrices(orientation);

        this.vectorInput.set(0, 0, x);
        this.vectorInput.set(1, 0, y);
        this.vectorInput.set(2, 0, z);

        // v_enu = R * v_device
        this.multiplyMatrixVectorInPlace(this.matrixR, this.vectorInput, this.vectorOutput);

        return {
            x: this.vectorOutput.get(0, 0),  // East
            y: this.vectorOutput.get(1, 0),  // North
            z: this.vectorOutput.get(2, 0),  // Up
            timestamp
        };
    }

    /**
     * Calculate the gravity direction in the ENU coordinate system
     * gravity_device = R^T * gravity_enu
     */
    private computeGravityInDeviceFrame(
        orientation: { alpha: number; beta: number; gamma: number }
    ): { x: number; y: number; z: number } {
        this.updateRotationMatrices(orientation);

        // calc R^T * gravityENU
        // result[i] = sum_j(R[j][i] * gravityENU[j])
        let gx = 0, gy = 0, gz = 0;
        for (let j = 0; j < 3; j++) {
            const gVal = this.gravityENU.get(j, 0);
            gx += this.matrixR.get(j, 0) * gVal;
            gy += this.matrixR.get(j, 1) * gVal;
            gz += this.matrixR.get(j, 2) * gVal;
        }

        return { x: gx, y: gy, z: gz };
    }
}
