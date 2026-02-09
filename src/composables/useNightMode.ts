import { watch, onMounted } from 'vue';
import { useSettingsStore } from '@/store/settings-store';

const NIGHT_MODE_FILTER = 'sepia(1) hue-rotate(-40deg) brightness(0.8) contrast(1.2) saturate(3)';

/**
 * Composable to manage night mode CSS filter on the HTML element
 * Applies a red tint filter when night mode is enabled
 */
export function useNightMode() {
    const settings = useSettingsStore();

    const applyNightMode = (enabled: boolean) => {
        const html = document.documentElement;
        if (enabled) {
            html.style.filter = NIGHT_MODE_FILTER;
        } else {
            html.style.filter = '';
        }
    };

    onMounted(() => {
        applyNightMode(settings.settings.nightMode);
    });

    watch(() => settings.settings.nightMode, (enabled) => {
        applyNightMode(enabled);
    });

    return {
        isNightMode: () => settings.settings.nightMode,
    };
}
