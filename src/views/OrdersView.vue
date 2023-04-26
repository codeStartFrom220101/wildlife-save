<template>
  <LoadingOverlay :active="isLoading">
    <div class="loadingio-spinner-ripple-o01nobacpbk">
      <div class="ldio-0zlqpdibb6ki">
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">購買時間</th>
        <th width="120">Email</th>
        <th width="200">購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in orders" :key="item[key]">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td>
          {{ item.products }}
        </td>
        <td>
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
          <span class="text-success" v-if="item.is_paid">已付款</span>
          <span class="text-success" v-else>未付款</span>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">檢視</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
  <DelModal ref="delModal" :item="tempOrder" @del-item="delProduct"></DelModal>
</template>

<script>
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/PaginationC.vue'

export default {
  components: {
    DelModal,
    Pagination
  },
  data () {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isNew: false,
      isLoading: false
    }
  },
  inject: ['pushMessageState'],
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.orders = res.data.orders
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempOrder = {}
      } else {
        this.tempOrder = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempOrder = item
      const productComponent = this.$refs.productModal
      // 新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: this.tempOrder })
        .then((res) => {
          this.getOrders()
          if (this.isNew) {
            this.pushMessageState(res, `新增優惠卷${this.tempOrder.title ? `"${this.tempOrder.title}"` : ''}`)
          } else {
            this.pushMessageState(res, `編輯產品"${this.tempOrder.title}"`)
          }
        })
      productComponent.hideModal()
    },
    openDelModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempOrder.id}`
      this.$http.delete(api)
        .then(res => {
          this.pushMessageState(res, `刪除產品"${this.tempOrder.title}"`)
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getOrders()
        })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
