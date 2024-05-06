<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script lang="ts">
import { ref } from 'vue';
import { useOsTheme } from "naive-ui";
import BingMap from '../components/BingMap/BingMap.vue';
import bingMapsPushPins from '@/components/BingMap/plugins/pushPin';
import bingMapCustomizedTouchpadBehavior from '@/components/BingMap/plugins/customizedTouchpadBehavior';

export default {
	components: {
		BingMap,
	},
	setup() {
		const mapType = ref(String(
			useOsTheme().value ===  "dark" 
			? Microsoft.Maps.MapTypeId.canvasDark 
			: Microsoft.Maps.MapTypeId.canvasLight
		))


		const plugins = [
			bingMapsPushPins,
			bingMapCustomizedTouchpadBehavior
		]
		return {
			plugins,
			Microsoft,
			mapType,
		}
	}
}
</script>

<template>
	<div class="map-layout">
		<BingMap :map-type="mapType" :lite-mode="false" :plugin="plugins"/>
	</div>
</template>

<style>
.map-layout {
	width: 100%;
	height: 100%;
}
</style>
