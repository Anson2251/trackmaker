<script lang="ts" setup>
import { provide, computed, onMounted } from "vue";
import AppLayout from "./AppLayout.vue";
import {
  darkTheme,
  lightTheme,
  NDialogProvider,
  NModalProvider,
  NConfigProvider,
  NGlobalStyle,
  NMessageProvider,
  useOsTheme,
} from "naive-ui";
import PlatformInfo from "./utils/platform";
import { useSettingsStore } from "./store/settings-store";
import NoSleep from 'nosleep.js'
import type { GeolocationManager } from "./libs/geolocation";

const settings = useSettingsStore();
const locator = (window as { GeolocationManager?: GeolocationManager }).GeolocationManager as GeolocationManager;

const osThemeValueRef = useOsTheme();
const theme = computed(() =>
  (settings.settings.theme === "system" ? osThemeValueRef.value : settings.settings.theme) ===
    "dark"
    ? darkTheme
    : lightTheme
);
const themeOverride = {
  common: {
    fontFamily:
      'Barlow, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
};

provide("platformInfo", new PlatformInfo());
provide("settings", settings);
provide('noSleep', new NoSleep())
provide("geolocation", locator);

onMounted(() => settings.init());

</script>

<template>
  <n-config-provider
    :theme="theme"
    :abstract="true"
    :inline-theme-disabled="true"
    :theme-overrides="themeOverride"
  >
    <n-dialog-provider>
      <n-modal-provider>
        <n-message-provider :placement="'bottom-right'">
          <app-layout />
          <n-global-style />
        </n-message-provider>
      </n-modal-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
