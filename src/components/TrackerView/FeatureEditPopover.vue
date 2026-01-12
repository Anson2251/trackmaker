<script lang="ts" setup>
import { ref, watch } from "vue";
import { NPopover, NInput, NButton, NSpace, NIcon } from "naive-ui";
import { useI18n } from "vue-i18n";
import { Edit, Check, X } from "@vicons/tabler";

const { t } = useI18n();

interface Props {
  show: boolean;
  x: number;
  y: number;
  name: string;
  description: string;
}

interface Emits {
  (e: "update:show", show: boolean): void;
  (e: "update:name", name: string): void;
  (e: "update:description", description: string): void;
  (e: "save"): void;
  (e: "cancel"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// Edit mode state
const isEditing = ref(false);

// Local state for editing
const localName = ref("");
const localDescription = ref("");

// Sync local state when props change
watch(
  () => [props.name, props.description, props.show],
  () => {
    if (props.show) {
      localName.value = props.name;
      localDescription.value = props.description;
      isEditing.value = false; // Reset to view mode when popover opens
    }
  },
  { immediate: true }
);

const handleEdit = () => {
  localName.value = props.name;
  localDescription.value = props.description;
  isEditing.value = true;
};

const handleSave = () => {
  emit("update:name", localName.value);
  emit("update:description", localDescription.value);
  isEditing.value = false;
  emit("save");
};

const handleCancel = () => {
  localName.value = props.name;
  localDescription.value = props.description;
  isEditing.value = false;
};

const handleClose = () => {
  isEditing.value = false;
  emit("update:show", false);
};
</script>

<template>
  <n-popover
    :show="show"
    :x="x"
    :y="y"
    trigger="manual"
    placement="bottom"
    :on-clickoutside="handleClose"
  >
    <div class="feature-edit-popover">
      <!-- Header with edit n-button -->
      <div class="popover-header">
        <h3 class="popover-title">
          {{ t("trackerView.terraDrawTools.select") }}
        </h3>
        <n-button
          size="small" circle
          v-if="!isEditing"
          @click="handleEdit"
          :title="t('sketchEdit.edit')"
        >
          <n-icon :size="14">
            <Edit />
          </n-icon>
        </n-button>
      </div>

      <!-- View Mode -->
      <template v-if="!isEditing">
        <div class="view-content">
          <div class="view-field">
            <span class="view-label">{{ t("trackerView.sketch.name") }}</span>
            <span class="view-value">{{ name || "-" }}</span>
          </div>
          <div class="view-field">
            <span class="view-label">{{ t("trackerView.sketch.description") }}</span>
            <span class="view-value">{{ description || "-" }}</span>
          </div>
        </div>
      </template>

      <!-- Edit Mode -->
      <template v-else>
        <div class="form-group">
          <label class="form-label">{{ t("trackerView.sketch.name") }}</label>
          <n-input
            v-model:value="localName"
            :placeholder="t('trackerView.sketch.namePlaceholder')"
            maxlength="100"
            show-count
          />
        </div>

        <div class="form-group">
          <label class="form-label">{{
            t("trackerView.sketch.description")
          }}</label>
          <n-input
            v-model:value="localDescription"
            type="textarea"
            :placeholder="t('trackerView.sketch.descriptionPlaceholder')"
            :rows="3"
            maxlength="500"
            show-count
          />
        </div>

        <n-space justify="end" class="popover-actions">
          <n-button size="small" circle @click="handleCancel">
            <n-icon :size="16">
              <X />
            </n-icon>
          </n-button>
          <n-button type="primary" size="small" circle @click="handleSave">
            <n-icon :size="16">
              <Check />
            </n-icon>
          </n-button>
        </n-space>
      </template>
    </div>
  </n-popover>
</template>

<style scoped>
.feature-edit-popover {
  width: 260px;
  padding: 8px;
}

.popover-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.popover-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.view-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.view-field {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.view-label {
  font-size: 11px;
  text-transform: uppercase;
}

.view-value {
  font-size: 13px;
  word-break: break-word;
}

.form-group {
  margin-bottom: 12px;
}

.form-label {
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
}

.popover-actions {
  margin-top: 12px;
}
</style>
