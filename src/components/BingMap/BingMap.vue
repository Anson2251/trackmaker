<script lang="ts" setup>
/// <reference path="../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { NButton, NSwitch, NElement, useMessage } from "naive-ui";
import { Icon } from '@vicons/utils';
import { Add, Remove } from "@vicons/ionicons5";
import { ref, watch, onMounted } from "vue";
import {
    getGeoLocationPresent,
    startUpdatingService,
    addChangeListener,
    isUpdateServiceExist,
    isUpdateServiceUpdating
} from "@/utils/geolocation";

import bingMaps from "./map";
import bingMapsPlugin from "./plugins/base";

type PropsType = {
    plugin?: (typeof bingMapsPlugin)[],
    centre?: {
        latitude: number,
        longitude: number
    },
    viewCentre?: {
        latitude: number,
        longitude: number
    },
    mapType: string,
    zoom?: number,
    liteMode?: boolean,
    forceHidpi?: boolean,
    customizedTouchpadBehavior?: boolean,
    enableInertia?: boolean,
    showDashboard?: boolean
}

const props = defineProps<PropsType>()
const emit = defineEmits(["ready"]);

function setupMapNumber(): number {
    let id = (window as any).bingMapCount || 0;
    id += 1;
    (window as any).bingMapCount = id;
    return id;
}

let iconSize = ref(24);
let zoomValue = ref(10);

const bingMapID = ref("");
const container = ref<HTMLElement | null>(null);
let geoLocationKeepCentre = ref(true);
let map: bingMaps | null = null;

const message = useMessage();

function zoomIn() {
    if (map) {
        if (!map.zoomIn()) message.warning("Already at maximum zoom level", { duration: 1000 })
    }
}

function zoomOut() {
    if (map) {
        if (!map.zoomOut()) message.warning("Already at minimum zoom level", { duration: 1000 })
    }
}

bingMapID.value = `bing-map-${setupMapNumber()}`;
//const emit = defineEmits(["ready"])

startUpdatingService();

onMounted(async () => {
    let pauseZoomSync = false;
    let pausePositionSync = false;

    let viewCentre = props.viewCentre ? ref(new Microsoft.Maps.Location(props.viewCentre.latitude, props.viewCentre.longitude)) : ref(new Microsoft.Maps.Location(0, 0));
    let centre = props.centre ? ref(new Microsoft.Maps.Location(props.centre.latitude, props.centre.longitude)) : ref(new Microsoft.Maps.Location(0, 0));
    let type = props.mapType as unknown as (Microsoft.Maps.MapTypeId | undefined) || Microsoft.Maps.MapTypeId.road;

    watch(props, () => {
        centre.value.latitude = props.centre ? props.centre.latitude : 0;
        centre.value.longitude = props.centre ? props.centre.longitude : 0;

        zoomValue.value = props.zoom || 10;
        viewCentre.value.latitude = props.viewCentre ? props.viewCentre.latitude : 0;
        viewCentre.value.longitude = props.viewCentre ? props.viewCentre.longitude : 0;
        if ((props.mapType as unknown as (Microsoft.Maps.MapTypeId | undefined)) !== map?.map.getMapTypeId()) map?.map.setMapType(props.mapType! as unknown as Microsoft.Maps.MapTypeId)
    }, { deep: true })

    watch(geoLocationKeepCentre, () => {
        if (map && geoLocationKeepCentre) map.setView({ center: centre.value });
    })

    watch(zoomValue, () => {
        if (map && !pauseZoomSync) {
            (map as bingMaps).setZoom(Math.round(zoomValue.value));
        }
    })

    watch(viewCentre, () => {
        if (map && !pausePositionSync) {
            (map as bingMaps).map.setView({ center: viewCentre.value })
            pausePositionSync = true;
            setTimeout(() => pausePositionSync = false, 10)
        }
        if (geoLocationKeepCentre.value && map) {
            if (map.getViewCentre().latitude !== centre.value.latitude || map.getViewCentre().longitude !== centre.value.longitude) {
                map.gotoCentre()
            }
        }
    }, { deep: true })

    watch(centre, () => {
        map?.setCentre(centre.value, geoLocationKeepCentre.value);
    }, { deep: true })

    container.value = document.getElementById(bingMapID.value)!;
    const mapOptions = {
        centre: centre.value,
        type: type,
        zoom: zoomValue.value,
        credentials: "",
        customizedTouchpadBehavior: props.customizedTouchpadBehavior || true,
        enableInertia: props.enableInertia || false,
        forceHidpi: props.forceHidpi || false,
        showDashboard: props.showDashboard || false,
        liteMode: props.liteMode || false,
    }
    const mapPlugins = props.plugin || [];

    map = new bingMaps(container.value, mapOptions, mapPlugins as (typeof bingMapsPlugin)[]);
    //(window as any).map = map; // for debug use

    map.addEventHandler("viewchangeend", (newMap) => {
        pauseZoomSync = true;
        pausePositionSync = true;
        setTimeout(() => pauseZoomSync = false, 50)
        setTimeout(() => pausePositionSync = false, 50)

        zoomValue.value = newMap.getZoom()
        viewCentre.value.latitude = newMap.map.getCenter().latitude;
        viewCentre.value.longitude = newMap.map.getCenter().longitude;
    }, false);

    const initCentre = setInterval(() => {
        if (isUpdateServiceExist() && !isUpdateServiceUpdating()) {
            clearInterval(initCentre);
            const geoLocation = getGeoLocationPresent();
            centre.value = new Microsoft.Maps.Location(geoLocation.latitude, geoLocation.longitude);
            map?.setView({ center: centre.value })
        }
    });

    emit("ready", map);

    // geolocation update
    addChangeListener((newLocation) => {
        map?.setCentre(new Microsoft.Maps.Location(newLocation.latitude, newLocation.longitude), geoLocationKeepCentre.value);
        centre.value = new Microsoft.Maps.Location(newLocation.latitude, newLocation.longitude);
    })
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
            <n-switch v-model:value="geoLocationKeepCentre" size="small" />
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
</style>