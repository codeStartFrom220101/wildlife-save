<template>
  <LoadingOverlay :active="isLoading">
    <div class="loadingio-spinner-ripple-o01nobacpbk">
      <div class="ldio-0zlqpdibb6ki">
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay>
  <div class="container p-6 mt-5">
    <div class="row row-cols-3 g-3 d-none d-md-flex">
      <div class="col">
        <div class="rounded-4 border overflow-hidden my-3 position-relative animal" :class="{'d-none': key % 3 !== 0}" v-for="(animal, key) in animalList" :key="animal.name">
          <div class="position-absolute w-100 text-white" style="background-color: rgba(0, 0, 0, 0.3);">
            <h3 class="text-center mb-0 py-1">{{ animal.name }}</h3>
          </div>
          <img :src="animal.imageUrl" class="w-100" alt="">
        </div>
      </div>
      <div class="col">
        <div class="rounded-4 border overflow-hidden my-3 position-relative animal" :class="{'d-none': key % 3 !== 1}" v-for="(animal, key) in animalList" :key="animal.name">
          <div class="position-absolute w-100 text-white" style="background-color: rgba(0, 0, 0, 0.3);">
            <h3 class="text-center mb-0 py-1">{{ animal.name }}</h3>
          </div>
          <img :src="animal.imageUrl" class="w-100" alt="">
        </div>
      </div>
      <div class="col">
        <div class="rounded-4 border overflow-hidden my-3 position-relative animal" :class="{'d-none': key % 3 !== 2}" v-for="(animal, key) in animalList" :key="animal.name">
          <div class="position-absolute w-100 text-white" style="background-color: rgba(0, 0, 0, 0.3);">
            <h3 class="text-center mb-0 py-1">{{ animal.name }}</h3>
          </div>
          <img :src="animal.imageUrl" class="w-100" alt="">
        </div>
      </div>
    </div>
    <div class="row row-cols-1 d-md-none">
      <div class="col">
        <div class="rounded-4 border overflow-hidden my-3 position-relative animal" v-for="(animal) in animalList" :key="animal.name">
          <div class="position-absolute w-100 text-white" style="background-color: rgba(0, 0, 0, 0.3);">
            <h3 class="text-center mb-0 py-1">{{ animal.name }}</h3>
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
import statusStore from '@/stores/statusStore'

export default {
  computed: {
    ...mapState(productStore, ['animalList']),
    ...mapState(statusStore, ['isLoading'])
  },
  methods: {
    ...mapActions(productStore, ['getAnimalList'])
  },
  created () {
    this.getAnimalList()
  }
}
</script>
