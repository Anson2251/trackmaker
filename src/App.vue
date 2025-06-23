<script lang="ts" setup>
import { ref } from "vue";
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

const osThemeValueRef = useOsTheme();
let theme = ref(osThemeValueRef.value === "dark" ? darkTheme : lightTheme);
</script>

<template>
  <n-config-provider
    :theme="theme"
    :abstract="true"
    :inline-theme-disabled="true"
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
