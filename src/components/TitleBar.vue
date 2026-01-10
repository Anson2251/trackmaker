<script setup lang="ts">
import { computed } from 'vue';
import { NPerformantEllipsis, NText } from 'naive-ui';
import { useTitleBarStore } from '@/store/title-bar-store';

const titleBarStore = useTitleBarStore();

const displayText = computed(() => titleBarStore.text || '');
</script>

<template>
  <div v-if="displayText" class="title-bar">
    <n-performant-ellipsis>
      <n-text :depth="3">{{ displayText }}</n-text>
    </n-performant-ellipsis>
  </div>
</template>

<style scoped>
.title-bar {
  width: 100%;
  text-align: center;
  padding: 4px;
}
</style>
