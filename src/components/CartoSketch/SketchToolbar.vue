<script setup lang="ts">
import { NIcon, NFlex, NPerformantEllipsis, NText, NTag, NSpace } from 'naive-ui';
import { Folder, Plus, Settings } from '@vicons/tabler';
import { useI18n } from 'nano-vue-i18n';

const { t } = useI18n();

interface Props {
  sketchName?: string;
  draftCount?: number;
  routeCount?: number;
}

defineProps<Props>();

const emit = defineEmits<{
  open: [];
  create: [];
  'edit-meta': [];
}>();

const toolBarIconSize = 20;
const toolTipBarItems = [
  {
    title: t('sketchEdit.open'),
    icon: Folder,
    iconSize: toolBarIconSize,
    callback: () => emit('open'),
  },
  {
    title: t('sketchEdit.newComponent'),
    icon: Plus,
    iconSize: toolBarIconSize,
    callback: () => emit('create'),
  },
  {
    title: t('sketchEdit.editMetadata'),
    icon: Settings,
    iconSize: toolBarIconSize,
    callback: () => emit('edit-meta'),
  },
];
</script>

<template>
  <n-flex
    :justify="'space-between'"
    align="center"
  >
    <n-performant-ellipsis>
      <n-text strong>
        {{ sketchName || t('sketchEdit.noSketchSelectedToolbar') }}
      </n-text>
    </n-performant-ellipsis>
    <n-flex :justify="'space-between'">
      <n-space>
      <n-tag
        v-if="sketchName !== undefined"
        type="info"
        size="small"
      >
        {{ draftCount || 0 }} {{ t('sketchEdit.drafts') }}, {{ routeCount || 0 }} {{ t('sketchEdit.routes') }}
      </n-tag>
      </n-space>
      <n-space>
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
      </n-space>
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
