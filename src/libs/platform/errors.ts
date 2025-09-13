/**
 * Platform abstraction layer error types
 */

import { AppError, ErrorDomain } from '@/libs/error-handling';

/**
 * Storage-related errors
 */
export class StorageError extends AppError {
    readonly domain = ErrorDomain.STORAGE;

    constructor(
        message: string,
        public readonly code: StorageErrorCode,
        cause?: Error
    ) {
        super(message, cause);
    }
}

export enum StorageErrorCode {
    INITIALIZATION_FAILED = 'INITIALIZATION_FAILED',
    NOT_INITIALIZED = 'NOT_INITIALIZED',
    SET_FAILED = 'SET_FAILED',
    GET_FAILED = 'GET_FAILED',
    SAVE_FAILED = 'SAVE_FAILED',
    EXPORT_FAILED = 'EXPORT_FAILED',
    CLEAR_FAILED = 'CLEAR_FAILED',
    REMOVE_FAILED = 'REMOVE_FAILED'
}

/**
 * Geolocation-related errors
 */
export class GeolocationProviderError extends AppError {
    readonly domain = ErrorDomain.GEOLOCATION;

    constructor(
        message: string,
        public readonly code: GeolocationProviderErrorCode,
        cause?: Error
    ) {
        super(message, cause);
    }
}

export enum GeolocationProviderErrorCode {
    INITIALIZATION_FAILED = 'INITIALIZATION_FAILED',
    NOT_INITIALIZED = 'NOT_INITIALIZED',
    PERMISSION_DENIED = 'PERMISSION_DENIED',
    POSITION_UNAVAILABLE = 'POSITION_UNAVAILABLE',
    TIMEOUT = 'TIMEOUT',
    UNSUPPORTED = 'UNSUPPORTED',
    WATCH_FAILED = 'WATCH_FAILED',
    CLEAR_WATCH_FAILED = 'CLEAR_WATCH_FAILED'
}

/**
 * File system related errors
 */
export class FileProviderError extends AppError {
    readonly domain = ErrorDomain.GENERIC;

    constructor(
        message: string,
        public readonly code: FileProviderErrorCode,
        cause?: Error
    ) {
        super(message, cause);
    }
}

export enum FileProviderErrorCode {
    INITIALIZATION_FAILED = 'INITIALIZATION_FAILED',
    NOT_INITIALIZED = 'NOT_INITIALIZED',
    READ_FAILED = 'READ_FAILED',
    WRITE_FAILED = 'WRITE_FAILED',
    DELETE_FAILED = 'DELETE_FAILED',
    LIST_FAILED = 'LIST_FAILED',
    EXISTS_FAILED = 'EXISTS_FAILED',
    UNSUPPORTED = 'UNSUPPORTED',
    FILE_TOO_LARGE = 'FILE_TOO_LARGE',
    INVALID_PATH = 'INVALID_PATH'
}

/**
 * Platform detection errors
 */
export class PlatformDetectionError extends AppError {
    readonly domain = ErrorDomain.GENERIC;

    constructor(
        message: string,
        public readonly code: PlatformDetectionErrorCode,
        cause?: Error
    ) {
        super(message, cause);
    }
}

export enum PlatformDetectionErrorCode {
    DETECTION_FAILED = 'DETECTION_FAILED',
    INVALID_CONTEXT = 'INVALID_CONTEXT',
    UNSUPPORTED_PLATFORM = 'UNSUPPORTED_PLATFORM'
}
