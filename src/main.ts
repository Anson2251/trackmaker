import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { loadModules } from './utils/loadModules'
import { modules } from './config'

const app = createApp(App);
app.use(createPinia());
app.use(router);

loadModules(modules, "trackmaker", 30000).then(() => {
    app.mount('#app');
    document.getElementById("splash")?.remove();
}).catch((e) => {
    console.error(e);
    const msg = e.toString();
    console.log(msg);
    if (String(msg).toLowerCase().includes("timeout")){
        document.getElementById("splash")?.remove();
        document.getElementById("timeout")!.style.display = "flex"
    }
    else{
        document.getElementById("splash")?.remove();
        document.getElementById("error-msg")!.innerHTML = msg
        document.getElementById("loading-error")!.style.display = "flex"
    }
});
