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
} from "vue";
import { useI18n } from "vue-i18n";
import { MglCustomControl } from "@indoorequal/vue-maplibre-gl";
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
import { DeviceOrientationService } from "@/utils/device-orientation-service";

// Import the new components
import MapContainer from "@/components/TrackerView/MapContainer.vue";
import MapControls from "@/components/TrackerView/MapControls.vue";
import DrawingTools from "@/components/TrackerView/DrawingTools.vue";
import LocationMarker from "@/components/TrackerView/LocationMarker.vue";
import RecordingButton from "@/components/TrackerView/RecordingButton.vue";
import BuildingLayerToggle from "@/components/TrackerView/BuildingLayerToggle.vue";
import CurrentLocationToggle from "@/components/TrackerView/CurrentLocationToggle.vue";

import {
  TerraDraw,
  TerraDrawPointMode,
  TerraDrawSelectMode,
  TerraDrawLineStringMode,
} from "terra-draw";
import { TerraDrawMapLibreGLAdapter } from "terra-draw-maplibre-gl-adapter";
import type { TerraDrawBaseDrawMode } from "node_modules/terra-draw/dist/extend";
import type { Component } from "vue";
import { MapPin, Line, HandFinger } from "@vicons/tabler";

const platform = new PlatformInfo();
const isMobile = platform.isMobile;

const theme = useThemeVars();
const mapStore = useMapStore();
const message = useMessage();
const locator = inject("geolocation") as GeolocationManager;
const { t } = useI18n();
const mapTilerKey = __MAPTILER_KEY__;
const styleUrl = `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapTilerKey}`;

const mapContainerRef = shallowRef<InstanceType<typeof MapContainer> | null>(null);
const draw = shallowRef<TerraDraw | null>(null);
const activeDrawMethod = ref<string>("select");
const routeStore = useRouteStore();
routeStore.setLocator(locator);

const noSleep = inject("noSleep") as NoSleep;

const path = computed(() => {
  if (!routeStore.currentRouteId) return [];
  const route = routeStore.routes.find(
    (r) => r.id === routeStore.currentRouteId
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

type DrawModes = {
  mode: TerraDrawBaseDrawMode<any>;
  name: string;
  icon: Component;
};

const drawerModes: DrawModes[] = [
  {
    mode: new TerraDrawPointMode(),
    name: t("trackerView.terraDrawTools.point"),
    icon: MapPin,
  },
  {
    mode: new TerraDrawLineStringMode(),
    name: t("trackerView.terraDrawTools.line"),
    icon: Line,
  },
  {
    mode: new TerraDrawSelectMode({
      allowManualDeselection: true,
      flags: {
        point: { feature: { draggable: true } },
        polygon: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
        linestring: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
        freehand: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
        circle: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
        rectangle: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
      },
    }),
    name: t("trackerView.terraDrawTools.select"),
    icon: HandFinger,
  },
];

const isShowingBuildingLayer = ref(false);
const isWatchingCurrentLocation = ref(true);

const changeRecordState = (() => {
  let isNewRoute = true;
  return async function () {
    try {
      if (!routeStore.isRecording) isNewRoute = routeStore.currentRouteId === null;
      await routeStore.toggleRecording(t);
      if (!routeStore.isRecording && isNewRoute) {
        drawerTooltipOpened.value = true;
        setTimeout(() => {
          drawerTooltipOpened.value = false;
        }, 3000);
      }
      if (routeStore.isRecording) noSleep.enable();
      else noSleep.disable();
    } catch (err) {
      console.error(err);
      noSleep.disable();
    }
  }
})();

const loadTextFileDialogCallback = ref<(contents: string[]) => Promise<void>>(
  async () => {}
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
      padding: isMobile ? { bottom: val ? routeDrawerWidth.value : 0 } : { left: val ? routeDrawerWidth.value : 0 },
      duration: 500,
    });
  }
});
const toggleRouteDrawer = () =>
  (isRouteDrawerOpen.value = !isRouteDrawerOpen.value);

const drawerTooltipOpened = ref(false);

const mapReady = ref<boolean>(false);
const deviceBearing = ref<number>(0);
const isUserSettingTheMap = ref(false);

onMounted(async () => {
  await routeStore.init();
  await mapStore.init();

  console.log(locator.getLastKnownLocation());
  // !TODO change the hard coded time to a setting
  if (Date.now() - mapStore.lastUpdateTime > 6000 && mapStore.lastUpdateTime !== 0) {
    mapStore.setCenter(locator.getLastKnownLocation());
  }
  DeviceOrientationService.addHandler((bearing) => {
    deviceBearing.value = bearing;
  });
  DeviceOrientationService.start();

  mapReady.value = true;
});

const devMode = !__RELEASE_MODE__;

let latestBearing = 0;
// Handle device orientation updates when tracking is enabled
const handleDeviceOrientation = (bearing: number) => {
  latestBearing = bearing;
  if (mapStore.isTrackingOrientation) {
    const map = mapContainerRef.value?.map;
    if (map?.isEasing() || map?.isMoving() || map?.isRotating() || map?.isZooming() || isUserSettingTheMap.value) return;
    mapStore.setBearing(bearing);
  }
};

// Toggle orientation tracking
const toggleOrientationTracking = (() => {
  let deviceOrientationHandlerId: number | null = null;
  return () => {
    mapStore.setTrackingOrientation(!mapStore.isTrackingOrientation);

    if (mapStore.isTrackingOrientation) {
      // Start tracking device orientation
      deviceOrientationHandlerId = DeviceOrientationService.addHandler(handleDeviceOrientation);
    } else {
      // Stop tracking device orientation
      if (deviceOrientationHandlerId !== null) {
        deviceOrientationHandlerId = null;
        mapStore.setBearing(0);
        const map = mapContainerRef.value?.map;
        if (map) map.setBearing(0);
      }
    }
  };
})();

// Map event handlers
const handleMapInit = (event: any) => {
  // Initialize TerraDraw
  draw.value = new TerraDraw({
    adapter: new TerraDrawMapLibreGLAdapter({ map: event.map }),
    modes: drawerModes.map((item) => item.mode as TerraDrawBaseDrawMode<any>),
  });
  draw.value.start();
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
  if (draw.value) {
    if (mode === "select") {
      draw.value.setMode("select");
      activeDrawMethod.value = "select";
    } else {
      activeDrawMethod.value = mode;
      draw.value.start();
      draw.value.setMode(mode);
    }
  }
};

const handleToggleCurrentLocation = () => {
  isWatchingCurrentLocation.value = !isWatchingCurrentLocation.value;
  if (isWatchingCurrentLocation.value) {
    const map = mapContainerRef.value?.map;
    if (map) {
      map.flyTo({ center: locator.getLastKnownLocation().toLngLatLike(), zoom: 18 });
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
</script>

<template>
  <div class="map-layout-container">
    <div class="map-layout">
      <transition name="map-load">
        <div
          v-if="mapReady"
          style="width: 100%; height: 100%"
        >
          <MapContainer
            ref="mapContainerRef"
            :style-url="styleUrl"
            :geojson-source="geojsonSource"
            :drawer-modes="drawerModes"
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
              :active-draw-method="activeDrawMethod"
              @update:active-draw-method="activeDrawMethod = $event"
              @set-draw-mode="handleDrawingToolClick"
            />

            <!-- Route Drawer Toggle Button -->
            <mgl-custom-control position="bottom-left">
              <n-popover
                trigger="manual"
                :show="drawerTooltipOpened"
              >
                <template #trigger>
                  <button
                    :class="[
                      'btn-control',
                      { active: isRouteDrawerOpen },
                    ]"
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
              :is-watching-current-location="isWatchingCurrentLocation"
              :device-bearing="deviceBearing"
            />
          </MapContainer>

          <!-- Map Compass -->
          <div style="z-index: 99; position: absolute; right: 4px; top: 9em;">
            <MapCompass
              v-if="isMobile || devMode"
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
  </div>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>

<style scoped>
.drawer-floating-button {
  box-shadow: 0 0 16px -2px v-bind('lightTheme.Button.common?.successColorSuppl'), 0 1px 3px -1px #000;
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
  box-shadow: v-bind('theme.boxShadow3');
  border-radius: v-bind('theme.borderRadius');
  border: 1px solid v-bind('theme.borderColor');
  box-sizing: border-box;
}

.map-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Custom CSS classes to replace Tailwind utilities */
.btn-control {
  display: flex !important;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease, border-radius 0.2s ease;
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
