import { AppError, ErrorDomain } from './index';

/**
 * Geolocation error codes enum
 */
export enum GeolocationErrorCode {
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  POSITION_UNAVAILABLE = 'POSITION_UNAVAILABLE',
  TIMEOUT = 'TIMEOUT',
  UNSUPPORTED_BROWSER = 'UNSUPPORTED_BROWSER',
  COORDINATES_CONVERSION_FAILED = 'COORDINATES_CONVERSION_FAILED',
  INVALID_COORDINATES = 'INVALID_COORDINATES',
  UPDATE_SERVICE_ERROR = 'UPDATE_SERVICE_ERROR',
  BACKEND_NOT_AVAILABLE = 'BACKEND_NOT_AVAILABLE',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

/**
 * Geolocation-specific errors
 */
export class GeolocationError extends AppError {
    readonly code: GeolocationErrorCode;
    readonly domain = ErrorDomain.GEOLOCATION;

    constructor(
        message: string,
        code: GeolocationErrorCode,
        cause?: Error
    ) {
        super(message, cause);
        this.code = code;
    }
}

/**
 * Permission denied error (user denied geolocation access)
 */
export class GeolocationPermissionError extends GeolocationError {
    constructor(message = 'User denied geolocation permission', cause?: Error) {
        super(message, GeolocationErrorCode.PERMISSION_DENIED, cause);
    }
}

/**
 * Position unavailable error (GPS signal lost, etc.)
 */
export class GeolocationPositionError extends GeolocationError {
    constructor(message = 'Geolocation position unavailable', cause?: Error) {
        super(message, GeolocationErrorCode.POSITION_UNAVAILABLE, cause);
    }
}

/**
 * Geolocation timeout error
 */
export class GeolocationTimeoutError extends GeolocationError {
    constructor(
        message = 'Geolocation request timed out',
        public readonly timeoutMs?: number,
        cause?: Error
    ) {
        super(message, GeolocationErrorCode.TIMEOUT, cause);
    }
}

/**
 * Browser doesn't support geolocation
 */
export class GeolocationUnsupportedError extends GeolocationError {
    constructor(message = 'Geolocation is not supported by this browser', cause?: Error) {
        super(message, GeolocationErrorCode.UNSUPPORTED_BROWSER, cause);
    }
}

/**
 * Coordinates conversion failed
 */
export class CoordinatesConversionError extends GeolocationError {
    constructor(
        message = 'Failed to convert coordinates',
        public readonly fromSystem?: string,
        public readonly toSystem?: string,
        cause?: Error
    ) {
        super(message, GeolocationErrorCode.COORDINATES_CONVERSION_FAILED, cause);
    }
}

/**
 * Invalid coordinates provided
 */
export class InvalidCoordinatesError extends GeolocationError {
    constructor(
        message = 'Invalid coordinates provided',
        public readonly latitude?: number,
        public readonly longitude?: number,
        cause?: Error
    ) {
        super(message, GeolocationErrorCode.INVALID_COORDINATES, cause);
    }
}

/**
 * Update service error
 */
export class GeolocationUpdateServiceError extends GeolocationError {
    constructor(
        message = 'Geolocation update service error',
        public readonly serviceName?: string,
        cause?: Error
    ) {
        super(message, GeolocationErrorCode.UPDATE_SERVICE_ERROR, cause);
    }
}

/**
 * Backend not available error
 */
export class GeolocationBackendError extends GeolocationError {
    constructor(
        message = 'Geolocation backend not available',
        public readonly backendType?: string,
        cause?: Error
    ) {
        super(message, GeolocationErrorCode.BACKEND_NOT_AVAILABLE, cause);
    }
}
