import './assets/main.css'
import es from './assets/dictionaries/es-ES.json'
import en from './assets/dictionaries/en-EN.json'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const dictionaries = {
  'es': es,
  'en': en,
}
  
const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: dictionaries,
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
