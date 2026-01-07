import { Result, ok, err } from 'neverthrow';
import {
    MigrationError,
    MigrationErrorCode,
    VersionError,
    RollbackError,
    DataCorruptionError
} from './errors';
import { VersionManager } from './version-manager';
import { DataValidator } from './data-validator';
import { MigrationStrategyFactory } from './migration-strategies';
import type { MigrationStrategy } from './migration-strategies';

/**
 * Migration options
 */
export interface MigrationOptions {
    validateBefore?: boolean;
    validateAfter?: boolean;
    enableRollback?: boolean;
    maxRetries?: number;
    retryDelay?: number;
}

/**
 * Migration result
 */
export interface MigrationResult {
    data: unknown;
    fromVersion: number;
    toVersion: number;
    migratedVersions: number[];
    rollbackData?: unknown;
}

/**
 * Migration service for coordinating data migrations
 */
export class MigrationService {
    private static readonly DEFAULT_OPTIONS: MigrationOptions = {
        validateBefore: true,
        validateAfter: true,
        enableRollback: true,
        maxRetries: 3,
        retryDelay: 1000
    };

    /**
     * Check if migration is needed for the given data
     */
    static isMigrationNeeded(data: unknown): Result<boolean, VersionError> {
        return VersionManager.isMigrationNeeded(data);
    }

    /**
     * Get the current version of the data
     */
    static getDataVersion(data: unknown): Result<number, VersionError> {
        return VersionManager.extractVersion(data);
    }

    /**
     * Migrate data to the current version
     */
    static migrateToCurrent(
        data: unknown,
        options: Partial<MigrationOptions> = {}
    ): Result<MigrationResult, MigrationError> {
        return this.migrateToVersion(data, VersionManager.getCurrentVersion(), options);
    }

    /**
     * Migrate data to a specific version
     */
    static migrateToVersion(
        data: unknown,
        targetVersion: number,
        options: Partial<MigrationOptions> = {}
    ): Result<MigrationResult, MigrationError> {
        try {
            const mergedOptions = { ...this.DEFAULT_OPTIONS, ...options };

            // Extract current version
            const currentVersionResult = VersionManager.extractVersion(data);
            if (currentVersionResult.isErr()) {
                return err(new MigrationError(
                    `Failed to extract current version: ${currentVersionResult.error.message}`,
                    MigrationErrorCode.INVALID_VERSION,
                    currentVersionResult.error
                ));
            }

            const currentVersion = currentVersionResult.value;

            // Check if migration is needed
            if (currentVersion === targetVersion) {
                return ok({
                    data,
                    fromVersion: currentVersion,
                    toVersion: targetVersion,
                    migratedVersions: []
                });
            }

            // Determine migration path
            const migrationPathResult = VersionManager.determineMigrationPath(currentVersion, targetVersion);
            if (migrationPathResult.isErr()) {
                return err(new MigrationError(
                    `Failed to determine migration path: ${migrationPathResult.error.message}`,
                    MigrationErrorCode.INVALID_VERSION,
                    migrationPathResult.error
                ));
            }

            const migrationPath = migrationPathResult.value;

            // Create migration strategies
            const strategiesResult = MigrationStrategyFactory.createStrategiesForPath(migrationPath);
            if (strategiesResult.isErr()) {
                return err(strategiesResult.error);
            }

            const strategies = strategiesResult.value;

            // Validate data before migration if requested
            if (mergedOptions.validateBefore) {
                const validationResult = this.validateDataBeforeMigration(data, currentVersion);
                if (validationResult.isErr()) {
                    return err(new MigrationError(
                        `Pre-migration validation failed: ${validationResult.error.message}`,
                        MigrationErrorCode.VALIDATION_FAILED,
                        validationResult.error
                    ));
                }
            }

            // Store original data for rollback if enabled
            const rollbackData = mergedOptions.enableRollback ? data : undefined;

            // Execute migration chain
            let currentData = data;
            const migratedVersions: number[] = [];

            for (const strategy of strategies) {
                const migrationResult = this.executeMigrationWithRetry(
                    strategy,
                    currentData,
                    mergedOptions
                );

                if (migrationResult.isErr()) {
                    // Attempt rollback if enabled
                    if (mergedOptions.enableRollback && rollbackData) {
                        const rollbackResult = this.rollbackToVersion(
                            rollbackData
                        );

                        if (rollbackResult.isErr()) {
                            return err(new RollbackError(
                                `Migration failed and rollback also failed: ${rollbackResult.error.message}`,
                                migrationResult.error,
                                rollbackResult.error
                            ));
                        }
                    }

                    return err(migrationResult.error);
                }

                currentData = migrationResult.value;
                migratedVersions.push(strategy.toVersion);
            }

            // Validate data after migration if requested
            if (mergedOptions.validateAfter) {
                const validationResult = this.validateDataAfterMigration(currentData, targetVersion);
                if (validationResult.isErr()) {
                    return err(new MigrationError(
                        `Post-migration validation failed: ${validationResult.error.message}`,
                        MigrationErrorCode.VALIDATION_FAILED,
                        validationResult.error
                    ));
                }
            }

            return ok({
                data: currentData,
                fromVersion: currentVersion,
                toVersion: targetVersion,
                migratedVersions,
                rollbackData: mergedOptions.enableRollback ? rollbackData : undefined
            });

        } catch (error) {
            return err(new MigrationError(
                `Migration service error: ${String(error)}`,
                MigrationErrorCode.MIGRATION_FAILED,
                error instanceof Error ? error : new Error(String(error))
            ));
        }
    }

    /**
     * Execute a single migration with retry logic
     */
    private static executeMigrationWithRetry(
        strategy: MigrationStrategy,
        data: unknown,
        options: MigrationOptions
    ): Result<unknown, MigrationError> {
        let lastError: MigrationError | null = null;

        for (let attempt = 0; attempt <= (options.maxRetries || 0); attempt++) {
            try {
                // Execute migration
                const result = strategy.migrate(data);

                if (result.isErr()) {
                    lastError = result.error;
                    continue;
                }

                // Validate result if strategy provides validation
                if (strategy.validateAfter) {
                    const validationResult = strategy.validateAfter(result.value);
                    if (validationResult.isErr()) {
                        lastError = new MigrationError(
                            `Post-migration validation failed: ${validationResult.error.message}`,
                            MigrationErrorCode.VALIDATION_FAILED,
                            validationResult.error
                        );
                        continue;
                    }
                }

                return ok(result.value);

            } catch (error) {
                lastError = new MigrationError(
                    `Migration attempt ${attempt + 1} failed: ${String(error)}`,
                    MigrationErrorCode.MIGRATION_FAILED,
                    error instanceof Error ? error : new Error(String(error))
                );
            }

            // Wait before retry (except on last attempt)
            if (attempt < (options.maxRetries || 0) && options.retryDelay) {
                // Note: In a real implementation, you'd want to make this async
                // For now, we'll skip the delay in synchronous code
                console.warn(`Migration failed, retrying in ${options.retryDelay}ms...`);
            }
        }

        return err(lastError || new MigrationError(
            'Migration failed after all retry attempts',
            MigrationErrorCode.MIGRATION_FAILED
        ));
    }

    /**
     * Rollback to a previous version
     */
    private static rollbackToVersion(
        originalData: unknown
    ): Result<unknown, MigrationError> {
        try {
            // For now, we'll just return the original data
            // In a more complex system, you'd implement proper rollback strategies
            return ok(originalData);
        } catch (error) {
            return err(new MigrationError(
                `Rollback failed: ${String(error)}`,
                MigrationErrorCode.ROLLBACK_FAILED,
                error instanceof Error ? error : new Error(String(error))
            ));
        }
    }

    /**
     * Validate data before migration
     */
    private static validateDataBeforeMigration(
        data: unknown,
        version: number
    ): Result<void, MigrationError> {
        switch (version) {
            case 0:
                return DataValidator.validateRouteCollectionData(data)
                    .map(() => undefined)
                    .mapErr(error => new MigrationError(
                        `Route collection validation failed: ${error.message}`,
                        MigrationErrorCode.VALIDATION_FAILED,
                        error
                    ));
            case 1:
                return DataValidator.validateSketchArray(data)
                    .map(() => undefined)
                    .mapErr(error => new MigrationError(
                        `Sketch array validation failed: ${error.message}`,
                        MigrationErrorCode.VALIDATION_FAILED,
                        error
                    ));
            default:
                return err(new MigrationError(
                    `Unknown version for pre-migration validation: ${version}`,
                    MigrationErrorCode.VALIDATION_FAILED
                ));
        }
    }

    /**
     * Validate data after migration
     */
    private static validateDataAfterMigration(
        data: unknown,
        version: number
    ): Result<void, MigrationError> {
        switch (version) {
            case 1:
                return DataValidator.validateSketchArray(data)
                    .map(() => undefined)
                    .mapErr(error => new MigrationError(
                        `Sketch array validation failed: ${error.message}`,
                        MigrationErrorCode.VALIDATION_FAILED,
                        error
                    ));
            default:
                return err(new MigrationError(
                    `Unknown version for post-migration validation: ${version}`,
                    MigrationErrorCode.VALIDATION_FAILED
                ));
        }
    }

    /**
     * Check data integrity
     */
    static checkDataIntegrity(
        data: unknown,
        expectedFormat: 'sketch' | 'route-collection' | 'sketch-array'
    ): Result<import('./data-validator').ValidationResult, DataCorruptionError> {
        return DataValidator.checkDataIntegrity(data, expectedFormat);
    }
}

/**
 * Migration utilities
 */
export class MigrationUtils {
    /**
     * Create a backup of data before migration
     */
    static createBackup(data: unknown): string {
        return JSON.stringify(data, null, 2);
    }

    /**
     * Restore data from backup
     */
    static restoreBackup(backup: string): Result<unknown, MigrationError> {
        try {
            const data = JSON.parse(backup);
            return ok(data);
        } catch (error) {
            return err(new MigrationError(
                `Failed to restore backup: ${String(error)}`,
                MigrationErrorCode.DATA_CORRUPTION,
                error instanceof Error ? error : new Error(String(error))
            ));
        }
    }

    /**
     * Check if data is in a migratable format
     */
    static isMigratableFormat(data: unknown): boolean {
        const versionResult = VersionManager.extractVersion(data);
        if (versionResult.isErr()) {
            return false;
        }

        const version = versionResult.value;
        return version >= 0 && version <= VersionManager.getCurrentVersion();
    }
}
