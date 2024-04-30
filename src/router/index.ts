import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import EditView from '@/views/EditView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        timeout: 5000
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView,
      meta: {
        timeout: 5000
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      // if lazy load is needed, switch to () => import
    }
  ]
})

export default router
