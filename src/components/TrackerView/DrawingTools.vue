<script lang="ts" setup>
import { MglCustomControl } from "@indoorequal/vue-maplibre-gl";
import { NIcon, NTooltip } from "naive-ui";
import {
  ArrowBack,
  ArrowForward,
  Trash,
} from "@vicons/tabler";
import { useI18n } from "vue-i18n";
import { useKeyboardShortcut } from "@/composables/useKeyboardShortcut";
import { DRAW_MODES, type DrawModeConfig } from "@/composables/useTerraDraw";

const { t } = useI18n();

interface Props {
  activeDrawMethod: string;
  canUndo?: boolean;
  canRedo?: boolean;
  drawerModes?: DrawModeConfig[];
}

interface Emits {
  (e: "setDrawMode", mode: string): void;
  (e: "undo"): void;
  (e: "redo"): void;
  (e: "clearAll"): void;
}

const props = withDefaults(defineProps<Props>(), {
  canUndo: false,
  canRedo: false,
  drawerModes: () => DRAW_MODES,
});

const emit = defineEmits<Emits>();

// Use provided drawerModes or fallback to centralized config
const modes = props.drawerModes;

const handleToolClick = (mode: DrawModeConfig) => {
  if (props.activeDrawMethod === mode.name) {
    emit("setDrawMode", "select");
  } else {
    emit("setDrawMode", mode.name);
  }
};

const handleUndo = () => {
  emit("undo");
};

const handleRedo = () => {
  emit("redo");
};

const handleClearAll = () => {
  emit("clearAll");
};

// Undo: Ctrl+Z (Win/Linux) or Cmd+Z (Mac)
useKeyboardShortcut(
  {
    mac: { key: "z", modifiers: { meta: true } },
    win: { key: "z", modifiers: { ctrl: true } },
    linux: { key: "z", modifiers: { ctrl: true } },
  },
  () => {
    if (props.canUndo) emit("undo");
  }
);

// Redo: Ctrl+R (Win) or Cmd+Shift+Z (Mac) or Ctrl+Shift+Z (Linux)
useKeyboardShortcut(
  {
    mac: { key: "z", modifiers: { meta: true, shift: true } },
    win: { key: "r", modifiers: { ctrl: true } },
    linux: { key: "z", modifiers: { ctrl: true, shift: true } },
  },
  () => {
    if (props.canRedo) emit("redo");
  }
);
</script>

<template>
  <mgl-custom-control position="top-right">
    <!-- Draw mode buttons -->
    <template v-for="mode in modes" :key="mode.name">
      <n-tooltip trigger="hover" placement="left">
        <template #trigger>
          <button
            :class="['btn-tool', { active: activeDrawMethod === mode.name }, { 'btn-delete': mode.name === 'delete' }]"
            :title="t(`trackerView.terraDrawTools.${mode.label}`)"
            @click="handleToolClick(mode)"
          >
            <n-icon :size="20">
              <component :is="mode.icon" class="btn-icon" />
            </n-icon>
          </button>
        </template>
        {{ t(`trackerView.terraDrawTools.${mode.label}`) }}
      </n-tooltip>
    </template>

    <!-- Undo button -->
    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <button
          :class="['btn-tool', 'btn-history', { disabled: !canUndo }]"
          :disabled="!canUndo"
          :title="t('trackerView.terraDrawTools.undo')"
          @click="handleUndo"
        >
          <n-icon :size="20">
            <ArrowBack class="btn-icon" />
          </n-icon>
        </button>
      </template>
      {{ t("trackerView.terraDrawTools.undo") }}
    </n-tooltip>

    <!-- Redo button -->
    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <button
          :class="['btn-tool', 'btn-history', { disabled: !canRedo }]"
          :disabled="!canRedo"
          :title="t('trackerView.terraDrawTools.redo')"
          @click="handleRedo"
        >
          <n-icon :size="20">
            <ArrowForward class="btn-icon" />
          </n-icon>
        </button>
      </template>
      {{ t("trackerView.terraDrawTools.redo") }}
    </n-tooltip>

    <!-- Clear All button -->
    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <button
          :class="['btn-tool', 'btn-clear']"
          :title="t('trackerView.terraDrawTools.clearAll')"
          @click="handleClearAll"
        >
          <n-icon :size="20">
            <Trash class="btn-icon" />
          </n-icon>
        </button>
      </template>
      {{ t("trackerView.terraDrawTools.clearAll") }}
    </n-tooltip>
  </mgl-custom-control>
</template>

<style scoped>

.btn-tool.active {
  background: #dbeafe !important;
}

.btn-tool.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-tool.disabled:hover {
  background: rgba(255, 255, 255, 0.95);
}

.btn-clear {
  color: #ef4444;
}

.btn-clear .btn-icon {
  stroke: #ef4444;
  color: #ef4444;
}

.btn-clear:hover {
  color: #fff;
  background-color: #ef4444 !important;
}

.btn-clear:hover .btn-icon {
  stroke: #fff;
  color: #fff;
}

.btn-icon {
  stroke: #475569;
  color: #475569;
}

.btn-tool.active .btn-icon {
  stroke: #2563eb;
  color: #2563eb;
}

.btn-delete {
  color: #ef4444;
}

.btn-delete .btn-icon {
  stroke: #ef4444;
  color: #ef4444;
}

.btn-tool.active.btn-delete {
  background: #fef2f2 !important;
}

</style>
