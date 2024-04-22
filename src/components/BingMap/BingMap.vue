<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { getGeolocation } from "@/script/geoLocation";
import bingMaps from "./map";

function setupMapNumber(): number {
    let id = (window as any).bingMapCount || 0;
    id += 1;
    (window as any).bingMapCount = id;
    return id;
}

const bingMapID = ref(`bing-map-${setupMapNumber()}`)
const container = ref<HTMLElement | null>(null);

let latitude = ref(0);
let longitude = ref(0);
let location = ref(new Microsoft.Maps.Location(latitude.value, longitude.value));
let type = Microsoft.Maps.MapTypeId.road;
let zoom = ref(12);

let pauseZoomSync = false;
let pausePositionSync = false;

watch(zoom, () => {
    if (map && !pauseZoomSync) {
        map.setZoom(Math.round(zoom.value));
    }
})

watch(location, () => {
    if (map && !pausePositionSync) {
        map.getMap().setView({ center: location.value })
        pausePositionSync = true;
        setTimeout(() => pausePositionSync = false, 10)
    }
}, { deep: true })

let map: bingMaps | null = null;
onMounted(() => {
    container.value = document.getElementById(bingMapID.value)!;
    map = new bingMaps(container.value, new Microsoft.Maps.Location(latitude.value, longitude.value), type, zoom.value, "", true)

    map.addEventHandler("viewchangeend", (newMap) => {
        pauseZoomSync = true;
        pausePositionSync = true;
        setTimeout(() => pauseZoomSync = false, 50)
        setTimeout(() => pausePositionSync = false, 50)

        zoom.value = newMap.getZoom()
        location.value.latitude = newMap.getMap().getCenter().latitude;
        location.value.longitude = newMap.getMap().getCenter().longitude;
    }, false)
    getGeolocation()
        .then((l) => {
            latitude.value = l.latitude;
            longitude.value = l.longitude;
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            if (map) map.setCentre(new Microsoft.Maps.Location(latitude.value, longitude.value))
        })
});


</script>

<template>
    <div :id="bingMapID" class="bing-map-container">
    </div>
</template>

<style scoped>
.bing-map-container {
    width: 100%;
    height: 100%;
}
</style>