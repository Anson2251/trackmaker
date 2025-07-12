<script lang="ts" setup>
import { RouterView, RouterLink } from "vue-router";
import { h, type Component, provide, computed, watch } from "vue";
import { Map, InfoCircle, Settings } from "@vicons/tabler";
import { useI18n } from "vue-i18n";

import { NMenu, type MenuOption } from "naive-ui";
import { NIcon, NText } from "naive-ui";
import { useRoute } from "vue-router";
import { UpdateService } from "./libs/geolocation/update-service";

const router =  useRoute()

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
          to: "/tracker",
        },
        { default: () => t("router.tracker") }
      ),
    key: "tracker",
    icon: renderIcon(Map),
  },
];

const softwareOption: MenuOption[]  = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: "/about",
        },
        { default: () => t("router.about") }
      ),
    key: "about",
    icon: renderIcon(InfoCircle),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: "/settings",
        },
        { default: () => t("router.settings") }
      ),
    key: "settings",
    icon: renderIcon(Settings),
  }
]

const currentRoute = computed(() => router.path.slice(1))
const commitId = __MOST_RECENT_COMMIT__;
const devMode = !__RELEASE_MODE__;
</script>

<template>
  <div class="app-layout">
    <div class="nav-bar">
    <n-menu
      :options="menuOptions"
      mode="vertical"
      default-value="tracker"
      :value="currentRoute"
    />
    <div class="software-info-menu">
      <n-menu
        :options="softwareOption"
        mode="vertical"
        :value="currentRoute"
      />
      <div style="width: 100%; text-align: center;" v-if="commitId">
        <n-text depth="3">Commit: {{ devMode ? "DEV MODE" : commitId.toLocaleUpperCase() }}</n-text>
      </div>
    </div>
    </div>
    <div class="main-layout">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="currentRoute" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
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

.app-layout {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "router main";
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.main-layout {
  grid-area: main;
  box-sizing: border-box;
  position: relative;
  overflow: auto;
}

.nav-bar {
  grid-area: router;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.software-info-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
