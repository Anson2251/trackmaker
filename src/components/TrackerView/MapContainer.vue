<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  shallowRef,
  watch,
} from "vue";
import { useI18n } from "vue-i18n";
import {
  MglMap,
  MglGeoJsonSource,
  MglLineLayer,
} from "@indoorequal/vue-maplibre-gl";
import { Map as Mgl } from "maplibre-gl";
import { TerraDraw } from "terra-draw";
import type { TerraDrawBaseDrawMode } from "node_modules/terra-draw/dist/extend";
import { useSettingsStore } from "@/store/settings-store";
import { useMapStore } from "@/store/map-store";
import { DeviceOrientationService } from "@/utils/device-orientation-service";

interface Props {
  styleUrl: string;
  geojsonSource: any;
  drawerModes: Array<{
    mode: TerraDrawBaseDrawMode<any>;
    name: string;
    icon: any;
  }>;
  onMapInit: (event: any) => void;
  onMapTouchStart: () => void;
  onMapTouchEnd: () => void;
  onMapClick: () => void;
}

const props = defineProps<Props>();

const map = shallowRef<Mgl | null>(null);
const draw = shallowRef<TerraDraw | null>(null);
const settings = useSettingsStore();
const mapStore = useMapStore();
const i18n = useI18n();

watch([() => settings.settings.mapLanguage, () => i18n.locale.value], (v) => {
  if (v && map.value)
    changeMapLanguage(map.value, v[0] === "interface" ? v[1] : v[0]);
});

const changeMapLanguage = (map: Mgl, lang: string) => {
  const language = lang === "zh-CN" ? "zh" : "en";
  const layers = [
    "City labels",
    "Road labels",
    "Station labels",
    "Airport labels",
    "Continent labels",
    "Country labels",
  ];

  for (const layer of layers) {
    map.setLayoutProperty(layer, "text-field", ["get", `name:${language}`]);
  }
};

function setupBuildingLayer(map: Mgl) {
  // Insert the layer beneath any symbol layer.
  const layers = map.getStyle().layers;

  let labelLayerId;
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    if (
      layer.type === 'symbol' &&
      layer.layout &&
      typeof layer.layout === 'object' &&
      'text-field' in layer.layout
    ) {
      labelLayerId = layer.id;
      break;
    }
  }

  map.addLayer(
    {
      'id': '3d-buildings',
      'source': 'openfreemap',
      'source-layer': 'building',
      'type': 'fill-extrusion',
      'minzoom': 15,
      'filter': ['!=', ['get', 'hide_3d'], true],
      'paint': {
        'fill-extrusion-color': [
          'interpolate',
          ['linear'],
          ['get', 'render_height'], 0, 'lightgray', 200, 'royalblue', 400, 'lightblue'
        ],
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          16,
          ['get', 'render_height']
        ],
        'fill-extrusion-base': ['case',
          ['>=', ['get', 'zoom'], 16],
          ['get', 'render_min_height'], 0
        ]
      }
    },
    labelLayerId
  );
}

function removeBuildingLayer(map: Mgl) {
  map.removeLayer('3d-buildings');
}

function initMap(event: any) {
  map.value = event.map;
  map.value?.addSource('openfreemap', {
    url: `https://tiles.openfreemap.org/planet`,
    type: 'vector',
  });
  if (map.value) changeMapLanguage(map.value as any, i18n.locale.value);
  if (mapStore.isTrackingOrientation) {
    // restart the tracking
    toggleOrientationTracking();
    toggleOrientationTracking();
  }

  map.value?.on("click", props.onMapClick);
  props.onMapInit(event);
}

// Toggle orientation tracking
const toggleOrientationTracking = (() => {
  let deviceOrientationHandlerId: number | null = null;
  return () => {
    mapStore.setTrackingOrientation(!mapStore.isTrackingOrientation);

    if (mapStore.isTrackingOrientation) {
      // Start tracking device orientation
      deviceOrientationHandlerId = DeviceOrientationService.addHandler((bearing) => {
        if (mapStore.isTrackingOrientation) {
          if (map.value?.isEasing() || map.value?.isMoving() || map.value?.isRotating() || map.value?.isZooming()) return;
          mapStore.setBearing(bearing);
        }
      });
    } else {
      // Stop tracking device orientation
      if (deviceOrientationHandlerId !== null) {
        deviceOrientationHandlerId = null;
        mapStore.setBearing(0);
        map.value?.setBearing(0);
      }
    }
  }
})();

// Expose functions to parent
defineExpose({
  setupBuildingLayer,
  removeBuildingLayer,
  toggleOrientationTracking,
  map,
  draw
});
</script>

<template>
  <mgl-map
    v-model:bearing="mapStore.bearing"
    v-model:zoom="mapStore.zoom"
    v-model:center="mapStore.center"
    :map-style="styleUrl"
    height="100%"
    @map:load="initMap"
    @map:touchstart="onMapTouchStart"
    @map:touchend="onMapTouchEnd"
  >
    <mgl-geo-json-source
      source-id="geojson"
      :data="(geojsonSource as any)"
      :line-metrics="true"
    >
      <mgl-line-layer
        layer-id="geojson"
        :layout="{
          'line-join': 'round',
          'line-cap': 'round',
        }"
        :paint="{
          'line-width': 5,
          'line-gradient': [
            'interpolate',
            ['linear'],
            ['line-progress'],
            0, '#00ff00',
            0.7, '#00DD00',
            0.9, '#00BB00',
            1, '#008800'
          ],
          'line-opacity': 0.8,
        }"
      />
    </mgl-geo-json-source>

    <slot />
  </mgl-map>
</template>
