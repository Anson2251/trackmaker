<script setup lang="ts">
/// <reference path="../../../src/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

// TODO: separate the map component into a separate file

import {ref, onMounted} from 'vue';

import BingMap from '@/components/BingMap/BingMap.vue'
import {type MapWithPlugins, plugins} from './bing-map-plugins';

import {type DrawerPlacement, NButton, NCard, NEmpty, NIcon, NSplit} from 'naive-ui';
import {FolderOpen, MapOutline as MapIcon, Save} from '@vicons/ionicons5';

import SelectorDrawer from './SelectorDrawer.vue';
// import SketchComponentLibrary from "@/components/CartoSketch/SketchComponentLibrary.vue";
// import PropertiesEdit from "@/components/CartoSketch/PropertiesEdit.vue";

import {BingMapDrawingBackend} from "@/components/BingMap/drawing-backend";
import SketchEditAdapter from "@/libs/drawing-map/sketch-edit-adapter";

import CartoSketch, {type CartoSketchInfo} from 'src/libs/cartosketch';

interface Props {
	liteMode?: boolean;
	forceHighDpi?: boolean;
	mapType?: string
}
const props = defineProps<Props>()

const adapter = new SketchEditAdapter<any>();

const sketchList = ref<CartoSketchInfo[]>([]);

let emptySelection = ref(false);
// const selectedComponentID = ref<number | undefined>();
// let selectedComponentConfigs = ref<Record<string, string | number | boolean>>({})

const localMapType = ref(Microsoft.Maps.MapTypeId.road);


/* drawer */
const activeSelector = ref(false);
const selectorPlacement = ref<DrawerPlacement>("right");
const drawer = {
	open: () => activeSelector.value = true,
	close: () => activeSelector.value = false
}


/* toolbar */
const toolBarIconSize = 20;
const toolTipBarItems = [
	{
		title: "save",
		icon: Save,
		iconSize: toolBarIconSize,
		callback: adapter.save.bind(adapter)
	},
	{
		title: "Open",
		icon: FolderOpen,
		iconSize: toolBarIconSize,
		callback: drawer.open
	}
]

function mapReady(map: MapWithPlugins) {
	const backend = new BingMapDrawingBackend(map);
	adapter.setBackend(backend);
	emptySelection.value = true;

	// watch(selectedComponentID, () => {
	// 	if(!map.plugins.drawingTools) return {};
	// 	const properties = map.plugins.drawingTools.primitiveComponentMetaMap.get(selectedComponentID.value!)
	// 	if(!properties) return {};
	// 	console.log("properties selected:", properties);
	// 	selectedComponentConfigs.value = properties.properties;
	// })

	// selectedComponentConfigs = computed(() => selectedSketch.value?.getComponentConfigs(selectedComponentName.value!) || {})
}

async function newSketch() {
	const name = prompt("Enter the name of the new CartoSketch");
	if (name) {
		await CartoSketch.write(new CartoSketch(name));
		updateList();
	}
}

function updateList() {
	CartoSketch.getInfoList().then((list) => {
		sketchList.value = list;
	});
}

async function removeCartoSketchFromList(id: string) {
	await CartoSketch.remove(id);
	updateList();
}

async function selectCartoSketchFromList(id: string) {
	await adapter.load(id);
	console.log("selected sketch, id:", id);
	drawer.close();
}

function showAlert(msg: string) {
	alert(msg);
}

onMounted(() => {
	updateList();
});
</script>

<template>
	<SelectorDrawer :list="sketchList" v-model:active="activeSelector" :placement="selectorPlacement" @new="newSketch"
					@remove="removeCartoSketchFromList" @select="selectCartoSketchFromList"
					@activeStateSync="(state: boolean) => { activeSelector = state }"
					@import="showAlert('Not implemented')"/>
	<n-split direction="horizontal" :max="0.8" :min="0.4" :default-size="0.7">
		<template #1>
			<n-card class="map-container" content-style="padding: 0">
				<BingMap v-show="emptySelection" :map-type="(localMapType as unknown as string)" :plugin="plugins"
						:lite-mode="props.liteMode"
						:force-hidpi="props.forceHighDpi"
						@ready="mapReady"/>
				<n-empty description="Map" v-if="!emptySelection" size="huge"
						style="height: 100%; justify-content: center">
					<template #icon>
						<n-icon>
							<MapIcon/>
						</n-icon>
					</template>
				</n-empty>
			</n-card>
		</template>
		<template #2>
			<div class="edit-layout">
				<n-card content-class="route-edit-tool-tip">
					<div v-for="(item, index) in toolTipBarItems" :key="index" @click="item.callback"
						:title="item.title" class="tool-tip-item">
						<n-icon :size="item.iconSize">
							<component :is="item.icon"/>
						</n-icon>
					</div>
				</n-card>

				<n-card class="draft-container">
					<template #header v-if="emptySelection">
						Components
					</template>
					<n-split direction="vertical" :max="0.8" :min="0.3" :default-size="0.7" v-if="emptySelection">
						<template #1>
							<!--							<SketchComponentLibrary :components="classifiedComponentNames"-->
							<!--													v-model:value="selectedComponentName"/>-->
						</template>
						<template #2>
							<!-- <PropertiesEdit /> -->
						</template>
					</n-split>
					<n-empty description="No sketch selected" v-if="!emptySelection"
							style="height: 100%; justify-content: center">
						<template #icon>
							<n-icon>
<!--																<properties-edit :properties="{color: '#FF0000'}" />-->
							</n-icon>
						</template>
						<template #extra>
							<n-button size="small" @click="drawer.open()">Select a sketch</n-button>
						</template>
					</n-empty>
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
.map-container {
	width: calc(100% - 16px);
	height: calc(100% - 16px);

	margin: 8px;
	padding: 0;
}

.edit-layout {
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
