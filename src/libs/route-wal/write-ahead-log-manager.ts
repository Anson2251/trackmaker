import { storageGet, storageSet } from '../storage';
import type { RouteLogEntry, RouteLogMetadata, WALMetrics } from './types';
import { WAL_CONSTANTS } from './types';
import type { GeographicPoint } from '../geolocation/types';

export class WriteAheadLogManager {
    private writeBuffer = new Map<string, RouteLogEntry[]>();
    private flushTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
    private sequenceCache = new Map<string, number>();
    private flushingRoutes = new Set<string>();
    private metrics: WALMetrics = {
        appendLatency: [],
        mergeDuration: [],
        logSizePerRoute: {},
        failedAppends: 0,
        failedMerges: 0,
        recoveryEvents: 0,
        mergeFrequency: 0,
        compressionRatio: 1,
        memoryUsage: 0
    };

    async appendPoint(routeId: string, point: GeographicPoint): Promise<void> {
        const startTime = performance.now();

        try {
            const entry = await this.createLogEntry(routeId, point);
            this.addToBuffer(routeId, entry);

            if (this.writeBuffer.get(routeId)!.length >= WAL_CONSTANTS.FLUSH_THRESHOLD) {
                await this.flushBuffer(routeId);
            } else {
                this.scheduleFlush(routeId);
            }

            this.scheduleMerge(routeId);
        } catch (error) {
            this.metrics.failedAppends++;
            console.error(`[WAL] Failed to append point to route ${routeId}:`, error);
            throw error;
        } finally {
            const latency = performance.now() - startTime;
            this.recordAppendLatency(latency);
        }
    }

    private async createLogEntry(routeId: string, point: GeographicPoint): Promise<RouteLogEntry> {
        const sequence = await this.getNextSequence(routeId);

        return {
            id: crypto.randomUUID(),
            routeId,
            point,
            timestamp: Date.now(),
            sequence,
            merged: false
        };
    }

    private async getNextSequence(routeId: string): Promise<number> {
        if (this.sequenceCache.has(routeId)) {
            const seq = this.sequenceCache.get(routeId)! + 1;
            this.sequenceCache.set(routeId, seq);
            return seq;
        }

        const metadata = await this.getOrCreateMetadata(routeId);
        const nextSeq = metadata.lastSequence + 1;
        this.sequenceCache.set(routeId, nextSeq);
        return nextSeq;
    }

    private addToBuffer(routeId: string, entry: RouteLogEntry): void {
        if (!this.writeBuffer.has(routeId)) {
            this.writeBuffer.set(routeId, []);
        }
        this.writeBuffer.get(routeId)!.push(entry);
    }

    private scheduleFlush(routeId: string): void {
        if (this.flushTimeouts.has(routeId)) {
            const timeout = this.flushTimeouts.get(routeId)!;
            clearTimeout(timeout);
        }

        if (this.flushTimeouts.has(routeId)) {
            return;
        }

        const timeout = setTimeout(async () => {
            await this.flushBuffer(routeId);
        }, WAL_CONSTANTS.FLUSH_DELAY_MS) as unknown as number;

        this.flushTimeouts.set(routeId, timeout);
    }

    async flushBuffer(routeId: string): Promise<void> {
        const entries = this.writeBuffer.get(routeId);
        if (!entries || entries.length === 0) return;

        this.writeBuffer.delete(routeId);

        if (this.flushTimeouts.has(routeId)) {
            const timeout = this.flushTimeouts.get(routeId)!;
            clearTimeout(timeout);
            this.flushTimeouts.delete(routeId);
        }

        const currentLog = await storageGet<RouteLogEntry[]>(`route:${routeId}:log`) || [];
        const newLog = [...currentLog, ...entries];
        await storageSet(`route:${routeId}:log`, newLog);

        const metadata = await this.getOrCreateMetadata(routeId);
        metadata.unmergedCount += entries.length;
        metadata.totalPoints += entries.length;
        metadata.lastSequence = entries[entries.length - 1].sequence;
        await storageSet(`route:${routeId}:metadata`, metadata);

        await this.markRouteActive(routeId);

        this.updateLogSize(routeId, newLog.length);
    }

    private async getOrCreateMetadata(routeId: string): Promise<RouteLogMetadata> {
        const existing = await storageGet<RouteLogMetadata>(`route:${routeId}:metadata`);

        if (existing) {
            return existing;
        }

        const newMetadata: RouteLogMetadata = {
            routeId,
            lastMergeTime: Date.now(),
            unmergedCount: 0,
            lastSequence: 0,
            totalPoints: 0
        };

        await storageSet(`route:${routeId}:metadata`, newMetadata);
        return newMetadata;
    }

    private async markRouteActive(routeId: string): Promise<void> {
        const activeRoutes = await storageGet<string[]>('wal:activeRoutes') || [];
        if (!activeRoutes.includes(routeId)) {
            activeRoutes.push(routeId);
            await storageSet('wal:activeRoutes', activeRoutes);
        }
    }

    private scheduleMerge(routeId: string): void {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            this.scheduleMergeWithRetry(routeId, 0);
        }
    }

    private scheduleMergeWithRetry(routeId: string, attempt: number): void {
        import('./merge-processor').then(({ MergeProcessor }) => {
            MergeProcessor.getInstance().scheduleMerge(routeId);
        }).catch((err: unknown) => {
            console.warn(`[WAL] Could not schedule merge for route ${routeId} (attempt ${attempt + 1}):`, err);
            if (attempt < WAL_CONSTANTS.MAX_RETRIES) {
                setTimeout(() => {
                    this.scheduleMergeWithRetry(routeId, attempt + 1);
                }, WAL_CONSTANTS.RETRY_BASE_DELAY_MS * Math.pow(2, attempt));
            } else {
                console.error(`[WAL] Failed to schedule merge for route ${routeId} after ${WAL_CONSTANTS.MAX_RETRIES} attempts`);
                this.metrics.failedMerges++;
            }
        });
    }

    async getUnmergedEntries(routeId: string): Promise<RouteLogEntry[]> {
        const log = await storageGet<RouteLogEntry[]>(`route:${routeId}:log`) || [];
        return log.filter(entry => !entry.merged);
    }

    async markEntriesAsMerged(routeId: string, entries: RouteLogEntry[]): Promise<void> {
        const log = await storageGet<RouteLogEntry[]>(`route:${routeId}:log`) || [];
        const entryIds = new Set(entries.map(e => e.id));

        for (const entry of log) {
            if (entryIds.has(entry.id)) {
                entry.merged = true;
            }
        }

        await storageSet(`route:${routeId}:log`, log);
    }

    async cleanupMergedEntries(routeId: string): Promise<void> {
        const log = await storageGet<RouteLogEntry[]>(`route:${routeId}:log`) || [];
        const unmergedOnly = log.filter(entry => !entry.merged);

        if (unmergedOnly.length < log.length) {
            await storageSet(`route:${routeId}:log`, unmergedOnly);
            this.updateLogSize(routeId, unmergedOnly.length);
        }
    }

    private updateLogSize(routeId: string, size: number): void {
        this.metrics.logSizePerRoute[routeId] = size;
    }

    private recordAppendLatency(latency: number): void {
        this.metrics.appendLatency.push(latency);
        if (this.metrics.appendLatency.length > WAL_CONSTANTS.MAX_LATENCY_SAMPLES) {
            this.metrics.appendLatency = this.metrics.appendLatency.slice(-WAL_CONSTANTS.MAX_LATENCY_SAMPLES);
        }
    }

    getMetrics(): WALMetrics {
        return { ...this.metrics };
    }

    getBufferSize(routeId: string): number {
        return this.writeBuffer.get(routeId)?.length || 0;
    }

    async getMetadata(routeId: string): Promise<RouteLogMetadata | null> {
        return storageGet<RouteLogMetadata>(`route:${routeId}:metadata`);
    }
}

export const WriteAheadLogManagerInstance = new WriteAheadLogManager();
