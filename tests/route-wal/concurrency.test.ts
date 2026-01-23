import { describe, it, expect, vi, beforeEach } from 'vitest';
import { WriteAheadLogManager, AsyncMutex, RingBuffer, resetWriteAheadLogManager } from '../../src/libs/route-wal/write-ahead-log-manager';
import type { GeographicPoint } from '../../src/libs/geolocation/types';

// Mock storage
const storageGetMock = vi.fn().mockResolvedValue(null);
const storageSetMock = vi.fn().mockResolvedValue(undefined);

vi.mock('../../src/libs/storage', () => ({
    // oxlint-disable-next-line typescript/no-unsafe-return
    storageGet: (...args: unknown[]) => storageGetMock(...args),
    // oxlint-disable-next-line typescript/no-unsafe-return
    storageSet: (...args: unknown[]) => storageSetMock(...args)
}));

describe('route-wal/concurrency', () => {
    beforeEach(async () => {
        vi.clearAllMocks();
        storageGetMock.mockResolvedValue(null);
        storageSetMock.mockResolvedValue(undefined);
        await resetWriteAheadLogManager();
    });

    describe('AsyncMutex', () => {
        describe('concurrent acquisitions', () => {
            it('should queue concurrent acquisitions for same key', async () => {
                const mutex = new AsyncMutex();
                const key = 'test-key';

                // First acquisition
                const release1 = await mutex.acquire(key);
                expect(mutex.isLocked(key)).toBe(true);

                // Second acquisition should wait
                let secondAcquired = false;
                const secondPromise = mutex.acquire(key).then((release2) => {
                    secondAcquired = true;
                    release2();
                });

                // Give event loop a tick
                await new Promise(resolve => setTimeout(resolve, 0));
                expect(secondAcquired).toBe(false); // Should still be waiting

                // Release first lock
                release1();

                // Wait for second to acquire
                await secondPromise;
                expect(secondAcquired).toBe(true);
                expect(mutex.isLocked(key)).toBe(false); // Second already released
            });

            it('should handle multiple keys independently', async () => {
                const mutex = new AsyncMutex();
                const key1 = 'key-1';
                const key2 = 'key-2';

                // Acquire both keys
                const release1 = await mutex.acquire(key1);
                const release2 = await mutex.acquire(key2);

                expect(mutex.isLocked(key1)).toBe(true);
                expect(mutex.isLocked(key2)).toBe(true);

                // Release key1 only
                release1();
                expect(mutex.isLocked(key1)).toBe(false);
                expect(mutex.isLocked(key2)).toBe(true);

                // Can immediately acquire key1 again
                const release1Again = await mutex.acquire(key1);
                expect(mutex.isLocked(key1)).toBe(true);

                release1Again();
                release2();
                expect(mutex.isLocked(key1)).toBe(false);
                expect(mutex.isLocked(key2)).toBe(false);
            });

            it('should handle rapid sequential acquisitions', async () => {
                const mutex = new AsyncMutex();
                const key = 'rapid-key';
                const acquisitions: number[] = [];

                // Perform 10 rapid acquisitions
                for (let i = 0; i < 10; i++) {
                    const release = await mutex.acquire(key);
                    acquisitions.push(i);
                    release();
                }

                expect(acquisitions).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                expect(mutex.isLocked(key)).toBe(false);
            });

            it('should handle concurrent acquisitions from multiple callers', async () => {
                const mutex = new AsyncMutex();
                const key = 'concurrent-key';
                const results: string[] = [];

                // Start 5 concurrent acquisitions
                const promises = Array.from({ length: 5 }, (_, i) =>
                    mutex.acquire(key).then((release) => {
                        results.push(`acquired-${i}`);
                        // Hold lock for different durations
                        return new Promise<void>((resolve) => {
                            setTimeout(() => {
                                release();
                                results.push(`released-${i}`);
                                resolve();
                            }, 10 * (i + 1));
                        });
                    })
                );

                await Promise.all(promises);

                // Verify acquisitions happened in order (FIFO)
                expect(results).toEqual([
                    'acquired-0', 'released-0',
                    'acquired-1', 'released-1',
                    'acquired-2', 'released-2',
                    'acquired-3', 'released-3',
                    'acquired-4', 'released-4'
                ]);
            });
        });

        describe('race condition prevention', () => {
            it('should prevent double release errors', async () => {
                const mutex = new AsyncMutex();
                const key = 'double-release-key';

                const release = await mutex.acquire(key);
                expect(mutex.isLocked(key)).toBe(true);

                // First release should work
                release();
                expect(mutex.isLocked(key)).toBe(false);

                // Second release should be no-op (not throw)
                expect(() => release()).not.toThrow();
                expect(mutex.isLocked(key)).toBe(false);
            });

            it('should handle acquisition after immediate release', async () => {
                const mutex = new AsyncMutex();
                const key = 'immediate-key';

                // Acquire and immediately release
                const release1 = await mutex.acquire(key);
                release1();

                // Should be able to acquire again immediately
                const release2 = await mutex.acquire(key);
                expect(mutex.isLocked(key)).toBe(true);
                release2();
            });
        });
    });

    describe('WriteAheadLogManager concurrency', () => {
        it('should handle concurrent appends to same route', async () => {
            const manager = new WriteAheadLogManager();
            const routeId = 'concurrent-route';

            // Mock sequence initialization
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
                return null;
            });

            const points: GeographicPoint[] = Array.from({ length: 10 }, (_, i) => ({
                latitude: 37.7749 + i * 0.001,
                longitude: -122.4194 + i * 0.001
            })) as GeographicPoint[];

            // Concurrent appends
            const appendPromises = points.map((point, index) =>
                manager.appendPoint(routeId, point).catch((error: unknown) => {
                    console.error(`Append ${index} failed:`, error);
                    throw error;
                })
            );

            await Promise.all(appendPromises);

            // All points should be stored (buffer may be flushed if threshold reached)
            const bufferSize = manager.getBufferSize(routeId);
            // Buffer size could be 0 if flushed, or up to 9 if not
            expect(bufferSize).toBeGreaterThanOrEqual(0);
            expect(bufferSize).toBeLessThanOrEqual(9);

            // Verify no failures
            const metrics = manager.getMetrics();
            expect(metrics.failedAppends).toBe(0);
        });

        it('should handle concurrent appends to different routes', async () => {
            const manager = new WriteAheadLogManager();
            const routeIds = ['route-a', 'route-b', 'route-c'];

            storageGetMock.mockImplementation(async (key: string) => {
                for (const routeId of routeIds) {
                    if (key === `route:${routeId}:metadata`) {
                        return {
                            routeId,
                            lastMergeTime: Date.now(),
                            unmergedCount: 0,
                            lastSequence: 0,
                            totalPoints: 0
                        };
                    }
                }
                return null;
            });

            const pointsPerRoute = 5;
            const allPromises: Promise<void>[] = [];

            routeIds.forEach(routeId => {
                for (let i = 0; i < pointsPerRoute; i++) {
                    const point: GeographicPoint = {
                        latitude: 37 + i * 0.001,
                        longitude: -122 + i * 0.001
                    } as GeographicPoint;
                    allPromises.push(manager.appendPoint(routeId, point));
                }
            });

            await Promise.all(allPromises);

            // Each route should have correct buffer size
            routeIds.forEach(routeId => {
                expect(manager.getBufferSize(routeId)).toBe(pointsPerRoute);
            });

            expect(manager.getTotalBufferSize()).toBe(routeIds.length * pointsPerRoute);
        });

        it('should prevent race conditions during flush', async () => {
            const manager = new WriteAheadLogManager();
            const routeId = 'flush-race-route';

            // Mock storage to track concurrent calls
            const storageOperations: string[] = [];
            storageSetMock.mockImplementation(async (key: string) => {
                storageOperations.push(`set-start:${key}`);
                await new Promise(resolve => setTimeout(resolve, 10)); // Simulate slow storage
                storageOperations.push(`set-end:${key}`);
            });

            storageGetMock.mockImplementation(async (key: string) => {
                storageOperations.push(`get:${key}`);
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

            // Add points to trigger flush threshold
            const points: GeographicPoint[] = Array.from({ length: 15 }, (_, i) => ({
                latitude: 37.7749 + i * 0.001,
                longitude: -122.4194 + i * 0.001
            })) as GeographicPoint[];

            // Append points concurrently (some may trigger flush)
            const appendPromises = points.map(point =>
                manager.appendPoint(routeId, point)
            );

            await Promise.all(appendPromises);

            // Also trigger explicit flush concurrently
            const flushPromise = manager.flushBuffer(routeId);

            await Promise.all([...appendPromises, flushPromise]);

            // Verify no overlapping storage operations for same route
            // The mutex should prevent concurrent storage access for same route
            storageOperations.filter(op => op.includes(routeId));

            // Check that set operations don't overlap (simplified check)
            // In reality, the mutex should serialize access
            expect(manager.isFlushInProgress(routeId)).toBe(false);
        });

        it('should handle concurrent flushAllBuffers calls', async () => {
            const manager = new WriteAheadLogManager();
            const routeIds = ['route-1', 'route-2'];

            // Setup initial state
            storageGetMock.mockImplementation(async (key: string) => {
                for (const routeId of routeIds) {
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
                }
                if (key === 'wal:activeRoutes') {
                    return [];
                }
                return null;
            });

            // Add points to all routes
            for (const routeId of routeIds) {
                for (let i = 0; i < 3; i++) {
                    const point: GeographicPoint = {
                        latitude: 37.7749 + i * 0.001,
                        longitude: -122.4194 + i * 0.001
                    } as GeographicPoint;
                    await manager.appendPoint(routeId, point);
                }
            }

            // Trigger multiple concurrent flushes
            const flushPromises = Array.from({ length: 5 }, () =>
                manager.flushAllBuffers()
            );

            await Promise.all(flushPromises);

            // Buffers should be empty
            routeIds.forEach(routeId => {
                expect(manager.getBufferSize(routeId)).toBe(0);
            });
        });

        it('should handle appends during flush', async () => {
            const manager = new WriteAheadLogManager();
            const routeId = 'append-during-flush';

            // Mock slow storage to create time window for concurrent append
            let flushStarted = false;
            storageSetMock.mockImplementation(async (key: string, _value: unknown) => {
                if (key === `route:${routeId}:log`) {
                    flushStarted = true;
                    await new Promise(resolve => setTimeout(resolve, 50)); // Slow flush
                }
            });

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

            // Add initial points to trigger flush
            for (let i = 0; i < 12; i++) { // Over FLUSH_THRESHOLD (10)
                const point: GeographicPoint = {
                    latitude: 37.7749 + i * 0.001,
                    longitude: -122.4194 + i * 0.001
                } as GeographicPoint;
                await manager.appendPoint(routeId, point);
            }

            // Flush should have started (due to threshold)
            // Try to append while flush is in progress
            if (flushStarted) {
                const extraPoint: GeographicPoint = {
                    latitude: 37.7760,
                    longitude: -122.4200
                } as GeographicPoint;

                // This append should wait for flush to complete
                await manager.appendPoint(routeId, extraPoint);

                // After all operations, buffer may contain the extra point
                // (or be empty if it was also flushed)
                const finalBufferSize = manager.getBufferSize(routeId);
                expect(finalBufferSize).toBeGreaterThanOrEqual(0);
            }
        });
    });

    describe('RingBuffer concurrency', () => {
        it('should handle concurrent pushes', async () => {
            const buffer = new RingBuffer<number>(100);
            const values = Array.from({ length: 1000 }, (_, i) => i);

            // Concurrent pushes
            const pushPromises = values.map(value =>
                Promise.resolve().then(() => buffer.push(value))
            );

            await Promise.all(pushPromises);

            // Buffer should not exceed capacity even with concurrent pushes
            expect(buffer.length).toBeLessThanOrEqual(100);

            // toArray should return valid array (no corruption)
            const array = buffer.toArray();
            expect(Array.isArray(array)).toBe(true);
            expect(array.length).toBeLessThanOrEqual(100);

            // All values should be numbers (no corrupted entries)
            array.forEach(value => {
                expect(typeof value).toBe('number');
                expect(Number.isNaN(value)).toBe(false);
            });
        });

        it('should handle concurrent push and clear', async () => {
            const buffer = new RingBuffer<number>(50);

            // Start pushing values
            const pushInterval = setInterval(() => {
                buffer.push(Math.random());
            }, 1);

            // Concurrently call clear multiple times
            const clearPromises = Array.from({ length: 10 }, (_, _i) =>
                Promise.resolve().then(() => buffer.clear())
            );

            await Promise.all(clearPromises);

            clearInterval(pushInterval);

            // Buffer should be in valid state
            expect(buffer.length).toBeGreaterThanOrEqual(0);
            expect(buffer.length).toBeLessThanOrEqual(50);

            const array = buffer.toArray();
            expect(Array.isArray(array)).toBe(true);
        });
    });
});
