<script setup lang="ts">
import { computed } from 'vue';
import {
  NList,
  NListItem,
  NIcon,
  NButton,
  NTag,
  NEmpty,
  NPopconfirm,
  NSkeleton,
  useThemeVars,
  NTooltip,
  NText,
} from 'naive-ui';
import { useI18n } from 'nano-vue-i18n';
import { Map, Trash, Folder, FileX } from '@vicons/tabler';

const { t } = useI18n();
const theme = useThemeVars();

interface SketchItem {
  id: string;
  name: string;
  tags: string[];
}

const props = defineProps({
  list: {
    type: Array as () => SketchItem[],
    default: () => []
  },
  activeId: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits<{
  select: [id: string];
  remove: [id: string];
}>();

const hasSketches = computed(() => props.list.length > 0);

function select(id: string) {
  if (id !== props.activeId) {
    emit('select', id);
  }
}

function remove(id: string) {
  emit('remove', id);
}

// Keyboard navigation support
function handleKeyDown(event: KeyboardEvent, id: string) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    select(id);
  }
}
</script>

<template>
  <div class="sketch-selector">
    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <n-skeleton text :repeat="5" />
    </div>

    <!-- Empty State -->
    <n-empty
      v-else-if="!hasSketches"
      :description="t('sketchEdit.noSketchesAvailable')"
      size="huge"
      class="empty-state"
    >
      <template #icon>
        <n-icon :size="64">
          <Folder />
        </n-icon>
      </template>
      <template #extra>
        <n-text depth="3">
          {{ t('sketchEdit.createSketchToStart') }}
        </n-text>
      </template>
    </n-empty>

    <!-- Sketch List -->
    <n-list
      v-else
      class="sketch-list"
      hoverable
      role="listbox"
      :aria-label="t('sketchEdit.selectSketch')"
    >
      <n-list-item
        v-for="sketch in props.list"
        :key="sketch.id"
        :class="['sketch-item', { 'sketch-item--active': sketch.id === props.activeId }]"
        role="option"
        :aria-selected="sketch.id === props.activeId"
        tabindex="0"
        @click="select(sketch.id)"
        @keydown="handleKeyDown($event, sketch.id)"
      >
        <template #prefix>
          <div class="sketch-icon-wrapper">
            <n-icon :size="20" class="sketch-icon">
              <Map />
            </n-icon>
          </div>
        </template>

        <div class="sketch-content">
          <div class="sketch-name" :title="sketch.name">
            {{ sketch.name }}
          </div>
          <div v-if="sketch.tags.length > 0" class="sketch-tags">
            <n-tag
              v-for="tag in sketch.tags"
              :key="tag"
              size="small"
              :type="sketch.id === props.activeId ? 'primary' : 'info'"
              class="sketch-tag"
            >
              {{ tag }}
            </n-tag>
          </div>
        </div>

        <template #suffix>
          <div class="sketch-actions">
            <n-tooltip placement="top" :delay="300">
              <template #trigger>
                <n-popconfirm
                  @positive-click="remove(sketch.id)"
                  placement="left"
                >
                  <template #trigger>
                    <n-button
                      quaternary
                      circle
                      size="small"
                      class="delete-btn"
                      :aria-label="t('sketchEdit.deleteSketch')"
                      @click.stop
                    >
                      <template #icon>
                        <n-icon>
                          <Trash />
                        </n-icon>
                      </template>
                    </n-button>
                  </template>
                  {{ t('sketchEdit.deleteSketchConfirmation') }}
                </n-popconfirm>
              </template>
              {{ t('sketchEdit.deleteSketch') }}
            </n-tooltip>
          </div>
        </template>
      </n-list-item>
    </n-list>
  </div>
</template>

<style scoped>
.sketch-selector {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.loading-state {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.empty-state :deep(.n-empty__icon) {
  color: v-bind('theme.textColor3');
}

.sketch-list {
  flex: 1;
  overflow-y: auto;
}

.sketch-list :deep(.n-list-item) {
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  margin: 4px 8px;
  padding: 12px 16px;
}

.sketch-list :deep(.n-list-item:hover) {
  background-color: v-bind('theme.hoverColor');
}

.sketch-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.sketch-item--active {
  background-color: v-bind('theme.primaryColorSuppl') !important;
}

.sketch-item--active .sketch-name {
  color: v-bind('theme.textColorBase');
  font-weight: 600;
}

.sketch-item--active .sketch-icon {
  color: v-bind('theme.primaryColor');
}

.sketch-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: v-bind('theme.tagColor');
  flex-shrink: 0;
}

.sketch-item--active .sketch-icon-wrapper {
  background-color: rgba(255, 255, 255, 0.2);
}

.sketch-item--active .sketch-icon-wrapper .sketch-icon {
  color: v-bind('theme.textColorBase');
}

.sketch-icon {
  color: v-bind('theme.textColor2');
  transition: color 0.2s ease;
}

.sketch-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  gap: 6px;
}

.sketch-name {
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: v-bind('theme.textColorBase');
  transition: color 0.2s ease;
}

.sketch-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.sketch-tag {
  font-size: 11px;
  text-transform: none;
}

.sketch-item--active .sketch-tag {
  background-color: v-bind('theme.primaryColor');
  color: white;
}

.sketch-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.sketch-list :deep(.n-list-item:hover) .sketch-actions,
.sketch-item--active .sketch-actions {
  opacity: 1;
}

.delete-btn {
  transition: all 0.2s ease;
}

.delete-btn:hover {
  color: white;
  background-color: v-bind('theme.errorColorSuppl');
}

/* Focus styles for accessibility */
.sketch-list :deep(.n-list-item:focus-visible) {
  outline: 2px solid v-bind('theme.primaryColor');
  outline-offset: 2px;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .sketch-list :deep(.n-list-item),
  .sketch-actions,
  .delete-btn {
    transition: none;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .sketch-list :deep(.n-list-item) {
    padding: 14px 16px;
  }

  .sketch-name {
    font-size: 15px;
  }

  .sketch-actions {
    opacity: 1;
  }
}
</style>
