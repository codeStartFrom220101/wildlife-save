import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from '@/stores/statusStore'

const status = statusStore()

export default defineStore('donateStore', {
  state: () => ({
    donate: 0,
    donateTarget: 3000000,
    donatePercent: '0%',
    donateCount: 9487
  }),
  actions: {
    inputDonorData (donor) {
      status.isLoading = true
      const api = 'http://localhost:5000/donors'
      axios.post(api, donor)
        .then((res) => {
          if (res.status === 201) {
            console.log(status.isLoading)
            status.isLoading = false
            alert(`感謝${donor.donor.name}(先生/小姐)捐獻的${donor.donor.money}元`)
            this.getDonateData()
          }
        })
    },
    getDonateData () {
      const api = 'http://localhost:5000/donors'
      axios.get(api)
        .then(res => {
          console.log(res.data)
          this.donate = 0
          res.data.forEach(donor => {
            this.donate += donor.donor.money
            this.donatePercent = `${this.donate / 3000000 * 100 < 100 ? this.donate / 3000000 * 100 : 100}%`
          })
        })
    }
  }
})
