import { defineStore } from 'pinia';
import { storeGet, storeSet, storeSave } from '../libs/store';
import { computed, ref } from 'vue';
import { cloneDeep } from 'lodash-es';

interface Settings {
    theme: 'light' | 'dark' | 'system';
}

export const useSettingsStore = defineStore('settings', () => {
    const settings = ref({} as Settings);

    async function init() {
        const saved = await storeGet<Settings>('settings');
        settings.value = saved || { theme: 'system' };
    }

    async function save() {
        await storeSet('settings', cloneDeep(settings.value));
        await storeSave();
    }

    const theme = computed({
        get: () => settings.value.theme,
        set: (theme: Settings['theme']) => {
            settings.value.theme = theme;
            save()
        }
    })
    
    return { settings, init, theme };
});
