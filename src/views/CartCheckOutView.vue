<template>
  <h2 class="h3 text-black text-center py-2 mb-0">確認訂單</h2>
  <div class="row g-3 justify-content-center">
    <div class="col-md-6">
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">下單日期：</th>
            <td>{{ timeChange(order.create_at) }}</td>
          </tr>
          <tr>
            <th scope="row">訂單編號：</th>
            <td>{{ order.id }}</td>
          </tr>
          <tr>
            <th scope="row">顧客姓名：</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th scope="row">聯絡電話：</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th scope="row">電子郵件：</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th scope="row">地址：</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th scope="row">是否付款：</th>
            <td :class="{ 'text-seccess' : order.is_paid, 'text-danger': !order.is_paid }">{{ order.is_paid ? '已付款' : '未付款'}}</td>
          </tr>
          <tr>
            <th scope="row">訂單金額：</th>
            <td>
              <div class="d-flex justify-content-between">
                <p class="mb-0">NT$ {{ order.total }}</p>
                <i class="bi bi-caret-up p-1 toggle-btn" :class="{'active': status.open}" @click="status.open = !status.open" data-bs-toggle="collapse" data-bs-target="#collapseOrder"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="collapse px-2" id="collapseOrder">
        <h3 class="h6 col-12 fw-bold">購買商品</h3>
        <div class="row fw-normal">
          <div class="col-6">
            <p>商品詳情</p>
          </div>
          <div class="col-3">
            <p class="text-center">數量</p>
          </div>
          <div class="col-3">
            <p class="text-center">小計</p>
          </div>
          <div class="row g-2 mb-2 fs-8 fs-md-7" v-for="(product) in order.products" :key="product.id">
            <div class="col-6">
              <div class="d-flex align-items-center justify-content-around">
                <img :src="product.product.imageUrl" class="object-fit-cover orderImg" alt="">
                <h4 class="fs-8 fs-md-7 mb-0">{{ product.product.title }}</h4>
              </div>
            </div>
            <div class="col-3">
              <div class="d-flex align-items-center justify-content-center h-100">
                <span>{{ product.qty}}</span>
              </div>
            </div>
            <div class="col-3">
              <div class="d-flex align-items-center justify-content-center h-100">
                <span>NT$ 999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end pb-3 px-2">
        <button type="button" class="btn btn-primary" @click="payOrder(order.id)">確認付款</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toggle-btn {
  cursor: pointer;
  transition: all .5s;
  transform-origin: 50% 55%;
}

.toggle-btn.active {
  transform: rotate(-180deg);
}

.orderImg {
  height: 100px;
  width: 100px;
}

@media (max-width: 768px) {
  .orderImg{
    height: 60px;
    width: 60px;
  }
}
</style>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'

export default {
  data () {
    return {
      status: {
        open: false
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['order'])
  },
  methods: {
    ...mapActions(cartStore, ['getCartPage', 'getOrder']),
    timeChange (time) {
      const orderTime = new Date(time * 1000)
      console.log(orderTime)
      const year = orderTime.getFullYear()
      const month = orderTime.getMonth()
      const date = orderTime.getDate()
      const hour = orderTime.getHours()
      const min = orderTime.getMinutes() >= 10 ? orderTime.getMinutes() : `0${orderTime.getMinutes()}`
      const sec = orderTime.getSeconds() >= 10 ? orderTime.getSeconds() : `0${orderTime.getSeconds()}`
      return `${year}/${month}/${date} ${hour}:${min}:${sec}`
    },
    payOrder (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${id}`
      this.$http.post(api)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.getOrder(id)
            this.$router.push(`/userboard/cartpage/finished/${id}`)
          }
        })
    }
  },
  created () {
    const id = this.$route.params.orderId
    this.getOrder(id)
    this.getCartPage('checkout')
  }
}

</script>
