<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script lang="ts">
import BingMap from '../components/BingMap/BingMap.vue'
import bingMapsPushPins from '@/components/BingMap/plugins/pushPin';
import bingMapCustomizedTouchpadBehavior from '@/components/BingMap/plugins/customizedTouchpadBehavior';

export default {
	components: {
		BingMap,
	},
	setup() {
		const plugins = [
			bingMapsPushPins,
			bingMapCustomizedTouchpadBehavior
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
		<BingMap :type="Microsoft.Maps.MapTypeId.road" :lite-mode="false" :plugin="plugins"/>
	</div>
</template>

<style>
.map-layout {
	width: 100%;
	height: 100%;
}
</style>
