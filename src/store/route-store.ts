import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { CartoSketchRouteCollection, CartoSketchRouteItem, readCollectionFromStorage } from '../libs/cartosketch/route';
import { storeGet, storeSet, storeSave } from '../libs/store';
import type { GeographicPointType } from '../libs/geolocation/types';
import type { GeographicRouteItemProperties } from '../libs/cartosketch/definitions';
import { GeographicGeneralMetaDefaultValue } from '../libs/cartosketch/definitions';

export const useRouteStore = defineStore('routes', () => {
    const routeCollection = ref<CartoSketchRouteCollection | null>(null);
    const currentRouteId = ref<string | null>(null);

    // Computed property for backward compatibility
    const routes = computed(() => {
        if (!routeCollection.value) return [];
        return routeCollection.value.routes.map(route => ({
            id: route.id,
            name: route.name,
            points: route.getPoints()
        }));
    });

    async function init() {
        const storedData = await storeGet<ReturnType<CartoSketchRouteCollection['exportToStorage']> | unknown>('routes');

        if (storedData) {
            // Check if it's old format (array of routes) or new format
            if (Array.isArray(storedData)) {
                // Old format - migrate to new format
                const meta = GeographicGeneralMetaDefaultValue();
                meta.name = 'Default Routes';
                const collection = new CartoSketchRouteCollection([], undefined, meta);
                console.info("[RouteStore] Migrating old route data to new format")
                for (const oldRoute of storedData) {
                    if (oldRoute && typeof oldRoute === 'object' && 'id' in oldRoute && 'name' in oldRoute && 'points' in oldRoute && Array.isArray(oldRoute.points)) {
                        const route = oldRoute as { id: string; name: string; points: { latitude: number; longitude: number }[] };
                        const meta = GeographicGeneralMetaDefaultValue();
                        meta.name = route.name || 'Untitled Route';
                        const newRoute = new CartoSketchRouteItem(route.id, route.points, {}, meta);
                        collection.addRoute(newRoute);
                    }
                    else {
                        console.warn('[RouteStore] Invalid route data:', oldRoute);
                    }
                }
                routeCollection.value = collection;
                // Save migrated data
                await storeSet('routes', routeCollection.value.exportToStorage());
                await storeSave();
                console.info("[RouteStore] Route Migration complete")
            } else if (storedData && typeof storedData === 'object' && 'id' in storedData && 'routes' in storedData) {
                // New format
                routeCollection.value = readCollectionFromStorage(storedData as ReturnType<CartoSketchRouteCollection['exportToStorage']>);
            } else {
                // Invalid format, create empty collection
                const meta = GeographicGeneralMetaDefaultValue();
                meta.name = 'Default Routes';
                routeCollection.value = new CartoSketchRouteCollection([], undefined, meta);
                await storeSet('routes', routeCollection.value.exportToStorage());
                await storeSave();
            }
        } else {
            const meta = GeographicGeneralMetaDefaultValue();
            meta.name = 'Default Routes';
            routeCollection.value = new CartoSketchRouteCollection([], undefined, meta);
        }
    }

    async function addRoute(name: string, properties: GeographicRouteItemProperties = {}) {
        if (!routeCollection.value) {
            const meta = GeographicGeneralMetaDefaultValue();
            meta.name = 'Default Routes';
            routeCollection.value = new CartoSketchRouteCollection([], undefined, meta);
        }

        const meta = GeographicGeneralMetaDefaultValue();
        meta.name = name;
        const newRoute = new CartoSketchRouteItem(undefined, [], properties, meta);
        routeCollection.value.addRoute(newRoute);

        await storeSet('routes', routeCollection.value.exportToStorage());
        await storeSave();

        return newRoute;
    }

    async function deleteRoute(id: string) {
        if (!routeCollection.value) return;

        routeCollection.value.removeRoute(id);
        if (currentRouteId.value === id) {
            currentRouteId.value = null;
        }

        await storeSet('routes', routeCollection.value.exportToStorage());
        await storeSave();
    }

    async function addPointToRoute(id: string, point: GeographicPointType) {
        if (!routeCollection.value) return;

        const route = routeCollection.value.findRoute(id);
        if (!route) return;

        route.appendPoint(point);

        await storeSet('routes', routeCollection.value.exportToStorage());
        await storeSave();
    }

    async function updateRoute(id: string, updates: { name?: string; properties?: GeographicRouteItemProperties }) {
        if (!routeCollection.value) return;

        const route = routeCollection.value.findRoute(id);
        if (!route) return;

        if (updates.name !== undefined) {
            route.name = updates.name;
        }
        if (updates.properties !== undefined) {
            route.setProperties(updates.properties);
        }

        await storeSet('routes', routeCollection.value.exportToStorage());
        await storeSave();
    }

    async function clearRoutePoints(id: string) {
        if (!routeCollection.value) return;

        const route = routeCollection.value.findRoute(id);
        if (!route) return;

        route.setPoints([]);

        await storeSet('routes', routeCollection.value.exportToStorage());
        await storeSave();
    }

    function getRouteById(id: string) {
        if (!routeCollection.value) return null;
        return routeCollection.value.findRoute(id) ?? null;
    }

    function setCurrentRouteId(id: string | null) {
        currentRouteId.value = id;
    }

    return {
        routeCollection,
        routes,
        currentRouteId,
        init,
        addRoute,
        deleteRoute,
        addPointToRoute,
        updateRoute,
        clearRoutePoints,
        getRouteById,
        setCurrentRouteId
    };
});
