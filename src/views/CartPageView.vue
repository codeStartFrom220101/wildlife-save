<template>
  <div class="container">
    <section class="mt-6 mb-6 pt-6 px-6">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="cart-container shadow-lg rounded overflow-hidden pt-5">
            <CartSteps></CartSteps>
            <router-view/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}

.cart-header {
  background: #efdfc8;
}
</style>

<script>
import CartSteps from '@/components/CartSteps.vue'

export default {
  data () {
    return {
      nowPage: ''
    }
  },
  components: {
    CartSteps
  },
  methods: {
    getNowPage () {
      this.nowPage = this.$route.name
    }
  },
  created () {
    this.getNowPage()
  }
}
</script>
