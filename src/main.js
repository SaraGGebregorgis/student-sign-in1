import { createApp } from 'vue'
//import pinia to use 
import { createPinia } from 'pinia'
import App from './App.vue'

//initials pinia and add it to the vue app
const app = createApp(App)
const pinia = createPinia()

//mount the app
app.use(pinia)
app.mount('#app')
