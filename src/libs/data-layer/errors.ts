import { AppError, ErrorDomain } from '../error-handling';

/**
 * Migration error codes enum
 */
export enum MigrationErrorCode {
    MIGRATION_FAILED = 'MIGRATION_FAILED',
    INVALID_VERSION = 'INVALID_VERSION',
    UNSUPPORTED_VERSION = 'UNSUPPORTED_VERSION',
    ROLLBACK_FAILED = 'ROLLBACK_FAILED',
    VALIDATION_FAILED = 'VALIDATION_FAILED',
    STRATEGY_NOT_FOUND = 'STRATEGY_NOT_FOUND',
    DATA_CORRUPTION = 'DATA_CORRUPTION'
}

/**
 * Base migration error
 */
export class MigrationError extends AppError {
    readonly code: MigrationErrorCode;
    readonly domain = ErrorDomain.GENERIC;

    constructor(
        message: string,
        code: MigrationErrorCode = MigrationErrorCode.MIGRATION_FAILED,
        cause?: Error
    ) {
        super(message, cause);
        this.code = code;
    }
}

/**
 * Version-related migration errors
 */
export class VersionError extends MigrationError {
    constructor(
        message: string,
        code: MigrationErrorCode = MigrationErrorCode.INVALID_VERSION,
        public readonly currentVersion?: number,
        public readonly targetVersion?: number,
        cause?: Error
    ) {
        super(message, code, cause);
    }
}

/**
 * Data validation errors during migration
 */
export class MigrationValidationError extends MigrationError {
    constructor(
        message: string,
        public readonly field?: string,
        public readonly value?: unknown,
        cause?: Error
    ) {
        super(message, MigrationErrorCode.VALIDATION_FAILED, cause);
    }
}

/**
 * Strategy not found error
 */
export class StrategyNotFoundError extends MigrationError {
    constructor(
        public readonly strategyName: string,
        cause?: Error
    ) {
        super(`Migration strategy '${strategyName}' not found`, MigrationErrorCode.STRATEGY_NOT_FOUND, cause);
    }
}

/**
 * Data corruption error
 */
export class DataCorruptionError extends MigrationError {
    constructor(
        message: string,
        public readonly corruptedData?: unknown,
        cause?: Error
    ) {
        super(message, MigrationErrorCode.DATA_CORRUPTION, cause);
    }
}

/**
 * Rollback failure error
 */
export class RollbackError extends MigrationError {
    constructor(
        message: string,
        public readonly originalError?: Error,
        public readonly rollbackError?: Error,
        cause?: Error
    ) {
        super(message, MigrationErrorCode.ROLLBACK_FAILED, cause);
    }
}
