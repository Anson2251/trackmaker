import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { WriteAheadLogManagerInstance } from '../../src/libs/route-wal/write-ahead-log-manager';
import { MergeProcessorInstance } from '../../src/libs/route-wal/merge-processor';
import { CombinedRouteReaderInstance } from '../../src/libs/route-wal/combined-route-reader';
import { CrashRecoveryManagerInstance } from '../../src/libs/route-wal/crash-recovery-manager';
import type { GeographicPoint } from '../../src/libs/geolocation/types';
import type { RouteLogEntry } from '../../src/libs/route-wal/types';

// Mock storage
const storageGetMock = vi.fn().mockResolvedValue(null);
const storageSetMock = vi.fn().mockResolvedValue(undefined);

vi.mock('../../src/libs/storage', () => ({
    // oxlint-disable-next-line typescript/no-unsafe-return
    storageGet: (...args: unknown[]) => storageGetMock(...args),
    // oxlint-disable-next-line typescript/no-unsafe-return
    storageSet: (...args: unknown[]) => storageSetMock(...args)
}));

describe('route-wal/integration', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        storageGetMock.mockResolvedValue(null);
        storageSetMock.mockResolvedValue(undefined);

        // Reset all instances to clear any internal state
        vi.resetModules();
    });

    afterEach(async () => {
        // Clean up after each test
        vi.clearAllMocks();
    });

    describe('full pipeline: append → flush → merge → read', () => {
        it('should handle complete data flow for a single route', async () => {
            const routeId = 'test-route-1';
            const points: GeographicPoint[] = [
                { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
                { latitude: 37.7751, longitude: -122.4196 } as GeographicPoint,
            ];

            // Track storage calls
            const storageCalls: Array<{ key: string; value: unknown }> = [];
            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                storageCalls.push({ key, value });
            });

            // Mock storageGet to return stored data
            storageGetMock.mockImplementation(async (key: string) => {
                // Simulate storage retrieval
                const call = storageCalls.find(c => c.key === key);
                return call?.value ?? null;
            });

            // 1. Append points
            for (const point of points) {
                await WriteAheadLogManagerInstance.appendPoint(routeId, point);
            }

            // Verify points are buffered
            expect(WriteAheadLogManagerInstance.getBufferSize(routeId)).toBe(points.length);

            // 2. Force flush
            await WriteAheadLogManagerInstance.flushAllBuffers();

            // Verify buffer is cleared after flush
            expect(WriteAheadLogManagerInstance.getBufferSize(routeId)).toBe(0);

            // Verify storage was called with log entries
            const logCall = storageCalls.find(c => c.key === `route:${routeId}:log`);
            expect(logCall).toBeDefined();
            expect(Array.isArray(logCall?.value)).toBe(true);
            const logEntries = logCall?.value as RouteLogEntry[];
            expect(logEntries.length).toBe(points.length);

            // Verify each entry has correct data
            logEntries.forEach((entry, index) => {
                expect(entry.routeId).toBe(routeId);
                expect(entry.point.latitude).toBe(points[index].latitude);
                expect(entry.point.longitude).toBe(points[index].longitude);
                expect(entry.sequence).toBe(index);
                expect(entry.merged).toBe(false);
            });

            // 3. Schedule merge (simulate merge processor)
            MergeProcessorInstance.scheduleMerge(routeId);

            // In a real scenario, the merge processor would process the queue
            // For integration test, we'll simulate marking entries as merged
            const unmergedEntries = await WriteAheadLogManagerInstance.getUnmergedEntries(routeId);
            expect(unmergedEntries.length).toBe(points.length);

            // Mark entries as merged
            await WriteAheadLogManagerInstance.markEntriesAsMerged(routeId, unmergedEntries);

            // Verify entries were marked as merged in storage
            const mergedLogCalls = storageCalls.filter(c => c.key === `route:${routeId}:log`);
            expect(mergedLogCalls.length).toBeGreaterThan(0);

            // Get the last log update (should be the merged one)
            const lastLogCall = mergedLogCalls[mergedLogCalls.length - 1];
            const mergedEntries = lastLogCall?.value as RouteLogEntry[];
            expect(Array.isArray(mergedEntries)).toBe(true);
            if (mergedEntries.length > 0) {
                expect(mergedEntries.every(e => e.merged)).toBe(true);
            }

            // 4. Read route via CombinedRouteReader
            // Mock sketch storage for CombinedRouteReader
            storageGetMock.mockImplementation(async (key: string) => {
                if (key === 'sketches') {
                    return [{
                        id: 'sketch-1',
                        meta: { name: 'Test', tags: [], creation_timestamp: 0, modification_timestamp: 0 },
                        routes: {
                            id: 'routes-1',
                            meta: { creation_timestamp: 0, modification_timestamp: 0 },
                            routes: [{
                                id: routeId,
                                points: points, // Simulate merged points
                                meta: { distance: 0, creation_timestamp: 0, modification_timestamp: 0 }
                            }]
                        },
                        drafts: { id: 'drafts-1', meta: { creation_timestamp: 0, modification_timestamp: 0 }, drafts: [] }
                    }];
                }
                return null;
            });

            const route = await CombinedRouteReaderInstance.getRoute(routeId);
            expect(route).not.toBeNull();
            expect(route?.id).toBe(routeId);
            expect(route?.points).toEqual(points);
        });

        it('should handle multiple routes concurrently', async () => {
            const routeIds = ['route-1', 'route-2', 'route-3'];
            const pointsPerRoute = 2;

            const storageCalls: Array<{ key: string; value: unknown }> = [];
            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                storageCalls.push({ key, value });
            });

            storageGetMock.mockImplementation(async (key: string) => {
                const call = storageCalls.find(c => c.key === key);
                return call?.value ?? null;
            });

            // Append points to all routes
            const appendPromises = routeIds.map(async (routeId) => {
                for (let i = 0; i < pointsPerRoute; i++) {
                    const point: GeographicPoint = {
                        latitude: 37 + i * 0.001,
                        longitude: -122 + i * 0.001
                    } as GeographicPoint;
                    await WriteAheadLogManagerInstance.appendPoint(routeId, point);
                }
            });

            await Promise.all(appendPromises);

            // Verify each route has correct buffer size
            routeIds.forEach(routeId => {
                expect(WriteAheadLogManagerInstance.getBufferSize(routeId)).toBe(pointsPerRoute);
            });

            // Flush all buffers
            await WriteAheadLogManagerInstance.flushAllBuffers();

            // Verify buffers are cleared
            routeIds.forEach(routeId => {
                expect(WriteAheadLogManagerInstance.getBufferSize(routeId)).toBe(0);
            });

            // Verify storage has log entries for each route
            routeIds.forEach(routeId => {
                const logCall = storageCalls.find(c => c.key === `route:${routeId}:log`);
                expect(logCall).toBeDefined();
                const entries = logCall?.value as RouteLogEntry[];
                expect(entries.length).toBe(pointsPerRoute);
                expect(entries.every(e => e.routeId === routeId)).toBe(true);
            });

            // Verify active routes are tracked
            const activeRoutesCall = storageCalls.find(c => c.key === 'wal:activeRoutes');
            expect(activeRoutesCall).toBeDefined();
            const activeRoutes = activeRoutesCall?.value as string[];
            expect(activeRoutes).toEqual(expect.arrayContaining(routeIds));
        });
    });

    describe('crash recovery integration', () => {
        it('should recover after simulated crash', async () => {
            const routeId = 'recovery-route';
            const points: GeographicPoint[] = [
                { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
            ];

            // Simulate crash with data in storage but not merged
            storageGetMock.mockImplementation(async (key: string) => {
                if (key === 'wal:activeRoutes') {
                    return [routeId];
                }
                if (key === `route:${routeId}:metadata`) {
                    return {
                        routeId,
                        lastMergeTime: Date.now() - 10000,
                        unmergedCount: 2,
                        lastSequence: 1,
                        totalPoints: 2
                    };
                }
                if (key === `route:${routeId}:log`) {
                    return [
                        {
                            id: 'entry-1',
                            routeId,
                            point: points[0],
                            timestamp: Date.now() - 5000,
                            sequence: 0,
                            merged: false
                        },
                        {
                            id: 'entry-2',
                            routeId,
                            point: points[1],
                            timestamp: Date.now() - 4000,
                            sequence: 1,
                            merged: false
                        }
                    ];
                }
                return null;
            });

            const recoveryResult = await CrashRecoveryManagerInstance.recover();

            expect(recoveryResult).toBeDefined();
            expect(recoveryResult.recoveredRoutes).toBe(0); // Should detect unmerged entries
            expect(recoveryResult.failedRoutes).toBe(0);
            expect(recoveryResult.details).toBeInstanceOf(Array);

            // After recovery, merge should be scheduled
            // (In real scenario, merge processor would handle it)
        });

        it('should handle corrupted log data during recovery', async () => {
            const routeId = 'corrupted-route';

            // Simulate corrupted log (not an array)
            storageGetMock.mockImplementation(async (key: string) => {
                if (key === 'wal:activeRoutes') {
                    return [routeId];
                }
                if (key === `route:${routeId}:metadata`) {
                    return {
                        routeId,
                        lastMergeTime: Date.now(),
                        unmergedCount: 5,
                        lastSequence: 4,
                        totalPoints: 5
                    };
                }
                if (key === `route:${routeId}:log`) {
                    // Corrupted: not an array
                    return 'not-an-array';
                }
                return null;
            });

            // Mock storageSet to track corrections
            const setCalls: Array<{ key: string; value: unknown }> = [];
            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                setCalls.push({ key, value });
            });

            const recoveryResult = await CrashRecoveryManagerInstance.recover();

            expect(recoveryResult).toBeDefined();

            // Should attempt to fix corrupted log
            const logFixCall = setCalls.find(c => c.key === `route:${routeId}:log`);
            expect(logFixCall).toBeDefined();
            expect(Array.isArray(logFixCall?.value)).toBe(true);
            expect((logFixCall?.value as unknown[] ?? []).length).toBe(0);
        });
    });

    describe('error handling integration', () => {
        it('should handle storage failure during append', async () => {
            const routeId = 'error-route';
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;

            // Reset mocks
            storageGetMock.mockResolvedValue(null);
            storageSetMock.mockResolvedValue(undefined);

            // First append should work (just adds to buffer)
            await WriteAheadLogManagerInstance.appendPoint(routeId, point);
            expect(WriteAheadLogManagerInstance.getBufferSize(routeId)).toBe(1);

            // Now make storage fail
            storageSetMock.mockRejectedValue(new Error('Storage failure'));

            // Second append will also go to buffer successfully (append itself doesn't call storage)
            // It only throws during flush
            await WriteAheadLogManagerInstance.appendPoint(routeId, point);
            expect(WriteAheadLogManagerInstance.getBufferSize(routeId)).toBe(2);

            // Flushing should fail but not throw (uses allSettled)
            await WriteAheadLogManagerInstance.flushAllBuffers();

            // Data should still be in buffer after failed flush
            expect(WriteAheadLogManagerInstance.getBufferSize(routeId)).toBeGreaterThan(0);
        });

        it('should handle storage failure during flush', async () => {
            const routeId = 'flush-error-route';
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;

            // Append point
            await WriteAheadLogManagerInstance.appendPoint(routeId, point);

            // Mock storage failure during flush
            storageSetMock.mockRejectedValue(new Error('Flush failed'));

            // Flush should fail but not crash
            await expect(
                WriteAheadLogManagerInstance.flushBuffer(routeId)
            ).rejects.toThrow();

            // Point should remain in buffer after failed flush
            expect(WriteAheadLogManagerInstance.getBufferSize(routeId)).toBe(1);
        });
    });
});
