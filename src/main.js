import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap'
import { createPinia } from 'pinia'
import AOS from '../node_modules/aos/dist/aos.js'

// Import component
import Loading from 'vue3-loading-overlay'
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import { currency, date } from './methods/filters'

// font-awesome icons

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHippo, faDrumstickBite, faChevronRight, faToiletPaper, faCartPlus, faCartArrowDown, faTrash, faHouse, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookSquare, faYoutube, faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

library.add(faHippo, faDrumstickBite,
  faInstagram, faFacebookSquare, faYoutube, faFacebookF, faTwitter, faGithub,
  faHandPointRight, faChevronRight, faToiletPaper, faCartPlus, faCartArrowDown, faTrash,
  faHouse,
  faCaretUp, faCaretDown)

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency,
  date
}

AOS.init()
const pinia = createPinia()

app.use(VueAxios, axios)
app.use(router)
app.use(bootstrap)
app.use(pinia)
app.component('LoadingOverlay', Loading)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
