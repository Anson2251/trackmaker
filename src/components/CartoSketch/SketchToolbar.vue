<script setup lang="ts">
import { NIcon, NFlex, NText, NTag } from 'naive-ui';
import { DeviceFloppy, Folder, Plus } from '@vicons/tabler';

interface Props {
  sketchName?: string;
  draftCount?: number;
  routeCount?: number;
}

defineProps<Props>();

const emit = defineEmits<{
  save: [];
  open: [];
  create: [];
}>();

const toolBarIconSize = 20;
const toolTipBarItems = [
  {
    title: "save",
    icon: DeviceFloppy,
    iconSize: toolBarIconSize,
    callback: () => emit('save'),
  },
  {
    title: "Open",
    icon: Folder,
    iconSize: toolBarIconSize,
    callback: () => emit('open'),
  },
  {
    title: "New Component",
    icon: Plus,
    iconSize: toolBarIconSize,
    callback: () => emit('create'),
  },
];
</script>

<template>
  <n-flex
    justify="space-between"
    align="center"
  >
    <n-text strong>
      {{ sketchName || "No Sketch Selected" }}
    </n-text>
    <n-flex align="center">
      <n-tag
        v-if="sketchName !== undefined"
        type="info"
        size="small"
      >
        {{ draftCount || 0 }} drafts, {{ routeCount || 0 }} routes
      </n-tag>
      <div
        v-for="(item, index) in toolTipBarItems"
        :key="index"
        :title="item.title"
        class="tool-tip-item"
        @click="item.callback"
      >
        <n-icon :size="item.iconSize">
          <component :is="item.icon" />
        </n-icon>
      </div>
    </n-flex>
  </n-flex>
</template>

<style scoped>
.tool-tip-item {
  height: 2em;
  width: 2em;
  border-radius: 4px;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 4px;
}

.tool-tip-item:hover {
  background-color: rgba(128, 128, 128, 0.3);
}

.tool-tip-item:active {
  background-color: rgba(128, 128, 128, 0.5);
}
</style>
