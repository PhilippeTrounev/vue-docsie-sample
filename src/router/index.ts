import { createRouter, createWebHistory } from 'vue-router'
import PublicDocs from '../views/PublicDocs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: PublicDocs,
    },
    {
      path: '/secure',
      name: 'secure',
      component: () => import('../views/SecureDocs.vue'),
    },
    {
      path: '/inapp-help',
      name: 'inapp-help',
      component: () => import('../views/InAppHelp.vue'),
    },
  ],
})

export default router
