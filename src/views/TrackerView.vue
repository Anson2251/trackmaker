<script lang="ts" setup>
import "tailwindcss";
import { ref, onMounted, computed, inject, type Component, shallowRef } from "vue";
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
  NPopover,
  NCard,
  NText,
  NSpin,
  NAlert,
  useMessage,
  useThemeVars,
} from "naive-ui";
import {
  TerraDraw,
  TerraDrawRectangleMode,
  TerraDrawPointMode,
  TerraDrawSelectMode,
  TerraDrawPolygonMode,
  TerraDrawLineStringMode,
  TerraDrawCircleMode,
  TerraDrawFreehandMode,
} from "terra-draw";
import { TerraDrawMapLibreGLAdapter } from "terra-draw-maplibre-gl-adapter";
import { Map as Mgl, Marker } from "maplibre-gl";
import {
  MapPin,
  Vector,
  Circle,
  Line,
  Polygon,
  HandFinger,
  HandMove,
  PlayerRecord,
  Square,
  Backspace,
  DeviceFloppy,
  Upload,
  Route,
} from "@vicons/tabler";
import { Icon } from "@vicons/utils";
import { type GeographicPointType } from "@/libs/geolocation/types";
import { useRouteStore } from "@/store/route-store";
import { storeInit } from "@/libs/store";
import {
  tauriFileSaveDialog,
  tauriCreateTextFile,
  saveString,
  tauriFileOpenDialog,
  tauriReadTextFile,
} from "@/utils/utilities";
import TextFileUploaderDialog from "@/components/TextFileUploaderDialog.vue";
import type { TerraDrawBaseDrawMode } from "node_modules/terra-draw/dist/extend";
import { UpdateService } from "@/libs/geolocation/update-service";
import TrackerViewRouteDrawer from "@/components/TrackerViewRouteDrawer.vue";

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
  if (path.value.length > 1) {
    singlePointMarker.remove();
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
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
    mode: new TerraDrawRectangleMode(),
    name: t('trackerView.terraDrawTools.rect'),
    icon: Vector,
  },
  {
    mode: new TerraDrawPointMode(),
    name: t('trackerView.terraDrawTools.point'),
    icon: MapPin,
  },
  {
    mode: new TerraDrawPolygonMode(),
    name: t('trackerView.terraDrawTools.polygon'),
    icon: Polygon,
  },
  {
    mode: new TerraDrawCircleMode(),
    name: t('trackerView.terraDrawTools.circle'),
    icon: Circle,
  },
  {
    mode: new TerraDrawLineStringMode(),
    name: t('trackerView.terraDrawTools.line'),
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
    name: t('trackerView.terraDrawTools.select'),
    icon: HandFinger,
  },
  {
    mode: new TerraDrawFreehandMode(),
    name: t('trackerView.terraDrawTools.draw'),
    icon: HandMove,
  },
];

const changeMapLanguage = (map: Mgl) => {
  const language = i18n.locale.value === 'zh-CN' ? 'zh' : 'en'
  const layers = ['City labels', 'Road labels', 'Station labels', 'Airport labels', 'Continent labels', 'Country labels']

  for (const layer of layers) {
    map.setLayoutProperty(layer, 'text-field', [
        'get',
        `name:${language}`
    ]);
  }
}

function initMap(event: any) {
  map.value = event.map;
  if (map.value) changeMapLanguage(map.value as any)
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
        const newRoute = await routeStore.addRoute({
          points: [locator.presentLocation],
          name: t("trackerView.nameNewRoute"),
        });
        openDrawerTooltip();
        routeStore.currentRouteId = newRoute.id;
      } else {
        await routeStore.addPointToRoute(
          routeStore.currentRouteId,
          locator.presentLocation
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

async function savePath() {
  if (__TAURI_ENVIRONMENT__) {
    const path = await tauriFileSaveDialog("tracked-path-export", ["json"]);
    if (path) tauriCreateTextFile(path, JSON.stringify(geojsonSource.value));
  } else {
    saveString(
      JSON.stringify(geojsonSource.value),
      "application/json",
      "tracked-path-export"
    );
  }
}

let loadTextFileDialogCallback = ref<(contents: string[]) => Promise<void>>(
  async (_: string[]) => {}
);

function loadFromText() {
  return new Promise<string[]>(async (resolve, reject) => {
    if (!__TAURI_ENVIRONMENT__) {
      loadTextFileDialogCallback.value = async (contents: string[]) => {
        if (contents.length === 0) {
          reject(new Error("No file selected"));
        } else {
          resolve(contents);
        }
      };

      uploadModelOpened.value = true;
    } else {
      const filePaths = await tauriFileOpenDialog(
        false,
        "tracked-path-export",
        ["txt", "json"]
      );
      if (!filePaths) return;
      const contents: string[] = [];
      for (const filePath of filePaths) {
        contents.push(await tauriReadTextFile(filePath));
      }
      resolve(contents);
    }
  });
}

function loadTrackFromFile() {
  loadFromText()
    .then((contents) => {
      const points = JSON.parse(
        contents[0]
      ).features[0].geometry.coordinates.map((coord: number[]) => ({
        latitude: coord[1],
        longitude: coord[0],
      }));

      routeStore
        .addRoute({ points, name: t("trackerView.nameNewlyImportedRoute") })
        .then(openDrawerTooltip);
    })
    .catch((error) => {
      message.error(error);
    });
}

const routeDrawerWidth = ref(0);
const isRouteDrawerOpen = ref(false);
const toggleRouteDrawer = () => {
  if (isRouteDrawerOpen.value) {
    isRouteDrawerOpen.value = false;
    map.value?.easeTo({ padding: { left: 0 }, duration: 500 });
    return;
  }
  isRouteDrawerOpen.value = true;
  map.value?.easeTo({
    padding: { left: routeDrawerWidth.value },
    duration: 500,
  });
};

const drawerTooltipOpened = ref(false);
const openDrawerTooltip = () => {
  if (drawerTooltipOpened.value) return;
  drawerTooltipOpened.value = true;
  setTimeout(() => {
    drawerTooltipOpened.value = false;
  }, 3000);
};

const initialLocateError = ref("");

const locationReady = ref<boolean>(false);
onMounted(async () => {
  try {
    location.value = await locator.refresh()!;
      if (!locator.usingGPS) message.warning(t('trackerView.gpsWarning'), { duration: 5000})
  } catch (err) {
    initialLocateError.value = (err as any).message ?? String(err);
  }
  locationReady.value = true;
  await storeInit();
  await routeStore.init();

  draw.value?.start();
});
</script>

<!-- TODO: add recover tailwindcss style-->
<template>
  <div style="width: 100%; height: 100%; position: relative; overflow: hidden">
    <n-card class="map-layout" content-style="padding: 0;">
      <transition name="map-load">
        <div
          v-if="locationReady && !initialLocateError"
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
              position="top-left"
              :track-user-location="true"
              v-if="locator.usingGPS"
            />
            <mgl-fullscreen-control position="top-left" />
            <mgl-scale-control position="bottom-left" />
            <mgl-custom-control position="top-right">
              <button
                v-for="item in drawerModes"
                :key="item.name"
                :class="[
                  '!flex justify-center items-center',
                  item.mode.mode === activeDrawMethod
                    ? '!bg-blue-200 rounded-sm transition-colors'
                    : '',
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
                <icon :size="20">
                  <component
                    :is="item.icon"
                    class="stroke-stone-800 text-stone-800"
                  />
                </icon>
              </button>
            </mgl-custom-control>
            <mgl-custom-control position="bottom-left">
              <n-popover trigger="manual" :show="drawerTooltipOpened">
                <template #trigger>
                  <button
                    :class="'!flex justify-center items-center transition-all hover:rounded-sm stroke-sky-800 fill-sky-700 text-sky-800'"
                    @click="toggleRouteDrawer"
                  >
                    <icon :size="24"><route /></icon>
                  </button>
                </template>
                <span>{{ t('trackerView.uiRouteCheckoutTip') }}</span>
              </n-popover>
            </mgl-custom-control>
            <mgl-custom-control position="top-right">
              <button
                :class="[
                  '!flex justify-center items-center transition-all hover:rounded-sm',
                  pathRecording
                    ? 'hover:!bg-red-700 hover:stroke-white hover:text-white stroke-red-700 fill-red-600 text-red-700'
                    : 'stroke-sky-800 fill-sky-700 text-sky-800',
                ]"
                :title="pathRecording ? t('trackerView.uiRecordingStatus.on') : t('trackerView.uiRecordingStatus.off')"
                @click="changeRecordState"
              >
                <icon :size="20">
                  <component
                    :is="pathRecording ? Square : PlayerRecord"
                    :size="pathRecording ? 16 : 20"
                    class="stroke-inherit text-inherit"
                  />
                </icon>
              </button>
              <button
                v-if="path.length > 0 && !pathRecording"
                class="stroke-red-700 text-red-700 hover:!bg-red-700 hover:stroke-white hover:text-white hover:rounded-sm transition-all !flex justify-center items-center"
                @click="
                  routeStore.currentRouteId &&
                    routeStore.updateRoute(routeStore.currentRouteId, {
                      points: [],
                    })
                "
              >
                <icon :size="20">
                  <Backspace
                    class="stroke-inherit text-inherit"
                    style="transform: translateX(-1.3px)"
                    size="20"
                  />
                </icon>
              </button>
              <button
                v-if="path.length > 0 && !pathRecording"
                class="!flex justify-center items-center"
                @click="savePath"
              >
                <icon :size="20">
                  <DeviceFloppy
                    class="stroke-stone-800 text-stone-800"
                    size="20"
                  />
                </icon>
              </button>
              <button
                v-if="path.length === 0 && !pathRecording"
                class="!flex justify-center items-center"
                @click="loadTrackFromFile"
              >
                <icon :size="20">
                  <Upload class="stroke-stone-800 text-stone-800" size="20" />
                </icon>
              </button>
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
          <n-spin v-if="!initialLocateError" size="large">
            <template #description>
              <n-text>{{ t('trackerView.locationLoading') }}</n-text>
            </template>
          </n-spin>
        <n-alert v-else :title="t('app.error')" type="error">
          <div>
            <br />
            <b>{{ t('app.error') }}: </b><br /><code>{{ initialLocateError }}</code>
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
    />
  </div>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>

<style scoped>
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
</style>
