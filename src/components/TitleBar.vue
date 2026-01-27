<script setup lang="ts">
import { computed, ref } from 'vue';
import { NPerformantEllipsis, NText, useThemeVars } from 'naive-ui';
import { useTitleBarStore } from '@/store/title-bar-store';
import { useSketchStore } from '@/store/sketch-store';
import SelectorDrawer from './CartoSketch/SelectorDrawer.vue';

const themeVars = useThemeVars();

const titleBarStore = useTitleBarStore();
const sketchStore = useSketchStore();

const displayText = computed(() => titleBarStore.text || '');
const show = ref(false);

const sketchList = computed(() => {
  return sketchStore.sketches.map((sketch) => ({
    name: sketch.meta.name,
    id: sketch.id,
    tags: sketch.meta.tags,
  }));
});

const handleSketchSelect = (id: string) => {
  const sketch = sketchStore.sketches.find((s) => s.id === id);
  sketchStore.setCurrentSketchId(id);
  show.value = false;
};

const handleSketchRemove = async (id: string) => {
  await sketchStore.deleteSketch(id);
};

const handleSketchNew = async () => {
  const newSketch = await sketchStore.createSketch('New Sketch');
  sketchStore.setCurrentSketchId(newSketch.id);
  show.value = false;
};
</script>

<template>
  <div v-if="displayText" class="title-bar" @click="show = true">
    <n-performant-ellipsis>
      <n-text :depth="3" style="display: block; padding: 4px 8px; min-width: 48px;">{{ displayText }}</n-text>
    </n-performant-ellipsis>
  </div>

  <SelectorDrawer
    v-model:active="show"
    :list="sketchList"
    :active-id="sketchStore.currentSketchId || ''"
    @select="handleSketchSelect"
    @remove="handleSketchRemove"
  />
</template>

<style scoped>
.title-bar {
  width: 100%;
  text-align: center;
  transition: background-color 0.2s v-bind('themeVars.cubicBezierEaseInOut');
  border-radius: v-bind('themeVars.borderRadius');
}

.title-bar:hover {
  cursor: pointer;
  background-color: v-bind('themeVars.hoverColor');
}
</style>
