/// <reference types="vite/client" />
/// <reference types="src/libs/geolocation/update-service" />
/// <reference types="vue" />

declare module '*.vue' {
    import { DefineComponent} from 'vue';

    const componentOptions: DefineComponent<{}, {}, any>;
    export default componentOptions;
}

declare interface Window {
    UpdateService?: UpdateService,
    splashScreen?: App
}


declare const __MAPTILER_KEY__: string;

declare const __RELEASE_MODE__: boolean;
declare const __TAURI_ENVIRONMENT__: boolean;
declare const __MOST_RECENT_COMMIT__: string;
