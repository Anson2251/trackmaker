<script lang="ts" setup>
import { computed, onBeforeUnmount, ref, watch, type ComputedRef } from "vue";
import { inject } from "vue";
// import { NButton, NIcon } from "naive-ui";
// import { Check, Edit } from "@vicons/tabler";
import { MdEditor, type ExposeParam, type ToolbarNames } from "md-editor-v3";
import VueMarkdown from "vue-markdown-render";
import "md-editor-v3/lib/style.css";
import { useI18n } from "vue-i18n";
import { NInput } from "naive-ui";

interface Props {
  modelValue: string;
  previewTheme?: string;
  minHeight?: string;
  maxHeight?: string;
  placeholder?: string;
  showToolbar?: boolean;
  mode?: "edit" | "preview" | "toggle";
  initialMode?: "edit" | "preview";
}

const props = withDefaults(defineProps<Props>(), {
  previewTheme: "vuepress",
  minHeight: "80px",
  maxHeight: "200px",
  showToolbar: false,
  mode: "toggle",
  initialMode: "preview",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "save", value: string): void;
}>();

const { locale } = useI18n();
const theme = inject("applicationDarkThemeEnabled") as ComputedRef<boolean>;

const isPreviewMode = ref(props.initialMode === "preview");
const descriptionInputRef = ref<ExposeParam | null>(null);

const mdEditorLocale = computed(() => {
  return locale.value.startsWith("zh") ? "zh-CN" : "en-US";
});

const localValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal;
  }
);

watch(localValue, (newVal) => {
  emit("update:modelValue", newVal);
});

const toggleMode = () => {
  if (props.mode !== "toggle") return;
  isPreviewMode.value = !isPreviewMode.value;
  if (!isPreviewMode.value) {
    setTimeout(() => {
      descriptionInputRef.value?.focus("end");
    }, 200);
  }
  else {
    save();
  }
};

const startEditing = () => {
  if (props.mode === "toggle") {
    isPreviewMode.value = false;
    setTimeout(() => {
      descriptionInputRef.value?.focus("end");
    }, 200);
  }
};

const save = () => {
  emit("save", localValue.value);
  if (props.mode === "toggle") {
    isPreviewMode.value = true;
  }
};

const toolbars: ToolbarNames[] = [
  "bold",
  "underline",
  "italic",
  "-",
  "title",
  "strikeThrough",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "task",
  "-",
  "link",
  "image",
  "table",
  "=",
  "pageFullscreen",
  "fullscreen",
  "preview",
];

onBeforeUnmount(() => save());
</script>

<template>
  <div class="markdown-editor">
    <div class="editor-content">
      <transition mode="out-in" name="slide-up">
        <!-- <MdEditor
          v-if="!isPreviewMode"
          v-model="localValue"
          :language="mdEditorLocale"
          :theme="theme ? 'dark' : 'light'"
          :preview-theme="previewTheme"
          :show-toolbar="showToolbar"
          :show-preview="false"
          :editor-id="'md-editor-' + Math.random().toString(36).slice(2)"
          :style="{ minHeight, maxHeight }"
          :toolbars="toolbars"
          :placeholder="placeholder"
          ref="descriptionInputRef"
        /> -->
        <n-input v-if="!isPreviewMode" type="textarea" @blur="toggleMode" v-model:value="localValue" ref="descriptionInputRef"/>
        <VueMarkdown
          v-else
          :source="localValue"
          :theme="previewTheme"
          :html="true"
          :emoji="true"
          :anchorAttributes="{ target: '_blank', rel: 'noopener noreferrer' }"
          class="markdown-preview"
          @click="startEditing"
        />
      </transition>
    </div>
    <!-- <div v-if="mode === 'toggle'" class="editor-footer">
      <n-button
        :quaternary="isPreviewMode"
        :secondary="!isPreviewMode"
        :circle="isPreviewMode"
        :size="isPreviewMode ? 'tiny' : 'medium'"
        :type="isPreviewMode ? 'default' : 'success'"
        @click="toggleMode"
      >
        <template #icon>
          <n-icon :size="14">
            <component :is="isPreviewMode ? Edit : Check" />
          </n-icon>
        </template>
      </n-button>
    </div> -->
  </div>
</template>

<style scoped>
.markdown-editor {
  width: 100%;
}

.editor-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

.editor-content {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.markdown-preview {
  padding: 8px;
  border-radius: 4px;
  min-height: 40px;
}

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
</style>
