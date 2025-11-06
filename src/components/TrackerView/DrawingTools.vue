<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MglCustomControl } from "@indoorequal/vue-maplibre-gl";
import { NIcon } from "naive-ui";
import { MapPin, Line, HandFinger } from "@vicons/tabler";
import {
  TerraDrawPointMode,
  TerraDrawSelectMode,
  TerraDrawLineStringMode,
} from "terra-draw";
import type { TerraDrawBaseDrawMode } from "node_modules/terra-draw/dist/extend";
import type { Component } from "vue";
import { useI18n } from "vue-i18n";
import PlatformInfo from "@/utils/platform";

const { t } = useI18n();
const platform = new PlatformInfo();
const isMobile = platform.isMobile;
const devMode = !__RELEASE_MODE__;

type DrawModes = {
  mode: TerraDrawBaseDrawMode<any>;
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
}

interface Emits {
  (e: 'update:activeDrawMethod', value: string): void;
  (e: 'setDrawMode', mode: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const handleToolClick = (mode: TerraDrawBaseDrawMode<any>) => {
  if (props.activeDrawMethod === mode.mode) {
    emit('setDrawMode', 'select');
    emit('update:activeDrawMethod', 'select');
  } else {
    emit('update:activeDrawMethod', mode.mode);
    emit('setDrawMode', mode.mode);
  }
};
</script>

<template>
  <mgl-custom-control
    v-if="!isMobile || devMode"
    position="top-right"
  >
    <button
      v-for="item in drawerModes"
      :key="item.name"
      :class="[
        'btn-control',
        { active: item.mode.mode === activeDrawMethod },
      ]"
      :title="item.name"
      @click="handleToolClick(item.mode)"
    >
      <n-icon :size="20">
        <component
          :is="item.icon"
          class="btn-default"
        />
      </n-icon>
    </button>
  </mgl-custom-control>
</template>

<style scoped>
.btn-control {
  display: flex !important;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease, border-radius 0.2s ease;
}

.btn-control.active {
  background-color: #bfdbfe;
  border-radius: 0.125rem;
}

.btn-default {
  stroke: #292524;
  color: #292524;
}
</style>
