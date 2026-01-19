import { storageGet, storageSet } from '../storage';
import { WriteAheadLogManagerInstance } from './write-ahead-log-manager';
import type { MergeBatch, RouteLogEntry, RouteLogMetadata } from './types';
import { WAL_CONSTANTS } from './types';
import { CartoSketch } from '../cartosketch';
import { calculateHaversineDistance } from '../../utils/proj4-distance';

interface MergeJob {
    routeId: string;
    priority: 'low' | 'normal' | 'high';
    scheduledTime: number;
    attempts: number;
}

export class MergeProcessor {
    private static instance: MergeProcessor;
    private mergeQueue: MergeJob[] = [];
    private isProcessing = false;
    private lastMergeTime = 0;
    private mergeCount = 0;

    private constructor() { }

    static getInstance(): MergeProcessor {
        if (!MergeProcessor.instance) {
            MergeProcessor.instance = new MergeProcessor();
        }
        return MergeProcessor.instance;
    }

    scheduleMerge(routeId: string, priority: 'low' | 'normal' | 'high' = 'normal'): void {
        const existingJob = this.mergeQueue.find(job => job.routeId === routeId);

        if (existingJob) {
            if (priority === 'high') {
                existingJob.priority = 'high';
                existingJob.scheduledTime = Date.now();
            }
            return;
        }

        const job: MergeJob = {
            routeId,
            priority,
            scheduledTime: Date.now(),
            attempts: 0
        };

        this.mergeQueue.push(job);
        void this.processQueue();
    }

    private async processQueue(): Promise<void> {
        if (this.isProcessing || this.mergeQueue.length === 0) return;

        this.isProcessing = true;

        try {
            this.mergeQueue.sort((a, b) => {
                const priorityOrder = { high: 0, normal: 1, low: 2 };
                if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                    return priorityOrder[a.priority] - priorityOrder[b.priority];
                }
                return a.scheduledTime - b.scheduledTime;
            });

            while (this.mergeQueue.length > 0) {
                const job = this.mergeQueue.shift()!;

                try {
                    await this.mergeRoute(job.routeId);
                    job.attempts = 0;
                } catch (error) {
                    console.error(`[MergeProcessor] Merge failed for route ${job.routeId}:`, error);
                    job.attempts++;

                    if (job.attempts < WAL_CONSTANTS.MAX_RETRIES) {
                        job.scheduledTime = Date.now() + (WAL_CONSTANTS.RETRY_BASE_DELAY_MS * Math.pow(2, job.attempts));
                        this.mergeQueue.push(job);
                    } else {
                        await this.recordMergeFailure(job.routeId, error);
                    }
                }
            }
        } finally {
            this.isProcessing = false;
        }
    }

    async mergeRoute(routeId: string): Promise<void> {
        const startTime = performance.now();
        const batchId = crypto.randomUUID();

        const batch: MergeBatch = {
            id: batchId,
            routeId,
            startSequence: 0,
            endSequence: 0,
            pointCount: 0,
            distanceAdded: 0,
            mergeTime: Date.now(),
            status: 'pending'
        };

        const [mainSketches, logEntries, metadata] = await Promise.all([
            storageGet<ReturnType<CartoSketch['toStorage']>[]>('sketches'),
            WriteAheadLogManagerInstance.getUnmergedEntries(routeId),
            WriteAheadLogManagerInstance.getMetadata(routeId)
        ]);

        if (!mainSketches || !metadata) {
            throw new Error(`Missing data for route ${routeId}`);
        }

        if (logEntries.length === 0) {
            batch.status = 'completed';
            await storageSet(`route:${routeId}:batches:${batchId}`, batch);
            return;
        }

        const sketches = mainSketches.map(s => CartoSketch.fromStorage(s));
        const sketchIndex = sketches.findIndex(sketch =>
            sketch.routes.routes.some(route => route.id === routeId)
        );

        if (sketchIndex === -1) {
            throw new Error(`Route ${routeId} not found in sketches`);
        }

        const routeIndex = sketches[sketchIndex].routes.routes.findIndex(
            route => route.id === routeId
        );

        const route = sketches[sketchIndex].routes.routes[routeIndex];
        const lastMainPoint = route.points.length > 0 ? route.points[route.points.length - 1] : null;

        let totalDistanceAdded = 0;
        const pointsToAdd: typeof route.points = [];

        for (let i = 0; i < logEntries.length; i++) {
            const entry = logEntries[i];
            const prevPoint = i === 0 && lastMainPoint ? lastMainPoint : logEntries[i - 1].point;

            const distance = calculateHaversineDistance(
                { longitude: prevPoint.longitude, latitude: prevPoint.latitude },
                { longitude: entry.point.longitude, latitude: entry.point.latitude }
            );
            totalDistanceAdded += distance;

            entry.distanceIncrement = distance;
            pointsToAdd.push(entry.point);
        }

        route.points.push(...pointsToAdd);
        route.meta.distance = (route.meta.distance || 0) + totalDistanceAdded;
        route.meta.modification_timestamp = Date.now();

        logEntries.forEach(entry => entry.merged = true);

        batch.startSequence = logEntries[0].sequence;
        batch.endSequence = logEntries[logEntries.length - 1].sequence;
        batch.pointCount = logEntries.length;
        batch.distanceAdded = totalDistanceAdded;

        await this.saveMergeTransaction(sketches, routeId, logEntries, metadata, batch);

        await WriteAheadLogManagerInstance.cleanupMergedEntries(routeId);

        this.mergeCount++;
        this.lastMergeTime = Date.now();
        const duration = performance.now() - startTime;
        console.info(`[MergeProcessor] Merged ${logEntries.length} points into route ${routeId} in ${duration.toFixed(2)}ms`);
    }

    private async saveMergeTransaction(
        sketches: CartoSketch[],
        routeId: string,
        logEntries: RouteLogEntry[],
        metadata: RouteLogMetadata,
        batch: MergeBatch
    ): Promise<void> {
        const backup = {
            sketches: JSON.parse(JSON.stringify(sketches.map(s => s.toStorage()))),
            logEntries: JSON.parse(JSON.stringify(logEntries)),
            metadata: JSON.parse(JSON.stringify(metadata))
        };

        try {
            metadata.unmergedCount -= logEntries.length;
            metadata.lastMergeTime = Date.now();

            const storagePromises: Promise<void>[] = [
                storageSet('sketches', sketches.map(s => s.toStorage())),
                storageSet(`route:${routeId}:log`, logEntries),
                storageSet(`route:${routeId}:metadata`, metadata),
                storageSet(`route:${routeId}:batches:${batch.id}`, batch)
            ];

            await Promise.all(storagePromises);

            batch.status = 'completed';
            await storageSet(`route:${routeId}:batches:${batch.id}`, batch);
        } catch (error) {
            await Promise.all([
                storageSet('sketches', backup.sketches),
                storageSet(`route:${routeId}:log`, backup.logEntries),
                storageSet(`route:${routeId}:metadata`, backup.metadata)
            ]);

            batch.status = 'failed';
            batch.error = error instanceof Error ? error.message : 'Unknown error';
            await storageSet(`route:${routeId}:batches:${batch.id}`, batch);

            throw error;
        }
    }

    private async recordMergeFailure(routeId: string, error: unknown): Promise<void> {
        console.error(`[MergeProcessor] Recording merge failure for route ${routeId}:`, error);
    }

    async forceMerge(routeId: string): Promise<void> {
        const logEntries = await WriteAheadLogManagerInstance.getUnmergedEntries(routeId);
        if (logEntries.length > 0) {
            await this.mergeRoute(routeId);
        }
    }

    getQueueLength(): number {
        return this.mergeQueue.length;
    }

    getMergeCount(): number {
        return this.mergeCount;
    }

    getLastMergeTime(): number {
        return this.lastMergeTime;
    }
}

export const MergeProcessorInstance = MergeProcessor.getInstance();
