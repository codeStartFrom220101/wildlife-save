<template>
  <Navbar></Navbar>
  <div class="container-fluid position-relative">
    <router-view/>
    <ToastMessages></ToastMessages>
  </div>
</template>

<script>
import Navbar from '../components/NavbarC.vue'
import emitter from '@/methods/emitter'
import pushMessageState from '@/methods/pushMessageState'
import ToastMessages from '../components/ToastMessages.vue'

export default {
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return {
      emitter,
      pushMessageState
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}/api/user/check`
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
