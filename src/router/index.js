import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/detail/:game_id',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/warehouse',
    name: 'Warehouse',
    component: () => import('../views/Warehouse.vue')
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component: () => import('../views/Recharge.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: '/fakeubi/',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === 'shop' || to.path === '/detail' || to.path === '/cart' || to.path === '/warehouse' || to.path === '/recharge') {
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) {
      alert('请先登录！')
      return next('/login')
    }
  }
  next()
})

export default router