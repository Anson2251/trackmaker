/**
 * Platform abstraction layer types and interfaces
 */

import type { Result } from 'neverthrow';
import type { AppError } from '@/libs/error-handling';

/**
 * Supported runtime environments
 */
export enum RuntimeEnvironment {
    TAURI = 'tauri',
    WEB = 'web',
    MOBILE_WEB = 'mobile_web',
    UNKNOWN = 'unknown'
}

/**
 * Platform capabilities that can vary between environments
 */
export interface PlatformCapabilities {
    storage: {
        persistent: boolean;
        quota?: number;
        encryption: boolean;
    };
    geolocation: {
        native: boolean;
        browser: boolean;
        ipBased: boolean;
        highAccuracy: boolean;
        kalmanFilter: boolean;
    };
    fileSystem: {
        read: boolean;
        write: boolean;
        native: boolean;
    };
    network: {
        fetch: boolean;
        websocket: boolean;
        native: boolean;
    };
    permissions: {
        geolocation: boolean;
        notifications: boolean;
        camera: boolean;
        microphone: boolean;
    };
    sensors: {
        deviceOrientation: boolean;
        motion: boolean;
        highAccuracy: boolean;
    };
}

/**
 * Platform-specific configuration
 */
export interface PlatformConfiguration {
    storage: {
        dbName?: string;
        storeName?: string;
        filePath?: string;
        autoSave?: boolean;
    };
    geolocation: {
        timeout?: number;
        maximumAge?: number;
        enableHighAccuracy?: boolean;
        tauriHandler?: string;
        enableKalmanFilter?: boolean;
    };
    fileSystem: {
        basePath?: string;
        allowedExtensions?: string[];
        maxFileSize?: number;
    };
}

/**
 * Storage provider interface for platform-agnostic storage operations
 */
export interface IStorageProvider {
    init(): Promise<Result<void, AppError>>;
    set<T>(key: string, value: T): Promise<Result<void, AppError>>;
    get<T>(key: string): Promise<Result<T | null, AppError>>;
    save(): Promise<Result<void, AppError>>;
    exportToJson(): Promise<Result<string, AppError>>;
    clear(): Promise<Result<void, AppError>>;
    remove(key: string): Promise<Result<void, AppError>>;
}

/**
 * Geolocation provider interface for platform-agnostic location services
 */
export interface IGeolocationProvider {
    init(permissionCallback?: (state: PermissionState) => void): Promise<Result<void, AppError>>;
    getPermissionStatus(): Promise<Result<PermissionState, AppError>>;
    requestPermission(): Promise<Result<PermissionState, AppError>>;
    getCurrentPosition(): Promise<Result<GeolocationPosition, AppError>>;
    watchPosition(callback: PositionCallback): Promise<Result<number, AppError>>;
    clearWatch(watchId: number): Result<void, AppError>;
    isSupported(): boolean;
}

/**
 * Extended interface for geolocation providers that support IMU integration
 */
export interface IIMUEnabledGeolocationProvider extends IGeolocationProvider {
    updateWithIMU?(acceleration: { x: number; y: number; z: number }): void;
}

/**
 * File provider interface for platform-agnostic file operations
 */
export interface IFileProvider {
    init(): Promise<Result<void, AppError>>;
    readFile(path: string): Promise<Result<string | ArrayBuffer, AppError>>;
    writeFile(path: string, content: string | ArrayBuffer): Promise<Result<void, AppError>>;
    deleteFile(path: string): Promise<Result<void, AppError>>;
    listFiles(directory: string): Promise<Result<string[], AppError>>;
    exists(path: string): Promise<Result<boolean, AppError>>;
    isSupported(): boolean;
}

/**
 * IMU reading data structure
 */
export interface IMUReading {
    x: number;
    y: number;
    z: number;
    timestamp: number;
}

/**
 * Device orientation reading data structure
 */
export interface DeviceOrientationReading {
    alpha: number;
    beta: number;
    gamma: number;
    webkitCompassHeading?: number;
    timestamp: number;
}

/**
 * IMU provider interface for platform-agnostic IMU operations
 */
export interface IIMUProvider {
    init(permissionCallback?: (state: PermissionState) => void): Promise<Result<void, AppError>>;
    startAcceleration(options?: { frequency?: number; normalizeToENU?: boolean }): Promise<Result<void, AppError>>;
    startGyroscope(options?: { frequency?: number; normalizeToENU?: boolean }): Promise<Result<void, AppError>>;
    stopAcceleration(): Result<void, AppError>;
    stopGyroscope(): Result<void, AppError>;
    getAccelerationReading(): Promise<Result<IMUReading | null, AppError>>;
    getGyroscopeReading(): Promise<Result<IMUReading | null, AppError>>;
    onAccelerationReading(callback: (reading: IMUReading) => void): number;
    onGyroscopeReading(callback: (reading: IMUReading) => void): number;
    removeEventListener(id: number): Result<void, AppError>;
    isSupported(): boolean;
}

/**
 * Device orientation provider interface for platform-agnostic orientation operations
 */
export interface IDeviceOrientationProvider {
    init(permissionCallback?: (state: PermissionState) => void): Promise<Result<void, AppError>>;
    start(): Promise<Result<void, AppError>>;
    stop(): Result<void, AppError>;
    getCurrentOrientation(): Promise<Result<DeviceOrientationReading | null, AppError>>;
    onOrientationChange(callback: (orientation: DeviceOrientationReading) => void): number;
    removeEventListener(id: number): Result<void, AppError>;
    isSupported(): boolean;
}

/**
 * Platform context containing all platform-specific information
 */
export interface PlatformContext {
    environment: RuntimeEnvironment;
    capabilities: PlatformCapabilities;
    configuration: PlatformConfiguration;
    userAgent: string;
    isMobile: boolean;
    isTablet: boolean;
    browser?: string;
    os?: string;
}
