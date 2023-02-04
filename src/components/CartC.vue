<template>
  <div class="p-3 bg-white">
    <ul class="list-unstyled" style="width: 350px" v-if="cartList.length>0">
      <li class="p-2 border-bottom" v-for="(item, key) in cartList" :key="'item.title' + key">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex">
            <img :src="item.product.imageUrl" class="me-3" style="width: 70px; height: 70px" alt="">
            <div>
              <h4 class="fw-bold h6 text-secondary">{{ item.product.title }}</h4>
              <p class="mb-0 fs-6 text-success" style="white-space: nowrap;">{{ item.qty }}{{ item.product.unit }} * {{ `NT$${item.product.price}` }} = {{ `NT$${item.qty * item.product.price}` }}</p>
              {{ item.id }}
            </div>
          </div>
          <button type="button" class="border-0 bg-white" @click="delProductFromCart(item.id)" ><font-awesome-icon icon="fa-solid fa-trash" class="trashcan text-secondary"/></button>
        </div>
      </li>
      <li class="d-flex justify-content-center">
        <button type="button" class="btn btn-secondary mt-3">進入購物車</button>
      </li>
    </ul>
    <div class="d-flex flex-column align-items-center" style="width: 350px" v-else>
      <p>購物車中還沒有商品喔!!!</p>
      <router-link to="/userboard/productList" class="btn btn-secondary">進入商品列表</router-link>
    </div>
  </div>
</template>

<style>
.trashcan {
  transition: .2s;
}

.trashcan:hover {
  font-size: 18px;
  transition: .2s;
}
</style>

<script>
export default {
  data () {
    return {
      cartList: [],
      tempProduct: {},
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  inject: ['pushMessageState'],
  methods: {
    getCart () {
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
      console.log(id)
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.getCart()
          }
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
