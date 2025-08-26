<script setup lang="ts">
import { NList, NListItem, NIcon, NButton } from 'naive-ui';
import { useI18n } from 'vue-i18n';

import { Shape, Trash } from '@vicons/tabler';

const { t } = useI18n();

const props = defineProps({
    list: {
        type: Array<{name: string, id: string}>,
        default: () => []
    }
});

const emit = defineEmits(['select', 'remove']);

function select(id: string) {
    emit('select', id);
}

function remove(id: string) {
    const confirmed = confirm(t('sketchEdit.deleteSketchConfirmation'));
    if (confirmed) emit('remove', id);
}

</script>

<template>
  <div class="container">
    <n-list
      class="select-listview"
      hoverable
    >
      <n-list-item
        v-for="sketch in props.list"
        :key="sketch.id"
        :title="sketch.name"
        @click="select(sketch.id)"
      >
        <template #prefix>
          <div style="height: 100%; width: 100%; display: flex; justify-items: center;">
            <n-icon size="20">
              <shape />
            </n-icon>
          </div>
        </template>
        <template #suffix>
          <n-button
            quaternary
            circle
            @click.stop="remove(sketch.id)"
          >
            <template #icon>
              <n-icon>
                <trash />
              </n-icon>
            </template>
          </n-button>
        </template>
        {{ sketch.name }}
      </n-list-item>
    </n-list>
  </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}

.select-listview {
    width: 100%;
    height: 100%;
}
</style>
