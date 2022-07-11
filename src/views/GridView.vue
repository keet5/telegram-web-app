<template>
  <div class="bg-gray-300 m-auto p-2 container">
    <div
      class="bg-white flex justify-center align-center"
      v-for="i in Array(100)
        .fill(1)
        .map((_, i) => i)"
    >
      {{ i }}
    </div>
  </div>

  <button class="ripple-bg-gray-300">
    Hover me for a lighter background, click me for a ripple effect
  </button>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 560px;
}
</style>
