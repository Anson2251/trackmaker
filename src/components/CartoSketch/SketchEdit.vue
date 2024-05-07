<reference path="../../src/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

<script setup lang="ts">
import { ref } from 'vue';

import BingMap from '@/components/BingMap/BingMap.vue'
import { plugins, type MapWithPlugins } from './bing-map-plugins';

import { FolderOpen } from '@vicons/ionicons5';

import {
	NSplit,
	NIcon,
	NCard,
	type DrawerPlacement
} from 'naive-ui';

import CartoSketchRoutes from '@/utils/cartosketch/route';
import CartoSketch from '@/utils/cartosketch';
import CartoSketchCLI from '@/utils/cartosketch/cli';

import SelectorDrawer from './SelectorDrawer.vue';
CartoSketchCLI.mountCLI();

// let save = () => console.warn("map not ready");
// let add = () => console.warn("map not ready");
// let load = () => console.warn("map not ready");

const sketchList = ref<CartoSketch.CartoSketchStates[]>([]);
const selectedSketchID = ref<string>("")

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
		callback: () => openDrawer()
	}
]

function ready(map: MapWithPlugins) {
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

async function removeCartoSketchFromList(id: string) {
	await CartoSketch.removeCartoSketch(id);
	updateList();
}

function selectCartoSketchFromList(id: string) {
	selectedSketchID.value = id;
	console.log("selected", selectedSketchID.value)
	closeDrawer();
}

function closeDrawer() {
	activeSelector.value = false;
}

function openDrawer() {
	activeSelector.value = true;
}

function showAlert(msg: string) {
	alert(msg);
}
</script>

<template>
	<SelectorDrawer 
		:list="sketchList" v-model:active="activeSelector" :placement="selectorPlacement"
		@new="newRoute" @remove="removeCartoSketchFromList" @select="selectCartoSketchFromList" 
		@activeStateSync="(state: boolean) => {activeSelector = state}" @import="showAlert('Not implemented')"
	/>
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
