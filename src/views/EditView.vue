<reference path="../../node_modules/@types/bingmaps/index.d.ts" />

<script lang="ts">
import BingMap from '../components/BingMap/BingMap.vue'
import bingMapsPushPins from '@/components/BingMap/plugins/pushPin';
import bingMapCustomizedTouchpadBehavior from '@/components/BingMap/plugins/customizedTouchpadBehavior';
import bingMapsDrawing from '@/components/BingMap/plugins/drawingMap';

import { SaveOutline } from '@vicons/ionicons5';

import {
	NSplit,
	NConfigProvider,
	NIcon,
	darkTheme
} from 'naive-ui';

export default {
	components: {
		BingMap,
		NSplit,
		NIcon,
		SaveOutline,
		NConfigProvider,
	},
	setup() {
		const plugins = [
			bingMapsDrawing,
			bingMapsPushPins,
			bingMapCustomizedTouchpadBehavior
		]

		const toolTipBarItems = [
			{
				title: "saving",
				icon: SaveOutline,
				callback: () => { }
			}
		]

		return {
			plugins,
			Microsoft,

			toolTipBarItems,

			//theme
			darkTheme
		}
	}
}
</script>

<template>
	<n-config-provider style="height: 100%; width: 100%;" :theme="darkTheme">
		<n-split direction="horizontal" :max="0.8" :min="0.5" :size-default="0.7">
			<template #1>
				<div class="map-container">
					<BingMap :type="Microsoft.Maps.MapTypeId.road" :lite-mode="true" :plugin="plugins" />
				</div>
			</template>
			<template #2>
				<div class="edit-layout">
					<div class="tool-tip">
						<div v-for="(item, index) in toolTipBarItems" :key="index" @click="item.callback">
							<n-icon size="24">
								<component :is="item.icon" />
							</n-icon>
						</div>
					</div>

					<div class="draft-container"></div>
				</div>
			</template>
		</n-split>
	</n-config-provider>
</template>

<style>
.split-view {
	width: 100%;
	height: 100%;
}

.map-container {
	width: calc(100% - 16px);
	height: calc(100% - 16px);

	margin: 8px;
}

.edit-layout {
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 3em auto;

	grid-gap: 8px;

	width: calc(100% - 16px);
	height: calc(100% - 16px);

	margin: 8px;
}

.tool-tip {
	grid-row: 1 / 1;
	grid-column: 1 / 1;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: left;
	align-items: center;

	border-radius: 8px;
	background-color: var(--color-background-mute);
	border: 1px solid var(--color-border);

	padding-left: 8px;
}

.tool-tip>div {
	height: 2em;
	width: 2em;

	padding: 4px;
}

.draft-container {
	grid-row: 2 / 2;
	grid-column: 1 / 1;

	border-radius: 8px;
	background-color: var(--color-background-mute);
	border: 1px solid var(--color-border);
}
</style>
