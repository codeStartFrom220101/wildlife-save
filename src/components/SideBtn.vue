<template>
  <div class="position-fixed top-50 translate-middle-y sideBtn-container" :class="{'active': sideOpen && openNow === 'side'}" ref="sideBtn">
    <div class="position-relative">
      <div class="sideBtn-close position-absolute" ref="sideBtnClose" :class="{'active': openNow !== 'side'}" @click="toggleSideBtn">
        <button type="button" class="btn-close py-2" aria-label="Close" v-if="openNow === 'side'"></button>
        <i class="bi bi-list fs-4 btn-hamburger" v-else></i>
      </div>
      <div class="sideBtn rounded-start-4 bg-secondary mb-5">
        <router-link to="/userboard/animals" >
          <div class="d-flex flex-column align-items-center text-white h-100 position-relative" style="width: 70px;">
            <font-awesome-icon class="fs-3 mb-2 mt-4" icon="hippo"/>
            <h3 class="h4 fw-bold" style="writing-mode: vertical-rl;">
              <div class="fs-6 text-end">- Animals</div>
              動物們
            </h3>
            <img src="@/assets/elephant.png" class="position-absolute" style="right: -10px" alt="elephant">
          </div>
        </router-link>
      </div>
      <div class="sideBtn rounded-start-4 bg-warning d-flex">
        <router-link to="/userboard/donate" >
          <div class="d-flex flex-column align-items-center text-white h-100 position-relative" style="width: 70px;">
            <font-awesome-icon class="fs-3 mb-2 mt-4" icon="fa-solid fa-drumstick-bite"/>
            <h3 class="h4 fw-bold" style="writing-mode: vertical-rl;">
              <div class="fs-6 text-end">- donation</div>
              捐獻車
            </h3>
            <img src="@/assets/cheetah.png" class="position-absolute" style="" alt="elephant">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sideBtn-container {
  z-index: 100;
  right: -250px;
  transition: all 1s;
}

.sideBtn-container.active {
  right: -20px;
}

.sideBtn-close{
  left: -30px;
  transition: all 1s;
}

.sideBtn-close.active{
  left: calc(-180px - 1rem);
}

.sideBtn {
  width: 90px;
  height: 250px;
  transition: .5s;
  cursor: pointer;
}

.sideBtn img {
  bottom: -10px;
  right: 30px;
}

.sideBtn:hover {
  transform: translateX(-20px);
}

.sideBtn:hover img{
  transform-origin: 50%;
  animation: sideBtnImg .75s infinite linear;
}

@keyframes sideBtnImg {
  25% {transform: rotate(5deg);}
  75% {transform: rotate(-5deg);}
}

.progress-bar-container {
  width: 500px;
  height: 25px;
  border-radius: 25px;
  overflow: hidden;
}

.progress-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f0, #0ff);
  transition: width .2s linear;
}

.btn-hamburger {
  color: gray;
  cursor: pointer;
}

.btn-hamburger:hover {
  color: var(--bs-dark);
}

</style>

<script>
import { mapActions, mapState } from 'pinia'
import statusStore from '@/stores/statusStore'

export default {
  data () {
    return {
      sideOpen: true
    }
  },
  computed: {
    ...mapState(statusStore, ['openNow'])
  },
  watch: {
    openNow () {
      if (this.openNow !== 'side') {
        this.sideOpen = false
      }
    }
  },
  methods: {
    ...mapActions(statusStore, ['openBtnHandler']),
    toggleSideBtn () {
      this.sideOpen = !this.sideOpen
      this.sideOpen ? this.openBtnHandler('side') : this.openBtnHandler('')
    }
  }
}
</script>
