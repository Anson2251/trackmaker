import type { Store } from "./types";
import TauriStore from "./tauri-store";
import IndexedDBStore from "./indexed-db";

const instance: Store = __TAURI_ENVIRONMENT__
	? (new TauriStore("user-data.json"))
	: (new IndexedDBStore("user-data-db", "user-data"));

export const storeSet: typeof instance.set = instance.set.bind(instance);
export const storeGet: typeof instance.get = instance.get.bind(instance);
export const storeSave: typeof instance.save = instance.save.bind(instance);
export const storeInit: typeof instance.init = instance.init.bind(instance);
export const storeExportToJson: typeof instance.exportToJson = instance.exportToJson.bind(instance);
