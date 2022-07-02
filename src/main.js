import { createApp } from 'vue'

import 'devextreme/dist/css/dx.dark.css'

// TODO: так как тестовый проект - игнорирую большой вес бандла и импортирую сразу всё
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'
import router from './router'
import store from './store'

import apiPlugin from '@/plugins/api.plugin.js'

createApp(App)
  .use(ElementPlus, { size: 'small', zIndex: '9999' })
  .use(store)
  .use(router)
  .use(apiPlugin)
  .mount('#app')
