<template>
  <Video class="position-fixed"></Video>
  <SideBtn class="position-fixed bg-secondary sideBtnHover d-none d-sm-block" style="top: 20%; z-index: 11;">
    <font-awesome-icon class="fs-3 mb-2 mt-4" icon="hippo"/>
    <h3 class="h4 fw-bold" style="writing-mode: vertical-rl;">
      <div class="fs-6 text-end">- Animals</div>
      動物們
    </h3>
    <img src="@/assets/elephant.png" class="position-absolute" style="width: 200px; bottom: -30px; right: 10px;" alt="elephant">
  </SideBtn>
  <SideBtn class="position-fixed bg-success sideBtnHover d-none d-sm-block" style="top: 50%; z-index: 11;">
    <font-awesome-icon class="fs-3 mb-2 mt-4" icon="fa-solid fa-drumstick-bite"/>
    <h3 class="h4 fw-bold" style="writing-mode: vertical-rl;">
      <div class="fs-6 text-end">- donation</div>
      捐獻車
    </h3>
    <img src="@/assets/cheetah.png" class="position-absolute" style="width: 300px; bottom: -30px; right: -10px;" alt="elephant">
  </SideBtn>
  <div class="position-absolute bg-white" style="width:100%; top: 150vh;">
    <section class="px-md-5 mt-md-5">
      <div class="row g-0">
        <div class="col-lg-4">
          <div class="bg-about about d-flex align-items-center justify-content-center" style="background-position: 50% 50%;" ref="about">
            <div class="d-flex flex-column align-items-center justify-content-center text-center px-3" style="background: rgba(0, 0, 0, 0.3); width: 35%; height: 20%;">
              <p class="text-primary mb-0 fs-5">若你想知道更多</p>
              <a href="#" class="link-primary py-1 px-3">關於我們</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="bg-hero about p-3 bg-primary d-flex flex-column justify-content-around align-items-center">
            <div class="text-center">
              <h4 class="mb-3 h2 fw-bold text-secondary">我們是如何幫助動物的</h4>
              <p class="fs-5">
                我們對抗盜獵者<br>
                為受傷的動物包紮<br>
                在荒野中製造水坑<br>
                為受傷過重的動物暫時提供安全的住所<br>
              </p>
              <h4 class="h2 mb-3 fw-bold text-secondary">如何成為英雄</h4>
              <p class="fs-5">
                為動物捐獻食物<br>
                捐贈我們所需的裝備<br>
                我們也有每日的志工團體可以參加<br>
                也可以購買我們發行的產品<br>
                這些收入將會為動物帶來更好的生活
              </p>
              <a href="#" class="btn btn-outline-secondary">立即行動</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="bg-contact about d-flex align-items-center justify-content-center" style="" ref="about">
            <div class="d-flex flex-column align-items-center justify-content-center text-center px-3" style="background: rgba(0, 0, 0, 0.3); width: 35%; height: 20%;">
              <p class="text-primary mb-0 fs-5">有任何需要我們幫助的地方</p>
              <a href="#" class="link-primary py-2 px-3">聯絡我們</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="px-md-5 mt-md-5" style="height: 200vh;">
    </section>
  </div>
</template>

<style>
.sideBtnHover {
  right: -20px;
  transition: .5s;
}

.sideBtnHover:hover {
  right: 0px;
  transition: .5s;
}

.about-us>h3>span{
  font-size: 45px;
  color: var(--bs-secondary);
}

.img2, .img3 {
  width: 100%;
  height: 75vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.about {
  width: 100%;
  height: 75vh;
  background-size: cover;
  background-repeat: no-repeat;
}

.bg-about {
  background-image: url('@/assets/關於我們.jpg');
}

.bg-contact {
  background-image: url('@/assets/聯絡我們.jpg');
}

</style>

<script>
import Video from '@/components/VideoC.vue'
import SideBtn from '@/components/SideBtn.vue'

export default {
  components: {
    Video,
    SideBtn
  },
  data () {
    return {
      scrollY: 0,
      sunsetBPY: 80
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
      // const sunset = this.$refs.sunset
      // console.log(sunset)
      // if (this.scrollY >= window.innerHeight) {
      //   if (window.scrollY > this.scrollY && this.sunsetBPY > 0) {
      //     if (this.sunsetBPY > 0) {
      //       this.sunsetBPY -= 0.8
      //     }
      //   } else {
      //     if (this.sunsetBPY < 100) {
      //       this.sunsetBPY += 0.8
      //     }
      //   }
      // } else {
      //   this.sunsetBPY = 100
      // }
      // sunset.style.backgroundPositionY = this.sunsetBPY + '%'
      // console.log(sunset.style.backgroundPositionY, this.scrollY, window.innerHeight)
      // this.scrollY = window.scrollY
    }
  }
}

</script>
