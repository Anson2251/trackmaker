<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script lang="ts">
import BingMap from '../components/BingMap/BingMap.vue'
/// <reference path="../../node_modules/@types/bingmaps/index.d.ts" />

export default {
	components: {
		BingMap
	},
	setup() {
		return {
			Microsoft
		}
	}
}
</script>

<template>
	<div class="map-layout">
		<BingMap :type="Microsoft.Maps.MapTypeId.road" :lite-mode="true"/>
	</div>
</template>

<style>
.map-layout {
	width: 100%;
	height: 100%;
}
</style>
