import { Result, ResultAsync, err, ok } from 'neverthrow';

/**
 * Error domains enum
 */
export enum ErrorDomain {
    GENERIC = 'generic',
    VALIDATION = 'validation',
    NETWORK = 'network',
    GEOLOCATION = 'geolocation',
    STORAGE = 'storage',
    CONVERSION = 'conversion',
    UPDATE_SERVICE = 'update_service'
}

/**
 * Generic error codes enum
 */
export enum GenericErrorCode {
    GENERIC_ERROR = 'GENERIC_ERROR',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    OPERATION_FAILED = 'OPERATION_FAILED'
}

/**
 * Validation error codes enum
 */
export enum ValidationErrorCode {
    VALIDATION_ERROR = 'VALIDATION_ERROR',
    INVALID_INPUT = 'INVALID_INPUT',
    MISSING_REQUIRED_FIELD = 'MISSING_REQUIRED_FIELD',
    INVALID_FORMAT = 'INVALID_FORMAT'
}

/**
 * Network error codes enum
 */
export enum NetworkErrorCode {
    NETWORK_ERROR = 'NETWORK_ERROR',
    TIMEOUT_ERROR = 'TIMEOUT_ERROR',
    CONNECTION_FAILED = 'CONNECTION_FAILED',
    REQUEST_FAILED = 'REQUEST_FAILED'
}

/**
 * Base error class for all domain-specific errors
 */
export abstract class AppError extends Error {
    abstract readonly code: string;
    abstract readonly domain: ErrorDomain;

    constructor(message: string, public readonly cause?: Error) {
        super(message);
        this.name = this.constructor.name;
        if (cause) {
            this.message = `${message} (caused by: ${cause.message})`;
        }
    }
}

/**
 * Generic application errors
 */
export class GenericError extends AppError {
    readonly code: GenericErrorCode;
    readonly domain = ErrorDomain.GENERIC;

    constructor(
        message: string,
        code: GenericErrorCode = GenericErrorCode.GENERIC_ERROR,
        cause?: Error
    ) {
        super(message, cause);
        this.code = code;
    }
}

/**
 * Validation errors
 */
export class ValidationError extends AppError {
    readonly code: ValidationErrorCode;
    readonly domain = ErrorDomain.VALIDATION;

    constructor(
        message: string,
        code: ValidationErrorCode = ValidationErrorCode.VALIDATION_ERROR,
        public readonly field?: string,
        public readonly value?: unknown,
        cause?: Error
    ) {
        super(message, cause);
        this.code = code;
    }
}

/**
 * Network/HTTP errors
 */
export class NetworkError extends AppError {
    readonly code: NetworkErrorCode;
    readonly domain = ErrorDomain.NETWORK;

    constructor(
        message: string,
        code: NetworkErrorCode = NetworkErrorCode.NETWORK_ERROR,
        public readonly statusCode?: number,
        public readonly url?: string,
        cause?: Error
    ) {
        super(message, cause);
        this.code = code;
    }
}

/**
 * Timeout errors
 */
export class TimeoutError extends NetworkError {
    constructor(
        message: string,
        public readonly timeoutMs?: number,
        cause?: Error
    ) {
        super(message, NetworkErrorCode.TIMEOUT_ERROR, undefined, undefined, cause);
    }
}

/**
 * Utility type for error constructors
 */
export type ErrorConstructor<T extends AppError> = new (message: string, cause?: Error) => T;

/**
 * Create a Result type from a promise, catching any errors
 */
export function safeTryAsync<T, E extends AppError>(
    fn: () => Promise<T>,
    errorConstructor?: ErrorConstructor<E>
): ResultAsync<T, E> {
    return ResultAsync.fromPromise(
        fn(),
        (error) => {
            if (errorConstructor) {
                return new errorConstructor(`Async operation failed: ${error}`, error as Error);
            }
            return new GenericError(`Async operation failed: ${error}`, GenericErrorCode.OPERATION_FAILED, error as Error) as E;
        }
    );
}

/**
 * Create a Result type from a synchronous operation, catching any errors
 */
export function safeTry<T, E extends AppError>(
    fn: () => T,
    errorConstructor?: ErrorConstructor<E>
): Result<T, E> {
    try {
        return ok(fn());
    } catch (error) {
        if (errorConstructor) {
            return err(new errorConstructor(`Operation failed: ${error}`, error as Error));
        }
        return err(new GenericError(`Operation failed: ${error}`, GenericErrorCode.OPERATION_FAILED, error as Error) as E);
    }
}

/**
 * Chain multiple Result operations with automatic error propagation
 */
export function chainResults<T, E extends AppError>(
    results: Result<T, E>[]
): Result<T[], E> {
    const values: T[] = [];

    for (const result of results) {
        if (result.isErr()) {
            return err(result.error);
        }
        values.push(result.value);
    }

    return ok(values);
}

/**
 * Transform an error from one type to another
 */
export function transformError<E1 extends AppError, E2 extends AppError>(
    error: E1,
    transformer: (error: E1) => E2
): E2 {
    return transformer(error);
}

/**
 * Combine multiple ResultAsync operations
 */
export function combineResultsAsync<T, E extends AppError>(
    results: ResultAsync<T, E>[]
): ResultAsync<T[], E> {
    return ResultAsync.combine(results);
}

/**
 * Type guard for AppError
 */
export function isAppError(error: unknown): error is AppError {
    return error instanceof AppError;
}

/**
 * Convert unknown error to AppError
 */
export function toAppError(error: unknown, fallbackMessage = 'Unknown error occurred'): AppError {
    if (isAppError(error)) {
        return error;
    }

    if (error instanceof Error) {
        return new GenericError(fallbackMessage, GenericErrorCode.UNKNOWN_ERROR, error);
    }

    return new GenericError(fallbackMessage, GenericErrorCode.UNKNOWN_ERROR);
}

/**
 * Extract error message from unknown error
 */
export function getErrorMessage(error: unknown, fallbackMessage = 'Unknown error'): string {
    if (error instanceof Error) {
        return error.message;
    }

    if (typeof error === 'string') {
        return error;
    }

    return fallbackMessage;
}

/**
 * Log error with context
 */
export function logError(error: AppError, context?: string): void {
    const contextStr = context ? `[${context}] ` : '';
    console.error(`${contextStr}${error.domain}.${error.code}: ${error.message}`, {
        error,
        cause: error.cause,
        stack: error.stack
    });
}

/**
 * Create a retry wrapper for async operations
 */
export function withRetryAsync<T, E extends AppError>(
    operation: () => ResultAsync<T, E>,
    options: {
        maxRetries?: number;
        delayMs?: number;
        backoffMultiplier?: number;
    } = {}
): ResultAsync<T, E> {
    const { maxRetries = 3, delayMs = 1000 } = options;

    const attempt = (remainingRetries: number, currentDelay: number): ResultAsync<T, E> => {
        return operation().orElse((error) => {
            if (remainingRetries <= 0) {
                return err(error);
            }

            console.warn(`Operation failed, retrying in ${currentDelay}ms. ${remainingRetries} retries left.`);

            return ResultAsync.fromPromise(
                new Promise<T>((resolve, reject) => {
                    setTimeout(() => {
                        attempt(remainingRetries - 1, currentDelay * 2)
                            .match(
                                (value) => resolve(value),
                                (retryError) => reject(retryError)
                            );
                    }, currentDelay);
                }),
                (retryError) => retryError as E
            );
        });
    };

    return attempt(maxRetries, delayMs);
}
