import axios from 'axios'
import { Config } from '@config'

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */
const http = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

http.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response || error.request || error.message)
)

export const setAuthorizationHeader = (accessToken) => {
  http.defaults.headers.Authorization = `Bearer ${accessToken}`
}

export const unSetAuthorizationHeader = () => {
  http.defaults.headers.Authorization = ''
}

export default http
