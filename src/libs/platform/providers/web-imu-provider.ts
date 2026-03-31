/**
 * Web IMU provider implementation using browser APIs
 */

import { Result, ok, err } from 'neverthrow';
import { Matrix } from 'ml-matrix';
import type { IIMUProvider, IMUReading, DeviceOrientationReading } from '../types';
import { GenericError } from '@/libs/error-handling';
import { compensateOrientationForScreen } from '@/libs/heading';

interface DeviceEventWithPermission {
    requestPermission(): Promise<'granted' | 'denied' | 'prompt'>;
}

export class WebIMUProvider implements IIMUProvider {
    private initialized = false;
    private initPromise: Promise<Result<void, GenericError>> | null = null;
    private accelerationListeners: Map<number, (reading: IMUReading) => void> = new Map();
    private gyroscopeListeners: Map<number, (reading: IMUReading) => void> = new Map();
    private orientationListeners: Map<number, (reading: DeviceOrientationReading) => void> = new Map();
    private nextListenerId = 0;
    private lastAccelerationReading: IMUReading | null = null;
    private lastGyroscopeReading: IMUReading | null = null;
    private lastRawOrientationReading: DeviceOrientationReading | null = null;
    private normalizeAccelerationToENU = false;
    private normalizeGyroscopeToENU = false;
    private compensatedOrientation: { alpha: number; beta: number; gamma: number } | null = null;
    private isAccelerationActive = false;
    private isGyroscopeActive = false;
    private motionEventListenerCount = 0;
    private disposed = false;

    // Rate limiting configuration
    private accelerationIntervalMs = 0;
    private gyroscopeIntervalMs = 0;
    private accelerationPrevReading: IMUReading | null = null;
    private accelerationAccumulatedX = 0;
    private accelerationAccumulatedY = 0;
    private accelerationAccumulatedZ = 0;
    private accelerationAccumulatedTime = 0;
    private accelerationLastEmitTime = 0;
    private gyroscopePrevReading: IMUReading | null = null;
    private gyroscopeAccumulatedX = 0;
    private gyroscopeAccumulatedY = 0;
    private gyroscopeAccumulatedZ = 0;
    private gyroscopeAccumulatedTime = 0;
    private gyroscopeLastEmitTime = 0;
    private accelerationTimer: number | null = null;
    private gyroscopeTimer: number | null = null;

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

        this.startOrientationEvents();

        this.initialized = true;
        return ok(undefined);
    }

    private async requestPermissionIfNeeded(
        permissionCallback?: (state: PermissionState, messageId: string) => Promise<boolean>
    ): Promise<Result<void, GenericError>> {
        try {
            const deviceMotionEvent = typeof DeviceMotionEvent !== 'undefined'
                ? (DeviceMotionEvent as unknown as DeviceEventWithPermission)
                : undefined;
            const motionPermissionResult = await this.requestSensorPermission(
                deviceMotionEvent,
                permissionCallback,
                'permission.imu.required',
                'IMU',
            );
            if (motionPermissionResult.isErr()) {
                return motionPermissionResult;
            }

            const deviceOrientationEvent = typeof DeviceOrientationEvent !== 'undefined'
                ? (DeviceOrientationEvent as unknown as DeviceEventWithPermission)
                : undefined;
            const orientationPermissionResult = await this.requestSensorPermission(
                deviceOrientationEvent,
                permissionCallback,
                'permission.device-orientation.required',
                'device orientation',
            );
            if (orientationPermissionResult.isErr()) {
                return orientationPermissionResult;
            }

            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to request IMU permission', undefined, error as Error));
        }
    }

    private async requestSensorPermission(
        sensorEvent: DeviceEventWithPermission | undefined,
        permissionCallback: ((state: PermissionState, messageId: string) => Promise<boolean>) | undefined,
        messageId: string,
        sensorName: string,
    ): Promise<Result<void, GenericError>> {
        if (!sensorEvent || typeof sensorEvent.requestPermission !== 'function') {
            return ok(undefined);
        }

        let permission: 'granted' | 'denied' | 'prompt' = 'prompt';
        try {
            permission = await sensorEvent.requestPermission();
        } catch {
            return ok(undefined);
        }

        if (permission === 'denied') {
            return err(new GenericError(`${sensorName} permission denied`));
        }

        if (permission !== 'prompt') {
            return ok(undefined);
        }

        if (!permissionCallback) {
            return ok(undefined);
        }

        const userWantsToGrant = await permissionCallback('prompt', messageId);
        if (!userWantsToGrant) {
            return err(new GenericError(`User declined to grant ${sensorName} permission`));
        }

        const newPermission = await sensorEvent.requestPermission();
        if (newPermission !== 'granted') {
            return err(new GenericError(`${sensorName} permission denied`));
        }

        return ok(undefined);
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

    private async ensureReady(): Promise<Result<void, GenericError>> {
        if (this.disposed) {
            return err(new GenericError('IMU provider has been disposed'));
        }

        if (this.initialized) {
            return ok(undefined);
        }

        return this.init();
    }

    private startOrientationEvents(): void {
        if ('DeviceOrientationEvent' in window) {
            window.addEventListener('deviceorientation', this.boundHandleOrientationEvent);
        }
    }

    private stopOrientationEvents(): void {
        if ('DeviceOrientationEvent' in window) {
            window.removeEventListener('deviceorientation', this.boundHandleOrientationEvent);
        }
    }

    private startMotionEvents(): void {
        if (this.motionEventListenerCount === 0) {
            window.addEventListener('devicemotion', this.boundHandleMotionEvent, true);
        }
        this.motionEventListenerCount++;
    }

    private stopMotionEvents(): void {
        this.motionEventListenerCount--;
        if (this.motionEventListenerCount === 0) {
            window.removeEventListener('devicemotion', this.boundHandleMotionEvent, true);
        }
    }

    private resetAccelerationSamplingState(): void {
        this.accelerationIntervalMs = 0;
        this.accelerationPrevReading = null;
        this.accelerationAccumulatedX = 0;
        this.accelerationAccumulatedY = 0;
        this.accelerationAccumulatedZ = 0;
        this.accelerationAccumulatedTime = 0;
        this.accelerationLastEmitTime = 0;
        if (this.accelerationTimer !== null) {
            clearTimeout(this.accelerationTimer);
            this.accelerationTimer = null;
        }
    }

    private resetGyroscopeSamplingState(): void {
        this.gyroscopeIntervalMs = 0;
        this.gyroscopePrevReading = null;
        this.gyroscopeAccumulatedX = 0;
        this.gyroscopeAccumulatedY = 0;
        this.gyroscopeAccumulatedZ = 0;
        this.gyroscopeAccumulatedTime = 0;
        this.gyroscopeLastEmitTime = 0;
        if (this.gyroscopeTimer !== null) {
            clearTimeout(this.gyroscopeTimer);
            this.gyroscopeTimer = null;
        }
    }

    async startAcceleration(options: { frequency?: number; normalizeToENU?: boolean } = {}): Promise<Result<void, GenericError>> {
        const readyResult = await this.ensureReady();
        if (readyResult.isErr()) {
            return err(readyResult.error);
        }

        if (this.isAccelerationActive) {
            return ok(undefined);
        }

        try {
            this.normalizeAccelerationToENU = options.normalizeToENU ?? false;
            // frequency < 0 means emit directly without averaging
            // frequency === 0 means emit every reading (no interval-based averaging)
            // frequency > 0 means average over the specified interval
            this.accelerationIntervalMs = options.frequency !== undefined ? Math.floor(1000 / options.frequency) : 0;
            this.resetAccelerationSamplingState();
            this.accelerationIntervalMs = options.frequency !== undefined ? Math.floor(1000 / options.frequency) : 0;

            this.startMotionEvents();
            this.isAccelerationActive = true;
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to start acceleration monitoring', undefined, error as Error));
        }
    }

    async startGyroscope(options: { frequency?: number; normalizeToENU?: boolean } = {}): Promise<Result<void, GenericError>> {
        const readyResult = await this.ensureReady();
        if (readyResult.isErr()) {
            return err(readyResult.error);
        }

        if (this.isGyroscopeActive) {
            return ok(undefined);
        }

        try {
            this.normalizeGyroscopeToENU = options.normalizeToENU ?? false;
            // frequency < 0 means emit directly without averaging
            // frequency === 0 means emit every reading (no interval-based averaging)
            // frequency > 0 means average over the specified interval
            this.gyroscopeIntervalMs = options.frequency !== undefined ? Math.floor(1000 / options.frequency) : 0;
            this.resetGyroscopeSamplingState();
            this.gyroscopeIntervalMs = options.frequency !== undefined ? Math.floor(1000 / options.frequency) : 0;

            this.startMotionEvents();
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
            this.isAccelerationActive = false;
            this.lastAccelerationReading = null;
            this.normalizeAccelerationToENU = false;
            this.resetAccelerationSamplingState();
            this.stopMotionEvents();
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
            this.isGyroscopeActive = false;
            this.lastGyroscopeReading = null;
            this.normalizeGyroscopeToENU = false;
            this.resetGyroscopeSamplingState();
            this.stopMotionEvents();
            return ok(undefined);
        } catch (error) {
            return err(new GenericError('Failed to stop gyroscope monitoring', undefined, error as Error));
        }
    }

    async getAccelerationReading(): Promise<Result<IMUReading | null, GenericError>> {
        const readyResult = await this.ensureReady();
        if (readyResult.isErr()) {
            return err(readyResult.error);
        }

        return ok(this.lastAccelerationReading);
    }

    async getGyroscopeReading(): Promise<Result<IMUReading | null, GenericError>> {
        const readyResult = await this.ensureReady();
        if (readyResult.isErr()) {
            return err(readyResult.error);
        }

        return ok(this.lastGyroscopeReading);
    }

    async getCurrentOrientation(): Promise<Result<DeviceOrientationReading | null, GenericError>> {
        const readyResult = await this.ensureReady();
        if (readyResult.isErr()) {
            return err(readyResult.error);
        }

        return ok(this.lastRawOrientationReading);
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

    onOrientationChange(callback: (reading: DeviceOrientationReading) => void): number {
        const id = this.nextListenerId++;
        this.orientationListeners.set(id, callback);

        if (this.lastRawOrientationReading) {
            callback(this.lastRawOrientationReading);
        }

        return id;
    }

    removeEventListener(id: number): Result<void, GenericError> {
        this.accelerationListeners.delete(id);
        this.gyroscopeListeners.delete(id);
        this.orientationListeners.delete(id);
        return ok(undefined);
    }

    dispose(): void {
        if (this.disposed) {
            return;
        }

        this.disposed = true;

        this.stopAcceleration();
        this.stopGyroscope();

        this.stopOrientationEvents();

        this.accelerationListeners.clear();
        this.gyroscopeListeners.clear();
        this.orientationListeners.clear();

        this.initialized = false;
        this.initPromise = null;
        this.compensatedOrientation = null;
        this.lastAccelerationReading = null;
        this.lastGyroscopeReading = null;
        this.lastRawOrientationReading = null;
    }

    private handleOrientationEvent(event: DeviceOrientationEvent): void {
        if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
            const rawOrientationReading: DeviceOrientationReading = {
                alpha: event.alpha,
                beta: event.beta,
                gamma: event.gamma,
                absolute: event.absolute,
                webkitCompassHeading: (event as DeviceOrientationEvent & { webkitCompassHeading?: number }).webkitCompassHeading,
                timestamp: event.timeStamp || performance.now()
            };

            this.lastRawOrientationReading = rawOrientationReading;
            this.compensatedOrientation = this.getCompensatedOrientation(rawOrientationReading);

            for (const callback of this.orientationListeners.values()) {
                try {
                    callback(rawOrientationReading);
                } catch (error) {
                    console.error('Error in orientation callback:', error);
                }
            }
        }
    }

    private getCompensatedOrientation(orientation: DeviceOrientationReading): { alpha: number; beta: number; gamma: number } {
        // Use the raw browser reading for public consumers, but keep a screen-
        // compensated copy for gravity removal and Device->ENU transforms.
        const compensated = compensateOrientationForScreen(orientation);
        return {
            alpha: compensated.alpha,
            beta: compensated.beta,
            gamma: compensated.gamma
        };
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

    private addAccelerationReading(reading: IMUReading): void {
        // accelerationIntervalMs < 0: emit directly without any processing
        // accelerationIntervalMs === 0: emit every reading (no interval-based averaging)
        if (this.accelerationIntervalMs <= 0) {
            this.lastAccelerationReading = reading;
            this.notifyListeners(this.accelerationListeners, reading, 'acceleration');
            return;
        }

        if (this.accelerationPrevReading === null) {
            this.accelerationPrevReading = reading;
            this.accelerationAccumulatedX = reading.x;
            this.accelerationAccumulatedY = reading.y;
            this.accelerationAccumulatedZ = reading.z;
            this.accelerationAccumulatedTime = 0;
            this.accelerationLastEmitTime = reading.timestamp;
            if (this.accelerationTimer === null) {
                this.accelerationTimer = window.setTimeout(() => this.flushAccelerationReadings(), this.accelerationIntervalMs);
            }
            return;
        }

        const deltaTime = reading.timestamp - this.accelerationPrevReading.timestamp;
        if (deltaTime <= 0) {
            this.accelerationPrevReading = reading;
            return;
        }

        // Trapezium rule
        this.accelerationAccumulatedX += (this.accelerationPrevReading.x + reading.x) * deltaTime / 2;
        this.accelerationAccumulatedY += (this.accelerationPrevReading.y + reading.y) * deltaTime / 2;
        this.accelerationAccumulatedZ += (this.accelerationPrevReading.z + reading.z) * deltaTime / 2;
        this.accelerationAccumulatedTime += deltaTime;

        if (reading.timestamp - this.accelerationLastEmitTime >= this.accelerationIntervalMs) {
            this.flushAccelerationReadings();
            this.accelerationPrevReading = reading;
            this.accelerationAccumulatedX = reading.x;
            this.accelerationAccumulatedY = reading.y;
            this.accelerationAccumulatedZ = reading.z;
            this.accelerationAccumulatedTime = 0;
            this.accelerationLastEmitTime = reading.timestamp;
            if (this.accelerationTimer !== null) {
                clearTimeout(this.accelerationTimer);
            }
            this.accelerationTimer = window.setTimeout(() => this.flushAccelerationReadings(), this.accelerationIntervalMs);
        } else {
            this.accelerationPrevReading = reading;
        }
    }

    private flushAccelerationReadings(): void {
        if (this.accelerationPrevReading === null) {
            if (this.accelerationTimer !== null) {
                clearTimeout(this.accelerationTimer);
                this.accelerationTimer = null;
            }
            return;
        }

        let reading: IMUReading;
        if (this.accelerationAccumulatedTime === 0) {
            reading = this.accelerationPrevReading;
        } else {
            const avgX = this.accelerationAccumulatedX / this.accelerationAccumulatedTime;
            const avgY = this.accelerationAccumulatedY / this.accelerationAccumulatedTime;
            const avgZ = this.accelerationAccumulatedZ / this.accelerationAccumulatedTime;
            reading = {
                x: avgX,
                y: avgY,
                z: avgZ,
                timestamp: this.accelerationPrevReading.timestamp
            };
        }

        this.lastAccelerationReading = reading;
        this.notifyListeners(this.accelerationListeners, reading, 'acceleration');

        this.accelerationPrevReading = null;
        this.accelerationAccumulatedX = 0;
        this.accelerationAccumulatedY = 0;
        this.accelerationAccumulatedZ = 0;
        this.accelerationAccumulatedTime = 0;
        if (this.accelerationTimer !== null) {
            clearTimeout(this.accelerationTimer);
            this.accelerationTimer = null;
        }
    }

    private addGyroscopeReading(reading: IMUReading): void {
        // gyroscopeIntervalMs < 0: emit directly without any processing
        // gyroscopeIntervalMs === 0: emit every reading (no interval-based averaging)
        if (this.gyroscopeIntervalMs <= 0) {
            this.lastGyroscopeReading = reading;
            this.notifyListeners(this.gyroscopeListeners, reading, 'gyroscope');
            return;
        }

        if (this.gyroscopePrevReading === null) {
            this.gyroscopePrevReading = reading;
            this.gyroscopeAccumulatedX = reading.x;
            this.gyroscopeAccumulatedY = reading.y;
            this.gyroscopeAccumulatedZ = reading.z;
            this.gyroscopeAccumulatedTime = 0;
            this.gyroscopeLastEmitTime = reading.timestamp;
            if (this.gyroscopeTimer === null) {
                this.gyroscopeTimer = window.setTimeout(() => this.flushGyroscopeReadings(), this.gyroscopeIntervalMs);
            }
            return;
        }

        const deltaTime = reading.timestamp - this.gyroscopePrevReading.timestamp;
        if (deltaTime <= 0) {
            this.gyroscopePrevReading = reading;
            return;
        }

        // Trapezium rule
        this.gyroscopeAccumulatedX += (this.gyroscopePrevReading.x + reading.x) * deltaTime / 2;
        this.gyroscopeAccumulatedY += (this.gyroscopePrevReading.y + reading.y) * deltaTime / 2;
        this.gyroscopeAccumulatedZ += (this.gyroscopePrevReading.z + reading.z) * deltaTime / 2;
        this.gyroscopeAccumulatedTime += deltaTime;

        if (reading.timestamp - this.gyroscopeLastEmitTime >= this.gyroscopeIntervalMs) {
            this.flushGyroscopeReadings();
            this.gyroscopePrevReading = reading;
            this.gyroscopeAccumulatedX = reading.x;
            this.gyroscopeAccumulatedY = reading.y;
            this.gyroscopeAccumulatedZ = reading.z;
            this.gyroscopeAccumulatedTime = 0;
            this.gyroscopeLastEmitTime = reading.timestamp;
            if (this.gyroscopeTimer !== null) {
                clearTimeout(this.gyroscopeTimer);
            }
            this.gyroscopeTimer = window.setTimeout(() => this.flushGyroscopeReadings(), this.gyroscopeIntervalMs);
        } else {
            this.gyroscopePrevReading = reading;
        }
    }

    private flushGyroscopeReadings(): void {
        if (this.gyroscopePrevReading === null) {
            if (this.gyroscopeTimer !== null) {
                clearTimeout(this.gyroscopeTimer);
                this.gyroscopeTimer = null;
            }
            return;
        }

        let reading: IMUReading;
        if (this.gyroscopeAccumulatedTime === 0) {
            reading = this.gyroscopePrevReading;
        } else {
            const avgX = this.gyroscopeAccumulatedX / this.gyroscopeAccumulatedTime;
            const avgY = this.gyroscopeAccumulatedY / this.gyroscopeAccumulatedTime;
            const avgZ = this.gyroscopeAccumulatedZ / this.gyroscopeAccumulatedTime;
            reading = {
                x: avgX,
                y: avgY,
                z: avgZ,
                timestamp: this.gyroscopePrevReading.timestamp
            };
        }

        this.lastGyroscopeReading = reading;
        this.notifyListeners(this.gyroscopeListeners, reading, 'gyroscope');

        this.gyroscopePrevReading = null;
        this.gyroscopeAccumulatedX = 0;
        this.gyroscopeAccumulatedY = 0;
        this.gyroscopeAccumulatedZ = 0;
        this.gyroscopeAccumulatedTime = 0;
        if (this.gyroscopeTimer !== null) {
            clearTimeout(this.gyroscopeTimer);
            this.gyroscopeTimer = null;
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

        if (needsGravityRemoval && this.compensatedOrientation) {
            const gravity = this.computeGravityInDeviceFrame(this.compensatedOrientation);
            x -= gravity.x;
            y -= gravity.y;
            z -= gravity.z;
        }

        let reading: IMUReading;
        if (this.normalizeAccelerationToENU && this.compensatedOrientation) {
            reading = this.transformToENU(x, y, z, timestamp, this.compensatedOrientation);
        } else {
            reading = { x, y, z, timestamp };
        }

        this.addAccelerationReading(reading);
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
        if (this.normalizeGyroscopeToENU && this.compensatedOrientation) {
            reading = this.transformToENU(x, y, z, timestamp, this.compensatedOrientation);
        } else {
            reading = { x, y, z, timestamp };
        }

        this.addGyroscopeReading(reading);
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
     * DeviceOrientationEvent: alpha=Z(yaw), beta=X(pitch), gamma=Y(roll)
     * R = Rx(beta) * Ry(gamma) * Rz(alpha) for Device->ENU transform
     */
    private updateRotationMatrices(orientation: { alpha: number; beta: number; gamma: number }): void {
        // Negate angles to get Device->ENU transformation (inverse of DeviceOrientationEvent angles)
        const alpha = -orientation.alpha * WebIMUProvider.DEG_TO_RAD;
        const beta = -orientation.beta * WebIMUProvider.DEG_TO_RAD;
        const gamma = -orientation.gamma * WebIMUProvider.DEG_TO_RAD;

        const ca = Math.cos(alpha), sa = Math.sin(alpha);
        const cb = Math.cos(beta), sb = Math.sin(beta);
        const cg = Math.cos(gamma), sg = Math.sin(gamma);

        // Rz (alpha - yaw around Z axis)
        this.matrixRz.set(0, 0, ca); this.matrixRz.set(0, 1, -sa); this.matrixRz.set(0, 2, 0);
        this.matrixRz.set(1, 0, sa); this.matrixRz.set(1, 1, ca); this.matrixRz.set(1, 2, 0);
        this.matrixRz.set(2, 0, 0); this.matrixRz.set(2, 1, 0); this.matrixRz.set(2, 2, 1);

        // Ry (gamma - roll around Y axis)
        this.matrixRy.set(0, 0, cg); this.matrixRy.set(0, 1, 0); this.matrixRy.set(0, 2, sg);
        this.matrixRy.set(1, 0, 0); this.matrixRy.set(1, 1, 1); this.matrixRy.set(1, 2, 0);
        this.matrixRy.set(2, 0, -sg); this.matrixRy.set(2, 1, 0); this.matrixRy.set(2, 2, cg);

        // Rx (beta - pitch around X axis)
        this.matrixRx.set(0, 0, 1); this.matrixRx.set(0, 1, 0); this.matrixRx.set(0, 2, 0);
        this.matrixRx.set(1, 0, 0); this.matrixRx.set(1, 1, cb); this.matrixRx.set(1, 2, -sb);
        this.matrixRx.set(2, 0, 0); this.matrixRx.set(2, 1, sb); this.matrixRx.set(2, 2, cb);

        // R = Rx * Ry * Rz for Device->ENU transformation
        // calc Rx * Ry -> matrixRTemp
        this.multiplyMatricesInPlace(this.matrixRx, this.matrixRy, this.matrixRTemp);
        // calc matrixRTemp * Rz -> matrixR
        this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRz, this.matrixR);
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
