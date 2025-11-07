<script lang="ts" setup>
import { MglMarker } from "@indoorequal/vue-maplibre-gl";
import { inject } from "vue";
import type { GeolocationManager } from "@/libs/geolocation";
import LocatingIcon from "@/assets/locating-icon.svg?url";

interface Props {
  isWatchingCurrentLocation: boolean;
  deviceBearing: number;
}

defineProps<Props>();

const locator = inject("geolocation") as GeolocationManager | undefined;
</script>

<template>
  <mgl-marker
    v-if="locator && locator.isServiceRunning() && isWatchingCurrentLocation"
    :coordinates="locator.getLastKnownLocation().toLngLatLike()"
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
