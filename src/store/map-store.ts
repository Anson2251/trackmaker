import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { storageGet, storageSet, storageSave } from '../libs/storage';
import { GeographicPoint } from '../libs/geolocation/types';

export type MapState = {
  zoom: number;
  center: [number, number];
  bearing: number;
  isTrackingOrientation: boolean;
  lastUpdateTime: number;
}

export const useMapStore = defineStore('map', () => {
  const zoom = ref(7);
  const center = ref<[number, number]>([0,0]);
  const bearing = ref(0);
  const lastUpdateTime = ref(0);
  const isTrackingOrientation = ref(false);

  async function init() {
    const saved = await storageGet<MapState>('mapState');
    if (saved) {
      zoom.value = saved.zoom;
      center.value = saved.center;
      bearing.value = saved.bearing;
      isTrackingOrientation.value = saved.isTrackingOrientation;
      lastUpdateTime.value = saved.lastUpdateTime;
    }
  }

  async function save() {
    lastUpdateTime.value = Date.now();
    const mapState: MapState = {
      zoom: zoom.value,
      center: center.value,
      bearing: bearing.value,
      isTrackingOrientation: isTrackingOrientation.value,
      lastUpdateTime: lastUpdateTime.value
    };
    await storageSet('mapState', JSON.parse(JSON.stringify(mapState)));
    await storageSave();
  }

  function setZoom(newZoom: number) {
    zoom.value = newZoom;
  }

  function setCenter(newCenter: GeographicPoint) {
    center.value = newCenter.toLngLatLike();
  }

  function setBearing(newBearing: number) {
    bearing.value = newBearing;
  }

  function setTrackingOrientation(tracking: boolean) {
    isTrackingOrientation.value = tracking;
  }

  function resetToDefault() {
    zoom.value = 7;
    center.value = [0,0];
    bearing.value = 0;
    isTrackingOrientation.value = false;
  }

  // Watch for changes and auto-save
  watch([zoom, center, bearing, isTrackingOrientation], save, { deep: true });

  return {
    // State
    zoom,
    center,
    bearing,
    isTrackingOrientation,
    lastUpdateTime,

    // Actions
    init,
    save,
    setZoom,
    setCenter,
    setBearing,
    setTrackingOrientation,
    resetToDefault
  };
});
