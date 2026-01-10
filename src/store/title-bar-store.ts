import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useSketchStore } from './sketch-store';

export const useTitleBarStore = defineStore('titleBar', () => {
    const sketchStore = useSketchStore();

    const text = computed(() => {
        if (!sketchStore.currentSketchId) return null;
        const sketch = sketchStore.sketches.find(s => s.id === sketchStore.currentSketchId);
        return sketch?.meta.name || null;
    });

    return {
        text,
    };
});
