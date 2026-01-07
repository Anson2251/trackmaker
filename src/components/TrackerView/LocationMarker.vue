<script lang="ts" setup>
import { MglMarker } from "@indoorequal/vue-maplibre-gl";
import { inject, ref, onMounted, onUnmounted, computed } from "vue";
import type { GeolocationManager } from "@/libs/geolocation";
import type { GeographicPoint } from "@/libs/geolocation/types";
import LocatingIcon from "@/assets/locating-icon.svg?url";

interface Props {
  isWatchingCurrentLocation: boolean;
  deviceBearing: number;
}

const props = defineProps<Props>();

const locator = inject("geolocation") as GeolocationManager | undefined;

// ! BUG: failed address the discrepancy of the push pin and the recorded path's front

// Use a reactive reference to store current location
const currentLocation = ref<GeographicPoint | null>(locator?.getLastKnownLocation() || null);

// Subscribe to location updates
let locationListenerId: number | null = null;

onMounted(() => {
  if (locator) {
    // Subscribe to location updates
    locationListenerId = locator.addLocationListener((newLocation: GeographicPoint) => {
      currentLocation.value = newLocation;
    });
  }
});

onUnmounted(() => {
  // Clean up the listener when component unmounts
  if (locationListenerId !== null && locator) {
    locator.removeLocationListener(locationListenerId);
  }
});

const pointLngLatLike = computed<[number, number]>(() => currentLocation.value ? currentLocation.value.toLngLatLike() : [0, 0])
</script>

<template>
  <mgl-marker
    v-if="locator && locator.isServiceRunning() && isWatchingCurrentLocation && currentLocation"
    :coordinates="pointLngLatLike"
  >
    <template #marker>
      <div style="filter: drop-shadow(0px 2px 4px #888);">
        <img
          :src="LocatingIcon"
          :style="{
            'height': '4em',
            'width': '4em',
            'transform': `rotate(${deviceBearing}deg)`,
            'transform-origin': '2em 2.83em'
          }"
        >
      </div>
    </template>
  </mgl-marker>
</template>
