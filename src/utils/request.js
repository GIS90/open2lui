import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 300 * 1000, // request timeout
  clarifyTimeoutError: true, // throw ETIMEDOUT error instead of generic ECONNABORTED on request timeouts
  withCredentials: true // CORS credential
})

// 配置CORS跨域session丢失问题
// service.defaults.withCredentials = true

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    if (store.getters.rtx_id) {
      // let rtx-id to headers
      // record user to use method
      config.headers['X-Rtx-Id'] = store.getters.rtx_id
    }
    // CORS credential
    config.headers['Access-Control-Allow-Origin'] = '*'
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom status_id
   * Here is just an example
   * You can also judge the status by HTTP Status status_id
   *
   * status_id == 100 api no error, return data
   * status_id == 101 api no error, return data is null
   * status_id > 101 and status_id < 500 api no error, return data is error
   * status_id > 500 api is error
   */
  response => {
    const res = response.data
    // console.log(response)
    // if the custom status_id is not 100, it is judged as an error.
    if (res.status_id !== 100) {
      // status_id大于500均为Server故障
      if (res.status_id >= 500) {
        Message({
          message: '服务端发生故障，请联系管理员：mingliang.gao',
          type: 'error',
          duration: 3 * 1000
        })
        // status_id 大于500属于API服务端发生故障
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        Message({
          message: res.message || '系统发生故障，请联系管理员：mingliang.gao',
          type: 'warning',
          duration: 3 * 1000
        })
      }

      // return Promise.reject(new Error(res.message || 'Error'))
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
