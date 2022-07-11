import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/index.css'

const test = {
  a: 1,
}
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
