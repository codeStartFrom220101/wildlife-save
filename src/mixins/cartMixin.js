export default {
  methods: {
    addToCart (product, qty = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = product.id
      const cart = {
        product_id: product.id,
        qty: qty
      }
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.pushMessageState(res, `${product.title ? `"${product.title}"` : ''}放入購物車`)
          this.status.loadingItem = ''
          this.getCartData()
        })
    },
    getCartData () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.cartList = res.data.data.carts
          }
        })
    },
    delProductFromCart (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(api)
        .then((res) => {
          console.log(res)
          this.getCartData()
        })
    }
  }
}
