<template>
  <div class="banner">
    <div class="banner-bg"></div>
    <video autoplay muted loop>
      <source src="@/assets/video-1.mp4" type="video/mp4">
    </video>
    <h2 class="position-absolute translate-middle text-primary display-4 text-center fw-bold lh-base">做個野外英雄<br>拯救野外大小生命</h2>
  </div>
</template>

<style>
/* Reset CSS */
*{
  margin:0;
  padding:0;
}

.banner{
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.banner-bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0, 0.2);
  z-index: 2;
}

.banner video{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

.banner h2 {
  z-index: 5;
  opacity: 0.7;
  left: 20%;
  top: 50%
}

</style>
