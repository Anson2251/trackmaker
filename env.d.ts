/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';

    const componentOptions: DefineComponent<{}, {}, any>;
    export default componentOptions;
}

declare interface Window {
    /** The count of the map component */
    MapCount: number;
}


declare const __MAPTILER_KEY__: string;

declare const __RELEASE_MODE__: boolean;
declare const __TAURI_ENVIRONMENT__: boolean;
declare const __MOST_RECENT_COMMIT__: string;
