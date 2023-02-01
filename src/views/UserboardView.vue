<template>
  <div class="wrap">
    <nav class="navbar navbar-expand-lg navbar-white fixed-top navbar-bg p-0" :class="[{'bg-primary': navbarBg}, {'shadow-sm': !navbarBg}]">
      <div class="container-fluid px-3">
        <router-link to="/userboard/swa" class="navbar-brand">
          <h1 class="save-wildlife mb-0 text-secondary display-5">SWA</h1>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <a href="#" class="nav-link me-2">關於我們</a>
            </li>
            <li class="nav-item">
              <router-link to="/userboard/productList" class="nav-link me-2" @click="navbarBg = true">產品列表</router-link>
            </li>
            <li>follow us
              <span class="ms-2"><font-awesome-icon icon="fa-regular fa-hand-point-right"/></span>
            </li>
            <li class="nav-item fs-3 ms-2">
              <a href="http://www.youtube.com" class="nav-link">
                <font-awesome-icon icon="fa-brands fa-youtube"/>
              </a>
            </li>
            <li class="nav-item fs-3">
              <a href="http://www.instagram.com" class="nav-link">
                <font-awesome-icon icon="fa-brands fa-instagram"/>
              </a>
            </li>
            <li class="nav-item fs-3">
              <a href="http://www.facebook.com" class="nav-link">
                <font-awesome-icon icon="fa-brands fa-square-facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="position-relative">
      <router-view/>
      <ToastMessages></ToastMessages>
    </div>
  </div>
</template>

<style>
.navbar-bg {
  background: transparent;
  transition: 1s;
}

.wrap>.bg-primary {
  transition: 1s;
}

.wrap {
  font-family: 'Noto Sans TC', sans-serif;
}

.save-wildlife {
  font-family: 'Black Ops One', cursive;
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
      navbarBg: false
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
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      this.spotY = window.top.scrollY
      if (this.spotY >= window.innerHeight) {
        this.navbarBg = true
      } else {
        this.navbarBg = false
      }
    }
  }
}

</script>
