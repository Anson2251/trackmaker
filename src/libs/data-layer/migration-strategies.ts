import { Result, ok, err } from 'neverthrow';
import { MigrationError, MigrationErrorCode, MigrationValidationError } from './errors';
import { DataValidator } from './data-validator';
import { CartoSketch } from '../cartosketch';
import type { GeographicSketchType, GeographicRouteType } from '../cartosketch/definitions';

/**
 * Migration strategy interface
 */
export interface MigrationStrategy {
    readonly fromVersion: number;
    readonly toVersion: number;
    readonly name: string;

    /**
     * Execute migration
     */
    migrate(data: unknown): Result<unknown, MigrationError>;

    /**
     * Rollback migration
     */
    rollback?(data: unknown): Result<unknown, MigrationError>;

    /**
     * Validate data before migration
     */
    validateBefore(data: unknown): Result<void, MigrationValidationError>;

    /**
     * Validate data after migration
     */
    validateAfter(data: unknown): Result<void, MigrationValidationError>;
}

/**
 * Migration strategy for converting route collection to sketch format
 */
export class RouteCollectionToSketchMigration implements MigrationStrategy {
    readonly fromVersion = 0;
    readonly toVersion = 1;
    readonly name = 'route-collection-to-sketch';

    migrate(data: unknown): Result<GeographicSketchType[], MigrationError> {
        try {
            // Validate input data
            const validationResult = DataValidator.validateRouteCollectionData(data);
            if (validationResult.isErr()) {
                return err(new MigrationError(
                    `Invalid route collection data: ${validationResult.error.message}`,
                    MigrationErrorCode.VALIDATION_FAILED,
                    validationResult.error
                ));
            }

            const routeCollection = validationResult.value;

            // Create a new sketch with the migrated route data
            const sketch = new CartoSketch();
            sketch.meta.name = routeCollection.meta.name || 'Migrated Routes';
            sketch.meta.description = routeCollection.meta.description || 'Migrated from route collection';
            sketch.meta.creation_timestamp = routeCollection.meta.creation_timestamp;
            sketch.meta.modification_timestamp = Date.now();
            sketch.routes = routeCollection;

            // Create sketches array with the single migrated sketch
            const sketches = [sketch.toStorage()];

            return ok(sketches);
        } catch (error) {
            return err(new MigrationError(
                `Route collection to sketch migration failed: ${error}`,
                MigrationErrorCode.MIGRATION_FAILED,
                error instanceof Error ? error : new Error(String(error))
            ));
        }
    }

    rollback(data: unknown): Result<GeographicRouteType, MigrationError> {
        try {
            // Validate input data
            const validationResult = DataValidator.validateSketchArray(data);
            if (validationResult.isErr()) {
                return err(new MigrationError(
                    `Invalid sketch array data for rollback: ${validationResult.error.message}`,
                    MigrationErrorCode.VALIDATION_FAILED,
                    validationResult.error
                ));
            }

            const sketches = validationResult.value;

            if (sketches.length === 0) {
                return err(new MigrationError(
                    'Cannot rollback: empty sketch array',
                    MigrationErrorCode.MIGRATION_FAILED
                ));
            }

            // For rollback, we take the first sketch's routes
            const firstSketch = sketches[0];

            return ok(firstSketch.routes);
        } catch (error) {
            return err(new MigrationError(
                `Route collection to sketch rollback failed: ${error}`,
                MigrationErrorCode.ROLLBACK_FAILED,
                error instanceof Error ? error : new Error(String(error))
            ));
        }
    }

    validateBefore(data: unknown): Result<void, MigrationValidationError> {
        return DataValidator.validateRouteCollectionData(data)
            .map(() => undefined)
            .mapErr(error => new MigrationValidationError(
                `Pre-migration validation failed: ${error.message}`,
                error.field,
                error.value,
                error
            ));
    }

    validateAfter(data: unknown): Result<void, MigrationValidationError> {
        return DataValidator.validateSketchArray(data)
            .map(() => undefined)
            .mapErr(error => new MigrationValidationError(
                `Post-migration validation failed: ${error.message}`,
                error.field,
                error.value,
                error
            ));
    }
}

/**
 * Migration strategy for handling future data format changes
 * This is a placeholder for version 1 to 2 migration
 */
export class SketchV1ToV2Migration implements MigrationStrategy {
    readonly fromVersion = 1;
    readonly toVersion = 2;
    readonly name = 'sketch-v1-to-v2';

    migrate(): Result<unknown, MigrationError> {
        // Placeholder for future migration logic
        // This would handle migration from version 1 to version 2
        return err(new MigrationError(
            'Sketch V1 to V2 migration not yet implemented',
            MigrationErrorCode.STRATEGY_NOT_FOUND
        ));
    }

    validateBefore(data: unknown): Result<void, MigrationValidationError> {
        return DataValidator.validateSketchArray(data)
            .map(() => undefined)
            .mapErr(error => new MigrationValidationError(
                `Pre-migration validation failed: ${error.message}`,
                error.field,
                error.value,
                error
            ));
    }

    validateAfter(data: unknown): Result<void, MigrationValidationError> {
        // Placeholder for future validation logic
        return err(new MigrationValidationError(
            'Sketch V2 validation not yet implemented',
            undefined,
            data
        ));
    }
}

/**
 * Migration strategy registry
 */
export class MigrationStrategyRegistry {
    private static strategies: Map<string, MigrationStrategy> = new Map();

    static {
        // Register default strategies
        this.register(new RouteCollectionToSketchMigration());
        this.register(new SketchV1ToV2Migration());
    }

    /**
     * Register a migration strategy
     */
    static register(strategy: MigrationStrategy): void {
        const key = this.getStrategyKey(strategy.fromVersion, strategy.toVersion);
        this.strategies.set(key, strategy);
    }

    /**
     * Get a migration strategy by version range
     */
    static getStrategy(fromVersion: number, toVersion: number): Result<MigrationStrategy, MigrationError> {
        const key = this.getStrategyKey(fromVersion, toVersion);
        const strategy = this.strategies.get(key);

        if (!strategy) {
            return err(new MigrationError(
                `No migration strategy found for version ${fromVersion} to ${toVersion}`,
                MigrationErrorCode.STRATEGY_NOT_FOUND
            ));
        }

        return ok(strategy);
    }

    /**
     * Get all available strategies
     */
    static getAllStrategies(): MigrationStrategy[] {
        return Array.from(this.strategies.values());
    }

    /**
     * Check if a strategy exists for the given version range
     */
    static hasStrategy(fromVersion: number, toVersion: number): boolean {
        const key = this.getStrategyKey(fromVersion, toVersion);
        return this.strategies.has(key);
    }

    /**
     * Generate strategy key from version range
     */
    private static getStrategyKey(fromVersion: number, toVersion: number): string {
        return `${fromVersion}->${toVersion}`;
    }
}

/**
 * Migration strategy factory
 */
export class MigrationStrategyFactory {
    /**
     * Create a migration strategy for the given version range
     */
    static createStrategy(fromVersion: number, toVersion: number): Result<MigrationStrategy, MigrationError> {
        return MigrationStrategyRegistry.getStrategy(fromVersion, toVersion);
    }

    /**
     * Create all strategies needed for a migration path
     */
    static createStrategiesForPath(path: number[]): Result<MigrationStrategy[], MigrationError> {
        try {
            const strategies: MigrationStrategy[] = [];

            for (let i = 0; i < path.length; i++) {
                const fromVersion = i === 0 ? path[0] - 1 : path[i - 1];
                const toVersion = path[i];

                const strategyResult = this.createStrategy(fromVersion, toVersion);
                if (strategyResult.isErr()) {
                    return err(strategyResult.error);
                }

                strategies.push(strategyResult.value);
            }

            return ok(strategies);
        } catch (error) {
            return err(new MigrationError(
                `Failed to create strategies for migration path: ${error}`,
                MigrationErrorCode.MIGRATION_FAILED,
                error instanceof Error ? error : new Error(String(error))
            ));
        }
    }
}
