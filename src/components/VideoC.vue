<template>
  <div class="banner position-fixed">
    <div class="banner-bg"></div>
    <video ref="video" class="d-none d-md-block" muted autoplay loop @click="videoPause">
      <source src="@/assets/video-1.mp4" type="video/mp4">
    </video>
    <video class="d-md-none" muted autoplay loop>
      <source src="@/assets/video-mobile.mp4" type="video/mp4">
    </video>
    <div class="banner-text px-4 py-3 position-absolute translate-middle text-white fw-bold lh-base start-50 top-50 opacity-75 text-center w-100">
      <h2 class="py-2">保護珍稀生物，守護生命的未來</h2>
      <div>
        <button type="button" class="btn btn-secondary mb-3 cleaning">
          幫人類擦屁股
          <font-awesome-icon icon="fa-solid fa-toilet-paper"/>
        </button>
        <div class="arrow">
          <i class="bi bi-arrow-down"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.banner-bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0, 0.2);
}

.banner video{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

@media (min-width: 768px) {
  .banner-text {
    left: 20%;
  }
}

.arrow {
  font-size: 30px;
  animation: arrow-move 1s cubic-bezier(0,0.2,0.8,1) infinite;
}

@keyframes arrow-move {
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
}

</style>

<script>
export default {
  methods: {
    videoPause () {
      // const video = this.$refs.video
    }
  },
  created () {
    // this.videoPause()
  }
}
</script>
