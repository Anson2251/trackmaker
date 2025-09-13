/**
 * Data Layer - Comprehensive data migration and validation system
 *
 * This module provides a robust framework for handling data migrations,
 * version management, and data validation with proper error handling.
 */

// Error types
export * from './errors';

// Core components
export { VersionManager } from './version-manager';
export { DataValidator } from './data-validator';
export { MigrationService } from './migration-service';

// Migration strategies
export type { MigrationStrategy } from './migration-strategies';
export {
    MigrationStrategyRegistry,
    MigrationStrategyFactory,
    RouteCollectionToSketchMigration,
    SketchV1ToV2Migration
} from './migration-strategies';

// Utilities
export { MigrationUtils } from './migration-service';

// Types
export type {
    MigrationOptions,
    MigrationResult
} from './migration-service';

export type {
    VersionInfo
} from './version-manager';

export type {
    ValidationResult
} from './data-validator';
