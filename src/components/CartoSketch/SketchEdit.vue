<script setup lang="ts">
// TODO: separate the map component into a separate file

import {ref, onMounted, shallowRef, inject} from 'vue';
import { useI18n } from "vue-i18n";
import {
  MglMap,
  MglNavigationControl,
  MglScaleControl,
  MglFullscreenControl,
} from "@indoorequal/vue-maplibre-gl";
import {
  NButton,
  NCard,
  NEmpty,
  NIcon,
  NSplit,
  useMessage,
} from 'naive-ui';
import {
  Folder,
  Map,
  DeviceFloppy,
} from '@vicons/tabler';

import SelectorDrawer from './SelectorDrawer.vue';
// import SketchComponentLibrary from "@/components/CartoSketch/SketchComponentLibrary.vue";
// import PropertiesEdit from "@/components/CartoSketch/PropertiesEdit.vue";

import { Map as Mgl } from "maplibre-gl";
import { useSketchStore } from "@/store/sketch-store";

interface Props {
	liteMode?: boolean;
	forceHighDpi?: boolean;
	mapType?: string;
	sketchId?: string;
}
const props = defineProps<Props>();

const { t } = useI18n();
const message = useMessage();
const sketchStore = useSketchStore();
const mapTilerKey = __MAPTILER_KEY__;
const styleUrl = `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapTilerKey}`;
const zoom = ref(7);
const map = shallowRef<Mgl | null>(null);

const sketchList = ref<any[]>([]);

const emptySelection = ref(false);
// const selectedComponentID = ref<number | undefined>();
// let selectedComponentConfigs = ref<Record<string, string | number | boolean>>({})


/* drawer */
const activeSelector = ref(false);
const drawer = {
	open: () => activeSelector.value = true,
	close: () => activeSelector.value = false
};

/* toolbar */
const toolBarIconSize = 20;
const toolTipBarItems = [
	{
		title: "save",
		icon: DeviceFloppy,
		iconSize: toolBarIconSize,
		callback: saveSketch
	},
	{
		title: "Open",
		icon: Folder,
		iconSize: toolBarIconSize,
		callback: drawer.open
	}
];

function initMap(event: any) {
	map.value = event.map;
	emptySelection.value = true;
}

async function saveSketch() {
	if (!props.sketchId) return;

	try {
		// Save the sketch using the sketch store
		message.success(t("sketchEdit.saveSuccess"));
	} catch (error) {
		message.error(t("sketchEdit.saveError"));
		console.error(error);
	}
}

async function newSketch() {
	const name = prompt("Enter the name of the new CartoSketch");
	if (name) {
		// Create a new sketch using the sketch store
		const newSketch = await sketchStore.createSketch(name);
		updateList();
	}
}

function updateList() {
	// Update the sketch list from the sketch store
	sketchList.value = sketchStore.sketches.map(sketch => ({
		id: sketch.id,
		name: sketch.meta.name,
		description: sketch.meta.description,
		creation_timestamp: sketch.meta.creation_timestamp
	}));
}

async function removeCartoSketchFromList(id: string) {
	await sketchStore.deleteSketch(id);
	updateList();
}

async function selectCartoSketchFromList(id: string) {
	// Load the sketch using the sketch store
	sketchStore.setCurrentSketchId(id);
	console.log("selected sketch, id:", id);
	drawer.close();
}

function showAlert(msg: string) {
	message.warning(msg);
}

onMounted(() => {
	updateList();

	// If sketchId is provided, load that sketch automatically
	if (props.sketchId) {
		selectCartoSketchFromList(props.sketchId);
	}
});
</script>

<template>
  <SelectorDrawer
    v-model:active="activeSelector"
    :list="sketchList"
    placement="right"
    @new="newSketch"
    @remove="removeCartoSketchFromList"
    @select="selectCartoSketchFromList"
    @active-state-sync="(state: boolean) => { activeSelector = state }"
    @import="showAlert('Not implemented')"
  />
  <n-split
    direction="horizontal"
    :max="0.8"
    :min="0.4"
    :default-size="0.7"
  >
    <template #1>
      <n-card
        class="map-container"
        content-style="padding: 0"
      >
        <mgl-map
          :map-style="styleUrl"
          :center="[0, 0]"
          :zoom="zoom"
          height="100%"
          @map:load="initMap"
        >
          <mgl-navigation-control position="top-left" />
          <mgl-scale-control position="bottom-left" />
          <mgl-fullscreen-control position="top-left" />
        </mgl-map>
        <n-empty
          v-if="!emptySelection"
          description="Map"
          size="huge"
          style="height: 100%; justify-content: center"
        >
          <template #icon>
            <n-icon>
              <Map />
            </n-icon>
          </template>
        </n-empty>
      </n-card>
    </template>
    <template #2>
      <div class="edit-layout">
        <n-card content-class="route-edit-tool-tip">
          <div
            v-for="(item, index) in toolTipBarItems"
            :key="index"
            :title="item.title"
            class="tool-tip-item"
            @click="item.callback"
          >
            <n-icon :size="item.iconSize">
              <component :is="item.icon" />
            </n-icon>
          </div>
        </n-card>

        <n-card class="draft-container">
          <template
            v-if="emptySelection"
            #header
          >
            Components
          </template>
          <n-split
            v-if="emptySelection"
            direction="vertical"
            :max="0.8"
            :min="0.3"
            :default-size="0.7"
          >
            <template #1>
              <!--							<SketchComponentLibrary :components="classifiedComponentNames"-->
              <!--													v-model:value="selectedComponentName"/>-->
            </template>
            <template #2>
              <!-- <PropertiesEdit /> -->
            </template>
          </n-split>
          <n-empty
            v-if="!emptySelection"
            description="No sketch selected"
            style="height: 100%; justify-content: center"
          >
            <template #icon>
              <n-icon>
                <!--																<properties-edit :properties="{color: '#FF0000'}" />-->
              </n-icon>
            </template>
            <template #extra>
              <n-button
                size="small"
                @click="drawer.open()"
              >
                Select a sketch
              </n-button>
            </template>
          </n-empty>
        </n-card>
      </div>
    </template>
  </n-split>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";

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
