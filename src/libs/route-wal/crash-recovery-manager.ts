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

    private async findBatchesForRoute(routeId: string): Promise<string[]> {
        const keys: string[] = [];
        const prefix = `route:${routeId}:batches:`;

        for (let i = 0; i < 100; i++) {
            const batch = await storageGet<MergeBatch>(`${prefix}${i}`);
            if (batch) {
                keys.push(`${i}`);
            } else {
                break;
            }
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
            throw new Error(`No metadata found for route ${routeId}`);
        }

        const log = await storageGet<RouteLogEntry[]>(`route:${routeId}:log`) || [];
        const unmergedEntries = log.filter(entry => !entry.merged);

        if (unmergedEntries.length === 0) {
            batch.status = 'completed';
            await storageSet(`route:${routeId}:batches:${batch.id}`, batch);
            return;
        }

        console.info(`[CrashRecovery] Re-executing merge for ${unmergedEntries.length} entries`);
        await MergeProcessorInstance.mergeRoute(routeId);
    }

    private async validateRouteLog(routeId: string): Promise<void> {
        const [logEntries, metadata] = await Promise.all([
            storageGet<RouteLogEntry[]>(`route:${routeId}:log`),
            WriteAheadLogManagerInstance.getMetadata(routeId)
        ]);

        if (!logEntries || !metadata) {
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

    private validateSequenceContinuity(entries: RouteLogEntry[]): void {
        for (let i = 1; i < entries.length; i++) {
            if (entries[i].sequence !== entries[i - 1].sequence + 1) {
                console.warn(`[CrashRecovery] Sequence gap detected at index ${i}: ${entries[i - 1].sequence} -> ${entries[i].sequence}`);
                this.fixSequenceGap(entries, i);
                i = 0;
            }
        }
    }

    private fixSequenceGap(entries: RouteLogEntry[], gapIndex: number): void {
        const expectedSequence = entries[gapIndex - 1].sequence + 1;
        const duplicateEntry = entries.find(e => e.sequence === expectedSequence);

        if (duplicateEntry) {
            console.info(`[CrashRecovery] Found duplicate entry at sequence ${expectedSequence}, removing duplicate`);
            const entriesToRemove: RouteLogEntry[] = [];
            let foundOriginal = false;

            for (let j = gapIndex; j < entries.length; j++) {
                if (entries[j].sequence === expectedSequence) {
                    if (!foundOriginal) {
                        foundOriginal = true;
                    } else {
                        entriesToRemove.push(entries[j]);
                    }
                }
            }

            for (const entry of entriesToRemove) {
                const idx = entries.indexOf(entry);
                if (idx !== -1) entries.splice(idx, 1);
            }
        } else {
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
