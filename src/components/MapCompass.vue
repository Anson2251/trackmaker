<script lang="ts" setup>
import { computed, onMounted, watch } from "vue";
import { useThemeVars } from "naive-ui";
import { useImuCompass } from "@/composables/useImuCompass";

const theme = useThemeVars();

interface Props {
  pitch?: number;
  size?: number;
  tracking?: boolean;
}
const props = defineProps<Props>();
const bearing = defineModel<number>("bearing", {default: 0});

const emit = defineEmits<{
  toggleTracking: [];
}>();

// Initialize IMU compass
const {
  bearing: imuBearing,
  isTracking: imuIsTracking,
  isSupported: imuIsSupported,
  error: imuError,
  toggleTracking: toggleImuTracking
} = useImuCompass();

// Update bearing model when IMU bearing changes
watch(imuBearing, (newBearing) => {
  if (props.tracking) {
    bearing.value = newBearing;
  }
});

// Sync tracking state
watch(() => props.tracking, (isTracking) => {
  if (isTracking !== imuIsTracking.value) {
    if (isTracking) {
      toggleImuTracking();
    } else {
      toggleImuTracking();
    }
  }
});

// Handle toggle tracking event
const handleToggleTracking = () => {
  toggleImuTracking();
  emit('toggleTracking');
};

const rotationStyle = computed(() => `transform: rotate(${(-bearing.value) % 360}deg)`);

const pitchRotationStyle = computed(
  () =>
    `transform: rotateX(${Math.min(45, props.pitch ? props.pitch : 0)}deg); transition: all 0.3s ease;`,
);

// Computed properties for dynamic sizing
const compassSize = computed(() => props.size || 40);
const primaryPinSize = computed(() => compassSize.value / 6);
const primaryPinEmbed = computed(() => primaryPinSize.value / 2);
const secondaryPinSize = computed(() => compassSize.value / 8);
const secondaryPinEmbed = computed(() => secondaryPinSize.value / 2);
const textHeight = computed(() => compassSize.value / 3);

// Computed styles for pins and text
const northPinStyle = computed(() => ({
  width: `${primaryPinSize.value}px`,
  height: `${primaryPinSize.value}px`,
  top: '0px',
  left: `calc(50% - ${primaryPinSize.value / 2}px)`,
  transform: `translateY(-${primaryPinEmbed.value}px)`
}));

const eastPinStyle = computed(() => ({
  width: `${secondaryPinSize.value}px`,
  height: `${secondaryPinSize.value}px`,
  top: `calc(50% - ${secondaryPinSize.value / 2}px)`,
  right: '0px',
  transform: `translateX(${secondaryPinEmbed.value}px)`
}));

const southPinStyle = computed(() => ({
  width: `${secondaryPinSize.value}px`,
  height: `${secondaryPinSize.value}px`,
  bottom: '0px',
  left: `calc(50% - ${secondaryPinSize.value / 2}px)`,
  transform: `translateY(${secondaryPinEmbed.value}px)`
}));

const westPinStyle = computed(() => ({
  width: `${secondaryPinSize.value}px`,
  height: `${secondaryPinSize.value}px`,
  top: `calc(50% - ${secondaryPinSize.value / 2}px)`,
  left: '0px',
  transform: `translateX(-${secondaryPinEmbed.value}px)`
}));

const compassOrientationTextStyle = computed(() => ({
  height: `${textHeight.value}px`,
  width: '100%',
  top: `calc(50% - ${textHeight.value / 2}px)`,
  fontSize: `${textHeight.value}px`,
  lineHeight: `${textHeight.value}px`
}));

const mapCompassStyle = computed(() => ({
  width: `${compassSize.value}px`,
  height: `${compassSize.value}px`
}));

const orientationTextList = ["N", "E", "S", "W"];

const wheelOrientationAcceleration = 0.3;

const orientationText = computed(() => {
  const deg = bearing.value > 0 ? bearing.value : 360 + bearing.value;
  return orientationTextList[Math.round((deg % 360) / 90) % 4];
});

onMounted(() => {
  const compassContainer = document.querySelector(
    ".map-compass",
  ) as HTMLDivElement;
  compassContainer.onclick = () => {
    // Toggle tracking mode when compass is clicked
    handleToggleTracking();

    // If not tracking, reset bearing to 0 (north up)
    if (!props.tracking) {
      bearing.value = 0;
    }
  }
  if (compassContainer) {
    compassContainer.addEventListener("wheel", (event: WheelEvent) => {
      if (props.tracking) return;
      event.preventDefault();
      const newDeg =
        (bearing.value + event.deltaY * wheelOrientationAcceleration) %
        360;
      bearing.value = Math.round(newDeg >= 0 ? newDeg : 360 + newDeg);
    });
  }
});
</script>

<template>
  <div :style="pitchRotationStyle">
    <div
      class="map-compass"
      :style="mapCompassStyle"
      :class="{ 'tracking-active': props.tracking }"
    >
      <div
        class="compass-panel"
        :style="rotationStyle"
      >
        <div
          class="pin north-pin"
          :style="northPinStyle"
        />
        <div
          class="pin east-pin"
          :style="eastPinStyle"
        />
        <div
          class="pin south-pin"
          :style="southPinStyle"
        />
        <div
          class="pin west-pin"
          :style="westPinStyle"
        />
      </div>

      <span
        class="compass-orientation-text"
        :style="compassOrientationTextStyle"
      >
        {{ orientationText }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.map-compass {
  position: relative;
  border-radius: 50%;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.map-compass.tracking-active {
  box-shadow: 0 0 8px 2px v-bind("theme.primaryColor"), 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

.map-compass.tracking-active .compass-panel {
  border-color: v-bind("theme.primaryColor");
  box-shadow:
    0 0 8px -4px v-bind("theme.primaryColor"),
    0 0 2px 0px rgba(0, 0, 0, 0.2)
}

.compass-panel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: v-bind("theme.modalColor");
  border: 2px solid v-bind("theme.borderColor");
  border-radius: 50%;
  overflow: hidden;
  transform-origin: 50% 50%;
  box-shadow:
    inset 0 0 6px 2px rgba(0, 0, 0, 0.1),
    inset 0 0 4px 0px rgba(0, 0, 0, 0.4);
}

.pin {
  border-radius: 50%;
  position: absolute;
}

.north-pin {
  background-color: v-bind("theme.primaryColor");
}

.east-pin,
.south-pin,
.west-pin {
  background-color: rgba(128, 128, 128, 0.3);
}

.compass-orientation-text {
  position: absolute;
  text-align: center;
  color: v-bind("theme.textColorBase");
}
</style>
