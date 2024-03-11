// 引入axios 与 axios ts类型
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type Method
} from 'axios'

// 创建实例对象
const service: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 20000
})

// 创建请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 创建响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code === 20000) {
      return response.data
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

interface DataType<T = any> {
  code: number
  message: string
  data: T
}

const request = <T = any>(
  url: string,
  method: Method = 'GET',
  submitData?: object,
  options?: InternalAxiosRequestConfig
) => {
  return service.request<T, DataType<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData,
    ...options
  })
}

export const get = <T = any>(url: string, data = {}) => {
  return request<T>(url, 'GET', data)
}

export const post = <T = any>(url: string, data = {}) => {
  return request<T>(url, 'POST', data)
}

export const put = <T = any>(url: string, data = {}) => {
  return request<T>(url, 'POST', data)
}

export const del = <T = any>(url: string, data = {}) => {
  return request<T>(url, 'DELETE', data)
}

export default request
