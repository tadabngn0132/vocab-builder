import { createRouter, createWebHistory } from 'vue-router'
import Words from '../views/Words.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/words'
    },
    {
      path: '/words',
      name: 'words',
      component: Words,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
  ],
})

export default router
