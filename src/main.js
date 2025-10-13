import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from "@vueuse/motion";
import App from './App.vue'
import router from './router'

// Import CSS
import './assets/css/reset.css'
import './assets/css/grid.css'
import  './assets/css/styles.css'
import  './assets/css/responsive.css'

// TailwindCSS
import './assets/css/main.css'

// Header and Footer CSS
import './assets/css/header.css'
import './assets/css/footer.css'

import 'animate.css'
import WOW from 'wow.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin);
app.mount('#app')

new WOW(
  {
    animateClass: 'animate__animated', // default
  }
).init();
