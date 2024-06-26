<script lang="ts" setup>
/// <reference path="../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { ref } from 'vue';
import { useOsTheme } from "naive-ui";
import BingMap from '@/components/BingMap/BingMap.vue';
import type {MapPluginConstructor} from "@/libs/map-backends/plugin";
import  BingMapBackend from "@/components/BingMap/bing-map-backend";
import BingMapPlugin_PushPins from '@/components/BingMap/plugins/pushpin';
import BingMapPlugin_CustomizedTouchpadBehavior from '@/components/BingMap/plugins/customized-touchpad-behavior';

const mapType = ref(String(
	useOsTheme().value === "dark"
		? Microsoft.Maps.MapTypeId.canvasDark
		: Microsoft.Maps.MapTypeId.canvasLight
));

const plugins = ref<(MapPluginConstructor<BingMapBackend>)[]>([
	BingMapPlugin_PushPins,
	BingMapPlugin_CustomizedTouchpadBehavior
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
