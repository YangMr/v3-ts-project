// 引入axios 与 axios ts类型
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig
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
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default service
