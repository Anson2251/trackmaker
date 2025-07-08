<script lang="ts" setup>
import { computed, useTemplateRef, watch, ref } from "vue";
import { useThemeVars } from "naive-ui";
import { clamp } from "lodash-es";

const emit = defineEmits<{
  (e: "update:width", value: number): void;
  (e: "click", event: MouseEvent): void;
  (e: "contextmenu", event: MouseEvent): void;
}>();

const theme = useThemeVars();

const routeDrawer = useTemplateRef("route-drawer");
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
const drawerTranslation = computed(() => `${-16 - routeDrawerWidth.value}px`);
const drawerWidth = computed(() => `${routeDrawerWidth.value}px`);

const show = defineModel("show", {
  type: Boolean,
  default: false,
});

watch(routeDrawerWidth, () => emit("update:width", routeDrawerWidth.value));
</script>

<template>
  <transition name="slide">
    <div
      class="route-drawer"
      ref="route-drawer"
      v-show="show"
      @click="(e) => emit('click', e)"
      @contextmenu="(e) => emit('contextmenu', e)"
    >
      <slot name="default"></slot>
    </div>
  </transition>
</template>

<style scoped>
.route-drawer {
  position: absolute;
  padding-left: 48px;
  padding-bottom: 32px;
  box-sizing: border-box;

  bottom: 0;
  left: 0px;

  top: 0;
  width: v-bind(drawerWidth);

  background-color: v-bind("theme.modalColor");
  box-shadow: 10px 4px 15px 3px rgba(0, 0, 0, 0.1),
    2px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: v-bind("theme.borderRadius");
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(v-bind("drawerTranslation"));
  opacity: 0.8;
  transition: all 0.5s;
}

.slide-leave-from,
.slide-enter-to {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.5s;
}
</style>
