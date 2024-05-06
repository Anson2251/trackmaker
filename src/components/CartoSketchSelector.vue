<script setup lang="ts">
import { ref } from 'vue';
import { NList, NListItem, NIcon } from 'naive-ui';
import CartoSketch from '@/utils/carto-sketch';

import { ShapesOutline } from '@vicons/ionicons5'
import { Route } from '@vicons/tabler'

const sketchList = ref<CartoSketch.CartoSketchStates[]>([])
CartoSketch.listCartoSketches().then((list) => {
    sketchList.value = list;
})
</script>

<template>
    <div class="container">
        <n-list class="select-listview">
            <n-list-item v-for="sketch in sketchList" :title="sketch.name" :key="sketch.id">
                <template #suffix>
                    <n-icon size="24" v-if="sketch.hasDrafts">
                        <ShapesOutline />
                    </n-icon>
                    <n-icon sizse="24">
                        <Route/>
                    </n-icon>
                </template>
            </n-list-item>
        </n-list>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}

.select-listview {
    width: 100%;
    height: 100%;
}
</style>
