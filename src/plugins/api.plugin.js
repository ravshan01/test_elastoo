import apiService from '@/services/api.service.js'

export default {
  install: app => {
    app.config.globalProperties.$api = apiService
  },
}
