<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */

// ! TODO: the delete route points is currently removed
// ! TODO: loading the route from a file is currently removed

import {
  ref,
  onMounted,
  computed,
  inject,
  type Component,
  shallowRef,
  watch,
} from "vue";
import { useI18n } from "vue-i18n";
import {
  MglMap,
  MglNavigationControl,
  MglScaleControl,
  MglGeolocateControl,
  MglFullscreenControl,
  MglCustomControl,
  MglGeoJsonSource,
  MglLineLayer,
} from "@indoorequal/vue-maplibre-gl";
import {
  lightTheme,
  NConfigProvider,
  NButton,
  NPopover,
  NCard,
  NText,
  NSpin,
  NAlert,
  NIcon,
  useMessage,
} from "naive-ui";
import {
  TerraDraw,
  TerraDrawPointMode,
  TerraDrawSelectMode,
  TerraDrawLineStringMode,
} from "terra-draw";
import { TerraDrawMapLibreGLAdapter } from "terra-draw-maplibre-gl-adapter";
import { Map as Mgl, Marker } from "maplibre-gl";
import {
  MapPin,
  Line,
  HandFinger,
  PlayerRecord,
  Square,
  // Upload,
  Route,
} from "@vicons/tabler";
import { type GeographicPointType } from "@/libs/geolocation/types";
import { useRouteStore } from "@/store/route-store";
// import {
//   tauriFileSaveDialog,
//   tauriCreateTextFile,
//   saveString,
//   // tauriFileOpenDialog,
//   // tauriReadTextFile,
// } from "@/utils/utilities";
import TextFileUploaderDialog from "@/components/TextFileUploaderDialog.vue";
import type { TerraDrawBaseDrawMode } from "node_modules/terra-draw/dist/extend";
import { UpdateService } from "@/libs/geolocation/update-service";
import TrackerViewRouteDrawer from "@/components/TrackerViewRouteDrawer.vue";
import { useSettingsStore } from "@/store/settings-store";
import PlatformInfo from "@/utils/platform";

const platform = new PlatformInfo();
const isMobile = platform.isMobile;

const settings = useSettingsStore();
const message = useMessage();
const locator = inject("geolocation") as UpdateService;
const { t } = useI18n();
const i18n = useI18n();
const zoom = ref(7);
const mapTilerKey = __MAPTILER_KEY__;
const styleUrl = `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapTilerKey}`;

const location = ref<GeographicPointType>({ latitude: 0, longitude: 0 });
const map = shallowRef<Mgl | null>(null);
const draw = shallowRef<TerraDraw | null>(null);
const activeDrawMethod = ref<string>("select");
const pathRecording = ref(false);
const routeStore = useRouteStore();

const path = computed(() => {
  if (!routeStore.currentRouteId) return [];
  const route = routeStore.routes.find(
    (r) => r.id === routeStore.currentRouteId
  );
  return route?.points || [];
});
const uploadModelOpened = ref(false);

const singlePointMarker = new Marker();
const geojsonSource = computed<any>(() => {
  if (path.value.length > 1 || path.value.length === 0) {
    singlePointMarker.remove();
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
    if (path.value.length === 1) {
      singlePointMarker.setLngLat([
        path.value[0].longitude,
        path.value[0].latitude,
      ]);
      const localMap = map.value;
      if (localMap) singlePointMarker.addTo(localMap as any);
    }
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

watch([() => settings.settings.mapLanguage, () => i18n.locale.value], (v) => {
  if (v && map.value)
    changeMapLanguage(map.value, v[0] === "interface" ? v[1] : v[0]);
});

const changeMapLanguage = (map: Mgl, lang: string) => {
  const language = lang === "zh-CN" ? "zh" : "en";
  const layers = [
    "City labels",
    "Road labels",
    "Station labels",
    "Airport labels",
    "Continent labels",
    "Country labels",
  ];

  for (const layer of layers) {
    map.setLayoutProperty(layer, "text-field", ["get", `name:${language}`]);
  }
};

function initMap(event: any) {
  map.value = event.map;
  if (map.value) changeMapLanguage(map.value as any, i18n.locale.value);
  map.value?.on("click", () => {
    isRouteDrawerOpen.value = false;
  });
  draw.value = new TerraDraw({
    adapter: new TerraDrawMapLibreGLAdapter({ map: map.value }),
    modes: drawerModes.map((item) => item.mode as TerraDrawBaseDrawMode<any>),
  });

  draw.value.start();
}

let watchingHandler = -1;
async function changeRecordState() {
  try {
    pathRecording.value = !pathRecording.value;

    if (pathRecording.value) {
      if (!routeStore.currentRouteId) {
        const newRoute = await routeStore.addRoute(t("trackerView.nameNewRoute"));
        await routeStore.addPointToRoute(newRoute.id, locator.present);
        openDrawerTooltip();
        routeStore.setCurrentRouteId(newRoute.id);
      } else {
        await routeStore.addPointToRoute(
          routeStore.currentRouteId,
          locator.present
        );
      }
      watchingHandler = locator.addListener((newPoint) => {
        routeStore.addPointToRoute(routeStore.currentRouteId!, newPoint);
      });
    } else {
      if (watchingHandler !== -1) {
        locator.removeListener(watchingHandler);
        pathRecording.value = false;
        watchingHandler = -1;
      }
    }
  } catch (err) {
    console.error(err);
  }
}

// async function savePath() {
//   if (__TAURI_ENVIRONMENT__) {
//     const path = await tauriFileSaveDialog("tracked-path-export", ["json"]);
//     if (path) tauriCreateTextFile(path, JSON.stringify(geojsonSource.value));
//   } else {
//     saveString(
//       JSON.stringify(geojsonSource.value),
//       "application/json",
//       "tracked-path-export"
//     );
//   }
// }

const loadTextFileDialogCallback = ref<(contents: string[]) => Promise<void>>(
  async () => {}
);

// function loadFromText() {
//   return new Promise<string[]>(async (resolve, reject) => {
//     if (!__TAURI_ENVIRONMENT__) {
//       loadTextFileDialogCallback.value = async (contents: string[]) => {
//         if (contents.length === 0) {
//           reject(new Error("No file selected"));
//         } else {
//           resolve(contents);
//         }
//       };

//       uploadModelOpened.value = true;
//     } else {
//       const filePaths = await tauriFileOpenDialog(
//         false,
//         "tracked-path-export",
//         ["txt", "json"]
//       );
//       if (!filePaths) return;
//       const contents: string[] = [];
//       for (const filePath of filePaths) {
//         contents.push(await tauriReadTextFile(filePath));
//       }
//       resolve(contents);
//     }
//   });
// }

// async function loadTrackFromFile() {
//   try {
//     const contents = await loadFromText();
//     const points = JSON.parse(
//       contents[0]
//     ).features[0].geometry.coordinates.map((coord: number[]) => ({
//       latitude: coord[1],
//       longitude: coord[0],
//     }));

//     const newRoute = await routeStore.addRoute(t("trackerView.nameNewlyImportedRoute"));
//     for (const point of points) {
//       await routeStore.addPointToRoute(newRoute.id, point);
//     }
//     openDrawerTooltip();
//   } catch (error) {
//     message.error(String(error));
//   }
// }

function followRoute() {
  isRouteDrawerOpen.value =  false;
  message.warning("Not implemented yet");
}

const routeDrawerWidth = ref(0);
const isRouteDrawerOpen = ref(false);
watch(isRouteDrawerOpen, (val) =>
  map.value?.easeTo({
    padding: isMobile ? { bottom: val ? routeDrawerWidth.value : 0 } : { left: val ? routeDrawerWidth.value : 0 },
    duration: 500,
  })
);
const toggleRouteDrawer = () =>
  (isRouteDrawerOpen.value = !isRouteDrawerOpen.value);

const drawerTooltipOpened = ref(false);
const openDrawerTooltip = () => {
  if (drawerTooltipOpened.value) return;
  drawerTooltipOpened.value = true;
  setTimeout(() => {
    drawerTooltipOpened.value = false;
  }, 3000);
};

const initialLocateError = ref("");

const mapReady = ref<boolean>(false);
onMounted(async () => {
  await routeStore.init();

  try {
    location.value = await locator.refresh()!;
    if (!locator.usingGPS)
      message.warning(t("trackerView.gpsWarning"), { duration: 5000 });
  } catch (err) {
    initialLocateError.value =
      (err as GeolocationPositionError).message ?? String(err);
  }
  mapReady.value = true;
  draw.value?.start();
});
</script>

<template>
  <div style="width: 100%; height: 100%; position: relative; overflow: hidden">
    <n-card
      class="map-layout"
      content-style="padding: 0;"
      hoverable
    >
      <transition name="map-load">
        <div
          v-if="mapReady && !initialLocateError"
          style="width: 100%; height: 100%"
        >
          <mgl-map
            :map-style="styleUrl"
            :center="[location.longitude, location.latitude]"
            :zoom="zoom"
            height="100%"
            @map:load="initMap"
          >
            <mgl-navigation-control position="top-left" />
            <mgl-geolocate-control
              v-if="locator.usingGPS"
              position="top-left"
              :track-user-location="true"
            />
            <mgl-fullscreen-control position="top-left" />
            <mgl-scale-control position="bottom-left" />
            <mgl-custom-control
              v-if="!isMobile"
              position="top-right"
            >
              <button
                v-for="item in drawerModes"
                :key="item.name"
                :class="[
                  'btn-control',
                  'btn-draw-mode',
                  { active: item.mode.mode === activeDrawMethod },
                ]"
                :title="item.name"
                @click="
                  () => {
                    console.log('activeDrawMethod', activeDrawMethod);
                    if (activeDrawMethod === item.mode.mode) {
                      draw?.setMode('select');
                      activeDrawMethod = 'select';
                    } else {
                      activeDrawMethod = item.mode.mode;
                      draw?.start();
                      draw?.setMode(item.mode.mode);
                    }
                  }
                "
              >
                <n-icon :size="20">
                  <component
                    :is="item.icon"
                    class="btn-default"
                  />
                </n-icon>
              </button>
            </mgl-custom-control>
            <mgl-custom-control position="bottom-left">
              <n-popover
                trigger="manual"
                :show="drawerTooltipOpened"
              >
                <template #trigger>
                  <button
                    class="btn-control btn-route-toggle"
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
            <mgl-geo-json-source
              source-id="geojson"
              :data="(geojsonSource as any)"
            >
              <mgl-line-layer
                layer-id="geojson"
                :layout="{
                  'line-join': 'round',
                  'line-cap': 'round',
                }"
                :paint="{
                  'line-width': 5,
                  'line-color': '#008800',
                  'line-opacity': 0.8,
                }"
              />
            </mgl-geo-json-source>
          </mgl-map>
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
          <n-spin
            v-if="!initialLocateError"
            size="large"
          >
            <template #description>
              <n-text>{{ t("trackerView.mapLoading") }}</n-text>
            </template>
          </n-spin>
          <n-alert
            v-else
            :title="t('app.error')"
            type="error"
          >
            <div>
              <br>
              <b>{{ t("app.error") }}: </b><br><code>{{
                initialLocateError
              }}</code>
            </div>
          </n-alert>
        </div>
      </transition>
    </n-card>

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
    <div
      v-if="isMobile"
      class="mobile-record-button-container"
      :class="{ 'drawer-open': isRouteDrawerOpen }"
    >
      <n-config-provider :theme="lightTheme">
        <n-button
          :type="pathRecording ? 'error' : 'primary'"
          :size="'large'"
          :class="['mobile-record-button', pathRecording ? 'recording' : 'not-recording']"
          @click="changeRecordState"
        >
          <template #icon>
            <n-icon :size="20">
              <component
                :is="pathRecording ? Square : PlayerRecord"
                :size="pathRecording ? 16 : 20"
              />
            </n-icon>
          </template>
          {{ pathRecording ? t('trackerView.uiRecordingStatus.on') : t('trackerView.uiRecordingStatus.off') }}
        </n-button>
      </n-config-provider>
    </div>
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
}

.btn-draw-mode {
  transition: background-color 0.2s ease, border-radius 0.2s ease;
}

.btn-draw-mode.active {
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

.btn-record {
  transition: all 0.2s ease;
  border-radius: 0;
}

.btn-record:hover {
  border-radius: 0.125rem;
}

.btn-record.recording {
  stroke: #b91c1c;
  fill: #dc2626;
  color: #b91c1c;
}

.btn-record.recording:hover {
  background-color: #b91c1c;
  stroke: #ffffff;
  color: #ffffff;
}

.btn-record.not-recording {
  stroke: #075985;
  fill: #0369a1;
  color: #075985;
}

.btn-clear {
  stroke: #b91c1c;
  color: #b91c1c;
  transition: all 0.2s ease;
  border-radius: 0;
}

.btn-clear:hover {
  background-color: #b91c1c;
  stroke: #ffffff;
  color: #ffffff;
  border-radius: 0.125rem;
}

.btn-default {
  stroke: #292524;
  color: #292524;
}

/* Mobile record button styles */
.mobile-record-button-container {
  position: absolute;
  bottom: 48px;
  right: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  z-index: 1000;
  transition: bottom 0.3s ease;
}

.mobile-record-button-container.drawer-open {
  bottom: -128px;
}

.mobile-record-button {
  box-shadow: 0 0 16px -2px v-bind('lightTheme.Button.common?.primaryColorSuppl'), 0 1px 3px -1px #000;
  transition: all 0.2s ease;
  width: 10em;
}

.mobile-record-button.recording {
  box-shadow: 0 0 16px -2px v-bind('lightTheme.Button.common?.errorColorSuppl'), 0 1px 3px -1px #000;
}

.mobile-record-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px -2px v-bind('lightTheme.Button.common?.primaryColorSuppl'), 0 2px 8px -1px #000;
}

.mobile-record-button.recording:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px -2px v-bind('lightTheme.Button.common?.errorColorSuppl'), 0 2px 8px -1px #000;
}
</style>
