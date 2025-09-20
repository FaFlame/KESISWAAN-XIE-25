import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/login', component: Login },
  // nanti tambah: { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
