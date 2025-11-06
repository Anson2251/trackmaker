<script lang="ts" setup>
import { MglCustomControl } from "@indoorequal/vue-maplibre-gl";
import { NIcon } from "naive-ui";
import { BuildingCommunity } from "@vicons/tabler";

interface Props {
  isShowingBuildingLayer: boolean;
}

interface Emits {
  (e: 'toggle'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const toggleBuildingLayer = () => {
  emit('toggle');
};
</script>

<template>
  <mgl-custom-control position="top-left">
    <button
      :class="[
        'btn-control',
        { active: isShowingBuildingLayer },
      ]"
      @click="toggleBuildingLayer"
    >
      <n-icon :size="20">
        <BuildingCommunity />
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
</style>
