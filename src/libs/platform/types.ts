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
    init(): Promise<Result<void, AppError>>;
    getPermissionStatus(): Promise<Result<PermissionState, AppError>>;
    requestPermission(): Promise<Result<PermissionState, AppError>>;
    getCurrentPosition(): Promise<Result<GeolocationPosition, AppError>>;
    watchPosition(callback: PositionCallback): Promise<Result<number, AppError>>;
    clearWatch(watchId: number): Result<void, AppError>;
    isSupported(): boolean;
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
