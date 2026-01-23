import { describe, it, expect } from 'vitest';
import {
    RouteLogEntrySchema,
    RouteLogMetadataSchema,
    MergeBatchSchema,
    WALMetricsSchema,
    WALGlobalStateSchema,
    WAL_CONSTANTS,
    createRouteLogEntry,
    validateRouteLogEntry,
    validateRouteLogMetadata,
    validateMergeBatch
} from '../../src/libs/route-wal/types';
import type { GeographicPoint } from '../../src/libs/geolocation/types';

describe('route-wal/types', () => {
    describe('RouteLogEntrySchema', () => {
        it('should validate a valid route log entry', () => {
            const validEntry = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                timestamp: Date.now(),
                sequence: 0,
                merged: false
            };
            expect(() => RouteLogEntrySchema.parse(validEntry)).not.toThrow();
        });

        it('should reject entry with invalid UUID format', () => {
            const invalidEntry = {
                id: 'invalid-uuid',
                routeId: 'route-123',
                point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                timestamp: Date.now(),
                sequence: 0,
                merged: false
            };
            expect(() => RouteLogEntrySchema.parse(invalidEntry)).toThrow();
        });

        it('should reject entry with missing latitude', () => {
            const invalidEntry = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                point: { longitude: -122.4194 } as GeographicPoint,
                timestamp: Date.now(),
                sequence: 0,
                merged: false
            };
            expect(() => RouteLogEntrySchema.parse(invalidEntry)).toThrow();
        });

        it('should reject entry with negative timestamp', () => {
            const invalidEntry = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                timestamp: -1,
                sequence: 0,
                merged: false
            };
            expect(() => RouteLogEntrySchema.parse(invalidEntry)).toThrow();
        });

        it('should reject entry with negative sequence', () => {
            const invalidEntry = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                timestamp: Date.now(),
                sequence: -1,
                merged: false
            };
            expect(() => RouteLogEntrySchema.parse(invalidEntry)).toThrow();
        });
    });

    describe('RouteLogMetadataSchema', () => {
        it('should validate a valid metadata object', () => {
            const validMetadata = {
                routeId: 'route-123',
                lastMergeTime: Date.now(),
                unmergedCount: 5,
                lastSequence: 10,
                totalPoints: 15
            };
            expect(() => RouteLogMetadataSchema.parse(validMetadata)).not.toThrow();
        });

        it('should reject metadata with negative unmergedCount', () => {
            const invalidMetadata = {
                routeId: 'route-123',
                lastMergeTime: Date.now(),
                unmergedCount: -1,
                lastSequence: 10,
                totalPoints: 15
            };
            expect(() => RouteLogMetadataSchema.parse(invalidMetadata)).toThrow();
        });
    });

    describe('MergeBatchSchema', () => {
        it('should validate a valid merge batch', () => {
            const validBatch = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                startSequence: 0,
                endSequence: 9,
                pointCount: 10,
                distanceAdded: 1000,
                mergeTime: Date.now(),
                status: 'pending' as const
            };
            expect(() => MergeBatchSchema.parse(validBatch)).not.toThrow();
        });

        it('should validate a completed merge batch', () => {
            const validBatch = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                startSequence: 0,
                endSequence: 9,
                pointCount: 10,
                distanceAdded: 1000,
                mergeTime: Date.now(),
                status: 'completed' as const
            };
            expect(() => MergeBatchSchema.parse(validBatch)).not.toThrow();
        });

        it('should reject batch with invalid status', () => {
            const invalidBatch = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                startSequence: 0,
                endSequence: 9,
                pointCount: 10,
                distanceAdded: 1000,
                mergeTime: Date.now(),
                status: 'invalid' as unknown as 'pending' | 'completed' | 'failed'
            };
            expect(() => MergeBatchSchema.parse(invalidBatch)).toThrow();
        });

        it('should reject batch with zero pointCount', () => {
            const invalidBatch = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                startSequence: 0,
                endSequence: 9,
                pointCount: 0,
                distanceAdded: 1000,
                mergeTime: Date.now(),
                status: 'pending' as const
            };
            expect(() => MergeBatchSchema.parse(invalidBatch)).toThrow();
        });
    });

    describe('WALMetricsSchema', () => {
        it('should validate valid metrics', () => {
            const validMetrics = {
                appendLatency: [10, 20, 30],
                mergeDuration: [100, 200],
                logSizePerRoute: { 'route-1': 50, 'route-2': 75 },
                failedAppends: 0,
                failedMerges: 0,
                recoveryEvents: 1,
                mergeFrequency: 0.5,
                compressionRatio: 0.8,
                memoryUsage: 1024
            };
            expect(() => WALMetricsSchema.parse(validMetrics)).not.toThrow();
        });
    });

    describe('WALGlobalStateSchema', () => {
        it('should validate valid global state', () => {
            const validState = {
                initialized: true,
                version: 1,
                lastMergeTime: Date.now(),
                activeRoutes: ['route-1', 'route-2'],
                statistics: {
                    writesPerSecond: 10.5,
                    averageLogSize: 100,
                    mergeDuration: 500
                }
            };
            expect(() => WALGlobalStateSchema.parse(validState)).not.toThrow();
        });

        it('should reject uninitialized state with true', () => {
            const invalidState = {
                initialized: 'true' as unknown as boolean,
                version: 1,
                lastMergeTime: Date.now(),
                activeRoutes: [],
                statistics: {
                    writesPerSecond: 0,
                    averageLogSize: 0,
                    mergeDuration: 0
                }
            };
            expect(() => WALGlobalStateSchema.parse(invalidState)).toThrow();
        });
    });

    describe('WAL_CONSTANTS', () => {
        it('should have correct constant values', () => {
            expect(WAL_CONSTANTS.FLUSH_THRESHOLD).toBe(10);
            expect(WAL_CONSTANTS.FLUSH_DELAY_MS).toBe(100);
            expect(WAL_CONSTANTS.MERGE_TIME_INTERVAL_MS).toBe(30000);
            expect(WAL_CONSTANTS.MERGE_SIZE_THRESHOLD).toBe(100);
            expect(WAL_CONSTANTS.MAX_RETRIES).toBe(3);
            expect(WAL_CONSTANTS.RETRY_BASE_DELAY_MS).toBe(1000);
            expect(WAL_CONSTANTS.MAX_LATENCY_SAMPLES).toBe(100);
            expect(WAL_CONSTANTS.MAX_CACHE_SIZE).toBe(100);
        });
    });

    describe('createRouteLogEntry', () => {
        it('should create a valid route log entry', () => {
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;
            const entry = createRouteLogEntry('route-123', point, 0);

            expect(entry.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
            expect(entry.routeId).toBe('route-123');
            expect(entry.point).toEqual(point);
            expect(entry.sequence).toBe(0);
            expect(entry.merged).toBe(false);
            expect(entry.timestamp).toBeDefined();
        });
    });

    describe('validateRouteLogEntry', () => {
        it('should validate and return a valid entry', () => {
            const validEntry = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                timestamp: Date.now(),
                sequence: 5,
                merged: true
            };
            const result = validateRouteLogEntry(validEntry);
            expect(result).toEqual(validEntry);
        });

        it('should throw for invalid entry', () => {
            const invalidEntry = { id: 'invalid' };
            expect(() => validateRouteLogEntry(invalidEntry)).toThrow();
        });
    });

    describe('validateRouteLogMetadata', () => {
        it('should validate and return valid metadata', () => {
            const validMetadata = {
                routeId: 'route-123',
                lastMergeTime: Date.now(),
                unmergedCount: 5,
                lastSequence: 10,
                totalPoints: 15
            };
            const result = validateRouteLogMetadata(validMetadata);
            expect(result).toEqual(validMetadata);
        });
    });

    describe('validateMergeBatch', () => {
        it('should validate and return a valid batch', () => {
            const validBatch = {
                id: '550e8400-e29b-41d4-a716-446655440000',
                routeId: 'route-123',
                startSequence: 0,
                endSequence: 9,
                pointCount: 10,
                distanceAdded: 1000,
                mergeTime: Date.now(),
                status: 'completed' as const
            };
            const result = validateMergeBatch(validBatch);
            expect(result).toEqual(validBatch);
        });
    });
});
