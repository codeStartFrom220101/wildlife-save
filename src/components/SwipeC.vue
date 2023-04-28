<template>
  <swiper :pagination="pagination" :modules="modules" class="mySwiper h-50">
    <swiper-slide v-for="(animal, key) in animals" :key="animal" class="text-center d-flex justify-content-center align-items-center border h-100">
      <img :src="animal.imageUrl" :alt="`第${key + 1}張圖片`" class="h-100">
    </swiper-slide>
  </swiper>
</template>

<style>
.mySwiper {
  height: 200px;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default {
  props: {
    animals: {
      type: Array,
      default () { return [] }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      },
      modules: [Pagination]
    }
  }
}
</script>
