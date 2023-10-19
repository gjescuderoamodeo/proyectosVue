import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'vista1',
      component: () => import('../views/Vista1.vue')
    },
    {
      path: '/vista2',
      name: 'vista2',
      component: () => import('../views/Vista2.vue')
    },
    {
      path: '/vista3',
      name: 'vista3',
      component: () => import('../views/Vista3.vue')
    }
  ]
})

export default router
