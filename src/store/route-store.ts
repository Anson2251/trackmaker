import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { storeGet, storeSet, storeSave } from '../libs/store';
import type { Route, Point } from '../libs/store/types';
import { ref } from 'vue';
import { isEqual, cloneDeep, isString } from 'lodash-es';

export const useRouteStore = defineStore('routes', () => {
    const routes = ref<Route[]>([]);
    const currentRouteId = ref<string | null>(null);

    async function init() {
        const result = await storeGet<Route[]>('routes');
        if (result) routes.value = isString(result) ? JSON.parse(result) : result;
    }
    async function addRoute(route: Omit<Route, 'id'>) {
        const newRoute = { ...route, id: uuidv4() };
        routes.value.push(newRoute);
        await storeSet('routes', cloneDeep(routes.value));
        await storeSave();
        return newRoute;
    }
    async function deleteRoute(id: string) {
        routes.value = routes.value.filter(r => r.id !== id);
        if (currentRouteId.value === id) currentRouteId.value = null;
        await storeSet('routes', cloneDeep(routes.value));
        await storeSave();
    }
    async function addPointToRoute(id: string, point: Point) {
        const route = routes.value.find(r => r.id === id);
        if (!route) return;
        if (route.points.length > 0 && isEqual(route.points[route.points.length - 1], point)) return;
        route.points.push(point);
        await storeSet('routes', cloneDeep(routes.value));
        await storeSave();
    }
    async function updateRoute(id: string, updates: Partial<Omit<Route, 'id'>>) {
        const route = routes.value.find(r => r.id === id);
        if (route) {
            Object.assign(route, updates);
            await storeSet('routes', cloneDeep(routes.value));
            await storeSave();
        }
    }

    return {
        routes,
        currentRouteId,
        init,
        addRoute,
        deleteRoute,
        addPointToRoute,
        updateRoute
    };
});
