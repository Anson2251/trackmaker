<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import {
  MglMap,
  MglNavigationControl,
  MglScaleControl,
  MglFullscreenControl,
} from "@indoorequal/vue-maplibre-gl";
import {
  NIcon,
  NInput,
  NCard,
  NEmpty,
  NSplit,
  useMessage,
  NButton,
  NModal,
  NForm,
  NFormItem,
  NSelect,
} from "naive-ui";
import { Map, Plus } from '@vicons/tabler';

import SelectorDrawer from "./SelectorDrawer.vue";
import SketchToolbar from "./SketchToolbar.vue";
import ComponentList from "./ComponentList.vue";
import PropertiesPanel from "./PropertiesPanel.vue";
import { useSketchMap } from "@/composables/useSketchMap";
import { useSketchStore } from "@/store/sketch-store";
import {
  createComponentOptions,
  getDefaultDraftShape,
  getDefaultDraftProperties,
  getDefaultRouteProperties,
} from "@/utils/sketchHelpers";
import type {
  GeographicDraftItemProperties,
  GeographicRouteItemProperties,
} from "@/libs/cartosketch/definitions";

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
const { zoom, styleUrl, initMap } = useSketchMap();

// State management
const activeSelector = ref(false);
const selectedComponentId = ref<string | null>(null);
const selectedComponentType = ref<"draft" | "route" | null>(null);
const showCreateModal = ref(false);
const newComponentName = ref("");
const newComponentType = ref<"draft" | "route">("draft");

// Computed properties
const currentSketch = computed(() => sketchStore.currentSketch);
const currentDrafts = computed(() => sketchStore.currentDrafts);
const currentRoutes = computed(() => currentSketch.value?.routes.routes || []);
const hasSelection = computed(() => !!currentSketch.value);

const selectedComponent = computed(() => {
  if (!selectedComponentId.value || !selectedComponentType.value) return null;

  if (selectedComponentType.value === "draft") {
    return sketchStore.getDraftById(selectedComponentId.value);
  } else {
    return sketchStore.getRouteById(selectedComponentId.value);
  }
});

const componentOptions = computed(() => {
  return createComponentOptions(currentDrafts.value, currentRoutes.value);
});

// Sketch management
async function saveSketch() {
  if (!currentSketch.value) return;

  try {
    await sketchStore.updateSketch(currentSketch.value.id, {
      name: currentSketch.value.meta.name,
      description: currentSketch.value.meta.description,
      tags: currentSketch.value.meta.tags,
    });
    message.success(t("sketchEdit.saveSuccess"));
  } catch (error) {
    message.error(t("sketchEdit.saveError"));
    console.error(error);
  }
}

async function newSketch() {
  const name = prompt("Enter the name of the new CartoSketch");
  if (name) {
    await sketchStore.createSketch(name);
    activeSelector.value = false;
  }
}

// Component management
async function createComponent() {
  if (!newComponentName.value.trim() || !currentSketch.value) return;

  try {
    if (newComponentType.value === "draft") {
      const draft = await sketchStore.addDraft(
        getDefaultDraftShape(),
        getDefaultDraftProperties(),
        { name: newComponentName.value }
      );
      selectedComponentId.value = draft.id;
      selectedComponentType.value = "draft";
    } else {
      const route = await sketchStore.addRoute(
        newComponentName.value,
        getDefaultRouteProperties()
      );
      selectedComponentId.value = route.id;
      selectedComponentType.value = "route";
    }

    showCreateModal.value = false;
    newComponentName.value = "";
    message.success(t("sketchEdit.componentCreated"));
  } catch (error) {
    message.error(t("sketchEdit.componentCreateError"));
    console.error(error);
  }
}

async function deleteComponent(id: string, type: "draft" | "route") {
  try {
    if (type === "draft") {
      await sketchStore.deleteDraft(id);
    } else {
      await sketchStore.deleteRoute(id);
    }

    if (selectedComponentId.value === id) {
      selectedComponentId.value = null;
      selectedComponentType.value = null;
    }

    message.success(t("sketchEdit.componentDeleted"));
  } catch (error) {
    message.error(t("sketchEdit.componentDeleteError"));
    console.error(error);
  }
}

async function updateComponentProperties(
  properties: GeographicDraftItemProperties | GeographicRouteItemProperties
) {
  if (!selectedComponent.value || !selectedComponentType.value) return;

  try {
    if (selectedComponentType.value === "draft") {
      await sketchStore.updateDraft(selectedComponentId.value!, { properties });
    } else {
      await sketchStore.updateRoute(selectedComponentId.value!, { properties });
    }
    message.success(t("sketchEdit.propertiesUpdated"));
  } catch (error) {
    message.error(t("sketchEdit.propertiesUpdateError"));
    console.error(error);
  }
}

async function updateComponentMeta(meta: { name: string }) {
  if (!selectedComponent.value || !selectedComponentType.value) return;

  try {
    if (selectedComponentType.value === "draft") {
      await sketchStore.updateDraft(selectedComponentId.value!, { meta });
    } else {
      await sketchStore.updateRoute(selectedComponentId.value!, {
        name: meta.name,
      });
    }
    message.success(t("sketchEdit.propertiesUpdated"));
  } catch (error) {
    message.error(t("sketchEdit.propertiesUpdateError"));
    console.error(error);
  }
}

// Lifecycle
onMounted(() => {
  if (props.sketchId) {
    sketchStore.setCurrentSketchId(props.sketchId);
  }
});

// Watch for sketch changes
watch(
  () => sketchStore.currentSketchId,
  (newId) => {
    if (newId) {
      selectedComponentId.value = null;
      selectedComponentType.value = null;
    }
  }
);
</script>

<template>
  <selector-drawer
    v-model:active="activeSelector"
    :list="sketchStore.sketches.map((s) => ({ id: s.id, name: s.meta.name }))"
    placement="right"
    @new="newSketch"
    @remove="(id: string) => sketchStore.deleteSketch(id)"
    @select="(id: string) => sketchStore.setCurrentSketchId(id)"
  />

  <!-- Create Component Modal -->
  <n-modal
    v-model:show="showCreateModal"
    preset="dialog"
    title="Create New Component"
  >
    <n-form>
      <div style="display: flex; flex-direction: row; gap: 8px">
        <n-formItem
          label="Name"
          style="flex-grow: 1"
        >
          <n-input
            v-model:value="newComponentName"
            placeholder="Enter component name"
          />
        </n-formItem>
        <n-form-item label="Type">
          <n-select
            v-model:value="newComponentType"
            :consistent-menu-width="false"

            :options="[
              { label: 'Draft (Shape)', value: 'draft' },
              { label: 'Route (Path)', value: 'route' },
            ]"
          />
        </n-form-item>
      </div>
    </n-form>
    <template #action>
      <n-button @click="showCreateModal = false">
        Cancel
      </n-button>
      <NButton
        type="primary"
        :disabled="!newComponentName.trim()"
        @click="createComponent"
      >
        Create
      </NButton>
    </template>
  </n-modal>

  <div class="sketch-edit-container">
    <div class="grid-layout">
      <!-- Meta/Info Section (Top Row, Spanning Both Columns) -->
      <div class="meta-info-section">
        <n-card>
          <SketchToolbar
            :sketch-name="currentSketch?.meta.name"
            :draft-count="currentDrafts.length"
            :route-count="currentRoutes.length"
            @save="saveSketch"
            @open="activeSelector = true"
            @create="showCreateModal = true"
          />
        </n-card>
      </div>

      <!-- Bottom Row Split -->
      <n-split
        direction="horizontal"
        :max="0.8"
        :min="0.2"
        :default-size="0.5"
        class="bottom-row-split"
      >
        <!-- Map Section (Bottom Left) -->
        <template #1>
          <n-split
            style="height: 100%"
            direction="vertical"
          >
            <template #1>
              <n-card
                style="height: 100%"
                title="Components"
              >
                <component-list
                  :components="componentOptions"
                  :selected-id="selectedComponentId"
                  @select="
                    (id, type) => {
                      selectedComponentId = id;
                      selectedComponentType = type;
                    }
                  "
                  @delete="deleteComponent"
                  @create="showCreateModal = true"
                />
                <template #header-extra>
                  <n-button
                    quaternary
                    circle
                    @click="showCreateModal = true"
                  >
                    <template #icon>
                      <plus />
                    </template>
                  </n-button>
                </template>
              </n-card>
            </template>
            <template #2>
              <n-card
                class="map-container"
                content-style="padding: 0;"
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
              </n-card>
            </template>
          </n-split>

          <n-empty
            v-if="!hasSelection"
            description="No sketch selected"
            size="huge"
            style="height: 100%; justify-content: center"
          >
            <template #icon>
              <n-icon>
                <Map />
              </n-icon>
            </template>
            <template #extra>
              <n-button
                size="small"
                @click="activeSelector = true"
              >
                Select a sketch
              </n-button>
            </template>
          </n-empty>
        </template>

        <!-- Component List and Info Section (Bottom Right) -->
        <template #2>
          <n-card
            class="component-info-container"
            title="Properties"
            content-style="min-height: 0; overflow: auto;"
          >
            <PropertiesPanel
              :component="selectedComponent"
              :type="selectedComponentType"
              @update-properties="updateComponentProperties"
              @update-meta="updateComponentMeta"
            />
          </n-card>
        </template>
      </n-split>
    </div>
  </div>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>

<style scoped>
/* Main container */
.sketch-edit-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Main Grid Layout */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
}

/* Meta/Info Section (Top Row) */
.meta-info-section {
  grid-column: 1 / 3;
  grid-row: 1;
  height: fit-content;
  min-height: 0;
}

/* Bottom Row Split */
.bottom-row-split {
  grid-column: 1 / 3;
  grid-row: 2;
  height: 100%;
  width: 100%;
  min-height: 0;
}

/* Map Container */
.map-container {
  height: 100%;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.component-info-container {
  overflow-y: auto;
  height: 100%;
}
</style>
