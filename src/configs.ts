import type { moduleItem } from "@/utils/load-modules";

import creditInfo from "@/assets/credits.json";
import dataProviderInfo from "@/assets/data-provider.json";

export const modules: moduleItem[] = [
	{
		name: "trackmaker",
		moduleInit: () => new Promise(resolve => resolve()),
		dependencies: []
	}
];

export const mapTilerKey = __MAPTILER_KEY__;

export type CreditItem = {
	id: string
	name: string
	description: string
	url: string
	homepage?: string
	licenseType?: string
	license?: string
}

export type DataProviderItem = {
	id: string
	name: string
	url: string
	license?: string
}

export const dataProviders: DataProviderItem[] = dataProviderInfo;

export const credits: CreditItem[] = creditInfo;
