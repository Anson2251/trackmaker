<script lang="ts" setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  shallowRef,
  watch,
} from "vue";
import { useI18n } from "vue-i18n";
import {
  NInput,
  NDrawer,
  NDrawerContent,
  NButton,
  NIcon,
  NCard,
  useThemeVars,
} from "naive-ui";
import { Check, X, Edit } from "@vicons/tabler";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css";
import PlatformInfo from "@/utils/platform";
import wangEditorToMarkdown from "@/utils/wangEditorToMarkdown";
import markdownToHtml from "@/utils/markdownToHtml";
import MarkdownViewer from "./MarkdownViewer.vue";
import { i18nChangeLanguage } from "@wangeditor/editor";

const { t, locale } = useI18n();
i18nChangeLanguage(locale.value);

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

const platformInfo = new PlatformInfo();
const isMobile = computed(() => platformInfo.isMobile);

const themeVars = useThemeVars();

const wangEditorStyles = computed(() => ({
  "--w-e-textarea-bg-color": themeVars.value.cardColor,
  "--w-e-textarea-color": themeVars.value.textColorBase,
  "--w-e-textarea-border-color": themeVars.value.borderColor,
  "--w-e-textarea-slight-border-color": themeVars.value.borderColor,
  "--w-e-textarea-slight-color": themeVars.value.textColor2,
  "--w-e-textarea-slight-bg-color": themeVars.value.hoverColor,
  "--w-e-textarea-selected-border-color": themeVars.value.primaryColor,
  "--w-e-textarea-handler-bg-color": themeVars.value.primaryColor,
  "--w-e-toolbar-color": themeVars.value.textColor1,
  "--w-e-toolbar-bg-color": themeVars.value.cardColor,
  "--w-e-toolbar-active-color": themeVars.value.textColorBase,
  "--w-e-toolbar-active-bg-color": themeVars.value.hoverColor,
  "--w-e-toolbar-disabled-color": themeVars.value.textColor2,
  "--w-e-toolbar-border-color": themeVars.value.borderColor,
  "--w-e-modal-button-bg-color": themeVars.value.buttonColor2,
  "--w-e-modal-button-border-color": themeVars.value.borderColor,
}));

const isPreviewMode = ref(props.initialMode === "preview");
const showDrawer = ref(false);
const editorRef = shallowRef();
const descriptionInputRef = ref();
const localValue = ref(props.modelValue);

const startEditing = () => {
  isPreviewMode.value = false;
  setTimeout(() => {
    descriptionInputRef.value?.focus();
  }, 50);
};

watch(
  () => props.modelValue,
  (newVal) => {
    // Only sync from props when not actively editing to avoid cursor jumping
    if (!isPreviewMode.value && descriptionInputRef.value?.value !== newVal) {
      localValue.value = newVal;
    } else if (isPreviewMode.value) {
      localValue.value = newVal;
    }
  }
);

// Only emit on blur or explicit save, not every keystroke
const handleBlur = () => {
  emit("update:modelValue", localValue.value);
  isPreviewMode.value = true;
};

const openRichTextEditor = (e: Event) => {
  showDrawer.value = true;
};

const closeDrawer = () => {
  showDrawer.value = false;
};

const confirmEdit = (fromDrawer = false) => {
  setTimeout(() => {
    if (
      (fromDrawer && showDrawer.value) ||
      (!fromDrawer && !showDrawer.value)
    ) {
      emit("update:modelValue", localValue.value);
      emit("save", localValue.value);
      showDrawer.value = false;
      isPreviewMode.value = true;
    }
  }, 50);
};

const handleEditorChange = (editor: any) => {
  const html = editor.getHtml();
  localValue.value = wangEditorToMarkdown(html);
};

const handleEditorCreated = (editor: any) => {
  editorRef.value = editor;
  editor.focus();
  // Set initial content
  if (localValue.value) {
    const html = markdownToHtml(localValue.value.trim());
    setTimeout(() => editor.setHtml(html), 100);
  }
};

// Destroy editor on unmount
onBeforeUnmount(() => {
  if (editorRef.value) {
    editorRef.value.destroy();
  }
});

// Toolbar configuration
const toolbarConfig = {
  toolbarKeys: [
    "headerSelect",
    "bold",
    "underline",
    "italic",
    "through",
    "color",
    "bgColor",
    "|",
    "insertLink",
    {
      key: "group-more",
      title: "…",
      menuKeys: [
        "blockquote",
        "codeBlock",
        "bulletedList",
        "numberedList",
        "insertTable",
      ],
    },
    "undo",
    "redo",
  ],
};

const editorConfig = {
  placeholder: props.placeholder || "Enter text...",
};
</script>

<template>
  <div class="markdown-editor">
    <div class="editor-content">
      <n-input
        v-if="!isPreviewMode"
        type="textarea"
        v-model:value="localValue"
        :placeholder="placeholder"
        :style="{ minHeight, maxHeight }"
        @blur="handleBlur"
        ref="descriptionInputRef"
      >
        <template #suffix>
          <n-button quaternary circle size="tiny" @click="openRichTextEditor">
            <template #icon>
              <n-icon :size="16">
                <Edit />
              </n-icon>
            </template>
          </n-button>
        </template>
      </n-input>
      <MarkdownViewer
        v-else
        class="markdown-preview"
        @click="startEditing"
        :source="localValue"
        :options="{ html: true, typographer: true }"
        :task-lists="true"
        :style="{
          maxHeight: maxHeight,
        }"
      />
    </div>

    <!-- Rich Text Editor Drawer -->
    <n-drawer
      v-model:show="showDrawer"
      :width="isMobile ? '100vw' : '600px'"
      :placement="isMobile ? 'right' : 'right'"
      :mask-closable="true"
      :data-purpose="`wang-editor-${isMobile ? 'mobile' : 'desktop'}`"
    >
      <n-drawer-content
        :title="t('markdownEditor.title')"
        :closable="!isMobile"
        :style="{ height: '100%', padding: 0, flex: 1 }"
      >
        <!-- Mobile: Top buttons in header -->
        <template v-if="isMobile" #header>
          <div class="mobile-header">
            <span>{{ t("markdownEditor.title") }}</span>
            <div class="mobile-header-buttons">
              <n-button circle quaternary @click="closeDrawer">
                <template #icon>
                  <n-icon :size="20">
                    <X />
                  </n-icon>
                </template>
              </n-button>
              <n-button
                circle
                quaternary
                type="primary"
                @click="() => confirmEdit(true)"
              >
                <template #icon>
                  <n-icon :size="20">
                    <Check />
                  </n-icon>
                </template>
              </n-button>
            </div>
          </div>
        </template>
        <n-card
          class="wang-editor-container"
          :class="{ 'mobile-editor': isMobile }"
          :style="wangEditorStyles"
          content-style="padding: 0; display: flex; flex-direction: column; min-height: 0;"
        >
          <Toolbar
            v-if="!isMobile"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            mode="default"
          />
          <div
            :style="{
              overflow: 'auto',
              borderTop: !isMobile
                ? `1px solid ${themeVars.borderColor}`
                : 'none',
              flex: 1,
            }"
          >
            <Editor
              :defaultConfig="editorConfig"
              :mode="isMobile ? 'simple' : 'default'"
              class="wang-editor-textarea"
              @onCreated="handleEditorCreated"
              @onChange="handleEditorChange"
            />
          </div>
          <Toolbar
            v-if="isMobile"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            mode="simple"
            :style="{ borderTop: `1px solid ${themeVars.borderColor}` }"
          />
        </n-card>

        <!-- Desktop: Bottom buttons -->
        <template v-if="!isMobile" #footer>
          <div class="drawer-footer">
            <n-button @click="closeDrawer">Cancel</n-button>
            <n-button type="primary" @click="() => confirmEdit(true)"
              >Confirm</n-button
            >
          </div>
        </template>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style>
.wang-editor-container .w-e-bar-item-menus-container > .w-e-bar-item > button {
  width: 100%;
  justify-content: start;
}

.wang-editor-container .w-e-bar-item > button {
  border-radius: 2px;
  transition: all 0.1s;
}

div .n-drawer-body-content-wrapper {
  padding: 0 !important;
}
</style>

<style>
/* Force the toolbar to be a row */
div[data-purpose="wang-editor-mobile"] .w-e-toolbar {
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
}

/* Hide buggy tool tip */
div[data-purpose="wang-editor-mobile"] .w-e-bar-item > button::before,
div[data-purpose="wang-editor-mobile"] .w-e-bar-item > button::after {
  visibility: hidden !important;
}

/* Fix dropdown menu positioning on mobile */
div[data-purpose="wang-editor-mobile"] .w-e-bar-item-menus-container {
  /* Force menus to stay within viewport */
  position: fixed !important;
  left: 8px !important;
  right: 8px !important;
  bottom: 52px !important; /* Position above the toolbar */
  top: auto !important;
  max-width: calc(100vw - 16px) !important;
  width: calc(100vw - 16px) !important;
  transform: none !important;
}

/* Fix color picker and other drop panels */
div[data-purpose="wang-editor-mobile"] .w-e-drop-panel {
  position: fixed !important;
  left: 8px !important;
  right: 8px !important;
  bottom: 52px !important;
  top: auto !important;
  max-width: calc(100vw - 16px) !important;
  transform: none !important;
}

/* Fix select dropdowns (header select, etc.) */
div[data-purpose="wang-editor-mobile"] .w-e-select-list {
  position: fixed !important;
  left: 8px !important;
  right: 8px !important;
  bottom: 52px !important;
  top: auto !important;
  max-width: calc(100vw - 16px) !important;
}

/* Ensure menu items are properly styled */
div[data-purpose="wang-editor-mobile"]
  .w-e-bar-item-menus-container
  .w-e-bar-item {
  width: 100%;
}
</style>

<!--
<h1><strong>Head 1</strong></h1>
<h2><strong>Head 2</strong></h2>
<h3><strong>Head 3</strong></h3>
<h4>Head 4</h4>
<h5>Head 5</h5>
<blockquote>
    <p>Quote</p>
</blockquote>
<p><strong>Bold</strong></p>
<p><em>Italic</em></p>
<p>&lt;u&gt;Underline&lt;/u&gt;</p>
<p><s>struch through</s></p>
<p><code>code</code></p>
<p>&lt;span style=&quot;color:rgb(231, 95, 51)&quot;&gt;Color&lt;/span&gt;</p>
<p>&lt;span style=&quot;background-color:rgb(245, 219, 77)&quot;&gt;Highlight&lt;/span&gt;</p>
<ul>
    <li>Unordered List Item</li>
    <li>Unordered List Item</li>
</ul>
<ol>
    <li>Ordered List Item 1</li>
    <li>Ordered List Item 2</li>
</ol>
<ul class="contains-task-list">
    <li class="task-list-item enabled"><input class="task-list-item-checkbox" type="checkbox"> TODO Item 1</li>
    <li class="task-list-item enabled"><input class="task-list-item-checkbox" type="checkbox"> TODO Item 2</li>
</ul>
<p><a href="https://www.google.com">Google</a></p>


<h1><strong>Head 1</strong></h1>
<h2><strong>Head 2</strong></h2>
<h3><strong>Head 3</strong></h3>
<h4>Head 4</h4>
<h5>Head 5</h5>
<p><br></p>
<blockquote>Quote</blockquote>
<p><br></p>
<p><strong>Bold</strong></p>
<p><em>Italic</em></p>
<p><u>Underline</u></p>
<p><s>struch through</s></p>
<p><code>code</code></p>
<p><span style="color: rgb(231, 95, 51);">Color</span></p>
<p><span style="background-color: rgb(245, 219, 77);">Highlight</span></p>
<p><br></p>
<p><br></p>
<ul>
    <li>Unordered List Item</li>
    <li>Unordered List Item</li>
</ul>
<ol>
    <li>Ordered List Item 1</li>
    <li>Ordered List Item 2</li>
</ol>
<div data-w-e-type="todo"><input type="checkbox" disabled>TODO Item 1</div>
<div data-w-e-type="todo"><input type="checkbox" disabled>TODO Item 2</div>
<p><br></p>
<p> <a href="https://www.google.com" target="_blank">Google</a> </p>
<p><br></p>
-->

<style scoped>
.markdown-editor {
  width: 100%;
}

.wang-editor-toolbar {
  overflow: visible;
}

.editor-content {
  width: 100%;
}

.markdown-preview {
  padding: 8px;
  border-radius: 4px;
  min-height: 52px;
  cursor: pointer;
  overflow: auto;
}

/* Wang Editor styles */
.wang-editor-container {
  display: flex;
  gap: 8px;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.wang-editor-textarea {
  height: 100%;
  overflow-y: auto;
}

.mobile-header-buttons {
  display: flex;
  gap: 8px;
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.drawer-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
