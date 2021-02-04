import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'

const app = createApp(App)
// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueScrollTo)
app.use(router)
app.mount('#app')
