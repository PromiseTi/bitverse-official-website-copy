import Axios from 'axios'
import configs from './config'

//
Axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/proxyApi' : process.env.VUE_APP_API
Axios.defaults.timeout = configs.timeout
Axios.defaults.headers = configs.header

//
Axios.interceptors.request.use((config) => {
  // config.headers.token = getToken()
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
