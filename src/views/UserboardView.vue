<template>
  <nav class="d-flex justify-content-between align-items-center fixed-top bg-white" style="height: 56px">
    <h1 class="mb-0 fw-bolder"><a href="#" class="px-3">動齊來</a></h1>
    <ul class="d-md-flex fw-bold list-unstyled mb-0 d-none">
      <li class="h-100">
        <a href="#" class="d-block px-4 py-3">登入</a>
      </li>
      <li class="h-100 bg-secondary">
        <router-link to="" href="#" class="text-white text-decoration-none d-block px-4 py-3">關於我們</router-link>
      </li>
      <li class="h-100 bg-primary">
        <router-link to="productList" href="#" class="text-white text-decoration-none d-block px-4 py-3">產品列表</router-link>
      </li>
      <li class="h-100 bg-black px-2">
        <router-link to="" href="#" class="text-white text-decoration-none d-block px-4 py-3">購物車</router-link>
      </li>
    </ul>
    <ul class="mobile-menu list-unstyled position-absolute bg-white w-100 shadow d-md-none" style="top: 56px" :class="{'active': allStatus.mobileMenu}">
      <li class="border-top border-dark">
        <a href="#" class="text-decoration-none d-block px-4 py-2">關於我們</a>
      </li>
      <li class="border-top border-dark">
        <a href="#" class="text-decoration-none d-block px-4 py-2">產品列表</a>
      </li>
      <li class="border-top border-dark">
        <a href="#" class="text-decoration-none d-block px-4 py-2">購物車</a>
      </li>
      <li class="border-top border-dark">
        <a href="#" class="d-block px-4 py-2">登入</a>
      </li>
    </ul>
    <button class="menu-btn d-md-none mx-3" @click="statusToggle('mobileMenu')" :class="{'active': allStatus.mobileMenu}">
      <div></div>
    </button>
  </nav>
  <!-- 主要內容 -->
  <div class="position-relative">
    <router-view/>
    <ToastMessages></ToastMessages>
  </div>
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

export default {
  components: {
    ToastMessages
  },
  data () {
    return {
      spotY: window.top.scrollY,
      allStatus: {
        mobileMenu: false
      }
    }
  },
  provide () {
    return {
      emitter,
      pushMessageState,
      spotY: this.spotY
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    // window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // onScroll () {
    //   this.spotY = window.top.scrollY
    //   const navbar = document.querySelector('.navbar')
    //   console.dir(navbar)
    //   if (this.spotY >= window.innerHeight - navbar.offsetHeight / 2) {
    //     this.navbarBg = true
    //   } else {
    //     this.navbarBg = false
    //   }
    // }
    statusToggle (statusName) {
      this.allStatus[statusName] = !this.allStatus[statusName]
    }
  }
}

</script>
