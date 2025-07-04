<script lang="ts" setup>
import { ref, provide } from "vue";
import Layout from "./Layout.vue";
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

provide("platformInfo", new PlatformInfo());

const osThemeValueRef = useOsTheme();
let theme = ref(osThemeValueRef.value === "dark" ? darkTheme : lightTheme);
let themeOverride = {
  common: {
    fontFamily: 'Barlow, ' + theme.value.common.fontFamily
  }
}
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
          <layout />
          <n-global-style />
        </n-message-provider>
      </n-modal-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
