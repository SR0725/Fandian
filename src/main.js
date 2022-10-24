import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vue3TouchEvents from "vue3-touch-events";


import {
    faWeightScale,
    faArrowRightLong,
    faFileSignature,
    faPrescriptionBottle,
    faScaleUnbalancedFlip,
    faDeleteLeft,
    faPlus
} from '@fortawesome/free-solid-svg-icons'
import {
} from '@fortawesome/free-regular-svg-icons'
import {
} from '@fortawesome/free-brands-svg-icons'
library.add(
    faWeightScale,
    faArrowRightLong,
    faFileSignature,
    faPrescriptionBottle,
    faScaleUnbalancedFlip,
    faDeleteLeft,
    faPlus
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(createPinia())
    .use(router)
    .use(Vue3TouchEvents)
    .mount('#app')
