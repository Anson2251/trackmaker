/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';

    const componentOptions: DefineComponent<{}, {}, any>;
    export default componentOptions;
}

declare const __BING_MAPS_KEY__: string;
declare const __RELEASE_MODE__: boolean;
