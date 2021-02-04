import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'

import 'animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(VueScrollTo)
app.use(router)
app.mount('#app')
