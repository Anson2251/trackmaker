<script lang="ts" setup>
import { ref, watch } from "vue";
import { NPopover, NInput, NButton, NIcon } from "naive-ui";
import { X } from "@vicons/tabler";
import MarkdownEditor from "@/components/common/MarkdownEditor.vue";

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
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// Editing state for name field
const editingName = ref(false);
const nameInputRef = ref<InstanceType<typeof NInput> | null>(null);

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
      editingName.value = false;
    }
  },
  { immediate: true }
);

const startEditingName = () => {
  localName.value = props.name;
  editingName.value = true;
  setTimeout(() => {
    nameInputRef.value?.focus();
  }, 200);
};

const saveName = () => {
  if (localName.value !== props.name) {
    emit("update:name", localName.value);
    emit("save");
  }
  editingName.value = false;
};

const saveDescription = (value: string) => {
  if (value !== props.description) {
    emit("update:description", value);
    emit("save");
  }
};

const handleClose = () => {
  emit("update:show", false);
};
</script>

<template>
  <n-popover :show="show" :x="x" :y="y" trigger="manual" placement="bottom">
    <template #header>
      <div class="popover-header">
        <div style="display: inline-block; width: 100%">
          <transition mode="out-in" name="slide-up">
            <div
              v-if="!editingName"
              class="popover-name"
              @click.prevent="startEditingName"
              @touchend.prevent="startEditingName"
            >
              {{ name || "Untitled" }}
            </div>
            <n-input
              v-else
              style="position: relative"
              ref="nameInputRef"
              v-model:value="localName"
              placeholder="Name"
              autofocus
              @blur="saveName"
              @keydown.enter="saveName"
            />
          </transition>
        </div>
        <n-button quaternary circle size="small" @click="handleClose">
          <n-icon :size="14">
            <X />
          </n-icon>
        </n-button>
      </div>
    </template>
    <div class="feature-edit-popover">
      <MarkdownEditor
        v-model="localDescription"
        :min-height="'80px'"
        :max-height="'200px'"
        @save="saveDescription"
      />
    </div>
  </n-popover>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.07s ease-in-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(8px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}

.feature-edit-popover {
  min-width: 280px;
  max-width: min(1200px, 60vw);
  padding-bottom: 8px;
}

.popover-header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 2.5em;
}

.popover-name {
  font-size: 15px;
  font-weight: 600;
  padding-top: 4px;
  padding-left: 8px;
  cursor: text;
  border-radius: 4px;
  min-height: 32px;
  -webkit-tap-highlight-color: transparent;
}

.popover-name:hover,
.popover-name:active {
  background: rgba(0, 0, 0, 0.06);
}
</style>
