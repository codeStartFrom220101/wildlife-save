<template>
  <div>
    <div class="cart-btn-container position-fixed rounded-circle bg-white d-flex justify-content-center align-items-center fs-2" style="right: 1rem; bottom: 1rem; width: 60px; height: 60px; z-index: 3;" @click="openCart">
      <i class="bi bi-cart cart-one" :class="{'d-none': status.cartout}"></i>
      <i class="bi bi-cart cart-two" ref="cartBtn"></i>
      <div class="position-absolute fs-8 rounded-circle bg-primary d-flex justify-content-center align-items-center product-num" ref="productNum">
        <span>{{ cartList.length }}</span>
      </div>
    </div>
    <div class="position-fixed cart-container rounded" ref="cart">
      <div class="card h-100 p-3">
        <div class="d-flex align-items-center justify-content-between border-bottom px-2">
          <h4 class="mb-0">購物車清單</h4>
          <i class="bi bi-cart fs-2 cart-close" @click="closeCart"></i>
        </div>
        <ul class="list-unstyled" style="overflow-y: scroll;">
          <li class="mt-2" v-for="(product) in cartList" :key="product.id">
            <div class="row g-1 m-0">
              <div class="col-4">
                <img :src="product.product.imageUrl" class="object-fit-cover" style="height: 75px; width: 75px;" :alt="product.product.img">
              </div>
              <div class="col-8">
                <div class="d-flex justify-content-between align-items-center h-100">
                  <div>
                    <h5 class="h6">{{ product.product.title }}</h5>
                    <p class="mb-0">NT$ {{ $filters.currency(product.product.price) }} * {{ $filters.currency(product.qty) }}<br>
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
        <div class="border-top">
          <button type="button" class="btn btn-primary w-100 mt-2">快去結帳</button>
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
    right: -400px;
    width: 400px;
    height: 500px;
    bottom: 2rem;
    transition: all .5s cubic-bezier(1,-0.24, 0.45, 1.01);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    z-index: 3;
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
export default {
  data () {
    return {
      status: {
        cartout: false
      }
    }
  },
  props: ['cartList'],
  methods: {
    openCart () {
      this.$refs.cartBtn.classList.add('active')
      this.$refs.cart.classList.add('active')
      this.$refs.cartBtn.classList.contains('active') ? this.status.cartout = true : this.status.cartout = false
    },
    closeCart () {
      this.$refs.cartBtn.classList.remove('active')
      this.$refs.cart.classList.remove('active')
      setTimeout(() => {
        this.status.cartout = false
      }, 500)
    }
  }
}
</script>
