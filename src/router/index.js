import { createRouter, createWebHistory } from 'vue-router'
import V_Main from '@/views/V_Main/index.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: V_Main,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
