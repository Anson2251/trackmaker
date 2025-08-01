<script lang="ts" setup>
import { computed, useTemplateRef, watch } from "vue";
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
    >
      <slot name="default" />
    </div>
  </transition>
</template>

<style scoped>
.route-drawer {
  position: absolute;
  box-sizing: border-box;
  background-color: v-bind("theme.modalColor");
  border-radius: v-bind("theme.borderRadius");
}

/* Left position styles */
.route-drawer--left {
  padding-left: 48px;
  padding-bottom: 32px;
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
