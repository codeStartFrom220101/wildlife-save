<template>
  <swiper :pagination="pagination" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(item, key) in images" :key="item" class="text-center"><img :src="item" :alt="`第${key + 1}張圖片`" class="h-100"></swiper-slide>
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
    images: {
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
