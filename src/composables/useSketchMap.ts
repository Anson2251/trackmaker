import { ref, shallowRef } from 'vue';
import type { Map as Mgl } from 'maplibre-gl';

const mapTilerKey = __MAPTILER_KEY__;
const styleUrl = `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapTilerKey}`;

export function useSketchMap() {
  const zoom = ref(7);
  const map = shallowRef<Mgl | null>(null);
  const center = ref<[number, number]>([0, 0]);

  function initMap(event: { map: Mgl }) {
    map.value = event.map;
  }

  function setCenter(coords: [number, number]) {
    center.value = coords;
    if (map.value) {
      map.value.setCenter(coords);
    }
  }

  function setZoom(newZoom: number) {
    zoom.value = newZoom;
    if (map.value) {
      map.value.setZoom(newZoom);
    }
  }

  return {
    zoom,
    map,
    center,
    styleUrl,
    initMap,
    setCenter,
    setZoom,
  };
}
