import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { nextTick } from 'vue';

const storageGet = vi.fn();
const storageSet = vi.fn();
const storageSave = vi.fn();

vi.mock('../libs/storage', () => ({
    storageGet,
    storageSet,
    storageSave,
}));

describe('useMapStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        vi.clearAllMocks();
        storageGet.mockResolvedValue(null);
        storageSet.mockResolvedValue(undefined);
        storageSave.mockResolvedValue(undefined);
    });

    it('loads persisted state during init', async () => {
        const { useMapStore } = await import('./map-store');
        storageGet.mockResolvedValueOnce({
            zoom: 9,
            center: [120, 30],
            bearing: 270,
            isTrackingOrientation: true,
            lastUpdateTime: 123,
        });

        const store = useMapStore();
        await store.init();

        expect(store.zoom).toBe(9);
        expect(store.center).toEqual([120, 30]);
        expect(store.bearing).toBe(270);
        expect(store.isTrackingOrientation).toBe(true);
    });

    it('normalizes bearing and persists changes through the watcher', async () => {
        const { useMapStore } = await import('./map-store');
        const store = useMapStore();

        store.setBearing(-90);
        await nextTick();

        expect(store.bearing).toBe(270);
        expect(storageSet).toHaveBeenCalledWith('mapState', expect.objectContaining({ bearing: 270 }));
        expect(storageSave).toHaveBeenCalled();
    });

    it('resets back to default values', async () => {
        const { useMapStore } = await import('./map-store');
        const { GeographicPoint } = await import('../libs/geolocation/types');
        const store = useMapStore();

        store.setZoom(20);
        store.setCenter(new GeographicPoint(30, 120));
        store.setBearing(45);
        store.setTrackingOrientation(true);
        store.resetToDefault();

        expect(store.zoom).not.toBe(20);
        expect(store.center).toEqual([0, 0]);
        expect(store.bearing).toBe(0);
        expect(store.isTrackingOrientation).toBe(false);
    });
});
