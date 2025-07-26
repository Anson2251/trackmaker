/* eslint-disable no-async-promise-executor */
import type { ModuleItem } from "@/utils/load-modules";

import creditInfo from "@/assets/credits.json";
import dataProviderInfo from "@/assets/data-provider.json";
import { UpdateService } from './libs/geolocation/update-service';
import { storeInit } from "@/libs/store";


export const modules: ModuleItem[] = [
	{
		name: "trackmaker",
		displayName: "TrackMaker",
		moduleInit: () => new Promise(resolve => resolve()),
		dependencies: ["geolocation", "storage"]
	},
	{
		name: "storage",
		displayName: "Storage",
		moduleInit: storeInit
	},
	{
		name: "geolocation",
		displayName: "Geolocation Service",
		moduleInit: async () => {
			try {
				const updateService = new UpdateService();
				console.time("Geolocation update service initialise");
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
				console.timeEnd("Geolocation update service initialise");
				console.time("Geolocation update service start");
				await updateService.start();
				console.timeEnd("Geolocation update service start");

				(window as Window & { UpdateService?: UpdateService }).UpdateService = updateService; // expose for debugging purposes
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
