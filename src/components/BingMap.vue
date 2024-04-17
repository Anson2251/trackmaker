<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getGeolocation } from "@/script/geoLocation";
import bingmaps from "@/script/map";
import { bingmaps_key } from "@/script/credentials";

function setupMapNumber(): number{
    let id = (window as any).bingMapCount || 0;
    id += 1;
    (window as any).bingMapCount = id;
    return id;
}

const bingMapID = ref(`bing-map-${setupMapNumber()}`)
const container = ref<HTMLElement | null>(null);

let map;

onMounted(() => {
    container.value = document.getElementById(bingMapID.value);
    if (container.value) {
        getGeolocation()
            .then((location) => {
                map = bingmaps.getMap(container.value!, bingmaps_key, location, Microsoft.Maps.MapTypeId.road);
            })
    }
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