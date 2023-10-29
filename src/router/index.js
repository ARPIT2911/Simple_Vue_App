// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/components/ProductList.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue'),
  },
  {
    path: '/cart',
    name: 'CartItems',
    component: () => import('@/components/cart.vue'),
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
