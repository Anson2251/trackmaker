import type { moduleItem } from "@/utils/load-modules";

import creditInfo from "@/assets/credits.json";
import dataProviderInfo from "@/assets/data-provider.json";
import { UpdateService } from './libs/geolocation/update-service';

export const modules: moduleItem[] = [
	{
		name: "trackmaker",
		moduleInit: () => new Promise(resolve => resolve()),
		dependencies: ["geolocation"]
	},
	{
		name: "geolocation",
		moduleInit: async () => {
			try {
				const updateService = new UpdateService();
				await updateService.build(() => new Promise<void>((resolve) => {
					if (__TAURI_ENVIRONMENT__) {
						resolve() // need to implement the permissions request logic for tauri environment
						return;
					}
					if (confirm("This app requires access to your location to track your movements.")) navigator.geolocation.getCurrentPosition(() => resolve(), () => resolve(), { enableHighAccuracy: false });
					else resolve();
				}));
				await updateService.start();
				
				(window as any).UpdateService = updateService; // expose for debugging purposes
			}
			catch (error) {
				return Promise.reject(error);
			}
		},
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
