<script setup lang="ts">
import {
  ref,
  onMounted,
  computed,
  watch,
  inject,
  shallowRef,
  nextTick,
} from "vue";
import { useI18n } from "nano-vue-i18n";
import {
  MglMap,
  MglNavigationControl,
  MglScaleControl,
  MglGeoJsonSource,
  MglLineLayer,
  MglFillLayer,
} from "@indoorequal/vue-maplibre-gl";
import type { Map as MglMapType } from "maplibre-gl";
import {
  NText,
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
  NLayoutContent,
  NLayoutFooter,
  NSkeleton,
  NDynamicTags,
} from "naive-ui";
import { Map, Plus, List, Settings, InfoCircle } from "@vicons/tabler";
import { useWindowSize, useMagicKeys, whenever } from "@vueuse/core";

import SelectorDrawer from "./SelectorDrawer.vue";
import SketchToolbar from "./SketchToolbar.vue";
import ComponentList from "./ComponentList.vue";
import PropertiesPanel from "./PropertiesPanel.vue";
import MarkdownEditor from "@/components/common/MarkdownEditor.vue";
import { useSketchMap } from "@/composables/useSketchMap";
import { useSketchStore } from "@/store/sketch-store";
import {
  createComponentOptions,
  getDefaultDraftShape,
  getDefaultDraftProperties,
  getDefaultRouteProperties,
  getComponentBounds,
} from "@/utils/sketchHelpers";
import type {
  GeographicDraftItemProperties,
  GeographicRouteItemProperties,
  GeographicDraftItemType,
  GeographicRouteItemType,
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
const mapCenter = ref(locator.getLastKnownLocation().toLngLatLike());

const { t } = useI18n();
const message = useMessage();
const sketchStore = useSketchStore();
const { zoom, styleUrl, initMap, fitBounds } = useSketchMap();

// Mobile detection with better breakpoints
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);
const isTablet = computed(() => width.value >= 768 && width.value < 1024);

// Mobile tab navigation with animation
const activeMobileTab = ref<"components" | "map" | "properties">("components");

// Keyboard shortcuts using useMagicKeys
const { escape } = useMagicKeys();

// Loading states
const isLoading = ref(false);
const isCreating = ref(false);

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
// Computed properties with better memoization
const currentSketch = computed(() => sketchStore.currentSketch);
const currentDrafts = computed(() => sketchStore.currentDrafts);
  const currentRoutes = computed(() => currentSketch.value?.routes || []);
const hasSelection = computed(() => !!currentSketch.value);

// Optimized component selection with shallow comparison
const selectedComponent = computed(() => {
  if (!selectedComponentId.value || !selectedComponentType.value) return null;

  if (selectedComponentType.value === "draft") {
    return currentDrafts.value.find((d) => d.id === selectedComponentId.value) || null;
  } else {
    return currentRoutes.value.find((r) => r.id === selectedComponentId.value) || null;
  }
});

// Map reference - use shallowRef for better performance
const mapRef = shallowRef<MglMapType | null>(null);

// Memoized empty GeoJSON to prevent unnecessary re-renders
const emptyGeoJSON = { type: "FeatureCollection" as const, features: [] };

// Optimized GeoJSON computation with caching
const selectedRouteGeoJSON = computed(() => {
  if (!selectedComponentId.value || selectedComponentType.value !== "route") {
    return emptyGeoJSON;
  }

  const route = currentRoutes.value.find((r) => r.id === selectedComponentId.value);
  if (!route || route.points.length < 2) {
    return emptyGeoJSON;
  }

  return {
    type: "FeatureCollection" as const,
    features: [
      {
        type: "Feature" as const,
        properties: {
          id: route.id,
          name: route.meta.name,
          strokeColor: route.properties.strokeColor || "#28a745",
          strokeWidth: route.properties.strokeThickness || 3,
        },
        geometry: {
          type: "LineString" as const,
          coordinates: route.points.map((p) => [p.longitude, p.latitude]),
        },
      },
    ],
  };
});

const selectedDraftGeoJSON = computed(() => {
  if (!selectedComponentId.value || selectedComponentType.value !== "draft") {
    return emptyGeoJSON;
  }

  const draft = currentDrafts.value.find((d) => d.id === selectedComponentId.value);
  if (!draft) {
    return emptyGeoJSON;
  }

  return {
    type: "FeatureCollection" as const,
    features: [
      {
        type: "Feature" as const,
        properties: {
          id: draft.id,
          name: draft.meta.name,
          fillColor: draft.properties.fillColor || "#007bff",
          strokeColor: draft.properties.strokeColor || "#0056b3",
          strokeWidth: draft.properties.strokeThickness || 2,
        },
        geometry: draft.shape as any,
      },
    ],
  };
});

// Debounced success message for property updates
const showPropertyUpdateSuccess = debounce(() => {
  message.success(t("sketchEdit.propertiesUpdated"));
}, 1000, { leading: false, trailing: true });

const componentOptions = computed(() => {
  return createComponentOptions(currentDrafts.value, currentRoutes.value);
});

// Keyboard shortcuts
whenever(escape, () => {
  if (showCreateModal.value) showCreateModal.value = false;
  if (showMetaModal.value) showMetaModal.value = false;
  if (activeSelector.value) activeSelector.value = false;
});

// Component management with loading states
async function createComponent() {
  if (!newComponentName.value.trim() || !currentSketch.value || isCreating.value) return;

  isCreating.value = true;

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

    // On mobile, switch to properties tab after creation
    if (isMobile.value) {
      activeMobileTab.value = "properties";
    }
  } catch (error) {
    message.error(t("sketchEdit.componentCreateError"));
    console.error(error);
  } finally {
    isCreating.value = false;
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
    showPropertyUpdateSuccess();
  } catch (error) {
    message.error(t("sketchEdit.propertiesUpdateError"));
    console.error(error);
  }
};

const updateComponentMeta = async (meta: {
  name: string;
  description: string;
  tags: string[];
}) => {
  if (!selectedComponent.value || !selectedComponentType.value) return;

  try {
    if (selectedComponentType.value === "draft") {
      await sketchStore.updateDraft(selectedComponentId.value!, { meta });
    } else {
      await sketchStore.updateRoute(selectedComponentId.value!, { meta });
    }
    message.success(t("sketchEdit.metadataUpdated"));
  } catch (error) {
    message.error(t("sketchEdit.propertiesUpdateError"));
    console.error(error);
  }
};

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

async function updateSketchMeta() {
  if (!currentSketch.value) return;

  try {
    await sketchStore.updateSketch(currentSketch.value.id, {
      name: metaForm.value.name,
      description: metaForm.value.description,
      tags: metaForm.value.tags,
    });
    showMetaModal.value = false;
    message.success(t("sketchEdit.metadataUpdated"));
  } catch (error) {
    message.error(t("sketchEdit.saveError"));
    console.error(error);
  }
}

// Component selection handler
function handleComponentSelect(id: string, type: "draft" | "route") {
  selectedComponentId.value = id;
  selectedComponentType.value = type;

  // On mobile, auto-switch to properties tab when selecting a component
  if (isMobile.value) {
    nextTick(() => {
      activeMobileTab.value = "properties";
    });
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

// Map initialization handler
function handleMapInit(event: { map: MglMapType }) {
  const map = event.map;
  mapRef.value = map;
  initMap(event);
}

// Watch for component selection changes to fit bounds with debounce
const fitBoundsDebounced = debounce((component: GeographicDraftItemType | GeographicRouteItemType) => {
  const bounds = getComponentBounds(component as any);
  if (bounds) {
    fitBounds(bounds, { padding: 50, duration: 500 });
  }
}, 300);

watch(
  selectedComponent,
  (newComponent) => {
    if (newComponent) {
      fitBoundsDebounced(newComponent as any);
    }
  },
  { immediate: false }
);

// Utility functions
const getTimeStr = (stamp: number) => {
  return new Date(stamp).toLocaleString();
};

// Reset create modal state when closing
watch(showCreateModal, (newValue) => {
  if (!newValue) {
    newComponentName.value = "";
    newComponentType.value = "draft";
  }
});
</script>

<template>
  <selector-drawer
    v-model:active="activeSelector"
    :list="
      sketchStore.sketches.map((s) => ({
        id: s.id,
        name: s.meta.name,
        tags: s.meta.tags,
      }))
    "
    :active-id="sketchStore.currentSketchId || ''"
    placement="right"
    @remove="(id: string) => sketchStore.deleteSketch(id)"
    @select="(id: string) => sketchStore.setCurrentSketchId(id)"
  />

  <!-- Create Component Modal -->
  <n-modal
    v-model:show="showCreateModal"
    preset="dialog"
    :title="t('sketchEdit.createNewComponent')"
    :closable="true"
    :mask-closable="true"
    :auto-focus="true"
    @after-leave="newComponentName = ''; newComponentType = 'draft'"
  >
    <n-form @submit.prevent="createComponent">
      <div class="modal-form-row">
        <n-formItem :label="t('sketchEdit.name')" class="form-item-grow">
          <n-input
            v-model:value="newComponentName"
            :placeholder="t('sketchEdit.enterComponentName')"
            :autofocus="true"
            @keydown.enter.prevent="createComponent"
          />
        </n-formItem>
        <n-form-item :label="t('sketchEdit.type')" class="form-item-shrink">
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
        {{ t("sketchEdit.cancel") }}
      </n-button>
      <n-button
        type="primary"
        :disabled="!newComponentName.trim() || isCreating"
        :loading="isCreating"
        @click="createComponent"
      >
        {{ t("sketchEdit.create") }}
      </n-button>
    </template>
  </n-modal>

  <!-- Metadata Edit Modal -->
  <n-modal
    v-model:show="showMetaModal"
    preset="dialog"
    :title="t('sketchEdit.editMetadata')"
    class="metadata-modal"
    :auto-focus="true"
    @after-leave="updateSketchMeta"
  >
    <n-form>
      <n-form-item :label="t('sketchEdit.name')">
        <n-input
          v-model:value="metaForm.name"
          :placeholder="t('sketchEdit.sketchNamePlaceholder')"
        />
      </n-form-item>

      <n-form-item :label="t('sketchEdit.description')">
        <MarkdownEditor
          v-model="metaForm.description"
          :placeholder="t('sketchEdit.sketchDescriptionPlaceholder')"
          :min-height="'120px'"
          :max-height="'300px'"
        />
      </n-form-item>

      <n-form-item :label="t('sketchEdit.tags')">
        <n-dynamic-tags
          v-model:value="metaForm.tags"
          :placeholder="t('sketchEdit.addTagPlaceholder')"
        />
      </n-form-item>
    </n-form>
    <template #action>
      <n-button @click="showMetaModal = false">
        {{ t("sketchEdit.cancel") }}
      </n-button>
      <n-button
        type="primary"
        :disabled="!metaForm.name.trim()"
        @click="updateSketchMeta"
      >
        {{ t("sketchEdit.save") }}
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
            @open="activeSelector = true"
            @edit-meta="openMetaModal"
          />
        </n-card>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="loading-overlay">
        <n-skeleton text :repeat="3" />
        <n-skeleton text style="width: 60%" />
      </div>

      <!-- Main Content -->
      <n-split
        v-else
        direction="horizontal"
        :max="0.8"
        :min="0.2"
        :default-size="isTablet ? 0.4 : 0.5"
        class="bottom-row-split"
      >
        <!-- Left Panel: Component List & Map -->
        <template #1>
          <n-split style="height: 100%" direction="vertical" :default-size="0.4">
            <!-- Component List -->
            <template #1>
              <n-card
                class="component-list-card"
                :title="t('sketchEdit.components')"
              >
                <component-list
                  :components="componentOptions"
                  :selected-id="selectedComponentId"
                  @select="handleComponentSelect"
                  @delete="deleteComponent"
                  @create="showCreateModal = true"
                />
                <template #header-extra>
                  <n-button
                    quaternary
                    circle
                    @click="showCreateModal = true"
                    :aria-label="t('sketchEdit.createNewComponent')"
                  >
                    <template #icon>
                      <plus />
                    </template>
                  </n-button>
                </template>
              </n-card>
            </template>

            <!-- Map -->
            <template #2>
              <n-card class="map-container" :bordered="false">
                <mgl-map
                  :map-style="styleUrl"
                  :center="mapCenter"
                  :zoom="zoom"
                  height="100%"
                  @map:load="handleMapInit"
                >
                  <mgl-navigation-control position="top-left" />
                  <mgl-scale-control position="bottom-left" />

                  <!-- Selected Route Layer -->
                  <mgl-geo-json-source
                    source-id="selected-route"
                    :data="selectedRouteGeoJSON"
                  >
                    <mgl-line-layer
                      layer-id="selected-route-layer"
                      :paint="{
                        'line-color': ['get', 'strokeColor'],
                        'line-width': ['get', 'strokeWidth'],
                        'line-opacity': 1,
                      }"
                    />
                  </mgl-geo-json-source>

                  <!-- Selected Draft Layer -->
                  <mgl-geo-json-source
                    source-id="selected-draft"
                    :data="selectedDraftGeoJSON"
                  >
                    <mgl-fill-layer
                      layer-id="selected-draft-fill"
                      :filter="['==', ['get', 'type'], 'Polygon']"
                      :paint="{
                        'fill-color': ['get', 'fillColor'],
                        'fill-opacity': 0.3,
                      }"
                    />
                    <mgl-line-layer
                      layer-id="selected-draft-line"
                      :paint="{
                        'line-color': ['get', 'strokeColor'],
                        'line-width': ['get', 'strokeWidth'],
                        'line-opacity': 1,
                      }"
                    />
                  </mgl-geo-json-source>
                </mgl-map>
              </n-card>
            </template>
          </n-split>

          <!-- Empty State -->
          <n-empty
            v-if="!hasSelection"
            :description="t('sketchEdit.noSketchSelected')"
            size="huge"
            class="full-empty-state"
          >
            <template #icon>
              <n-icon>
                <Map />
              </n-icon>
            </template>
            <template #extra>
              <n-button type="primary" @click="activeSelector = true">
                {{ t("sketchEdit.selectSketch") }}
              </n-button>
            </template>
          </n-empty>
        </template>

        <!-- Right Panel: Properties -->
        <template #2>
          <n-card class="component-info-container">
            <PropertiesPanel
              :component="(selectedComponent as any)"
              :type="selectedComponentType"
              @update-properties="updateComponentProperties"
              @update-meta="updateComponentMeta"
            />
            <template #footer v-if="selectedComponent">
              <n-text depth="3" class="metadata">
                <div class="metadata-item">
                  {{ t("sketchEdit.createdTimeBy", {
                    user: selectedComponent.meta.created_by,
                    time: getTimeStr(selectedComponent.meta.creation_timestamp)
                  }) }}
                </div>
                <div class="metadata-item">
                  {{ t("sketchEdit.modifiedTimeBy", {
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
        @open="activeSelector = true"
        @create="showCreateModal = true"
        @edit-meta="openMetaModal"
      />
    </div>

    <!-- Mobile Content -->
    <div class="mobile-content">
      <n-layout-content>
        <!-- Components Tab -->
        <transition name="fade" mode="out-in">
          <div v-if="activeMobileTab === 'components'" key="components" class="mobile-tab-content">
            <n-card
              v-if="hasSelection"
              :title="t('sketchEdit.components')"
              class="mobile-card"
            >
              <component-list
                :components="componentOptions"
                :selected-id="selectedComponentId"
                @select="handleComponentSelect"
                @delete="deleteComponent"
                @create="showCreateModal = true"
              />
              <template #header-extra>
                <n-button
                  quaternary
                  circle
                  size="small"
                  @click="showCreateModal = true"
                  :aria-label="t('sketchEdit.createNewComponent')"
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
              class="full-empty-state"
            >
              <template #icon>
                <n-icon>
                  <Map />
                </n-icon>
              </template>
              <template #extra>
                <n-button type="primary" @click="activeSelector = true">
                  {{ t("sketchEdit.selectSketch") }}
                </n-button>
              </template>
            </n-empty>
          </div>

          <!-- Map Tab -->
          <div v-else-if="activeMobileTab === 'map'" key="map" class="mobile-tab-content mobile-map-content">
            <n-card
              v-if="hasSelection"
              class="map-container mobile-map"
              :bordered="false"
            >
              <mgl-map
                :map-style="styleUrl"
                :center="mapCenter"
                :zoom="zoom"
                height="100%"
                @map:load="handleMapInit"
              >
                <mgl-navigation-control position="top-left" />
                <mgl-scale-control position="bottom-left" />

                <mgl-geo-json-source
                  source-id="selected-route"
                  :data="selectedRouteGeoJSON"
                >
                  <mgl-line-layer
                    layer-id="selected-route-layer"
                    :paint="{
                      'line-color': ['get', 'strokeColor'],
                      'line-width': ['get', 'strokeWidth'],
                      'line-opacity': 1,
                    }"
                  />
                </mgl-geo-json-source>

                <mgl-geo-json-source
                  source-id="selected-draft"
                  :data="selectedDraftGeoJSON"
                >
                  <mgl-fill-layer
                    layer-id="selected-draft-fill"
                    :filter="['==', ['get', 'type'], 'Polygon']"
                    :paint="{
                      'fill-color': ['get', 'fillColor'],
                      'fill-opacity': 0.3,
                    }"
                  />
                  <mgl-line-layer
                    layer-id="selected-draft-line"
                    :paint="{
                      'line-color': ['get', 'strokeColor'],
                      'line-width': ['get', 'strokeWidth'],
                      'line-opacity': 1,
                    }"
                  />
                </mgl-geo-json-source>
              </mgl-map>
            </n-card>
            <n-empty
              v-else
              :description="t('sketchEdit.noSketchSelected')"
              size="huge"
              class="full-empty-state"
            >
              <template #icon>
                <n-icon>
                  <Map />
                </n-icon>
              </template>
              <template #extra>
                <n-button type="primary" @click="activeSelector = true">
                  {{ t("sketchEdit.selectSketch") }}
                </n-button>
              </template>
            </n-empty>
          </div>

          <!-- Properties Tab -->
          <div v-else-if="activeMobileTab === 'properties'" key="properties" class="mobile-tab-content">
            <n-card
              v-if="selectedComponent"
              class="component-info-container mobile-card"
            >
              <PropertiesPanel
                :component="(selectedComponent as any)"
                :type="selectedComponentType"
                @update-properties="updateComponentProperties"
                @update-meta="updateComponentMeta"
              />
              <template #footer>
                <n-text depth="3" class="metadata">
                  <div class="metadata-item">
                    {{ t("sketchEdit.createdTimeBy", {
                      user: selectedComponent.meta.created_by,
                      time: getTimeStr(selectedComponent.meta.creation_timestamp)
                    }) }}
                  </div>
                  <div class="metadata-item">
                    {{ t("sketchEdit.modifiedTimeBy", {
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
              class="full-empty-state"
            >
              <template #icon>
                <n-icon>
                  <InfoCircle />
                </n-icon>
              </template>
              <template #extra>
                <n-button @click="activeMobileTab = 'components'">
                  {{ t("sketchEdit.selectComponent") }}
                </n-button>
              </template>
            </n-empty>
          </div>
        </transition>
      </n-layout-content>
    </div>

    <!-- Mobile Bottom Navigation -->
    <n-layout-footer v-if="hasSelection" class="mobile-footer">
      <div class="mobile-tab-bar" role="tablist" aria-label="Mobile navigation">
        <n-button
          :type="activeMobileTab === 'components' ? 'primary' : 'default'"
          :quaternary="activeMobileTab !== 'components'"
          size="large"
          class="tab-button"
          role="tab"
          :aria-selected="activeMobileTab === 'components'"
          :aria-label="t('sketchEdit.components')"
          @click="activeMobileTab = 'components'"
        >
          <template #icon>
            <n-icon>
              <List />
            </n-icon>
          </template>
          {{ t("sketchEdit.components") }}
        </n-button>
        <n-button
          :type="activeMobileTab === 'map' ? 'primary' : 'default'"
          :quaternary="activeMobileTab !== 'map'"
          size="large"
          class="tab-button"
          role="tab"
          :aria-selected="activeMobileTab === 'map'"
          :aria-label="t('sketchEdit.map')"
          @click="activeMobileTab = 'map'"
        >
          <template #icon>
            <n-icon>
              <Map />
            </n-icon>
          </template>
          {{ t("sketchEdit.map") }}
        </n-button>
        <n-button
          :type="activeMobileTab === 'properties' ? 'primary' : 'default'"
          :quaternary="activeMobileTab !== 'properties'"
          size="large"
          class="tab-button"
          role="tab"
          :aria-selected="activeMobileTab === 'properties'"
          :aria-label="t('sketchEdit.properties')"
          @click="activeMobileTab = 'properties'"
        >
          <template #icon>
            <n-icon>
              <Settings />
            </n-icon>
          </template>
          {{ t("sketchEdit.properties") }}
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

/* Main Grid Layout */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;
  gap: 12px;
  padding: 12px;
  box-sizing: border-box;
}

/* Meta/Info Section (Top Row) */
.meta-info-section {
  grid-column: 1 / 3;
  grid-row: 1;
  height: fit-content;
  min-height: 0;
}

/* Loading overlay */
.loading-overlay {
  grid-column: 1 / 3;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  gap: 12px;
}

/* Bottom Row Split */
.bottom-row-split {
  grid-column: 1 / 3;
  grid-row: 2;
  height: 100%;
  width: 100%;
  min-height: 0;
}

/* Component List Card */
.component-list-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.component-list-card :deep(.n-card__content) {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px;
}

/* Map Container */
.map-container {
  height: 100%;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.map-container :deep(.n-card__content) {
  padding: 0;
  height: 100%;
}

/* Component Info Container */
.component-info-container {
  overflow-y: auto;
  height: 100%;
}

.component-info-container :deep(.n-card__content) {
  min-height: 0;
  overflow: auto;
}

/* Full empty state */
.full-empty-state {
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

/* Modal styles */
.metadata-modal {
  max-width: 600px;
}

.modal-form-row {
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.form-item-grow {
  flex-grow: 1;
}

.form-item-shrink {
  flex-shrink: 0;
}

/* Metadata */
.metadata {
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.7;
}

.metadata-item {
  margin-bottom: 8px;
}

.metadata-item:last-child {
  margin-bottom: 0;
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
  border-bottom: 1px solid var(--n-border-color);
  background: var(--n-card-color);
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
  box-sizing: border-box;
}

.mobile-map-content {
  overflow: hidden;
  padding: 0;
}

.mobile-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile-card :deep(.n-card__content) {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.mobile-map {
  height: 100%;
  border-radius: 0;
}

.mobile-footer {
  flex-shrink: 0;
  padding: 8px;
  border-top: 1px solid var(--n-border-color);
  background: var(--n-card-color);
}

.mobile-tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
}

.tab-button {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  height: auto;
  padding: 8px 4px;
  transition: all 0.2s ease;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .tab-button {
    font-size: 12px;
  }

  .tab-button .n-icon {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .mobile-header {
    padding: 8px 12px;
  }

  .modal-form-row {
    flex-direction: column;
    gap: 8px;
  }
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1024px) {
  .grid-layout {
    padding: 8px;
    gap: 8px;
  }
}

/* High DPI adjustments */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .metadata {
    font-size: 11px;
  }
}

/* Focus visible styles for accessibility */
button:focus-visible,
.n-button:focus-visible {
  outline: 2px solid var(--n-primary-color);
  outline-offset: 2px;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }

  .tab-button {
    transition: none;
  }
}
</style>
