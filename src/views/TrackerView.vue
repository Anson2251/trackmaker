<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */

// ! TODO: the delete route points is currently removed
// ! TODO: loading the route from a file is currently removed

import {
  ref,
  onMounted,
  computed,
  inject,
  shallowRef,
  watch,
  onBeforeUnmount,
} from "vue";
import { useI18n } from "nano-vue-i18n";
import { MglCustomControl } from "@indoorequal/vue-maplibre-gl";
import { type Map as MglMap } from "maplibre-gl";
import {
  lightTheme,
  NConfigProvider,
  NButton,
  NPopover,
  NText,
  NSpin,
  NIcon,
  useMessage,
  useThemeVars,
} from "naive-ui";
import MapCompass from "@/components/MapCompass.vue";
import { Route } from "@vicons/tabler";
import { useRouteStore } from "@/store/route-store";
import TextFileUploaderDialog from "@/components/TextFileUploaderDialog.vue";
import { GeolocationManager } from "@/libs/geolocation";
import TrackerViewRouteDrawer from "@/components/TrackerViewRouteDrawer.vue";
import { useMapStore } from "@/store/map-store";
import PlatformInfo from "@/utils/platform";
import type NoSleep from "nosleep.js";
import { useImuCompass } from "@/composables/useImuCompass";
import SelectorDrawer from "@/components/CartoSketch/SelectorDrawer.vue";
import { Folders } from "@vicons/tabler";

// Import the new components
import MapContainer from "@/components/TrackerView/MapContainer.vue";
import MapControls from "@/components/TrackerView/MapControls.vue";
import DrawingTools from "@/components/TrackerView/DrawingTools.vue";
import LocationMarker from "@/components/TrackerView/LocationMarker.vue";
import VelocityMarker from "@/components/TrackerView/VelocityMarker.vue";
import AccelerationMarker from "@/components/TrackerView/AccelerationMarker.vue";
import RecordingButton from "@/components/TrackerView/RecordingButton.vue";
import StatusBar from "@/components/TrackerView/StatusBar.vue";
import BuildingLayerToggle from "@/components/TrackerView/BuildingLayerToggle.vue";
import CurrentLocationToggle from "@/components/TrackerView/CurrentLocationToggle.vue";
import FeatureEditPopover from "@/components/TrackerView/FeatureEditPopover.vue";

import { createTerraDrawComposable } from "@/composables/useTerraDraw";
import { useSketchStore } from "@/store/sketch-store";
import type Matrix from "ml-matrix";
import type { GeoJSONStoreFeatures } from "terra-draw";
import { isArray, throttle } from "lodash-es";
import type { Position } from "gcoord";
import {
  shouldShowCompass,
  shouldKeepScreenOn,
  getMapTileServer,
  getMapTilerApiKey,
  getCustomMapTileUrl,
  getAutoRecenterTimeout,
  getDefaultMapZoomLevel,
} from "@/libs/default-settings";
import { onBeforeRouteLeave } from "vue-router";
import type { KalmanState } from "@/libs/geolocation";
import type { GeographicPoint } from "@/libs/geolocation/types";

const platform = new PlatformInfo();
const isMobile = platform.isMobile;

const theme = useThemeVars();
const mapStore = useMapStore();
const sketchStore = useSketchStore();
const message = useMessage();
const locator = inject("geolocation") as GeolocationManager;
const { t } = useI18n();
const buildTimeMapTilerKey = __MAPTILER_KEY__;

// Get API key from settings or use build-time key
const effectiveMapTilerKey = computed(() => {
  const userKey = getMapTilerApiKey();
  return userKey || buildTimeMapTilerKey;
});

// Map tile server configuration
interface TileServerConfig {
  type: "maptiler" | "openfreemap" | "custom";
  getUrl: () => string;
}

const mapTileServers: Record<string, TileServerConfig> = {
  maptiler: {
    type: "maptiler",
    getUrl: () =>
      `https://api.maptiler.com/maps/basic-v2/style.json?key=${effectiveMapTilerKey.value}`,
  },
  openfreemap: {
    type: "openfreemap",
    getUrl: () => "https://tiles.openfreemap.org/styles/liberty/style.json",
  },
  custom: {
    type: "custom",
    getUrl: () =>
      getCustomMapTileUrl() ||
      `https://api.maptiler.com/maps/basic-v2/style.json?key=${effectiveMapTilerKey.value}`,
  },
};

// Computed style URL based on mapTileServer setting
const styleUrl = computed(() => {
  const server = getMapTileServer();
  const serverConfig = mapTileServers[server];
  if (serverConfig) {
    return serverConfig.getUrl();
  }
  return mapTileServers["maptiler"].getUrl();
});

const mapContainerRef = shallowRef<InstanceType<typeof MapContainer> | null>(
  null,
);
const routeStore = useRouteStore();
routeStore.setLocator(locator);

const noSleep = inject("noSleep") as NoSleep;

const path = computed(() => {
  if (!routeStore.currentRouteId) return [];
  const route = routeStore.routes.find(
    (r) => r.id === routeStore.currentRouteId,
  );
  return route?.points || [];
});

const uploadModelOpened = ref(false);

const geojsonSource = computed<any>(() => {
  if (path.value.length > 1 || path.value.length === 0) {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description: routeStore.currentRouteId,
          },
          geometry: {
            type: "LineString",
            coordinates: path.value.map((coord) => [
              coord.longitude,
              coord.latitude,
            ]),
          },
        },
      ],
    };
  } else {
    return {
      type: "FeatureCollection",
      features: [],
    };
  }
});

// TerraDraw composable
const terraDraw = shallowRef<ReturnType<
  typeof createTerraDrawComposable
> | null>(null);

const isShowingBuildingLayer = ref(false);
const isWatchingCurrentLocation = ref(true);

const changeRecordState = (() => {
  let isNewRoute = true;
  return async function () {
    try {
      if (!routeStore.isRecording)
        isNewRoute = routeStore.currentRouteId === null;
      await routeStore.toggleRecording((key: string) => t(key));
      if (!routeStore.isRecording && isNewRoute) {
        drawerTooltipOpened.value = true;
        setTimeout(() => {
          drawerTooltipOpened.value = false;
        }, 3000);
      }
      if (routeStore.isRecording && shouldKeepScreenOn()) noSleep.enable();
      else noSleep.disable();
    } catch (err) {
      console.error(err);
      noSleep.disable();
    }
  };
})();

// Feature edit popover state
const isFeatureEditPopoverOpen = ref(false);
const featurePopoverX = ref(0);
const featurePopoverY = ref(0);

function handleUpdateFeatureName(name: string) {
  if (terraDraw.value) {
    terraDraw.value.selectedFeatureName.value = name;
  }
}

function handleUpdateFeatureDescription(description: string) {
  if (terraDraw.value) {
    terraDraw.value.selectedFeatureDescription.value = description;
  }
}

async function handleSaveFeatureEdit() {
  if (terraDraw.value) {
    await terraDraw.value.updateSelectedFeature();
  }
}

// Watch for selection changes to open popover
watch(
  () => terraDraw.value?.selectedFeatureId.value,
  (featureId) => {
    if (featureId) {
      // Get the feature and project its center to screen coordinates
      const map = mapContainerRef.value?.map;
      const feature =
        terraDraw.value?.draw.value?.getSnapshotFeature(featureId);
      if (map && feature) {
        const lngLat = getFeatureCenter(feature);
        const point = map.project(lngLat);
        // Use container offset to get viewport coordinates
        const canvas = map.getCanvas();
        const rect = canvas.getBoundingClientRect();
        featurePopoverX.value = rect.left + point.x;
        featurePopoverY.value = rect.top + point.y;
      }
      isFeatureEditPopoverOpen.value = true;
    } else {
      isFeatureEditPopoverOpen.value = false;
    }
  },
);

// Helper to get the center of a feature
function getFeatureCenter(feature: GeoJSONStoreFeatures): {
  lng: number;
  lat: number;
} {
  const coords = feature.geometry.coordinates;
  if (isArray(coords[0])) {
    if (coords.length === 0) {
      return { lng: 0, lat: 0 };
    }
    if (isArray(coords[0][0])) {
      let sumX = 0;
      let sumY = 0;
      let count = 0;
      for (const row of coords as Position[][]) {
        for (const coord of row) {
          sumX += coord[0];
          sumY += coord[1];
        }
      }
      return { lng: sumX / count, lat: sumY / count };
    } else {
      const midIndex = Math.floor(coords.length / 2);
      return {
        lng: (coords as Position[])[midIndex][0],
        lat: (coords as Position[])[midIndex][1],
      };
    }
  } else {
    return {
      lng: (coords as Position)[0],
      lat: (coords as Position)[1],
    };
  }
}

const loadTextFileDialogCallback = ref<(contents: string[]) => Promise<void>>(
  async () => {},
);

function followRoute() {
  isRouteDrawerOpen.value = false;
  message.warning("Not implemented yet");
}

const routeDrawerWidth = ref(0);
const isRouteDrawerOpen = ref(false);
watch(isRouteDrawerOpen, (val) => {
  const map = mapContainerRef.value?.map;
  if (map) {
    map.easeTo({
      padding: isMobile
        ? { bottom: val ? routeDrawerWidth.value : 0 }
        : { left: val ? routeDrawerWidth.value : 0 },
      duration: 500,
    });
  }
});
const toggleRouteDrawer = () =>
  (isRouteDrawerOpen.value = !isRouteDrawerOpen.value);

const drawerTooltipOpened = ref(false);

// Sketch selector drawer state
const isSketchSelectorOpen = ref(false);

const sketchList = computed(() => {
  return sketchStore.sketches.map((sketch) => ({
    name: sketch.meta.name,
    id: sketch.id,
    tags: sketch.meta.tags,
  }));
});

const handleSketchSelect = (id: string) => {
  const sketch = sketchStore.sketches.find((s) => s.id === id);
  sketchStore.setCurrentSketchId(id);
  isSketchSelectorOpen.value = false;
  message.success(t("sketchEdit.switchSuccess", { sketch: sketch?.meta.name }));
};

const handleSketchNew = async () => {
  const newSketch = await sketchStore.createSketch(
    t("sketchEdit.newSketchName"),
  );
  sketchStore.setCurrentSketchId(newSketch.id);
  isSketchSelectorOpen.value = false;
  message.success(
    t("sketchEdit.createSuccess", { sketch: newSketch.meta.name }),
  );
};

const handleSketchRemove = async (id: string) => {
  await sketchStore.deleteSketch(id);
};

const mapReady = ref<boolean>(false);
const deviceBearing = ref<number>(0);
const isUserSettingTheMap = ref(false);

// Initialize IMU compass
const {
  bearing: imuBearing,
  isTracking: imuIsTracking,
  isSupported: imuIsSupported,
  error: imuError,
  startTracking: startImuTracking,
} = useImuCompass({ autoStart: true });

// Update device bearing when IMU bearing changes
watch(imuBearing, (newBearing) => {
  deviceBearing.value = newBearing;
});

let toCenterTheMapHandler = -1;

onBeforeRouteLeave(() => {
  isFeatureEditPopoverOpen.value = false;
});

onMounted(async () => {
  await routeStore.init();
  await mapStore.init();
  await sketchStore.init();

  // Use auto-recenter timeout setting
  const autoRecenterTimeout = getAutoRecenterTimeout();
  if (
    Date.now() - mapStore.lastUpdateTime < autoRecenterTimeout &&
    mapStore.lastUpdateTime !== 0
  ) {
    const lastLocation = locator.getLastKnownLocation();
    // Only set center if we have valid coordinates (not the default 0,0)
    if (lastLocation.latitude !== 0 || lastLocation.longitude !== 0) {
      mapStore.setCenter(lastLocation);
    } else {
      const currentLocation = await locator.getCurrentLocation();
      if (currentLocation.isOk()) mapStore.setCenter(currentLocation.value);
      else
        console.warn(
          "[TrackerView] No valid last known location available, skipping map center update",
        );
    }
  } else {
    mapStore.setCenter(locator.getLastKnownLocation());
    mapStore.setBearing(0);
    mapStore.setZoom(getDefaultMapZoomLevel());
  }

  toCenterTheMapHandler = locator.addLocationListener(
    throttle((point: GeographicPoint) => {
      if (mapRef.value) {
        const userOperating =
          mapRef.value.isEasing() ||
          mapRef.value.isMoving() ||
          mapRef.value.isRotating() ||
          mapRef.value.isZooming() ||
          isUserSettingTheMap.value;
        if (!userOperating && isWatchingCurrentLocation.value) {
          mapRef.value?.easeTo({ center: point.toLngLatLike(), duration: 300 });
          setTimeout(() => mapStore.setCenter(point), 300);
        }
      }
    }, 2000),
  );

  mapReady.value = true;
});

const devMode = !__RELEASE_MODE__;

const showCompass = computed(() => shouldShowCompass() || isMobile || devMode);

// Computed property to get Kalman gain for dev mode
let kalmanGain = shallowRef<Matrix | null>(null);
let kalmanState = shallowRef<KalmanState | null>(null);
let kalmanUpdateInterval: number | undefined;

if (devMode) {
  kalmanUpdateInterval = setInterval(() => {
    kalmanGain.value = locator.getLastKalmanGain();
    kalmanState.value = locator.getKalmanState();
  }, 100);
}

onBeforeUnmount(() => {
  if (kalmanUpdateInterval) clearInterval(kalmanUpdateInterval);
  locator.removeLocationListener(toCenterTheMapHandler);
});

let latestBearing = 0;
// Handle device orientation updates when tracking is enabled
const handleDeviceOrientation = (bearing: number) => {
  latestBearing = bearing;
  if (mapStore.isTrackingOrientation) {
    const map = mapContainerRef.value?.map;
    if (
      map?.isEasing() ||
      map?.isMoving() ||
      map?.isRotating() ||
      map?.isZooming() ||
      isUserSettingTheMap.value
    )
      return;
    mapStore.setBearing(bearing);
  }
};

// Toggle orientation tracking
const toggleOrientationTracking = () => {
  mapStore.setTrackingOrientation(!mapStore.isTrackingOrientation);

  if (mapStore.isTrackingOrientation) {
    // Start tracking device orientation
    startImuTracking();
  } else {
    // Stop using orientation for map bearing, but keep IMU running for deviceBearing updates
    mapStore.setBearing(0);
    const map = mapContainerRef.value?.map;
    if (map) map.setBearing(0);
  }
};

const mapRef = shallowRef<MglMap | null>(null);
// Map event handlers
const handleMapInit = (event: any) => {
  // Initialize TerraDraw
  const map = event.map;
  mapRef.value = map;
  const terraDrawInstance = createTerraDrawComposable(map);
  terraDraw.value = terraDrawInstance;
  terraDrawInstance.initDraw();

  // Update popover position when map moves
  const updatePopoverPosition = () => {
    if (!terraDraw.value) return;

    const featureId = terraDraw.value?.selectedFeatureId.value;
    if (!featureId) return;
    const feature = terraDraw.value?.draw.value?.getSnapshotFeature(featureId);
    if (map && feature) {
      const lngLat = getFeatureCenter(feature);
      const point = map.project(lngLat);
      // Use container offset to get viewport coordinates
      const canvas = map.getCanvas();
      const rect = canvas.getBoundingClientRect();
      featurePopoverX.value = rect.left + point.x;
      featurePopoverY.value = rect.top + point.y;
    }
  };

  // Listen to all map move events
  map.on("render", updatePopoverPosition);

  // Load existing drafts from sketch store
  if (sketchStore.currentDrafts.length > 0) {
    terraDrawInstance.loadDrafts(sketchStore.currentDrafts);
  }
};

const handleMapTouchStart = () => {
  isUserSettingTheMap.value = true;
};

const handleMapTouchEnd = () => {
  isUserSettingTheMap.value = false;
  if (mapStore.isTrackingOrientation) handleDeviceOrientation(latestBearing);
};

const handleMapClick = () => {
  isRouteDrawerOpen.value = false;
};

const handleDrawingToolClick = (mode: string) => {
  if (terraDraw.value) {
    terraDraw.value.setMode(mode);
  }
};

const handleUndo = async () => {
  if (terraDraw.value) {
    await terraDraw.value.undo();
  }
};

const handleRedo = async () => {
  if (terraDraw.value) {
    await terraDraw.value.redo();
  }
};

const handleClearAll = async () => {
  if (terraDraw.value) {
    await terraDraw.value.clearAll();
  }
};

const handleToggleCurrentLocation = async () => {
  isWatchingCurrentLocation.value = !isWatchingCurrentLocation.value;
  if (isWatchingCurrentLocation.value) {
    const map = mapContainerRef.value?.map;
    if (map) {
      const lastLocation = locator.getLastKnownLocation();
      // Only fly to location if we have valid coordinates (not the default 0,0)
      if (lastLocation.latitude !== 0 || lastLocation.longitude !== 0) {
        map.flyTo({ center: lastLocation.toLngLatLike(), zoom: 18 });
      } else {
        const location = await locator.getCurrentLocation();
        if (location.isOk()) {
          map.flyTo({ center: location.value.toLngLatLike(), zoom: 18 });
        } else {
          console.warn(
            "[TrackerView] No valid current location available for navigation",
          );
        }
      }
    }
  }
};

const handleToggleBuildingLayer = () => {
  isShowingBuildingLayer.value = !isShowingBuildingLayer.value;
  const map = mapContainerRef.value?.map;
  if (map) {
    if (isShowingBuildingLayer.value) {
      mapContainerRef.value?.setupBuildingLayer(map);
    } else {
      mapContainerRef.value?.removeBuildingLayer(map);
    }
  }
};

// Watch for sketch changes to load drafts
watch(
  () => sketchStore.currentSketchId,
  async () => {
    if (terraDraw.value && sketchStore.currentDrafts) {
      // Clear existing drawings and load new drafts for the current sketch
      await terraDraw.value.clearAll();
      terraDraw.value.loadDrafts(sketchStore.currentDrafts);
    }
  },
);
</script>

<template>
  <div class="map-layout-container">
    <div class="map-layout">
      <transition name="map-load">
        <div v-if="mapReady" style="width: 100%; height: 100%">
          <MapContainer
            ref="mapContainerRef"
            :style-url="styleUrl"
            :geojson-source="geojsonSource"
            :on-map-init="handleMapInit"
            :on-map-touch-start="handleMapTouchStart"
            :on-map-touch-end="handleMapTouchEnd"
            :on-map-click="handleMapClick"
          >
            <!-- Map Controls -->
            <MapControls />

            <!-- Current Location Toggle -->
            <CurrentLocationToggle
              :locator="locator"
              :is-watching-current-location="isWatchingCurrentLocation"
              @toggle="handleToggleCurrentLocation"
            />

            <!-- Building Layer Toggle -->
            <BuildingLayerToggle
              :is-showing-building-layer="isShowingBuildingLayer"
              @toggle="handleToggleBuildingLayer"
            />

            <!-- Drawing Tools -->
            <DrawingTools
              :active-draw-method="
                terraDraw?.activeDrawMethod.value ?? 'select'
              "
              :can-undo="terraDraw?.canUndo.value"
              :can-redo="terraDraw?.canRedo.value"
              @set-draw-mode="handleDrawingToolClick"
              @undo="handleUndo"
              @redo="handleRedo"
              @clear-all="handleClearAll"
            />

            <!-- Feature Edit Popover -->
            <FeatureEditPopover
              :show="isFeatureEditPopoverOpen"
              :x="featurePopoverX"
              :y="featurePopoverY"
              :name="terraDraw?.selectedFeatureName.value ?? ''"
              :description="terraDraw?.selectedFeatureDescription.value ?? ''"
              @update:show="(show) => (isFeatureEditPopoverOpen = show)"
              @update:name="handleUpdateFeatureName"
              @update:description="handleUpdateFeatureDescription"
              @save="handleSaveFeatureEdit"
            />

            <!-- Route Drawer Toggle Button -->
            <!-- Sketch Selector Toggle -->
            <mgl-custom-control position="bottom-left">
              <n-popover trigger="manual" :show="false">
                <template #trigger>
                  <button
                    class="btn-control"
                    :class="{ active: isSketchSelectorOpen }"
                    @click="isSketchSelectorOpen = true"
                    :title="t('sketchEdit.cartoSketchLibrary')"
                  >
                    <n-icon :size="24">
                      <folders />
                    </n-icon>
                  </button>
                </template>
              </n-popover>
              <n-popover trigger="manual" :show="drawerTooltipOpened">
                <template #trigger>
                  <button
                    :class="['btn-control', { active: isRouteDrawerOpen }]"
                    @click="toggleRouteDrawer"
                  >
                    <n-icon :size="24">
                      <route />
                    </n-icon>
                  </button>
                </template>
                <span>{{ t("trackerView.uiRouteCheckoutTip") }}</span>
              </n-popover>
            </mgl-custom-control>

            <!-- Location Marker -->
            <LocationMarker
              :device-bearing="
                mapStore.isTrackingOrientation
                  ? 0
                  : (deviceBearing - mapStore.bearing) % 360
              "
            />

            <!-- Velocity Marker -->
            <VelocityMarker
              v-if="devMode"
              :is-watching-current-location="isWatchingCurrentLocation"
              :map-bearing="mapStore.bearing"
            />

            <!-- Acceleration Marker -->
            <AccelerationMarker
              v-if="devMode"
              :is-watching-current-location="isWatchingCurrentLocation"
              :map-bearing="mapStore.bearing"
            />
          </MapContainer>

          <!-- Map Compass -->
          <div
            :style="{
              zIndex: 99,
              position: 'absolute',
              right: '4px',
              top: '16em',
            }"
          >
            <MapCompass
              v-if="showCompass"
              v-model:bearing="mapStore.bearing"
              :tracking="mapStore.isTrackingOrientation"
              @toggle-tracking="toggleOrientationTracking"
            />
          </div>
        </div>
        <div
          v-else
          style="
            width: 100%;
            height: 100%;
            display: grid;
            place-content: center;
          "
        >
          <n-spin size="large">
            <template #description>
              <n-text>{{ t("trackerView.mapLoading") }}</n-text>
            </template>
          </n-spin>
        </div>
      </transition>
    </div>

    <text-file-uploader-dialog
      v-model:show="uploadModelOpened"
      :types="['application/json', 'text/plain']"
      @confirm="loadTextFileDialogCallback"
    />

    <tracker-view-route-drawer
      v-model:show="isRouteDrawerOpen"
      @update:width="(width) => (routeDrawerWidth = width)"
    >
      <template #bottom-floating>
        <n-config-provider :theme="lightTheme">
          <n-button
            v-if="path.length > 1"
            :size="'large'"
            type="success"
            class="drawer-floating-button"
            @click="followRoute"
          >
            Follow
          </n-button>
        </n-config-provider>
      </template>
    </tracker-view-route-drawer>

    <!-- Mobile record button positioned at bottom -->
    <RecordingButton
      :is-recording="routeStore.isRecording"
      :record-timespan="routeStore.currentRouteRecordTimespan"
      :is-route-drawer-open="isRouteDrawerOpen"
      @toggle-recording="changeRecordState"
    />

    <!-- Mobile status bar positioned at bottom -->
    <StatusBar
      v-if="devMode && kalmanState"
      :is-recording="routeStore.isRecording"
      :record-timespan="routeStore.currentRouteRecordTimespan"
      :is-route-drawer-open="isRouteDrawerOpen"
      :current-location="locator.getLastKnownLocation()"
      :kalman-state="kalmanState"
      :kalman-gain="kalmanGain"
    />

    <!-- Sketch Selector Drawer -->
    <SelectorDrawer
      v-model:active="isSketchSelectorOpen"
      :list="sketchList"
      :active-id="sketchStore.currentSketchId || ''"
      @select="handleSketchSelect"
      @remove="handleSketchRemove"
    />
  </div>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>

<style scoped>
.drawer-floating-button {
  box-shadow:
    0 0 16px -2px v-bind("lightTheme.Button.common?.successColorSuppl"),
    0 1px 3px -1px #000;
}

.map-load-enter-active,
.map-load-leave-active {
  transition: opacity 0.3s ease;
}

.map-load-enter-from,
.map-load-leave-to {
  opacity: 0;
}

.map-layout-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  box-shadow: v-bind("theme.boxShadow3");
  border-radius: v-bind("theme.borderRadius");
  border: 1px solid v-bind("theme.borderColor");
  box-sizing: border-box;
}

.map-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.map-layout:deep(.maplibregl-ctrl-group) {
  overflow: hidden;
}

/* Custom CSS classes to replace Tailwind utilities */
.btn-control {
  display: flex !important;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.2s ease,
    border-radius 0.2s ease;
}

.btn-control.active {
  background-color: #bfdbfe;
  border-radius: 0.125rem;
}

.btn-route-toggle {
  transition: all 0.2s ease;
  border-radius: 0;
}

.btn-route-toggle:hover {
  border-radius: 0.125rem;
  stroke: #075985;
  fill: #0369a1;
  color: #075985;
}
</style>
