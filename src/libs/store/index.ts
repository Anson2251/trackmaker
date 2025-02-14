import type { Store } from "./types";
import TauriStore from "./tauri-store";
import IndexedDBStore from "./indexed-db";

const instance: Store = __IN_TAURI__
	? (new TauriStore("user-data.json"))
	: (new IndexedDBStore("user-data-db", "user-data"));

export const storeSet = instance.set.bind(instance);
export const storeGet = instance.get.bind(instance);
export const storeSave = instance.save.bind(instance);
export const storeInit = instance.init.bind(instance);
export const storeExportToJson = instance.exportToJson.bind(instance);
