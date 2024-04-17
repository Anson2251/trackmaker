<script setup lang="ts">
/// <reference path="../../node_modules/@types/bingmaps/index.d.ts" />

import { ref, onMounted } from "vue";
import { getGeolocation } from "@/script/utils";

function setupMapNumber(): number{
    let id = (window as any).bingMapCount || 0;
    id += 1;
    (window as any).bingMapCount = id;
    return id;
}

const bingMapID = ref(`bing-map-${setupMapNumber()}`)
const container = ref<HTMLElement | null>(null);
const position = getGeolocation();
console.log(position)
const centre = new Microsoft.Maps.Location(position.latitude, position.longitude);

onMounted(() => {
    container.value = document.getElementById(bingMapID.value);
    if (container.value) {
        const map = new Microsoft.Maps.Map(container.value, {
            credentials: "",
            center: centre,
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 10
        });
        console.log("mounted", container.value);
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