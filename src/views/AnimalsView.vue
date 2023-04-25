<template>
  <div class="container p-6 mt-5">
    <div class="row row-cols-3 g-3">
      <div class="col">
        <div class="rounded-4 border overflow-hidden my-3 position-relative animal" :class="{'d-none': key % 3 !== 0}" v-for="(animal, key) in animalList" :key="animal.title">
          <div class="position-absolute w-100 text-white" style="background-color: rgba(0, 0, 0, 0.3);">
            <h3 class="text-center mb-0 py-1">{{ animal.title }}</h3>
          </div>
          <img :src="animal.imageUrl" class="w-100" alt="">
        </div>
      </div>
      <div class="col">
        <div class="rounded-4 border overflow-hidden my-3 position-relative animal" :class="{'d-none': key % 3 !== 1}" v-for="(animal, key) in animalList" :key="animal.title">
          <div class="position-absolute w-100 text-white" style="background-color: rgba(0, 0, 0, 0.3);">
            <h3 class="text-center mb-0 py-1">{{ animal.title }}</h3>
          </div>
          <img :src="animal.imageUrl" class="w-100" alt="">
        </div>
      </div>
      <div class="col">
        <div class="rounded-4 border overflow-hidden my-3 position-relative animal" :class="{'d-none': key % 3 !== 2}" v-for="(animal, key) in animalList" :key="animal.title">
          <div class="position-absolute w-100 text-white" style="background-color: rgba(0, 0, 0, 0.3);">
            <h3 class="text-center mb-0 py-1">{{ animal.title }}</h3>
          </div>
          <img :src="animal.imageUrl" class="w-100" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.animal {
  transition: .5s;
}

.animal > div {
  top: -50px;
  transition: .5s;
}

.animal:hover {
  box-shadow: 0 0 3px 3px rgb(182, 179, 179, 0.9);
}

.animal:hover > div {
  top: 0 !important;
}
</style>

<script>
import { mapActions, mapState } from 'pinia'
import productStore from '@/stores/productStore'

export default {
  computed: {
    ...mapState(productStore, ['animalList'])
  },
  methods: {
    ...mapActions(productStore, ['getProducts'])
  },
  created () {
    this.getProducts()
  }
}
</script>
