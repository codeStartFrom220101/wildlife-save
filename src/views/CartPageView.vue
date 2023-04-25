<template>
  <div class="container">
    <section class="mt-6 mb-6 pt-md-6 px-md-6">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="cart-container shadow-lg rounded overflow-hidden pt-5" data-aos="zoom-in" data-aos-duration="1500">
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
    }
  },
  components: {
    CartSteps
  },
  methods: {
  }
}
</script>
