import { Result } from 'neverthrow';
import type { IMUReading, DeviceOrientationReading } from '@/libs/platform';
import { AppError, ErrorDomain } from '@/libs/error-handling';

export interface OrientationUpdateHandler {
    (orientation: DeviceOrientationReading, ...args: unknown[]): void;
}

export interface MotionUpdateHandler {
    (acceleration: IMUReading | null, gyroscope: IMUReading | null, ...args: unknown[]): void;
}

export interface ImuOrientationManagerInterface {
    initialize(): Promise<Result<void, ImuError>>;
    getCurrentOrientation(): Promise<Result<DeviceOrientationReading | null, ImuError>>;
    getCurrentMotion(): Promise<Result<{ acceleration: IMUReading | null; gyroscope: IMUReading | null }, ImuError>>;
    startOrientationUpdates(callback: OrientationUpdateHandler): Promise<Result<number, ImuError>>;
    stopOrientationUpdates(listenerId: number): Result<void, ImuError>;
    startMotionUpdates(callback: MotionUpdateHandler): Promise<Result<number, ImuError>>;
    stopMotionUpdates(listenerId: number): Result<void, ImuError>;
    isOrientationServiceRunning(): boolean;
    isMotionServiceRunning(): boolean;
    getLastKnownOrientation(): DeviceOrientationReading | null;
    getLastKnownMotion(): { acceleration: IMUReading | null; gyroscope: IMUReading | null } | null;
    isSupported(): boolean;
}

export class ImuError extends AppError {
    readonly domain = ErrorDomain.UPDATE_SERVICE; // IMU errors under update service domain

    constructor(
        message: string,
        public readonly code: string,
        cause?: Error
    ) {
        super(message, cause);
        this.name = 'ImuError';
    }
}

export class ImuUpdateServiceError extends ImuError {
    constructor(message: string, code: string, cause?: Error) {
        super(message, code, cause);
        this.name = 'ImuUpdateServiceError';
    }
}

export interface AccelerationUpdateHandler {
    (acceleration: IMUReading, ...args: unknown[]): void;
}

export interface GyroscopeUpdateHandler {
    (gyroscope: IMUReading, ...args: unknown[]): void;
}
