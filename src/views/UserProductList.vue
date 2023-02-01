<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="product-list-banner"></div>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-2">
        <div class="list-group mt-2">
          <button type="button" class="list-group-item list-group-item-action active">全部產品</button>
          <button type="button" class="list-group-item list-group-item-action" aria-current="true">
            帽子
          </button>
          <button type="button" class="list-group-item list-group-item-action">衣服</button>
          <button type="button" class="list-group-item list-group-item-action">馬克杯</button>
          <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
        </div>
      </div>
      <div class="col-md-10">
        <div class="product-list d-flex flex-wrap">
          <div class="card m-2" style="width: 18rem;" v-for="(item, key) in productList" :key="key">
            <img :src="item.imageUrl" class="card-img-top" style="height: 200px; object-fit: cover;" :alt="item.title">
            <div class="card-body text-center">
              <h5 class="card-title">{{ item.title }}</h5>
              <a href="#" class="btn btn-primary" @click.prevent="getItem(item.id)">查看更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="height: 150vh;"></div>
</template>

<style>
.product-list-banner {
  background-image: url('@/assets/productList-banner.png');
  background-size: cover;
  background-position: 50% 50%;
  height: 50vh;
  width: 100%;
}
</style>

<script>

export default {
  data () {
    return {
      productList: [],
      tempProduct: {},
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.productList = res.data.products
            this.pagination = res.data.pagination
            console.log(this.productList)
          }
        })
    },
    getItem (id) {
      this.$router.push(`/userboard/productList/${id}`)
    }
  },
  created () {
    this.getProducts()
  }
}

</script>
