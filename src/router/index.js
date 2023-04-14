import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
        path: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'productList',
        component: () => import('../views/UserProductList.vue')
      },
      {
        path: 'donate',
        component: () => import('../views/DonateView.vue')
      },
      {
        path: 'animals',
        component: () => import('../views/AnimalsView.vue')
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
            component: () => import('../views/CartCheckOutView.vue')
          },
          {
            path: 'finished/:orderId',
            name: 'finished',
            component: () => import('../views/CartOrderFinished.vue')
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
