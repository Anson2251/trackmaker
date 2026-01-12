<script lang="ts" setup>
import { ref, watch, nextTick } from "vue";
import { NPopover, NInput } from "naive-ui";

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

// Editing state for each field
const editingName = ref(false);
const editingDescription = ref(false);
const nameInputRef = ref<InstanceType<typeof NInput> | null>(null);
const descriptionInputRef = ref<InstanceType<typeof NInput> | null>(null);

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
      editingDescription.value = false;
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

const startEditingDescription = () => {
  localDescription.value = props.description;
  editingDescription.value = true;
  setTimeout(() => {
    descriptionInputRef.value?.focus();
  }, 200);
};

const saveName = () => {
  if (localName.value !== props.name) {
    emit("update:name", localName.value);
    emit("save");
  }
  editingName.value = false;
};

const saveDescription = () => {
  if (localDescription.value !== props.description) {
    emit("update:description", localDescription.value);
    emit("save");
  }
  editingDescription.value = false;
};

const handleClose = () => {
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
    <template #header>
      <div style="display: inline-block; width: 100%">
        <transition mode="out-in" name="slide-up">
          <div
            v-if="!editingName"
            class="popover-name"
            @click="startEditingName"
          >
            {{ name || "Untitled" }}
          </div>
          <n-input
            v-else
            style="position: relative"
            ref="nameInputRef"
            v-model:value="localName"
            placeholder="Name"
            maxlength="100"
            show-count
            autofocus
            @blur="saveName"
            @keydown.enter="saveName"
          />
        </transition>
      </div>
    </template>
    <div class="feature-edit-popover">
      <transition mode="out-in" name="slide-up">
        <div
          v-if="!editingDescription"
          class="popover-description"
          :class="{ 'is-empty': !description }"
          @click="startEditingDescription"
        >
          {{ description || "Add description..." }}
        </div>
        <n-input
          v-else
          ref="descriptionInputRef"
          v-model:value="localDescription"
          type="textarea"
          placeholder="Description"
          :rows="3"
          maxlength="500"
          show-count
          @blur="saveDescription"
        />
      </transition>
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
  min-width: 260px;
  max-width: 400px;
  padding: 4px 0;
  display: inline-block;
}

.popover-name {
  font-size: 15px;
  font-weight: 600;
  padding-top: 4px;
  padding-left: 8px;
  cursor: text;
  border-radius: 4px;
  min-height: 32px;
}

.popover-name:hover {
  background: var(--hover-color, rgba(0, 0, 0, 0.06));
}

.popover-description {
  font-size: 13px;
  line-height: 1.5;
  padding: 6px 8px;
  cursor: text;
  border-radius: 4px;
  min-height: 24px;
}

.popover-description:hover {
  background: var(--hover-color, rgba(0, 0, 0, 0.06));
}
</style>
