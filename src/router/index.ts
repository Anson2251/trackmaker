import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import EditView from '@/views/EditView.vue';
import MapLibreGLJSPreview from '@/views/MapLibreGLJSPreview.vue';

import { createRouter, createMemoryHistory } from 'vue-router';

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // build to a single js file if in tauri environment
      component: (__TAURI_ENVIRONMENT__ ? HomeView : () => import('@/views/HomeView.vue')), 
      meta: {
        timeout: 5000
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: (__TAURI_ENVIRONMENT__ ? EditView : () => import('@/views/EditView.vue')),
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
      path: '/exp-maplibregljs',
      name: 'Preview - MapLibreGL JS',
      component: (__TAURI_ENVIRONMENT__ ? MapLibreGLJSPreview : () => import('@/views/MapLibreGLJSPreview.vue')),
    }
  ]
});

export default router;
