<template>
  <h2 class="h3 text-black text-center py-2 mb-0">建立訂單</h2>
  <form class="row row-cols-1 p-4 g-3 needs-validation" novalidate @submit="createOrder">
    <div class="col">
      <div class="position-relative">
        <input type="text" class="form-control pt-4" v-model="form.user.name" required>
        <label for="" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.user.name.split(' ').join('').length > 0 }" style="left: 15px;">姓名：</label>
        <div class="invalid-feedback">
          請輸入姓名
        </div>
      </div>
    </div>
    <div class="col">
      <div class="position-relative">
        <input type="email" class="form-control pt-4" v-model="form.user.email" required>
        <label for="" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.user.email.split(' ').join('').length > 0 }" style="left: 15px;">電子郵件：</label>
        <div class="invalid-feedback">
          請輸入電子郵件
        </div>
      </div>
    </div>
    <div class="col">
      <div class="position-relative">
        <input type="tel" class="form-control pt-4" v-model="form.user.tel" required>
        <label for="" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.user.tel.split(' ').join('').length > 0 }" style="left: 15px;">聯絡電話：</label>
        <div class="invalid-feedback">
          請輸入電話號碼
        </div>
      </div>
    </div>
    <div class="col">
      <div class="position-relative">
        <input type="address" class="form-control pt-4" v-model="form.user.address" required>
        <label for="" class="form-label position-absolute top-50 translate-middle-y" :class="{'active': form.user.address.split(' ').join('').length > 0 }" style="left: 15px;">地址：</label>
        <div class="invalid-feedback">
          請輸入地址
        </div>
      </div>
    </div>
    <div class="col">
      <label for="message" class="form-label" style="left: 15px;">備註：</label>
      <textarea class="form-control" id="message" rows="8" v-model="form.user.message" style="resize: none;"></textarea>
    </div>
    <div class="col-12">
      <div class="d-flex justify-content-end">
        <button class="btn btn-primary" type="submit" @click="formValidation">送出訂單</button>
      </div>
    </div>
  </form>
</template>

<style>
input ~ label {
  transition: all .3s;
}

input:focus ~ label, label.active{
  font-size: .8rem;
  color: gray;
  top: 5px !important;
  transform: translateY(0) !important;
}
</style>

<script>
import { mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'

export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCartPage']),
    createOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order })
        .then((res) => {
          console.log(res)
          res.data.success ? this.$router.push(`checkout/${res.data.orderId}`) : res.data.message === '購物車內無資料' ? alert('您的購物車還是空的') : alert('您的資料未填完整')
        })
    },
    formValidation () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')
      console.log(forms)

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
    }
  },
  created () {
    this.getCartPage('order')
  }
}
</script>
