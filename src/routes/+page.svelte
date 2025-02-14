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
		GeoJSON,
		LineLayer,
	} from "svelte-maplibre";
	import type { Feature } from "geojson";
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
	import { Card } from "flowbite-svelte";
	import {
		IconMapPin,
		IconVector,
		IconCircle,
		IconLine,
		IconPolygon,
		IconHandFinger,
		IconScribble,
		IconPlayerRecordFilled,
		IconSquareFilled,
		IconBackspace,
		IconDeviceFloppy,
		IconUpload,
	} from "@tabler/icons-svelte";
	import { onMount } from "svelte";
	import {
		injectTauriGeolocationProvider,
		locate,
		type Coordinate,
	} from "$lib/geolocation";
	import type { Result } from "neverthrow";
	import { storeGet, storeSet, storeInit } from "$lib/store";
	import { fileSaveDialog, createTextFile, saveString } from "$lib/utilities";

	import TextFileUploadModel from "../components/TextFileUploadModel.svelte";

	if (__IN_TAURI__) {
		onMount(injectTauriGeolocationProvider);
	}

	let location = $state<Coordinate>({
		latitude: 0,
		longitude: 0,
	});

	onMount(() => {
		locate().map((position) => {
			location.latitude = position.coords.latitude;
			location.longitude = position.coords.longitude;
		});

		storeInit().then(() =>
			storeGet<Coordinate[]>("stored-path").then((res) =>
				res.map((coords) => {
					if (coords && coords.length !== 0) {
						path = JSON.parse(JSON.stringify(coords));
						console.info("Recovered the tracked path from store");
					}
				}),
			),
		);
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
			mode: new TerraDrawSelectMode({
				// Allow manual deselection of features
				allowManualDeselection: true, // this defaults to true - allows users to deselect by clicking on the map

				// Enable editing tools by Feature
				flags: {
					// Point
					point: {
						feature: {
							draggable: true,
						},
					},

					// Polygon
					polygon: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},

					// Line
					linestring: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},

					// Freehand
					freehand: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},

					// Circle
					circle: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},

					// Rectangle
					rectangle: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},
				},
			}),
			name: "TerraDraw: Select",
			icon: IconHandFinger,
		},
		{
			mode: new TerraDrawFreehandMode(),
			name: "TerraDraw: Free Hand",
			icon: IconScribble,
		},
	];

	let map: Map | null = null;
	let draw: TerraDraw | null = null;
	let activeDrawMethod = $state<string>("select");

	function initMap(mapInstance: Map) {
		map = mapInstance;
		draw = new TerraDraw({
			adapter: new TerraDrawMapLibreGLAdapter({ map: mapInstance }),
			modes: drawerModes.map((item) => item.mode),
		});
	}

	let pathRecording = $state(false);
	let path = $state<Coordinate[]>([]);
	// const geojson = $derived({
	// 	type: "Feature",
	// 	geometry: {
	// 		type: "LineString",
	// 		coordinates: path.map((point) => [point.longitude, point.latitude]),
	// 	},
	// 	properties: {}, // You can add properties here if needed
	// });

	const geojson: Feature = $derived({
		type: "Feature",
		properties: {
			name: "Maine",
		},
		geometry: {
			type: "LineString",
			coordinates: path.map((p) => [p.longitude, p.latitude]),
		},
	});

	let intervalId: number | NodeJS.Timeout | undefined = undefined;

	function changeRecordState() {
		pathRecording = !pathRecording;

		if (pathRecording) {
			intervalId = window.setInterval(async () => {
				const newPoint: Result<Coordinate, GeolocationPositionError> =
					await locate().map((t) => ({
						latitude: t.coords.latitude,
						longitude: t.coords.longitude,
					}));
				newPoint.match(
					(p) => path.push(p),
					() => {
						window.clearInterval(intervalId);
						pathRecording = false;
						console.error("Fail to record the path");
					},
				);
			}, 1000);
		} else {
			window.clearInterval(intervalId);
			pathRecording = false;
			console.log(path);
			storeSet("stored-path", JSON.parse(JSON.stringify(path)));
		}
	}



	async function savePath() {
		if(__IN_TAURI__) {
			const path = await fileSaveDialog("tracked-path-export", ["json"]);
			console.log("saving to", path)
			if(path) createTextFile(path, JSON.stringify(geojson));
		}
		else saveString(JSON.stringify(geojson), "application/json", "tracked-path-export");
	}

	let uploadModelOpened = $state(false);
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
			style={/*`https://api.maptiler.com/maps/basic-v2/style.json?key=${__MAP_TILER_KEY__}`*/ "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"}
			hash
		>
			{#snippet children()}
				<NavigationControl />
				<GeolocateControl trackUserLocation={true}/>
				<FullscreenControl />
				<ScaleControl />
				<Control class="flex flex-col gap-y-2">
					<ControlGroup>
						{#each drawerModes as item}
							<ControlButton
								class={item.mode.mode == activeDrawMethod
									? "bg-blue-200 rounded-sm transition-colors"
									: ""}
								icon={true}
								center={true}
								title={item.name}
								onclick={() => {
									if (activeDrawMethod == item.mode.mode) {
										draw?.setMode("select");
										activeDrawMethod = "select";
									} else {
										activeDrawMethod = item.mode.mode;
										draw?.start();
										draw?.setMode(item.mode.mode);
									}
								}}
							>
								<item.icon class="stroke-stone-800" size={20} />
							</ControlButton>
						{/each}
					</ControlGroup>

					<ControlGroup>
						<ControlButton
							icon={true}
							onclick={changeRecordState}
							title={pathRecording
								? "Recording…"
								: "Track Recorder"}
						>
							{#if pathRecording}
								<IconSquareFilled
									size={16}
									class="stroke-red-700 fill-red-600"
								/>
							{:else}
								<IconPlayerRecordFilled
									size={20}
									class="stroke-sky-800 fill-sky-700"
								/>
							{/if}
						</ControlButton>
						{#if path.length > 0 && !pathRecording}
							<ControlButton
								icon={true}
								class="stroke-red-700 hover:bg-red-700 hover:stroke-white rounded-sm transition-all"
								onclick={() => (path = [])}
							>
								<IconBackspace
									class="stroke-inherit"
									size={20}
								/>
							</ControlButton>
							<ControlButton
								icon={true}
								onclick={savePath}
							>
								<IconDeviceFloppy
									class="stroke-stone-800"
									size={20}
								/>
							</ControlButton>
						{/if}
						{#if path.length == 0 && !pathRecording}
							<ControlButton
								icon={true}
								onclick={() => uploadModelOpened = !uploadModelOpened}
							>
								<IconUpload
									class="stroke-stone-800"
									size={20}
								/>
							</ControlButton>
						{/if}
					</ControlGroup>
				</Control>
				<GeoJSON id="maine" data={geojson}>
					<LineLayer
						paint={{
							"line-width": 5,
							"line-dasharray": [5, 2],
							"line-color": "#008800",
							"line-opacity": 0.8,
						}}
					/>
				</GeoJSON>
			{/snippet}
		</MapLibre>
	</Card>
</div>

<div>
<TextFileUploadModel opened={uploadModelOpened}/>
</div>

<style lang="postcss">
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
