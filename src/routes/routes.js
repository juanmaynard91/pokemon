import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Detalles from '../pages/Detalles.vue'


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: '/detalles/:id',
    name: "detalles",
    component: Detalles,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
