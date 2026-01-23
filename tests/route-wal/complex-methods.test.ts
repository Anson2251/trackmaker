// oxlint-disable typescript/no-unsafe-member-access
// oxlint-disable typescript/no-unsafe-call
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { WriteAheadLogManager, resetWriteAheadLogManager } from '../../src/libs/route-wal/write-ahead-log-manager';
import type { GeographicPoint } from '../../src/libs/geolocation/types';
import type { RouteLogEntry, RouteLogMetadata } from '../../src/libs/route-wal/types';

// Mock storage
const storageGetMock = vi.fn().mockResolvedValue(null);
const storageSetMock = vi.fn().mockResolvedValue(undefined);

vi.mock('../../src/libs/storage', () => ({
    // oxlint-disable-next-line typescript/no-unsafe-return
    storageGet: (...args: unknown[]) => storageGetMock(...args),
    // oxlint-disable-next-line typescript/no-unsafe-return
    storageSet: (...args: unknown[]) => storageSetMock(...args)
}));

describe('route-wal/complex-methods', () => {
    let manager: WriteAheadLogManager;

    beforeEach(async () => {
        vi.clearAllMocks();
        storageGetMock.mockResolvedValue(null);
        storageSetMock.mockResolvedValue(undefined);
        await resetWriteAheadLogManager();
        manager = new WriteAheadLogManager();
    });

    afterEach(async () => {
        await resetWriteAheadLogManager();
    });

    describe('doFlush internal method', () => {
        it('should flush entries to storage and update metadata', async () => {
            const routeId = 'doflush-route';
            const points: GeographicPoint[] = [
                { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
            ];

            // Setup initial metadata
            const initialMetadata: RouteLogMetadata = {
                routeId,
                lastMergeTime: Date.now(),
                unmergedCount: 0,
                lastSequence: 0,
                totalPoints: 0
            };

            storageGetMock.mockImplementation(async (key: string) => {
                if (key === `route:${routeId}:metadata`) {
                    return initialMetadata;
                }
                if (key === `route:${routeId}:log`) {
                    return [];
                }
                if (key === 'wal:activeRoutes') {
                    return [];
                }
                return null;
            });

            const setCalls: Array<{ key: string; value: unknown }> = [];
            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                setCalls.push({ key, value });
                return Promise.resolve();
            });

            // Add points to buffer (bypass validation for test)
            await manager.appendPoint(routeId, points[0]);
            await manager.appendPoint(routeId, points[1]);

            // Manually trigger doFlush via flushBuffer
            await manager.flushBuffer(routeId);

            // Verify storage calls
            expect(setCalls.length).toBeGreaterThan(0);

            // Should have set log with 2 entries
            const logCall = setCalls.find(c => c.key === `route:${routeId}:log`);
            expect(logCall).toBeDefined();
            const logEntries = logCall?.value as RouteLogEntry[];
            expect(logEntries.length).toBe(2);

            // Should have updated metadata
            const metadataCall = setCalls.find(c => c.key === `route:${routeId}:metadata`);
            expect(metadataCall).toBeDefined();
            const updatedMetadata = metadataCall?.value as RouteLogMetadata;
            expect(updatedMetadata.unmergedCount).toBe(2);
            expect(updatedMetadata.totalPoints).toBe(2);
            expect(updatedMetadata.lastSequence).toBe(1);

            // Should have marked route as active
            const activeRoutesCall = setCalls.find(c => c.key === 'wal:activeRoutes');
            expect(activeRoutesCall).toBeDefined();
            const activeRoutes = activeRoutesCall?.value as string[];
            expect(activeRoutes).toContain(routeId);
        });

        it('should handle metadata update failure gracefully', async () => {
            const routeId = 'metadata-fail-route';

            storageGetMock.mockImplementation(async (key: string) => {
                if (key === `route:${routeId}:metadata`) {
                    return {
                        routeId,
                        lastMergeTime: Date.now(),
                        unmergedCount: 0,
                        lastSequence: 0,
                        totalPoints: 0
                    };
                }
                if (key === `route:${routeId}:log`) {
                    return [];
                }
                return null;
            });

            // Make metadata update fail but log update succeed
            let metadataCallCount = 0;
            storageSetMock.mockImplementation(async (key: string, _value: unknown) => {
                if (key === `route:${routeId}:metadata`) {
                    metadataCallCount++;
                    throw new Error('Metadata storage failed');
                }
                return Promise.resolve();
            });

            // Add point
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;
            await manager.appendPoint(routeId, point);

            // Force flush (should not throw despite metadata failure)
            await expect(manager.flushBuffer(routeId)).resolves.not.toThrow();

            // Should have attempted metadata update
            expect(metadataCallCount).toBe(1);

            // Recovery events should be tracked
            const metrics = manager.getMetrics();
            expect(metrics.recoveryEvents).toBeGreaterThan(0);
        });

        it('should restore entries to buffer on storage failure', async () => {
            const routeId = 'storage-fail-restore-route';

            storageGetMock.mockImplementation(async (key: string) => {
                if (key === `route:${routeId}:metadata`) {
                    return {
                        routeId,
                        lastMergeTime: Date.now(),
                        unmergedCount: 0,
                        lastSequence: 0,
                        totalPoints: 0
                    };
                }
                if (key === `route:${routeId}:log`) {
                    return [];
                }
                return null;
            });

            // Make storageSet fail
            storageSetMock.mockRejectedValue(new Error('Storage unavailable'));

            // Add points
            const points: GeographicPoint[] = [
                { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
            ];

            await manager.appendPoint(routeId, points[0]);
            await manager.appendPoint(routeId, points[1]);

            // Flush should fail
            await expect(manager.flushBuffer(routeId)).rejects.toThrow();

            // Points should be restored to buffer
            expect(manager.getBufferSize(routeId)).toBe(2);
        });
    });

    describe('scheduleMergeWithRetry', () => {
        it('should retry with exponential backoff', async () => {
            const routeId = 'retry-test-route';

            vi.useFakeTimers();

            // Mock merge processor
            const mockMergeProcessor = {
                scheduleMerge: vi.fn()
            };


            Object.defineProperty(manager, 'mergeProcessor', {
                get: vi.fn()
                    .mockReturnValueOnce(null) // First attempt: not available
                    .mockReturnValueOnce(null) // Second: not available
                    .mockReturnValueOnce(null) // Third: not available
                    .mockReturnValue(mockMergeProcessor), // Fourth and subsequent: available
                configurable: true
            });

            // Spy on setTimeout
            const setTimeoutSpy = vi.spyOn(global, 'setTimeout');

            // Trigger scheduleMergeWithRetry
            (manager as any).scheduleMergeWithRetry(routeId, 0);

            // Check retry delays
            expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
            expect(setTimeoutSpy.mock.calls[0][1]).toBe(1000); // First retry: 1000ms

            // Fast-forward first retry
            vi.advanceTimersByTime(1000);
            expect(setTimeoutSpy).toHaveBeenCalledTimes(2);
            expect(setTimeoutSpy.mock.calls[1][1]).toBe(2000); // Second retry: 2000ms

            // Fast-forward second retry
            vi.advanceTimersByTime(2000);
            expect(setTimeoutSpy).toHaveBeenCalledTimes(3);
            expect(setTimeoutSpy.mock.calls[2][1]).toBe(4000); // Third retry: 4000ms

            // Fast-forward third retry (should succeed)
            vi.advanceTimersByTime(4000);
            expect(mockMergeProcessor.scheduleMerge).toHaveBeenCalledWith(routeId);

            vi.useRealTimers();
        });

        it('should stop retrying after max attempts', async () => {
            const routeId = 'max-retry-test-route';

            vi.useFakeTimers();

            // Mock merge processor to never be available
            Object.defineProperty(manager, 'mergeProcessor', {
                get: vi.fn().mockReturnValue(null),
                configurable: true
            });

            // Spy on console.error
            const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

            // Trigger scheduleMergeWithRetry
            (manager as any).scheduleMergeWithRetry(routeId, 0);

            // Fast-forward through all retries (1000 + 2000 + 4000 = 7000ms)
            vi.advanceTimersByTime(7000);

            // Should have logged error
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                expect.stringContaining(`Failed to schedule merge for route ${routeId} after 3 attempts`)
            );

            // Should track failed merge in metrics
            const metrics = manager.getMetrics();
            expect(metrics.failedMerges).toBe(1);

            vi.useRealTimers();
            consoleErrorSpy.mockRestore();
        });
    });

    describe('getUnmergedEntries', () => {
        it('should return only unmerged entries', async () => {
            const routeId = 'unmerged-entries-route';

            const mockLog: RouteLogEntry[] = [
                {
                    id: '00000000-0000-0000-0000-000000000001',
                    routeId,
                    point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                    timestamp: Date.now(),
                    sequence: 0,
                    merged: true
                },
                {
                    id: '00000000-0000-0000-0000-000000000002',
                    routeId,
                    point: { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
                    timestamp: Date.now() + 1,
                    sequence: 1,
                    merged: false
                },
                {
                    id: '00000000-0000-0000-0000-000000000003',
                    routeId,
                    point: { latitude: 37.7751, longitude: -122.4196 } as GeographicPoint,
                    timestamp: Date.now() + 2,
                    sequence: 2,
                    merged: false
                }
            ];

            storageGetMock.mockResolvedValue(mockLog);

            const unmergedEntries = await manager.getUnmergedEntries(routeId);

            expect(unmergedEntries.length).toBe(2);
            expect(unmergedEntries[0].id).toBe('00000000-0000-0000-0000-000000000002');
            expect(unmergedEntries[1].id).toBe('00000000-0000-0000-0000-000000000003');
            expect(unmergedEntries.every(e => !e.merged)).toBe(true);
        });

        it('should return empty array when all entries are merged', async () => {
            const routeId = 'all-merged-route';

            const mockLog: RouteLogEntry[] = [
                {
                    id: 'entry-1',
                    routeId,
                    point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                    timestamp: Date.now(),
                    sequence: 0,
                    merged: true
                },
                {
                    id: '00000000-0000-0000-0000-000000000002',
                    routeId,
                    point: { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
                    timestamp: Date.now() + 1,
                    sequence: 1,
                    merged: true
                }
            ];

            storageGetMock.mockResolvedValue(mockLog);

            const unmergedEntries = await manager.getUnmergedEntries(routeId);

            expect(unmergedEntries.length).toBe(0);
        });
    });

    describe('markEntriesAsMerged', () => {
        it('should mark specific entries as merged', async () => {
            const routeId = 'mark-merged-route';
            const entriesToMark: RouteLogEntry[] = [
                {
                    id: '00000000-0000-0000-0000-000000000001',
                    routeId,
                    point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                    timestamp: Date.now(),
                    sequence: 0,
                    merged: false
                },
                {
                    id: '00000000-0000-0000-0000-000000000003',
                    routeId,
                    point: { latitude: 37.7751, longitude: -122.4196 } as GeographicPoint,
                    timestamp: Date.now() + 2,
                    sequence: 2,
                    merged: false
                }
            ];

            const initialLog: RouteLogEntry[] = [
                entriesToMark[0],
                {
                    id: '00000000-0000-0000-0000-000000000002',
                    routeId,
                    point: { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
                    timestamp: Date.now() + 1,
                    sequence: 1,
                    merged: false
                },
                entriesToMark[1]
            ];

             let currentLog = [...initialLog];

             storageGetMock.mockImplementation(async (key: string) => {
                 if (key === `route:${routeId}:log`) {
                     return currentLog;
                 }
                 if (key === `route:${routeId}:metadata`) {
                     return {
                         routeId,
                         lastMergeTime: Date.now() - 10000,
                         unmergedCount: 3,
                         lastSequence: 2,
                         totalPoints: 3
                     };
                 }
                 return null;
             });

             storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                 if (key === `route:${routeId}:log`) {
                     currentLog = value as RouteLogEntry[];
                 }
                 return Promise.resolve();
             });

            await manager.markEntriesAsMerged(routeId, entriesToMark);

            // Verify entries are marked as merged
            expect(currentLog[0].merged).toBe(true);
            expect(currentLog[1].merged).toBe(false);
            expect(currentLog[2].merged).toBe(true);

            // Verify metadata was updated
            expect(storageSetMock).toHaveBeenCalledWith(
                `route:${routeId}:metadata`,
                expect.objectContaining({
                    unmergedCount: 1, // Only entry-2 remains unmerged
                    lastMergeTime: expect.any(Number)
                })
            );
        });

        it('should handle empty entries array', async () => {
            const routeId = 'empty-entries-route';

            await expect(manager.markEntriesAsMerged(routeId, [])).resolves.not.toThrow();

            // Should not call storage
            expect(storageSetMock).not.toHaveBeenCalled();
        });
    });

    describe('cleanupMergedEntries', () => {
        it('should remove merged entries from log', async () => {
            const routeId = 'cleanup-merged-route';

            const initialLog: RouteLogEntry[] = [
                {
                    id: '00000000-0000-0000-0000-000000000001',
                    routeId,
                    point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                    timestamp: Date.now(),
                    sequence: 0,
                    merged: true
                },
                {
                    id: '00000000-0000-0000-0000-000000000002',
                    routeId,
                    point: { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
                    timestamp: Date.now() + 1,
                    sequence: 1,
                    merged: false
                },
                {
                    id: '00000000-0000-0000-0000-000000000003',
                    routeId,
                    point: { latitude: 37.7751, longitude: -122.4196 } as GeographicPoint,
                    timestamp: Date.now() + 2,
                    sequence: 2,
                    merged: false
                }
            ];

            let currentLog = [...initialLog];

            storageGetMock.mockImplementation(async (key: string) => {
                if (key === `route:${routeId}:log`) {
                    return currentLog;
                }
                if (key === `route:${routeId}:metadata`) {
                    return {
                        routeId,
                        lastMergeTime: Date.now(),
                        unmergedCount: 2,
                        lastSequence: 2,
                        totalPoints: 3
                    };
                }
                return null;
            });

            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                if (key === `route:${routeId}:log`) {
                    currentLog = value as RouteLogEntry[];
                }
                return Promise.resolve();
            });

            await manager.cleanupMergedEntries(routeId);

            // Should only have unmerged entries
            expect(currentLog.length).toBe(2);
            expect(currentLog[0].id).toBe('00000000-0000-0000-0000-000000000002');
            expect(currentLog[0].merged).toBe(false);
            expect(currentLog[1].id).toBe('00000000-0000-0000-0000-000000000003');
            expect(currentLog[1].merged).toBe(false);

            // Should update metadata
            expect(storageSetMock).toHaveBeenCalledWith(
                `route:${routeId}:metadata`,
                expect.objectContaining({
                    unmergedCount: 2
                })
            );
        });

        it('should do nothing when no merged entries', async () => {
            const routeId = 'no-merged-entries-route';

            const initialLog: RouteLogEntry[] = [
                {
                    id: '00000000-0000-0000-0000-000000000001',
                    routeId,
                    point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                    timestamp: Date.now(),
                    sequence: 0,
                    merged: false
                }
            ];

            storageGetMock.mockResolvedValue(initialLog);

            await manager.cleanupMergedEntries(routeId);

            // Should not call storageSet (no changes needed)
            expect(storageSetMock).not.toHaveBeenCalledWith(
                `route:${routeId}:log`,
                expect.anything()
            );
        });
    });

    describe('cleanupRoute', () => {
        it('should remove all route state', async () => {
            const routeId = 'cleanup-route';

            // Setup initial state
            storageGetMock.mockImplementation(async (key: string) => {
                if (key === 'wal:activeRoutes') {
                    return [routeId, 'other-route'];
                }
                return null;
            });

            const setCalls: Array<{ key: string; value: unknown }> = [];
            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                setCalls.push({ key, value });
                return Promise.resolve();
            });

            // Add point to create buffer state
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;
            await manager.appendPoint(routeId, point);

            // Cleanup route
            await manager.cleanupRoute(routeId);

            // Should remove from active routes
            const activeRoutesCall = setCalls.find(c => c.key === 'wal:activeRoutes');
            expect(activeRoutesCall).toBeDefined();
            const activeRoutes = activeRoutesCall?.value as string[];
            expect(activeRoutes).not.toContain(routeId);
            expect(activeRoutes).toContain('other-route');

            // Buffer should be cleared
            expect(manager.getBufferSize(routeId)).toBe(0);

            // Sequence cache should be cleared
            // (Cannot directly test private cache, but cleanup should succeed)
        });
    });

    describe('sequence management', () => {
        it('should handle concurrent sequence initialization', async () => {
            const routeId = 'sequence-race-route';

            // Simulate slow metadata fetch
            let metadataFetchCount = 0;
            storageGetMock.mockImplementation(async (key: string) => {
                if (key === `route:${routeId}:metadata`) {
                    metadataFetchCount++;
                    await new Promise(resolve => setTimeout(resolve, 10));
                    return {
                        routeId,
                        lastMergeTime: Date.now(),
                        unmergedCount: 0,
                        lastSequence: 100, // Start from 100
                        totalPoints: 0
                    };
                }
                return null;
            });

            // Multiple concurrent appends
            const appendPromises = Array.from({ length: 5 }, (_, i) => {
                const point: GeographicPoint = {
                    latitude: 37.7749 + i * 0.001,
                    longitude: -122.4194 + i * 0.001
                } as GeographicPoint;
                return manager.appendPoint(routeId, point);
            });

            await Promise.all(appendPromises);

            // Should only fetch metadata once (deduplication)
            expect(metadataFetchCount).toBe(1);

            // All appends should succeed with sequential sequence numbers
            // (Cannot directly verify sequences, but no errors should occur)
        });

        it('should recover from failed sequence initialization', async () => {
            const routeId = 'sequence-fail-route';

            // First metadata fetch fails
            let metadataCallCount = 0;
            storageGetMock.mockImplementation(async (key: string) => {
                if (key === `route:${routeId}:metadata`) {
                    metadataCallCount++;
                    if (metadataCallCount === 1) {
                        throw new Error('Metadata fetch failed');
                    }
                    return {
                        routeId,
                        lastMergeTime: Date.now(),
                        unmergedCount: 0,
                        lastSequence: 50,
                        totalPoints: 0
                    };
                }
                return null;
            });

            // First append should fail
            const point1: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;
            await expect(manager.appendPoint(routeId, point1)).rejects.toThrow();

            // Second append should retry initialization and succeed
            const point2: GeographicPoint = { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint;
            await expect(manager.appendPoint(routeId, point2)).resolves.not.toThrow();
        });
    });
});
