<script setup lang="ts">
import ProductComponent from '@/components/ProductComponent.vue'
import { useProductsStore } from '@/stores/products'
import RippleButton from '@/components/RippleButton.vue'
/* import { WebApp } from '@/telegram/index' */
const store = useProductsStore()
/* console.log(WebApp) */
</script>

<template>
  <section>
    <article v-for="(_, id) in store.data">
      <ProductComponent :id="id" />
    </article>
  </section>
  <RippleButton />
</template>

<style scoped>
section {
  max-width: 800px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  justify-content: center;
}

article {
  display: flex;
  justify-content: center;
}
</style>
