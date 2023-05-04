import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from '@/stores/statusStore'
import { db } from '@/assets/firebase/firebase'

const status = statusStore()

export default defineStore('productStore', {
  state: () => ({
    productList: [],
    productCategoryList: [],
    pagination: {},
    categorys: [],
    categoryNow: '全部商品',
    // 單一產品
    product: {},
    similarList: [],
    // 動物列表
    animalList: []
  }),
  actions: {
    // 產品列表
    getProducts (page = 1) {
      // const witchList = page ? `?page=${page}` : '/all'
      status.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      axios.get(api)
        .then((res) => {
          if (res.data.success) {
            status.isLoading = false
            console.log(res)
            this.productList = res.data.products
            this.productCategoryList = this.productList
            this.pagination = res.data.pagination
            this.getCategoryList()
          }
        })
    },
    categoryChange (category) {
      this.categoryNow = category
      this.productCategoryList = category === '全部商品' ? this.productList : this.productList.filter(product => product.category === category)
    },
    getCategoryList () {
      const categoryAll = this.productList.map((product) => product.category)
      this.categorys = Array.from(new Set(categoryAll))
      this.categorys.unshift('全部商品')
    },
    // 單產品介面
    getProduct (id) {
      status.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      axios.get(api)
        .then((res) => {
          if (res.data.success) {
            status.isLoading = false
            this.product = res.data.product
            this.getSimilar()
          }
        })
    },
    getSimilar () {
      this.similarList = []
      status.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      axios.get(api)
        .then((res) => {
          if (res.data.success) {
            status.isLoading = false
            const arr = res.data.products.filter(product => product.category === this.product.category)
            const index = arr.findIndex(product => product.id === this.product.id)
            const randomNum = []
            for (let i = 0; i < arr.length; i++) {
              randomNum.push(i)
            }
            randomNum.sort(() => 0.5 - Math.random())
            const removeIndex = randomNum.findIndex(num => num === index)
            randomNum.splice(removeIndex, 1)
            this.similarList.push(arr[randomNum[0]])
            this.similarList.push(arr[randomNum[1]])
            this.similarList.push(arr[randomNum[2]])
          }
        })
    },
    getAnimalList () {
      status.isLoading = true
      db.ref('/animals').once('value')
        .then(snapshot => {
          status.isLoading = false
          this.animalList = snapshot.val()
        })
    }
  }
})
