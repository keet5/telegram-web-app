import { defineStore } from 'pinia'
import type ProductSchema from '@/schemas/ProductSchema'

const data: Array<[string, number, number]> = [
  ['Burger', 4.99, 0],
  ['Fries', 1.49, 0],
  ['Hotdog', 3.49, 0],
  ['Tako', 3.99, 0],
  ['Pizza', 7.99, 0],
  ['Donut', 1.49, 0],
  ['Popcorn', 1.99, 0],
  ['Coke', 1.49, 0],
  ['Cake', 10.99, 0],
  ['Icecream', 5.99, 0],
  ['Cookie', 3.99, 0],
  ['Flan', 7.99, 0],
]

const products: Array<ProductSchema> = data.map(([title, price, quantity]) => ({
  title,
  price,
  quantity,
  appearance: `/src/assets/lottie/${title}.json`,
}))

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    data: products,
  }),
  getters: {
    isNotEmpty: (state) => state.data.some((product) => product.quantity),
  },
  actions: {
    increment(id: number): void {
      this.data[id].quantity++
    },
    decrement(id: number) {
      if (this.data[id].quantity) this.data[id].quantity--
    },
  },
})
