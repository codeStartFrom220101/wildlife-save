<template>
  <h2 class="h3 text-black text-center py-2 mb-0">感謝您的購買</h2>
  <p class="text-center">您的訂單 "{{ order.id }}" <span :class="{'text-danger':!order.is_paid}">{{ order.is_paid ? '已完成付款' : '還未完成付款' }}</span></p>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'

export default {
  computed: {
    ...mapState(cartStore, ['order'])
  },
  methods: {
    ...mapActions(cartStore, ['getCartPage', 'getOrder']),
    finishedOrder (isPaid) {
      if (isPaid) {
        setTimeout(() => {
          this.getNowPage('finishOrder')
        }, 1500)
      }
    }
  },
  created () {
    const id = this.$route.params.orderId
    this.getOrder(id)
    this.getCartPage('finished')
    this.finishedOrder(this.order.is_paid)
  }
}
</script>
