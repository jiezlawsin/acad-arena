import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.scss"
import "bootstrap"
import "slick-carousel/slick/slick"
import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"
import './assets/fonts/fonts.scss'
import './assets/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
