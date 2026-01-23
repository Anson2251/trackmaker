import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/libs/storage', () => ({
    storageGet: () => Promise.resolve(null),
    storageSet: () => Promise.resolve(undefined)
}));

import { MergeProcessor, MergeProcessorInstance } from '../../src/libs/route-wal/merge-processor';

describe('route-wal/merge-processor', () => {
    beforeEach(() => {
        MergeProcessor.resetInstance();
    });

    describe('MergeProcessor', () => {
        describe('getInstance', () => {
            it('should return singleton instance', () => {
                const instance1 = MergeProcessor.getInstance();
                const instance2 = MergeProcessor.getInstance();
                
                expect(instance1).toBe(instance2);
            });
        });

        describe('scheduleMerge', () => {
            it('should not throw when scheduling merge', () => {
                const processor = MergeProcessor.getInstance();
                
                expect(() => processor.scheduleMerge('route-1')).not.toThrow();
            });

            it('should not throw when scheduling same route twice', () => {
                const processor = MergeProcessor.getInstance();
                
                processor.scheduleMerge('route-1');
                expect(() => processor.scheduleMerge('route-1')).not.toThrow();
            });

            it('should handle high priority update', () => {
                const processor = MergeProcessor.getInstance();
                
                processor.scheduleMerge('route-1', 'normal');
                expect(() => processor.scheduleMerge('route-1', 'high')).not.toThrow();
            });
        });

        describe('getQueueLength', () => {
            it('should return 0 for empty queue', () => {
                const processor = MergeProcessor.getInstance();
                
                expect(processor.getQueueLength()).toBe(0);
            });
        });

        describe('getMergeCount', () => {
            it('should return initial count as 0', () => {
                const processor = MergeProcessor.getInstance();
                
                expect(processor.getMergeCount()).toBe(0);
            });
        });

        describe('getLastMergeTime', () => {
            it('should return initial time as 0', () => {
                const processor = MergeProcessor.getInstance();
                
                expect(processor.getLastMergeTime()).toBe(0);
            });
        });

        describe('forceMerge', () => {
            it('should not throw when no unmerged entries', async () => {
                const processor = MergeProcessor.getInstance();
                
                await expect(processor.forceMerge('route-1')).resolves.not.toThrow();
            });
        });
    });

    describe('MergeProcessorInstance', () => {
        it('should be exported', () => {
            expect(MergeProcessorInstance).toBeDefined();
            expect(MergeProcessorInstance).toBeInstanceOf(MergeProcessor);
        });
    });
});
