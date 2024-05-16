<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script lang="ts" setup>
import { ref } from 'vue';
import { useOsTheme } from "naive-ui";
import BingMap from '../components/BingMap/BingMap.vue';
import bingMapsPlugin from '@/components/BingMap/plugins/base';
import bingMapsPushPins from '@/components/BingMap/plugins/pushpin';
import bingMapCustomizedTouchpadBehavior from '@/components/BingMap/plugins/customized-touchpad-behavior';

const mapType = ref(String(
	useOsTheme().value === "dark"
		? Microsoft.Maps.MapTypeId.canvasDark
		: Microsoft.Maps.MapTypeId.canvasLight
));

const plugins = ref<(typeof bingMapsPlugin)[]>([
	bingMapsPushPins,
	bingMapCustomizedTouchpadBehavior
]);
</script>

<template>
	<div class="map-layout">
		<BingMap :map-type="mapType" :lite-mode="false" :plugin="plugins" />
	</div>
</template>

<style>
.map-layout {
	width: 100%;
	height: 100%;
}
</style>
