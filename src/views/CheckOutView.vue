<template>
  <h2 class="h3 text-black text-center py-2 mb-0">確認訂單</h2>
  <div class="row g-3 justify-content-center">
    <div class="col-6">
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">下單日期：</th>
            <td class="text-end">{{ timeChange(order.create_at) }}</td>
          </tr>
          <tr>
            <th scope="row">訂單編號：</th>
            <td class="text-end">{{ order.id }}</td>
          </tr>
          <tr>
            <th scope="row">顧客姓名：</th>
            <td class="text-end">{{ order.user.name }}</td>
          </tr>
          <tr>
            <th scope="row">聯絡電話：</th>
            <td class="text-end">{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th scope="row">電子郵件：</th>
            <td class="text-end">{{ order.user.email }}</td>
          </tr>
          <tr>
            <th scope="row">地址：</th>
            <td class="text-end">{{ order.user.address }}</td>
          </tr>
          <tr>
            <th scope="row">訂單金額：</th>
            <td class="text-end">NT$ {{ order.total }}</td>
          </tr>
          <tr>
            <th colspan="2">
              <h3 class="h6 fw-bold">購買商品</h3>
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
                <div class="col-6">
                  <div class="d-flex align-items-center justify-content-around">
                    <img src="@/assets/617FAE6735A3D1635757671.jpeg" class="w-50" alt="">
                    <h4 class="h6 mb-0"></h4>
                  </div>
                </div>
                <div class="col-3">
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <span>1</span>
                  </div>
                </div>
                <div class="col-3">
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <span>NT$ 999</span>
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {}
    }
  },
  methods: {
    getOrder (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`
      this.$http.get(api)
        .then((res) => {
          const order = res.data.order
          console.log(order)
          this.order = order
        })
    },
    timeChange (time) {
      const orderTime = new Date(time * 1000)
      console.log(orderTime)
      const year = orderTime.getFullYear()
      const month = orderTime.getMonth()
      const date = orderTime.getDate()
      const hour = orderTime.getHours()
      const min = orderTime.getMinutes()
      const sec = orderTime.getSeconds()
      return `${year}/${month}/${date} ${hour}:${min}:${sec}`
    }
  },
  created () {
    const id = this.$route.params.orderId
    this.getOrder(id)
  }
}

</script>
