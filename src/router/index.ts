import TrackerView from '@/views/TrackerView.vue';
import SketchCentreView from '@/views/SketchCentreView.vue';
import AboutView from '@/views/AboutView.vue';
import SettingsView from '@/views/SettingsView.vue';
import ApiDetectionView from '@/views/ApiDetectionView.vue';

import { createRouter, createMemoryHistory } from 'vue-router';
import { isTauri } from '@/libs/platform';

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
      component: (isTauri() ? TrackerView : () => import('@/views/TrackerView.vue')),
      meta: {
        timeout: 5000
      }
    },
    {
      path: '/sketch-centre',
      name: 'sketchCentre',
      component: (isTauri() ? SketchCentreView : () => import('@/views/SketchCentreView.vue')),
    },
    {
      path: '/about',
      name: 'about',
      component: (isTauri() ? AboutView : () => import('@/views/AboutView.vue')),
    },
    {
      path: '/settings',
      name: 'settings',
      component: (isTauri() ? SettingsView : () => import('@/views/SettingsView.vue')),
    },
    {
      path: '/api-detection',
      name: 'apiDetection',
      component: (isTauri() ? ApiDetectionView : () => import('@/views/ApiDetectionView.vue')),
    },
  ]
});

export default router;
