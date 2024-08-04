<script lang="ts" setup>
import { NButton, NSwitch, NElement, useMessage } from "naive-ui";
import { Icon } from '@vicons/utils';
import { Add, Remove } from "@vicons/ionicons5";
import { ref, watch, onMounted } from "vue";
import { mapTilerKey } from "@/configs";
import { cloneDeep } from "lodash-es";

import * as GeoLocation from "@/utils/geolocation";
import { MapLibreGLBackend, allocateBingMapID, type MapLibreGLBackendOptionTypes, type MapLibreGLBackendType } from "@/libs/map-backends/maplibre-gl/maplibre-gl-backend";
import type { MapPluginConstructor } from "@/libs/map-backends/plugin";

type PropsType = {
    plugin?: MapPluginConstructor<MapLibreGLBackend>[], // TODO
    centre?: {
        latitude: number,
        longitude: number
    },
    viewCentre?: {
        latitude: number,
        longitude: number
    },
    tracking?: boolean,
    mapType: string,
    zoom?: number,
    liteMode?: boolean,
    forceHiDPI?: boolean,
    customizedTouchpadBehavior?: boolean,
    enableInertia?: boolean,
    showDashboard?: boolean
}

const props = defineProps<PropsType>();
const emit = defineEmits(["ready", "update:zoom", "update:centre", "update:viewCentre", "update:mapType"]);

let iconSize = ref(24);
const message = useMessage();

const bingMapID = ref(`maplibregl-${allocateBingMapID()}`);
const container = ref<HTMLElement | null>(null);
let geoLocationKeepCentre = ref(!!props.tracking);
let map: MapLibreGLBackend | undefined = undefined;

function zoomIn() {
    if (map) {
        if (!map.zoomIn()) message.warning("Already at maximum zoom level", { duration: 1000 });
    }
}

function zoomOut() {
    if (map) {
        if (!map.zoomOut()) message.warning("Already at minimum zoom level", { duration: 1000 });
    }
}

function setupBingMaps(props: PropsType) {
    if (!container.value) throw new Error(`Container ${bingMapID.value} is not ready.`);

    const mapOptions: MapLibreGLBackendOptionTypes = {
        centre: (props.centre ? props.centre : { latitude: 0, longitude: 0 }),
        zoom: (props.zoom || 10),
        type: "https://api.maptiler.com/maps/basic-v2/style.json",
        supportedMapTypes: ["https://api.maptiler.com/maps/basic-v2/style.json", "https://api.maptiler.com/maps/streets-v2/style.json"],
        credentials: mapTilerKey,
        // credentials: bingMapsKey,
    };
    // const mapPlugins = props.plugin || [];

    return new MapLibreGLBackend(container.value, mapOptions);
}

function trackingModeEnterLeave() {
    if (!map) return;
    geoLocationKeepCentre.value ? map?.freezeViewCentre() : map?.unfreezeViewCentre();
    if (geoLocationKeepCentre.value) message.info("You're in tracking mode. The map will only follow your geographical location.", { duration: 3000 });
}

let oldProps = cloneDeep(props);
watch(props, () => {
    if (!map) return;

    if (oldProps.centre && props.centre && oldProps.centre !== props.centre) {
        map.setCentre(props.centre || { latitude: 0, longitude: 0 }, geoLocationKeepCentre.value);
    }

    if (oldProps.zoom && props.zoom && oldProps.zoom !== props.zoom) {
        console.log("zoom changed", oldProps.zoom, props.zoom);
        map.setZoom(props.zoom || 10);
    }

    if (oldProps.viewCentre && props.viewCentre && oldProps.viewCentre !== props.viewCentre) {
        map.setCentre(props.viewCentre || { latitude: 0, longitude: 0 }, geoLocationKeepCentre.value);
    }

    // TODO
    // if (oldProps.mapType && props.mapType && oldProps.mapType !== props.mapType) {
    //     map.map.setMapType((props.mapType || Microsoft.Maps.MapTypeId.road) as any);
    // }

    oldProps = cloneDeep(props);
}, { deep: true });

onMounted(async () => {
    GeoLocation.UpdateService.addListener((newLocation) => {
        if (!props.tracking) return;

        map?.setCentre(newLocation, geoLocationKeepCentre.value);
        map?.gotoCentre();
        emit("update:centre", { ...newLocation });
    });
    GeoLocation.UpdateService.start();

    container.value = document.getElementById(bingMapID.value)!;

    map = setupBingMaps(props);
    map.addEventHandler("viewchangeend", (newMap: MapLibreGLBackendType) => {
        emit("update:zoom", newMap.getZoom());
        emit("update:viewCentre", { ...newMap.getCentre() });
    }, false);

    const initCentre = setInterval(() => {
        if (GeoLocation.UpdateService.isInitialised()) {
            clearInterval(initCentre);

            map?.setCentre(GeoLocation.UpdateService.getPresent(), true);
            map?.gotoCentre();
        }
    });

    emit("ready", map);
    trackingModeEnterLeave();
});
</script>

<template>
    <n-element class="container">
        <div :id="bingMapID" class="bing-map-container">
        </div>
        <div class="nav-toolbox">
            <n-button strong secondary circle type="primary" @click="() => zoomIn()">
                <Icon :size="iconSize">
                    <add />
                </Icon>
            </n-button>
            <n-button strong secondary circle type="primary" @click="() => zoomOut()">
                <Icon :size="iconSize">
                    <remove />
                </Icon>
            </n-button>
            <n-switch v-model:value="geoLocationKeepCentre" @click="trackingModeEnterLeave" size="small" />
        </div>
    </n-element>
</template>

<style scoped>
:root {
    --border-color: inherit;
    --modal-color: inherit;
    --border-radius: inherit;
}

.container {
    width: 100%;
    height: 100%;
    position: relative;
}

.bing-map-container {
    width: calc(100% - 2px);
    height: calc(100% - 2px);

    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
}

.bing-map-container * {
    border-radius: var(--border-radius);
}

.nav-toolbox {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 4px;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    background-color: var(--modal-color);
    border: 1px solid var(--border-color);
}

.nav-toolbox>* {
    margin: 2px;
}
</style>