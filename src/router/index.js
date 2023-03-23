import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsView.vue')
      }
    ]
  },
  {
    path: '/userboard',
    name: 'userboard',
    component: () => import('../views/UserboardView.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/UserHome.vue')
      },
      {
        path: 'productList',
        component: () => import('../views/UserProductList.vue')
      },
      {
        path: 'productList/:productId',
        component: () => import('../views/UserProduct.vue'),
        props: (route) => {
          return {
            id: route.params.productId
          }
        }
      },
      {
        path: 'cartpage',
        component: () => import('../views/CartPageView.vue'),
        children: [
          {
            path: 'cart',
            name: 'cart',
            component: () => import('../views/CartView.vue')
          },
          {
            path: 'check',
            name: 'check',
            component: () => import('../views/CartOrder.vue')
          },
          {
            path: 'checkout/:orderId',
            name: 'checkout',
            component: () => import('../views/CheckOutView.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
