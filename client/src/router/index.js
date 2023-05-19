import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import UserView from '../views/User.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/user/:user',
      name: 'User',
      component: UserView
    },
    
  ]
})

export default router
