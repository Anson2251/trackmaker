// oxlint-disable no-unused-vars
// oxlint-disable typescript/no-unsafe-member-access
// oxlint-disable typescript/no-unsafe-call
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { WriteAheadLogManager, resetWriteAheadLogManager } from '../../src/libs/route-wal/write-ahead-log-manager';
import type { RouteLogEntry } from '../../src/libs/route-wal/types';
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

describe('route-wal/error-recovery', () => {
    let manager: WriteAheadLogManager;

    beforeEach(async () => {
        vi.clearAllMocks();
        storageGetMock.mockResolvedValue(null);
        storageSetMock.mockResolvedValue(undefined);
        await resetWriteAheadLogManager();
        manager = new WriteAheadLogManager();

        // Mock localStorage for emergency flush tests
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
        vi.restoreAllMocks();
    });

    describe('emergency flush and recovery', () => {
        it('should flush buffers to localStorage on beforeunload', () => {
            const routeId = 'emergency-route';
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;

            // Setup localStorage mock
            const setItemMock = vi.fn();
            const getItemMock = vi.fn().mockReturnValue(null);
            Object.defineProperty(global, 'localStorage', {
                value: {
                    getItem: getItemMock,
                    setItem: setItemMock,
                    removeItem: vi.fn(),
                    key: vi.fn(),
                    length: 0,
                    clear: vi.fn()
                },
                writable: true
            });

            // Mock window and document
            Object.defineProperty(global, 'window', {
                value: { addEventListener: vi.fn(), removeEventListener: vi.fn() },
                writable: true
            });
            Object.defineProperty(global, 'document', {
                value: { addEventListener: vi.fn(), removeEventListener: vi.fn() },
                writable: true
            });

            // Create new manager to trigger setupLifecycleHandlers
            const testManager = new WriteAheadLogManager();

            // Directly add points to the private buffer for testing
            const entries: RouteLogEntry[] = [
                {
                    id: '00000000-0000-0000-0000-000000000001',
                    routeId,
                    point,
                    timestamp: Date.now(),
                    sequence: 0,
                    merged: false
                },
                {
                    id: '00000000-0000-0000-0000-000000000002',
                    routeId,
                    point: { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
                    timestamp: Date.now() + 1,
                    sequence: 1,
                    merged: false
                }
            ];
            (testManager as any).writeBuffer.set(routeId, entries);

            // Trigger beforeunload handler
            const beforeunloadHandler = (window as any).addEventListener.mock.calls.find(
                (call: any) => call[0] === 'beforeunload'
            )?.[1];

            expect(beforeunloadHandler).toBeDefined();

            // Trigger the handler
            beforeunloadHandler({} as BeforeUnloadEvent);

            // Should have saved to localStorage
            expect(setItemMock).toHaveBeenCalledWith(
                'wal:emergency:emergency-route',
                expect.any(String)
            );

            // Verify the saved data contains both entries
            const savedData = JSON.parse(setItemMock.mock.calls[0][1]);
            expect(savedData.length).toBe(2);
            expect(savedData[0].id).toBe('00000000-0000-0000-0000-000000000001');
            expect(savedData[1].id).toBe('00000000-0000-0000-0000-000000000002');
        });

        it('should recover emergency flush data from localStorage', async () => {
            const routeId = 'recovery-route';
            const emergencyEntries: RouteLogEntry[] = [
                {
                    id: '00000000-0000-0000-0000-000000000001',
                    routeId,
                    point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                    timestamp: Date.now(),
                    sequence: 0,
                    merged: false
                },
                {
                    id: '00000000-0000-0000-0000-000000000002',
                    routeId,
                    point: { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
                    timestamp: Date.now() + 1,
                    sequence: 1,
                    merged: false
                }
            ];

            // Mock localStorage with emergency data
            const localStorageMock = {
                getItem: vi.fn((key: string) => {
                    if (key === 'wal:emergency:recovery-route') {
                        return JSON.stringify(emergencyEntries);
                    }
                    return null;
                }),
                setItem: vi.fn(),
                removeItem: vi.fn(),
                key: vi.fn((index: number) => {
                    if (index === 0) return 'wal:emergency:recovery-route';
                    return null;
                }),
                length: 1,
                clear: vi.fn()
            };

            Object.defineProperty(global, 'localStorage', {
                value: localStorageMock,
                writable: true
            });

            // Mock storageSet to track recovered data
            const setCalls: Array<{ key: string; value: unknown }> = [];
            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                setCalls.push({ key, value });
            });

            // Mock storageGet to return empty log initially
            storageGetMock.mockImplementation(async (key: string) => {
                if (key === `route:${routeId}:log`) {
                    return [];
                }
                return null;
            });

            // Trigger recovery by creating new manager (calls recoverEmergencyFlush in constructor)
            new WriteAheadLogManager();

            // Wait for recovery to complete
            await new Promise(resolve => setTimeout(resolve, 10));

            // Should have called storageSet with recovered entries
            const logCall = setCalls.find(c => c.key === `route:${routeId}:log`);
            expect(logCall).toBeDefined();
            const recoveredLog = logCall?.value as RouteLogEntry[];
            expect(recoveredLog.length).toBe(2);
            expect(recoveredLog[0].id).toBe('00000000-0000-0000-0000-000000000001');
            expect(recoveredLog[1].id).toBe('00000000-0000-0000-0000-000000000002');

            // Should have removed emergency data
            expect(localStorageMock.removeItem).toHaveBeenCalledWith('wal:emergency:recovery-route');
        });

        it('should handle corrupted emergency flush data', async () => {
            // Mock localStorage with corrupted JSON
            const localStorageMock = {
                getItem: vi.fn((key: string) => {
                    if (key === 'wal:emergency:corrupted-route') {
                        return '{ invalid json';
                    }
                    return null;
                }),
                setItem: vi.fn(),
                removeItem: vi.fn(),
                key: vi.fn((index: number) => {
                    if (index === 0) return 'wal:emergency:corrupted-route';
                    return null;
                }),
                length: 1,
                clear: vi.fn()
            };

            Object.defineProperty(global, 'localStorage', {
                value: localStorageMock,
                writable: true
            });

            // Should not throw
            new WriteAheadLogManager();
            await new Promise(resolve => setTimeout(resolve, 10));

            // Should have removed corrupted data
            expect(localStorageMock.removeItem).toHaveBeenCalledWith('wal:emergency:corrupted-route');
        });
    });

    describe('performRecovery', () => {
        it('should recover corrupted log data', async () => {
            const routeId = 'corrupted-log-route';

            // Mock corrupted log (invalid entries mixed with valid)
            const corruptedLog = [
                { invalid: 'data' }, // Invalid entry
                {
                    id: '00000000-0000-0000-0000-000000000001',
                    routeId,
                    point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                    timestamp: Date.now(),
                    sequence: 0,
                    merged: false
                },
                { another: 'invalid entry' }, // Another invalid
                {
                    id: '00000000-0000-0000-0000-000000000002',
                    routeId,
                    point: { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint,
                    timestamp: Date.now() + 1,
                    sequence: 1,
                    merged: true
                }
            ];

            storageGetMock.mockImplementation(async (key: string) => {
                if (key === 'wal:activeRoutes') {
                    return [routeId];
                }
                if (key === `route:${routeId}:log`) {
                    return corruptedLog;
                }
                if (key === `route:${routeId}:metadata`) {
                    return {
                        routeId,
                        lastMergeTime: Date.now(),
                        unmergedCount: 5, // Wrong count (should be 1 after recovery)
                        lastSequence: 1,
                        totalPoints: 5 // Wrong count (should be 2 after recovery)
                    };
                }
                return null;
            });

            const setCalls: Array<{ key: string; value: unknown }> = [];
            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                setCalls.push({ key, value });
            });

            const result = await manager.performRecovery();

            expect(result.routesRecovered).toBe(1);
            expect(result.entriesRemoved).toBe(2); // 2 invalid entries removed

            // Should have updated log with only valid entries
            const logUpdate = setCalls.find(c => c.key === `route:${routeId}:log`);
            expect(logUpdate).toBeDefined();
            const recoveredLog = logUpdate?.value as RouteLogEntry[];
            expect(recoveredLog.length).toBe(2);
            expect(recoveredLog[0].id).toBe('00000000-0000-0000-0000-000000000001');
            expect(recoveredLog[1].id).toBe('00000000-0000-0000-0000-000000000002');

            // Should have updated metadata with correct counts
            const metadataUpdate = setCalls.find(c => c.key === `route:${routeId}:metadata`);
            expect(metadataUpdate).toBeDefined();
            const updatedMetadata = metadataUpdate?.value as any;
            expect(updatedMetadata.unmergedCount).toBe(1); // Only first entry not merged
            expect(updatedMetadata.totalPoints).toBe(2);
            expect(updatedMetadata.lastSequence).toBe(1);
        });

        it('should handle log that is not an array', async () => {
            const routeId = 'non-array-log-route';

            storageGetMock.mockImplementation(async (key: string) => {
                if (key === 'wal:activeRoutes') {
                    return [routeId];
                }
                if (key === `route:${routeId}:log`) {
                    return 'not-an-array'; // Corrupted: not an array
                }
                if (key === `route:${routeId}:metadata`) {
                    return {
                        routeId,
                        lastMergeTime: Date.now(),
                        unmergedCount: 10,
                        lastSequence: 9,
                        totalPoints: 10
                    };
                }
                return null;
            });

            const setCalls: Array<{ key: string; value: unknown }> = [];
            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                setCalls.push({ key, value });
            });

            const result = await manager.performRecovery();

            expect(result.routesRecovered).toBe(1);
            expect(result.entriesRemoved).toBe(1); // Counts the corrupted log as 1 removed

            // Should have reset log to empty array
            const logUpdate = setCalls.find(c => c.key === `route:${routeId}:log`);
            expect(logUpdate).toBeDefined();
            expect(Array.isArray(logUpdate?.value)).toBe(true);
            expect((logUpdate?.value as unknown[] ?? []).length).toBe(0);

            // Should have updated metadata
            const metadataUpdate = setCalls.find(c => c.key === `route:${routeId}:metadata`);
            expect(metadataUpdate).toBeDefined();
            const updatedMetadata = metadataUpdate?.value as any;
            expect(updatedMetadata.unmergedCount).toBe(0);
            expect(updatedMetadata.totalPoints).toBe(0);
            expect(updatedMetadata.lastSequence).toBe(0);
        });

        it('should handle missing metadata', async () => {
            const routeId = 'no-metadata-route';

            storageGetMock.mockImplementation(async (key: string) => {
                if (key === 'wal:activeRoutes') {
                    return [routeId];
                }
                if (key === `route:${routeId}:log`) {
                    return [
                        {
                            id: '00000000-0000-0000-0000-000000000001',
                            routeId,
                            point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint,
                            timestamp: Date.now(),
                            sequence: 0,
                            merged: false
                        }
                    ];
                }
                if (key === `route:${routeId}:metadata`) {
                    return null; // Missing metadata
                }
                return null;
            });

            const setCalls: Array<{ key: string; value: unknown }> = [];
            storageSetMock.mockImplementation(async (key: string, value: unknown) => {
                setCalls.push({ key, value });
            });

            const result = await manager.performRecovery();

            // Should create new metadata
            const metadataUpdate = setCalls.find(c => c.key === `route:${routeId}:metadata`);
            expect(metadataUpdate).toBeDefined();
            const updatedMetadata = metadataUpdate?.value as any;
            expect(updatedMetadata.routeId).toBe(routeId);
            expect(updatedMetadata.unmergedCount).toBe(1);
            expect(updatedMetadata.totalPoints).toBe(1);
            expect(updatedMetadata.lastSequence).toBe(0);
        });
    });

    describe('storage failure handling', () => {
        it('should handle storageGet failures gracefully', async () => {
            const routeId = 'storage-fail-route';

            // Mock storageGet to fail
            storageGetMock.mockRejectedValue(new Error('Storage unavailable'));

            // Create new manager instance with failing storage
            const testManager = new WriteAheadLogManager();

            // Should not throw on getMetadata
            const metadata = await testManager.getMetadata(routeId);
            expect(metadata).toBeNull();

            // Should not throw on safeGetLog (it uses safeStorageGet internally)
            const log = await (testManager as any).safeGetLog(routeId);
            expect(log).toEqual([]);

            // Reset mocks for other tests
            storageGetMock.mockResolvedValue(null);
        });

        it('should retry merge scheduling when merge processor not available', async () => {
            const routeId = 'retry-route';
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;

            // Reset mocks
            storageGetMock.mockResolvedValue(null);
            storageSetMock.mockResolvedValue(undefined);

            // Mock setTimeout for retry testing
            vi.useFakeTimers();

            // Create fresh manager
            const testManager = new WriteAheadLogManager();
            vi.useRealTimers();

            // Spy on scheduleMergeWithRetry
            const scheduleSpy = vi.spyOn(testManager as any, 'scheduleMergeWithRetry');

            // Append point (will trigger scheduleMerge - it will retry since merge processor might not be ready)
            vi.useFakeTimers();
            await testManager.appendPoint(routeId, point);

            // Fast-forward through retries
            vi.advanceTimersByTime(1000); // First retry delay
            vi.advanceTimersByTime(2000); // Second retry delay (exponential backoff)
            vi.advanceTimersByTime(4000); // Third retry delay

            expect(scheduleSpy).toHaveBeenCalled();

            vi.useRealTimers();
        });

        it('should track failed merges in metrics after max retries', async () => {
            const routeId = 'max-retry-route';
            const point: GeographicPoint = { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint;

            vi.useFakeTimers();

            // Mock merge processor to never be available
            Object.defineProperty(manager, 'mergeProcessor', {
                get: vi.fn().mockReturnValue(null),
                configurable: true
            });

            // Append point
            await manager.appendPoint(routeId, point);

            // Fast-forward through all retries
            vi.advanceTimersByTime(1000 + 2000 + 4000); // 3 retries with exponential backoff

            // Check metrics
            const metrics = manager.getMetrics();
            expect(metrics.failedMerges).toBeGreaterThan(0);

            vi.useRealTimers();
        });
    });

    describe('corrupted entry validation', () => {
        it('should filter out invalid entries in safeGetLog', async () => {
            const routeId = 'invalid-entries-route';
            const invalidLog = [
                { id: '00000000-0000-0000-0000-000000000001', routeId, point: { latitude: 37.7749, longitude: -122.4194 } as GeographicPoint, timestamp: Date.now(), sequence: 0, merged: false },
                { invalid: 'entry' }, // Invalid
                { id: '00000000-0000-0000-0000-000000000002', routeId, point: { latitude: 37.7750, longitude: -122.4195 } as GeographicPoint, timestamp: Date.now(), sequence: 1, merged: false },
                null, // Null entry
                undefined, // Undefined entry
                123, // Number entry
                'string entry' // String entry
            ];

            storageGetMock.mockImplementation(async (key: string) => {
                if (key === `route:${routeId}:log`) {
                    return invalidLog;
                }
                return null;
            });

            const validEntries = await (manager as any).safeGetLog(routeId);

            // Should only return valid entries
            expect(validEntries.length).toBe(2);
            expect(validEntries[0].id).toBe('00000000-0000-0000-0000-000000000001');
            expect(validEntries[1].id).toBe('00000000-0000-0000-0000-000000000002');

            // Metrics should track recovery events
            const metrics = manager.getMetrics();
            expect(metrics.recoveryEvents).toBeGreaterThan(0);
        });
    });
});
