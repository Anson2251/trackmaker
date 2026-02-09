import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type {
    GeographicRouteItemType,
    GeographicDraftItemType,
    GeographicRouteItemProperties,
    GeographicDraftItemProperties,
    GeographicShape,
    GeographicGeneralMetaType,
} from "../libs/cartosketch/definitions";
import {
    GeographicGeneralMetaDefaultValue,
    GeographicSketchMetaDefaultValue,
} from "../libs/cartosketch/definitions";
import {
    storageGet,
    storageSet,
    storageScanKeys,
    storageBatchSet,
    storageRemove,
} from "../libs/storage";
import type { GeographicPoint } from "../libs/geolocation/types";
import { calculatePathDistance } from "../utils/proj4-distance";
import { recordingSession } from "../libs/recording-session";
import { migrateToKV } from "../libs/kv-migration";
import {
    getRouteSimplificationChunkSize,
    getRouteSimplificationThreshold,
    getRouteSimplificationMaxIterations,
    getRouteSimplificationMaxDistance,
    getRouteSimplificationMinDistance,
} from "../libs/default-settings";
import {
    calculateHaversineDistance,
} from "../utils/proj4-distance";

// Cached route simplification settings (constants)
const ROUTE_SIMPLIFICATION_CHUNK_SIZE = getRouteSimplificationChunkSize();
const ROUTE_SIMPLIFICATION_THRESHOLD = getRouteSimplificationThreshold();
const ROUTE_SIMPLIFICATION_MAX_ITERATIONS = getRouteSimplificationMaxIterations();
const ROUTE_SIMPLIFICATION_MAX_DISTANCE = getRouteSimplificationMaxDistance();
const ROUTE_SIMPLIFICATION_MIN_DISTANCE = getRouteSimplificationMinDistance();

// Sketch type using plain objects
interface Sketch {
    id: string;
    meta: ReturnType<typeof GeographicSketchMetaDefaultValue>;
    routes: GeographicRouteItemType[];
    drafts: GeographicDraftItemType[];
}

// Interfaces for KV storage format
interface SketchMeta {
    id: string;
    name: string;
    description?: string;
    tags: string[];
    creation_timestamp: number;
    modification_timestamp: number;
    routeIds: string[];
    draftIds: string[];
}

interface RouteMeta {
    id: string;
    name: string;
    description?: string;
    tags: string[];
    creation_timestamp: number;
    modification_timestamp: number;
    distance: number;
    record_timespan: number;
    sketchId: string;
    properties?: GeographicRouteItemProperties;
    lastSimplifiedIndex?: number;
}

// Helper functions for sketch operations
function createSketchObject(
    id = crypto.randomUUID(),
    name = "Untitled",
): Sketch {
    const defaultMeta = GeographicSketchMetaDefaultValue();
    return {
        id,
        meta: {
            ...defaultMeta,
            name,
        },
        routes: [],
        drafts: [],
    };
}

function updateSketchName(sketch: Sketch, name: string): void {
    sketch.meta.name = name;
    sketch.meta.modification_timestamp = Date.now();
}

function updateSketchDescription(sketch: Sketch, description: string): void {
    sketch.meta.description = description;
    sketch.meta.modification_timestamp = Date.now();
}

function addSketchTag(sketch: Sketch, tag: string): void {
    if (!sketch.meta.tags.includes(tag)) {
        sketch.meta.tags.push(tag);
        sketch.meta.modification_timestamp = Date.now();
    }
}

function removeSketchTag(sketch: Sketch, tag: string): void {
    const index = sketch.meta.tags.indexOf(tag);
    if (index > -1) {
        sketch.meta.tags.splice(index, 1);
        sketch.meta.modification_timestamp = Date.now();
    }
}

/**
 * Calculate perpendicular (cross-track) distance from a point to a line segment
 * Uses the cross-track distance formula for spherical coordinates
 * @param point - The point to calculate distance for
 * @param lineStart - Start point of the line segment
 * @param lineEnd - End point of the line segment
 * @returns Distance in meters
 */
function pointToLineDistance(
    point: GeographicPoint,
    lineStart: GeographicPoint,
    lineEnd: GeographicPoint
): number {
    const R = 6371000; // Earth's radius in meters

    // Convert to radians
    const lat1 = lineStart.latitude * Math.PI / 180;
    const lon1 = lineStart.longitude * Math.PI / 180;
    const lat2 = lineEnd.latitude * Math.PI / 180;
    const lon2 = lineEnd.longitude * Math.PI / 180;
    const lat3 = point.latitude * Math.PI / 180;
    const lon3 = point.longitude * Math.PI / 180;

    // Calculate the cross-track distance using the formula:
    // d_xt = asin(sin(d13/R) * sin(theta13 - theta12)) * R
    // where d13 is distance from point 1 to point 3
    // theta13 is bearing from point 1 to point 3
    // theta12 is bearing from point 1 to point 2

    // Calculate bearing from lineStart to lineEnd (theta12)
    const y12 = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x12 = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    const theta12 = Math.atan2(y12, x12);

    // Calculate bearing from lineStart to point (theta13)
    const y13 = Math.sin(lon3 - lon1) * Math.cos(lat3);
    const x13 = Math.cos(lat1) * Math.sin(lat3) - Math.sin(lat1) * Math.cos(lat3) * Math.cos(lon3 - lon1);
    const theta13 = Math.atan2(y13, x13);

    // Calculate distance from lineStart to point (d13)
    const d13 = calculateHaversineDistance(lineStart, point);

    // Cross-track distance
    const crossTrackDistance = Math.abs(Math.asin(Math.sin(d13 / R) * Math.sin(theta13 - theta12)) * R);

    return crossTrackDistance;
}

/**
 * Simplify a chunk of route points using an iterative distance-based algorithm.
 * Keeps the head and tail points, and removes points whose perpendicular distance
 * to the line formed by the previous and next points is below a threshold.
 * The threshold is defined as a percentage of the line segment length, bounded by
 * min and max absolute distances to prevent over-simplification on short segments
 * and excessive simplification on long segments.
 * @param points - Array of points to simplify
 * @param thresholdPercent - Threshold as a percentage (0.0-1.0) of the line length
 * @param maxIterations - Maximum number of iterations to prevent infinite loops
 * @param maxDistance - Maximum absolute distance (in meters) for removing points
 * @param minDistance - Minimum absolute distance (in meters) required to remove a point
 * @returns Simplified array of points
 */
function simplifyRouteChunk(
    points: GeographicPoint[],
    thresholdPercent: number,
    maxIterations: number,
    maxDistance: number,
    minDistance: number
): GeographicPoint[] {
    if (points.length <= 2) return points;

    const simplified = [...points];
    let changed = true;
    let iterations = 0;

    while (changed && iterations < maxIterations) {
        changed = false;
        // Iterate from index 1 to length-2 (keep head and tail)
        for (let i = 1; i < simplified.length - 1; i++) {
            const prev = simplified[i - 1];
            const curr = simplified[i];
            const next = simplified[i + 1];

            // Calculate the length of the line segment (prev to next)
            const lineLength = calculateHaversineDistance(prev, next);

            // Calculate perpendicular distance from current point to the line
            const distance = pointToLineDistance(curr, prev, next);

            // Calculate threshold based on percentage of line length, bounded by min and max
            const percentageThreshold = lineLength * thresholdPercent;
            const threshold = Math.max(minDistance, Math.min(percentageThreshold, maxDistance));

            // Remove point if distance is below threshold
            if (distance < threshold) {
                simplified.splice(i, 1);
                changed = true;
                i--; // Adjust index since we removed an element
            }
        }
        iterations++;
    }

    return simplified;
}

export const useSketchStore = defineStore("sketches", () => {
    // In-memory state
    const sketches = ref<Sketch[]>([]);
    const currentSketchId = ref<string | null>(null);
    const currentRouteId = ref<string | null>(null);

    // Computed property for backward compatibility with route store
    const routes = computed(() => {
        if (!currentSketch.value) return [];
        return currentSketch.value.routes.map((route) => ({
            id: route.id,
            name: route.meta.name,
            points: route.points,
            meta: route.meta,
            properties: route.properties,
        }));
    });

    // Legacy computed property for backward compatibility
    const routeCollection = computed(() => {
        if (!currentSketch.value) return null;
        return {
            id: currentSketch.value.id,
            meta: currentSketch.value.meta,
            routes: currentSketch.value.routes,
        };
    });

    // Get current sketch
    const currentSketch = computed(() => {
        if (!currentSketchId.value) return null;
        return (
            sketches.value.find((s) => s.id === currentSketchId.value) || null
        );
    });

    // Get current sketch's drafts
    const currentDrafts = computed(() => {
        if (!currentSketch.value) return [];
        return currentSketch.value.drafts;
    });

    // Helper: Load sketch from KV storage
    async function loadSketchFromKV(sketchId: string): Promise<Sketch | null> {
        const meta = await storageGet<SketchMeta>(`sketch:${sketchId}:meta`);
        if (!meta) return null;

        // Load routes
        const routes: GeographicRouteItemType[] = [];
        for (const routeId of meta.routeIds || []) {
            const routeMeta = await storageGet<RouteMeta>(
                `route:${routeId}:meta`,
            );
            const routePoints =
                (await storageGet<GeographicPoint[]>(
                    `route:${routeId}:points`,
                )) || [];

            if (routeMeta) {
                routes.push({
                    id: routeId,
                    points: routePoints,
                    meta: {
                        name: routeMeta.name,
                        description: routeMeta.description ?? "",
                        tags: routeMeta.tags ?? [],
                        creation_timestamp: routeMeta.creation_timestamp,
                        modification_timestamp:
                            routeMeta.modification_timestamp,
                        created_by: "anonymous",
                        modified_by: "anonymous",
                        distance: routeMeta.distance,
                        record_timespan: routeMeta.record_timespan,
                        lastSimplifiedIndex: routeMeta.lastSimplifiedIndex,
                    },
                    properties: routeMeta.properties ?? {},
                });
            }
        }

        // Load drafts
        const drafts: GeographicDraftItemType[] = [];
        for (const draftId of meta.draftIds || []) {
            const draft = await storageGet<GeographicDraftItemType>(
                `draft:${draftId}:meta`,
            );
            if (draft) drafts.push(draft);
        }

        // Build Sketch with proper meta structure
        return {
            id: sketchId,
            meta: {
                name: meta.name,
                description: meta.description || "A new geographic item",
                tags: meta.tags || [],
                creation_timestamp: meta.creation_timestamp,
                modification_timestamp: meta.modification_timestamp,
                created_by: "anonymous",
                modified_by: "anonymous",
                version: 1,
            },
            routes,
            drafts,
        };
    }

    // Helper: Save sketch metadata to KV
    async function saveSketchMeta(
        sketchId: string,
        meta: Partial<SketchMeta>,
    ): Promise<void> {
        const existing = await storageGet<SketchMeta>(
            `sketch:${sketchId}:meta`,
        );
        const updated = { ...existing, ...meta, id: sketchId } as SketchMeta;
        await storageSet(`sketch:${sketchId}:meta`, updated);
    }

    // Helper: Save route metadata to KV
    async function saveRouteMeta(
        routeId: string,
        meta: Partial<RouteMeta>,
    ): Promise<void> {
        const existing = await storageGet<RouteMeta>(`route:${routeId}:meta`);
        const updated = {
            ...existing,
            ...meta,
            id: routeId,
            modification_timestamp: Date.now(),
        } as RouteMeta;
        await storageSet(`route:${routeId}:meta`, updated);
    }

    // Helper: Update global indexes
    async function updateIndexes(): Promise<void> {
        const sketchIds = (await storageScanKeys("sketch:"))
            .filter((k) => k.endsWith(":meta"))
            .map((k) => k.replace("sketch:", "").replace(":meta", ""));

        const routeIds = (await storageScanKeys("route:"))
            .filter((k) => k.endsWith(":meta"))
            .map((k) => k.replace("route:", "").replace(":meta", ""));

        await storageBatchSet([
            { key: "index:sketches", value: sketchIds },
            { key: "index:routes", value: routeIds },
        ]);
    }

    async function init() {
        // Run KV migration first
        await migrateToKV();

        // Recover any active recording session
        const sessionRecovered = await recordingSession.recover();
        if (sessionRecovered) {
            console.info(
                "[SketchStore] Recovered active recording session for route:",
                recordingSession.getRouteId(),
            );
        }

        // Check if using KV format
        const migrated = await storageGet<boolean>("kv:migrated");

        if (migrated) {
            // Load from KV format
            const sketchIds = await storageScanKeys("sketch:");
            const sketchMetaKeys = sketchIds.filter((k) => k.endsWith(":meta"));

            const loadedSketches: Sketch[] = [];
            for (const key of sketchMetaKeys) {
                const sketchId = key
                    .replace("sketch:", "")
                    .replace(":meta", "");
                const sketch = await loadSketchFromKV(sketchId);
                if (sketch) loadedSketches.push(sketch);
            }

            sketches.value = loadedSketches;

            // Calculate distances for routes that need it
            const promises: Promise<void>[] = [];
            sketches.value.forEach((sketch) => {
                sketch.routes.forEach((route) => {
                    if (route.points.length > 1 && !route.meta.distance) {
                        promises.push(
                            (async () => {
                                try {
                                    route.meta.distance =
                                        await calculatePathDistance(
                                            route.points,
                                        );
                                    // Save updated distance to KV
                                    await saveRouteMeta(route.id, {
                                        distance: route.meta.distance,
                                    });
                                } catch (error) {
                                    console.warn(
                                        "Failed to calculate route distance:",
                                        error,
                                    );
                                    route.meta.distance = 0;
                                }
                            })(),
                        );
                    }
                });
            });
            await Promise.all(promises);

            if (!currentSketchId.value && sketches.value.length > 0) {
                currentSketchId.value = sketches.value[0].id;
            }
        } else {
            // Fallback to old format (should not happen after migration)
            interface OldSketchFormat {
                id: string;
                meta: ReturnType<typeof GeographicSketchMetaDefaultValue>;
                routes: {
                    id: string;
                    meta: ReturnType<typeof GeographicGeneralMetaDefaultValue>;
                    routes: GeographicRouteItemType[];
                };
                drafts: {
                    id: string;
                    meta: ReturnType<typeof GeographicGeneralMetaDefaultValue>;
                    drafts: GeographicDraftItemType[];
                };
            }

            const storedData = await storageGet<OldSketchFormat[]>("sketches");

            if (storedData && Array.isArray(storedData)) {
                // Load old format directly - migration should have been handled by migrateToKV()
                sketches.value = storedData.map(
                    (sketchData: OldSketchFormat) => ({
                        id: sketchData.id,
                        meta: sketchData.meta,
                        routes: sketchData.routes.routes,
                        drafts: sketchData.drafts.drafts,
                    }),
                );

                if (!currentSketchId.value && sketches.value.length > 0) {
                    currentSketchId.value = sketches.value[0].id;
                }
            } else {
                await createDefaultSketch();
            }
        }
    }

    async function createDefaultSketch() {
        const sketch = createSketchObject(
            crypto.randomUUID(),
            "Default Sketch",
        );

        // Save to KV
        await saveSketchMeta(sketch.id, {
            id: sketch.id,
            name: sketch.meta.name,
            description: sketch.meta.description,
            tags: sketch.meta.tags,
            creation_timestamp: sketch.meta.creation_timestamp,
            modification_timestamp: sketch.meta.modification_timestamp,
            routeIds: [],
            draftIds: [],
        });

        await updateIndexes();

        sketches.value = [sketch];
        currentSketchId.value = sketch.id;
    }

    // Sketch management methods
    async function createSketch(name: string = "New Sketch") {
        const sketch = createSketchObject(crypto.randomUUID(), name);

        // Save to KV
        await saveSketchMeta(sketch.id, {
            id: sketch.id,
            name: sketch.meta.name,
            description: sketch.meta.description,
            tags: sketch.meta.tags,
            creation_timestamp: sketch.meta.creation_timestamp,
            modification_timestamp: sketch.meta.modification_timestamp,
            routeIds: [],
            draftIds: [],
        });

        await updateIndexes();

        sketches.value.push(sketch);
        return sketch;
    }

    async function updateSketch(
        id: string,
        updates: { name?: string; description?: string; tags?: string[] },
    ) {
        const sketch = sketches.value.find((s) => s.id === id);
        if (!sketch) return;

        const meta: Partial<SketchMeta> = { id };

        if (updates.name !== undefined) {
            updateSketchName(sketch, updates.name);
            meta.name = updates.name;
        }
        if (updates.description !== undefined) {
            updateSketchDescription(sketch, updates.description);
            meta.description = updates.description;
        }
        if (updates.tags !== undefined) {
            // Remove all existing tags and add new ones
            sketch.meta.tags.forEach((tag) => {
                removeSketchTag(sketch, tag);
            });
            updates.tags.forEach((tag) => {
                addSketchTag(sketch, tag);
            });
            meta.tags = updates.tags;
        }

        await saveSketchMeta(id, meta);
    }

    async function deleteSketch(id: string) {
        const index = sketches.value.findIndex((s) => s.id === id);
        if (index === -1) return;

        const sketch = sketches.value[index];

        // Delete all routes associated with this sketch
        for (const route of sketch.routes) {
            await storageRemove(`route:${route.id}:meta`);
            await storageRemove(`route:${route.id}:points`);
        }

        // Delete all drafts
        for (const draft of sketch.drafts) {
            await storageRemove(`draft:${draft.id}:meta`);
        }

        // Delete sketch
        await storageRemove(`sketch:${id}:meta`);

        sketches.value.splice(index, 1);

        if (currentSketchId.value === id) {
            currentSketchId.value =
                sketches.value.length > 0 ? sketches.value[0].id : null;
        }

        await updateIndexes();
    }

    function setCurrentSketchId(id: string | null) {
        currentSketchId.value = id;
        // Reset current route ID when switching sketches
        currentRouteId.value = null;
    }

    // Route management methods
    async function addRoute(
        name: string,
        properties: GeographicRouteItemProperties = {},
        meta: Partial<GeographicRouteItemType["meta"]> = {},
    ) {
        if (!currentSketch.value) {
            // Create default sketch if none exists
            await createDefaultSketch();
        }

        const routeId = crypto.randomUUID();
        const defaultMeta = GeographicGeneralMetaDefaultValue();
        const route: GeographicRouteItemType = {
            id: routeId,
            meta: {
                ...defaultMeta,
                record_timespan: 0,
                distance: 0,
                ...meta,
                name,
            },
            properties,
            points: [],
        };

        const sketchId = currentSketch.value!.id;

        // Save route to KV
        await storageBatchSet([
            {
                key: `route:${routeId}:meta`,
                value: {
                    id: routeId,
                    name: route.meta.name,
                    description: route.meta.description,
                    tags: route.meta.tags,
                    creation_timestamp: route.meta.creation_timestamp,
                    modification_timestamp: route.meta.modification_timestamp,
                    distance: route.meta.distance || 0,
                    record_timespan: route.meta.record_timespan || 0,
                    sketchId,
                    properties: route.properties,
                } as RouteMeta,
            },
            { key: `route:${routeId}:points`, value: [] as GeographicPoint[] },
        ]);

        // Update sketch's routeIds
        const sketchMeta = await storageGet<SketchMeta>(
            `sketch:${sketchId}:meta`,
        );
        if (sketchMeta) {
            await saveSketchMeta(sketchId, {
                routeIds: [...(sketchMeta.routeIds || []), routeId],
            });
        }

        // Update in-memory sketch
        currentSketch.value!.routes.push(route);

        await updateIndexes();
        return route;
    }

    async function deleteRoute(id: string) {
        if (!currentSketch.value) return;

        const index = currentSketch.value.routes.findIndex((r) => r.id === id);
        if (index === -1) return;

        // Remove from sketch's routeIds
        const sketchMeta = await storageGet<SketchMeta>(
            `sketch:${currentSketch.value.id}:meta`,
        );
        if (sketchMeta) {
            await saveSketchMeta(currentSketch.value.id, {
                routeIds: (sketchMeta.routeIds || []).filter(
                    (rid) => rid !== id,
                ),
            });
        }

        // Delete route data
        await storageRemove(`route:${id}:meta`);
        await storageRemove(`route:${id}:points`);

        currentSketch.value.routes.splice(index, 1);

        if (currentRouteId.value === id) {
            currentRouteId.value = null;
        }

        await updateIndexes();
    }

    async function addPointToRoute(id: string, point: GeographicPoint) {
        if (!currentSketch.value) return;

        const route = currentSketch.value.routes.find((r) => r.id === id);
        if (!route) return;

        // Load current points from KV
        const points =
            (await storageGet<GeographicPoint[]>(`route:${id}:points`)) || [];
        const lastPoint = points[points.length - 1];
        if (
            lastPoint?.latitude === point.latitude &&
            lastPoint?.longitude === point.longitude
        ) { // same point
            if (lastPoint.accuracy < point.accuracy) { // better accuracy
                points.pop();
                points.push(point);
            } else return;
        } else {
            points.push(point);
            route.points.push(point);
        }

        // Check if we need to simplify the route
        const lastSimplifiedIndex = route.meta.lastSimplifiedIndex ?? 0;
        const pointsSinceLastSimplification = points.length - lastSimplifiedIndex;

        if (ROUTE_SIMPLIFICATION_CHUNK_SIZE > 0 && pointsSinceLastSimplification >= ROUTE_SIMPLIFICATION_CHUNK_SIZE) {
            // Simplify points from lastSimplifiedIndex to current end
            const chunkStart = lastSimplifiedIndex;
            const chunkEnd = points.length;
            const chunkToSimplify = points.slice(chunkStart, chunkEnd);

            if (chunkToSimplify.length >= 3) {
                const lengthBeforeSimplified = chunkToSimplify.length;
                const simplifiedChunk = simplifyRouteChunk(
                    chunkToSimplify,
                    ROUTE_SIMPLIFICATION_THRESHOLD,
                    ROUTE_SIMPLIFICATION_MAX_ITERATIONS,
                    ROUTE_SIMPLIFICATION_MAX_DISTANCE,
                    ROUTE_SIMPLIFICATION_MIN_DISTANCE
                );

                if (lengthBeforeSimplified > simplifiedChunk.length) {
                    // Replace the chunk with the simplified version
                    points.splice(chunkStart, chunkEnd - chunkStart, ...simplifiedChunk);
                    route.points.splice(chunkStart, chunkEnd - chunkStart, ...simplifiedChunk);

                    console.info(
                        `[SketchStore] Simplified chunk from ${lengthBeforeSimplified} to ${simplifiedChunk.length} points (index ${chunkStart} to ${chunkStart + simplifiedChunk.length})`
                    );
                }

                // Update lastSimplifiedIndex to track progress
                route.meta.lastSimplifiedIndex = chunkStart + simplifiedChunk.length;
            }
        }

        route.meta.modification_timestamp = Date.now();

        // Calculate distance
        let distanceIncrement = 0;
        if (points.length > 1) {
            try {
                const prevPoint = points[points.length - 2];
                distanceIncrement = await calculatePathDistance([
                    prevPoint,
                    point,
                ]);
            } catch (error) {
                console.warn("Failed to calculate route distance:", error);
            }
        }

        const newDistance = (route.meta.distance || 0) + distanceIncrement;
        route.meta.distance = newDistance;

        // Save to KV
        const existingRouteMeta = await storageGet<RouteMeta>(
            `route:${id}:meta`,
        );
        await storageBatchSet([
            { key: `route:${id}:points`, value: points },
            {
                key: `route:${id}:meta`,
                value: {
                    id,
                    name: existingRouteMeta?.name ?? route.meta.name,
                    description:
                        existingRouteMeta?.description ??
                        route.meta.description,
                    tags: existingRouteMeta?.tags ?? route.meta.tags,
                    creation_timestamp:
                        existingRouteMeta?.creation_timestamp ??
                        route.meta.creation_timestamp,
                    modification_timestamp: route.meta.modification_timestamp,
                    distance: newDistance,
                    record_timespan:
                        existingRouteMeta?.record_timespan ??
                        route.meta.record_timespan,
                    sketchId: existingRouteMeta?.sketchId ?? "",
                    properties:
                        existingRouteMeta?.properties ?? route.properties,
                    lastSimplifiedIndex: route.meta.lastSimplifiedIndex,
                } as RouteMeta,
            },
        ]);
    }

    async function updateRoute(
        id: string,
        updates: {
            properties?: Partial<GeographicRouteItemType["properties"]>;
            meta?: Partial<GeographicRouteItemType["meta"]>;
        },
    ) {
        if (!currentSketch.value) return;

        const route = currentSketch.value.routes.find((r) => r.id === id);
        if (!route) return;

        if (updates.meta !== undefined) {
            route.meta = { ...route.meta, ...updates.meta };
        }
        if (updates.properties !== undefined) {
            route.properties = { ...route.properties, ...updates.properties };
        }

        route.meta.modification_timestamp = Date.now();

        // Save to KV
        const existingMeta = await storageGet<RouteMeta>(`route:${id}:meta`);
        if (existingMeta) {
            await saveRouteMeta(id, {
                ...existingMeta,
                ...updates.meta,
                modification_timestamp: route.meta.modification_timestamp,
                properties: route.properties,
            });
        }
    }

    async function clearRoutePoints(id: string) {
        if (!currentSketch.value) return;

        const route = currentSketch.value.routes.find((r) => r.id === id);
        if (!route) return;

        route.points = [];
        route.meta.distance = 0;
        route.meta.modification_timestamp = Date.now();

        // Save to KV
        await storageSet(`route:${id}:points`, []);
        await saveRouteMeta(id, { distance: 0 });
    }

    async function getRouteById(
        id: string,
    ): Promise<GeographicRouteItemType | null> {
        // Try to get from current sketch first
        if (currentSketch.value) {
            const route = currentSketch.value.routes.find((r) => r.id === id);
            if (route) {
                return {
                    id: route.id,
                    points: route.points,
                    meta: route.meta,
                    properties: route.properties,
                };
            }
        }

        // Otherwise load from KV
        const routeMeta = await storageGet<RouteMeta>(`route:${id}:meta`);
        const routePoints = await storageGet<GeographicPoint[]>(
            `route:${id}:points`,
        );

        if (!routeMeta) return null;

        return {
            id,
            points: routePoints || [],
            meta: {
                name: routeMeta.name,
                description: routeMeta.description ?? "",
                tags: routeMeta.tags ?? [],
                creation_timestamp: routeMeta.creation_timestamp,
                modification_timestamp: routeMeta.modification_timestamp,
                created_by: "anonymous",
                modified_by: "anonymous",
                distance: routeMeta.distance,
                record_timespan: routeMeta.record_timespan,
                lastSimplifiedIndex: routeMeta.lastSimplifiedIndex,
            },
            properties: routeMeta.properties ?? {},
        };
    }

    function setCurrentRouteId(id: string | null) {
        currentRouteId.value = id;
    }

    // Draft management methods
    async function addDraft(
        shape: GeographicShape,
        properties: GeographicDraftItemProperties = {},
        meta: Partial<GeographicGeneralMetaType> = {},
    ) {
        if (!currentSketch.value) {
            // Create default sketch if none exists
            await createDefaultSketch();
        }

        const draftItem: GeographicDraftItemType = {
            id: crypto.randomUUID(),
            meta: {
                ...GeographicGeneralMetaDefaultValue(),
                ...meta,
            },
            shape,
            properties,
        };

        // Save to KV
        await storageSet(`draft:${draftItem.id}:meta`, draftItem);

        // Update sketch's draftIds
        const sketchMeta = await storageGet<SketchMeta>(
            `sketch:${currentSketch.value!.id}:meta`,
        );
        if (sketchMeta) {
            await saveSketchMeta(currentSketch.value!.id, {
                draftIds: [...(sketchMeta.draftIds || []), draftItem.id],
            });
        }

        currentSketch.value!.drafts.push(draftItem);
        return draftItem;
    }

    async function updateDraft(
        id: string,
        updates: {
            shape?: GeographicShape;
            properties?: GeographicDraftItemProperties;
            meta?: Partial<GeographicGeneralMetaType>;
        },
    ) {
        if (!currentSketch.value) return;

        const draft = currentSketch.value.drafts.find((d) => d.id === id);
        if (!draft) return;

        if (updates.shape !== undefined) {
            draft.shape = updates.shape;
        }
        if (updates.properties !== undefined) {
            draft.properties = { ...draft.properties, ...updates.properties };
        }
        if (updates.meta !== undefined) {
            draft.meta = { ...draft.meta, ...updates.meta };
            draft.meta.modification_timestamp = Date.now();
        }

        // Save to KV
        await storageSet(`draft:${id}:meta`, draft);
    }

    async function deleteDraft(id: string) {
        if (!currentSketch.value) return;

        const index = currentSketch.value.drafts.findIndex((d) => d.id === id);
        if (index === -1) return;

        // Remove from sketch's draftIds
        const sketchMeta = await storageGet<SketchMeta>(
            `sketch:${currentSketch.value.id}:meta`,
        );
        if (sketchMeta) {
            await saveSketchMeta(currentSketch.value.id, {
                draftIds: (sketchMeta.draftIds || []).filter(
                    (did) => did !== id,
                ),
            });
        }

        // Delete draft
        await storageRemove(`draft:${id}:meta`);

        currentSketch.value.drafts.splice(index, 1);
    }

    function getDraftById(id: string): GeographicDraftItemType | null {
        if (!currentSketch.value) return null;
        return currentSketch.value.drafts.find((d) => d.id === id) || null;
    }

    function listRouteIDs(): string[] {
        if (!currentSketch.value) return [];
        return currentSketch.value.routes.map((r) => r.id);
    }

    function listDraftIDs(): string[] {
        if (!currentSketch.value) return [];
        return currentSketch.value.drafts.map((d) => d.id);
    }

    return {
        // State
        sketches,
        currentSketchId,
        currentRouteId,

        // Computed
        routeCollection,
        routes,
        currentSketch,
        currentDrafts,

        // Sketch management
        init,
        createSketch,
        updateSketch,
        deleteSketch,
        setCurrentSketchId,

        // Route management
        addRoute,
        deleteRoute,
        addPointToRoute,
        updateRoute,
        clearRoutePoints,
        getRouteById,
        setCurrentRouteId,
        listRouteIDs,

        // Draft management
        addDraft,
        updateDraft,
        deleteDraft,
        getDraftById,
        listDraftIDs,
    };
});
