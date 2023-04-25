<template>
  <div class="donate-progress">
    Donate
    <div class="donate-total" :style="`width: ${donatePercent}`">
      Donate
    </div>
  </div>
</template>

<style>
  .donate-progress {
    display: inline-block;
    font-size: 180px;
    font-weight: 900;
    color: #fff;
    text-shadow: 0 0 2px var(--bs-primary), 0 0 1px var(--bs-primary), 0 0 1px var(--bs-primary), -1px 0 1px var(--bs-primary), -1px 0 1px var(--bs-primary), -1px 0 1px var(--bs-primary);
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
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
</style>

<script>
import donateStore from '@/stores/donateStore'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(donateStore, ['donatePercent'])
  },
  methods: {
    ...mapActions(donateStore, ['getDonateData'])
  },
  created () {
    this.getDonateData()
    console.log(123)
  }
}

</script>
