import http from '@services/http'

export default class User {
  static logIn(params) {
    return http.post('/auth/login', params)
  }

  static register(params) {
    return http.post('/auth/signup', params)
  }
}
