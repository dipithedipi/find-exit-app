import './style.css'
import { createApp } from 'vue'
import 'flowbite';
import Vuex from "vuex";
import App from './App.vue'
import router from './router'
import userStore from "./stores/userStore.js";

const app = createApp(App)

app.use(router).use(Vuex).use(userStore).mount('#app')
