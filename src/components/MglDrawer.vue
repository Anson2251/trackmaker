<script lang="ts" setup>
import { computed, ref, useTemplateRef, watch } from "vue";
import { useThemeVars } from "naive-ui";
import { clamp } from "lodash-es";

// Define position type
type DrawerPosition = "left" | "right" | "top" | "bottom";

const props = defineProps<{
  position?: DrawerPosition;
}>();

const emit = defineEmits<{
  (e: "update:width", value: number): void;
  (e: "update:height", value: number): void;
  (e: "click", event: MouseEvent): void;
  (e: "contextmenu", event: MouseEvent): void;
}>();

const theme = useThemeVars();

const routeDrawer = useTemplateRef("route-drawer");
const position = computed(() => props.position || "left");

// Swipe gesture tracking for easter egg
let touchStartX = 0;
let touchStartY = 0;
const SWIPE_THRESHOLD = 80;

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
};

const handleTouchEnd = (e: TouchEvent) => {
  if (!touchStartX || !touchStartY) return;

  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;

  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  // Check if swipe is in the direction to close the drawer
  let shouldClose = false;
  if (position.value === "left" && deltaX < -SWIPE_THRESHOLD) shouldClose = true;
  if (position.value === "right" && deltaX > SWIPE_THRESHOLD) shouldClose = true;
  if (position.value === "top" && deltaY < -SWIPE_THRESHOLD) shouldClose = true;
  if (position.value === "bottom" && deltaY > SWIPE_THRESHOLD) shouldClose = true;

  if (shouldClose) {
    show.value = false;
  }

  touchStartX = 0;
  touchStartY = 0;
};

// Calculate drawer dimensions based on position
const routeDrawerWidth = computed(() =>
  Math.min(
    clamp(
      Math.round((routeDrawer.value?.parentElement?.clientWidth ?? 2000) * 0.4),
      320,
      640
    ),
    (routeDrawer.value?.parentElement?.clientWidth ?? Infinity) - 48
  )
);

const routeDrawerHeight = computed(() =>
  Math.min(
    clamp(
      Math.round((routeDrawer.value?.parentElement?.clientHeight ?? 2000) * 0.4),
      320,
      640
    ),
    (routeDrawer.value?.parentElement?.clientHeight ?? Infinity) - 48
  )
);

// Calculate drawer translation based on position
const drawerTranslation = computed(() => {
  if (position.value === "left") return `${-16 - routeDrawerWidth.value}px`;
  if (position.value === "right") return `${16 + routeDrawerWidth.value}px`;
  if (position.value === "top") return `${-16 - routeDrawerHeight.value}px`;
  if (position.value === "bottom") return `${16 + routeDrawerHeight.value}px`;
  return "0px";
});

// Calculate drawer size based on position
const drawerSize = computed(() => {
  if (position.value === "left" || position.value === "right") {
    return `${routeDrawerWidth.value}px`;
  }
  return `${routeDrawerHeight.value}px`;
});

const show = defineModel("show", {
  type: Boolean,
  default: false,
});

// Emit dimension updates
watch(routeDrawerWidth, () => emit("update:width", routeDrawerWidth.value));
watch(routeDrawerHeight, () => emit("update:height", routeDrawerHeight.value));
</script>

<template>
  <transition :name="`slide-${position}`">
    <div
      v-show="show"
      ref="route-drawer"
      class="route-drawer"
      :class="`route-drawer--${position}`"
      @click="(e) => emit('click', e)"
      @contextmenu="(e) => emit('contextmenu', e)"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <!-- Easter egg: Swipe indicator -->
      <div class="swipe-indicator" :class="`swipe-indicator--${position}`">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-if="position === 'top'"/>
          <path d="M12 20V4M12 20L8 16M12 20L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-else-if="position === 'bottom'"/>
          <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-else-if="position === 'left'"/>
          <path d="M20 12H4M20 12L16 8M20 12L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-else-if="position === 'right'"/>
        </svg>
      </div>
      <div style="height: 100%; width: 100%; overflow: auto;">
        <slot name="default" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.route-drawer {
  position: absolute;
  box-sizing: border-box;
  background-color: v-bind("theme.modalColor");
  border-radius: v-bind("theme.borderRadius");
  touch-action: pan-x pan-y;
}

/* Swipe indicator easter egg */
.swipe-indicator {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: v-bind("theme.textColorBase");
  opacity: 0.3;
  transition: opacity 0.3s, transform 0.3s;
  cursor: grab;
}

.swipe-indicator--left {
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.swipe-indicator--right {
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.swipe-indicator--top {
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
}

.swipe-indicator--bottom {
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
}

/* Left position styles */
.route-drawer--left {
  padding-left: 48px;
  padding-bottom: 32px;
  padding-top: 32px;
  bottom: 0;
  left: 0px;
  top: 0;
  width: v-bind("drawerSize");
  box-shadow: 10px 4px 15px 3px rgba(0, 0, 0, 0.1),
    2px 2px 6px 0px rgba(0, 0, 0, 0.2);
}

/* Right position styles */
.route-drawer--right {
  padding-right: 48px;
  padding-bottom: 32px;
  padding-top: 32px;
  bottom: 0;
  right: 0px;
  top: 0;
  width: v-bind("drawerSize");
  box-shadow: -10px 4px 15px 3px rgba(0, 0, 0, 0.1),
    -2px 2px 6px 0px rgba(0, 0, 0, 0.2);
}

/* Top position styles */
.route-drawer--top {
  padding-top: 48px;
  padding-right: 32px;
  padding-left: 32px;
  top: 0px;
  left: 0;
  right: 0;
  height: v-bind("drawerSize");
  box-shadow: 4px 10px 15px 3px rgba(0, 0, 0, 0.1),
    2px 2px 6px 0px rgba(0, 0, 0, 0.2);
}

/* Bottom position styles */
.route-drawer--bottom {
  padding-bottom: 48px;
  padding-right: 32px;
  padding-left: 32px;
  bottom: 0px;
  left: 0;
  right: 0;
  height: v-bind("drawerSize");
  box-shadow: 4px -10px 15px 3px rgba(0, 0, 0, 0.1),
    2px -2px 6px 0px rgba(0, 0, 0, 0.2);
}

/* Left slide animations */
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(v-bind("drawerTranslation"));
  opacity: 0.8;
  transition: all 0.5s;
}

.slide-left-leave-from,
.slide-left-enter-to {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.5s;
}

/* Right slide animations */
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(v-bind("drawerTranslation"));
  opacity: 0.8;
  transition: all 0.5s;
}

.slide-right-leave-from,
.slide-right-enter-to {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.5s;
}

/* Top slide animations */
.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(v-bind("drawerTranslation"));
  opacity: 0.8;
  transition: all 0.5s;
}

.slide-top-leave-from,
.slide-top-enter-to {
  transform: translateY(0px);
  opacity: 1;
  transition: all 0.5s;
}

/* Bottom slide animations */
.slide-bottom-enter-from,
.slide-bottom-leave-to {
  transform: translateY(v-bind("drawerTranslation"));
  opacity: 0.8;
  transition: all 0.5s;
}

.slide-bottom-leave-from,
.slide-bottom-enter-to {
  transform: translateY(0px);
  opacity: 1;
  transition: all 0.5s;
}
</style>
