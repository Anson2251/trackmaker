import { createRouter, createMemoryHistory } from 'vue-router';

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        timeout: 5000
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('@/views/EditView.vue'),
      meta: {
        timeout: 5000
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/exp-maplibregljs',
      name: 'Preview - MapLibreGL JS',
      component: () => import('@/views/MapLibreGLJSPreview.vue'),
    }
  ]
});

export default router;
