<template>
  <div class="donate-progress">
    Donate
    <div class="donate-total" :style="`width: ${donatePercent}`">
      Donate
    </div>
    <div class="position-absolute end-0 bottom-0 fs-6 text-dark text-end" v-if="myWidth">
      {{ donate }} / {{ donateTarget }}<br>
      捐獻金額完程度
    </div>
    <div class="position-absolute end-0 top-100 fs-9 text-dark text-end" v-else>
      {{ donate }} / {{ donateTarget }}<br>
      捐獻金額完程度
    </div>
  </div>
</template>

<style>
  .donate-progress {
    display: inline-block;
    font-size: 180px;
    font-weight: 900;
    color: #fff;
    text-shadow: 0 0 3px var(--bs-primary), 0 0 3px var(--bs-primary), 0 0 3px var(--bs-primary), 0 0 3px var(--bs-primary), 0 0 3px var(--bs-primary), 0 0 3px var(--bs-primary);
    letter-spacing: 2px;
    position: relative;
  }

  @media (max-width: 768px) {
    .donate-progress {
      font-size: 100px;
    }
  }

  .donate-total {
    content: "Donate";
    position: absolute;
    left: 0;
    top: 0;
    color: var(--bs-primary);
    width: 0%;
    height: 100%;
    overflow: hidden;
    transition: width 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
</style>

<script>
import donateStore from '@/stores/donateStore'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(donateStore, ['donatePercent', 'donateTarget', 'donate']),
    myWidth () {
      return window.innerWidth > 768
    }
  },
  methods: {
    ...mapActions(donateStore, ['getDonateData'])
  },
  created () {
    this.getDonateData()
  }
}

</script>
