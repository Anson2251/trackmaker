import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid'
import { storeGet, storeSet, storeSave } from '../libs/store';
import type { Route, Point } from '../libs/store/types';
import { ref } from 'vue';

export const useRouteStore = defineStore('routes', {
    state: () => ({
        routes: [] as Route[],
        currentRouteId: ref<string | null>(null)
    }),
    actions: {
        async init() {
            const result = await storeGet<Route[]>('routes');
            if (result) this.routes = JSON.parse(result);
        },
        async addRoute(route: Omit<Route, 'id'>) {
            const newRoute = { ...route, id: uuidv4() };
            this.routes.push(newRoute);
            await storeSet('routes', JSON.stringify(this.routes));
            await storeSave();
            return newRoute;
        },
        async deleteRoute(id: string) {
            this.routes = this.routes.filter(r => r.id !== id);
            await storeSet('routes', JSON.stringify(this.routes));
            await storeSave();
        },
        async addPointToRoute(id: string, point: Point) {
            const route = this.routes.find(r => r.id === id);
            if (route) {
                route.points.push(point);
                await storeSet('routes', JSON.stringify(this.routes));
                await storeSave();
            }
        },
        async updateRoute(id: string, updates: Partial<Omit<Route, 'id'>>) {
            const route = this.routes.find(r => r.id === id);
            if (route) {
                Object.assign(route, updates);
                await storeSet('routes', JSON.stringify(this.routes));
                await storeSave();
            }
        }
    }
});
