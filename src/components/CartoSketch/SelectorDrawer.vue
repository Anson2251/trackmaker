<script setup lang="ts">
import { NDrawer, NDrawerContent, NButtonGroup, NButton, NIcon, type DrawerPlacement } from 'naive-ui';

import { CloseCircleOutline, AddCircleOutline } from '@vicons/ionicons5';
import { Upload } from '@vicons/tabler';

import CartoSketch from '@/utils/cartosketch';
import SketchSelector from './SketchSelector.vue';

import { watch, ref } from "vue"
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
		type: Array<CartoSketch.CartoSketchStates>,
		default: () => []
	}
});

const buttonGroupItems = [
	{
		title: "import",
		icon: Upload,
		callback: () => { emit('import') },
		secondary: true,
		type: "default"
	},
	{
		title: "new",
		icon: AddCircleOutline,
		callback: () => emit('new'),
		secondary: true,
		type: "default"
	},
	{
		title: "close",
		icon: CloseCircleOutline,
		callback: () => { activeSelectorFlag.value = false; },
		secondary: true,
		type: "error"
	},
]

const activeSelectorFlag = ref(false);
const drawerSelectorPlacement = ref<DrawerPlacement>('right');

watch(props, () => {
	activeSelectorFlag.value = props.active;
	drawerSelectorPlacement.value = props.placement as DrawerPlacement;
}, { deep: true });

watch(activeSelectorFlag, () => {
	emit('activeStateSync', activeSelectorFlag.value);
});


const emit = defineEmits(['new', 'activeStateSync', 'remove', 'select', 'import']);
</script>

<template>
	<n-drawer v-model:show="activeSelectorFlag" :width="502" :placement="drawerSelectorPlacement" :auto-focus="false">
		<n-drawer-content title="CartoSketch Library">
			<template #footer>
				<n-button-group>
					<n-button v-for="item in buttonGroupItems" 
						:secondary="item.secondary" 
						:key="item.title"
						:type="(item.type as Type)"
						@click="item.callback"
					>
						<template #icon>
							<n-icon>
								<component :is="item.icon" />
							</n-icon>
						</template>
					</n-button>
				</n-button-group>
			</template>
			<SketchSelector :list="list" @remove="(id: string) => emit('remove', id)"
				@select="(id: string) => emit('select', id)" />
		</n-drawer-content>
	</n-drawer>
</template>