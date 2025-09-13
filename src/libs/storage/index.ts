/**
 * Platform-based storage implementation using the platform abstraction layer
 */

import { getPlatformServices } from '@/libs/platform';
import type { IStorageProvider } from '@/libs/platform';

/**
 * Storage interface that provides a clean API for data persistence
 */
export interface Storage {
    set<T>(key: string, value: T): Promise<void>;
    get<T>(key: string): Promise<T | null>;
    save(): Promise<void>;
    init(): Promise<void>;
    exportToJson(): Promise<string>;
    clear(): Promise<void>;
    remove(key: string): Promise<void>;
}

/**
 * Platform-based storage that automatically selects the appropriate storage provider
 */
class PlatformStorage implements Storage {
    private storageProvider: IStorageProvider | null = null;
    private initialized = false;

    async init(): Promise<void> {
        if (this.initialized) {
            return;
        }

        const platformServicesResult = getPlatformServices();
        if (platformServicesResult.isErr()) {
            throw platformServicesResult.error;
        }

        const storageProviderResult = platformServicesResult.value.getStorage();
        if (storageProviderResult.isErr()) {
            throw storageProviderResult.error;
        }

        this.storageProvider = storageProviderResult.value;

        const initResult = await this.storageProvider.init();
        if (initResult.isErr()) {
            throw initResult.error;
        }

        this.initialized = true;
    }

    async set<T>(key: string, value: T): Promise<void> {
        if (!this.initialized) {
            await this.init();
        }

        if (!this.storageProvider) {
            throw new Error('Storage provider not initialized');
        }

        const result = await this.storageProvider.set(key, value);
        if (result.isErr()) {
            throw result.error;
        }
    }

    async get<T>(key: string): Promise<T | null> {
        if (!this.initialized) {
            await this.init();
        }

        if (!this.storageProvider) {
            throw new Error('Storage provider not initialized');
        }

        const result = await this.storageProvider.get<T>(key);
        if (result.isErr()) {
            throw result.error;
        }

        return result.value;
    }

    async save(): Promise<void> {
        if (!this.initialized) {
            await this.init();
        }

        if (!this.storageProvider) {
            throw new Error('Storage provider not initialized');
        }

        const result = await this.storageProvider.save();
        if (result.isErr()) {
            throw result.error;
        }
    }

    async exportToJson(): Promise<string> {
        if (!this.initialized) {
            await this.init();
        }

        if (!this.storageProvider) {
            throw new Error('Storage provider not initialized');
        }

        const result = await this.storageProvider.exportToJson();
        if (result.isErr()) {
            throw result.error;
        }

        return result.value;
    }

    async clear(): Promise<void> {
        if (!this.initialized) {
            await this.init();
        }

        if (!this.storageProvider) {
            throw new Error('Storage provider not initialized');
        }

        const result = await this.storageProvider.clear();
        if (result.isErr()) {
            throw result.error;
        }
    }

    async remove(key: string): Promise<void> {
        if (!this.initialized) {
            await this.init();
        }

        if (!this.storageProvider) {
            throw new Error('Storage provider not initialized');
        }

        const result = await this.storageProvider.remove(key);
        if (result.isErr()) {
            throw result.error;
        }
    }
}

// Create singleton instance
const storageInstance = new PlatformStorage();

// Export convenience functions
export const storageSet = storageInstance.set.bind(storageInstance);
export const storageGet = storageInstance.get.bind(storageInstance);
export const storageSave = storageInstance.save.bind(storageInstance);
export const storageInit = storageInstance.init.bind(storageInstance);
export const storageExportToJson = storageInstance.exportToJson.bind(storageInstance);
export const storageClear = storageInstance.clear.bind(storageInstance);
export const storageRemove = storageInstance.remove.bind(storageInstance);

// Export the storage instance and interface
export { storageInstance as storage };
export default storageInstance;
