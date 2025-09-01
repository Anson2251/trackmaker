import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import type { GeographicPointType } from '../libs/geolocation/types';
import type { GeographicRouteItemProperties } from '../libs/cartosketch/definitions';
import { useSketchStore } from './sketch-store';
import type { UpdateService } from '@/libs/geolocation/update-service';

export const useRouteStore = defineStore('routes', () => {
    const sketchStore = useSketchStore();
    const routeCollection = computed(() => sketchStore.routeCollection);
    const currentRouteId = computed({
        get: () => sketchStore.currentRouteId,
        set: (value) => sketchStore.setCurrentRouteId(value)
    });

    const currentRouteRecordTimespan = ref(0);
    watch(currentRouteId, (id) => {
        if (id) {
            currentRouteRecordTimespan.value = sketchStore.getRouteById(id)?.meta?.record_timespan ?? 0;
        }
    })

    // Recording state
    const isRecording = ref(false);
    const watchingHandler = ref<number>(-1);
    const locator = ref<UpdateService | null>(null);

    let recordingTimespanTrackingHandler: number | undefined;

    // Computed property for backward compatibility
    const routes = computed(() => sketchStore.routes);

    function setLocator(updateService: UpdateService) {
        locator.value = updateService;
    }

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

    // New recording functionality
    function startRecording(initialPoint?: GeographicPointType) {
        if (isRecording.value || !locator.value) return;

        isRecording.value = true;

        if (initialPoint) {
            addPointToRoute(currentRouteId.value!, initialPoint);
        }

        watchingHandler.value = locator.value.addListener((newPoint: GeographicPointType) => {
            if (currentRouteId.value) {
                addPointToRoute(currentRouteId.value, newPoint);
            }
        });

        sketchStore.updateRoute(currentRouteId.value!, { meta: { modification_timestamp: Date.now() } });

        recordingTimespanTrackingHandler = setInterval(async () => {
            const currentRoute = sketchStore.getRouteById(currentRouteId.value!)!;
            if (currentRoute.recordTimespan !== undefined && currentRoute.meta.modification_timestamp) {
                currentRouteRecordTimespan.value = currentRoute.recordTimespan + (Date.now() - currentRoute.meta.modification_timestamp);
                // console.log(currentRouteRecordTimespan.value)
                await sketchStore.updateRoute(currentRouteId.value!, { meta: { record_timespan: currentRouteRecordTimespan.value } });
            }
        }, 100) as unknown as number;
    }

    function stopRecording() {
        if (!isRecording.value || !locator.value) return;

        if (watchingHandler.value !== -1) {
            locator.value.removeListener(watchingHandler.value);
            watchingHandler.value = -1;
        }

        if (recordingTimespanTrackingHandler) {
            clearTimeout(recordingTimespanTrackingHandler);
            recordingTimespanTrackingHandler = undefined;
        }

        isRecording.value = false;
    }

    async function toggleRecording(t: (key: string) => string) {
        try {
            if (!locator.value) {
                throw new Error("Geolocation service not available");
            }

            if (!isRecording.value) {
                // Start recording
                if (!currentRouteId.value) {
                    const newRoute = await addRoute(t("trackerView.nameNewRoute"));
                    setCurrentRouteId(newRoute.id);
                    startRecording(locator.value.present);
                } else {
                    startRecording();
                }
            } else {
                // Stop recording
                stopRecording();
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    function cleanup() {
        if (watchingHandler.value !== -1 && locator.value) {
            locator.value.removeListener(watchingHandler.value);
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
