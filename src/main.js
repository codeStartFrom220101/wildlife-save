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
import { faHippo, faDrumstickBite, faChevronRight, faToiletPaper, faCartPlus, faCartArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookSquare, faYoutube, faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

library.add(faHippo, faDrumstickBite,
  faInstagram, faFacebookSquare, faYoutube, faFacebookF, faTwitter, faGithub,
  faHandPointRight, faChevronRight, faToiletPaper, faCartPlus, faCartArrowDown, faTrash)

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
