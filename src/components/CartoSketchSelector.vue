<script setup lang="ts">
import { NList, NListItem, NIcon } from 'naive-ui';

import { ShapesOutline } from '@vicons/ionicons5'
import { Route } from '@vicons/tabler'

import CartoSketch from '@/utils/cartosketch';

const props = defineProps({
    list: {
        type: Array<CartoSketch.CartoSketchStates>,
        default: () => []
    }
})

</script>

<template>
    <div class="container">
        <n-list class="select-listview">
            <n-list-item v-for="sketch in props.list" :title="sketch.name" :key="sketch.id">
                <template #suffix>
                    <n-icon size="24" v-if="sketch.hasDrafts">
                        <ShapesOutline />
                    </n-icon>
                    <n-icon sizse="24">
                        <Route />
                    </n-icon>
                </template>
                {{ sketch.name }}
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
