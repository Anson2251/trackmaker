import {
    storageGet,
    storageSet,
    storageBatchSet,
    storageScanKeys,
    storageRemove,
} from "./storage";
import type {
    GeographicRouteItemType,
    GeographicDraftItemType,
    GeographicSketchMetaType,
} from "./cartosketch/definitions";

// Old sketch format (before KV migration)
interface OldSketchFormat {
    id: string;
    meta: GeographicSketchMetaType;
    routes: {
        id: string;
        meta: {
            name: string;
            description: string;
            creation_timestamp: number;
            modification_timestamp: number;
            created_by: string;
            modified_by: string;
            tags: string[];
        };
        routes: GeographicRouteItemType[];
    };
    drafts: {
        id: string;
        meta: {
            name: string;
            description: string;
            creation_timestamp: number;
            modification_timestamp: number;
            created_by: string;
            modified_by: string;
            tags: string[];
        };
        drafts: GeographicDraftItemType[];
    };
}

export async function migrateToKV(): Promise<boolean> {
    const migrated = await storageGet<boolean>("kv:migrated");
    if (migrated) return false;

    const oldSketches = await storageGet<OldSketchFormat[]>("sketches");
    if (!oldSketches || oldSketches.length === 0) {
        await storageSet("kv:migrated", true);
        return false;
    }

    console.info("[KV Migration] Starting migration to KV storage...");

    const batchEntries: { key: string; value: unknown }[] = [];
    const allRouteIds: string[] = [];
    const allSketchIds: string[] = [];

    for (const sketchData of oldSketches) {
        allSketchIds.push(sketchData.id);

        // First pass: collect route and draft IDs
        const sketchRouteIds: string[] = [];
        const sketchDraftIds: string[] = [];

        // Collect route IDs
        for (const route of sketchData.routes.routes) {
            sketchRouteIds.push(route.id);
            allRouteIds.push(route.id);
        }

        // Collect draft IDs
        for (const draft of sketchData.drafts.drafts) {
            sketchDraftIds.push(draft.id);
        }

        // Store sketch metadata (now with IDs collected)
        batchEntries.push({
            key: `sketch:${sketchData.id}:meta`,
            value: {
                id: sketchData.id,
                name: sketchData.meta.name,
                description: sketchData.meta.description,
                tags: sketchData.meta.tags,
                creation_timestamp: sketchData.meta.creation_timestamp,
                modification_timestamp: sketchData.meta.modification_timestamp,
                routeIds: sketchRouteIds,
                draftIds: sketchDraftIds,
            },
        });

        // Migrate routes
        for (const route of sketchData.routes.routes) {
            // Store route metadata
            batchEntries.push({
                key: `route:${route.id}:meta`,
                value: {
                    id: route.id,
                    name: route.meta.name,
                    description: route.meta.description,
                    tags: route.meta.tags,
                    creation_timestamp: route.meta.creation_timestamp,
                    modification_timestamp: route.meta.modification_timestamp,
                    distance: route.meta.distance,
                    record_timespan: route.meta.record_timespan,
                    sketchId: sketchData.id,
                },
            });

            // Store route points
            batchEntries.push({
                key: `route:${route.id}:points`,
                value: route.points,
            });
        }

        // Migrate drafts
        for (const draft of sketchData.drafts.drafts) {
            batchEntries.push({
                key: `draft:${draft.id}:meta`,
                value: {
                    id: draft.id,
                    meta: draft.meta,
                    shape: draft.shape,
                    properties: draft.properties,
                },
            });
        }
    }

    // Create indexes
    batchEntries.push({
        key: "index:routes",
        value: allRouteIds,
    });
    batchEntries.push({
        key: "index:sketches",
        value: allSketchIds,
    });

    // Execute batch set
    if (batchEntries.length > 0) {
        await storageBatchSet(batchEntries);
        console.info(`[KV Migration] Migrated ${batchEntries.length} entries`);
    }

    // Delete original nested sketches data
    await storageRemove("sketches");
    console.info("[KV Migration] Deleted original nested sketches data");

    await storageSet("kv:migrated", true);
    console.info("[KV Migration] Migration completed successfully");
    return true;
}

export async function cleanupLegacyWAL(): Promise<void> {
    // Clean up any legacy WAL keys
    const walKeys = await storageScanKeys("wal:");
    const routeLogKeys = await storageScanKeys("route:");

    const keysToRemove = [...walKeys, ...routeLogKeys];

    for (const key of keysToRemove) {
        await storageSet(key, null);
    }

    console.info(
        `[KV Migration] Cleaned up ${keysToRemove.length} legacy WAL keys`,
    );
}
