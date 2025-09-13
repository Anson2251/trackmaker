import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { CartoSketch } from '../libs/cartosketch';
import type { GeographicRouteItemType, GeographicSketchType } from '../libs/cartosketch/definitions';
import { CartoSketchRouteCollection, CartoSketchRouteItem } from '../libs/cartosketch/route';
import { storageGet, storageSet, storageSave } from '../libs/storage';
import { MigrationService } from '../libs/data-layer';
import type { GeographicPointType } from '../libs/geolocation/types';
import type { GeographicRouteItemProperties, GeographicDraftItemProperties, GeographicShape, GeographicGeneralMetaType } from '../libs/cartosketch/definitions';
import { GeographicGeneralMetaDefaultValue } from '../libs/cartosketch/definitions';
import { calculatePathDistance } from '../utils/proj4-distance';

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
            meta: route.meta
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
        const storedData = await storageGet<ReturnType<CartoSketch['toStorage']> | unknown>('sketches');

        if (storedData) {
            // Use the migration service to handle data migration
            const migrationResult = MigrationService.migrateToCurrent(storedData, {
                validateBefore: true,
                validateAfter: true,
                enableRollback: true
            });

            if (migrationResult.isErr()) {
                console.error("[SketchStore] Data migration failed:", migrationResult.error);
                // Fallback to creating default sketch
                await createDefaultSketch();
                return;
            }

            const result = migrationResult.value;

            if (result.migratedVersions.length > 0) {
                console.info(`[SketchStore] Successfully migrated data from version ${result.fromVersion} to ${result.toVersion}`);
            }

            // Handle the migrated data
            if (Array.isArray(result.data)) {
                // New format - array of sketches
                sketches.value = (result.data as GeographicSketchType[]).map((sketchData: GeographicSketchType) =>
                    CartoSketch.fromStorage(sketchData)
                );

                // Calculate distances for all routes (async but we don't await here to avoid blocking)
                sketches.value.forEach(sketch => {
                    sketch.routes.routes.forEach(async (route) => {
                        if (route.points.length > 1 && !route.meta.distance) {
                            try {
                                route.meta.distance = await calculatePathDistance(route.points);
                            } catch (error) {
                                console.warn('Failed to calculate route distance:', error);
                                // Fallback to 0 if calculation fails
                                route.meta.distance = 0;
                            }
                        }
                    });
                });

                // Set current sketch to first one if none is selected
                if (!currentSketchId.value && sketches.value.length > 0) {
                    currentSketchId.value = sketches.value[0].id;
                }
            } else {
                // Invalid format after migration, create default sketch
                await createDefaultSketch();
            }
        } else {
            // No data found, create default sketch
            await createDefaultSketch();
        }
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
            sketch.meta.tags.forEach(tag => sketch.removeTag(tag));
            updates.tags.forEach(tag => sketch.addTag(tag));
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

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    async function addPointToRoute(id: string, point: GeographicPointType) {
        if (!currentSketch.value) return;

        const route = currentSketch.value.routes.routes.find(r => r.id === id);
        if (!route) return;

        route.points.push(point);
        route.meta.modification_timestamp = Date.now();

        // Calculate route distance
        if (route.points.length > 1) {
            try {
                if (!route.meta.distance) {
                    const distance = await calculatePathDistance(route.points);
                    route.meta.distance = distance;
                }
                else {
                    const distance = await calculatePathDistance([route.points[route.points.length - 2], point]);
                    route.meta.distance += distance;
                }
            } catch (error) {
                console.warn('Failed to calculate route distance:', error);
                // Fallback: use simple haversine for incremental calculation
                if (!route.meta.distance) {
                    route.meta.distance = 0;
                }
            }
        }

        await storageSet('sketches', sketches.value.map(s => s.toStorage()));
        await storageSave();
    }

    async function updateRoute(id: string, updates: { properties?: GeographicRouteItemProperties, meta?: Partial<GeographicRouteItemType["meta"]> }) {
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

    function getRouteById(id: string) {
        if (!currentSketch.value) return null;
        const routeData = currentSketch.value.routes.routes.find(r => r.id === id);
        if (!routeData) return null;

        return new CartoSketchRouteItem(
            routeData.id,
            routeData.points,
            routeData.properties,
            routeData.meta
        );
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

        // Draft management
        addDraft,
        updateDraft,
        deleteDraft,
        getDraftById
    };
});
