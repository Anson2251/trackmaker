<script lang="ts" setup>
import { NButton, NSwitch, NElement, useMessage } from "naive-ui";
import { Icon } from '@vicons/utils';
import { Add, Remove } from "@vicons/ionicons5";
import { ref, reactive, onMounted } from "vue";

import { BingMapBackend } from "@/libs/map-backends/bing-maps/bing-map-backend";
import type { MapPluginConstructor } from "@/libs/map-backends/plugin";
import MapManager from "@/components/MapView/map-manager";

let iconSize = ref(24);
const message = useMessage();

const messageEmitter = {
    info: (msg: string, duration: number) => message.info(msg, { duration: duration }),
    warning: (msg: string, duration: number) => message.warning(msg, { duration: duration }),
    error: (msg: string, duration: number) => message.error(msg, { duration: duration }),
};

type PropsType = {
    plugin?: MapPluginConstructor<BingMapBackend>[],
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
    liteMode?: boolean,
    forceHiDPI?: boolean,
    customizedTouchpadBehavior?: boolean,
    enableInertia?: boolean,
    showDashboard?: boolean
};
const props = defineProps<PropsType>();

const emit = defineEmits(["ready", "update:zoom", "update:centre", "update:viewCentre", "update:mapType"]);

const manager = reactive(new MapManager(props, emit, messageEmitter, "bing"));
onMounted(() => {
    manager.mount();
    manager.trackingMode = !!props.tracking;
});
</script>

<template>
    <n-element class="container">
        <div :id="manager.id" class="bing-map-container">
        </div>
        <div class="nav-toolbox">
            <n-button strong secondary circle type="primary" @click="manager.zoom += 1">
                <Icon :size="iconSize">
                    <add />
                </Icon>
            </n-button>
            <n-button strong secondary circle type="primary" @click="manager.zoom -= 1">
                <Icon :size="iconSize">
                    <remove />
                </Icon>
            </n-button>
            <n-switch v-model:value="manager.trackingMode" size="small" />
        </div>
    </n-element>
</template>

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

.bing-map-container {
    width: calc(100% - 2px);
    height: calc(100% - 2px);

    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
}

.bing-map-container * {
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
</style>