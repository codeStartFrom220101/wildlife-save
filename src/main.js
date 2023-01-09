import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

// Import component
import Loading from 'vue3-loading-overlay'
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import { currency, date } from './methods/filters'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHippo, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHippo, faSeedling, faInstagram, faFacebookSquare, faYoutube)

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency,
  date
}
app.use(VueAxios, axios)
app.use(router)
app.component('LoadingOverlay', Loading)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
