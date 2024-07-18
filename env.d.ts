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

declare const __BING_MAPS_KEY__: string;
declare const __RELEASE_MODE__: boolean;
