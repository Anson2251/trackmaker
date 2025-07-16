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
				console.time("Geolocation update service initialisation");
				await updateService.build(() => new Promise<boolean | void>(async (resolve) => {
					if (__TAURI_ENVIRONMENT__) {
						resolve() // need to implement the permissions request logic for tauri environment
						return;
					}
					if (confirm("This app requires access to your location to track your movements.")) {
						navigator.geolocation.getCurrentPosition( // request the permission
							() => resolve(true),
							(e) => {
								alert("Fail to initialise geolocation module.\nError Message: " + e.message)
								resolve()
							},
							{
								enableHighAccuracy: false,
								timeout: 30000,
								maximumAge: Infinity
							}
						);
					}
					else resolve();
				}));
				console.timeEnd("Geolocation update service initialisation");
				console.time("Geolocation update service start");
				await updateService.start();
				console.timeEnd("Geolocation update service start");

				(window as any).UpdateService = updateService; // expose for debugging purposes
				console.log("Geolocation module initialized successfully");
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
