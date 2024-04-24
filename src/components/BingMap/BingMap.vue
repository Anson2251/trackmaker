<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script lang="ts">
import { NButton, NSwitch } from "naive-ui";
import { NConfigProvider, darkTheme } from "naive-ui";
import { Icon } from '@vicons/utils';
import { Add, Remove } from "@vicons/ionicons5";
import { ref, watch, onMounted } from "vue";
import { 
    getGeoLocationPresent, 
    startUpdatingService, 
    addChangeListener, 
    isUpdateServiceExist, 
    isUpdateServiceUpdating 
} from "@/script/geoLocation";
import bingMaps from "./map";
import bingMapsPushPins from "./plugins/pushPin";
import { bingMapsDrawing } from "./plugins/drawingMap";

function setupMapNumber(): number {
    let id = (window as any).bingMapCount || 0;
    id += 1;
    (window as any).bingMapCount = id;
    return id;
}

let iconSize = ref(24);
let zoom = ref(10);

const bingMapID = ref(`bing-map-${setupMapNumber()}`);
const container = ref<HTMLElement | null>(null);
let geoLocationKeepCentre = ref(true);
let map: bingMaps | null = null;

function zoomIn(){
    if(map) map.zoomIn();
}

function zoomOut(){
    if(map) map.zoomOut();
}

export default {
    components: {
        Add,
        Remove,
        Icon,
        NButton,
        NSwitch,
        NConfigProvider,
    },
    setup() {
        startUpdatingService();

        onMounted(async () => {
            let pauseZoomSync = false;
            let pausePositionSync = false;

            let viewCentre = ref(new Microsoft.Maps.Location(0, 0));
            let centre = ref(new Microsoft.Maps.Location(0, 0));
            let type = Microsoft.Maps.MapTypeId.road;

            watch(geoLocationKeepCentre, () => {
                if(map && geoLocationKeepCentre) map.setView({ center: centre.value });
            })

            watch(zoom, () => {
                if (map && !pauseZoomSync) {
                    (map as bingMaps).setZoom(Math.round(zoom.value));
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
                if (map) map.setCentre(centre.value, geoLocationKeepCentre.value);
            }, { deep: true })

            container.value = document.getElementById(bingMapID.value)!;
            const mapOptions = {
                centre: centre.value,
                type: type,
                zoom: zoom.value,
                credentials: "",
                customizedTouchpadBehavior: true,
                enableInertia: true,
                showDashboard: false,
                liteMode: false,
            }
            const mapPlugins = [bingMapsPushPins, bingMapsDrawing];
            map = new bingMaps(container.value, mapOptions, mapPlugins);
            (window as any).map = map;

            map.addEventHandler("viewchangeend", (newMap) => {
                pauseZoomSync = true;
                pausePositionSync = true;
                setTimeout(() => pauseZoomSync = false, 50)
                setTimeout(() => pausePositionSync = false, 50)

                zoom.value = newMap.getZoom()
                viewCentre.value.latitude = newMap.map.getCenter().latitude;
                viewCentre.value.longitude = newMap.map.getCenter().longitude;
            }, false)

            const initCentre = setInterval(() => {
                if (isUpdateServiceExist() && !isUpdateServiceUpdating()) {
                    const geoLocation = getGeoLocationPresent();
                    centre.value = new Microsoft.Maps.Location(geoLocation.latitude, geoLocation.longitude);
                    clearInterval(initCentre);
                }
            });

            addChangeListener((newLocation) => {
                centre.value = new Microsoft.Maps.Location(newLocation.latitude, newLocation.longitude);
            })
        });

        return {
            bingMapID,
            iconSize,
            darkTheme,

            zoom,
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
        <n-config-provider :theme="darkTheme">
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
                <n-switch v-model:value="geoLocationKeepCentre" />
            </div>
        </n-config-provider>
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