<script lang="ts">
	import { MapLibre } from "svelte-maplibre";
	import { invoke } from "@tauri-apps/api/core";
	import { Card } from "flowbite-svelte";

	let location = $state<{ latitude: number; longitude: number }>({
		latitude: 50,
		longitude: 20,
	});

	async function getGeolocation() {
		location = await invoke("get_geolocation");
		console.log(location);
	}
	getGeolocation();
</script>

<Card
	style="padding: 0; overflow: hidden; position: fixed; top: 2em; left: 2em; right : 2em; bottom: 2em;"
>
	<MapLibre
		center={[location.longitude, location.latitude]}
		zoom={7}
		class="map"
		standardControls
		style={`https://api.maptiler.com/maps/basic-v2/style.json?key=${__MAP_TILER_KEY__}`}
	/>
</Card>

<style>
	@import "tailwindcss";
	:global(.map) {
		height: 500px;
	}
</style>
