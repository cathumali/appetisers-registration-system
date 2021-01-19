import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Vue from 'vue'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(VueMaterial)
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)

const myApp = createApp(App)
myApp.use(router)
myApp.use(VueAxios, axios) 
// myApp.use(VueMaterial)
myApp.mount('#app')
 
// createApp(App).use(router).use(VueAxios, axios).mount('#app')
