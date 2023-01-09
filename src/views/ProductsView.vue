<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="text-end mt-2">
    <button class="btn btn-primary" type="button" @click="openModal(true)">新增產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-success" v-else>啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
  <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/PaginationC.vue'

export default {
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  inject: ['pushMessageState'],
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      const productComponent = this.$refs.productModal
      // 新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          this.getProducts()
          if (this.isNew) {
            this.pushMessageState(res, `新增優惠卷${this.tempProduct.title ? `"${this.tempProduct.title}"` : ''}`)
          } else {
            this.pushMessageState(res, `編輯產品"${this.tempProduct.title}"`)
          }
        })
      productComponent.hideModal()
    },
    openDelModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(api)
        .then(res => {
          this.pushMessageState(res, `刪除產品"${this.tempProduct.title}"`)
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getProducts()
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
