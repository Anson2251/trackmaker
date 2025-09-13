/**
 * Web storage provider implementation using IndexedDB
 */

import { Result, ok, err } from 'neverthrow';
import { cloneDeep } from 'lodash-es';
import type { IStorageProvider } from '../types';
import { StorageError, StorageErrorCode } from '../errors';

export class WebStorageProvider implements IStorageProvider {
    private db: IDBDatabase | null = null;
    private initialized = false;
    private dbName: string;
    private storeName: string;

    constructor(dbName: string = 'trackmaker-db', storeName: string = 'user-data') {
        this.dbName = dbName;
        this.storeName = storeName;
    }

    async init(): Promise<Result<void, StorageError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        try {
            this.db = await this.openDatabase();
            this.initialized = true;
            return ok(undefined);
        } catch (error) {
            return err(new StorageError(
                'Failed to initialize Web storage',
                StorageErrorCode.INITIALIZATION_FAILED,
                error as Error
            ));
        }
    }

    private openDatabase(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName);
                }
            };

            request.onsuccess = (event) => {
                resolve((event.target as IDBOpenDBRequest).result);
            };

            request.onerror = (event) => {
                reject((event.target as IDBOpenDBRequest).error);
            };
        });
    }

    async set<T>(key: string, value: T): Promise<Result<void, StorageError>> {
        if (!this.db) {
            return err(new StorageError('Database not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            await this.executeTransaction('readwrite', (store) => {
                return new Promise<void>((resolve, reject) => {
                    const request = store.put(cloneDeep(value), key);
                    request.onsuccess = () => resolve();
                    request.onerror = () => reject(new Error('Failed to set value'));
                });
            });
            return ok(undefined);
        } catch (error) {
            return err(new StorageError(
                `Failed to set value for key: ${key}`,
                StorageErrorCode.SET_FAILED,
                error as Error
            ));
        }
    }

    async get<T>(key: string): Promise<Result<T | null, StorageError>> {
        if (!this.db) {
            return err(new StorageError('Database not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            const result = await this.executeTransaction('readonly', (store) => {
                return new Promise<T | null>((resolve, reject) => {
                    const request = store.get(key);
                    request.onsuccess = () => resolve(request.result as T | null);
                    request.onerror = () => reject(new Error('Failed to get value'));
                });
            });
            return ok(result);
        } catch (error) {
            return err(new StorageError(
                `Failed to get value for key: ${key}`,
                StorageErrorCode.GET_FAILED,
                error as Error
            ));
        }
    }

    async save(): Promise<Result<void, StorageError>> {
        // IndexedDB automatically saves changes, so this is a no-op
        return ok(undefined);
    }

    async exportToJson(): Promise<Result<string, StorageError>> {
        if (!this.db) {
            return err(new StorageError('Database not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            const result = await this.executeTransaction('readonly', (store) => {
                return new Promise<Record<string, unknown>>((resolve, reject) => {
                    const request = store.getAll();
                    request.onsuccess = () => {
                        const data = request.result.reduce((acc, item, index) => {
                            acc[index] = item;
                            return acc;
                        }, {} as Record<string, unknown>);
                        resolve(data);
                    };
                    request.onerror = () => reject(new Error('Failed to export data'));
                });
            });
            return ok(JSON.stringify(result, null, 2));
        } catch (error) {
            return err(new StorageError(
                'Failed to export data to JSON',
                StorageErrorCode.EXPORT_FAILED,
                error as Error
            ));
        }
    }

    async clear(): Promise<Result<void, StorageError>> {
        if (!this.db) {
            return err(new StorageError('Database not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            await this.executeTransaction('readwrite', (store) => {
                return new Promise<void>((resolve, reject) => {
                    const request = store.clear();
                    request.onsuccess = () => resolve();
                    request.onerror = () => reject(new Error('Failed to clear store'));
                });
            });
            return ok(undefined);
        } catch (error) {
            return err(new StorageError(
                'Failed to clear store',
                StorageErrorCode.CLEAR_FAILED,
                error as Error
            ));
        }
    }

    async remove(key: string): Promise<Result<void, StorageError>> {
        if (!this.db) {
            return err(new StorageError('Database not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            await this.executeTransaction('readwrite', (store) => {
                return new Promise<void>((resolve, reject) => {
                    const request = store.delete(key);
                    request.onsuccess = () => resolve();
                    request.onerror = () => reject(new Error('Failed to remove key'));
                });
            });
            return ok(undefined);
        } catch (error) {
            return err(new StorageError(
                `Failed to remove key: ${key}`,
                StorageErrorCode.REMOVE_FAILED,
                error as Error
            ));
        }
    }

    private executeTransaction<T>(
        mode: IDBTransactionMode,
        operation: (store: IDBObjectStore) => Promise<T>
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }

            const transaction = this.db.transaction(this.storeName, mode);
            const store = transaction.objectStore(this.storeName);

            operation(store)
                .then(resolve)
                .catch(reject);

            transaction.onerror = () => {
                reject(new Error('Transaction failed'));
            };
        });
    }
}
