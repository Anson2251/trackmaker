import { storageGet, storageSet } from '../storage';
import type { RouteLogEntry, RouteLogMetadata, WALMetrics } from './types';
import {
    WAL_CONSTANTS,
    createRouteLogEntry,
    validateRouteLogEntry,
    validateRouteLogMetadata
} from './types';
import type { GeographicPoint } from '../geolocation/types';
import { MergeProcessor } from './merge-processor';

/**
 * Simple async mutex for per-route locking.
 * Safe for single-threaded JavaScript environments.
 */
class AsyncMutex {
    private locks = new Map<string, Promise<void>>();

    acquire(key: string): Promise<() => void> {
        return new Promise((resolveAcquire) => {
            const checkLock = () => {
                if (!this.locks.has(key)) {
                    let release!: () => void;
                    const lockPromise = new Promise<void>((resolve) => {
                        release = () => {
                            this.locks.delete(key);
                            resolve();
                        };
                    });

                    this.locks.set(key, lockPromise);
                    resolveAcquire(release);
                }
            };

            checkLock();
            if (this.locks.has(key)) {
                const interval = setInterval(() => {
                    if (!this.locks.has(key)) {
                        clearInterval(interval);
                        checkLock();
                    }
                }, 0);
            }
        });
    }

    /**
     * Check if a lock exists.
     * WARNING: This is racy and should only be used for diagnostics/metrics,
     * never for control flow decisions.
     */
    isLocked(key: string): boolean {
        return this.locks.has(key);
    }
}

/**
 * Ring buffer for fixed-size latency tracking
 */
class RingBuffer<T> {
    private buffer: T[];
    private index = 0;
    private isFull = false;

    constructor(private readonly capacity: number) {
        this.buffer = [];
    }

    push(item: T): void {
        if (this.buffer.length < this.capacity) {
            this.buffer.push(item);
        } else {
            this.buffer[this.index] = item;
            this.index = (this.index + 1) % this.capacity;
            this.isFull = true;
        }
    }

    toArray(): T[] {
        if (!this.isFull) {
            return [...this.buffer];
        }
        return [
            ...this.buffer.slice(this.index),
            ...this.buffer.slice(0, this.index)
        ];
    }

    get length(): number {
        return this.buffer.length;
    }

    clear(): void {
        this.buffer = [];
        this.index = 0;
        this.isFull = false;
    }
}

const EMERGENCY_FLUSH_PREFIX = 'wal:emergency:';

export class WriteAheadLogManager {
    private writeBuffer = new Map<string, RouteLogEntry[]>();

    private sequenceCache = new Map<string, number>();
    private sequenceInitPromises = new Map<string, Promise<void>>();

    private flushMutex = new AsyncMutex();
    private storageMutex = new AsyncMutex();

    private pendingOperations = new Set<Promise<unknown>>();
    private pendingVisibilityFlush: Promise<void> | null = null;

    private mergeProcessor: MergeProcessor | null = null;

    private appendLatencyBuffer = new RingBuffer<number>(WAL_CONSTANTS.MAX_LATENCY_SAMPLES);
    private mergeDurationBuffer = new RingBuffer<number>(WAL_CONSTANTS.MAX_LATENCY_SAMPLES);

    private metrics: Omit<WALMetrics, 'appendLatency' | 'mergeDuration'> & {
        logSizePerRoute: Record<string, number>;
    } = {
        logSizePerRoute: {},
        failedAppends: 0,
        failedMerges: 0,
        recoveryEvents: 0,
        mergeFrequency: 0,
        compressionRatio: 1,
        memoryUsage: 0
    };

    private periodicFlushInterval: ReturnType<typeof setInterval> | null = null;
    private isShuttingDown = false;

    constructor() {
        this.setupLifecycleHandlers();
        this.mergeProcessor = MergeProcessor.getInstance();
    }

    private setupLifecycleHandlers(): void {
        if (typeof window === 'undefined') return;

        this.recoverEmergencyFlush().catch(console.error);

        this.periodicFlushInterval = setInterval(
            () => this.flushAllBuffers(),
            WAL_CONSTANTS.FLUSH_DELAY_MS
        );

        window.addEventListener('beforeunload', this.handleBeforeUnload);
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    private handleBeforeUnload = (_event: BeforeUnloadEvent): void => {
        if (this.getTotalBufferSize() > 0) {
            this.flushAllBuffersSync();
        }
    };

    private handleVisibilityChange = (): void => {
        if (document.visibilityState === 'hidden' && !this.pendingVisibilityFlush) {
            this.pendingVisibilityFlush = this.flushAllBuffers()
                .catch(console.error)
                .finally(() => {
                    this.pendingVisibilityFlush = null;
                });
        }
    };

    async appendPoint(routeId: string, point: GeographicPoint): Promise<void> {
        this.validateAppendInput(routeId, point);

        if (this.isShuttingDown) {
            throw new Error('WAL is shutting down');
        }

        const operation = this.doAppendPoint(routeId, point);
        this.pendingOperations.add(operation);

        try {
            await operation;
        } finally {
            this.pendingOperations.delete(operation);
        }
    }

    private async doAppendPoint(routeId: string, point: GeographicPoint): Promise<void> {
        const startTime = performance.now();

        try {
            const entry = await this.createLogEntry(routeId, point);
            this.addToBuffer(routeId, entry);

            const bufferSize = this.getBufferSize(routeId);
            if (bufferSize >= WAL_CONSTANTS.FLUSH_THRESHOLD) {
                await this.flushBuffer(routeId);
            }

            this.scheduleMerge(routeId);
        } catch (error) {
            this.metrics.failedAppends++;
            console.error(`[WAL] Failed to append point to route ${routeId}:`, error);
            throw error;
        } finally {
            const latency = performance.now() - startTime;
            this.appendLatencyBuffer.push(latency);
        }
    }

    private validateAppendInput(routeId: string, point: GeographicPoint): void {
        if (!routeId || typeof routeId !== 'string' || routeId.trim() === '') {
            throw new Error('Invalid routeId: must be a non-empty string');
        }

        if (!point || typeof point !== 'object') {
            throw new Error('Invalid point: must be an object');
        }

        if (typeof point.latitude !== 'number' || !Number.isFinite(point.latitude)) {
            throw new Error('Invalid point.latitude: must be a finite number');
        }

        if (typeof point.longitude !== 'number' || !Number.isFinite(point.longitude)) {
            throw new Error('Invalid point.longitude: must be a finite number');
        }

        if (point.latitude < -90 || point.latitude > 90) {
            throw new Error('Invalid point.latitude: must be between -90 and 90');
        }

        if (point.longitude < -180 || point.longitude > 180) {
            throw new Error('Invalid point.longitude: must be between -180 and 180');
        }
    }

    private async createLogEntry(routeId: string, point: GeographicPoint): Promise<RouteLogEntry> {
        const sequence = await this.getNextSequence(routeId);
        return createRouteLogEntry(routeId, point, sequence);
    }

    /**
     * Get next sequence number with proper initialization deduplication.
     * Cleans up promise cache on both success and failure to allow retries.
     */
    private async getNextSequence(routeId: string): Promise<number> {
        if (this.sequenceCache.has(routeId)) {
            const seq = this.sequenceCache.get(routeId)! + 1;
            this.sequenceCache.set(routeId, seq);
            return seq;
        }

        if (!this.sequenceInitPromises.has(routeId)) {
            const initPromise = this.initializeSequence(routeId)
                .finally(() => {
                    this.sequenceInitPromises.delete(routeId);
                });
            this.sequenceInitPromises.set(routeId, initPromise);
        }

        await this.sequenceInitPromises.get(routeId)!;

        const seq = this.sequenceCache.get(routeId)! + 1;
        this.sequenceCache.set(routeId, seq);
        return seq;
    }

    private async initializeSequence(routeId: string): Promise<void> {
        const metadata = await this.getOrCreateMetadata(routeId);
        this.sequenceCache.set(routeId, metadata.lastSequence);
    }

    private addToBuffer(routeId: string, entry: RouteLogEntry): void {
        if (!this.writeBuffer.has(routeId)) {
            this.writeBuffer.set(routeId, []);
        }
        this.writeBuffer.get(routeId)!.push(entry);
    }

    async flushBuffer(routeId: string): Promise<void> {
        const release = await this.flushMutex.acquire(routeId);

        try {
            await this.doFlush(routeId);
        } finally {
            release();
        }
    }

    /**
     * Internal flush implementation.
     * Designed for eventual consistency: log write is authoritative,
     * metadata can be reconciled from log if update fails.
     */
    private async doFlush(routeId: string): Promise<void> {
        const buffer = this.writeBuffer.get(routeId);
        if (!buffer || buffer.length === 0) return;

        const entriesToFlush = buffer.splice(0, buffer.length);
        if (entriesToFlush.length === 0) return;

        try {
            const storageRelease = await this.storageMutex.acquire(`route:${routeId}`);

            try {
                const currentLog = await this.safeGetLog(routeId);
                const newLog = [...currentLog, ...entriesToFlush];

                await storageSet(`route:${routeId}:log`, newLog);

                // Metadata update is best-effort; can be reconciled from log
                try {
                    const metadata = await this.getOrCreateMetadata(routeId);
                    metadata.unmergedCount += entriesToFlush.length;
                    metadata.totalPoints += entriesToFlush.length;
                    metadata.lastSequence = entriesToFlush[entriesToFlush.length - 1].sequence;
                    await storageSet(`route:${routeId}:metadata`, metadata);
                } catch (metadataError) {
                    console.warn(`[WAL] Metadata update failed for route ${routeId}, will reconcile:`, metadataError);
                    this.metrics.recoveryEvents++;
                }

                try {
                    await this.markRouteActive(routeId);
                } catch (activeError) {
                    console.warn(`[WAL] Failed to mark route ${routeId} as active:`, activeError);
                }

                this.updateLogSize(routeId, newLog.length);
            } finally {
                storageRelease();
            }
        } catch (error) {
            const currentBuffer = this.writeBuffer.get(routeId) ?? [];
            this.writeBuffer.set(routeId, [...entriesToFlush, ...currentBuffer]);
            throw error;
        }
    }

    private async safeStorageGet<T>(key: string): Promise<T | null> {
        try {
            return await storageGet<T>(key);
        } catch (error) {
            console.error(`[WAL] Failed to read from storage key ${key}:`, error);
            return null;
        }
    }

    /**
     * Safely get and validate log entries from storage.
     * Filters out corrupted entries and returns only valid ones.
     */
    private async safeGetLog(routeId: string): Promise<RouteLogEntry[]> {
        const data = await this.safeStorageGet<unknown>(`route:${routeId}:log`);

        if (data === null) {
            return [];
        }

        if (!Array.isArray(data)) {
            console.warn(`[WAL] Corrupted log for route ${routeId}: not an array`);
            this.metrics.recoveryEvents++;
            return [];
        }

        const validEntries: RouteLogEntry[] = [];
        for (const entry of data) {
            try {
                validEntries.push(validateRouteLogEntry(entry));
            } catch {
                this.metrics.recoveryEvents++;
            }
        }

        return validEntries;
    }

    private async getOrCreateMetadata(routeId: string): Promise<RouteLogMetadata> {
        const existing = await storageGet<RouteLogMetadata>(`route:${routeId}:metadata`);

        if (existing) {
            try {
                return validateRouteLogMetadata(existing);
            } catch {
                console.warn(`[WAL] Invalid metadata for route ${routeId}, recreating`);
                this.metrics.recoveryEvents++;
            }
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
        const release = await this.storageMutex.acquire('wal:activeRoutes');

        try {
            const activeRoutes = await storageGet<string[]>('wal:activeRoutes') ?? [];
            if (!activeRoutes.includes(routeId)) {
                activeRoutes.push(routeId);
                await storageSet('wal:activeRoutes', activeRoutes);
            }
        } finally {
            release();
        }
    }

    private scheduleMerge(routeId: string): void {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }
        this.scheduleMergeWithRetry(routeId, 0);
    }

    private scheduleMergeWithRetry(routeId: string, attempt: number): void {
        if (this.mergeProcessor) {
            this.mergeProcessor.scheduleMerge(routeId);
        }
        else {
            console.warn(
                `[WAL] Could not schedule merge for route ${routeId} (attempt ${attempt + 1}):`,
                "merge processor not initialized"
            );

            if (attempt < WAL_CONSTANTS.MAX_RETRIES) {
                const delay = WAL_CONSTANTS.RETRY_BASE_DELAY_MS * Math.pow(2, attempt);
                setTimeout(() => {
                    this.scheduleMergeWithRetry(routeId, attempt + 1);
                }, delay);
            } else {
                console.error(
                    `[WAL] Failed to schedule merge for route ${routeId} after ${WAL_CONSTANTS.MAX_RETRIES} attempts`
                );
                this.metrics.failedMerges++;
            }
        }
    }

    async flushAllBuffers(): Promise<void> {
        const routeIds = Array.from(this.writeBuffer.keys());

        await Promise.allSettled(
            routeIds.map(routeId => this.flushBuffer(routeId))
        );
    }

    /**
     * Synchronous flush for beforeunload using localStorage.
     * Data is recovered on next startup via recoverEmergencyFlush().
     */
    private flushAllBuffersSync(): void {
        if (typeof localStorage === 'undefined') {
            return;
        }

        for (const [routeId, buffer] of this.writeBuffer.entries()) {
            if (buffer.length === 0) continue;

            try {
                const key = `${EMERGENCY_FLUSH_PREFIX}${routeId}`;
                const existingData = localStorage.getItem(key);
                const existing: RouteLogEntry[] = existingData ? JSON.parse(existingData) : [];
                const combined = [...existing, ...buffer];

                const data = JSON.stringify(combined);
                if (data.length < 1024 * 1024) {
                    localStorage.setItem(key, data);
                } else {
                    const truncated = combined.slice(-100);
                    localStorage.setItem(key, JSON.stringify(truncated));
                    console.warn(`[WAL] Emergency flush truncated for route ${routeId}`);
                }
            } catch (e) {
                console.error('[WAL] Emergency flush failed for route', routeId, e);
            }
        }
    }

    /**
     * Recover emergency flush data from localStorage.
     * Called on startup to restore data from previous session crashes.
     */
    private async recoverEmergencyFlush(): Promise<void> {
        if (typeof localStorage === 'undefined') {
            return;
        }

        const keysToProcess: string[] = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key?.startsWith(EMERGENCY_FLUSH_PREFIX)) {
                keysToProcess.push(key);
            }
        }

        for (const key of keysToProcess) {
            const routeId = key.slice(EMERGENCY_FLUSH_PREFIX.length);

            try {
                const data = localStorage.getItem(key);
                if (!data) continue;

                const entries: unknown[] = JSON.parse(data);
                const validEntries: RouteLogEntry[] = [];

                for (const entry of entries) {
                    try {
                        validEntries.push(validateRouteLogEntry(entry));
                    } catch {
                        // Skip invalid entries
                    }
                }

                if (validEntries.length > 0) {
                    const release = await this.storageMutex.acquire(`route:${routeId}`);
                    try {
                        const currentLog = await this.safeGetLog(routeId);
                        const existingIds = new Set(currentLog.map(e => e.id));
                        const newEntries = validEntries.filter(e => !existingIds.has(e.id));

                        if (newEntries.length > 0) {
                            const mergedLog = [...currentLog, ...newEntries];
                            mergedLog.sort((a, b) => a.sequence - b.sequence);
                            await storageSet(`route:${routeId}:log`, mergedLog);

                            console.log(`[WAL] Recovered ${newEntries.length} entries for route ${routeId}`);
                            this.metrics.recoveryEvents++;
                        }
                    } finally {
                        release();
                    }
                }

                localStorage.removeItem(key);
            } catch (error) {
                console.error(`[WAL] Failed to recover emergency data for ${key}:`, error);
                localStorage.removeItem(key);
            }
        }
    }

    async getUnmergedEntries(routeId: string): Promise<RouteLogEntry[]> {
        const release = await this.storageMutex.acquire(`route:${routeId}`);

        try {
            const log = await this.safeGetLog(routeId);
            return log.filter(entry => !entry.merged);
        } finally {
            release();
        }
    }

    async markEntriesAsMerged(routeId: string, entries: RouteLogEntry[]): Promise<void> {
        if (entries.length === 0) return;

        const release = await this.storageMutex.acquire(`route:${routeId}`);

        try {
            const log = await this.safeGetLog(routeId);
            const entryIds = new Set(entries.map(e => e.id));

            let mergedCount = 0;
            for (const entry of log) {
                if (entryIds.has(entry.id) && !entry.merged) {
                    entry.merged = true;
                    mergedCount++;
                }
            }

            await storageSet(`route:${routeId}:log`, log);

            const metadata = await this.getOrCreateMetadata(routeId);
            metadata.unmergedCount = Math.max(0, metadata.unmergedCount - mergedCount);
            metadata.lastMergeTime = Date.now();
            await storageSet(`route:${routeId}:metadata`, metadata);
        } finally {
            release();
        }
    }

    async cleanupMergedEntries(routeId: string): Promise<void> {
        const release = await this.storageMutex.acquire(`route:${routeId}`);

        try {
            const log = await this.safeGetLog(routeId);
            const unmergedOnly = log.filter(entry => !entry.merged);

            if (unmergedOnly.length < log.length) {
                await storageSet(`route:${routeId}:log`, unmergedOnly);
                this.updateLogSize(routeId, unmergedOnly.length);

                const metadata = await this.getOrCreateMetadata(routeId);
                metadata.unmergedCount = unmergedOnly.length;
                await storageSet(`route:${routeId}:metadata`, metadata);
            }
        } finally {
            release();
        }
    }

    /**
     * Clean up all state for a route.
     * Call when a route is permanently deleted.
     */
    async cleanupRoute(routeId: string): Promise<void> {
        const release = await this.storageMutex.acquire(`route:${routeId}`);

        try {
            this.sequenceCache.delete(routeId);
            this.writeBuffer.delete(routeId);
            delete this.metrics.logSizePerRoute[routeId];

            const activeRelease = await this.storageMutex.acquire('wal:activeRoutes');
            try {
                const activeRoutes = await storageGet<string[]>('wal:activeRoutes') ?? [];
                const filtered = activeRoutes.filter(id => id !== routeId);
                if (filtered.length !== activeRoutes.length) {
                    await storageSet('wal:activeRoutes', filtered);
                }
            } finally {
                activeRelease();
            }
        } finally {
            release();
        }
    }

    private updateLogSize(routeId: string, size: number): void {
        this.metrics.logSizePerRoute[routeId] = size;
        this.updateMemoryUsage();
    }

    private updateMemoryUsage(): void {
        let totalBufferSize = 0;
        for (const buffer of this.writeBuffer.values()) {
            totalBufferSize += buffer.length;
        }
        this.metrics.memoryUsage = totalBufferSize * 200;
    }

    recordMergeDuration(duration: number): void {
        this.mergeDurationBuffer.push(duration);
    }

    getMetrics(): WALMetrics {
        return {
            appendLatency: this.appendLatencyBuffer.toArray(),
            mergeDuration: this.mergeDurationBuffer.toArray(),
            logSizePerRoute: { ...this.metrics.logSizePerRoute },
            failedAppends: this.metrics.failedAppends,
            failedMerges: this.metrics.failedMerges,
            recoveryEvents: this.metrics.recoveryEvents,
            mergeFrequency: this.metrics.mergeFrequency,
            compressionRatio: this.metrics.compressionRatio,
            memoryUsage: this.metrics.memoryUsage
        };
    }

    getBufferSize(routeId: string): number {
        return this.writeBuffer.get(routeId)?.length ?? 0;
    }

    getTotalBufferSize(): number {
        let total = 0;
        for (const buffer of this.writeBuffer.values()) {
            total += buffer.length;
        }
        return total;
    }

    async getMetadata(routeId: string): Promise<RouteLogMetadata | null> {
        const metadata = await storageGet<RouteLogMetadata>(`route:${routeId}:metadata`);
        if (!metadata) return null;

        try {
            return validateRouteLogMetadata(metadata);
        } catch {
            return null;
        }
    }

    hasPendingWrites(routeId: string): boolean {
        const buffer = this.writeBuffer.get(routeId);
        return buffer !== undefined && buffer.length > 0;
    }

    /**
     * Check if any flush is in progress for a route.
     * WARNING: This is racy and should only be used for diagnostics.
     */
    isFlushInProgress(routeId: string): boolean {
        return this.flushMutex.isLocked(routeId);
    }

    async shutdown(): Promise<void> {
        this.isShuttingDown = true;

        if (this.periodicFlushInterval) {
            clearInterval(this.periodicFlushInterval);
            this.periodicFlushInterval = null;
        }

        if (typeof window !== 'undefined') {
            window.removeEventListener('beforeunload', this.handleBeforeUnload);
        }
        if (typeof document !== 'undefined') {
            document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        }

        // Wait for pending operations before flushing
        if (this.pendingOperations.size > 0) {
            await Promise.allSettled(this.pendingOperations);
        }

        if (this.pendingVisibilityFlush) {
            await this.pendingVisibilityFlush;
        }

        await this.flushAllBuffers();

        this.sequenceCache.clear();
        this.sequenceInitPromises.clear();
        this.writeBuffer.clear();
        this.mergeProcessor = null;
        this.appendLatencyBuffer.clear();
        this.mergeDurationBuffer.clear();
    }

    /**
     * Recovery: Scan for orphaned or corrupted data.
     * Reconciles metadata with actual log contents.
     * Must be called with no concurrent operations for consistency.
     */
    async performRecovery(): Promise<{ routesRecovered: number; entriesRemoved: number }> {
        const activeRoutes = await storageGet<string[]>('wal:activeRoutes') ?? [];
        let routesRecovered = 0;
        let entriesRemoved = 0;

        for (const routeId of activeRoutes) {
            const release = await this.storageMutex.acquire(`route:${routeId}`);

            try {
                const rawLog = await this.safeStorageGet<unknown[]>(`route:${routeId}:log`) ?? [];
                const validEntries: RouteLogEntry[] = [];
                let corruptedInRoute = 0;

                if (!Array.isArray(rawLog)) {
                    console.warn(`[WAL] Log for route ${routeId} is not an array, resetting`);
                    await storageSet(`route:${routeId}:log`, []);
                    corruptedInRoute = 1;
                } else {
                    for (const entry of rawLog) {
                        try {
                            validEntries.push(validateRouteLogEntry(entry));
                        } catch {
                            corruptedInRoute++;
                        }
                    }

                    if (corruptedInRoute > 0) {
                        await storageSet(`route:${routeId}:log`, validEntries);
                        entriesRemoved += corruptedInRoute;
                    }
                }

                // Reconcile metadata with actual log state
                const metadata = await this.getOrCreateMetadata(routeId);
                const actualUnmerged = validEntries.filter(e => !e.merged).length;
                const maxSequence = validEntries.length > 0
                    ? Math.max(...validEntries.map(e => e.sequence))
                    : 0;

                const needsMetadataUpdate =
                    metadata.unmergedCount !== actualUnmerged ||
                    metadata.totalPoints !== validEntries.length ||
                    metadata.lastSequence < maxSequence;

                if (needsMetadataUpdate || corruptedInRoute > 0) {
                    metadata.unmergedCount = actualUnmerged;
                    metadata.totalPoints = validEntries.length;
                    metadata.lastSequence = maxSequence;
                    await storageSet(`route:${routeId}:metadata`, metadata);
                    this.metrics.recoveryEvents++;
                    routesRecovered++;
                }

                this.updateLogSize(routeId, validEntries.length);
            } catch (error) {
                console.error(`[WAL] Recovery failed for route ${routeId}:`, error);
            } finally {
                release();
            }
        }

        return { routesRecovered, entriesRemoved };
    }
}

let instance: WriteAheadLogManager | null = null;

export function getWriteAheadLogManager(): WriteAheadLogManager {
    if (!instance) {
        instance = new WriteAheadLogManager();
    }
    return instance;
}

/**
 * Reset the singleton instance.
 * For testing purposes only.
 */
export async function resetWriteAheadLogManager(): Promise<void> {
    if (instance) {
        await instance.shutdown();
        instance = null;
    }
}

export const WriteAheadLogManagerInstance = getWriteAheadLogManager();
