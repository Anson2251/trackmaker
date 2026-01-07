import { Result, ok, err } from 'neverthrow';
import { VersionError, MigrationErrorCode } from './errors';

/**
 * Data version information
 */
export interface VersionInfo {
    version: number;
    timestamp: number;
    description?: string;
}

/**
 * Version manager for tracking data format versions
 */
export class VersionManager {
    private static readonly CURRENT_VERSION = 1;
    private static readonly VERSION_KEY = '_data_version';
    private static readonly MIN_SUPPORTED_VERSION = 0;

    /**
     * Get the current data format version
     */
    static getCurrentVersion(): number {
        return this.CURRENT_VERSION;
    }

    /**
     * Get the minimum supported version
     */
    static getMinimumSupportedVersion(): number {
        return this.MIN_SUPPORTED_VERSION;
    }

    /**
     * Extract version from data
     */
    static extractVersion(data: unknown): Result<number, VersionError> {
        try {
            if (typeof data === 'object' && data !== null && 'version' in data) {
                const version = (data as Record<string, unknown>).version;
                if (typeof version === 'number' && version >= 0) {
                    return ok(version);
                }
            }

            // Check for old format indicators
            if (this.isRouteCollectionFormat(data)) {
                return ok(0); // Route collection format is version 0
            }

            if (this.isSketchArrayFormat(data)) {
                return ok(1); // Sketch array format is version 1
            }

            throw new Error('Unable to determine data version');
        } catch (error) {
            const versionError = error instanceof VersionError ? error : new VersionError(
                `Failed to extract version from data: ${String(error)}`,
                MigrationErrorCode.INVALID_VERSION,
                undefined,
                undefined,
                error instanceof Error ? error : new Error(String(error))
            );
            return err(versionError);
        }
    }

    /**
     * Check if data is in route collection format (version 0)
     */
    private static isRouteCollectionFormat(data: unknown): boolean {
        return (
            typeof data === 'object' &&
            data !== null &&
            'routes' in data &&
            !('sketches' in data) &&
            Array.isArray((data as Record<string, unknown>).routes)
        );
    }

    /**
     * Check if data is in sketch array format (version 1)
     */
    private static isSketchArrayFormat(data: unknown): boolean {
        return Array.isArray(data) && data.length > 0 && this.isSketchObject(data[0]);
    }

    /**
     * Check if object is a sketch
     */
    private static isSketchObject(obj: unknown): boolean {
        return (
            typeof obj === 'object' &&
            obj !== null &&
            'id' in obj &&
            'meta' in obj &&
            'routes' in obj &&
            'drafts' in obj
        );
    }

    /**
     * Validate version compatibility
     */
    static validateVersion(version: number): Result<void, VersionError> {
        try {
            if (version < this.MIN_SUPPORTED_VERSION) {
                throw new VersionError(
                    `Version ${version} is below minimum supported version ${this.MIN_SUPPORTED_VERSION}`,
                    MigrationErrorCode.UNSUPPORTED_VERSION,
                    version
                );
            }

            if (version > this.CURRENT_VERSION) {
                throw new VersionError(
                    `Version ${version} is above current version ${this.CURRENT_VERSION}`,
                    MigrationErrorCode.UNSUPPORTED_VERSION,
                    version,
                    this.CURRENT_VERSION
                );
            }

            return ok(undefined);
        } catch (error) {
            const versionError = error instanceof VersionError ? error : new VersionError(
                `Version validation failed: ${String(error)}`,
                MigrationErrorCode.INVALID_VERSION,
                version,
                undefined,
                error instanceof Error ? error : new Error(String(error))
            );
            return err(versionError);
        }
    }

    /**
     * Add version metadata to data
     */
    static addVersionMetadata<T extends Record<string, unknown>>(data: T, version: number = this.CURRENT_VERSION): T {
        return {
            ...data,
            [this.VERSION_KEY]: {
                version,
                timestamp: Date.now(),
                description: `Version ${version} data format`
            }
        };
    }

    /**
     * Extract version metadata from data
     */
    static extractVersionMetadata(data: unknown): Result<VersionInfo | null, VersionError> {
        try {
            if (typeof data === 'object' && data !== null && this.VERSION_KEY in data) {
                const metadata = (data as Record<string, unknown>)[this.VERSION_KEY];
                if (this.isValidVersionInfo(metadata)) {
                    return ok(metadata);
                }
            }
            return ok(null);
        } catch (error) {
            const versionError = error instanceof VersionError ? error : new VersionError(
                `Failed to extract version metadata: ${String(error)}`,
                MigrationErrorCode.INVALID_VERSION,
                undefined,
                undefined,
                error instanceof Error ? error : new Error(String(error))
            );
            return err(versionError);
        }
    }

    /**
     * Check if object is valid VersionInfo
     */
    private static isValidVersionInfo(obj: unknown): obj is VersionInfo {
        return (
            typeof obj === 'object' &&
            obj !== null &&
            'version' in obj &&
            'timestamp' in obj &&
            typeof (obj as VersionInfo).version === 'number' &&
            typeof (obj as VersionInfo).timestamp === 'number'
        );
    }

    /**
     * Determine migration path from current to target version
     */
    static determineMigrationPath(currentVersion: number, targetVersion: number): Result<number[], VersionError> {
        try {
            const currentValidation = this.validateVersion(currentVersion);
            if (currentValidation.isErr()) {
                throw currentValidation.error;
            }

            const targetValidation = this.validateVersion(targetVersion);
            if (targetValidation.isErr()) {
                throw targetValidation.error;
            }

            if (currentVersion === targetVersion) {
                return ok([]);
            }

            const path: number[] = [];
            const step = currentVersion < targetVersion ? 1 : -1;

            for (let version = currentVersion; version !== targetVersion; version += step) {
                path.push(version + step);
            }

            return ok(path);
        } catch (error) {
            const versionError = error instanceof VersionError ? error : new VersionError(
                `Failed to determine migration path: ${String(error)}`,
                MigrationErrorCode.INVALID_VERSION,
                currentVersion,
                targetVersion,
                error instanceof Error ? error : new Error(String(error))
            );
            return err(versionError);
        }
    }

    /**
     * Check if migration is needed
     */
    static isMigrationNeeded(data: unknown): Result<boolean, VersionError> {
        return this.extractVersion(data).map(version => version !== this.CURRENT_VERSION);
    }
}
