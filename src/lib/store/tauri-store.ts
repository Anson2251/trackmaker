import { load, type Store } from '@tauri-apps/plugin-store';
import type { Store as IStore } from "./types";
import { Result, ok, err } from 'neverthrow';

export class TauriStore implements IStore {
	private store: Store | null = null;

	constructor(private storePath: string) {
		this.init();
	}

	private async init(): Promise<void> {
		this.store = await load(this.storePath, { autoSave: false });
	}

	async set(key: string, value: any): Promise<Result<void, Error>> {
		if(!this.store) return err(new Error("Tauri store not initialised"));
		try {
			await this.store.set(key, value);
			return ok(undefined);
		} catch (error) {
			return err(new Error('Failed to set value'));
		}
	}

	async get<T>(key: string): Promise<Result<T | null, Error>> {
		if(!this.store) return err(new Error("Tauri store not initialised"));
		try {
			const value = (await this.store.get<T>(key) as T);
			return ok(value);
		} catch (error) {
			return err(new Error('Failed to get value'));
		}
	}

	async save(): Promise<Result<void, Error>> {
		if(!this.store) return err(new Error("Tauri store not initialised"));
		try {
			await this.store.save();
			return ok(undefined);
		} catch (error) {
			return err(new Error('Failed to save store'));
		}
	}
}

export default TauriStore;
