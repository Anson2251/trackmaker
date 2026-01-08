<script setup lang="ts">
import { ref, onMounted, computed, watch, inject } from "vue";
import { useI18n } from "vue-i18n";
import {
  MglMap,
  MglNavigationControl,
  MglScaleControl,
  MglFullscreenControl,
} from "@indoorequal/vue-maplibre-gl";
import {
  NText,
  NTag,
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
  NTabs,
  NTabPane,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
} from "naive-ui";
import { Map, Plus, List, Settings, InfoCircle } from '@vicons/tabler';
import { useWindowSize } from "@vueuse/core";

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
import { debounce } from "lodash-es";
import type { GeolocationManager } from "@/libs/geolocation";

interface Props {
  liteMode?: boolean;
  forceHighDpi?: boolean;
  mapType?: string;
  sketchId?: string;
}

const props = defineProps<Props>();
const locator = inject("geolocation") as GeolocationManager;
const mapCenter = ref(locator.getLastKnownLocation().toLngLatLike())

const { t } = useI18n();
const message = useMessage();
const sketchStore = useSketchStore();
const { zoom, styleUrl, initMap } = useSketchMap();

// Mobile detection
const { width, height } = useWindowSize();
const isMobile = computed(() => width.value < 768);

// Mobile tab navigation
const activeMobileTab = ref<'components' | 'map' | 'properties'>('components');

// State management
const activeSelector = ref(false);
const selectedComponentId = ref<string | null>(null);
const selectedComponentType = ref<"draft" | "route" | null>(null);
const showCreateModal = ref(false);
const newComponentName = ref("");
const newComponentType = ref<"draft" | "route">("draft");
const showMetaModal = ref(false);
const metaForm = ref({
  name: "",
  description: "",
  tags: [] as string[],
  created_by: "",
  modified_by: "",
});
const newTag = ref("");

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

const infoPropertyUpdated = debounce(() => message.success(t("sketchEdit.propertiesUpdated")), 1000)

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
  const name = prompt(t("sketchEdit.enterSketchName"));
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

const updateComponentProperties = async (
  properties: GeographicDraftItemProperties | GeographicRouteItemProperties
) => {
  if (!selectedComponent.value || !selectedComponentType.value) return;

  try {
    if (selectedComponentType.value === "draft") {
      await sketchStore.updateDraft(selectedComponentId.value!, { properties });
    } else {
      await sketchStore.updateRoute(selectedComponentId.value!, { properties });
    }
    infoPropertyUpdated()
  } catch (error) {
    message.error(t("sketchEdit.propertiesUpdateError"));
    console.error(error);
  }
}

const updateComponentMeta = async (meta: { name: string; description: string; tags: string[] }) => {
  if (!selectedComponent.value || !selectedComponentType.value) return;

  try {
    if (selectedComponentType.value === "draft") {
      await sketchStore.updateDraft(selectedComponentId.value!, { meta });
    } else {
      await sketchStore.updateRoute(selectedComponentId.value!, { meta });
    }
    infoPropertyUpdated()
  } catch (error) {
    message.error(t("sketchEdit.propertiesUpdateError"));
    console.error(error);
  }
}

// Metadata editing
function openMetaModal() {
  if (!currentSketch.value) return;

  metaForm.value = {
    name: currentSketch.value.meta.name,
    description: currentSketch.value.meta.description,
    tags: [...currentSketch.value.meta.tags],
    created_by: currentSketch.value.meta.created_by,
    modified_by: currentSketch.value.meta.modified_by,
  };
  showMetaModal.value = true;
}

function addTag() {
  if (newTag.value.trim() && !metaForm.value.tags.includes(newTag.value.trim())) {
    metaForm.value.tags.push(newTag.value.trim());
    newTag.value = "";
  }
}

function removeTag(tag: string) {
  metaForm.value.tags = metaForm.value.tags.filter(t => t !== tag);
}

async function updateSketchMeta() {
  if (!currentSketch.value) return;

  try {
    await sketchStore.updateSketch(currentSketch.value.id, {
      name: metaForm.value.name,
      description: metaForm.value.description,
      tags: metaForm.value.tags,
    });
    showMetaModal.value = false;
    message.success(t("sketchEdit.saveSuccess"));
  } catch (error) {
    message.error(t("sketchEdit.saveError"));
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

const getTimeStr = (stamp: number) => {
  return new Date(stamp).toLocaleString();
}
</script>

<template>
  <selector-drawer
    v-model:active="activeSelector"
    :list="sketchStore.sketches.map((s) => ({ id: s.id, name: s.meta.name, tags: s.meta.tags }))"
    placement="right"
    @new="newSketch"
    @remove="(id: string) => sketchStore.deleteSketch(id)"
    @select="(id: string) => sketchStore.setCurrentSketchId(id)"
  />

  <!-- Create Component Modal -->
  <n-modal
    v-model:show="showCreateModal"
    preset="dialog"
    :title="t('sketchEdit.createNewComponent')"
  >
    <n-form>
      <div style="display: flex; flex-direction: row; gap: 8px">
        <n-formItem
          :label="t('sketchEdit.name')"
          style="flex-grow: 1"
        >
          <n-input
            v-model:value="newComponentName"
            :placeholder="t('sketchEdit.enterComponentName')"
          />
        </n-formItem>
        <n-form-item :label="t('sketchEdit.type')">
          <n-select
            v-model:value="newComponentType"
            :consistent-menu-width="false"

            :options="[
              { label: t('sketchEdit.draftShape'), value: 'draft' },
              { label: t('sketchEdit.routePath'), value: 'route' },
            ]"
          />
        </n-form-item>
      </div>
    </n-form>
    <template #action>
      <n-button @click="showCreateModal = false">
        {{ t('sketchEdit.cancel') }}
      </n-button>
      <NButton
        type="primary"
        :disabled="!newComponentName.trim()"
        @click="createComponent"
      >
        {{ t('sketchEdit.create') }}
      </NButton>
    </template>
  </n-modal>

  <!-- Metadata Edit Modal -->
  <n-modal
    v-model:show="showMetaModal"
    preset="dialog"
    :title="t('sketchEdit.editMetadata')"
    style="max-width: 600px;"
  >
    <n-form>
      <n-form-item :label="t('sketchEdit.name')">
        <n-input
          v-model:value="metaForm.name"
          :placeholder="t('sketchEdit.sketchNamePlaceholder')"
        />
      </n-form-item>

      <n-form-item :label="t('sketchEdit.description')">
        <n-input
          v-model:value="metaForm.description"
          type="textarea"
          :placeholder="t('sketchEdit.sketchDescriptionPlaceholder')"
          :rows="3"
        />
      </n-form-item>

      <n-form-item :label="t('sketchEdit.tags')">
        <div style="display: flex; gap: 8px; margin-bottom: 8px;">
          <n-input
            v-model:value="newTag"
            :placeholder="t('sketchEdit.addTagPlaceholder')"
            @keydown.enter.prevent="addTag"
          />
          <n-button @click="addTag">
            {{ t('sketchEdit.add') }}
          </n-button>
        </div>
        <n-tag
          v-for="tag in metaForm.tags"
          :key="tag"
          closable
          style="margin-right: 8px; margin-bottom: 8px;"
          @close="removeTag(tag)"
        >
          {{ tag }}
        </n-tag>
        <n-empty
          v-if="metaForm.tags.length === 0"
          :description="t('sketchEdit.noTags')"
          size="small"
        />
      </n-form-item>
    </n-form>
    <template #action>
      <n-button @click="showMetaModal = false">
        {{ t('sketchEdit.cancel') }}
      </n-button>
      <n-button
        type="primary"
        :disabled="!metaForm.name.trim()"
        @click="updateSketchMeta"
      >
        {{ t('sketchEdit.save') }}
      </n-button>
    </template>
  </n-modal>

  <!-- Desktop Layout -->
  <div v-if="!isMobile" class="sketch-edit-container desktop-layout">
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
            @edit-meta="openMetaModal"
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
                :title="t('sketchEdit.components')"
                content-style="min-height: 0; overflow-y: auto;"
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
                  :center="mapCenter"
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
            :description="t('sketchEdit.noSketchSelected')"
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
                {{ t('sketchEdit.selectSketch') }}
              </n-button>
            </template>
          </n-empty>
        </template>

        <!-- Component List and Info Section (Bottom Right) -->
        <template #2>
          <n-card
            class="component-info-container"
            content-style="min-height: 0; overflow: auto;"
          >
            <PropertiesPanel
              :component="(selectedComponent as any)"
              :type="selectedComponentType"
              @update-properties="updateComponentProperties"
              @update-meta="updateComponentMeta"
            />
            <template #footer>
              <n-text
                v-if="selectedComponent"
                depth="3"
                class="metadata"
              >
                <div class="metadata-item">
                  {{ t('sketchEdit.createdTimeBy', {
                    user: selectedComponent.meta.created_by,
                    time: getTimeStr(selectedComponent.meta.creation_timestamp)
                  }) }}
                </div>
                <div class="metadata-item">
                  {{ t('sketchEdit.modifiedTimeBy', {
                    user: selectedComponent.meta.modified_by,
                    time: getTimeStr(selectedComponent.meta.modification_timestamp)
                  }) }}
                </div>
              </n-text>
            </template>
          </n-card>
        </template>
      </n-split>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div v-else class="sketch-edit-container mobile-layout">
    <!-- Mobile Header -->
      <div class="mobile-header">
        <SketchToolbar
            :sketch-name="currentSketch?.meta.name"
            :draft-count="currentDrafts.length"
            :route-count="currentRoutes.length"
            @save="saveSketch"
            @open="activeSelector = true"
            @create="showCreateModal = true"
            @edit-meta="openMetaModal"
          />
      </div>


    <!-- Mobile Content -->
      <div class="mobile-content">
        <n-layout-content>
          <!-- Components Tab -->
          <div v-if="activeMobileTab === 'components'" class="mobile-tab-content">
            <n-card
              v-if="hasSelection"
              :title="t('sketchEdit.components')"
              content-style="min-height: 0; overflow-y: auto;"
              style="height: 100%"
            >
              <component-list
                :components="componentOptions"
                :selected-id="selectedComponentId"
                @select="
                  (id, type) => {
                    selectedComponentId = id;
                    selectedComponentType = type;
                    activeMobileTab = 'properties';
                  }
                "
                @delete="deleteComponent"
                @create="showCreateModal = true"
              />
              <template #header-extra>
                <n-button
                  quaternary
                  circle
                  size="small"
                  @click="showCreateModal = true"
                >
                  <template #icon>
                    <plus />
                  </template>
                </n-button>
              </template>
            </n-card>
            <n-empty
              v-else
              :description="t('sketchEdit.noSketchSelected')"
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
                  {{ t('sketchEdit.selectSketch') }}
                </n-button>
              </template>
            </n-empty>
          </div>

          <!-- Map Tab -->
          <div v-if="activeMobileTab === 'map'" class="mobile-tab-content mobile-map-content">
            <n-card
              v-if="hasSelection"
              class="map-container"
              content-style="padding: 0;"
            >
              <mgl-map
                :map-style="styleUrl"
                :center="mapCenter"
                :zoom="zoom"
                height="100%"
                @map:load="initMap"
              >
                <mgl-navigation-control position="top-left" />
                <mgl-scale-control position="bottom-left" />
                <mgl-fullscreen-control position="top-left" />
              </mgl-map>
            </n-card>
            <n-empty
              v-else
              :description="t('sketchEdit.noSketchSelected')"
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
                  {{ t('sketchEdit.selectSketch') }}
                </n-button>
              </template>
            </n-empty>
          </div>

          <!-- Properties Tab -->
          <div v-if="activeMobileTab === 'properties'" class="mobile-tab-content">
            <n-card
              v-if="selectedComponent"
              class="component-info-container"
              content-style="min-height: 0; overflow: auto;"
            >
              <PropertiesPanel
                :component="(selectedComponent as any)"
                :type="selectedComponentType"
                @update-properties="updateComponentProperties"
                @update-meta="updateComponentMeta"
              />
              <template #footer>
                <n-text
                  depth="3"
                  class="metadata"
                >
                  <div class="metadata-item">
                    {{ t('sketchEdit.createdTimeBy', {
                      user: selectedComponent.meta.created_by,
                      time: getTimeStr(selectedComponent.meta.creation_timestamp)
                    }) }}
                  </div>
                  <div class="metadata-item">
                    {{ t('sketchEdit.modifiedTimeBy', {
                      user: selectedComponent.meta.modified_by,
                      time: getTimeStr(selectedComponent.meta.modification_timestamp)
                    }) }}
                  </div>
                </n-text>
              </template>
            </n-card>
            <n-empty
              v-else
              :description="t('sketchEdit.noComponentSelected')"
              size="huge"
              style="height: 100%; justify-content: center"
            >
              <template #icon>
                <n-icon>
                  <InfoCircle />
                </n-icon>
              </template>
              <template #extra>
                <n-button
                  size="small"
                  @click="activeMobileTab = 'components'"
                >
                  {{ t('sketchEdit.selectComponent') }}
                </n-button>
              </template>
            </n-empty>
          </div>
        </n-layout-content>
      </div>

    <!-- Mobile Bottom Navigation -->
    <n-layout-footer v-if="hasSelection" class="mobile-footer">
      <div class="mobile-tab-bar">
        <n-button
          :type="activeMobileTab === 'components' ? 'primary' : 'default'"
          quaternary
          size="large"
          @click="activeMobileTab = 'components'"
        >
          <template #icon>
            <n-icon>
              <List />
            </n-icon>
          </template>
          {{ t('sketchEdit.components') }}
        </n-button>
        <n-button
          :type="activeMobileTab === 'map' ? 'primary' : 'default'"
          quaternary
          size="large"
          @click="activeMobileTab = 'map'"
        >
          <template #icon>
            <n-icon>
              <Map />
            </n-icon>
          </template>
          {{ t('sketchEdit.map') }}
        </n-button>
        <n-button
          :type="activeMobileTab === 'properties' ? 'primary' : 'default'"
          quaternary
          size="large"
          @click="activeMobileTab = 'properties'"
        >
          <template #icon>
            <n-icon>
              <Settings />
            </n-icon>
          </template>
          {{ t('sketchEdit.properties') }}
        </n-button>
      </div>
    </n-layout-footer>
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

/* Desktop Layout */
.desktop-layout {
  /* Desktop specific styles */
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

/* Mobile Layout */
.mobile-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.mobile-header {
  flex-shrink: 0;
  padding: 12px 16px;
}

.mobile-content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.mobile-tab-content {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.mobile-map-content {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.mobile-footer {
  flex-shrink: 0;
  padding: 8px;
  border-top: 1px solid var(--n-border-color);
}

.mobile-tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
}

.mobile-tab-bar .n-button {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  height: auto;
  padding: 8px 4px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .mobile-tab-bar .n-button {
    font-size: 12px;
  }

  .mobile-tab-bar .n-icon {
    font-size: 20px;
  }
}
</style>
