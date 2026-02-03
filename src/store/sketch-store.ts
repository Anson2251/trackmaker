import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { CartoSketch } from '../libs/cartosketch';
import type { GeographicRouteItemType, GeographicSketchType } from '../libs/cartosketch/definitions';
import { CartoSketchRouteCollection, CartoSketchRouteItem } from '../libs/cartosketch/route';
import { storageGet, storageSet, storageSave } from '../libs/storage';
import { MigrationService } from '../libs/data-layer';
import type { GeographicPoint } from '../libs/geolocation/types';
import type { GeographicRouteItemProperties, GeographicDraftItemProperties, GeographicShape, GeographicGeneralMetaType } from '../libs/cartosketch/definitions';
import { GeographicGeneralMetaDefaultValue } from '../libs/cartosketch/definitions';
import { calculatePathDistance } from '../utils/proj4-distance';
import { WriteAheadLogManagerInstance, CombinedRouteReaderInstance, CrashRecoveryManagerInstance } from '../libs/route-wal';

export const useSketchStore = defineStore('sketches', () => {
    const sketches = ref<CartoSketch[]>([]);
    const currentSketchId = ref<string | null>(null);
    const currentRouteId = ref<string | null>(null);

    // Computed property for backward compatibility with route store
    const routeCollection = computed(() => {
        if (!currentSketchId.value) return null;
        const sketch = sketches.value.find(s => s.id === currentSketchId.value);
        if (!sketch) return null;

        // Convert the sketch's routes to a CartoSketchRouteCollection for compatibility
        return new CartoSketchRouteCollection(
            sketch.routes.routes.map(route =>
                new CartoSketchRouteItem(route.id, route.points, route.properties, route.meta)
            ),
            sketch.routes.id,
            sketch.routes.meta
        );
    });

    // Computed property for backward compatibility
    const routes = computed(() => {
        if (!routeCollection.value) return [];
        return routeCollection.value.routes.map(route => ({
            id: route.id,
            name: route.name,
            points: route.getPoints(),
            meta: route.meta,
            properties: route.properties
        }));
    });

    // Get current sketch
    const currentSketch = computed(() => {
        if (!currentSketchId.value) return null;
        return sketches.value.find(s => s.id === currentSketchId.value) || null;
    });

    // Get current sketch's drafts
    const currentDrafts = computed(() => {
        if (!currentSketch.value) return [];
        return currentSketch.value.drafts.drafts;
    });

    async function init() {
        const storedData = await storageGet<ReturnType<CartoSketch['toStorage']>>('sketches');

        if (storedData) {
            const migrationResult = MigrationService.migrateToCurrent(storedData, {
                validateBefore: true,
                validateAfter: true,
                enableRollback: true
            });

            if (migrationResult.isErr()) {
                console.error("[SketchStore] Data migration failed:", migrationResult.error);
                await createDefaultSketch();
                return;
            }

            const result = migrationResult.value;

            if (result.migratedVersions.length > 0) {
                console.info(`[SketchStore] Successfully migrated data from version ${result.fromVersion} to ${result.toVersion}`);
            }

            if (Array.isArray(result.data)) {
                sketches.value = (result.data as GeographicSketchType[]).map((sketchData: GeographicSketchType) =>
                    CartoSketch.fromStorage(sketchData)
                );

                const promises: Promise<void>[] = [];
                sketches.value.forEach(sketch => {
                    sketch.routes.routes.forEach((route) => {
                        if (route.points.length > 1 && !route.meta.distance) {
                            promises.push((async () => {
                                try {
                                    route.meta.distance = await calculatePathDistance(route.points);
                                } catch (error) {
                                    console.warn('Failed to calculate route distance:', error);
                                    route.meta.distance = 0;
                                }
                            })());
                        }
                    });
                });
                await Promise.all(promises);

                if (!currentSketchId.value && sketches.value.length > 0) {
                    currentSketchId.value = sketches.value[0].id;
                }
            } else {
                await createDefaultSketch();
            }
        } else {
            await createDefaultSketch();
        }

        await initializeWAL();
    }

    async function initializeWAL(): Promise<void> {
        try {
            const walInitialized = await storageGet<boolean>('wal:initialized');

            if (!walInitialized) {
                console.info('[SketchStore] Initializing WAL system...');
                await migrateToWAL();
                await storageSet('wal:initialized', true);
                await storageSet('wal:version', 1);
                console.info('[SketchStore] WAL system initialized');
            }

            console.info('[SketchStore] Running crash recovery...');
            const recoveryResult = await CrashRecoveryManagerInstance.recover();
            if (recoveryResult.failedRoutes > 0) {
                console.warn('[SketchStore] Crash recovery completed with failures:', recoveryResult.details);
            } else {
                console.info('[SketchStore] Crash recovery completed successfully');
            }
        } catch (error) {
            console.error('[SketchStore] Failed to initialize WAL:', error);
        }
    }

    async function migrateToWAL(): Promise<void> {
        const backup = await storageGet('sketches');
        if (backup) {
            await storageSet('sketches:backup:pre-wal', backup);
        }

        const sketchesData = await storageGet<ReturnType<CartoSketch['toStorage']>[]>('sketches');
        if (!sketchesData) return;

        const sketches = sketchesData.map(s => CartoSketch.fromStorage(s));
        const activeRoutes: string[] = [];

        for (const sketch of sketches) {
            for (const route of sketch.routes.routes) {
                await storageSet(`route:${route.id}:metadata`, route.meta);
                activeRoutes.push(route.id);
            }
        }

        await storageSet('wal:activeRoutes', activeRoutes);
    }


    async function createDefaultSketch() {
        const sketch = new CartoSketch();
        sketch.meta.name = 'Default Sketch';
        sketches.value = [sketch];
        currentSketchId.value = sketch.id;

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    // Sketch management methods
    async function createSketch(name: string = 'New Sketch') {
        const sketch = new CartoSketch();
        sketch.meta.name = name;
        sketches.value.push(sketch);

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();

        return sketch;
    }

    async function updateSketch(id: string, updates: { name?: string; description?: string; tags?: string[] }) {
        const sketch = sketches.value.find(s => s.id === id);
        if (!sketch) return;

        if (updates.name !== undefined) {
            sketch.updateName(updates.name);
        }
        if (updates.description !== undefined) {
            sketch.updateDescription(updates.description);
        }
        if (updates.tags !== undefined) {
            // Remove all existing tags and add new ones
            sketch.meta.tags.forEach(tag => { sketch.removeTag(tag) });
            updates.tags.forEach(tag => { sketch.addTag(tag) });
        }

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    async function deleteSketch(id: string) {
        const index = sketches.value.findIndex(s => s.id === id);
        if (index === -1) return;

        sketches.value.splice(index, 1);

        if (currentSketchId.value === id) {
            currentSketchId.value = sketches.value.length > 0 ? sketches.value[0].id : null;
        }

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    function setCurrentSketchId(id: string | null) {
        currentSketchId.value = id;
        // Reset current route ID when switching sketches
        currentRouteId.value = null;
    }

    // Route management methods (backward compatibility)
    async function addRoute(name: string, properties: GeographicRouteItemProperties = {}, meta: Partial<GeographicRouteItemType["meta"]> = {}) {
        if (!currentSketch.value) {
            // Create default sketch if none exists
            await createDefaultSketch();
        }

        const route = new CartoSketchRouteItem(undefined, [], properties, meta);
        route.meta.name = name;

        if (currentSketch.value) {
            currentSketch.value.routes.routes.push(route.exportToStorage());
        }

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();

        return route;
    }

    async function deleteRoute(id: string) {
        if (!currentSketch.value) return;

        const index = currentSketch.value.routes.routes.findIndex(r => r.id === id);
        if (index === -1) return;

        currentSketch.value.routes.routes.splice(index, 1);

        if (currentRouteId.value === id) {
            currentRouteId.value = null;
        }

        // Invalidate the route cache
        CombinedRouteReaderInstance.invalidateCache(id);

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    async function addPointToRoute(id: string, point: GeographicPoint) {
        if (!currentSketch.value) return;

        const route = currentSketch.value.routes.routes.find(r => r.id === id);
        if (!route) return;

        route.points.push(point);
        route.meta.modification_timestamp = Date.now();

        if (route.points.length > 1) {
            try {
                if (route.meta.distance === undefined) {
                    const distance = await calculatePathDistance(route.points);
                    route.meta.distance = distance;
                }
                else {
                    const distance = await calculatePathDistance([route.points[route.points.length - 2], point]);
                    route.meta.distance += distance;
                }
            } catch (error) {
                console.warn('Failed to calculate route distance:', error);
                if (route.meta.distance === undefined) {
                    route.meta.distance = 0;
                }
            }
        }

        const sketchesBackup = sketches.value.map(s => s.toStorage());

        try {
            await WriteAheadLogManagerInstance.appendPoint(id, point);
            CombinedRouteReaderInstance.invalidateCache(id);
        } catch (walError) {
            console.error('[SketchStore] WAL append failed, rolling back in-memory state:', walError);
            const restoredSketches = sketchesBackup.map(s => CartoSketch.fromStorage(s));
            const sketch = restoredSketches.find(s => s.id === currentSketch.value?.id);
            if (sketch) {
                const routeIndex = sketch.routes.routes.findIndex(r => r.id === id);
                if (routeIndex !== -1) {
                    sketches.value = restoredSketches;
                    currentSketchId.value = sketch.id;
                }
            }
            throw walError;
        }
    }

    async function updateRoute(id: string, updates: { properties?: Partial<GeographicRouteItemType["properties"]>, meta?: Partial<GeographicRouteItemType["meta"]> }) {
        if (!currentSketch.value) return;

        const route = currentSketch.value.routes.routes.find(r => r.id === id);
        if (!route) return;

        if (updates.meta !== undefined) {
            route.meta = { ...route.meta, ...updates.meta };
        }
        if (updates.properties !== undefined) {
            route.properties = { ...route.properties, ...updates.properties };
        }

        route.meta.modification_timestamp = Date.now();

        // Invalidate the route cache so updates are immediately visible
        CombinedRouteReaderInstance.invalidateCache(id);

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    async function clearRoutePoints(id: string) {
        if (!currentSketch.value) return;

        const route = currentSketch.value.routes.routes.find(r => r.id === id);
        if (!route) return;

        route.points = [];
        route.meta.modification_timestamp = Date.now();

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    async function getRouteById(id: string): Promise<GeographicRouteItemType | null> {
        return CombinedRouteReaderInstance.getRoute(id);
    }

    function setCurrentRouteId(id: string | null) {
        currentRouteId.value = id;
    }

    // Draft management methods
    async function addDraft(shape: GeographicShape, properties: GeographicDraftItemProperties = {}, meta: Partial<GeographicGeneralMetaType> = {}) {
        if (!currentSketch.value) {
            // Create default sketch if none exists
            await createDefaultSketch();
        }

        const draftItem = {
            id: crypto.randomUUID(),
            meta: {
                ...GeographicGeneralMetaDefaultValue(),
                ...meta
            },
            shape,
            properties
        };

        if (currentSketch.value) {
            currentSketch.value.drafts.drafts.push(draftItem);
        }

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();

        return draftItem;
    }

    async function updateDraft(id: string, updates: { shape?: GeographicShape; properties?: GeographicDraftItemProperties; meta?: Partial<GeographicGeneralMetaType> }) {
        if (!currentSketch.value) return;

        const draft = currentSketch.value.drafts.drafts.find(d => d.id === id);
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

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    async function deleteDraft(id: string) {
        if (!currentSketch.value) return;

        const index = currentSketch.value.drafts.drafts.findIndex(d => d.id === id);
        if (index === -1) return;

        currentSketch.value.drafts.drafts.splice(index, 1);

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    function getDraftById(id: string) {
        if (!currentSketch.value) return null;
        return currentSketch.value.drafts.drafts.find(d => d.id === id) || null;
    }

    function listRouteIDs() {
        if (!currentSketch.value) return [];
        return currentSketch.value.routes.routes.map(r => r.id);
    }

    function listDraftIDs() {
        if (!currentSketch.value) return [];
        return currentSketch.value.drafts.drafts.map(d => d.id);
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

        // Route management (backward compatibility)
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
        listDraftIDs
    };
});
