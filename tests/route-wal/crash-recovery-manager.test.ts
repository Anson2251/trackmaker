// oxlint-disable typescript/no-unnecessary-type-assertion
// oxlint-disable typescript/no-unsafe-member-access
// oxlint-disable typescript/no-unsafe-call
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { CrashRecoveryManager, CrashRecoveryManagerInstance } from '../../src/libs/route-wal/crash-recovery-manager';
import { storageGet } from '../../src/libs/storage';

vi.mock('../../src/libs/storage');

describe('route-wal/crash-recovery-manager', () => {
    describe('CrashRecoveryManager', () => {
        beforeEach(() => {
            vi.resetAllMocks();
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        describe('getInstance', () => {
            it('should return singleton instance', () => {
                const instance1 = CrashRecoveryManager.getInstance();
                const instance2 = CrashRecoveryManager.getInstance();

                expect(instance1).toBe(instance2);
            });
        });

        describe('recover', () => {
            it('should return recovery result with zero counts when no active routes', async () => {
                const manager = CrashRecoveryManager.getInstance();

                (storageGet as any).mockResolvedValue(null);

                const result = await manager.recover();

                expect(result).toHaveProperty('recoveredRoutes');
                expect(result).toHaveProperty('failedRoutes');
                expect(result).toHaveProperty('details');
                expect(result.recoveredRoutes).toBe(0);
                expect(result.failedRoutes).toBe(0);
            });

            it('should handle recovery with active routes', async () => {
                const manager = CrashRecoveryManager.getInstance();

                (storageGet as any).mockImplementation((key: string) => {
                    if (key === 'wal:activeRoutes') {
                        return Promise.resolve(['route-1']);
                    }
                    if (key === 'route:route-1:metadata') {
                        return Promise.resolve({
                            routeId: 'route-1',
                            lastMergeTime: Date.now(),
                            unmergedCount: 0,
                            lastSequence: 0,
                            totalPoints: 0
                        });
                    }
                    if (key === 'route:route-1:log') {
                        return Promise.resolve([]);
                    }
                    return Promise.resolve(null);
                });

                const result = await manager.recover();

                expect(result).toBeDefined();
                expect(result.details).toBeInstanceOf(Array);
            });
        });
    });

    describe('CrashRecoveryManagerInstance', () => {
        it('should be exported', () => {
            expect(CrashRecoveryManagerInstance).toBeDefined();
            expect(CrashRecoveryManagerInstance).toBeInstanceOf(CrashRecoveryManager);
        });
    });
});
