import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style/index.css'
import svgIcon from './components/SvgIcon.vue'
import contenteditable from 'vue-contenteditable'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(contenteditable)
app.component('icon', svgIcon)
app.mount('#app')
