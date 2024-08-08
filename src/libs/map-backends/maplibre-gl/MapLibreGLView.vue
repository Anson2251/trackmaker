<script lang="ts" setup>
import { NButton, NSwitch, NElement, NSlider, NPopover, useMessage } from "naive-ui";
import { Icon } from '@vicons/utils';
import { Add, Remove } from "@vicons/ionicons5";
import { Rotate360 } from "@vicons/tabler";
import { ref, watch, onMounted } from "vue";

import MapCompass from "@/components/MapCompass.vue";

import { cloneDeep, inRange } from "lodash-es";

import * as GeoLocation from "@/utils/geolocation";
import { DeviceOrientationService } from "@/utils/device-orientation-service";
import { MapLibreGLBackend, allocateMapLibreGLMapID, type MapLibreGLBackendOptionTypes, type MapLibreGLBackendType } from "@/libs/map-backends/maplibre-gl/maplibre-gl-backend";
import type { MapPluginConstructor } from "@/libs/map-backends/plugin";
import { mapTilerKey } from "@/configs";
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
const pitch = ref(0);
const bearing = ref(0);
const bearingTweakStickDeg = 10;

const maplibreglID = ref(`maplibregl-${allocateMapLibreGLMapID()}`);
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

function setupMaplibreGLMaps(props: PropsType) {
    if (!container.value) throw new Error(`Container ${maplibreglID.value} is not ready.`);

    const mapOptions: MapLibreGLBackendOptionTypes = {
        centre: (props.centre ? props.centre : { latitude: 0, longitude: 0 }),
        zoom: (props.zoom || 10),
        type: props.mapType,
        supportedMapTypes: ["street", "satellite"],
        credentials: mapTilerKey,
        maxZoom: 22,
        minZoom: 1,
    };
    const mapPlugins = props.plugin || [];

    return new MapLibreGLBackend(container.value, mapOptions, mapPlugins);
}

function trackingModeEnterLeave() {
    if (!map) return;
    geoLocationKeepCentre.value ? map?.freezeViewCentre() : map?.unfreezeViewCentre();
    if (geoLocationKeepCentre.value) message.info("You're in tracking mode. The map will only follow your geographical location.", { duration: 3000 });
}

watch(pitch, () => {
    map?.setPitch(pitch.value, false);
});
watch(bearing, () => {
    const sticksDeg = Math.round(bearing.value / 90) * 90;
    if (inRange(Math.abs(sticksDeg - bearing.value), 0, bearingTweakStickDeg)) bearing.value = sticksDeg; // no need to tweak
    map?.setBearing(bearing.value, false);
});

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
        if (!geoLocationKeepCentre.value) return;

        map?.setCentre(newLocation, geoLocationKeepCentre.value);
        map?.gotoCentre();
        emit("update:centre", { ...newLocation });
    });
    GeoLocation.UpdateService.worker.addHandler("error", (_: any, error: any) => {
        message.error(`Fail to show your location, reason: "${error.message}".`, { duration: 3000 }); 
    }, true);
    GeoLocation.UpdateService.start();

    DeviceOrientationService.addHandler((deg) => {
        console.log("device orientation", deg);
        bearing.value = 360 - deg;
    });
    DeviceOrientationService.start();

    container.value = document.getElementById(maplibreglID.value)!;

    map = setupMaplibreGLMaps(props);
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
        <div :id="maplibreglID" class="maplibregl-map-container">
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
            <n-popover placement="left" trigger="hover" class="mapview-tooltip-popover-input">
                <!--bearing-->
                <template #trigger>
                    <n-button strong secondary circle type="primary">
                        <Icon :size="iconSize">
                            <div style="transform: rotateX(200deg);">
                                <Rotate360 style="transform: rotate(225deg);" />
                            </div>
                        </Icon>
                    </n-button>
                </template>
                <div><n-slider vertical v-model:value="bearing" :min="-180" :max="180" style="height: 16em;"
                        :tooltip="true" placement="left" :format-tooltip="(value: number) => `${value}°`" /></div>
            </n-popover>
            <n-popover placement="left" trigger="hover" class="mapview-tooltip-popover-input">
                <!--pitch-->
                <template #trigger>
                    <n-button strong secondary circle type="primary">
                        <!--bearing-->
                        <Icon :size="iconSize">
                            <div style="transform: rotateY(20deg);">
                                <Rotate360 style="transform: rotate(-45deg);" />
                            </div>
                        </Icon>
                    </n-button>
                </template>
                <div><n-slider v-model:value="pitch" :min="0" :max="60" vertical style="height: 8em;" :tooltip="true"
                        placement="left" :format-tooltip="(value: number) => `${value}°`" /></div>
            </n-popover>
            <n-switch v-model:value="geoLocationKeepCentre" @click="trackingModeEnterLeave" size="small" />
            
        </div>

        <div class="compass-container">
            <MapCompass :bearing="bearing" :size="iconSize * 2"/>
        </div>
    </n-element>
</template>

<style>
.mapview-tooltip-popover-input .v-binder-follower-content>.n-slider-handle-indicator {
    text-wrap: nowrap;
}
</style>

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

.maplibregl-map-container {
    width: calc(100% - 2px);
    height: calc(100% - 2px);

    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
}

.maplibregl-map-container * {
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

.compass-container {
    position: absolute;
    right: 8px;
    bottom: 48px;
}
</style>