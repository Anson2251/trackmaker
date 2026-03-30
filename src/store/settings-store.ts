import { defineStore } from 'pinia';
import { storageGet, storageSet, storageSave } from '../libs/storage';
import { ref, watch } from 'vue';
import { defaultSettings, getUserFacingSettings } from '@/libs/default-settings';
import type { Settings } from '@/libs/settings-types';

export type { Settings };

const EARLY_STORAGE_KEY = 'trackmaker_settings';

export const useSettingsStore = defineStore('settings', () => {
    const settings = ref<Settings>({ ...defaultSettings });

    async function init() {
        const saved = await storageGet<Settings>('settings');
        if (saved) {
            settings.value = { ...settings.value, ...saved };
        }
        // Also sync from localStorage for early access
        syncToLocalStorage();
    }

    async function save() {
        await storageSet('settings', JSON.parse(JSON.stringify(settings.value)));
        await storageSave();
        syncToLocalStorage();
    }

    // Sync settings to localStorage for early access before store initialization
    function syncToLocalStorage() {
        try {
            localStorage.setItem(EARLY_STORAGE_KEY, JSON.stringify(settings.value));
        } catch {
            // Silently fail if localStorage is unavailable
        }
    }

    // Reset all advanced settings to defaults (keep user-facing settings)
    function resetAdvancedSettings() {
        const userSettings = Object.fromEntries(
            getUserFacingSettings().map((setting) => [setting.key, settings.value[setting.key]])
        ) as Partial<Settings>;
        settings.value = {
            ...defaultSettings,
            ...userSettings,
        };
    }

    // Reset a specific setting to default
    function resetSetting(key: keyof Settings) {
        const defaults: Settings = defaultSettings;
        const current = settings.value as Settings;
        (current as Record<string, unknown>)[key] = defaults[key];
        settings.value = { ...current };
    }

    watch(settings, () => {
        syncToLocalStorage();
        void save();
    }, { deep: true })

    return { settings, init, resetAdvancedSettings, resetSetting };
});
