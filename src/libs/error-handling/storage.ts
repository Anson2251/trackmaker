import { AppError, ErrorDomain } from './index';

/**
 * Storage error codes enum
 */
export enum StorageErrorCode {
    STORAGE_ERROR = 'STORAGE_ERROR',
    NOT_FOUND = 'NOT_FOUND',
    QUOTA_EXCEEDED = 'QUOTA_EXCEEDED',
    INVALID_DATA = 'INVALID_DATA',
    SERIALIZATION_FAILED = 'SERIALIZATION_FAILED',
    DESERIALIZATION_FAILED = 'DESERIALIZATION_FAILED',
    DATABASE_ERROR = 'DATABASE_ERROR',
    TRANSACTION_FAILED = 'TRANSACTION_FAILED',
    KEY_NOT_FOUND = 'KEY_NOT_FOUND',
    WRITE_FAILED = 'WRITE_FAILED',
    READ_FAILED = 'READ_FAILED'
}

/**
 * Storage-specific errors
 */
export class StorageError extends AppError {
    readonly code: StorageErrorCode;
    readonly domain = ErrorDomain.STORAGE;

    constructor(
        message: string,
        code: StorageErrorCode,
        cause?: Error
    ) {
        super(message, cause);
        this.code = code;
    }
}

/**
 * Item not found in storage
 */
export class StorageNotFoundError extends StorageError {
    constructor(
        message = 'Item not found in storage',
        public readonly key?: string,
        cause?: Error
    ) {
        super(message, StorageErrorCode.NOT_FOUND, cause);
    }
}

/**
 * Storage quota exceeded
 */
export class StorageQuotaError extends StorageError {
    constructor(
        message = 'Storage quota exceeded',
        public readonly requestedSize?: number,
        public readonly availableSize?: number,
        cause?: Error
    ) {
        super(message, StorageErrorCode.QUOTA_EXCEEDED, cause);
    }
}

/**
 * Invalid data format
 */
export class StorageDataError extends StorageError {
    constructor(
        message = 'Invalid data format',
        public readonly data?: unknown,
        cause?: Error
    ) {
        super(message, StorageErrorCode.INVALID_DATA, cause);
    }
}

/**
 * Serialization failed
 */
export class StorageSerializationError extends StorageError {
    constructor(
        message = 'Failed to serialize data',
        public readonly data?: unknown,
        cause?: Error
    ) {
        super(message, StorageErrorCode.SERIALIZATION_FAILED, cause);
    }
}

/**
 * Deserialization failed
 */
export class StorageDeserializationError extends StorageError {
    constructor(
        message = 'Failed to deserialize data',
        public readonly serializedData?: string,
        cause?: Error
    ) {
        super(message, StorageErrorCode.DESERIALIZATION_FAILED, cause);
    }
}

/**
 * Database operation failed
 */
export class StorageDatabaseError extends StorageError {
    constructor(
        message = 'Database operation failed',
        public readonly operation?: string,
        cause?: Error
    ) {
        super(message, StorageErrorCode.DATABASE_ERROR, cause);
    }
}

/**
 * Transaction failed
 */
export class StorageTransactionError extends StorageError {
    constructor(
        message = 'Storage transaction failed',
        public readonly transactionId?: string,
        cause?: Error
    ) {
        super(message, StorageErrorCode.TRANSACTION_FAILED, cause);
    }
}

/**
 * Key not found error
 */
export class StorageKeyError extends StorageError {
    constructor(
        message = 'Storage key not found',
        public readonly key?: string,
        cause?: Error
    ) {
        super(message, StorageErrorCode.KEY_NOT_FOUND, cause);
    }
}

/**
 * Write operation failed
 */
export class StorageWriteError extends StorageError {
    constructor(
        message = 'Storage write operation failed',
        public readonly key?: string,
        public readonly value?: unknown,
        cause?: Error
    ) {
        super(message, StorageErrorCode.WRITE_FAILED, cause);
    }
}

/**
 * Read operation failed
 */
export class StorageReadError extends StorageError {
    constructor(
        message = 'Storage read operation failed',
        public readonly key?: string,
        cause?: Error
    ) {
        super(message, StorageErrorCode.READ_FAILED, cause);
    }
}
