<template>
  <LoadingOverlay :active="isLoading">
    <div class="loadingio-spinner-ripple-o01nobacpbk">
      <div class="ldio-0zlqpdibb6ki">
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay>
  <div class="banner"></div>
  <div class="container py-6">
    <section class="text-black pb-5">
      <div class="row justify-content-around mb-2 row-cols-2">
        <div class="col">
          <router-link to="home"><font-awesome-icon icon="fa-solid fa-house"/></router-link> / <router-link to="productList">市集</router-link> / <span class="text-danger">{{ categoryNow }}</span>
        </div>
        <div class="col">
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-2 d-none d-md-block">
          <div class="px-2">
            <h2 class="h5 mt-2">產品類型</h2>
            <ul class="list-unstyled category-menu">
              <li class="py-1" v-for="(category) in categorys" :key="category.id" ><a href="#" :class="{'active' : category === categoryNow}" @click.prevent="categoryChange(category)">{{ category }}</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row row-cols-1 row-cols-lg-3 g-3 g-md-5">
            <div class="col" v-for="(product, key) in productCategoryList" :key="key">
              <div class="card h-100">
                <div class="container-img">
                  <img :src="product.imageUrl" class="card-img-top object-fit-cover" :alt="product.title" style="height: 200px;">
                </div>
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">{{ product.title }} <span class="text-white bg-secondary rounded fs-8 px-1 ms-2">{{ product.category }}</span></h5>
                  <div class="d-flex flex-column justify-content-between h-100">
                    <p class="card-text mb-1 fs-7">{{ product.description }}</p>
                    <p class="card-text text-end ">$NT {{ product.price }}</p>
                  </div>
                </div>
                <div class="card-footer">
                  <router-link
                   :to="`/userboard/productList/${product.id}`"
                   class="btn btn-outline-primary"
                   :class="{'stretched-link' : loadingItem !== product.id && loadingItem === ''}">查看商品</router-link>
                  <a href="#"
                   @click.prevent="addToCart(product)"
                   class="btn btn-outline-primary position-absolute cartBtn fs-4 d-block"
                   :class="{'disabled' : loadingItem === product.id}">
                    <div class="d-flex align-items-center justify-content-center" style="width: 24px; height: 24px;">
                      <font-awesome-icon v-if="loadingItem !== product.id" icon="fa-solid fa-cart-plus"/>
                      <div class="spinner-grow text-primary spinner-grow-sm" role="status" v-else>
                        <span class="visually-hidden"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CartBtn @del-product="delProductFromCart" :cartList="cartList"></CartBtn>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('@/assets/product-banner.jpg');
  background-size: cover;
  background-position: 50% 50%;
  height: 560px;
  width: 100%;
}

@media (max-width: 768px) {
  .banner {
    background-image: url('@/assets/product-banner-sm.jpg');
  }
}

.category-menu>li>a {
  position: relative;
}

.category-menu>li>a::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  width: 100%;
  height: 20%;
  background: var(--bs-primary);
  transform: translate(-50%, -50%);
  display: none;
}

.category-menu>li>a.active::before{
  display: block;
}

.card {
  transition: all .5s;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, .15), 0 0 5px rgba(0, 0, 0, .15), 0 0 10px rgba(0, 0, 0, .15);
}

.container-img {
  overflow: hidden;
}

.card img {
  transition: all .5s;
}

.card:hover img {
  transform: scale(1.1);
}

.stretched-link::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.card .cartBtn {
  transition: all .3s;
  z-index: 2;
  bottom: .5rem;
  right: 1rem;
}

</style>

<script>
import CartBtn from '@/components/CartBtn.vue'
import { mapActions, mapState } from 'pinia'
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'

export default {
  data () {
    return {
    }
  },
  components: {
    CartBtn
  },
  computed: {
    ...mapState(productStore, ['productCategoryList', 'pagination', 'categorys', 'categoryNow']),
    ...mapState(cartStore, ['cartList']),
    ...mapState(statusStore, ['isLoading', 'loadingItem'])
  },
  inject: ['pushMessageState', 'emitter'],
  methods: {
    ...mapActions(productStore, ['getProducts', 'categoryChange']),
    ...mapActions(cartStore, ['getCartData', 'delProductFromCart', 'addToCart'])
  },
  created () {
    this.getProducts(1)
    this.getCartData()
  }
}

</script>
