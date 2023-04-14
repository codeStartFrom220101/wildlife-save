<template>
  <div>
    <ul class="steps">
      <li class="step step--incomplete step--inactive" :class="{'step--active': nowPage === 'cart', 'step--complete': pageCount > 1}">
        <span class="step__icon"></span>
        <span class="step__label">購物車</span>
      </li>
      <li class="step step--incomplete step--inactive" :class="{'step--active': nowPage === 'order', 'step--complete': pageCount > 2}">
        <span class="step__icon"></span>
        <span class="step__label">填寫資料</span>
      </li>
      <li class="step step--incomplete step--inactive" :class="{'step--active': nowPage === 'checkout', 'step--complete': pageCount > 3}">
        <span class="step__icon"></span>
        <span class="step__label">確認訂單</span>
      </li>
      <li class="step step--incomplete step--inactive" :class="{'step--active': nowPage === 'finished', 'step--complete': pageCount > 4}">
        <span class="step__icon"></span>
        <span class="step__label">完成</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import cartStore from '@/stores/cartStore'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(cartStore, ['nowPage', 'pageCount'])
  }
}
</script>
