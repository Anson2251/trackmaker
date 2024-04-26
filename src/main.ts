import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { loadModules } from './script/loadModules'
import { modules } from './config'

const app = createApp(App);
app.use(createPinia());
app.use(router);

loadModules(modules, "trackmaker", 30000).then(() => {
    app.mount('#app');
    document.getElementById("splash")?.remove();
}).catch((e) => {
    console.log(e);
    document.getElementById("splash")?.remove();
    document.getElementById("timeout")!.style.display = "block"
});
