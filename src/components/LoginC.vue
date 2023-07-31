<template>
  <div class="position-fixed   top-0 start-0 bottom-0 end-0" style="background-color: rgba(0, 0, 0, 0.2); z-index: 999;">
    <div class="position-fixed top-50 start-50 translate-middle bg-white rounded-4 p-3 shadow" style="width: 400px; height: 400px; z-index: 1000;">
      <h2 class="text-center" v-if="status">登入</h2>
      <h2 class="text-center" v-else>註冊</h2>
      <button type="button" class="btn-close position-absolute" style="top: 10px; right: 10px;" aria-label="Close" @click.prevent="loginStatusChange(false)"></button>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">電子信箱</label>
          <input type="email" class="form-control" id="email" placeholder="輸入電子信箱" v-model="userData.email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <input type="password" class="form-control" id="password" placeholder="輸入密碼" v-model="userData.password">
        </div>
        <div class="mb-3" v-if="!status">
          <label for="password" class="form-label">再次確認密碼</label>
          <input type="password" class="form-control" id="curret-password" placeholder="輸入密碼">
        </div>
        <div class="text-center d-flex justify-content-end">
          <button type="submit" class="btn btn-primary" v-if="status" @click.prevent="loginOrRegister(userData, true); loginStatusChange(false)">登入</button>
          <button type="submit" class="btn btn-primary" v-else @click.prevent="loginOrRegister(userData, false)">註冊</button>
        </div>
      </form>
      <div class="register-link">
        <p v-if="status">還沒有帳號嗎? <a href="#" @click.prevent="status = !status">點擊註冊</a></p>
        <p v-else>已經有帳號了 <a href="#" @click.prevent="status = !status">點擊登入</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import statusStore from '@/stores/statusStore'
import loginStore from '@/stores/loginStore'
import { mapActions, mapState } from 'pinia'

export default {
  data () {
    return {
      userData: {
        email: '',
        password: ''
      },
      status: true
    }
  },
  computed: {
    ...mapState(statusStore, ['loginStatus'])
  },
  methods: {
    ...mapActions(statusStore, ['loginStatusChange']),
    ...mapActions(loginStore, ['loginOrRegister'])
  }
}
</script>
