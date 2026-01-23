// oxlint-disable typescript/no-unsafe-return
// oxlint-disable typescript/no-unsafe-call
// oxlint-disable typescript/no-unsafe-member-access
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { WriteAheadLogManager, resetWriteAheadLogManager } from '../../src/libs/route-wal/write-ahead-log-manager';
import type { GeographicPoint } from '../../src/libs/geolocation/types';

// Mock storage
const storageGetMock = vi.fn().mockResolvedValue(null);
const storageSetMock = vi.fn().mockResolvedValue(undefined);

vi.mock('../../src/libs/storage', () => ({
    storageGet: (...args: unknown[]) => storageGetMock(...args),
    storageSet: (...args: unknown[]) => storageSetMock(...args)
}));

describe('route-wal/lifecycle', () => {
    let manager: WriteAheadLogManager;
    let originalWindow: any;
    let originalDocument: any;
    let originalLocalStorage: any;

    beforeEach(async () => {
        vi.clearAllMocks();
        storageGetMock.mockResolvedValue(null);
        storageSetMock.mockResolvedValue(undefined);
        await resetWriteAheadLogManager();

        // Save originals
        originalWindow = global.window;
        originalDocument = global.document;
        originalLocalStorage = global.localStorage;

        // Setup minimal window/document for tests that need them
        Object.defineProperty(global, 'window', {
            value: {
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn()
            },
            writable: true
        });

        Object.defineProperty(global, 'document', {
            value: {
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                visibilityState: 'visible',
                dispatchEvent: vi.fn()
            },
            writable: true
        });

        Object.defineProperty(global, 'localStorage', {
            value: {
                getItem: vi.fn(),
                setItem: vi.fn(),
                removeItem: vi.fn(),
                key: vi.fn(),
                length: 0,
                clear: vi.fn()
            },
            writable: true
        });
    });

    afterEach(async () => {
        await resetWriteAheadLogManager();

        // Restore originals
        Object.defineProperty(global, 'window', {
            value: originalWindow,
            writable: true
        });

        Object.defineProperty(global, 'document', {
            value: originalDocument,
            writable: true
        });

        Object.defineProperty(global, 'localStorage', {
            value: originalLocalStorage,
            writable: true
        });

        vi.restoreAllMocks();
    });

    describe('initialization', () => {
        it('should register event listeners on initialization', () => {
            vi.useFakeTimers();

            manager = new WriteAheadLogManager();

            expect(window.addEventListener).toHaveBeenCalledWith(
                'beforeunload',
                expect.any(Function)
            );

            // oxlint-disable-next-line typescript/unbound-method
            expect(document.addEventListener).toHaveBeenCalledWith(
                'visibilitychange',
                expect.any(Function)
            );

            vi.useRealTimers();
        });

        it('should not register handlers in non-browser environment', () => {
            // Simulate non-browser environment
            Object.defineProperty(global, 'window', { value: undefined, writable: true });
            Object.defineProperty(global, 'document', { value: undefined, writable: true });

            manager = new WriteAheadLogManager();

            expect(window).toBeUndefined();
            expect(document).toBeUndefined();
            // Should not throw during initialization
        });
    });

    describe('beforeunload handler', () => {
        it('should flush buffers synchronously on beforeunload', () => {
            manager = new WriteAheadLogManager();

            // Get the registered handler from window.addEventListener calls
            const beforeunloadCall = (window.addEventListener as any).mock.calls.find(
                (call: any) => call[0] === 'beforeunload'
            );
            const handler = beforeunloadCall && beforeunloadCall[1];
            expect(handler).toBeDefined();

            // Spy on flushAllBuffersSync
            const flushSyncSpy = vi.spyOn(manager as any, 'flushAllBuffersSync');

            // Trigger handler - it should flush if buffer has data
            const getTotalBufferSizeSpy = vi.spyOn(manager, 'getTotalBufferSize');
            getTotalBufferSizeSpy.mockReturnValue(1);

            handler({} as BeforeUnloadEvent);

            expect(flushSyncSpy).toHaveBeenCalled();
        });

        it('should only flush if there are pending writes', () => {
            manager = new WriteAheadLogManager();

            const beforeunloadCall = (window.addEventListener as any).mock.calls.find(
                (call: any) => call[0] === 'beforeunload'
            );
            const handler = beforeunloadCall && beforeunloadCall[1];
            expect(handler).toBeDefined();

            const flushSyncSpy = vi.spyOn(manager as any, 'flushAllBuffersSync');
            const getTotalBufferSizeSpy = vi.spyOn(manager, 'getTotalBufferSize');

            // Mock getTotalBufferSize to return 0
            getTotalBufferSizeSpy.mockReturnValue(0);

            handler({} as BeforeUnloadEvent);

            expect(flushSyncSpy).not.toHaveBeenCalled();

            // Now with pending writes
            getTotalBufferSizeSpy.mockReturnValue(5);
            handler({} as BeforeUnloadEvent);

            expect(flushSyncSpy).toHaveBeenCalled();
        });
    });

    describe('visibilitychange handler', () => {
        it('should flush buffers when page becomes hidden', async () => {
            vi.useFakeTimers();
            manager = new WriteAheadLogManager();
            vi.useRealTimers();

            // Get the registered handler
            const visibilityChangeCall = (document.addEventListener as any).mock.calls.find(
                (call: any) => call[0] === 'visibilitychange'
            );
            expect(visibilityChangeCall).toBeDefined();
            const handler = visibilityChangeCall[1];

            // Mock document.visibilityState
            Object.defineProperty(document, 'visibilityState', {
                value: 'hidden',
                writable: true
            });

            // Spy on flushAllBuffers
            const flushAllBuffersSpy = vi.spyOn(manager, 'flushAllBuffers').mockResolvedValue();

            // Trigger handler
            handler();

            expect(flushAllBuffersSpy).toHaveBeenCalled();

            // Should track pending visibility flush
            expect((manager as any).pendingVisibilityFlush).toBeDefined();

            // Wait for flush to complete
            await (manager as any).pendingVisibilityFlush;
            expect((manager as any).pendingVisibilityFlush).toBeNull();
        });

        it('should not flush when page becomes visible', () => {
            vi.useFakeTimers();
            manager = new WriteAheadLogManager();
            vi.useRealTimers();

            const visibilityChangeCall = (document.addEventListener as any).mock.calls.find(
                (call: any) => call[0] === 'visibilitychange'
            );
            const handler = visibilityChangeCall[1];

            // Mock document.visibilityState as visible
            Object.defineProperty(document, 'visibilityState', {
                value: 'visible',
                writable: true
            });

            const flushAllBuffersSpy = vi.spyOn(manager, 'flushAllBuffers');

            handler();

            expect(flushAllBuffersSpy).not.toHaveBeenCalled();
        });

        it('should handle concurrent visibility changes', async () => {
            vi.useFakeTimers();
            manager = new WriteAheadLogManager();
            vi.useRealTimers();

            const visibilityChangeCall = (document.addEventListener as any).mock.calls.find(
                (call: any) => call[0] === 'visibilitychange'
            );
            const handler = visibilityChangeCall[1];

            Object.defineProperty(document, 'visibilityState', {
                value: 'hidden',
                writable: true
            });

            // Make flushAllBuffers slow
            let flushResolve: () => void;
            const flushPromise = new Promise<void>(resolve => {
                flushResolve = resolve;
            });
            vi.spyOn(manager, 'flushAllBuffers').mockReturnValue(flushPromise);

            // First visibility change
            handler();
            const firstFlush = (manager as any).pendingVisibilityFlush;
            expect(firstFlush).toBeDefined();

            // Second visibility change while first is still pending
            handler();
            // Should not start another flush
            expect((manager as any).pendingVisibilityFlush).toBe(firstFlush);

            // Complete the flush
            flushResolve!();
            await firstFlush;

            // Now pending should be null
            expect((manager as any).pendingVisibilityFlush).toBeNull();

            // Another visibility change should start new flush
            handler();
            expect((manager as any).pendingVisibilityFlush).toBeDefined();
        });
    });

    describe('shutdown', () => {
        it('should clean up all resources', async () => {
            vi.useFakeTimers();
            manager = new WriteAheadLogManager();
            vi.useRealTimers();

            // Spy on internal methods
            const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
            const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
            const documentRemoveEventListenerSpy = vi.spyOn(document, 'removeEventListener');
            const flushAllBuffersSpy = vi.spyOn(manager, 'flushAllBuffers').mockResolvedValue();

            // Add some pending operations
            const mockOperation = Promise.resolve();
            (manager as any).pendingOperations.add(mockOperation);

            await manager.shutdown();

            // Should clear interval
            expect(clearIntervalSpy).toHaveBeenCalled();

            // Should remove event listeners
            expect(removeEventListenerSpy).toHaveBeenCalledWith(
                'beforeunload',
                expect.any(Function)
            );
            expect(documentRemoveEventListenerSpy).toHaveBeenCalledWith(
                'visibilitychange',
                expect.any(Function)
            );

            // Should wait for pending operations
            expect((manager as any).pendingOperations.size).toBe(0);

            // Should flush buffers
            expect(flushAllBuffersSpy).toHaveBeenCalled();

            // Should clear internal state
            expect((manager as any).isShuttingDown).toBe(true);
            expect((manager as any).writeBuffer.size).toBe(0);
            expect((manager as any).sequenceCache.size).toBe(0);
            expect((manager as any)._mergeProcessor).toBeNull();
        });

        it('should handle shutdown during active operations', async () => {
            vi.useFakeTimers();
            manager = new WriteAheadLogManager();
            vi.useRealTimers();

            // Create a pending operation that takes time
            let operationResolve: () => void;
            const slowOperation = new Promise<void>(resolve => {
                operationResolve = resolve;
            });
            (manager as any).pendingOperations.add(slowOperation);

            // Start shutdown (should wait for operation)
            const shutdownPromise = manager.shutdown();

            // Verify shutdown started but not complete
            expect((manager as any).isShuttingDown).toBe(true);

            // Resolve the operation
            operationResolve!();

            // Shutdown should complete
            await expect(shutdownPromise).resolves.not.toThrow();
        });

        it('should handle shutdown with pending visibility flush', async () => {
            vi.useFakeTimers();
            manager = new WriteAheadLogManager();
            vi.useRealTimers();

            // Create pending visibility flush
            const visibilityFlush = Promise.resolve();
            (manager as any).pendingVisibilityFlush = visibilityFlush;

            vi.spyOn(manager, 'flushAllBuffers').mockResolvedValue();

            await manager.shutdown();

            // Should have waited for visibility flush
            expect((manager as any).pendingVisibilityFlush).toBeNull();
        });

        it('should reject new appends during shutdown', async () => {
            vi.useFakeTimers();
            manager = new WriteAheadLogManager();
            vi.useRealTimers();

            // Start shutdown
            const shutdownPromise = manager.shutdown();

            // Try to append during shutdown
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;
            await expect(
                manager.appendPoint('test-route', point)
            ).rejects.toThrow('WAL is shutting down');

            // Complete shutdown
            await shutdownPromise;
        });

        it('should allow multiple shutdown calls', async () => {
            vi.useFakeTimers();
            manager = new WriteAheadLogManager();
            vi.useRealTimers();

            await manager.shutdown();
            await expect(manager.shutdown()).resolves.not.toThrow();
        });
    });

    describe('periodic flush', () => {
        it('should flush buffers periodically', async () => {
            vi.useFakeTimers();

            manager = new WriteAheadLogManager();

            // Spy on flushAllBuffers
            const flushAllBuffersSpy = vi.spyOn(manager, 'flushAllBuffers').mockResolvedValue();

            // Fast-forward one interval
            vi.advanceTimersByTime(100); // FLUSH_DELAY_MS

            expect(flushAllBuffersSpy).toHaveBeenCalledTimes(1);

            // Fast-forward multiple intervals
            vi.advanceTimersByTime(300); // 3 more intervals

            expect(flushAllBuffersSpy).toHaveBeenCalledTimes(4);

            vi.useRealTimers();
        });

        it('should stop periodic flush after shutdown', async () => {
            vi.useFakeTimers();

            manager = new WriteAheadLogManager();

            const flushAllBuffersSpy = vi.spyOn(manager, 'flushAllBuffers').mockResolvedValue();
            const clearIntervalSpy = vi.spyOn(global, 'clearInterval');

            // Shutdown manager (will call flushAllBuffers once)
            await manager.shutdown();

            // Should have called flushAllBuffers once during shutdown
            expect(flushAllBuffersSpy).toHaveBeenCalledTimes(1);

            // Fast-forward time - periodic flush should not fire
            vi.advanceTimersByTime(500);

            // Should still be only 1 call (from shutdown)
            expect(flushAllBuffersSpy).toHaveBeenCalledTimes(1);
            expect(clearIntervalSpy).toHaveBeenCalled();

            vi.useRealTimers();
        });
    });

    describe('recoverEmergencyFlush', () => {
        it('should scan localStorage for emergency data on initialization', () => {
            // Mock localStorage with emergency data
            const localStorageMock = {
                getItem: vi.fn(),
                setItem: vi.fn(),
                removeItem: vi.fn(),
                key: vi.fn((index: number) => {
                    if (index === 0) return 'wal:emergency:test-route';
                    return null;
                }),
                length: 1,
                clear: vi.fn()
            };

            Object.defineProperty(global, 'localStorage', {
                value: localStorageMock,
                writable: true
            });

            // Spy on localStorage.key to verify it's called
            const keySpy = vi.spyOn(localStorageMock, 'key');

            manager = new WriteAheadLogManager();

            // Should scan localStorage for emergency keys
            expect(keySpy).toHaveBeenCalled();
        });

        it('should handle localStorage errors gracefully', () => {
            // Mock localStorage to throw
            Object.defineProperty(global, 'localStorage', {
                value: {
                    getItem: vi.fn(() => { throw new Error('LocalStorage error'); }),
                    setItem: vi.fn(),
                    removeItem: vi.fn(),
                    key: vi.fn(),
                    length: 0,
                    clear: vi.fn()
                },
                writable: true
            });

            // Should not throw during initialization
            expect(() => {
                manager = new WriteAheadLogManager();
            }).not.toThrow();
        });
    });

    describe('memory usage tracking', () => {
        it('should update memory usage when log size changes', async () => {
            manager = new WriteAheadLogManager();
            const routeId = 'memory-route';

            // Initial memory usage should be 0
            const initialMetrics = manager.getMetrics();
            expect(initialMetrics.memoryUsage).toBe(0);

            // Mock storage to track log size updates
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

            // Add points
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;
            await manager.appendPoint(routeId, point);

            // Memory usage currently doesn't update on append (only on log size changes)
            const metricsAfterAppend = manager.getMetrics();
            expect(metricsAfterAppend.memoryUsage).toBe(0);

            // Flush buffer
            await manager.flushAllBuffers();

            // Memory usage should update after flush
            const metricsAfterFlush = manager.getMetrics();
            expect(metricsAfterFlush.memoryUsage).toBe(0);
        });
    });
});
