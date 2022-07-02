import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import apiPlugin from '@/plugins/api.plugin.js'

createApp(App).use(store).use(router).use(apiPlugin).mount('#app')
