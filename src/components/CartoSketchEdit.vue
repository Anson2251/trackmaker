<reference path="../../src/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

<script setup lang="ts">
import { ref } from 'vue';
import BingMap from '@/components/BingMap/BingMap.vue'
import bingMapsPushPins from '@/components/BingMap/plugins/pushPin';
import bingMapCustomizedTouchpadBehavior from '@/components/BingMap/plugins/customizedTouchpadBehavior';
import bingMapsLiteModeHiDpi from '@/components/BingMap/plugins/liteModeHiDpi';
import bingMapsDrawing from '@/components/BingMap/plugins/drawingMap';

import localforage from 'localforage';
(window as any).localforage = localforage;

import { /*SaveOutline, AddOutline,*/ FolderOpen } from '@vicons/ionicons5';
import { NSplit, NIcon, NButton, NCard, NDrawer, NButtonGroup, NDrawerContent, type DrawerPlacement } from 'naive-ui';
import bingMaps from '@/components/BingMap/map';

import CartoSketchSelector from './CartoSketchSelector.vue';

import CartoSketchRoutes from '@/utils/cartosketch/route';

import CartoSketch from '@/utils/cartosketch';
import CartoSketchCLI from '@/utils/cartosketch/cli';
CartoSketchCLI.mountCLI();

interface mapWithPlugin extends bingMaps {
	plugins: {
		drawingTools: bingMapsDrawing
	},
}

// let save = () => console.warn("map not ready");
// let add = () => console.warn("map not ready");
// let load = () => console.warn("map not ready");

const sketchList = ref<CartoSketch.CartoSketchStates[]>([]);

const activeSelector = ref(false);
const selectorPlacement = ref<DrawerPlacement>("right");

const mapType = ref(Microsoft.Maps.MapTypeId.road);

const props = defineProps({
	liteMode: {
		default: true,
		type: Boolean
	},
	forceHighDpi: {
		default: false,
		type: Boolean
	}
})

const enableLiteMode = ref(props.liteMode);
const enableForceHighDpi = ref(props.forceHighDpi);

const plugins = [
	bingMapsDrawing,
	bingMapsPushPins,
	bingMapCustomizedTouchpadBehavior,
	bingMapsLiteModeHiDpi
]

const toolTipBarItems = [
	// {
	// 	title: "save",
	// 	icon: SaveOutline,
	// 	iconSize: 24,
	// 	callback: () => save()
	// },
	// {
	// 	title: "add",
	// 	icon: AddOutline,
	// 	iconSize: 24,
	// 	callback: () => add()
	// },
	{
		title: "Open",
		icon: FolderOpen,
		iconSize: 20,
		callback: () => { activeSelector.value = true }
	}
]

function ready(map: mapWithPlugin) {
	if (!map.plugins.drawingTools) {
		console.error("Fail to load the drawing module as the plugin is not ready");
		return;
	}
}

async function newRoute() {
	const name = prompt("Enter the name of the route");
	if (name) {
		try {
			await CartoSketchRoutes.writeRoute(name, []);
			updateList()
		}
		catch (err) {
			console.error(err)
		}
	}
}

function updateList() {
	CartoSketch.listCartoSketches().then((list) => {
		sketchList.value = list;
	});
}
updateList();
</script>

<template>
	<n-drawer v-model:show="activeSelector" :width="502" :placement="selectorPlacement">
		<n-drawer-content title="CartoSketch Library">
			<template #footer>
				<n-button-group>
					<n-button @click="activeSelector = false" type="tertiary">Import</n-button>
					<n-button @click="newRoute" type="tertiary">New</n-button>
					<n-button @click="activeSelector = false" type="tertiary">Close</n-button>
				</n-button-group>
			</template>
			<CartoSketchSelector :list="sketchList" />
		</n-drawer-content>
	</n-drawer>
	<n-split direction="horizontal" :max="0.8" :min="0.4" :size-default="0.7">
		<template #1>
			<div class="map-container">
				<BingMap :type="mapType" :lite-mode="enableLiteMode" :force-hidpi="enableForceHighDpi" :plugin="plugins"
					@ready="ready" />
			</div>
		</template>
		<template #2>
			<div class="edit-layout">
				<n-card content-class="route-edit-tool-tip">
					<div v-for="(item, index) in toolTipBarItems" :key="index" @click="item.callback"
						:title="item.title" class="tool-tip-item">
						<n-icon :size="item.iconSize">
							<component :is="item.icon" />
						</n-icon>
					</div>
				</n-card>

				<n-card class="draft-container" title="Components">
					<!--<EditViewRouteDraftLibrary :draft-list="draftList" />-->
				</n-card>
			</div>
		</template>
	</n-split>
</template>

<style>
.route-edit-tool-tip {
	grid-row: 1 / 1;
	grid-column: 1 / 1;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: left;
	align-items: center;

	padding: 0 !important;

	padding-left: 8px !important;
}
</style>

<style scoped>
.split-view {
	width: 100%;
	height: 100%;
	overflow-y: hidden;
}

.map-container {
	width: calc(100% - 16px);
	height: calc(100% - 16px);

	margin: 8px;
}

.edit-layout {
	width: 100%;
	height: 100%;

	max-height: 100%;
	overflow-y: hidden;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 3em auto;

	grid-gap: 8px;

	width: calc(100% - 16px);
	height: calc(100% - 16px);

	margin: 8px;
}

.tool-tip-item {
	height: 2em;
	width: 2em;

	border-radius: 4px;
	transition: background-color, 0.2s;

	display: flex;
	justify-content: center;
	align-items: center;
}

.tool-tip-item:hover {
	background-color: rgba(128, 128, 128, 0.3);
}

.tool-tip-item:active {
	background-color: rgba(128, 128, 128, 0.5);
}

.draft-container {
	grid-row: 2 / 2;
	grid-column: 1 / 1;

	overflow-y: auto;
}
</style>
