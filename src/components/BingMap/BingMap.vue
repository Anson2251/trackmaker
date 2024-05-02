<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script lang="ts">
import { NButton, NSwitch } from "naive-ui";
import { Icon } from '@vicons/utils';
import { Add, Remove } from "@vicons/ionicons5";
import { ref, watch, onMounted } from "vue";
import {
    getGeoLocationPresent,
    startUpdatingService,
    addChangeListener,
    isUpdateServiceExist,
    isUpdateServiceUpdating
} from "@/utils/geoLocation";

import bingMaps from "./map";
import bingMapPlugin from "./plugins/base";

function setupMapNumber(): number {
    let id = (window as any).bingMapCount || 0;
    id += 1;
    (window as any).bingMapCount = id;
    return id;
}

let iconSize = ref(24);
let zoomValue = ref(10);

const bingMapID = ref(`bing-map-${setupMapNumber()}`);
const container = ref<HTMLElement | null>(null);
let geoLocationKeepCentre = ref(true);
let map: bingMaps | null = null;

function zoomIn() {
    if (map) map.zoomIn();
}

function zoomOut() {
    if (map) map.zoomOut();
}

export default {
    components: {
        Add,
        Remove,
        Icon,
        NButton,
        NSwitch,
    },
    props: {
        plugin: {
            type: Array<typeof bingMapPlugin>,
            default: () => []
        },
        centre: {
            type: Object,
            default: () => ({
                latitude: 0,
                longitude: 0
            })
        },
        viewCentre: {
            type: Object,
            default: () => ({
                latitude: 0,
                longitude: 0
            })
        },
        mapType: String,
        zoom: Number,
        liteMode: Boolean,
        customizedTouchpadBehavior: Boolean,
        enableInertia: Boolean,
        showDashboard: Boolean
    },
    emits: ["ready"],
    setup(props, { emit }) {
        //const emit = defineEmits(["ready"])

        startUpdatingService();

        onMounted(async () => {
            let pauseZoomSync = false;
            let pausePositionSync = false;

            let viewCentre = props.viewCentre ? ref(new Microsoft.Maps.Location(props.viewCentre.latitude, props.viewCentre.longitude)) : ref(new Microsoft.Maps.Location(0, 0));
            let centre = props.centre ? ref(new Microsoft.Maps.Location(props.centre.latitude, props.centre.longitude)) : ref(new Microsoft.Maps.Location(0, 0));
            let type = props.mapType as unknown as (Microsoft.Maps.MapTypeId | undefined) || Microsoft.Maps.MapTypeId.road;

            watch(props, () => {
                centre.value.latitude = props.centre.latitude;
                centre.value.longitude = props.centre.longitude;

                zoomValue.value = props.zoom || 10;
                viewCentre.value.latitude = props.viewCentre.latitude;
                viewCentre.value.longitude = props.viewCentre.longitude;
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
                showDashboard: props.showDashboard || false,
                liteMode: props.liteMode || false,
            }
            const mapPlugins = props.plugin || [];

            map = new bingMaps(container.value, mapOptions, mapPlugins);
            (window as any).map = map; // for debug use

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
                    const geoLocation = getGeoLocationPresent();
                    centre.value = new Microsoft.Maps.Location(geoLocation.latitude, geoLocation.longitude);
                    clearInterval(initCentre);
                }
            });

            emit("ready", map);

            // geolocation update
            addChangeListener((newLocation) => {
                map?.setCentre(new Microsoft.Maps.Location(newLocation.latitude, newLocation.longitude), geoLocationKeepCentre.value);
                centre.value = new Microsoft.Maps.Location(newLocation.latitude, newLocation.longitude);
            })
        });

        return {
            bingMapID,
            iconSize,
            
            zoomValue,
            geoLocationKeepCentre,
            zoomIn,
            zoomOut
        };
    }
}
</script>

<template>
    <div class="container">
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
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
}

.bing-map-container {
    width: 100%;
    height: 100%;

    border-radius: 8px;
}

.bing-map-container * {
    border-radius: 8px;
}

.nav-toolbox {
    position: absolute;
    top: 1em;
    right: 1em;
    padding: 4px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    background: var(--color-background);
}

.nav-toolbox .n-button {
    width: 3em;
    height: 3em;
    margin: 4px;
}

.nav-toolbox .n-switch {
    width: 2em;
    height: 1.5em;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 8px;
    margin-right: 8px;
}
</style>