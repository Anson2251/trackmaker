<script lang="ts" setup>
import { MglCustomControl } from "@indoorequal/vue-maplibre-gl";
import { NIcon } from "naive-ui";
import { CurrentLocation } from "@vicons/tabler";
import type { GeolocationManager } from "@/libs/geolocation";
import PlatformInfo from "@/utils/platform";

const platform = new PlatformInfo();
const isMobile = platform.isMobile;
const devMode = !__RELEASE_MODE__;

interface Props {
  locator: GeolocationManager;
  isWatchingCurrentLocation: boolean;
}

interface Emits {
  (e: 'toggle'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const toggleWatchingCurrentLocation = () => {
  emit('toggle');
};
</script>

<template>
  <mgl-custom-control position="top-left">
    <button
      v-if="isMobile && locator.isUsingGPS() || devMode"
      :class="[
        'btn-control',
        { active: isWatchingCurrentLocation },
      ]"
      @click="toggleWatchingCurrentLocation"
    >
      <n-icon :size="20">
        <CurrentLocation />
      </n-icon>
    </button>
  </mgl-custom-control>
</template>

<style scoped>
.btn-control {
  display: flex !important;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease, border-radius 0.2s ease;
}

.btn-control.active {
  background-color: #bfdbfe;
  border-radius: 0.125rem;
}
</style>
