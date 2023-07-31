<template>
  <div>
    <div class="cart-btn-container position-fixed rounded-circle d-flex justify-content-center align-items-center fs-2" style="right: 1rem; bottom: 1rem; width: 60px; height: 60px; z-index: 10; background-color: rgb(237, 237, 237);" @click="openCart">
      <i class="bi bi-cart cart-one" :class="{'d-none': cartOpen && openNow === 'cart'}"></i>
      <i class="bi bi-cart cart-two" :class="{'active': cartOpen && openNow === 'cart'}" ref="cartBtn"></i>
      <div class="position-absolute fs-8 rounded-circle bg-primary d-flex justify-content-center align-items-center product-num" ref="productNum">
        <span>{{ cartList.length }}</span>
      </div>
    </div>
    <div class="position-fixed cart-container rounded" :class="{'active': cartOpen && openNow === 'cart'}" ref="cart">
      <div class="card h-100 p-3">
        <div class="d-flex align-items-center justify-content-between border-bottom px-2 pb-2">
          <h4 class="mb-0">購物車清單</h4>
          <button type="button" class="btn-close" aria-label="Close" @click="closeCart"></button>
        </div>
        <ul class="list-unstyled p-1" style="overflow-y: scroll;">
          <li class="mt-2" v-for="(product) in cartList" :key="product.id">
            <div class="row g-1 m-0">
              <div class="col-4">
                <img :src="product.product.imageUrl" class="object-fit-cover" style="height: 75px; width: 75px;" :alt="product.product.img">
              </div>
              <div class="col-8">
                <div class="d-flex justify-content-between align-items-center h-100">
                  <div>
                    <h5 class="fs-7">{{ product.product.title }}</h5>
                    <p class="mb-0 fs-8">NT$ {{ $filters.currency(product.product.price) }} * {{ $filters.currency(product.qty) }}<br>
                      共 NT$ {{ $filters.currency(product.final_total) }}</p>
                  </div>
                  <button type="button" @click="$emit('del-product', product.id)" class="btn btn-outline-secondary py-1 px-2 fs-5">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="border-top" v-if="cartList.length > 0">
          <router-link to="/userboard/cartpage/cart" class="btn btn-primary w-100 mt-2">快去結帳</router-link>
        </div>
        <div v-else>
          <p class="text-center">購物車還沒有產品~</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cart-btn-container {
    cursor: pointer;
  }

  .cart-one:hover {
    animation: cartmove 1s linear infinite;
  }

  .cart-two {
    opacity: 0;
    width: 0;
  }

  .cart-two.active {
    width: auto;
    opacity: 1;
    transition: transform 1s cubic-bezier(1,-0.24, 0.45, 1.01);
    transform: translateX(80px)
  }

  @keyframes cartmove {
    25% {transform: rotate(-15deg);}
    75% {transform: rotate(15deg);}
  }

  .product-num {
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
  }

  .cart-container {
    right: -500px;
    width: 400px;
    height: 500px;
    bottom: 2rem;
    transition: all .5s cubic-bezier(1,-0.24, 0.45, 1.01);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .cart-container.active {
    right: 2rem;
    transition: all .5s .5s cubic-bezier(1,-0.24, 0.45, 1.01);
  }

  @media (max-width: 768px) {
    .cart-container {
      width: 300px;
    }

    .cart-container.active {
      right: 50%;
      transform: translateX(50%)
    }
  }

  .cart-close {
    cursor: pointer;
    transform: scaleX(-1);
  }
</style>

<script>
import { mapActions, mapState } from 'pinia'
import statusStore from '@/stores/statusStore'

export default {
  data () {
    return {
      cartOpen: false
    }
  },
  props: ['cartList'],
  computed: {
    ...mapState(statusStore, ['openNow'])
  },
  methods: {
    ...mapActions(statusStore, ['openBtnHandler']),
    openCart () {
      this.cartOpen = true
      this.openBtnHandler('cart')
      // this.$refs.cartBtn.classList.contains('active') ? this.cartOpen = true : this.cartOpen = false
    },
    closeCart () {
      this.cartOpen = false
      this.openBtnHandler('')
    }
  }
}
</script>
