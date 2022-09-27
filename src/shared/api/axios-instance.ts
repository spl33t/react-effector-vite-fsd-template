import axios from "axios"

export type Method = "get" | "delete" | "post" | "put"
export type ResponseType = "text" | "json" | "formData" | "blob" | "arrayBuffer"

export interface HttpRequestOptions extends Omit<RequestInit, "body"> {
  url: string
  method: Method
  data?: any
  responseType?: ResponseType
  params?: any
}

//FIXME HARDCODE URL
//FIXME withCredentials: true ОШИБКА CORS
const axiosInstance = axios.create({
  //baseURL: process.env.REACT_APP_API_URL,
  //withCredentials: true,
})

export const request = <T = void>(options: HttpRequestOptions): Promise<T> => {
  return axiosInstance
    .request({
      url: options.url,
      method: options.method,
      data: options?.data,
      params: options.params,
    })
    .then((response) => {
      console.log(
        `Request URL: ${options.url}, METHOD: ${options.method}, DATA:`,
        response.data
      )
      return response.data
    })
    .catch((error) => {
      console.log(error.response)
      throw error.response?.data
    })
}

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`
  return config
}

axiosInstance.interceptors.request.use(authInterceptor)
