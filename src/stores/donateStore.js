import { defineStore } from 'pinia'
// import axios from 'axios'

export default defineStore('donateStore', {
  state: () => ({
    donate: ''
  }),
  actions: {
    inputDonorData (donor) {
      // const api = 'http://localhost:3000/donates'
      // axios.post(api, { data:  })
      //   .then((res) => {
      //     console.log(res)
      //   })
    }
  }
})
