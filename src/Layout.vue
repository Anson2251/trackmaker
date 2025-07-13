<script lang="ts" setup>
import { RouterView, RouterLink } from "vue-router";
import { h, type Component, provide, computed, watch, ref } from "vue";
import { Map, InfoCircle, Settings } from "@vicons/tabler";
import { useI18n } from "vue-i18n";

import { NMenu, type MenuOption } from "naive-ui";
import { NIcon, NText } from "naive-ui";
import { useRoute } from "vue-router";
import { UpdateService } from "./libs/geolocation/update-service";
import { useSettingsStore } from "./store/settings-store";
import { useWindowSize } from "@vueuse/core";
import PlatformInfo from "./utils/platform";

const router = useRoute();
const settings = useSettingsStore();
const platform = new PlatformInfo();

const { t, locale } = useI18n();
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

settings.settings.interfaceLanguage =
  settings.settings.interfaceLanguage ?? locale.value;
locale.value = settings.settings.interfaceLanguage;
watch(
  () => settings.settings.interfaceLanguage,
  (v) => {
    if (v) locale.value = v;
  }
);

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
        { default: () => (t("router.tracker")) }
      ),
    key: "tracker",
    icon: renderIcon(Map),
  },
];

const softwareOption: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: "/settings",
        },
        { default: () => (t("router.settings")) }
      ),
    key: "settings",
    icon: renderIcon(Settings),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: "/about",
        },
        { default: () => (t("router.about")) }
      ),
    key: "about",
    icon: renderIcon(InfoCircle),
  },
];

const currentRoute = computed(() => router.path.slice(1));
const commitId = __MOST_RECENT_COMMIT__;
const devMode = !__RELEASE_MODE__;
const { width, height } = useWindowSize();
const horizontalScreen = computed(() => width.value > height.value);
const isNarrowScreen = computed(() => width.value < 460);
</script>

<template>
  <div
    :class="[
      'app-layout',
      horizontalScreen ? 'app-layout-horizontal' : 'app-layout-vertical',
    ]"
  >
    <div class="nav-bar" v-if="horizontalScreen">
      <n-menu
        :options="menuOptions"
        default-value="tracker"
        :value="currentRoute"
        :mode="horizontalScreen ? 'vertical' : 'horizontal'"
      />
      <div class="software-info-menu">
        <div style="width: fit-content">
          <n-menu
            :options="softwareOption"
            :mode="horizontalScreen ? 'vertical' : 'horizontal'"
            :value="currentRoute"
          />
        </div>
        <div
          style="width: 100%; text-align: center; padding: 4px"
          v-if="commitId"
        >
          <n-text depth="3">{{
            devMode ? "DEV MODE" : "Commit:" + commitId.toLocaleUpperCase()
          }}</n-text>
        </div>
      </div>
    </div>
    <div class="nav-bar" v-else>
      <div style="min-width: 0;">
        <n-menu
          :options="menuOptions.concat(softwareOption)"
          default-value="tracker"
          :value="currentRoute"
          responsive
          dropdown-placement="bottom-start"
          :mode="horizontalScreen ? 'vertical' : 'horizontal'"
          :dropdown-props="{
            trigger: platform.isMobile ? 'click' : 'hover'
          }"
        />
      </div>
      <div
        style="width: 100%; text-align: center; padding: 4px"
        v-if="commitId"
      >
        <n-text depth="3">{{
          devMode ? "DEV MODE" : "Commit:" + commitId.toLocaleUpperCase()
        }}</n-text>
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
  box-sizing: border-box;
  position: relative;
  overflow: auto;
  min-width: 0;
}

.nav-bar {
  width: 100%;
  min-width: 0;
}

.app-layout-horizontal {
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
}

.app-layout-horizontal .nav-bar {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: v-bind("horizontalScreen ? 'column' : 'row'");
  justify-content: space-between;
}

.app-layout-horizontal .main-layout {
  grid-area: 1 / 2 / 2 / 3;
}

.app-layout-vertical {
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
}

.app-layout-vertical .nav-bar {
  grid-area: 1 / 1 / 2 / 2;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.app-layout-vertical .main-layout {
  grid-area: 2 / 1 / 3 / 1;
}

.software-info-menu {
  display: flex;
  flex-direction: v-bind("horizontalScreen ? 'column' : 'row'");
  flex-wrap: nowrap;
  align-items: center;
}
</style>
