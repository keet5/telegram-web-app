<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MDCRipple } from '@material/ripple'

onMounted(() => {
  const buttons = document.querySelector('.mdc-button')
  if (buttons) {
    const buttonRipple = new MDCRipple(buttons)
  }
})
</script>

<template>
  <div class="mdc-touch-target-wrapper">
    <button class="mdc-button mdc-button--touch">
      <span class="mdc-button__ripple"></span>
      <span class="mdc-button__touch"></span>
      <span class="mdc-button__label">My Accessible Button</span>
    </button>
  </div>
</template>

<style lang="sass" scoped>
@use '@material/button/styles'
</style>
