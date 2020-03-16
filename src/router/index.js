import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/components/pages/AppHome')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/components/pages/AppLogin')
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import('@/components/pages/AppRegister')
  },
]
// router.beforeEach();
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router;