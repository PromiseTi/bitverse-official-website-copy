import Axios from 'axios'
import configs from './config'

//
Axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/proxyApi' : process.env.VUE_APP_API
Axios.defaults.timeout = configs.timeout
Axios.defaults.headers = configs.header

//
Axios.interceptors.request.use((config) => {
  // let token = localStorage.getItem('token')
  config.headers.Authorization = '56c214cd-8892-4fd3-a1b8-6f735efb8c5d'
  return config
})
//
Axios.interceptors.response.use(
  (response) => {
    const { data } = response

    return data
  },
  (err) => {
    // let msg = ''
    // if (err && err.response) {

    // }
    // console.log(msg)
    return Promise.reject(err)
  }
)



export default Axios
