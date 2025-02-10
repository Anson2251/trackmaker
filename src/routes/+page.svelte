<script lang="ts">
	import "../app.css";
	import {
		MapLibre,
		ControlGroup,
		Control,
		ControlButton,
		NavigationControl,
		GeolocateControl,
		FullscreenControl,
		ScaleControl,
	} from "svelte-maplibre";
	import { TerraDrawMapLibreGLAdapter } from "terra-draw-maplibre-gl-adapter";
	import {
		TerraDraw,
		TerraDrawRectangleMode,
		TerraDrawPointMode,
		TerraDrawSelectMode,
		TerraDrawPolygonMode,
		TerraDrawLineStringMode,
		TerraDrawCircleMode,
		TerraDrawFreehandMode,
	} from "terra-draw";
	import { Map } from "maplibre-gl";
	import { invoke } from "@tauri-apps/api/core";
	import { Card } from "flowbite-svelte";
	import {
		IconMapPin,
		IconVector,
		IconCircle,
		IconLine,
		IconPolygon,
		IconHandFinger,
	} from "@tabler/icons-svelte";
	import {
		injectCustomGeolocationProvider,
		IPGeolocation,
		locateTauri,
	} from "../lib/geolocation";

	injectCustomGeolocationProvider(IPGeolocation);
	locateTauri()
		.then((coordinate) => {
			location.latitude = coordinate.latitude;
			location.longitude = coordinate.longitude;
		})
		.catch((error) => {
			console.error("Error locating via Tauri API:", error);
		});

	let location = $state<{ latitude: number; longitude: number }>({
		latitude: 50,
		longitude: 20,
	});

	type drawerModesItem = {
		mode: any;
		name: string;
		icon: any;
	};

	let drawerModes: drawerModesItem[] = [
		{
			mode: new TerraDrawRectangleMode(),
			name: "TerraDraw: Rectangle",
			icon: IconVector,
		},
		{
			mode: new TerraDrawPointMode(),
			name: "TerraDraw: Point",
			icon: IconMapPin,
		},
		{
			mode: new TerraDrawPolygonMode(),
			name: "TerraDraw: Polygon",
			icon: IconPolygon,
		},
		{
			mode: new TerraDrawCircleMode(),
			name: "TerraDraw: Circle",
			icon: IconCircle,
		},
		{
			mode: new TerraDrawLineStringMode(),
			name: "TerraDraw: Line String",
			icon: IconLine,
		},
		{
			mode: new TerraDrawSelectMode(),
			name: "TerraDraw: Select",
			icon: IconHandFinger,
		},
	];

	let map: Map | null = null;
	let draw: TerraDraw | null = null;

	function initMap(mapInstance: Map) {
		map = mapInstance;
		draw = new TerraDraw({
			adapter: new TerraDrawMapLibreGLAdapter({ map: mapInstance }),
			modes: drawerModes.map((item) => item.mode),
		});
	}
</script>

<div class="map-container">
	<Card
		padding="none"
		class="overflow-hidden h-full"
		style="max-width: unset !important; max-height: unset !important;"
	>
		<MapLibre
			class="map"
			onload={initMap}
			center={[location.longitude, location.latitude]}
			zoom={7}
			style={`https://api.maptiler.com/maps/basic-v2/style.json?key=${__MAP_TILER_KEY__}`}
		>
			{#snippet children()}
				<NavigationControl />
				<GeolocateControl />
				<FullscreenControl />
				<ScaleControl />
				<Control class="flex flex-col gap-y-2">
					<ControlGroup>
						{#each drawerModes as item}
							<ControlButton
								icon={true}
								center={true}
								title={item.name}
								onclick={() => {
									draw?.start();
									draw?.setMode(item.mode.mode);
								}}
							>
								<item.icon />
							</ControlButton>
						{/each}
					</ControlGroup>
				</Control>
			{/snippet}
		</MapLibre>
	</Card>
</div>

<style>
	:global(.map) {
		height: 100%;
	}

	.map-container {
		--margin-width: 2em;
		margin: var(--margin-width);

		width: calc(100% - calc(var(--margin-width) * 2));
		height: calc(100% - calc(var(--margin-width) * 2));
	}
</style>
