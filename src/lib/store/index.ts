import type { Store } from "./types";
import TauriStore from "./tauri-store";
import IndexedDBStore from "./indexed-db";

const instance: Store = __IN_TAURI__
	? (new TauriStore("user-data.json"))
	: (new IndexedDBStore("user-data-db", "user-data"));

export const set = instance.set.bind(instance);
export const get = instance.get.bind(instance);
export const save = instance.save.bind(instance);
