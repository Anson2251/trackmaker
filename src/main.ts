import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { loadModules } from './script/loadModules'
import type { moduleItem } from './script/loadModules'

import { initMapScript as initBingMaps } from './components/BingMap/map'
import { initBingMapsDrawingModule } from './components/BingMap/plugins/drawingMap'

const modules: moduleItem[] = [
    {
        name: "bingMaps",
        moduleInit: initBingMaps
    },
    {
        name: "bingMapsDrawing",
        moduleInit: initBingMapsDrawingModule,
        dependencies: ["bingMaps"]
    }
]

loadModules(modules, 2000).then(() => {
    const app = createApp(App);

    app.use(createPinia());
    app.use(router);

    app.mount('#app');
    document.getElementById("splash")?.remove();
}).catch((e) => {
    console.log(e);
    document.getElementById("splash")?.remove();
    document.getElementById("timeout")!.style.display = "block"
});
