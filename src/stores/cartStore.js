import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from '@/stores/statusStore'

const status = statusStore()

export default defineStore('cartStore', {
  state: () => ({
    // 購物車四頁資料
    nowPage: '',
    pageCount: 1,
    order: {
      user: {},
      products: {}
    },
    // 購物車列表
    cartList: []
  }),
  actions: {
    getCartPage (page = 'cart') {
      this.nowPage = page
      switch (page) {
        case 'cart':
          this.pageCount = 1
          break
        case 'order':
          this.pageCount = 2
          break
        case 'checkout':
          this.pageCount = 3
          break
        case 'finished':
          this.pageCount = 4
          setTimeout(() => {
            this.pageCount++
          }, 1500)
          break
      }
    },
    getOrder (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`
      axios.get(api)
        .then((res) => {
          const order = res.data.order
          this.order = order
        })
    },
    addToCart (product, qty = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      status.loadingItem = product.id
      const cart = {
        product_id: product.id,
        qty: qty
      }
      axios.post(api, { data: cart })
        .then((res) => {
          // this.pushMessageState(res, `${product.title ? `"${product.title}"` : ''}放入購物車`)
          status.loadingItem = ''
          this.getCartData()
        })
    },
    getCartData () {
      status.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      axios.get(api)
        .then((res) => {
          if (res.data.success) {
            status.isLoading = false
            this.cartList = res.data.data.carts
          }
        })
    },
    delProductFromCart (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      axios.delete(api)
        .then((res) => {
          this.getCartData()
        })
    },
    updateCart (product) {
      status.isLoading = true
      status.loadingItem = product.id
      const cart = {
        product_id: product.product_id,
        qty: product.qty
      }
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${product.id}`
      this.$http.put(api, { data: cart })
        .then(() => {
          status.isLoading = false
          status.loadingItem = ''
          this.getCartData()
        })
    }
  }
})
