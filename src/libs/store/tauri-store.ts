import { load, type Store } from '@tauri-apps/plugin-store';
import type { Store as IStore } from "./types";

export class TauriStore implements IStore {
	private store: Store | null = null;
	private initialised = false;

	constructor(private storePath: string) {
		this.init();
	}

	async init(): Promise<void> {
		if (this.initialised) return Promise.resolve();
		this.store = await load(this.storePath, { autoSave: false });
	}

	async set(key: string, value: unknown): Promise<void> {
		if (!this.store) return Promise.reject("Tauri store not initialised");
		try {
			await this.store.set(key, value);
		}
		catch {
			return Promise.reject('Failed to set value');
		}
	}

	async get<T>(key: string): Promise<T | null> {
		if (!this.store) return Promise.reject("Tauri store not initialised");
		try {
			const value = (await this.store.get<T>(key) as T);
			return value;
		}
		catch {
			return Promise.reject('Failed to get value');
		}
	}

	async save(): Promise<void> {
		if (!this.store) return Promise.reject("Tauri store not initialised");
		try {
			await this.store.save();
		}
		catch {
			return Promise.reject('Failed to save store');
		}
	}

	async exportToJson(): Promise<string> {
		try {
			if (!this.store) return Promise.reject("Tauri store not initialised");
			const keys = await this.store.keys();
			const data: Record<string, unknown> = {};

			for (const key of keys) {
				const value = await this.store.get(key);
				data[key] = value;
			}

			return JSON.stringify(data, null, 2);
		}
		catch {
			return Promise.reject('Failed to export data to JSON');
		}
	}
}

export default TauriStore;
