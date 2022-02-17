import axios from 'axios'
import { kToken } from './constants'
import { getCookie, removeCookie } from './cookie'
import Router from 'next/router'

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL,
})

httpClient.interceptors.request.use((req) => {
  // const token = localStorage.getItem(kToken)
  const token = getCookie(kToken)
  //NOTE add token
  if (token) req.headers = { 'x-access-token': token }
  return req
})

httpClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (403 === error.response.status || 401 === error.response.status) {
      removeCookie(kToken)
      Router.push('/login')
    } else {
      return Promise.reject(error)
    }
  },
)

export default httpClient
