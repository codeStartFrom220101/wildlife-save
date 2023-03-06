<template>
  <div class="donate-progress">Donate</div>
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

  .donate-progress::after {
    content: "Donate";
    position: absolute;
    left: 0;
    top: 0;
    color: var(--bs-primary);
    width: 50%;
    height: 100%;
    overflow: hidden;
    /* animation: loading-animation 6s linear infinite; */
  }
</style>
