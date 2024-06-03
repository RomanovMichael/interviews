import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from 'firebase/app'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyAR1L-ZvtVHDdjqU_5ey0H_vh3yoavP57s",
  authDomain: "interviews-ac0bb.firebaseapp.com",
  projectId: "interviews-ac0bb",
  storageBucket: "interviews-ac0bb.appspot.com",
  messagingSenderId: "276658823192",
  appId: "1:276658823192:web:9e5c200e936306aac5e36d"
};

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)

app.mount('#app')
