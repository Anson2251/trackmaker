<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui';
import ListSelector from '../ListSelector.vue';
import { watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

type Option = {value: string, label: string}

interface Props {
    components: {
        routes: Option[],
        drafts: Option[],
        unknowns: Option[],
    }
    value?: string;
}
const props = defineProps<Props>();
const emit = defineEmits(['update:value']);

const selectedComponentID = ref<string | undefined>(props.value);

watch(selectedComponentID, () => {
    emit('update:value', selectedComponentID.value);
});

watch(props, () => {
    selectedComponentID.value = props.value;
});
</script>

<template>
  <n-tabs
    type="line"
    name="sketchPropertiesEdit"
    size="small"
    default-value="unclassified"
    animated
  >
    <n-tab-pane
      name="unclassified"
      :tab="t('sketchEdit.unclassified')"
    >
      <list-selector
        v-model:value="selectedComponentID"
        :list="props.components.unknowns.map(s => ({ value: s.value, label: s.label, }))"
      />
    </n-tab-pane>
    <n-tab-pane
      name="routes"
      :tab="t('sketchEdit.routes')"
    >
      <list-selector
        v-model:value="selectedComponentID"
        :list="props.components.routes.map(s => ({ value: s.value, label: s.label }))"
      />
    </n-tab-pane>
    <n-tab-pane
      name="drafts"
      :tab="t('sketchEdit.drafts')"
    >
      <list-selector
        v-model:value="selectedComponentID"
        :list="props.components.drafts.map(s => ({ value: s.value, label: s.label, }))"
      />
    </n-tab-pane>
  </n-tabs>
</template>
