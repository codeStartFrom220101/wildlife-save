<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="product-list-banner"></div>
  <div class="container">
    <div class="list-group list-group-horizontal mt-2 sticky-top text-center" style="top: 70px; white-space: nowrap;">
      <button type="button" class="list-group-item list-group-item-action active">全部產品</button>
      <button type="button" class="list-group-item list-group-item-action" aria-current="true">
        帽子
      </button>
      <button type="button" class="list-group-item list-group-item-action">衣服</button>
      <button type="button" class="list-group-item list-group-item-action">馬克杯</button>
    </div>
    <div class="product-list d-flex flex-wrap justify-content-center">
      <div class="card m-2 position-relative overflow-hidden product" style="width: 18rem;" v-for="(item, key) in productList" :key="key">
        <img :src="item.imageUrl" class="card-img-top" style="height: 300px; object-fit: cover;" :alt="item.title">
        <div class="card-body text-center position-absolute w-100 product-btn d-none d-lg-block">
          <h5 class="card-title text-white">{{ item.title }}</h5>
          <div class="d-flex justify-content-around">
            <a href="#" class="btn btn-warning" @click.prevent="getItem(item.id)">查看更多</a>
            <button type="button" @click="addToCart(item.id, item.title)" :disabled="status.loadingItem === item.id" class="btn btn-warning px-3 d-block ms-auto">
              <font-awesome-icon icon="fa-solid fa-cart-plus" v-if="!status.loadingItem"/>
              <div class="spinner-border spinner-border-sm text-success" role="status" v-else>
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          </div>
        </div>
        <div class="card-body text-center w-100 product-btn d-block d-lg-none">
          <h5 class="card-title">{{ item.title }}</h5>
          <div class="d-flex justify-content-around">
            <a href="#" class="btn btn-warning" @click.prevent="getItem(item.id)">查看更多</a>
            <button type="button" @click="addToCart(item.id, item.title)" :disabled="status.loadingItem === item.id" class="btn btn-warning px-3 d-block ms-auto">
              <font-awesome-icon icon="fa-solid fa-cart-plus"  v-if="!status.loadingItem"/>
              <div class="spinner-border spinner-border-sm text-success" role="status" v-else>
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="height: 150vh;"></div>
</template>

<style>
.product-list-banner {
  background-image: url('@/assets/productList-banner.png');
  background-size: cover;
  background-position: 50% 50%;
  height: 50vh;
  width: 100%;
}

.product-btn {
  bottom: -110px;
  transition: .5s;
  background-color: rgba(0, 0, 0, .3);
}

.product:hover .product-btn {
  bottom: 0px;
  transition: .5s;
}

/* @media (max-width: 768px) {
  .product-btn {
    bottom: 0px;
  }
} */

</style>

<script>

export default {
  data () {
    return {
      productList: [],
      tempProduct: {},
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  inject: ['pushMessageState'],
  methods: {
    getProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.productList = res.data.products
            this.pagination = res.data.pagination
            console.log(this.productList)
          }
        })
    },
    getItem (id) {
      this.$router.push(`/userboard/productList/${id}`)
    },
    addToCart (id, title) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      console.log(cart)
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.pushMessageState(res, `${title ? `"${title}"` : ''}放入購物車`)
          this.status.loadingItem = ''
        })
    }
  },
  created () {
    this.getProducts()
  }
}

</script>
