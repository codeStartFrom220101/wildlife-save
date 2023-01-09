<template>
  <div class="sideBtn rounded-start-4">
    <div class="d-flex flex-column align-items-center text-primary h-100" style="width: 70px;">
      <slot name="icon"></slot>
      <slot name="text">
        <slot></slot>
      </slot>
      <slot name="elephant"></slot>
    </div>
  </div>
</template>

<style>
.sideBtn {
  width: 90px;
  height: 250px;
}
</style>
