<script lang="ts" setup>
import { MglMarker } from "@indoorequal/vue-maplibre-gl";
import { inject, ref, onMounted, onUnmounted, computed } from "vue";
import type { GeolocationManager } from "@/libs/geolocation";
import type { GeographicPoint } from "@/libs/geolocation/types";

interface Props {
  isWatchingCurrentLocation: boolean;
}

const props = defineProps<Props>();

const locator = inject("geolocation") as GeolocationManager | undefined;

// Use a reactive reference to store current location and kalman state
const currentLocation = ref<GeographicPoint | null>(locator?.getLastKnownLocation() || null);
const kalmanState = ref(locator?.getKalmanState() || null);

// Subscribe to location updates
let locationListenerId: number | null = null;
let kalmanInterval: number | null = null;

onMounted(() => {
  if (locator) {
    // Subscribe to location updates
    locationListenerId = locator.addLocationListener((newLocation: GeographicPoint) => {
      currentLocation.value = newLocation;
    });

    // Poll kalman state
    kalmanInterval = setInterval(() => {
      kalmanState.value = locator.getKalmanState();
    }, 100); // Update at 10Hz
  }
});

onUnmounted(() => {
  // Clean up the listener when component unmounts
  if (locationListenerId !== null && locator) {
    locator.removeLocationListener(locationListenerId);
  }
  if (kalmanInterval !== null) {
    clearInterval(kalmanInterval);
  }
});

const pointLngLatLike = computed<[number, number]>(() => currentLocation.value ? currentLocation.value.toLngLatLike() : [0, 0]);

const velocityDirection = computed(() => {
  if (!kalmanState.value) return 0;
  const { x, y } = kalmanState.value.velocity;
  return Math.atan2(y, x) * (180 / Math.PI); // Convert to degrees
});
</script>

<template>
  <mgl-marker
    v-if="locator && locator.isServiceRunning() && isWatchingCurrentLocation && currentLocation && kalmanState"
    :coordinates="pointLngLatLike"
  >
    <template #marker>
      <div style="filter: drop-shadow(0px 2px 4px #888);">
        <div
          style="
            width: 0;
            height: 0;
            border-left: 0.5em solid transparent;
            border-right: 0.5em solid transparent;
            border-bottom: 4em solid #3b82f6;
            transform: rotate(180deg);
            transform-origin: 0.5em 3em;
          "
          :style="{ transform: `rotate(${180 + velocityDirection}deg)` }"
        ></div>
      </div>
    </template>
  </mgl-marker>
</template>
