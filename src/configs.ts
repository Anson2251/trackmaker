import type { moduleItem } from "@/utils/load-modules";
import { initMapScript as initBingMaps } from '@/libs/map-backends/bing-maps/bing-map-backend';
import { initBingMapsDrawingModule } from '@/libs/map-backends/bing-maps/plugins/drawing-map';
import { initBingMapsGeojsonModule } from "@/utils/geojson";

import creditInfo from "@/assets/credits.json";

export const modules: moduleItem[] = [
	{
		name: "trackmaker",
		moduleInit: () => new Promise(resolve => resolve()),
		dependencies: ["bingMaps", "bingMapsDrawing"]
	},
	{
		name: "bingMaps",
		moduleInit: initBingMaps
	},
	{
		name: "bingMapsGeojson",
		moduleInit: initBingMapsGeojsonModule,
		dependencies: ["bingMaps"]
	},
	{
		name: "bingMapsDrawing",
		moduleInit: initBingMapsDrawingModule,
		dependencies: ["bingMaps", "bingMapsGeojson"]
	}
];

export const bingMapsKey = __BING_MAPS_KEY__;

export type CreditItem = {
	id: string
	name: string
	description: string
	url: string
	homepage?: string
	license?: string
}

export const credits: CreditItem[] = creditInfo;
