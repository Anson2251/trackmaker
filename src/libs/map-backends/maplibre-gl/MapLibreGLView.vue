<script lang="ts" setup>
import { NButton, NSwitch, NElement, NSlider, NPopover, useMessage } from "naive-ui";
import { Icon } from '@vicons/utils';
import { Rotate360, ZoomIn, ZoomOut } from "@vicons/tabler";
import { ref, onMounted } from "vue";

import MapCompass from "@/components/MapCompass.vue";
import MapManager from "@/components/MapView/map-manager";
import type { MapPluginConstructor } from "@/libs/map-backends/plugin";
import { MapLibreGLBackend } from "@/libs/map-backends/maplibre-gl/maplibre-gl-backend";

let iconSize = ref(24);
const message = useMessage();

const messageEmitter = {
    info: (msg: string, duration: number) => message.info(msg, { duration: duration }),
    warning: (msg: string, duration: number) => message.warning(msg, { duration: duration }),
    error: (msg: string, duration: number) => message.error(msg, { duration: duration }),
};

const props = defineProps<{
    plugin?: MapPluginConstructor<MapLibreGLBackend>[],
    centre?: {
        latitude: number,
        longitude: number
    },
    viewCentre?: {
        latitude: number,
        longitude: number
    },
    tracking?: boolean,
    mapType: string,
    zoom?: number,
}>();
const emit = defineEmits(["ready", "update:zoom", "update:centre", "update:viewCentre", "update:mapType"]);

const manager = (new MapManager(props, emit, messageEmitter, "maplibregl"));
onMounted(() => {
    manager.mount();
    manager.trackingMode.value = !!props.tracking;
});

</script>

<template>
    <n-element class="container">
        <div :id="manager.id" class="maplibregl-map-container">
        </div>
        <div class="nav-toolbox">
            <n-button strong secondary circle type="primary" @click="manager.zoom.value += 1">
                <Icon :size="iconSize - 2">
                    <ZoomIn />
                </Icon>
            </n-button>
            <n-button strong secondary circle type="primary" @click="manager.zoom.value -= 1">
                <Icon :size="iconSize - 2">
                    <ZoomOut />
                </Icon>
            </n-button>
            <n-popover placement="left" trigger="hover" class="mapview-tooltip-popover-input">
                <!--bearing-->
                <template #trigger>
                    <n-button strong secondary circle type="primary">
                        <Icon :size="iconSize">
                            <div style="transform: rotateX(200deg);">
                                <Rotate360 style="transform: rotate(225deg);" />
                            </div>
                        </Icon>
                    </n-button>
                </template>
                <div><n-slider vertical v-model:value="manager.bearing.value" :min="0" :max="360" style="height: 16em;"
                        :tooltip="true" placement="left" :format-tooltip="(value: number) => `${value}°`" /></div>
            </n-popover>
            <n-popover placement="left" trigger="hover" class="mapview-tooltip-popover-input">
                <!--pitch-->
                <template #trigger>
                    <n-button strong secondary circle type="primary">
                        <!--bearing-->
                        <Icon :size="iconSize">
                            <div style="transform: rotateY(20deg);">
                                <Rotate360 style="transform: rotate(-45deg);" />
                            </div>
                        </Icon>
                    </n-button>
                </template>
                <div><n-slider v-model:value="manager.pitch.value" :min="0" :max="60" vertical style="height: 8em;" :tooltip="true"
                        placement="left" :format-tooltip="(value: number) => `${value}°`" /></div>
            </n-popover>
            <n-switch v-model:value="manager.trackingMode.value" size="small" />

        </div>

        <div class="compass-container">
            <MapCompass v-model:bearing="manager.bearing.value" :size="iconSize * 2" :pitch="manager.pitch.value" />
        </div>
    </n-element>
</template>

<style>
.mapview-tooltip-popover-input .v-binder-follower-content>.n-slider-handle-indicator {
    text-wrap: nowrap;
}
</style>

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

.maplibregl-map-container {
    width: calc(100% - 2px);
    height: calc(100% - 2px);

    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
}

.maplibregl-map-container * {
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

.nav-toolbox>* {
    margin: 2px;
}

.compass-container {
    position: absolute;
    right: 8px;
    bottom: 48px;
}
</style>