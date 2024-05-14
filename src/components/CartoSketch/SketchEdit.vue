<reference path="../../src/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

<script setup lang="ts">
import { ref, watch } from 'vue';

import BingMap from '@/components/BingMap/BingMap.vue'
import { plugins, type MapWithPlugins } from './bing-map-plugins';
import { type PolylineWithName } from '../BingMap/plugins/drawingm-map';

import {
	NSplit,
	NIcon,
	NCard,
	NButton,
	NEmpty,
	type DrawerPlacement
} from 'naive-ui';
import { Save, FolderOpen, MapOutline as MapIcon } from '@vicons/ionicons5';
import { Edit } from '@vicons/tabler'

import SelectorDrawer from './SelectorDrawer.vue';
import SketchComponentLibrary from './SketchComponentLibrary.vue';
import PropertiesEdit from './PropertiesEdit.vue';

import BidirectionalMap from '@/utils/bidirectional-map';
import CartoSketchPrimitiveRegistration from './primitive-registration';

import CartoSketchRoutes from '@/utils/cartosketch/route';
import CartoSketch from '@/utils/cartosketch';

import { type GeographicRouteItem } from '@/utils/cartosketch/route';
import { type GeographicDraftItem } from '@/utils/cartosketch/draft';

import CartoSketchCLI from '@/utils/cartosketch/cli';
CartoSketchCLI.mountCLI();

type Option = { value: string, label: string };
interface ClassifiedComponentInfo {
	routes: Option[],
	drafts: Option[],
	unknowns: Option[],
}

interface Props {
	liteMode?: boolean;
	forceHighDpi?: boolean;
	mapType?: string
}

const props = defineProps<Props>()

const mapNotReadyWarn = (...args: any[]) => console.warn("map not ready, received args", ...args);
let saveSketch = mapNotReadyWarn;
let selectSketch = async (...args: any[]) => { mapNotReadyWarn(...args) };

const sketchList = ref<CartoSketch.CartoSketchStates[]>([]);

const selectedSketch = ref<CartoSketch.Sketch | null>(null);
const selectedSketchRoutes = new Map<string, GeographicRouteItem>();
const selectedSketchDrafts = new Map<string, GeographicDraftItem>();

const selectedComponentName = ref<string | undefined>();
const selectedComponentSpace = ref<string | undefined>();

const localMapType = ref(Microsoft.Maps.MapTypeId.road);

/* registration */
const componentClassification = new BidirectionalMap<number, "route" | "draft" | "unknown">();
const componentsPrimitivesMap = new BidirectionalMap<string, number>();
/** to manage the use of each primitive */
const registrations = new CartoSketchPrimitiveRegistration(componentsPrimitivesMap, componentClassification);
const classifiedComponentNames = ref<ClassifiedComponentInfo>({ routes: [], drafts: [], unknowns: [] });


/* drawer */
const activeSelector = ref(false);
const selectorPlacement = ref<DrawerPlacement>("right");

const drawer = {
	open: () => activeSelector.value = true,
	close: () => activeSelector.value = false
}


/* tool bar */

const toolBarIconSize = 20;
const toolTipBarItems = [
	{
		title: "save",
		icon: Save,
		iconSize: toolBarIconSize,
		callback: () => saveSketch()
	},
	{
		title: "Open",
		icon: FolderOpen,
		iconSize: toolBarIconSize,
		callback: drawer.open
	}
]

function mapReady(map: MapWithPlugins) {
	if (!map.plugins.drawingTools) {
		console.error("Fail to load the drawing module as the plugin is not ready");
		return;
	}

	map.plugins.drawingTools.addHandler("drawingChanged", () => {
		const primitives = map.plugins.drawingTools.manager!.getPrimitives();
		console.log(primitives)
		primitives.forEach((p) => {
			registrations.setRegistration((p as any).id, "unknown");
		})
		const classified = registrations.classifyNames();
		console.log(classified)
		classifiedComponentNames.value = {
			routes: classified.routes.map((name) => {
				return { value: name, label: selectedSketchRoutes.get(name)!.name };
			}),
			drafts: classified.drafts.map((name) => {
				return { value: name, label: selectedSketchDrafts.get(name)!.properties.title || name };
			}),
			unknowns: classified.unknowns.map((name) => {
				return { value: name, label: name };
			})
		};
		console.log(classifiedComponentNames.value)
	})

	selectSketch = async (id: string) => {
		const sketchOnMap = await map.plugins.drawingTools.loadFromSketch(id);
		const sketch = await CartoSketch.read(id)
		if (sketchOnMap) {
			selectedSketch.value = sketch;

			sketchOnMap.routesMap.forEach((m, i) => {
				registrations.setRegistration(m.pid, "route");
				componentsPrimitivesMap.set(m.id, m.pid);
				selectedSketchRoutes.set(m.id, sketch.routes[i]);
			})
			sketchOnMap.draftsMap.forEach((m, i) => {
				registrations.setRegistration(m.pid, "draft");
				componentsPrimitivesMap.set(m.id, m.pid);
				selectedSketchDrafts.set(m.id, sketch.drafts[i]);
			})
		}
	}

	saveSketch = async () => {
		if (!map.plugins.drawingTools.manager) {
			console.warn("map not ready");
		}

		let routes: PolylineWithName[] = [];
		let drafts: Microsoft.Maps.IPrimitive[] = [];

		const allPrimitives = map.plugins.drawingTools.manager!.getPrimitives();

		allPrimitives.forEach((primitive) => {
			const id = (primitive as any).id;
			if (registrations.getRegistration(id) === "route" && primitive instanceof Microsoft.Maps.Polyline) {
				routes.push({ name: componentsPrimitivesMap.getBackward(id) || "Untitled", polyline: primitive })
			} else {
				drafts.push(primitive)
			}
		})

		await map.plugins.drawingTools.saveSketchFromMap(selectedSketch.value?.id!, routes, drafts)
	}
}

async function newSketch() {
	const name = prompt("Enter the name of the new CartoSketch");
	if (name) {
		await CartoSketch.save(CartoSketch.create(name));
		updateList();
	}
}

function updateList() {
	CartoSketch.list().then((list) => {
		sketchList.value = list;
	});
}
updateList();

async function removeCartoSketchFromList(id: string) {
	await CartoSketch.remove(id);
	updateList();
}

async function selectCartoSketchFromList(id: string) {
	await selectSketch(id);
	console.log("selected", selectedSketch.value?.id);
	drawer.close();
}

function showAlert(msg: string) {
	alert(msg);
}


</script>

<template>
	<SelectorDrawer :list="sketchList" v-model:active="activeSelector" :placement="selectorPlacement" @new="newSketch"
		@remove="removeCartoSketchFromList" @select="selectCartoSketchFromList"
		@activeStateSync="(state: boolean) => { activeSelector = state }" @import="showAlert('Not implemented')" />
	<n-split direction="horizontal" :max="0.8" :min="0.4" :default-size="0.7">
		<template #1>
			<n-card class="map-container" content-style="padding: 0">
				<BingMap v-show="!!selectedSketch" :type="localMapType" :plugin="plugins"
					:lite-mode="(props.liteMode === undefined ? false : props.liteMode)"
					:force-hidpi="(props.forceHighDpi === undefined ? false : props.forceHighDpi)" @ready="mapReady" />
				<n-empty description="Map" v-if="!selectedSketch" size="huge"
					style="height: 100%; justify-content: center">
					<template #icon>
						<n-icon>
							<MapIcon />
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
							<component :is="item.icon" />
						</n-icon>
					</div>
				</n-card>

				<n-card class="draft-container">
					<template #header v-if="!!selectedSketch">
						Components
					</template>
					<n-split direction="vertical" :max="0.8" :min="0.3" :default-size="0.7" v-if="!!selectedSketch">
						<template #1>
							<SketchComponentLibrary :components="classifiedComponentNames"
								v-model:value="selectedComponentName" />
						</template>
						<template #2>
							<!-- <PropertiesEdit /> -->
						</template>
					</n-split>
					<n-empty description="No sketch selected" v-if="!selectedSketch"
						style="height: 100%; justify-content: center">
						<template #icon>
							<n-icon>
								<Edit />
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
.split-view {
	width: 100%;
	height: 100%;
	overflow-y: hidden;
}

.map-container {
	width: calc(100% - 16px);
	height: calc(100% - 16px);

	margin: 8px;
	padding: 0;
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
