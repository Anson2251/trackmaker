<script lang="ts" setup>
import { ref, computed } from "vue";

interface Props {
    bearing: number
    size?: number
}
const props = defineProps<Props>();

const rotationStyle = computed(() => {
    return `transform: rotate(${props.bearing}deg)`;
});

const sizeStyle = computed(() => {
    if(props.size) return `--compass-size: ${props.size}px`;
    else return "";
})

const orientationTextList = ["N", "W", "S", "E"];

const orientationText = computed(() => {
    const deg = props.bearing > 0 ? props.bearing : 360 + props.bearing;
    return orientationTextList[Math.round((deg % 360) / 90) % 4];
})
</script>

<template>
    <div class="map-compass" :style="sizeStyle">
        <div class="compass-panel" :style="rotationStyle">
            <div class="pin north-pin"></div>
            <div class="pin east-pin"></div>
            <div class="pin south-pin"></div>
            <div class="pin west-pin"></div>
        </div>

        <span class="compass-orientation-text">
            {{ orientationText }}
        </span>
    </div>
</template>

<style scoped>
:root {
  --primary-color: inherit;
  --n-color: inherit;
  --border-color: inherit;
}

.map-compass {
    --compass-size: 32px;
    --margin: 0px;
    --primary-pin-size: calc(var(--compass-size) / 6);
    --primary-pin-embed: calc(var(--primary-pin-size) / 2);
    --secondary-pin-size: calc(var(--compass-size) / 8);
    --secondary-pin-embed: calc(var(--secondary-pin-size) / 2);
    --text-height: calc(var(--compass-size) / 3);

    --secondary-color: rgba(128, 128, 128, 0.3);

    position: relative;
    width: var(--compass-size);
    height: var(--compass-size);
    border-radius: 50%;

    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

.compass-panel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background-color: var(--modal-color);
    border: 2px solid var(--border-color);
    border-radius: 50%;

    overflow: hidden;
    transform-origin: 50% 50%; 

    box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.1), inset 0 0 4px 0px rgba(0, 0, 0, 0.4);
}

.north-pin {
    border-radius: 50%;
    position: absolute;
    width: var(--primary-pin-size);
    height: var(--primary-pin-size);

    top: var(--margin);
    left: calc(50% - calc(var(--primary-pin-size) / 2));
    background-color: var(--primary-color);

    transform: translateY(calc(0px - var(--primary-pin-embed)));
}

.east-pin {
    border-radius: 50%;
    position: absolute;
    width: var(--secondary-pin-size);
    height: var(--secondary-pin-size);

    
    top: calc(50% - calc(var(--secondary-pin-size) / 2));
    right: var(--margin);
    background-color: var(--secondary-color);

    transform: translateX(var(--secondary-pin-embed));
}

.south-pin {
    border-radius: 50%;
    position: absolute;
    width: var(--secondary-pin-size);
    height: var(--secondary-pin-size);

    bottom: var(--margin);
    left: calc(50% - calc(var(--secondary-pin-size) / 2));
    background-color: var(--secondary-color);

    transform: translateY(var(--secondary-pin-embed));
}

.west-pin {
    border-radius: 50%;
    position: absolute;
    width: var(--secondary-pin-size);
    height: var(--secondary-pin-size);
    
    top: calc(50% - calc(var(--secondary-pin-size) / 2));
    left: var(--margin);
    background-color: var(--secondary-color);

    transform: translateX(calc(0px - var(--secondary-pin-embed)));
}

.compass-orientation-text {
    position: absolute;
    height: var(--text-height);
    width: 100%;
    top: calc(50% - calc(var(--text-height) / 2));

    font-size: var(--text-height);
    line-height: var(--text-height);
    text-align: center;
    color: var(--text-color);
}
</style>