import axios from 'axios'

export interface IAxiosService {
  post(url: string, data?: any): Promise<any>
  get(url: string, param?: any): Promise<any>
}

// axios 配置
function getInstance(serverPath: string) {
  const http = axios.create({
    baseURL: serverPath,
    timeout: 50000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
  })
  /* request拦截器 */
  http.interceptors.request.use(
    (config: any) => {
      return config
    },
    (error: any) => {
      Promise.reject(error)
    }
  )
  /* respone拦截器 */
  http.interceptors.response.use(
    (res: any) => {
      if (res.data instanceof Blob) {
        return res
      }
      return Promise.resolve(res)
    },
    (error: any) => {
      if (error.response) {
      } else {
        return Promise.reject(error)
      }
    }
  )
  return http
}

function getQueryResult(result: any) {
  return result
}

function getActionResult(result: any) {
  return result
}

export default class Service implements IAxiosService {
  public static exception(res: any) {
    return true
  }
  public static catchExceptionError(fn: any) {
    Service.exception = fn
  }
  private $apiPath = ''
  public constructor(apiPath: string) {
    this.$apiPath = apiPath
  }

  public async post(url: string, data?: any) {
    const result = await getInstance(this.$apiPath).post(url, data)
    return result.data
  }

  public async get(url: string, param?: any) {
    const ajax = getInstance(this.$apiPath)
    const result = await ajax({
      url,
      method: 'get',
      params: param,
      withCredentials: true,
      // headers: { 'Content-Type': 'text/plain' },
    })
    return result.data
  }
}

export { getQueryResult, getActionResult, Service }
