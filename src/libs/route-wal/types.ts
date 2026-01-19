import { z } from 'zod';
import type { GeographicPoint } from "../geolocation/types";

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const RouteLogEntrySchema = z.object({
    id: z.string().regex(uuidPattern),
    routeId: z.string(),
    point: z.custom<GeographicPoint>((val) => {
        const p = val as GeographicPoint;
        return typeof p.latitude === 'number' && typeof p.longitude === 'number';
    }),
    timestamp: z.number().positive(),
    sequence: z.number().int().nonnegative(),
    merged: z.boolean(),
    distanceIncrement: z.number().nonnegative().optional()
});

export type RouteLogEntry = z.infer<typeof RouteLogEntrySchema>;

export const RouteLogMetadataSchema = z.object({
    routeId: z.string(),
    lastMergeTime: z.number().positive(),
    unmergedCount: z.number().int().nonnegative(),
    lastSequence: z.number().int().nonnegative(),
    totalPoints: z.number().int().nonnegative(),
    checksum: z.string().optional()
});

export type RouteLogMetadata = z.infer<typeof RouteLogMetadataSchema>;

export const MergeBatchSchema = z.object({
    id: z.string().regex(uuidPattern),
    routeId: z.string(),
    startSequence: z.number().int().nonnegative(),
    endSequence: z.number().int().nonnegative(),
    pointCount: z.number().int().positive(),
    distanceAdded: z.number().nonnegative(),
    mergeTime: z.number().positive(),
    status: z.enum(['pending', 'completed', 'failed']),
    error: z.string().optional()
});

export type MergeBatch = z.infer<typeof MergeBatchSchema>;

export const WALMetricsSchema = z.object({
    appendLatency: z.array(z.number().positive()),
    mergeDuration: z.array(z.number().positive()),
    logSizePerRoute: z.record(z.string(), z.number().int().nonnegative()),
    failedAppends: z.number().int().nonnegative(),
    failedMerges: z.number().int().nonnegative(),
    recoveryEvents: z.number().int().nonnegative(),
    mergeFrequency: z.number(),
    compressionRatio: z.number(),
    memoryUsage: z.number()
});

export type WALMetrics = z.infer<typeof WALMetricsSchema>;

export const WALGlobalStateSchema = z.object({
    initialized: z.boolean(),
    version: z.number().int().positive(),
    lastMergeTime: z.number().positive(),
    activeRoutes: z.array(z.string()),
    statistics: z.object({
        writesPerSecond: z.number(),
        averageLogSize: z.number(),
        mergeDuration: z.number()
    })
});

export type WALGlobalState = z.infer<typeof WALGlobalStateSchema>;

export const WAL_CONSTANTS = {
    FLUSH_THRESHOLD: 10,
    FLUSH_DELAY_MS: 100,
    MERGE_TIME_INTERVAL_MS: 30000,
    MERGE_SIZE_THRESHOLD: 100,
    MAX_RETRIES: 3,
    RETRY_BASE_DELAY_MS: 1000,
    MAX_LATENCY_SAMPLES: 100,
    MAX_CACHE_SIZE: 100
} as const;

export function createRouteLogEntry(
    routeId: string,
    point: GeographicPoint,
    sequence: number
): RouteLogEntry {
    return RouteLogEntrySchema.parse({
        id: crypto.randomUUID(),
        routeId,
        point,
        timestamp: Date.now(),
        sequence,
        merged: false
    });
}

export function validateRouteLogEntry(entry: unknown): RouteLogEntry {
    return RouteLogEntrySchema.parse(entry);
}

export function validateRouteLogMetadata(metadata: unknown): RouteLogMetadata {
    return RouteLogMetadataSchema.parse(metadata);
}

export function validateMergeBatch(batch: unknown): MergeBatch {
    return MergeBatchSchema.parse(batch);
}
