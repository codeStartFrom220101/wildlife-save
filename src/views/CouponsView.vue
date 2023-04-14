<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="text-end mt-2">
    <button class="btn btn-primary" type="button" @click="openModal(true)">新增優惠卷</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}</td>
        <td class="text-right">
          {{ $filters.date(item.due_date) }}
        </td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未起用</span>
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
  <CouponsModal ref="couponModal" @update-coupon="updateCoupon" :coupon="tempCoupon"></CouponsModal>
  <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupon"></DelModal>
  <Pagination :pages="pagination" @emit-pages="getCoupons"></Pagination>
</template>

<script>
import CouponsModal from '@/components/CouponsModal.vue'
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/PaginationC.vue'

export default {
  components: {
    CouponsModal,
    DelModal,
    Pagination
  },
  data () {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {
        title: '超級優惠卷',
        is_enabled: 1,
        percent: 100,
        code: ''
      },
      isNew: false,
      isLoading: false
    }
  },
  inject: ['pushMessageState'],
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.coupons = res.data.coupons
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (isNew, item) {
      this.isNew = isNew
      if (!isNew) {
        this.tempCoupon = { ...item }
      } else {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      }
      const couponComponent = this.$refs.couponModal
      couponComponent.showModal()
    },
    updateCoupon (item) {
      this.tempCoupon = item
      const couponComponent = this.$refs.couponModal
      // 新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: this.tempCoupon })
        .then((res) => {
          this.getCoupons()
          if (httpMethod === 'post') {
            this.pushMessageState(res, `新增優惠卷${this.tempCoupon.title ? `"${this.tempCoupon.title}"` : ''}`)
          } else {
            this.pushMessageState(res, `編輯優惠卷"${this.tempCoupon.title}"`)
          }
        })
      couponComponent.hideModal()
    },
    openDelModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delCoupon () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http.delete(api)
        .then(res => {
          this.pushMessageState(res, `刪除優惠卷"${this.tempCoupon.title}"`)
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getCoupons()
        })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
