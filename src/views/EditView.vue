<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script lang="ts">
import BingMap from '../components/BingMap/BingMap.vue'
import bingMapsPushPins from '@/components/BingMap/plugins/pushPin';
import { bingMapsDrawing } from '@/components/BingMap/plugins/drawingMap';

export default {
	components: {
		BingMap
	},
	setup() {
		const plugins = [
			bingMapsDrawing,
			bingMapsPushPins,
		]
		return {
			plugins,
			Microsoft
		}
	}
}
</script>

<template>
	<div class="map-layout">
		<BingMap :type="Microsoft.Maps.MapTypeId.road" :lite-mode="true" :plugin="plugins"/>
	</div>
</template>

<style>
.map-layout {
	width: 100%;
	height: 100%;
}
</style>
