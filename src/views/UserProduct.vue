<template>
  <div class="container">
    <div class="row justify-content-center" style="margin-top: 80px;">
      <div class="col-md-4">
        <img :src="product.imageUrl" alt="" class="img-fluid">
      </div>
      <div class="col-md-4">
        <div>
          <h2 class="fw-bold">{{ product.title }}</h2>
          <p class="mb-0 fs-4">產品描述</p>
          <div class="text-success">{{ product.description }}</div>
          <div v-if="product.category === '衣服'">
            <span>尺寸: </span>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
              <label class="form-check-label" for="exampleRadios1">
                S
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
              <label class="form-check-label" for="exampleRadios2">
                M
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
              <label class="form-check-label" for="exampleRadios3">
                L
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
              <label class="form-check-label" for="exampleRadios3">
                XL
              </label>
            </div>
          </div>
          <div class="d-flex mt-3">
            <div class="fs-5">NT {{ product.price }}</div>
            <button type="button" @click="addToCart(product.id)" class="btn btn-warning px-3 d-block ms-auto" style="width: 150px">
              <div  v-if="!status.loadingItem">
                <font-awesome-icon icon="fa-solid fa-cart-plus"/>
                加入購物車
              </div>
              <div class="spinner-border spinner-border-sm text-success" role="status" v-else>
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-3"></div>
      <div class="col-md-3"></div>
      <div class="col-md-3"></div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      status: {
        loadingItem: ''
      }
    }
  },
  inject: ['pushMessageState'],
  props: ['id'],
  methods: {
    getProduct (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product
          }
        })
    },
    addToCart (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      console.log(cart)
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.pushMessageState(res, `${this.product.title ? `"${this.product.title}"` : ''}放入購物車`)
          this.status.loadingItem = ''
        })
    }
  },
  created () {
    console.log(this.id)
    this.getProduct(this.id)
  }
}
</script>
