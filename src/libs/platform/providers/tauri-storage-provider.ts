/**
 * Tauri storage provider implementation
 */

import { Result, ok, err } from 'neverthrow';
import { load, type Store } from '@tauri-apps/plugin-store';
import type { IStorageProvider } from '../types';
import { StorageError, StorageErrorCode } from '../errors';

export class TauriStorageProvider implements IStorageProvider {
    private store: Store | null = null;
    private initialized = false;
    private storePath: string;

    constructor(storePath: string = 'user-data.json') {
        this.storePath = storePath;
    }

    async init(): Promise<Result<void, StorageError>> {
        if (this.initialized) {
            return ok(undefined);
        }

        try {
            // The Tauri store API expects defaults parameter
            this.store = await load(this.storePath, {
                autoSave: false,
                defaults: {} // Provide empty defaults object
            });
            this.initialized = true;
            return ok(undefined);
        } catch (error) {
            return err(new StorageError(
                'Failed to initialize Tauri storage',
                StorageErrorCode.INITIALIZATION_FAILED,
                error as Error
            ));
        }
    }

    async set<T>(key: string, value: T): Promise<Result<void, StorageError>> {
        if (!this.store) {
            return err(new StorageError('Tauri store not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            await this.store.set(key, value);
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
        if (!this.store) {
            return err(new StorageError('Tauri store not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            const value = await this.store.get<T>(key);
            return ok(value ?? null);
        } catch (error) {
            return err(new StorageError(
                `Failed to get value for key: ${key}`,
                StorageErrorCode.GET_FAILED,
                error as Error
            ));
        }
    }

    async save(): Promise<Result<void, StorageError>> {
        if (!this.store) {
            return err(new StorageError('Tauri store not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            await this.store.save();
            return ok(undefined);
        } catch (error) {
            return err(new StorageError(
                'Failed to save store',
                StorageErrorCode.SAVE_FAILED,
                error as Error
            ));
        }
    }

    async exportToJson(): Promise<Result<string, StorageError>> {
        if (!this.store) {
            return err(new StorageError('Tauri store not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            const keys = await this.store.keys();
            const data: Record<string, unknown> = {};

            for (const key of keys) {
                const value = await this.store.get(key);
                data[key] = value;
            }

            return ok(JSON.stringify(data, null, 2));
        } catch (error) {
            return err(new StorageError(
                'Failed to export data to JSON',
                StorageErrorCode.EXPORT_FAILED,
                error as Error
            ));
        }
    }

    async clear(): Promise<Result<void, StorageError>> {
        if (!this.store) {
            return err(new StorageError('Tauri store not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            const keys = await this.store.keys();
            for (const key of keys) {
                await this.store.delete(key);
            }
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
        if (!this.store) {
            return err(new StorageError('Tauri store not initialized', StorageErrorCode.NOT_INITIALIZED));
        }

        try {
            await this.store.delete(key);
            return ok(undefined);
        } catch (error) {
            return err(new StorageError(
                `Failed to remove key: ${key}`,
                StorageErrorCode.REMOVE_FAILED,
                error as Error
            ));
        }
    }
}

