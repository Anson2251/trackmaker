<script setup lang="ts">
import { NList, NListItem, NIcon, NButton } from 'naive-ui';

import { ShapesOutline, RemoveCircleOutline } from '@vicons/ionicons5'
import { Route } from '@vicons/tabler'

import CartoSketch from '@/utils/cartosketch';

const props = defineProps({
    list: {
        type: Array<CartoSketch.CartoSketchStates>,
        default: () => []
    }
})

const emit = defineEmits(['select', 'remove'])

function select(id: string) {
    emit('select', id)
}

function remove(id: string) {
    const confirmed = confirm(`Are you sure to delete this CartoSketch?\nBoth Route and Drafts will be deleted`);
    if (confirmed) emit('remove', id);
}

</script>

<template>
    <div class="container">
        <n-list class="select-listview" hoverable>
            <n-list-item v-for="sketch in props.list" :title="sketch.name" :key="sketch.id" @click="select(sketch.id)">
                <template #prefix>
                    <n-icon sizse="24">
                        <Route />
                    </n-icon>
                </template>
                <template #suffix>
                    <n-icon size="24" v-if="sketch.hasDrafts">
                        <ShapesOutline />
                    </n-icon>
                    <n-button quaternary circle @click.stop="remove(sketch.id)">
                        <template #icon>
                            <n-icon>
                                <RemoveCircleOutline />
                            </n-icon>
                        </template>
                    </n-button>
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
