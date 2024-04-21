<script setup>
import { ref } from "vue";

import { NH1, NP, NConfigProvider } from "naive-ui";
import { useOsTheme, darkTheme } from 'naive-ui';
let theme = ref((useOsTheme().value === "dark") ? darkTheme : null);
</script>

<template>
  <n-config-provider :theme="theme">

      <n-h1>Track maker</n-h1>
      <n-p>A simple tool for tracking and sharing your routes</n-p>

  </n-config-provider>
</template>

<style>

</style>
