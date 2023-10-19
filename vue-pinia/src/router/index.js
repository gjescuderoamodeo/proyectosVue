import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vista1',
      name: 'vista1',
      component: HomeView
    },
    {
      path: '/vista2',
      name: 'vista2',
      component: HomeView
    },
    {
      path: '/vista3',
      name: 'vista3',
      component: HomeView
    },
  ]
})

export default router
