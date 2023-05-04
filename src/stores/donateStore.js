import { defineStore } from 'pinia'
// import axios from 'axios'
import statusStore from '@/stores/statusStore'
import { db } from '@/assets/firebase/firebase'

const status = statusStore()

export default defineStore('donateStore', {
  state: () => ({
    donate: 0,
    donateTarget: 3000000,
    donatePercent: '0%',
    donateCount: 9487
  }),
  actions: {
    inputDonorData (donordata) {
      console.log(donordata)
      status.isLoading = true
      db.ref('/donate').push().set(
        {
          donor: {
            name: donordata.donor.name,
            email: donordata.donor.email,
            tel: donordata.donor.tel,
            money: donordata.donor.money
          },
          receipt: {
            needsReceipt: donordata.receipt.needsReceipt,
            title: donordata.receipt.title,
            donorId: donordata.receipt.id,
            address: donordata.receipt.address
          }
        }
      ).then(() => {
        alert('成功')
        status.isLoading = false
      }).catch(() => {
        alert('失敗')
        status.isLoading = false
      })
    },
    getDonateData () {
      this.donate = 0
      status.isLoading = true
      db.ref('/donate').once('value')
        .then(snapshot => {
          snapshot.forEach(childSnapshot => {
            status.isLoading = false
            const key = childSnapshot.key
            this.donate += snapshot.val()[key].donor.money
            this.donatePercent = `${this.donate / 3000000 * 100 < 100 ? this.donate / 3000000 * 100 : 100}%`
            console.log(this.donate, this.donatePercent)
          })
        })
    }
  }
})
