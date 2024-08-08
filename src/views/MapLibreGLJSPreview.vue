<script lang="ts" setup>
import { ref } from 'vue';

import MapLibreGLView from "@/libs/map-backends/maplibre-gl/MapLibreGLView.vue";

import MapLibreGLPlugin_TerrainLayer from "@/libs/map-backends/maplibre-gl/plugins/terrain-layer";
import MapLibreGLPlugin_BuildingLayer from '@/libs/map-backends/maplibre-gl/plugins/building-layer';

const plugins = ref([ MapLibreGLPlugin_BuildingLayer, MapLibreGLPlugin_TerrainLayer ]);

const mapType = ref("basic");

const zoom = ref(10);
</script>

<template>
	<div class="map-layout">
		<MapLibreGLView :map-type="mapType" :lite-mode="false" :plugin="plugins" :zoom="zoom" :tracking="true"/>
	</div>
</template>

<style>
.map-layout {
	width: 100%;
	height: 100%;
}
</style>
