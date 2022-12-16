<template>
  <Navbar></Navbar>
  <router-view/>
</template>

<script>
import Navbar from '../components/NavbarC.vue'
export default {
  components: {
    Navbar
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}/api/user/check`
    console.log(api)
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
