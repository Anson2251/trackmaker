<script setup lang="ts">
import { NDrawer, NDrawerContent, NButtonGroup, NButton, NIcon, type DrawerPlacement } from 'naive-ui';

import { Minus, Plus } from '@vicons/tabler';
import { Upload } from '@vicons/tabler';

import SketchSelector from './SketchSelector.vue';

import { watch, ref } from "vue";
import type { Type } from 'naive-ui/es/button/src/interface';

const props = defineProps({
	active: {
		type: Boolean,
		default: () => false
	},
	placement: {
		type: String,
		default: () => 'right'
	},
	list: {
		type: Array<{name: string, id: string}>,
		default: () => []
	}
});

const buttonGroupItems = [
	{
		title: "import",
		icon: Upload,
		callback: () => { emit('import'); },
		secondary: true,
		iconSize: 17,
		type: "default"
	},
	{
		title: "new",
		icon: Plus,
		callback: () => emit('new'),
		secondary: true,
		iconSize: 20,
		type: "default"
	},
	{
		title: "close",
		icon: Minus,
		callback: () => { activeSelectorFlag.value = false; },
		secondary: true,
		iconSize: 20,
		type: "error"
	},
];

const activeSelectorFlag = ref(false);
const drawerSelectorPlacement = ref<DrawerPlacement>(props.placement as DrawerPlacement);

watch(props, () => {
	activeSelectorFlag.value = props.active;
	drawerSelectorPlacement.value = props.placement as DrawerPlacement;
}, { deep: true });

watch(activeSelectorFlag, () => {
	emit('update:active', activeSelectorFlag.value);
});


const emit = defineEmits(['new', 'update:active', 'remove', 'select', 'import']);

</script>

<template>
  <n-drawer
    v-model:show="activeSelectorFlag"
    :width="502"
    :placement="drawerSelectorPlacement"
    :auto-focus="false"
  >
    <n-drawer-content title="CartoSketch Library">
      <template #footer>
        <n-button-group>
          <n-button
            v-for="item in buttonGroupItems"
            :key="item.title"
            :secondary="item.secondary"
            :type="(item.type as Type)"
            :title="item.title"
            @click="item.callback"
          >
            <template #icon>
              <n-icon :size="item.iconSize">
                <component :is="item.icon" />
              </n-icon>
            </template>
          </n-button>
        </n-button-group>
      </template>
      <SketchSelector
        :list="list"
        @remove="(id: string) => emit('remove', id)"
        @select="(id: string) => emit('select', id)"
      />
    </n-drawer-content>
  </n-drawer>
</template>
