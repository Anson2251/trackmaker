import './assets/main.css';

import { createApp } from 'vue';
import SplashScreen from './SplashScreen.vue';
import { createPinia } from 'pinia';

const splashScreen = createApp(SplashScreen);
splashScreen.use(createPinia())
splashScreen.mount('#splash');
window.splashScreen = splashScreen;
