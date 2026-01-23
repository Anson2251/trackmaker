import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

const storageGetMock = vi.fn().mockResolvedValue(null);
const storageSetMock = vi.fn().mockResolvedValue(undefined);

vi.mock('../../src/libs/storage', () => ({
    // oxlint-disable-next-line typescript/no-unsafe-return
    storageGet: (...args: unknown[]) => storageGetMock(...args),
    // oxlint-disable-next-line typescript/no-unsafe-return
    storageSet: (...args: unknown[]) => storageSetMock(...args)
}));

const { WriteAheadLogManager, AsyncMutex, RingBuffer, resetWriteAheadLogManager } = await import('../../src/libs/route-wal/write-ahead-log-manager');

describe('route-wal/write-ahead-log-manager', () => {
    describe('AsyncMutex', () => {
        it('should acquire and release locks', async () => {
            const mutex = new AsyncMutex();

            const release = await mutex.acquire('key1');
            expect(mutex.isLocked('key1')).toBe(true);
            release();
            expect(mutex.isLocked('key1')).toBe(false);
        });

        it('should track multiple keys independently', async () => {
            const mutex = new AsyncMutex();

            const release1 = await mutex.acquire('key1');
            const release2 = await mutex.acquire('key2');

            expect(mutex.isLocked('key1')).toBe(true);
            expect(mutex.isLocked('key2')).toBe(true);

            release1();
            expect(mutex.isLocked('key1')).toBe(false);
            expect(mutex.isLocked('key2')).toBe(true);

            release2();
            expect(mutex.isLocked('key1')).toBe(false);
            expect(mutex.isLocked('key2')).toBe(false);
        });
    });

    describe('RingBuffer', () => {
        it('should push items within capacity', () => {
            const buffer = new RingBuffer<number>(3);

            buffer.push(1);
            buffer.push(2);
            buffer.push(3);

            expect(buffer.length).toBe(3);
            expect(buffer.toArray()).toEqual([1, 2, 3]);
        });

        it('should overwrite oldest item when full', () => {
            const buffer = new RingBuffer<number>(3);

            buffer.push(1);
            buffer.push(2);
            buffer.push(3);
            buffer.push(4);

            expect(buffer.length).toBe(3);
            expect(buffer.toArray()).toEqual([2, 3, 4]);
        });

        it('should clear buffer', () => {
            const buffer = new RingBuffer<number>(3);

            buffer.push(1);
            buffer.push(2);
            buffer.clear();

            expect(buffer.length).toBe(0);
            expect(buffer.toArray()).toEqual([]);
        });

        it('should handle toArray when not full', () => {
            const buffer = new RingBuffer<number>(5);

            buffer.push(10);
            buffer.push(20);

            expect(buffer.toArray()).toEqual([10, 20]);
        });
    });

    describe('WriteAheadLogManager', () => {
        beforeEach(async () => {
            vi.clearAllMocks();
            storageGetMock.mockResolvedValue(null);
            storageSetMock.mockResolvedValue(undefined);
            await resetWriteAheadLogManager();
        });

        afterEach(async () => {
            await resetWriteAheadLogManager();
        });

        describe('appendPoint', () => {
            it('should throw error for empty routeId', async () => {
                const manager = new WriteAheadLogManager();

                await expect(manager.appendPoint('', { latitude: 37.7749, longitude: -122.4194 } as any))
                    .rejects.toThrow('Invalid routeId');
            });

            it('should throw error for invalid point latitude', async () => {
                const manager = new WriteAheadLogManager();

                await expect(manager.appendPoint('route-1', { latitude: 91, longitude: -122.4194 } as any))
                    .rejects.toThrow('Invalid point.latitude');
            });

            it('should throw error for invalid point longitude', async () => {
                const manager = new WriteAheadLogManager();

                await expect(manager.appendPoint('route-1', { latitude: 37.7749, longitude: -181 } as any))
                    .rejects.toThrow('Invalid point.longitude');
            });

            it('should add point to buffer', async () => {
                const manager = new WriteAheadLogManager();

                await manager.appendPoint('route-1', { latitude: 37.7749, longitude: -122.4194 } as any);

                expect(manager.getBufferSize('route-1')).toBe(1);
            });

            it('should accumulate multiple points in buffer', async () => {
                const manager = new WriteAheadLogManager();

                await manager.appendPoint('route-1', { latitude: 37.7749, longitude: -122.4194 } as any);
                await manager.appendPoint('route-1', { latitude: 37.7750, longitude: -122.4195 } as any);
                await manager.appendPoint('route-1', { latitude: 37.7751, longitude: -122.4196 } as any);

                expect(manager.getBufferSize('route-1')).toBe(3);
            });

            it('should separate buffers for different routes', async () => {
                const manager = new WriteAheadLogManager();

                await manager.appendPoint('route-1', { latitude: 37.7749, longitude: -122.4194 } as any);
                await manager.appendPoint('route-2', { latitude: 40.7128, longitude: -74.0060 } as any);

                expect(manager.getBufferSize('route-1')).toBe(1);
                expect(manager.getBufferSize('route-2')).toBe(1);
                expect(manager.getTotalBufferSize()).toBe(2);
            });

            it('should call storageSet when point is added', async () => {
                const manager = new WriteAheadLogManager();

                await manager.appendPoint('route-1', { latitude: 37.7749, longitude: -122.4194 } as any);

                expect(storageSetMock).toHaveBeenCalled();
            });
        });

        describe('getBufferSize', () => {
            it('should return 0 for non-existent route', () => {
                const manager = new WriteAheadLogManager();

                expect(manager.getBufferSize('non-existent')).toBe(0);
            });
        });

        describe('getTotalBufferSize', () => {
            it('should return 0 when no buffers', () => {
                const manager = new WriteAheadLogManager();

                expect(manager.getTotalBufferSize()).toBe(0);
            });

            it('should return correct total with multiple routes', async () => {
                const manager = new WriteAheadLogManager();

                await manager.appendPoint('route-1', { latitude: 37.7749, longitude: -122.4194 } as any);
                await manager.appendPoint('route-2', { latitude: 40.7128, longitude: -74.0060 } as any);

                expect(manager.getTotalBufferSize()).toBe(2);
            });
        });

        describe('hasPendingWrites', () => {
            it('should return false for non-existent route', () => {
                const manager = new WriteAheadLogManager();

                expect(manager.hasPendingWrites('route-1')).toBe(false);
            });

            it('should return true after adding points', async () => {
                const manager = new WriteAheadLogManager();

                await manager.appendPoint('route-1', { latitude: 37.7749, longitude: -122.4194 } as any);

                expect(manager.hasPendingWrites('route-1')).toBe(true);
            });
        });

        describe('getMetrics', () => {
            it('should return valid metrics structure', () => {
                const manager = new WriteAheadLogManager();

                const metrics = manager.getMetrics();

                expect(metrics).toHaveProperty('appendLatency');
                expect(metrics).toHaveProperty('mergeDuration');
                expect(metrics).toHaveProperty('logSizePerRoute');
                expect(metrics).toHaveProperty('failedAppends');
                expect(metrics).toHaveProperty('failedMerges');
                expect(metrics).toHaveProperty('recoveryEvents');
                expect(metrics).toHaveProperty('mergeFrequency');
                expect(metrics).toHaveProperty('compressionRatio');
                expect(metrics).toHaveProperty('memoryUsage');
            });

            it('should track failed appends in metrics', () => {
                const manager = new WriteAheadLogManager();

                const metrics = manager.getMetrics();
                expect(typeof metrics.failedAppends).toBe('number');
            });
        });

        describe('shutdown', () => {
            it('should complete without error', async () => {
                const manager = new WriteAheadLogManager();

                await expect(manager.shutdown()).resolves.not.toThrow();
            });
        });

        describe('getMetadata', () => {
            it('should return null for non-existent route', async () => {
                const manager = new WriteAheadLogManager();

                const metadata = await manager.getMetadata('non-existent');

                expect(metadata).toBeNull();
            });

            it('should return metadata when exists', async () => {
                const manager = new WriteAheadLogManager();
                storageGetMock.mockImplementation((key: string) => {
                    if (key === 'route:route-1:metadata') {
                        return Promise.resolve({
                            routeId: 'route-1',
                            lastMergeTime: Date.now(),
                            unmergedCount: 5,
                            lastSequence: 10,
                            totalPoints: 15
                        });
                    }
                    return Promise.resolve(null);
                });

                const metadata = await manager.getMetadata('route-1');

                expect(metadata).not.toBeNull();
                expect(metadata?.unmergedCount).toBe(5);
            });
        });
    });
});
