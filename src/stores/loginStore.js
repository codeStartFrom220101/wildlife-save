import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default defineStore('loginStore', {
  state: () => ({
    uid: '',
    email: ''
  }),
  actions: {
    loginOrRegister (userData, loginOrRegister) {
      const auth = getAuth()
      const method = loginOrRegister ? signInWithEmailAndPassword : createUserWithEmailAndPassword
      method(auth, userData.email, userData.password)
        .then((userCredential) => {
          // 註冊成功，可以進行後續處理
          const user = userCredential.user
          console.log(user)
          if (loginOrRegister) {
            // 登入成功，可以獲取使用者資訊
            const user = userCredential.user
            const uid = user.uid // 使用者 ID
            const email = user.email // 使用者電子郵件
            // const displayName = user.displayName // 使用者顯示名稱
            // const photoURL = user.photoURL // 使用者頭像 URL
            // ... 其他使用者資訊
            this.uid = uid
            this.email = email

            console.log(this.uid, this.email)
          }
        })
        .catch((error) => {
          // 註冊失敗，處理錯誤訊息
          const errorCode = error.code
          const errorMessage = error.message
          console.error(errorCode, errorMessage)
        })
    },
    logout () {
      const auth = getAuth()
      console.log(auth)
      auth.signOut()
        .then(() => {
          // 登出成功
          console.log('用戶已登出')
          this.email = ''
          this.uid = ''
        })
        .catch((error) => {
          // 處理錯誤
          console.log('登出時出現錯誤：', error)
        })
    }
  }
})
