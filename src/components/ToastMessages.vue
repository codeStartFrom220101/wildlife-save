<template>
  <div class="toast-container position-fixed px-3 py-0 end-0" style="top: 80px">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" ></Toast>
  </div>
</template>

<script>
import Toast from '@/components/ToastC.vue'

export default {
  components: {
    Toast
  },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-msg', msg => {
      const { style = 'success', title, content } = msg
      this.messages.push({ style, title, content })
    })
  }
}
</script>
