<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import lottie from 'lottie-web/build/player/lottie'
import { defineProps, ref, onMounted, computed, watch } from 'vue'

const props = defineProps<{
  id: number
}>()

const store = useProductsStore()
const product = store.data[props.id]
const view = ref(null)

function increase() {
  store.increment(props.id)
  store.increment()
}

function decrease() {
  if (product.quantity) product.quantity--
}

const isNotEmpty = computed(() => product.quantity != 0)

let animation: any = null
onMounted(() => {
  animation = lottie.loadAnimation({
    container: view.value,
    render: 'svg',
    autoplay: false,
    path: product.appearance,
    loop: false,
  })
})

function animationPlay() {
  if (animation && animation.isPaused) {
    animation.goToAndPlay(0, false)
  }
}

watch(
  () => product.quantity,
  (newValue, oldValue) => {
    if (newValue > 0 && oldValue == 0) animationPlay()
  }
)
</script>

<template>
  <div class="product">
    <div class="quantity">{{ product.quantity }}</div>
    <div class="photo" ref="view"></div>
    <span class="info">{{ product.title }}</span>
    <span class="price"> ⋅ ${{ product.price }}</span>

    <div class="buttons">
      <button
        @click="decrease"
        class="button-decrease"
        :class="{ 'button-decrease-show': isNotEmpty }"
      >
        -
      </button>
      <button
        @click="increase"
        class="button-increase"
        :class="{ 'button-increase-small': isNotEmpty }"
      >
        {{ isNotEmpty ? '+' : 'ADD' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}

.v-enter-from,
.v-leave-to {
  width: 0px;
  opacity: 0;
}
.product {
  width: 125px;
  padding: 4px 5px 21px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 500;
  position: relative;
}

.quantity {
  position: absolute;
  right: 5px;
}

.photo {
  width: 74px;
  height: 74px;
  margin: auto;
  font-size: 13px;
  line-height: 16px;
}

.price {
  font-weight: 700;
  white-space: nowrap;
}

.buttons {
  width: 80px;
  height: 30px;
  margin: 10px auto 0;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
}

button {
  border-radius: 7px;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}

*:focus {
  outline: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
.button-increase {
  background-color: var(--main-color);
  width: 100%;
  position: absolute;
  right: 0;
  transition: width 0.15s ease;
}

.button-increase-small {
  width: 38px;
}

.button-decrease {
  background-color: #e64d44;
  width: 38px;
  position: absolute;
  left: 0;
  transform: scale3d(0.9, 0.9, 1);
  transition: visibility 0.15s ease, transform 0.15s ease;
  visibility: hidden;
}

.button-decrease-show {
  visibility: visible;
  transform: scale3d(1, 1, 1);
}
</style>
