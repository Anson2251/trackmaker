import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { GeographicPoint } from '../libs/geolocation/types';
import type { GeographicRouteItemProperties, GeographicRouteItemType } from '../libs/cartosketch/definitions';
import { useSketchStore } from './sketch-store';
import type { GeolocationManager } from '../libs/geolocation';
import { recordingSession } from '@/libs/recording-session';
import { throttle } from 'lodash-es';

export const useRouteStore = defineStore('routes', () => {
    const sketchStore = useSketchStore();
    const routeCollection = computed(() => sketchStore.routeCollection);
    const currentRouteId = computed({
        get: (() => sketchStore.currentRouteId),
        set: ((value) => sketchStore.setCurrentRouteId(value))
    });

    // Use computed property that reads from recordingSession
    const currentRouteRecordTimespan = ref(0);

    // Recording state
    const isRecording = ref(false);
    const watchingHandler = ref<number>(-1);
    const locator = ref<GeolocationManager | null>(null);

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
    async function startRecording(initialPoint?: GeographicPoint) {
        if (isRecording.value || !locator.value) return;

        isRecording.value = true;

        if (initialPoint) {
            await addPointToRoute(currentRouteId.value!, initialPoint);
        }

        let handlingNewPoint = false;
        const handleNewPoint = async (newPoint: GeographicPoint) => {
            if (handlingNewPoint) return;
            handlingNewPoint = true
            if (currentRouteId.value) {
                await addPointToRoute(currentRouteId.value, newPoint);
                currentRouteRecordTimespan.value = recordingSession.getCurrentTimespan();
                handlingNewPoint = false
            }
        }

        watchingHandler.value = locator.value.addLocationListener(throttle(handleNewPoint, 100, { leading: true, trailing: true }));

        if (currentRouteId.value) {
            const route = await sketchStore.getRouteById(currentRouteId.value);
            const existingTimespan = route?.meta?.record_timespan ?? 0;
            await recordingSession.start(currentRouteId.value, existingTimespan);
            void sketchStore.updateRoute(currentRouteId.value, { meta: { modification_timestamp: Date.now() } });
        }
    }

    async function stopRecording() {
        if (!isRecording.value || !locator.value) return;

        if (watchingHandler.value !== -1) {
            locator.value.removeLocationListener(watchingHandler.value);
            watchingHandler.value = -1;
        }

        isRecording.value = false;

        const finalTimespan = await recordingSession.stop();

        if (currentRouteId.value) {
            await sketchStore.updateRoute(currentRouteId.value, { meta: { record_timespan: finalTimespan } });
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
                    await startRecording(lastLocation ?? undefined);
                } else {
                    await startRecording();
                }
            } else {
                await stopRecording();
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
