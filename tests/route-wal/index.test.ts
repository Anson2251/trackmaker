import { describe, it, expect } from 'vitest';
import {
    WriteAheadLogManager,
    WriteAheadLogManagerInstance,
    MergeProcessor,
    MergeProcessorInstance,
    CombinedRouteReader,
    CombinedRouteReaderInstance,
    CrashRecoveryManager,
    CrashRecoveryManagerInstance,
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
} from '../../src/libs/route-wal';

describe('route-wal/index', () => {
    describe('exports', () => {
        it('should export WriteAheadLogManager', () => {
            expect(WriteAheadLogManager).toBeDefined();
        });

        it('should export WriteAheadLogManagerInstance', () => {
            expect(WriteAheadLogManagerInstance).toBeDefined();
            expect(WriteAheadLogManagerInstance).toBeInstanceOf(WriteAheadLogManager);
        });

        it('should export MergeProcessor', () => {
            expect(MergeProcessor).toBeDefined();
        });

        it('should export MergeProcessorInstance', () => {
            expect(MergeProcessorInstance).toBeDefined();
            expect(MergeProcessorInstance).toBeInstanceOf(MergeProcessor);
        });

        it('should export CombinedRouteReader', () => {
            expect(CombinedRouteReader).toBeDefined();
        });

        it('should export CombinedRouteReaderInstance', () => {
            expect(CombinedRouteReaderInstance).toBeDefined();
            expect(CombinedRouteReaderInstance).toBeInstanceOf(CombinedRouteReader);
        });

        it('should export CrashRecoveryManager', () => {
            expect(CrashRecoveryManager).toBeDefined();
        });

        it('should export CrashRecoveryManagerInstance', () => {
            expect(CrashRecoveryManagerInstance).toBeDefined();
            expect(CrashRecoveryManagerInstance).toBeInstanceOf(CrashRecoveryManager);
        });

        it('should export schemas', () => {
            expect(RouteLogEntrySchema).toBeDefined();
            expect(RouteLogMetadataSchema).toBeDefined();
            expect(MergeBatchSchema).toBeDefined();
            expect(WALMetricsSchema).toBeDefined();
            expect(WALGlobalStateSchema).toBeDefined();
        });

        it('should export constants', () => {
            expect(WAL_CONSTANTS).toBeDefined();
            expect(WAL_CONSTANTS.FLUSH_THRESHOLD).toBe(10);
            expect(WAL_CONSTANTS.FLUSH_DELAY_MS).toBe(100);
        });

        it('should export helper functions', () => {
            expect(createRouteLogEntry).toBeDefined();
            expect(validateRouteLogEntry).toBeDefined();
            expect(validateRouteLogMetadata).toBeDefined();
            expect(validateMergeBatch).toBeDefined();
        });

        it('should export types', () => {
            expect(RouteLogEntrySchema).toBeDefined();
            expect(RouteLogMetadataSchema).toBeDefined();
            expect(MergeBatchSchema).toBeDefined();
            expect(WALMetricsSchema).toBeDefined();
            expect(WALGlobalStateSchema).toBeDefined();
        });
    });
});
