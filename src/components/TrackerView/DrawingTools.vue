<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MglCustomControl } from "@indoorequal/vue-maplibre-gl";
import { NIcon, NTooltip } from "naive-ui";
import {
  MapPin,
  Line,
  HandFinger,
  ArrowBack,
  ArrowForward,
  Trash,
} from "@vicons/tabler";
import {
  TerraDrawPointMode,
  TerraDrawSelectMode,
  TerraDrawLineStringMode,
} from "terra-draw";
import type { Component } from "vue";
import { useI18n } from "vue-i18n";
import { useKeyboardShortcut } from "@/composables/useKeyboardShortcut";

const { t } = useI18n();

type DrawModes = {
  mode: any;
  name: string;
  icon: Component;
};

const drawerModes: DrawModes[] = [
  {
    mode: new TerraDrawPointMode(),
    name: t("trackerView.terraDrawTools.point"),
    icon: MapPin,
  },
  {
    mode: new TerraDrawLineStringMode(),
    name: t("trackerView.terraDrawTools.line"),
    icon: Line,
  },
  {
    mode: new TerraDrawSelectMode({
      allowManualDeselection: true,
      flags: {
        point: { feature: { draggable: true } },
        polygon: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
        linestring: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
        freehand: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
        circle: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
        rectangle: {
          feature: {
            draggable: true,
            coordinates: { midpoints: true, draggable: true, deletable: true },
          },
        },
      },
    }),
    name: t("trackerView.terraDrawTools.select"),
    icon: HandFinger,
  },
];

interface Props {
  activeDrawMethod: string;
  canUndo?: boolean;
  canRedo?: boolean;
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
});

const emit = defineEmits<Emits>();

const handleToolClick = (mode: DrawModes) => {
  // TerraDraw mode objects have a 'mode' property that returns the mode name string (e.g., 'point', 'linestring', 'select')
  const modeName = mode.mode.mode;
  if (props.activeDrawMethod === modeName) {
    emit("setDrawMode", "select");
  } else {
    emit("setDrawMode", modeName);
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
  <!-- Point tool -->
  <mgl-custom-control position="top-right">
    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <button
          :class="[
            'btn-tool',
            { active: activeDrawMethod === drawerModes[0].mode.mode },
          ]"
          :title="drawerModes[0].name"
          @click="handleToolClick(drawerModes[0])"
        >
          <n-icon :size="20">
            <component :is="drawerModes[0].icon" class="btn-icon" />
          </n-icon>
        </button>
      </template>
      {{ drawerModes[0].name }}
    </n-tooltip>

    <!-- Line tool -->
    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <button
          :class="[
            'btn-tool',
            { active: activeDrawMethod === drawerModes[1].mode.mode },
          ]"
          :title="drawerModes[1].name"
          @click="handleToolClick(drawerModes[1])"
        >
          <n-icon :size="20">
            <component :is="drawerModes[1].icon" class="btn-icon" />
          </n-icon>
        </button>
      </template>
      {{ drawerModes[1].name }}
    </n-tooltip>

    <!-- Select tool -->
    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <button
          :class="[
            'btn-tool',
            { active: activeDrawMethod === drawerModes[2].mode.mode },
          ]"
          :title="drawerModes[2].name"
          @click="handleToolClick(drawerModes[2])"
        >
          <n-icon :size="20">
            <component :is="drawerModes[2].icon" class="btn-icon" />
          </n-icon>
        </button>
      </template>
      {{ drawerModes[2].name }}
    </n-tooltip>

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
</style>
