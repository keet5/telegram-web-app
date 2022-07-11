<script setup lang="ts">
import { onMounted, ref } from 'vue'

const vRipple = {
  created: (el: HTMLElemen, binding) => {
    console.log(el)
    console.log(binding)
  },
}
</script>

<template>
  <button v-ripple="'#fff'">button</button>
</template>

<style scoped>
button {
  width: 500px;
  height: 500px;
  background-color: orange;
  position: relative;
  overflow: hidden;
}

span.ripple {
  position: absolute; /* The absolute position we mentioned earlier */
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background: red;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
