<script lang="ts" setup>
import { ref } from 'vue';
import { useOsTheme } from "naive-ui";
import BingMap from '@/components/BingMap/BingMap.vue';
import type {MapPluginConstructor} from "@/libs/map-backends/plugin";
import  BingMapBackend from "@/libs/map-backends/bing-maps/bing-map-backend";
import BingMapPlugin_PushPins from '@/libs/map-backends/bing-maps/plugins/pushpin';
import BingMapPlugin_CustomizedTouchpadBehavior from '@/libs/map-backends/bing-maps/plugins/customized-touchpad-behavior';

const mapType = ref(String(
	useOsTheme().value === "dark"
		? Microsoft.Maps.MapTypeId.canvasDark
		: Microsoft.Maps.MapTypeId.canvasLight
));

const plugins = ref<(MapPluginConstructor<BingMapBackend>)[]>([
	BingMapPlugin_PushPins,
	BingMapPlugin_CustomizedTouchpadBehavior
]);
const zoom = ref(10);
</script>

<template>
	<div class="map-layout">
		<BingMap :map-type="mapType" :lite-mode="false" :plugin="plugins" :zoom="zoom" :tracking="true"/>
	</div>
</template>

<style>
.map-layout {
	width: 100%;
	height: 100%;
}
</style>
