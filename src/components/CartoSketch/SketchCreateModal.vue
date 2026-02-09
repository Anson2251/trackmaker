<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "nano-vue-i18n";
import {
  NModal,
  NForm,
  NFormItem,
  NSpace,
  NButton,
  NInput
} from "naive-ui";
import MarkdownEditor from "@/components/common/MarkdownEditor.vue";
import { useSketchStore } from "@/store/sketch-store";

const { t } = useI18n();
const sketchStore = useSketchStore();

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: "update:show", value: boolean): void;
  (e: "created", sketchId: string): void;
}>();

const newSketchName = ref("");
const newSketchDescription = ref("");

const close = () => {
  emit("update:show", false);
  newSketchName.value = "";
  newSketchDescription.value = "";
};

const createNewSketch = async () => {
  if (!newSketchName.value.trim()) {
    return;
  }

  const newSketch = await sketchStore.createSketch(newSketchName.value);
  await sketchStore.updateSketch(newSketch.id, {
    description: newSketchDescription.value
  });

  sketchStore.setCurrentSketchId(newSketch.id);
  emit("created", newSketch.id);
  close();
};
</script>

<template>
  <n-modal
    :show="props.show"
    :mask-closable="true"
    preset="card"
    style="max-width: 500px"
    :title="t('sketchCentreView.newSketch')"
    @close="close"
    @mask-click="close"
  >
    <n-form
      :model="{ name: newSketchName, description: newSketchDescription }"
      label-placement="top"
      require-mark-placement="right-hanging"
    >
      <n-form-item
        :label="t('sketchCentreView.sketchName')"
        required
      >
        <n-input
          v-model:value="newSketchName"
          :placeholder="t('sketchCentreView.sketchNamePlaceholder')"
          @keyup.enter="createNewSketch"
        />
      </n-form-item>
      <n-form-item :label="t('sketchCentreView.sketchDescription')">
        <MarkdownEditor
          v-model="newSketchDescription"
          :placeholder="t('sketchCentreView.sketchDescriptionPlaceholder')"
          :min-height="'80px'"
          :max-height="'200px'"
        />
      </n-form-item>
    </n-form>
    <template #footer>
      <n-space justify="end">
        <n-button @click="close">
          {{ t('sketchCentreView.cancel') }}
        </n-button>
        <n-button
          type="primary"
          @click="createNewSketch"
        >
          {{ t('sketchCentreView.create') }}
        </n-button>
      </n-space>
    </template>
  </n-modal>
</template>
