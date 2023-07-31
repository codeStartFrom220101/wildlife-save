import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    isLoading: false,
    loadingItem: '',
    loginStatus: true,
    openNow: 'side'
  }),
  actions: {
    loginStatusChange (method) {
      this.loginStatus = method
    },
    openBtnHandler (btn) {
      this.openNow = btn
    }
  }
})
