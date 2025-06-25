import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from '@/locales';

import App from './App.vue';
import router from './router';

import { loadModules } from './utils/load-modules';
import { modules } from './configs';

import { DeviceOrientationService } from '@/utils/device-orientation-service';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);

loadModules(modules, "trackmaker", 30000, !__RELEASE_MODE__).then(() => {
    DeviceOrientationService.start();
    app.mount('#app');
    document.getElementById("splash")?.remove();
}).catch((e) => {
    console.error("Fail to initialise all the modules");
    console.error(e);
    const msg = String(e.toString());
    if (msg.toLowerCase().includes("timeout")) {
        const trackback = msg.split("Trackback").map(s => s.replace(/((^:\s*)|(,\s*$))/g, ""));
        console.table(trackback.map(t => ({ Trackback: t })), ["Trackback"]);
        document.getElementById("splash")?.remove();
        document.getElementById("timeout")!.style.display = "flex";
    }
    else {
        document.getElementById("splash")?.remove();
        document.getElementById("error-msg")!.innerHTML = msg;
        document.getElementById("loading-error")!.style.display = "flex";
    }
});
