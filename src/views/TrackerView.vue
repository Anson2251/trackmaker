<script lang="ts" setup>
import {
	MglMap,
	MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';

const center: [number, number] = [12.550343, 55.665957];
const zoom = 8;

const mapTilerKey = __MAPTILER_KEY__;
const styleUrl = `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapTilerKey}`;
</script>

<template>
	<div class="map-layout">
		<mgl-map :map-style="styleUrl" :center="center" :zoom="zoom" height="100%">
			<mgl-navigation-control />
		</mgl-map>
	</div>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";

.map-layout {
	width: 100%;
	height: 100%;
}
</style>
