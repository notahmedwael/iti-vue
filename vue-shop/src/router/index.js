import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeVue.vue'
import ProductView from '../views/ProductView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/product/:id', name: 'product-detail', component: () => import('../views/ProductView.vue') },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
  ]
})

export default router
