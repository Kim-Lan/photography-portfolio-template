import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTree, faUser, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faGithub, faSquareInstagram, faTree, faUser, faChevronRight, faX);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
