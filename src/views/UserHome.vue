<template>
  <Video ref="video"></Video>
  <div class="vh-100"></div>
  <div class="bg-white w-100 py-6">
    <div class="container-md">
      <section class="">
        <div class="row justify-content-around mx-md-7 g-0">
          <div class="col-lg-3">
            <div class="d-flex flex-column align-items-center justify-content-around w-100 text-black" style="height: 300px;">
              <div class="endangered-num fw-bolder mb-0 lh-sm" style="text-shadow: 3px 5px 5px rgba(0, 0, 0, .25); font-size: 100px;">3097</div>
              <div class="endangered-text fs-3 fw-bold" style="text-shadow: 3px 5px 5px rgba(0, 0, 0, .25);">瀕臨絕種</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="d-flex flex-column align-items-center justify-content-around w-100 text-white bg-primary" style="height: 300px;">
              <div class="fw-bolder mb-0 lh-sm" style="text-shadow: 3px 5px 5px rgba(0, 0, 0, .25); font-size: 100px;">9487</div>
              <div class="fs-3 fw-bold" style="text-shadow: 3px 5px 5px rgba(0, 0, 0, .25);">捐獻人數</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="d-flex flex-column align-items-center justify-content-around w-100 text-black" style="height: 300px;">
              <div class="endangered-num fw-bolder mb-0 lh-sm" style="text-shadow: 3px 5px 5px rgba(0, 0, 0, .25); font-size: 100px;">520K</div>
              <div class="endangered-text fs-3 fw-bold" style="text-shadow: 3px 5px 5px rgba(0, 0, 0, .25);">商品售出</div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-6">
        <div class="row g-0">
          <div class="col-lg-6">
            <div class="row g-0">
              <div class="col-12 bg-secondary" style="height: 320px;">
                <div class="mx-5 py-5 h-100 d-flex flex-column justify-content-between">
                  <div class="text-white">
                    <h2 class="h3 fw-bold">拒絕瀕危</h2>
                    <p class="mb-0">我們該正視人類帶給動物的傷害<br>
                        拓展高樓大廈壓縮動物的生存空間<br>
                        為了美麗飾品造導致的獵殺<br>
                        工業成長帶來的全球暖化水源減少</p>
                  </div>
                  <div>
                    <a href="#" class="btn btn-outline-light">閱讀更多</a>
                  </div>
                </div>
              </div>
              <div class="col-12 home-rhino" style="height: 320px;">
                <div class="mask-container overflow-hidden">
                  <div class="mask mask-color-home-rhino d-none d-lg-block"></div>
                  <img src="../assets/home-rhino.jpg" class="h-100 w-100 object-fit-cover" alt="rhino">
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row flex-column flex-lg-column-reverse g-0">
              <div class="col-12 bg-primary" style="height: 320px;">
                <div class="mx-5 py-5 h-100 d-flex flex-column justify-content-between">
                  <div class="row g-2 g text-white">
                    <h2 class="col-12 h3 fw-bold">能做什麼</h2>
                    <div class="col-8 d-flex align-items-center">
                      <p class="mb-0">挑個自己喜歡的小禮物<br>
                         不只是購買也是幫助</p>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                      <a href="#" class="btn btn-outline-light text-nowrap">前往購物</a>
                    </div>
                    <div class="col-8 d-flex align-items-center">
                      <p class="mb-0">若您有多餘的心力<br>
                         請參考捐獻</p>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                      <a href="#" class="btn btn-outline-light text-nowrap">前往捐獻</a>
                    </div>
                    <div class="col-8 d-flex align-items-center">
                      <p class="mb-0">照護動物小天使<br>
                         你也能實際的行動</p>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                      <a href="#" class="btn btn-outline-light text-nowrap">前往報名</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 home-elephant" style="height: 320px;">
                <div class="mask-container overflow-hidden">
                  <div class="mask mask-color-home-elephant d-none d-lg-block"></div>
                  <img src="../assets/home-elephant.jpg" class="h-100 w-100 object-fit-cover" alt="">
                </div>
              </div>
            </div></div>
        </div>
      </section>
      <section class="d-flex justify-content-center mt-6">
        <DonateProgress></DonateProgress>
      </section>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<style>
  .wrap {
    max-width: 1440px;
    margin: 0 auto;
  }

  .endangered-num, .endangered-text{
    position: relative;
  }

  .endangered-num::after, .endangered-text::after {
    content: '';
    position: absolute;
    bottom: 5%;
    left: 10%;
    width: 100%;
    height: 20%;
    z-index: -1;
    -webkit-box-shadow: 3px 5px 5px rgba(0, 0, 0, .25);
    -ms-box-shadow: 3px 5px 5px rgba(0, 0, 0, .25);
    box-shadow: 3px 5px 5px rgba(0, 0, 0, .25);
    background: var(--bs-primary);
  }

  .mask-color-home-elephant {
  background-color: rgba(240,156,30, .25);
  }

  .home-elephant:hover .mask{
    top: 100%;
  }

  .mask-color-home-rhino {
    background-color: rgba(38, 51 ,37, .25)
  }

  .home-rhino:hover .mask{
    bottom: 100%;
  }

  .home-elephant img, .home-rhino img {
    transition: all .5s cubic-bezier(0.71, 0.17, 0.31, 0.96);
  }

  .home-elephant:hover img, .home-rhino:hover img {
    transform: scale(1.1);
  }

</style>

<script>
import Video from '@/components/VideoC.vue'
import DonateProgress from '@/components/DonateProgress.vue'
// import Footer from '@/components/FooterC.vue'

export default {
  components: {
    Video,
    DonateProgress
    // Footer
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
  }
}

</script>
