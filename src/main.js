import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@mdi/font/css/materialdesignicons.css'

// Inicialize o AOS com configurações melhoradas
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: false,
  mirror: true,
  offset: 50,
  anchorPlacement: 'top-bottom'
})

createApp(App).mount('#app')
