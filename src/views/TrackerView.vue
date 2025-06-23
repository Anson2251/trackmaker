<script lang="ts" setup>
import "tailwindcss";
import {
  ref,
  onMounted,
  computed,
  inject,
  type Component,
  useTemplateRef,
} from "vue";
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
  NList,
  NListItem,
  NButton,
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
import { Map } from "maplibre-gl";
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
import {
  type GeographicPointType,
  type GeolocationBackend,
} from "@/libs/geolocation/types";
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

const message = useMessage();
const theme = useThemeVars();
const locator = inject("geolocation") as UpdateService;
const zoom = ref(7);
const mapTilerKey = __MAPTILER_KEY__;
const styleUrl = `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapTilerKey}`;

const location = ref<GeographicPointType>({ latitude: 0, longitude: 0 });
const map = ref<Map | null>(null);
const draw = ref<TerraDraw | null>(null);
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

const routeDrawer = useTemplateRef("route-drawer");

const geojsonSource = computed(() => ({
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
}));

type DrawModes = {
  mode: TerraDrawBaseDrawMode<any>;
  name: string;
  icon: Component;
};

const drawerModes: DrawModes[] = [
  {
    mode: new TerraDrawRectangleMode(),
    name: "TerraDraw: Rectangle",
    icon: Vector,
  },
  {
    mode: new TerraDrawPointMode(),
    name: "TerraDraw: Point",
    icon: MapPin,
  },
  {
    mode: new TerraDrawPolygonMode(),
    name: "TerraDraw: Polygon",
    icon: Polygon,
  },
  {
    mode: new TerraDrawCircleMode(),
    name: "TerraDraw: Circle",
    icon: Circle,
  },
  {
    mode: new TerraDrawLineStringMode(),
    name: "TerraDraw: Line String",
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
    name: "TerraDraw: Select",
    icon: HandFinger,
  },
  {
    mode: new TerraDrawFreehandMode(),
    name: "TerraDraw: Free Hand",
    icon: HandMove,
  },
];

const routeDrawerWidth = computed(() => routeDrawer.value?.clientWidth);

function initMap(event: any) {
  map.value = event.map;
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
        });
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

      routeStore.addRoute({ points });
    })
    .catch((error) => {
      message.error(error);
    });
}

const isRouteDrawerOpen = ref(false);
const toggleRouteDrawer = () => {
  console.log(isRouteDrawerOpen.value);
  if (isRouteDrawerOpen.value) {
    isRouteDrawerOpen.value = false;
    map.value?.easeTo({ padding: { left: 0 }, duration: 1000 });
    return;
  }
  isRouteDrawerOpen.value = true;
  map.value?.easeTo({
    padding: { left: routeDrawerWidth.value || 500 },
    duration: 1000,
  });
};

const initialLocateError = ref("");

const locationReady = ref<boolean>(false);
onMounted(async () => {
  try {
    location.value = await locator.refresh()!;
  } catch (err) {
    initialLocateError.value = (err as any).message ?? String(err);
  }
  locationReady.value = true;
  await storeInit();
  await routeStore.init();

  draw.value?.start();
});

const drawerCssWidth = computed(
  () => `${0 - (routeDrawerWidth.value ?? 500)}px`
);
</script>

<!-- TODO: add recover tailwindcss style-->
<template>
  <div style="width: 100%; height: 100%; position: relative; overflow: hidden;">
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
              <button
                :class="'!flex justify-center items-center transition-all hover:rounded-sm stroke-sky-800 fill-sky-700 text-sky-800'"
                @click="toggleRouteDrawer"
              >
                <icon :size="24"><route /></icon>
              </button>
            </mgl-custom-control>
            <mgl-custom-control position="top-right">
              <button
                :class="[
                  '!flex justify-center items-center transition-all hover:rounded-sm',
                  pathRecording
                    ? 'hover:!bg-red-700 hover:stroke-white hover:text-white stroke-red-700 fill-red-600 text-red-700'
                    : 'stroke-sky-800 fill-sky-700 text-sky-800',
                ]"
                :title="pathRecording ? 'Recording…' : 'Track Recorder'"
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
                    routeStore.deleteRoute(routeStore.currentRouteId)
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
                  'line-dasharray': [5, 2],
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
              <n-text> Getting your location, please wait a moment... </n-text>
            </template>
          </n-spin>
          <n-alert v-else title="Error getting location" type="error">
            Fail to locate your device. Please try again later
            <div>
              <br />
              <b>Error Message: </b><br /><code>{{ initialLocateError }}</code>
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

    <transition name="slide-fade">
      <div class="route-drawer" ref="route-drawer" v-if="isRouteDrawerOpen">
        <div class="p-4" style="height: 100%;">
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-content: center;
              height: 4em;
            "
          >
            <p class="text-lg font-bold mb-4">Routes</p>
            <n-button
              @click="
                async () => {
                  try {
                    const route = await routeStore.addRoute({ points: [] });
                    routeStore.currentRouteId = route.id;
                  } catch (e) {
                    console.log(e);
                  }
                }
              "
              class="mb-4 p-2 bg-blue-500 text-white rounded"
            >
              New Route
            </n-button>
          </div>
          <div class="route-list">
            <div
              v-for="route in routeStore.routes"
              :key="route.id"
              @click="
                () => {
                  routeStore.currentRouteId = route.id;
                }
              "
              :class="[
                'route-list-item',
                ...(route.id === routeStore.currentRouteId ? ['active'] : []),
              ]"
            >
              <div>Route {{ route.id.slice(0, 6) }}</div>
              <div>{{ route.points.length }} points</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="css">
@import "maplibre-gl/dist/maplibre-gl.css";

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

.route-drawer {
  position: absolute;
  padding-left: 48px;
  padding-bottom: 32px;
  box-sizing: border-box;

  bottom: 0;
  left: 0px;

  top: 0;
  width: 30%;
  min-width: 20em;
  max-width: 40em;

  transition: right, left 1s linear;

  background-color: v-bind("theme.modalColor");
  box-shadow: 10px 4px 15px 3px rgba(0,0,0,0.1),2px 2px 6px 0px rgba(0,0,0,0.2);
  border-radius: v-bind("theme.borderRadius");
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1s;
}

.slide-fade-enter-from {
  transform: translateX(v-bind("drawerCssWidth"));
  /* opacity: 0; */
}

.slide-fade-leave-to {
  transform: translateX(v-bind("drawerCssWidth"));
  /* opacity: 0; */
}

.route-list {
  max-height: calc(100% - 4em);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.route-list-item {
  width: 100%;
  height: fit-content;
  padding: 8px 12px;
  transition: background-color 0.1s ease-in-out;
}

.route-list-item:hover:not(.active) {
  background-color: v-bind("theme.hoverColor");
}

.route-list-item.active {
  background-color: v-bind("theme.actionColor");
}
</style>
