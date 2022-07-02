import axios from 'axios'

// const TimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const instance = axios.create({
  mode: 'no-cors',
  baseURL: process.env.VUE_APP_API_HOST,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    // TimeZone
  },
})
instance.setToken = token => {}
instance.removeToken = () => {}

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return res
  },
  err => {
    if (err?.response?.status === 401) {
    }
    if (err?.response?.status === 403) {
    }

    return Promise.reject(err)
  }
)

export default instance
