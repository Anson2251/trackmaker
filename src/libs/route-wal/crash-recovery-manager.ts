import { storageGet, storageSet } from '../storage';
import { WriteAheadLogManagerInstance } from './write-ahead-log-manager';
import { MergeProcessorInstance } from './merge-processor';
import type { MergeBatch, RouteLogEntry } from './types';

export class CrashRecoveryManager {
    private static instance: CrashRecoveryManager;

    private constructor() { }

    static getInstance(): CrashRecoveryManager {
        if (!CrashRecoveryManager.instance) {
            CrashRecoveryManager.instance = new CrashRecoveryManager();
        }
        return CrashRecoveryManager.instance;
    }

    async recover(): Promise<{ recoveredRoutes: number; failedRoutes: number; details: string[] }> {
        console.info('[CrashRecovery] Starting recovery process...');

        const details: string[] = [];
        let recoveredRoutes = 0;
        let failedRoutes = 0;

        try {
            const pendingBatches = await this.findPendingBatches();

            for (const batch of pendingBatches) {
                try {
                    await this.recoverMerge(batch.routeId, batch.id);
                    recoveredRoutes++;
                    details.push(`Route ${batch.routeId}: recovered merge ${batch.id}`);
                } catch (error) {
                    failedRoutes++;
                    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                    details.push(`Route ${batch.routeId}: failed to recover merge - ${errorMessage}`);
                    console.error(`[CrashRecovery] Failed to recover merge for route ${batch.routeId}:`, error);
                }
            }

            const activeRoutes = await storageGet<string[]>('wal:activeRoutes') || [];

            for (const routeId of activeRoutes) {
                try {
                    await this.validateRouteLog(routeId);
                } catch (error) {
                    failedRoutes++;
                    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                    details.push(`Route ${routeId}: validation failed - ${errorMessage}`);
                    console.error(`[CrashRecovery] Failed to validate route ${routeId}:`, error);
                }
            }

            await this.rebuildStatistics();

            console.info(`[CrashRecovery] Recovery complete: ${recoveredRoutes} recovered, ${failedRoutes} failed`);
        } catch (error) {
            console.error('[CrashRecovery] Fatal error during recovery:', error);
            details.push(`Fatal error: ${String(error)}`);
        }

        return { recoveredRoutes, failedRoutes, details };
    }

    private async findPendingBatches(): Promise<MergeBatch[]> {
        const activeRoutes = await storageGet<string[]>('wal:activeRoutes') || [];
        const pendingBatches: MergeBatch[] = [];

        for (const routeId of activeRoutes) {
            const metadata = await WriteAheadLogManagerInstance.getMetadata(routeId);
            if (!metadata) continue;

            if (metadata.unmergedCount > 0) {
                const batchKeys = await this.findBatchesForRoute(routeId);
                for (const batchId of batchKeys) {
                    const batch = await storageGet<MergeBatch>(`route:${routeId}:batches:${batchId}`);
                    if (batch && batch.status === 'pending') {
                        pendingBatches.push(batch);
                    }
                }
            }
        }

        return pendingBatches;
    }

    /**
     * Find all batches for a route.
     * Instead of assuming a sequential numbering scheme, scan for all batch keys.
     */
    private async findBatchesForRoute(routeId: string): Promise<string[]> {
        const keys: string[] = [];
        const prefix = `route:${routeId}:batches:`;

        // Try up to 1000 batch IDs (well beyond typical usage)
        // In production, a better approach would be to maintain an index
        const maxBatchScan = 1000;
        let consecutiveNulls = 0;
        const maxConsecutiveNulls = 10; // Stop if we find 10 consecutive empty slots

        for (let i = 0; i < maxBatchScan && consecutiveNulls < maxConsecutiveNulls; i++) {
            const batch = await storageGet<MergeBatch>(`${prefix}${i}`);
            if (batch) {
                keys.push(`${i}`);
                consecutiveNulls = 0; // Reset counter on successful find
            } else {
                consecutiveNulls++;
            }
        }

        if (keys.length > 0) {
            console.debug(`[CrashRecovery] Found ${keys.length} batch(es) for route ${routeId}`);
        }

        return keys;
    }

    private async recoverMerge(routeId: string, batchId: string): Promise<void> {
        console.info(`[CrashRecovery] Recovering merge for route ${routeId}, batch ${batchId}`);

        const batch = await storageGet<MergeBatch>(`route:${routeId}:batches:${batchId}`);
        if (!batch || batch.status !== 'pending') {
            return;
        }

        const metadata = await WriteAheadLogManagerInstance.getMetadata(routeId);
        if (!metadata) {
            batch.status = 'failed';
            batch.error = `No metadata found for route ${routeId}`;
            await storageSet(`route:${routeId}:batches:${batch.id}`, batch);
            throw new Error(batch.error);
        }

        const log = await storageGet<RouteLogEntry[]>(`route:${routeId}:log`) || [];
        const unmergedEntries = log.filter(entry => !entry.merged);

        if (unmergedEntries.length === 0) {
            batch.status = 'completed';
            await storageSet(`route:${routeId}:batches:${batch.id}`, batch);
            return;
        }

        try {
            console.info(`[CrashRecovery] Re-executing merge for ${unmergedEntries.length} entries`);
            await MergeProcessorInstance.mergeRoute(routeId);
            
            // After successful merge, mark batch as completed
            batch.status = 'completed';
            await storageSet(`route:${routeId}:batches:${batch.id}`, batch);
        } catch (error) {
            // Mark batch as failed with error details
            batch.status = 'failed';
            batch.error = error instanceof Error ? error.message : 'Unknown error during merge recovery';
            await storageSet(`route:${routeId}:batches:${batch.id}`, batch);
            throw error;
        }
    }

    private async validateRouteLog(routeId: string): Promise<void> {
        const [logEntries, metadata] = await Promise.all([
            storageGet<RouteLogEntry[]>(`route:${routeId}:log`),
            WriteAheadLogManagerInstance.getMetadata(routeId)
        ]);

        if (!logEntries || !metadata || !Array.isArray(logEntries)) {
            console.warn(`[CrashRecovery] Corrupted or missing data for route ${routeId}, attempting rebuild`);
            await this.rebuildRouteLog(routeId);
            return;
        }

        const unmergedCount = logEntries.filter(entry => !entry.merged).length;

        if (unmergedCount !== metadata.unmergedCount) {
            console.warn(`[CrashRecovery] Count mismatch for route ${routeId}: expected ${metadata.unmergedCount}, found ${unmergedCount}`);
            metadata.unmergedCount = unmergedCount;
            await storageSet(`route:${routeId}:metadata`, metadata);
        }

        const allEntries = [...logEntries].sort((a, b) => a.sequence - b.sequence);
        this.validateSequenceContinuity(allEntries);
    }

    /**
     * Validate and fix sequence continuity in a single pass (O(n) complexity).
     * Uses set tracking to detect duplicates efficiently.
     */
    private validateSequenceContinuity(entries: RouteLogEntry[]): void {
        if (entries.length === 0) return;

        // Build a sequence map for O(1) lookups
        const sequenceMap = new Map<number, RouteLogEntry[]>();
        for (const entry of entries) {
            if (!sequenceMap.has(entry.sequence)) {
                sequenceMap.set(entry.sequence, []);
            }
            sequenceMap.get(entry.sequence)!.push(entry);
        }

        // Check for gaps and duplicates in a single pass
        const problemIndices: number[] = [];
        for (let i = 1; i < entries.length; i++) {
            const currentSeq = entries[i].sequence;
            const prevSeq = entries[i - 1].sequence;

            if (currentSeq !== prevSeq + 1) {
                console.warn(`[CrashRecovery] Sequence issue at index ${i}: ${prevSeq} -> ${currentSeq}`);
                problemIndices.push(i);
            }
        }

        // Fix problems in reverse order to avoid index shifting issues
        for (let i = problemIndices.length - 1; i >= 0; i--) {
            const gapIndex = problemIndices[i];
            this.fixSequenceGap(entries, gapIndex, sequenceMap);
        }
    }

    /**
     * Fix a single sequence gap efficiently.
     */
    private fixSequenceGap(
        entries: RouteLogEntry[],
        gapIndex: number,
        sequenceMap: Map<number, RouteLogEntry[]>
    ): void {
        const expectedSequence = entries[gapIndex - 1].sequence + 1;
        const duplicates = sequenceMap.get(expectedSequence);

        if (duplicates && duplicates.length > 1) {
            console.info(`[CrashRecovery] Found ${duplicates.length} entries with sequence ${expectedSequence}, keeping first`);
            // Keep first occurrence, remove others
            const toKeep = duplicates[0];
            const toRemove = duplicates.slice(1);
            
            for (const entry of toRemove) {
                const idx = entries.indexOf(entry);
                if (idx !== -1) {
                    entries.splice(idx, 1);
                }
            }
        } else if (!duplicates || duplicates.length === 0) {
            console.info(`[CrashRecovery] Inserting placeholder entry for missing sequence ${expectedSequence}`);
            const placeholder: RouteLogEntry = {
                id: crypto.randomUUID(),
                routeId: entries[0].routeId,
                point: entries[gapIndex - 1].point,
                timestamp: Date.now(),
                sequence: expectedSequence,
                merged: false
            };
            entries.splice(gapIndex, 0, placeholder);
            // Update sequence map for next iteration if needed
            sequenceMap.set(expectedSequence, [placeholder]);
        }
    }

    private async rebuildRouteLog(routeId: string): Promise<void> {
        console.info(`[CrashRecovery] Rebuilding route log for ${routeId}`);

        const metadata = await WriteAheadLogManagerInstance.getMetadata(routeId);
        if (metadata) {
            metadata.unmergedCount = 0;
            metadata.lastSequence = 0;
            await storageSet(`route:${routeId}:metadata`, metadata);
        }

        await storageSet(`route:${routeId}:log`, []);
    }

    private async rebuildStatistics(): Promise<void> {
        const activeRoutes = await storageGet<string[]>('wal:activeRoutes') || [];
        let totalLogSize = 0;

        for (const routeId of activeRoutes) {
            const log = await storageGet<RouteLogEntry[]>(`route:${routeId}:log`) || [];
            totalLogSize += log.length;
        }

        await storageSet('wal:lastMergeTime', Date.now());
        await storageSet('wal:statistics', {
            writesPerSecond: 0,
            averageLogSize: activeRoutes.length > 0 ? totalLogSize / activeRoutes.length : 0,
            mergeDuration: 0
        });
    }
}

export const CrashRecoveryManagerInstance = CrashRecoveryManager.getInstance();
