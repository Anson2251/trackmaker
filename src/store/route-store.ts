import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import type { GeographicPoint } from '../libs/geolocation/types';
import type { GeographicRouteItemProperties, GeographicRouteItemType } from '../libs/cartosketch/definitions';
import { useSketchStore } from './sketch-store';
import type { GeolocationManager } from '../libs/geolocation';
import { MergeProcessor } from '@/libs/route-wal';
import { throttle } from 'lodash-es';

const RECORDING_TIMESPAN_INTERVAL_MS = 200;

export const useRouteStore = defineStore('routes', () => {
    const sketchStore = useSketchStore();
    const routeCollection = computed(() => sketchStore.routeCollection);
    const currentRouteId = computed({
        get: (() => sketchStore.currentRouteId),
        set: ((value) => sketchStore.setCurrentRouteId(value))
    });

    const currentRouteRecordTimespan = ref(0);
    watch(currentRouteId, async (id) => {
        if (id !== null) {
            const route = await sketchStore.getRouteById(id);
            currentRouteRecordTimespan.value = route?.meta?.record_timespan ?? 0;
        }
    });

    // Recording state
    const isRecording = ref(false);
    const watchingHandler = ref<number>(-1);
    const locator = ref<GeolocationManager | null>(null);

    let recordingTimespanTrackingHandler: number | undefined;

    // Computed property for backward compatibility
    const routes = computed(() => sketchStore.routes);

    function setLocator(geolocationManager: GeolocationManager) {
        locator.value = geolocationManager;
    }

    async function init() {
        // Initialize the sketch store which handles migration
        await sketchStore.init();
    }

    async function addRoute(name: string, properties: GeographicRouteItemProperties = {}) {
        return sketchStore.addRoute(name, properties);
    }

    async function deleteRoute(id: string) {
        await sketchStore.deleteRoute(id);
    }

    async function addPointToRoute(id: string, point: GeographicPoint) {
        await sketchStore.addPointToRoute(id, point);
    }

    async function updateRoute(id: string, updates: { meta?: Partial<GeographicRouteItemType["meta"]>, properties?: Partial<GeographicRouteItemProperties> }) {
        await sketchStore.updateRoute(id, updates);
    }

    async function clearRoutePoints(id: string) {
        await sketchStore.clearRoutePoints(id);
    }

    async function getRouteById(id: string): Promise<GeographicRouteItemType | null> {
        return sketchStore.getRouteById(id);
    }

    function setCurrentRouteId(id: string | null) {
        sketchStore.setCurrentRouteId(id);
    }

    // New recording functionality
    function startRecording(initialPoint?: GeographicPoint) {
        if (isRecording.value || !locator.value) return;

        isRecording.value = true;

        if (initialPoint) {
            void addPointToRoute(currentRouteId.value!, initialPoint);
        }

        const handleNewPoints = async (newPoint: GeographicPoint) => {
            if (currentRouteId.value) {
                await addPointToRoute(currentRouteId.value, newPoint);
            }
        }

        watchingHandler.value = locator.value.addLocationListener(throttle(handleNewPoints, 1000, { leading: true, trailing: true }));

        if (currentRouteId.value) {
            void sketchStore.updateRoute(currentRouteId.value, { meta: { modification_timestamp: Date.now() } });
        }

        recordingTimespanTrackingHandler = setInterval(async () => {
            if (!currentRouteId.value) return;
            const currentRoute = await sketchStore.getRouteById(currentRouteId.value);
            if (currentRoute && currentRoute.meta.record_timespan !== undefined && currentRoute.meta.modification_timestamp) {
                currentRouteRecordTimespan.value = currentRoute.meta.record_timespan + (Date.now() - currentRoute.meta.modification_timestamp);
                await sketchStore.updateRoute(currentRouteId.value, { meta: { record_timespan: currentRouteRecordTimespan.value } });
            }
        }, RECORDING_TIMESPAN_INTERVAL_MS) as unknown as number;
    }

    function stopRecording() {
        if (!isRecording.value || !locator.value) return;

        if (watchingHandler.value !== -1) {
            locator.value.removeLocationListener(watchingHandler.value);
            watchingHandler.value = -1;
        }

        if (recordingTimespanTrackingHandler) {
            clearInterval(recordingTimespanTrackingHandler);
            recordingTimespanTrackingHandler = undefined;
        }

        isRecording.value = false;

        if (currentRouteId.value) {
            void (MergeProcessor.getInstance().forceMerge(currentRouteId.value)
                .catch((err: unknown) => {
                    console.warn('[RouteStore] Failed to force merge on stopRecording:', err);
                }))
        }
    }

    async function toggleRecording(t: (key: string) => string) {
        try {
            if (!locator.value) {
                throw new Error("Geolocation service not available");
            }

            if (!isRecording.value) {
                if (!currentRouteId.value) {
                    const newRoute = await addRoute(String(t("trackerView.nameNewRoute")));
                    setCurrentRouteId(newRoute.id);
                    const lastLocation = locator.value.getLastKnownLocation();
                    startRecording(lastLocation ?? undefined);
                } else {
                    startRecording();
                }
            } else {
                stopRecording();
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    function cleanup() {
        if (watchingHandler.value !== -1 && locator.value) {
            locator.value.removeLocationListener(watchingHandler.value);
            watchingHandler.value = -1;
        }
        isRecording.value = false;
    }

    return {
        routeCollection,
        routes,
        currentRouteId,
        isRecording,
        watchingHandler,
        currentRouteRecordTimespan,
        setLocator,
        init,
        addRoute,
        deleteRoute,
        addPointToRoute,
        updateRoute,
        clearRoutePoints,
        getRouteById,
        setCurrentRouteId,
        startRecording,
        stopRecording,
        toggleRecording,
        cleanup
    };
});
