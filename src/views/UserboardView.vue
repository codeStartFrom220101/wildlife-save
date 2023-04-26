<template>
  <nav class="d-flex justify-content-between align-items-center fixed-top bg-white shadow-sm" style="height: 56px">
    <h1 class="mb-0 fw-bolder"><router-link to="/userboard/home" href="#" class="px-3">動齊來</router-link></h1>
    <ul class="d-md-flex fw-bold list-unstyled mb-0 d-none">
      <li class="h-100 bg-secondary">
        <router-link to="/userboard/about" class="text-white text-decoration-none d-block px-4 py-3">關於我們</router-link>
      </li>
      <li class="h-100 bg-primary">
        <router-link to="/userboard/productList" class="text-white text-decoration-none d-block px-4 py-3">產品列表</router-link>
      </li>
      <li class="h-100 bg-black px-2">
        <router-link to="/userboard/cartpage/cart" class="text-white text-decoration-none d-block px-4 py-3">購物車</router-link>
      </li>
    </ul>
    <ul class="mobile-menu list-unstyled position-absolute bg-white w-100 shadow d-md-none" style="top: 56px" :class="{'active': allStatus.mobileMenu}">
      <li class="border-top border-dark">
        <router-link to="/userboard/about" class="text-decoration-none d-block px-4 py-2">關於我們</router-link>
      </li>
      <li class="border-top border-dark">
        <router-link to="/userboard/productList" class="text-decoration-none d-block px-4 py-2">產品列表</router-link>
      </li>
      <li class="border-top border-dark">
        <router-link to="/userboard/cartpage/cart" class="text-decoration-none d-block px-4 py-2">購物車</router-link>
      </li>
    </ul>
    <button class="menu-btn d-md-none mx-3" @click="statusToggle('mobileMenu')" :class="{'active': allStatus.mobileMenu}">
      <div></div>
    </button>
  </nav>
  <!-- 主要內容 -->
  <div>
    <router-view/>
    <ToastMessages></ToastMessages>
  </div>
  <footer class="bg-secondary pt-5 text-white fw-blod">
    <div class="row justify-content-around gx-0 gy-4">
      <div class="col-md-3">
        <div class="d-flex justify-content-center">
          <div class="px-4 text-center text-md-start">
            <h5>輸入Email來獲得最新消息</h5>
            <input type="text" class="form-control form-control-sm" placeholder="abc@abcba.com">
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="d-flex justify-content-center">
          <div class="text-center text-md-start">
            <h5>追蹤我們</h5>
            <div class="d-flex">
              <a href="#" class="py-1 px-2 text-white fs-4"><font-awesome-icon icon="fa-brands fa-facebook-f"/></a>
              <a href="#" class="py-1 px-2 text-white fs-4"><font-awesome-icon icon="fa-brands fa-twitter"/></a>
              <a href="#" class="py-1 px-2 text-white fs-4"><font-awesome-icon icon="fa-brands fa-github"/></a>
              <a href="#" class="py-1 px-2 text-white fs-4"><font-awesome-icon icon="fa-brands fa-instagram"/></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="d-flex justify-content-center">
          <div class="text-center text-md-start">
            <h5>聯繫我們</h5>
            <ul class="list-unstyled">
              <li>地址：世界的某一個角落</li>
              <li>電話：0912-345-678</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <p class="mb-0" style="font-size: .9rem;">&copy; 2023 LDD製作 此網頁只當作品無提供任何商業用途</p>
    </div>
  </footer>

  <SideBtn></SideBtn>
</template>

<style>
  * {
    font-family: 'Noto Sans TC', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  .menu-btn {
    width: 36px;
    height: 36px;
    background: white;
    border: none;
    padding: 0;
    overflow: hidden;
  }

  .menu-btn div {
    margin: 0 auto;
    width: 24px;
    height: 4px;
    border-radius: 5px;
    background: black;
    position: relative;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  }

  .menu-btn div::after, .menu-btn div::before {
    content: '';
    position: absolute;
    left: 0;
    width: 24px;
    height: 4px;
    border-radius: 5px;
    background: #000;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  }

  .menu-btn div::after {
    transform: translateY(8px);
  }

  .menu-btn div::before {
    transform: translateY(-8px);
  }

  .menu-btn.active > div {
    transform: translateX(-35px);
  }

  .menu-btn.active > div::before{
      transform: translateX(35px) rotate(135deg);
  }

  .menu-btn.active > div::after {
      transform: translateX(35px) rotate(-135deg);
  }

  .fixed-top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999;
  }

  nav .mobile-menu {
    transform: translateY(-100vh);
    transition: all 1s cubic-bezier(0.22, 0.32, 0.27, 1.3);
  }

  nav .mobile-menu.active {
    transform: translateY(0);
  }

  nav .mobile-menu li:hover{
    background: var(--bs-primary);
    transition: all .5s;
  }

  nav .mobile-menu li:hover a {
    color: white;
  }
</style>

<script>
import emitter from '@/methods/emitter'
import pushMessageState from '@/methods/pushMessageState'
import ToastMessages from '@/components/ToastMessages.vue'
import SideBtn from '@/components/SideBtn.vue'

export default {
  components: {
    ToastMessages,
    SideBtn
  },
  data () {
    return {
      spotY: window.top.scrollY,
      cartList: [],
      allStatus: {
        mobileMenu: false
      }
    }
  },
  provide () {
    return {
      emitter,
      pushMessageState
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    // window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    statusToggle (statusName) {
      this.allStatus[statusName] = !this.allStatus[statusName]
    }
  }
}

</script>
