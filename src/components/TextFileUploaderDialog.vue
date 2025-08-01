<script setup lang="ts">
import { NModal, NUpload, NUploadDragger, NIcon, NButton, type UploadFileInfo, useMessage } from 'naive-ui';
import { Upload } from '@vicons/tabler';
import type { Component } from 'vue';

const message = useMessage();

type Props = {
    multiple?: boolean;
    icon?: Component;
    prompt?: string;
    types: string[];
}

const props = defineProps<Props>();

const emits = defineEmits<{
    (e: 'update:value', value: string[]): void;
    (e: 'confirm', value: string[]): void;
}>();

const showModal = defineModel('show', {
    default: false,
    type: Boolean,
});

let contents: string[] = [];

const handleChange = (files: UploadFileInfo[]) => {
    contents = [];
    for (const file of files) {
        const raw = file.file;
        if (!raw) continue;
        if (props.types.includes(raw.type)) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    contents.push(e.target.result as string);
                }
                if (contents.length === files.length) {
                    emits('update:value', contents);
                }
            };
            reader.readAsText(raw);
        }
        else {
            message.warning(`Skipped file ${file.name} due to unsupported type ${raw.type}`);
        }
    }
};

const handleConfirm = () => {
    emits('confirm', contents);
    showModal.value = false;
};

const beforeUpload = (data: {
    file: UploadFileInfo
    fileList: UploadFileInfo[]
}) => {
    if (!props.types.includes(data.file.file?.type ?? '')) {
        message.error(`Unsupported file type ${data.file.file?.type ?? 'unknown'}. Supported types: ['${props.types.join("', '")}']`);
        return false;
    }
    return true;
};
</script>

<template>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="Dialog"
  >
    <template #header>
      File Upload
    </template>
    <template #default>
      <div class="upload-container">
        <n-upload
          :multiple="props.multiple ?? false"
          @change="({ fileList }) => handleChange(fileList)"
          @before-upload="beforeUpload"
        >
          <n-upload-dragger>
            <n-icon
              :size="36"
              name="upload"
              class="upload-icon"
            >
              <component :is="props.icon ?? Upload" />
            </n-icon>
            <div>{{ props.prompt ?? 'Drag and drop a file here or click to upload' }}</div>
          </n-upload-dragger>
        </n-upload>
      </div>
    </template>
    <template #action>
      <div class="action-buttons">
        <n-button @click="showModal = false">
          Cancel
        </n-button>
        <n-button
          type="primary"
          @click="handleConfirm"
        >
          Upload
        </n-button>
      </div>
    </template>
  </n-modal>
</template>

<style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.upload-icon {
  opacity: 0.5;
}
</style>
