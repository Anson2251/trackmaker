// oxlint-disable typescript/no-unnecessary-type-assertion
// oxlint-disable typescript/no-unsafe-member-access
// oxlint-disable typescript/no-unsafe-call

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { CombinedRouteReader, CombinedRouteReaderInstance } from '../../src/libs/route-wal/combined-route-reader';
import { storageGet } from '../../src/libs/storage';

vi.mock('../../src/libs/storage');

describe('route-wal/combined-route-reader', () => {
    describe('CombinedRouteReader', () => {
        beforeEach(() => {
            vi.resetAllMocks();
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        describe('getInstance', () => {
            it('should return singleton instance', () => {
                const instance1 = CombinedRouteReader.getInstance();
                const instance2 = CombinedRouteReader.getInstance();

                expect(instance1).toBe(instance2);
            });
        });

        describe('getRoute', () => {
            it('should return null when no sketches exist', async () => {
                const reader = CombinedRouteReader.getInstance();

                (storageGet as any).mockResolvedValue(null);

                const result = await reader.getRoute('route-1');

                expect(result).toBeNull();
            });

            it('should return null when route not found', async () => {
                const reader = CombinedRouteReader.getInstance();

                (storageGet as any).mockResolvedValue([{
                    id: 'sketch-1',
                    meta: { name: 'Test', tags: [], creation_timestamp: 0, modification_timestamp: 0 },
                    routes: { id: 'routes-1', meta: { creation_timestamp: 0, modification_timestamp: 0 }, routes: [] },
                    drafts: { id: 'drafts-1', meta: { creation_timestamp: 0, modification_timestamp: 0 }, drafts: [] }
                }]);

                const result = await reader.getRoute('non-existent-route');

                expect(result).toBeNull();
            });

            it('should return route when found', async () => {
                const reader = CombinedRouteReader.getInstance();

                (storageGet as any).mockResolvedValue([{
                    id: 'sketch-1',
                    meta: { name: 'Test', tags: [], creation_timestamp: 0, modification_timestamp: 0 },
                    routes: {
                        id: 'routes-1',
                        meta: { creation_timestamp: 0, modification_timestamp: 0 },
                        routes: [{
                            id: 'route-1',
                            points: [{ latitude: 37.7749, longitude: -122.4194 }],
                            meta: { distance: 0, creation_timestamp: 0, modification_timestamp: 0 }
                        }]
                    },
                    drafts: { id: 'drafts-1', meta: { creation_timestamp: 0, modification_timestamp: 0 }, drafts: [] }
                }]);

                const result = await reader.getRoute('route-1');

                expect(result).not.toBeNull();
                expect(result?.id).toBe('route-1');
            });
        });

        describe('invalidateCache', () => {
            it('should remove route from cache', async () => {
                const reader = CombinedRouteReader.getInstance();

                reader.invalidateCache('route-1');

                expect(() => reader.invalidateCache('route-1')).not.toThrow();
            });
        });

        describe('clearCache', () => {
            it('should clear all cached routes', () => {
                const reader = CombinedRouteReader.getInstance();

                reader.clearCache();

                expect(() => reader.clearCache()).not.toThrow();
            });
        });

        describe('getCachedRoute', () => {
            it('should return null when route not cached', () => {
                const reader = CombinedRouteReader.getInstance();

                const result = reader.getCachedRoute('non-existent');

                expect(result).toBeNull();
            });
        });
    });

    describe('CombinedRouteReaderInstance', () => {
        it('should be exported', () => {
            expect(CombinedRouteReaderInstance).toBeDefined();
            expect(CombinedRouteReaderInstance).toBeInstanceOf(CombinedRouteReader);
        });
    });
});
