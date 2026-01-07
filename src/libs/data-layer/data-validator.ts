import { Result, ok, err } from 'neverthrow';
import { MigrationValidationError, DataCorruptionError } from './errors';
import type { GeographicSketchType, GeographicRouteType, GeographicRouteItemType } from '../cartosketch/definitions';

/**
 * Validation result with detailed error information
 */
export interface ValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}

/**
 * Data validator for ensuring data integrity during migrations
 */
export class DataValidator {
    /**
     * Validate sketch data format
     */
    static validateSketchData(data: unknown): Result<GeographicSketchType, MigrationValidationError> {
        try {
            if (!data || typeof data !== 'object') {
                throw new MigrationValidationError(
                    'Sketch data must be an object',
                    'data',
                    data
                );
            }

            const sketchData = data as Record<string, unknown>;

            // Required fields validation
            const requiredFields = ['id', 'meta', 'routes', 'drafts'];
            for (const field of requiredFields) {
                if (!(field in sketchData)) {
                    throw new MigrationValidationError(
                        `Missing required field: ${field}`,
                        field,
                        sketchData[field]
                    );
                }
            }

            // Validate ID
            if (typeof sketchData.id !== 'string' || !sketchData.id) {
                throw new MigrationValidationError(
                    'Sketch ID must be a non-empty string',
                    'id',
                    sketchData.id
                );
            }

            // Validate meta (basic check)
            if (!sketchData.meta || typeof sketchData.meta !== 'object') {
                throw new MigrationValidationError(
                    'Sketch meta must be an object',
                    'meta',
                    sketchData.meta
                );
            }

            // Validate routes
            const routesValidation = this.validateRouteCollectionData(sketchData.routes);
            if (routesValidation.isErr()) {
                throw routesValidation.error;
            }

            // Validate drafts (basic check)
            if (!sketchData.drafts || typeof sketchData.drafts !== 'object') {
                throw new MigrationValidationError(
                    'Sketch drafts must be an object',
                    'drafts',
                    sketchData.drafts
                );
            }

            return ok(sketchData as GeographicSketchType);
        } catch (validationError) {
            if (validationError instanceof MigrationValidationError) {
                return err(validationError);
            }

            const error = new MigrationValidationError(
                `Unexpected validation error: ${String(validationError)}`,
                undefined,
                data,
                validationError instanceof Error ? validationError : new Error(String(validationError))
            );
            return err(error);
        }
    }

    /**
     * Validate route collection data format
     */
    static validateRouteCollectionData(data: unknown): Result<GeographicRouteType, MigrationValidationError> {
        try {
            if (!data || typeof data !== 'object') {
                throw new MigrationValidationError(
                    'Route collection data must be an object',
                    'data',
                    data
                );
            }

            const routeData = data as Record<string, unknown>;

            // Required fields validation
            const requiredFields = ['id', 'meta', 'routes'];
            for (const field of requiredFields) {
                if (!(field in routeData)) {
                    throw new MigrationValidationError(
                        `Missing required field: ${field}`,
                        field,
                        routeData[field]
                    );
                }
            }

            // Validate ID
            if (typeof routeData.id !== 'string' || !routeData.id) {
                throw new MigrationValidationError(
                    'Route collection ID must be a non-empty string',
                    'id',
                    routeData.id
                );
            }

            // Validate meta (basic check)
            if (!routeData.meta || typeof routeData.meta !== 'object') {
                throw new MigrationValidationError(
                    'Route collection meta must be an object',
                    'meta',
                    routeData.meta
                );
            }

            // Validate routes array
            if (!Array.isArray(routeData.routes)) {
                throw new MigrationValidationError(
                    'Routes must be an array',
                    'routes',
                    routeData.routes
                );
            }

            // Validate each route
            for (let i = 0; i < routeData.routes.length; i++) {
                const route = routeData.routes[i];
                const routeValidation = this.validateRouteItem(route);
                if (routeValidation.isErr()) {
                    throw new MigrationValidationError(
                        `Invalid route at index ${i}: ${routeValidation.error.message}`,
                        `routes[${i}]`,
                        route,
                        routeValidation.error
                    );
                }
            }

            return ok(routeData as GeographicRouteType);
        } catch (validationError) {
            if (validationError instanceof MigrationValidationError) {
                return err(validationError);
            }

            const error = new MigrationValidationError(
                `Unexpected validation error: ${String(validationError)}`,
                undefined,
                data,
                validationError instanceof Error ? validationError : new Error(String(validationError))
            );
            return err(error);
        }
    }

    /**
     * Validate individual route item
     */
    static validateRouteItem(data: unknown): Result<GeographicRouteItemType, MigrationValidationError> {
        try {
            if (!data || typeof data !== 'object') {
                throw new MigrationValidationError(
                    'Route item must be an object',
                    'data',
                    data
                );
            }

            const routeItem = data as Record<string, unknown>;

            // Required fields validation
            const requiredFields = ['id', 'meta', 'properties', 'points'];
            for (const field of requiredFields) {
                if (!(field in routeItem)) {
                    throw new MigrationValidationError(
                        `Missing required field: ${field}`,
                        field,
                        routeItem[field]
                    );
                }
            }

            // Validate ID
            if (typeof routeItem.id !== 'string' || !routeItem.id) {
                throw new MigrationValidationError(
                    'Route item ID must be a non-empty string',
                    'id',
                    routeItem.id
                );
            }

            // Validate points array
            if (!Array.isArray(routeItem.points)) {
                throw new MigrationValidationError(
                    'Route points must be an array',
                    'points',
                    routeItem.points
                );
            }

            // Validate each point has latitude and longitude
            for (let i = 0; i < routeItem.points.length; i++) {
                const point = routeItem.points[i];
                if (!point || typeof point !== 'object') {
                    throw new MigrationValidationError(
                        `Route point at index ${i} must be an object`,
                        `points[${i}]`,
                        point
                    );
                }

                const pointObj = point as Record<string, unknown>;
                if (typeof pointObj.latitude !== 'number' || typeof pointObj.longitude !== 'number') {
                    throw new MigrationValidationError(
                        `Route point at index ${i} must have numeric latitude and longitude`,
                        `points[${i}]`,
                        point
                    );
                }
            }

            return ok(routeItem as GeographicRouteItemType);
        } catch (validationError) {
            if (validationError instanceof MigrationValidationError) {
                return err(validationError);
            }

            const error = new MigrationValidationError(
                `Unexpected validation error: ${String(validationError)}`,
                undefined,
                data,
                validationError instanceof Error ? validationError : new Error(String(validationError))
            );
            return err(error);
        }
    }

    /**
     * Validate sketch array format
     */
    static validateSketchArray(data: unknown): Result<GeographicSketchType[], MigrationValidationError> {
        try {
            if (!Array.isArray(data)) {
                throw new MigrationValidationError(
                    'Sketch array must be an array',
                    'data',
                    data
                );
            }

            if (data.length === 0) {
                throw new MigrationValidationError(
                    'Sketch array cannot be empty',
                    'data.length',
                    data.length
                );
            }

            // Validate each sketch
            for (let i = 0; i < data.length; i++) {
                const sketch = data[i];
                const sketchValidation = this.validateSketchData(sketch);
                if (sketchValidation.isErr()) {
                    throw new MigrationValidationError(
                        `Invalid sketch at index ${i}: ${sketchValidation.error.message}`,
                        `[${i}]`,
                        sketch,
                        sketchValidation.error
                    );
                }
            }

            return ok(data as GeographicSketchType[]);
        } catch (validationError) {
            if (validationError instanceof MigrationValidationError) {
                return err(validationError);
            }

            const error = new MigrationValidationError(
                `Unexpected validation error: ${String(validationError)}`,
                undefined,
                data,
                validationError instanceof Error ? validationError : new Error(String(validationError))
            );
            return err(error);
        }
    }

    /**
     * Comprehensive data validation
     */
    static validateData(data: unknown, expectedFormat: 'sketch' | 'route-collection' | 'sketch-array'): Result<unknown, MigrationValidationError> {
        switch (expectedFormat) {
            case 'sketch':
                return this.validateSketchData(data);
            case 'route-collection':
                return this.validateRouteCollectionData(data);
            case 'sketch-array':
                return this.validateSketchArray(data);
            default:
                return err(new MigrationValidationError(
                    `Unknown expected format: ${String(expectedFormat)}`,
                    'expectedFormat',
                    expectedFormat
                ));
        }
    }

    /**
     * Check data integrity by validating format and detecting corruption
     */
    static checkDataIntegrity(data: unknown, expectedFormat: 'sketch' | 'route-collection' | 'sketch-array'): Result<ValidationResult, DataCorruptionError> {
        try {
            const validationResult = this.validateData(data, expectedFormat);

            if (validationResult.isErr()) {
                return err(new DataCorruptionError(
                    `Data validation failed: ${validationResult.error.message}`,
                    data,
                    validationResult.error
                ));
            }

            // Additional integrity checks can be added here
            const result: ValidationResult = {
                isValid: true,
                errors: [],
                warnings: []
            };

            return ok(result);
        } catch (error) {
            return err(new DataCorruptionError(
                `Data integrity check failed: ${String(error)}`,
                data,
                error instanceof Error ? error : new Error(String(error))
            ));
        }
    }
}
