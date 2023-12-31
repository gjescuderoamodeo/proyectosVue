import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/*import './assets/main.css'



import { createApp } from 'vue'

import { createPinia } from 'pinia'



import App from './App.vue'

import router from './router'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'



const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);



const app = createApp(App)



app.use(pinia)

app.use(router)



app.mount('#app') */