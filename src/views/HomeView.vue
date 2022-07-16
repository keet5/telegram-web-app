<script setup lang="ts">
import ProductComponent from '@/components/ProductComponent.vue'
import { useProductsStore } from '@/stores/products'
import { webApp } from '@/telegram/index'
const store = useProductsStore()

store.$subscribe((mutation, state) => {
  if (state.data.some((product) => product.quantity)) {
    webApp.MainButton.isVisible = true
  } else {
    webApp.MainButton.isVisible = false
  }
})
</script>

<template>
  <section
    class="max-w-[480px] m-auto grid grid-cols-1 c2:grid-cols-2 c3:grid-cols-3 c4:grid-cols-4 justify-items-center"
  >
    <ProductComponent v-for="(_, id) in store.data" :id="id" />
  </section>
</template>

<style scoped></style>
