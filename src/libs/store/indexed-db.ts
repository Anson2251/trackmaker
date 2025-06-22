import type { Store } from "./types";

export class IndexedDBStore implements Store {
	private db: IDBDatabase | null = null;
	private initialised = false;

	constructor(private dbName: string, private storeName: string) {
		this.init();
	}

	init(): Promise<void> {
		if (this.initialised) return Promise.resolve();
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName, 1);

			request.onupgradeneeded = (event) => {
				const db = (event.target as IDBOpenDBRequest).result;
				if (!db.objectStoreNames.contains(this.storeName)) {
					db.createObjectStore(this.storeName);
				}
			};

			request.onsuccess = (event) => {
				this.db = (event.target as IDBOpenDBRequest).result;
				resolve();
			};

			request.onerror = (event) => {
				reject((event.target as IDBOpenDBRequest).error);
			};
		});
	}

	async set(key: string, value: any): Promise<void> {
		if (!this.db) {
			return Promise.reject('Database not initialized');
		}

		return new Promise((resolve, reject) => {
			if (!this.db) {
				return Promise.reject('Database has not been initialised');
			}
			const transaction = this.db.transaction(this.storeName, 'readwrite');
			const store = transaction.objectStore(this.storeName);
			const request = store.put(value, key);

			request.onsuccess = () => resolve();
			request.onerror = () => reject('Failed to set value');
		});
	}

	async get<T>(key: string): Promise<T | null> {
		if (!this.db) {
			return Promise.reject('Database not initialized');
		}

		return new Promise((resolve, reject) => {
			if (!this.db) {
				reject('Database has not been initialised');
				return;
			}
			const transaction = this.db.transaction(this.storeName, 'readonly');
			const store = transaction.objectStore(this.storeName);
			const request = store.get(key);

			request.onsuccess = () => resolve(request.result as T | null);
			request.onerror = () => reject('Failed to get value');
		});
	}

	async save(): Promise<void> {
		// IndexedDB automatically saves changes, so this is a no-op.
	}

	async exportToJson(): Promise<string> {
		if (!this.db) {
			return Promise.reject('Database not initialized');
		}

		return new Promise((resolve, reject) => {
			if (!this.db) {
				return Promise.reject('Database has not been initialised');
			}
			const transaction = this.db.transaction(this.storeName, 'readonly');
			const store = transaction.objectStore(this.storeName);
			const request = store.getAll();

			request.onsuccess = () => {
				const data = request.result.reduce((acc, item, index) => {
					acc[index] = item; // Use index as key or use a unique key if available
					return acc;
				}, {} as Record<string, any>);
				resolve(JSON.stringify(data, null, 2));
			};

			request.onerror = () => {
				reject('Failed to export data to JSON');
			};
		});
	}
}

export default IndexedDBStore;
