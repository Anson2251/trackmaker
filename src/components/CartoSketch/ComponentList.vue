<script setup lang="ts">
import { NList, NListItem, NIcon, NButton, NEmpty, NPopconfirm } from 'naive-ui';
import { Shape, Route, Trash } from '@vicons/tabler';
import type { SelectOption } from 'naive-ui';

interface Props {
  components: SelectOption[];
  selectedId?: string | null;
}

defineProps<Props>();

const emit = defineEmits<{
  select: [id: string, type: 'draft' | 'route'];
  delete: [id: string, type: 'draft' | 'route'];
  create: [];
}>();
</script>

<template>
  <n-list hoverable>
    <n-list-item
      v-for="option in components"
      :key="option.value"
      :class="{
        'selected-component': selectedId === option.value,
      }"
      @click="() => emit('select', option.value as string, option.type as 'draft' | 'route')"
    >
      <template #prefix>
        <n-icon :color="option.type === 'draft' ? '#007bff' : '#28a745'">
          <component :is="option.type === 'draft' ? Shape : Route" />
        </n-icon>
      </template>
      {{ option.label }}
      <template #suffix>
        <n-popconfirm
          @positive-click="emit('delete', option.value as string, option.type as 'draft' | 'route')"
        >
          <template #trigger>
            <n-button
              quaternary
              circle
              size="small"
            >
              <n-icon><trash /></n-icon>
            </n-button>
          </template>
          Delete this component?
        </n-popconfirm>
      </template>
    </n-list-item>
  </n-list>
  <div
    v-if="components.length === 0"
    class="empty-state"
  >
    <n-empty description="No components yet">
      <template #extra>
        <n-button
          size="small"
          @click="emit('create')"
        >
          Create Component
        </n-button>
      </template>
    </n-empty>
  </div>
</template>

<style scoped>
.selected-component {
  background-color: var(--n-color-hover);
}

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
