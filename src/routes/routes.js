import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Detalles from '../pages/Detalles.vue'


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detalles/:id',
    component: Detalles
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
