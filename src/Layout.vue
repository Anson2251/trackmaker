<script lang="ts" setup>
import { RouterView, RouterLink } from "vue-router";
import { h, type Component, provide } from "vue";
import { Map, InfoCircle } from "@vicons/tabler";
import { useI18n } from "vue-i18n";

import { NMenu, type MenuOption } from "naive-ui";
import { NIcon } from "naive-ui";
import { UpdateService } from "./libs/geolocation/update-service";

const { t } = useI18n();
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const locator = (window as any).UpdateService as UpdateService;
provide("geolocation", locator);

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: "/",
        },
        { default: () => t('router.tracker') }
      ),
    key: "tracker",
    icon: renderIcon(Map),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: "/about",
        },
        { default: () => t('router.about') }
      ),
    key: "about",
    icon: renderIcon(InfoCircle),
  },
];
</script>

<template>
  <n-menu
    :options="menuOptions"
    mode="horizontal"
    class="nav-bar"
    default-value="tracker"
  />
  <div class="main-layout">
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.1s ease-out;
}

.slide-fade-enter-from {
  /* transform: translateX(20px); */
  opacity: 0;
}

.slide-fade-leave-to {
  /* transform: translateX(-20px); */
  opacity: 0;
}

.main-layout {
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-top: 1em;
  box-sizing: border-box;

  position: relative;

  overflow: auto;
}

.nav-bar {
  grid-column: 1;
  grid-row: 1;

  display: flex;
  height: var(--nav-bar-height);
}
</style>
