import './style.css'
import { createApp } from 'vue'
import 'flowbite';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
