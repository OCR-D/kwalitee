import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primeicons/primeicons.css'
import './assets/main.css'
import './assets/app.scss'
import i18n from "@/i18n"


const app = createApp(App)

app.use(PrimeVue, { /* options */ })

app.use(router)
app.use(i18n)

app.mount('#app')
