import './assets/main.css'

import { createApp, onMounted } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import bingmaps from './script/map'

bingmaps.initMapScript().then(() => {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)

    app.mount('#app')
    document.getElementById("splash")?.remove()
})
