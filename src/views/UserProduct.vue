<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container py-6">
    <div class="row justify-content-center g-3 g-md-5" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
      <div class="col-md-6 col-lg-5" style="height: 500px;">
        <img :src="product.imageUrl" alt="" class="w-100 h-100 object-fit-cover">
      </div>
      <div class="col-md-6 col-lg-5">
        <div class="row">
          <div class="col-12">
            <h2 class="fw-bold-bottom pb-3">
              {{ product.title }}<br>
              <span class="text-white bg-secondary rounded fs-7 px-2 py-1">{{ product.category }}</span>
            </h2>
          </div>
          <div class="col-12">
            <div class="border-bottom">
              <p class="mb-0">【產品描述】</p>
              <div class="text-success lh-lg">{{ product.description }}</div>
              <div v-if="product.category === '衣服'" class="mb-3">
                <span>尺寸: </span>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                  <label class="form-check-label" for="exampleRadios1">
                    S
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                  <label class="form-check-label" for="exampleRadios2">
                    M
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
                  <label class="form-check-label" for="exampleRadios3">
                    L
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
                  <label class="form-check-label" for="exampleRadios3">
                    XL
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="input-group mb-3">
                    <a href="#" @click.prevent="qtyCount(true)" class="input-group-text btn btn-primary" id="basic-addon1" :class="{'disabled': loadingItem}"><font-awesome-icon icon="fa-solid fa-caret-up" /></a>
                    <input type="number" class="form-control" placeholder="你想購買的數量" aria-label="Username" aria-describedby="basic-addon1" v-model="qty" :disabled="loadingItem !== ''">
                    <a href="#" @click.prevent="qtyCount(false)" class="input-group-text btn btn-primary" id="basic-addon1" :class="{'disabled': loadingItem}"><font-awesome-icon icon="fa-solid fa-caret-down"/></a>
                  </div>
                </div>
                <div class="col-6">
                  <div class="fs-5 text-end mb-1">NT {{ product.price }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex mt-3">
            <button type="button" @click="addToCart(product, qty)" class="btn btn-primary px-3 d-block ms-auto" :disabled="qty === 0 || loadingItem !== ''" style="width: 150px">
              <div  v-if="!loadingItem">
                <font-awesome-icon icon="fa-solid fa-cart-plus"/>
                加入購物車
              </div>
              <div class="spinner-border spinner-border-sm text-white"  role="status" v-else>
                <span class="visually-hidden"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <h3 class="h4 text-center mt-md-6 mt-5 similarTitle">為您推薦相似</h3>
    <div class="row row-cols-md-3 row-cols-1 g-3 g-lg-5 mt-3">
      <div class="col" v-for="(similarProduct, key) in similarList" :key="similarProduct.id"  data-aos="fade-up" data-aos-anchor-placement="top-bottom" :data-aos-delay="`${key * 2}00`" data-aos-duration="1500">
        <div class="card h-100">
          <div class="container-img">
            <img :src="similarProduct.imageUrl" class="card-img-top object-fit-cover" :alt="similarProduct.title" style="height: 200px;">
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ similarProduct.title }} <span class="text-white bg-secondary rounded fs-8 px-1 ms-2">{{ similarProduct.category }}</span></h5>
            <div class="d-flex flex-column justify-content-between h-100">
              <p class="card-text mb-1 fs-7">{{ similarProduct.description }}</p>
              <p class="card-text text-end ">$NT {{ similarProduct.price }}</p>
            </div>
          </div>
          <div class="card-footer">
            <router-link :to="`/userboard/productList/${similarProduct.id}`" @click.prevent="getProduct(similarProduct.id);" class="btn btn-outline-primary" :class="{'stretched-link' : loadingItem !== similarProduct.id && loadingItem === ''}">查看商品</router-link>
            <a href="#" @click.prevent="addToCart(similarProduct)" class="btn btn-outline-primary position-absolute cartBtn fs-4 d-block" :class="{'disabled' : loadingItem === similarProduct.id}">
              <div class="d-flex align-items-center justify-content-center" style="width: 24px; height: 24px;">
                <font-awesome-icon v-if="loadingItem !== similarProduct.id" icon="fa-solid fa-cart-plus"/>
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

.similarTitle::before, .similarTitle::after {
  content: '———';
  margin: 1rem;
  width: 200px;
  height: 1px;
  color: var(--bs-primary);
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
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'
import productStore from '@/stores/productStore'
import statusStore from '@/stores/statusStore'

export default {
  data () {
    return {
      qty: 1
    }
  },
  inject: ['pushMessageState', 'emitter'],
  props: ['id'],
  computed: {
    ...mapState(productStore, ['product', 'similarList']),
    ...mapState(statusStore, ['isLoading', 'loadingItem'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(productStore, ['getProduct']),
    qtyCount (whichBtn) {
      whichBtn ? this.qty++ : this.qty > 0 ? this.qty-- : this.qty = 0
    }
  },
  created () {
    this.getProduct(this.id)
  }
}
</script>
