import TrackerView from '@/views/TrackerView.vue';
import AboutView from '@/views/AboutView.vue';
import SettingsView from '@/views/SettingsView.vue';

import { createRouter, createMemoryHistory } from 'vue-router';

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/tracker"
    },
    {
      path: '/tracker',
      name: 'Tracker',
      // build to a single js file if in tauri environment
      component: (__TAURI_ENVIRONMENT__ ? TrackerView : () => import('@/views/TrackerView.vue')), 
      meta: {
        timeout: 5000
      }
    },
    {
      path: '/about',
      name: 'about',
      component: (__TAURI_ENVIRONMENT__ ? AboutView : () => import('@/views/AboutView.vue')),
    },
    {
      path: '/settings',
      name: 'settings',
      component: (__TAURI_ENVIRONMENT__ ? SettingsView : () => import('@/views/SettingsView.vue')),
    },
  ]
});

export default router;
