import { defineStore } from 'pinia';
import { computed } from 'vue';
import type { GeographicPointType } from '../libs/geolocation/types';
import type { GeographicRouteItemProperties } from '../libs/cartosketch/definitions';
import { useSketchStore } from './sketch-store';

export const useRouteStore = defineStore('routes', () => {
    const sketchStore = useSketchStore();
    const routeCollection = computed(() => sketchStore.routeCollection);
    const currentRouteId = computed({
        get: () => sketchStore.currentRouteId,
        set: (value) => sketchStore.setCurrentRouteId(value)
    });

    // Computed property for backward compatibility
    const routes = computed(() => sketchStore.routes);

    async function init() {
        // Initialize the sketch store which handles migration
        await sketchStore.init();
    }

    async function addRoute(name: string, properties: GeographicRouteItemProperties = {}) {
        return await sketchStore.addRoute(name, properties);
    }

    async function deleteRoute(id: string) {
        await sketchStore.deleteRoute(id);
    }

    async function addPointToRoute(id: string, point: GeographicPointType) {
        await sketchStore.addPointToRoute(id, point);
    }

    async function updateRoute(id: string, updates: { name?: string; properties?: GeographicRouteItemProperties }) {
        await sketchStore.updateRoute(id, updates);
    }

    async function clearRoutePoints(id: string) {
        await sketchStore.clearRoutePoints(id);
    }

    function getRouteById(id: string) {
        return sketchStore.getRouteById(id);
    }

    function setCurrentRouteId(id: string | null) {
        sketchStore.setCurrentRouteId(id);
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
