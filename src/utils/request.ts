import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type Method
} from 'axios'
import type { DataType } from '@/utils/types'

console.log('aaa', import.meta.env.VITE_APP_BASE_API)
// axios实例对象
const service: AxiosInstance = axios.create({
  // baseURL: '/dev-api',
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 20000
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 请求成功,将response.data返回出去
    if (response.status === 200 && response.data.code === 20000) {
      return response.data
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

const request = <T = any>(
  url: string,
  method: Method = 'GET',
  data?: Object,
  options?: InternalAxiosRequestConfig
) => {
  return service.request<T, DataType<T>>({
    url,
    method,
    [method === 'GET' ? 'params' : 'data']: data,
    ...options
  })
}

export const get = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'GET', data)
}

export const post = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'POST', data)
}

export const put = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'PUT', data)
}

export const del = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'DELETE', data)
}

export default request


// 开发环境 请求的代理 /api http://www.baidu.com

// 生产环境 请求代理 /pro http://www.jd.com

// 测试环境 请求代理 /test http://test.com

// 预发布   请求代理 /stage http://stage.com
