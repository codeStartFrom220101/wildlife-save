<template>
  <LoadingOverlay :active="isLoading">
    <div class="loadingio-spinner-ripple-o01nobacpbk">
      <div class="ldio-0zlqpdibb6ki">
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay>
  <div class="container mt-5">
    <form class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit" @click="signIn">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
        isLoading: false
      }
    }
  },
  methods: {
    signIn () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            const { token, expired } = res.data
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/dashboard')
          }
        })
    }
  }
}
</script>
