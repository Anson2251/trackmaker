<script lang="ts" setup>
import {
  MglNavigationControl,
  MglScaleControl,
  MglFullscreenControl,
} from "@indoorequal/vue-maplibre-gl";
</script>

<template>
  <div>
    <mgl-navigation-control position="top-left" />
    <mgl-fullscreen-control position="top-left" />
    <mgl-scale-control position="bottom-left" />
  </div>
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
