<script lang="ts" setup>
import { ref } from 'vue';
import { useOsTheme } from "naive-ui";

import MapLibreGLView from "@/libs/map-backends/maplibre-gl/MapLibreGLView.vue";

const mapType = ref(String(
	useOsTheme().value === "dark"
		? Microsoft.Maps.MapTypeId.canvasDark
		: Microsoft.Maps.MapTypeId.canvasLight
));

const zoom = ref(10);
</script>

<template>
	<div class="map-layout">
		<MapLibreGLView :map-type="mapType" :lite-mode="false" :plugin="[]" :zoom="zoom" :tracking="true"/>
	</div>
</template>

<style>
.map-layout {
	width: 100%;
	height: 100%;
}
</style>
