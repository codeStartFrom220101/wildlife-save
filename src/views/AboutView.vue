<template>
  <div class="banner"></div>
  <div class="container py-6">
    <div class="d-flex justify-content-center mb-4">
      <h2 class="fw-bold border-bottom border-5 pb-2" style="border-color: rgba(240, 156, 30, .5) !important">關於動齊來</h2>
    </div>
    <div class="row row-cols-md-2 row-cols-1 g-3 g-md-5">
      <div class="col">
        <div class="d-flex justify-content-center align-items-center h-100">
          <p class="mb-0 text-center fw-bold">
            我們是由一群喜愛動物的人1995年11月所組成的組織，<br>
            主要的活動範圍在非洲，<br>
            工作是為動物保育與永續做出努力，<br>
            並且救助受傷的動物。
          </p>
        </div>
      </div>
      <div class="col">
        <img src="@/assets/trinity-treft-AKqbM6He6gM-unsplash.jpg" class="w-100 object-fit-cover" alt="">
       </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('@/assets/waldemar-slX4Ue9GKpo-unsplash.jpg');
  background-size: cover;
  background-position: 50% 50%;
  height: 560px;
  width: 100%;
}

</style>
