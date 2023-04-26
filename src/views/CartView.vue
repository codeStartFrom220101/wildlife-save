<template>
  <LoadingOverlay :active="isLoading">
    <div class="loadingio-spinner-ripple-o01nobacpbk">
      <div class="ldio-0zlqpdibb6ki">
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay>
  <h2 class="h3 text-black text-center py-2 mb-0">購物車清單</h2>
  <table class="table table-striped mb-0 text-center">
    <thead>
      <tr v-if="cartList.length > 0">
        <th colspan="2">商品</th>
        <th scope="col">商品單價</th>
        <th scope="col">數量</th>
        <th scope="col">單品項總價</th>
        <th scope="col">刪除</th>
      </tr>
      <tr v-else>
        <th colspan="6" class="text-center">
          <p class="mb-1">您還沒加入任何商品</p>
          <router-link to="/userboard/productList" class="btn btn-primary">點此手刀去選購~</router-link>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product) in cartList" :key="product.id">
        <td colspan="2">{{ product.product.title }}</td>
        <td><p class="mb-0">NT$ {{ $filters.currency(product.product.price) }}</p></td>
        <td class="d-flex justify-content-center align-items-center h-100">
          <div class="input-group input-group-sm" style="width: 50px;">
            <input type="number" min="1" class="form-control" v-model.number="product.qty" @change="updateCart(product)">
          </div>
        </td>
        <td>{{ $filters.currency(product.final_total) }}</td>
        <td>
          <button type="button" class="btn btn-outline-secondary fs-8 px-2 py-1" @click="delProductFromCart(product.id)">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
      <tr>
        <td colspan="6" class="py-5">
          <div class="d-flex flex-column align-items-center">
            <h3 class="h4 mb-2 text-center">購買須知</h3>
            <p class="mb-0 text-start fs-6">
              ※ 您購買商品之所得將全數用於動物救助行動中。<br>
              ※ 請確認所填寫的資料是否正確，下單後未提供修改付款方式服務。<br>
              ※ 因拍攝略有色差，圖片僅供參考，顏色請以實際收到商品為準。<br>
              ※ 本店商品目前只供應台灣地區，只提供宅配到府。<br>
              ※ 目前支援貨到付款、超商付款。<br>
              ※ 本店商品為統一會於付款後7個工作日內出貨(不含假日)。</p>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="6" class="text-end pe-5"><button type="button" class="btn btn-primary" @click="goToCheck">建立訂單</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'

export default {
  data () {
    return {
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['cartList'])
  },
  inject: ['emitter'],
  methods: {
    ...mapActions(cartStore, ['getCartPage', 'addToCart', 'getCartData', 'delProductFromCart', 'updateCart']),
    goToCheck () {
      this.cartList.length > 0 ? this.$router.push('check') : alert('您的購物車沒有商品~')
    }
  },
  created () {
    this.getCartData()
    this.getCartPage()
  }
}
</script>
