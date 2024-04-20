<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { getGeolocation } from "@/script/geoLocation";
import bingmaps from "@/script/map";
import { bingMapsKey } from "@/script/credentials";

function setupMapNumber(): number {
    let id = (window as any).bingMapCount || 0;
    id += 1;
    (window as any).bingMapCount = id;
    return id;
}

const bingMapID = ref(`bing-map-${setupMapNumber()}`)
const container = ref<HTMLElement | null>(null);

let location = new Microsoft.Maps.Location(0, 0);
let type = Microsoft.Maps.MapTypeId.road;

let map: Microsoft.Maps.Map | null = null;
onMounted(() => {
    container.value = document.getElementById(bingMapID.value)!;
    map = bingmaps.getMap(container.value!, bingMapsKey, location, type)

    getGeolocation()
        .then((l) => {
            location.latitude = l.latitude;
            location.longitude = l.longitude;
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            if(map) map.setView({ center: location, zoom: 15 });
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