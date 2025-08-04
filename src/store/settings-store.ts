import { defineStore } from 'pinia';
import { storeGet, storeSet, storeSave } from '../libs/store';
import { ref, watch } from 'vue';

export type Settings = {
    theme: 'light' | 'dark' | 'system';
    interfaceLanguage: string;
    mapLanguage: string;
    watchCompatibilityMode: boolean;
    geolocationCorrection: boolean;
}

export const useSettingsStore = defineStore('settings', () => {
    const settings = ref<Settings>({
        theme: 'system',
        interfaceLanguage: 'en',
        mapLanguage: 'interface',
        watchCompatibilityMode: true,
        geolocationCorrection: false,
    });

    async function init() {
        const saved = await storeGet<Settings>('settings');
        if (saved) {
            settings.value = { ...settings.value, ...saved };
        }
    }

    async function save() {
        await storeSet('settings', JSON.parse(JSON.stringify(settings.value)));
        await storeSave();
    }

    watch(settings, save, { deep: true })

    return { settings, init };
});
