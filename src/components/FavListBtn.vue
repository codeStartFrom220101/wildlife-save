<template>
  <div class="position-fixed rounded-circle d-flex justify-content-center align-items-center fs-3" style="left: 1rem; bottom: 1rem; width: 60px; height: 60px; z-index: 10; background-color: rgb(237, 237, 237); cursor: pointer;" @click="openFav">
    <i class="bi bi-heart fav-one" style="color: #FF7575;"></i>
  </div>
  <div class="position-fixed fav-container bg-white rounded" :class="{'active': favOpen && openNow === 'fav'}" ref="fav">
    <div class="card h-100 p-3 border">
      <div class="d-flex align-items-center justify-content-between border-bottom px-2 pb-2">
        <h4 class="mb-0">最愛清單</h4>
        <button type="button" class="btn-close" aria-label="Close" @click="closeFav"></button>
      </div>
      <ul class="list-unstyled p-1" style="overflow-y: scroll;">
        <li class="mt-2" v-for="(product) in favList" :key="product.id">
          <div class="row g-1 m-0">
            <div class="col-4">
              <img :src="product.imageUrl" class="object-fit-cover" style="height: 75px; width: 75px;" alt="">
            </div>
            <div class="col-8">
              <div class="d-flex justify-content-between align-items-center h-100">
                <div>
                  <h5 class="fs-7">{{ product.title }}</h5>
                  <p class="mb-0 fs-8">NT${{ product.price }}</p>
                </div>
                <div>
                  <button type="button"
                   @click.prevent="addToCart(product)"
                   class="btn btn-outline-secondary py-1 px-2 fs-5 me-3"
                   :class="{'disabled' : loadingItem === product.id}">
                    <div class="d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart" v-if="loadingItem !== product.id"></i>
                      <div class="spinner-grow text-secondary spinner-grow-sm" role="status" style="margin: 7px 2px;" v-else>
                        <span class="visually-hidden"></span>
                      </div>
                    </div>
                  </button>
                  <button type="button" class="btn btn-outline-secondary py-1 px-2 fs-5" @click="delFromFavList(product.id)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
  .fav-container {
    left: -500px;
    width: 400px;
    height: 500px;
    bottom: 2rem;
    transition: all .5s cubic-bezier(1,-0.24, 0.45, 1.01);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .fav-one:hover {
    animation: cartmove 1s linear infinite;
  }

  .fav-container.active {
    left: 2rem;
  }

  @media (max-width: 768px) {
    .fav-container {
      width: 300px;
    }

    .fav-container.active {
      left: 50%;
      transform: translateX(-50%)
    }
  }

  @keyframes cartmove {
    25% {transform: rotate(-15deg);}
    75% {transform: rotate(15deg);}
  }

</style>

<script>
import productStore from '@/stores/productStore'
import { mapActions, mapState } from 'pinia'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'

export default {
  data () {
    return {
      favOpen: false
    }
  },
  computed: {
    ...mapState(productStore, ['favList']),
    ...mapState(statusStore, ['openNow', 'loadingItem'])
  },
  methods: {
    ...mapActions(productStore, ['delFromFavList']),
    ...mapActions(statusStore, ['openBtnHandler']),
    ...mapActions(cartStore, ['addToCart']),
    openFav () {
      this.favOpen = true
      this.openBtnHandler('fav')
    },
    closeFav () {
      this.favOpen = false
      this.openBtnHandler('')
    }
  },
  created () {
    console.log(this.favList)
  }
}
</script>
