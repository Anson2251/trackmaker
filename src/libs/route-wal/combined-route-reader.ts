import { storageGet } from '../storage';
import { WriteAheadLogManagerInstance } from './write-ahead-log-manager';
import type { GeographicRouteItemType } from '../cartosketch/definitions';
import { GeographicPoint } from '../geolocation/types';
import { CartoSketch } from '../cartosketch';
import { WAL_CONSTANTS } from './types';
import { calculateHaversineDistance } from '../../utils/proj4-distance';

interface CachedRoute {
    route: GeographicRouteItemType;
    timestamp: number;
    accessCount: number;
}

export class CombinedRouteReader {
    private static instance: CombinedRouteReader;
    private routeCache = new Map<string, CachedRoute>();
    private cacheTimeout = 5000;
    private maxCacheSize = WAL_CONSTANTS.MAX_CACHE_SIZE;

    private constructor() { }

    static getInstance(): CombinedRouteReader {
        if (!CombinedRouteReader.instance) {
            CombinedRouteReader.instance = new CombinedRouteReader();
        }
        return CombinedRouteReader.instance;
    }

    async getRoute(routeId: string): Promise<GeographicRouteItemType | null> {
        const cached = this.routeCache.get(routeId);
        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            cached.accessCount++;
            return cached.route;
        }

        const mainRoute = await this.getMainRoute(routeId);
        if (!mainRoute) return null;

        const logEntriesResult = await WriteAheadLogManagerInstance.getUnmergedEntries(routeId);
        const logEntries = logEntriesResult ?? [];
        if (logEntries.length === 0) {
            this.addToCache(routeId, mainRoute);
            return mainRoute;
        }

        const combinedRoute = await this.combineRouteWithLog(mainRoute, logEntries);
        this.addToCache(routeId, combinedRoute);
        return combinedRoute;
    }

    private addToCache(routeId: string, route: GeographicRouteItemType): void {
        if (this.routeCache.size >= this.maxCacheSize) {
            this.evictOldestEntry();
        }
        this.routeCache.set(routeId, {
            route,
            timestamp: Date.now(),
            accessCount: 1
        });
    }

    private evictOldestEntry(): void {
        let oldestKey: string | null = null;
        let oldestAccessCount = Infinity;
        let oldestTimestamp = Infinity;

        for (const [key, entry] of this.routeCache.entries()) {
            if (entry.accessCount < oldestAccessCount ||
                (entry.accessCount === oldestAccessCount && entry.timestamp < oldestTimestamp)) {
                oldestKey = key;
                oldestAccessCount = entry.accessCount;
                oldestTimestamp = entry.timestamp;
            }
        }

        if (oldestKey) {
            this.routeCache.delete(oldestKey);
        }
    }

    private async getMainRoute(routeId: string): Promise<GeographicRouteItemType | null> {
        const sketchesData = await storageGet<ReturnType<CartoSketch['toStorage']>[]>('sketches');
        if (!sketchesData) return null;

        const sketches = sketchesData.map(s => CartoSketch.fromStorage(s));

        for (const sketch of sketches) {
            const route = sketch.routes.routes.find(r => r.id === routeId);
            if (route) {
                return route;
            }
        }

        return null;
    }

    private async combineRouteWithLog(
        mainRoute: GeographicRouteItemType,
        logEntries: Array<{ point: GeographicPoint; timestamp: number; distanceIncrement?: number }>
    ): Promise<GeographicRouteItemType> {
        const logPoints = logEntries.map(entry => entry.point);

        const combinedPoints = [...mainRoute.points, ...logPoints];

        let incrementalDistance = 0;

        for (let i = 1; i < logEntries.length; i++) {
            const p1 = logEntries[i - 1].point;
            const p2 = logEntries[i].point;
            incrementalDistance += calculateHaversineDistance(
                { longitude: p1.longitude, latitude: p1.latitude },
                { longitude: p2.longitude, latitude: p2.latitude }
            );
        }

        if (logEntries.length > 0 && mainRoute.points.length > 0) {
            incrementalDistance += calculateHaversineDistance(
                { longitude: mainRoute.points[mainRoute.points.length - 1].longitude, latitude: mainRoute.points[mainRoute.points.length - 1].latitude },
                { longitude: logEntries[0].point.longitude, latitude: logEntries[0].point.latitude }
            );
        }

        const baseDistance = mainRoute.meta.distance || 0;
        const combinedDistance = baseDistance + incrementalDistance;

        return {
            ...mainRoute,
            points: combinedPoints,
            meta: {
                ...mainRoute.meta,
                distance: combinedDistance,
                modification_timestamp: Math.max(
                    mainRoute.meta.modification_timestamp,
                    logEntries[logEntries.length - 1]?.timestamp || 0
                )
            }
        };
    }

    invalidateCache(routeId: string): void {
        this.routeCache.delete(routeId);
    }

    clearCache(): void {
        this.routeCache.clear();
    }

    getCachedRoute(routeId: string): GeographicRouteItemType | null {
        const cached = this.routeCache.get(routeId);
        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            return cached.route;
        }
        return null;
    }
}

export const CombinedRouteReaderInstance = CombinedRouteReader.getInstance();
