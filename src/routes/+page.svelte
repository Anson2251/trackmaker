<script lang="ts">
	import "../app.css";
	import { MapLibre, ControlGroup, ControlButton } from "svelte-maplibre";
	import { TerraDrawMapLibreGLAdapter } from "terra-draw-maplibre-gl-adapter";
	import { TerraDraw, TerraDrawRectangleMode } from "terra-draw";
	import { Map } from "maplibre-gl";
	import { invoke } from "@tauri-apps/api/core";
	import { Card } from "flowbite-svelte";

	let location = $state<{ latitude: number; longitude: number }>({
		latitude: 50,
		longitude: 20,
	});

	async function getGeolocation() {
		location = await invoke("get_geolocation");
		if (location == null) {
			console.error(
				"Fail to get the location via https://freeipapi.com/api/json",
			);
		}
	}

	function initPlugins(map: Map) {
		const draw = new TerraDraw({
			adapter: new TerraDrawMapLibreGLAdapter({ map }),
			modes: [new TerraDrawRectangleMode()],
		});
		draw.start();
		draw.setMode("rectangle");
	}

	getGeolocation();
</script>

<Card padding="none" class="overflow-hidden" style="margin: 2em">
	<h3 class="text-xl font-bold mb-4">Map with TerraDraw</h3>
	<MapLibre
		class="map"
		onload={initPlugins}
		center={[location.longitude, location.latitude]}
		zoom={7}
		standardControls
		style={`https://api.maptiler.com/maps/basic-v2/style.json?key=${__MAP_TILER_KEY__}`}
	/>
</Card>

<style>
	:global(.map) {
		height: 500px;
	}
</style>
