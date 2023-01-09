<template>
  <div class="wrap">
    <nav class="navbar navbar-expand-lg navbar-white fixed-top navbar-bg" :class="{'bg-primary': navbarBg}">
      <div class="container-fluid container">
        <router-link to="/userboard" class="navbar-brand">
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
            <li class="border-end border-secondary pe-3">follow us</li>
            <li class="nav-item fs-3 ms-2">
              <a href="#" class="nav-link">
                <font-awesome-icon icon="fa-brands fa-youtube"/>
              </a>
            </li>
            <li class="nav-item fs-3">
              <a href="#" class="nav-link">
                <font-awesome-icon icon="fa-brands fa-instagram"/>
              </a>
            </li>
            <li class="nav-item fs-3">
              <a href="#" class="nav-link">
                <font-awesome-icon icon="fa-brands fa-square-facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Video class="position-fixed"></Video>
    <SideBtn class="position-fixed bg-secondary sideBtnHover" style="top: 20%; z-index: 11;">
      <font-awesome-icon class="fs-3 mb-2 mt-4" icon="hippo"/>
      <h3 class="h4 fw-bold" style="writing-mode: vertical-rl;">
        <div class="fs-6 text-end">- Animals</div>
        動物們
      </h3>
      <img src="@/assets/elephant.png" class="position-absolute" style="width: 200px; bottom: -30px; right: 10px;" alt="elephant">
    </SideBtn>
    <SideBtn class="position-fixed bg-success sideBtnHover" style="top: 50%; z-index: 11;">
      <font-awesome-icon class="fs-3 mb-2 mt-4" icon="seedling"/>
      <h3 class="h4 fw-bold" style="writing-mode: vertical-rl;">
        <div class="fs-6 text-end">- donation</div>
        捐獻車
      </h3>
      <img src="@/assets/cheetah.png" class="position-absolute" style="width: 300px; bottom: -30px; right: -10px;" alt="elephant">
    </SideBtn>
    <div class="container-fluid position-relative" style="height: 150vh; top: 100vh; z-index: 10; background: #fff;">
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

.sideBtnHover {
  right: -20px;
  transition: .5s;
}

.sideBtnHover:hover {
  right: 0px;
  transition: .5s;
}
</style>

<script>
import emitter from '@/methods/emitter'
import pushMessageState from '@/methods/pushMessageState'
import ToastMessages from '@/components/ToastMessages.vue'
import Video from '@/components/VideoC.vue'
import SideBtn from '@/components/SideBtn.vue'

export default {
  components: {
    ToastMessages,
    Video,
    SideBtn
  },
  data () {
    return {
      navbarBg: false
    }
  },
  provide () {
    return {
      emitter,
      pushMessageState
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
      if (window.top.scrollY >= window.innerHeight) {
        this.navbarBg = true
      } else {
        this.navbarBg = false
      }
    }
  }
}

</script>
