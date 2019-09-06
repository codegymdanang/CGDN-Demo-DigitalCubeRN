import http from '@services/http'

export default class AddToLibrary {
  static addToLibrary(userId, params) {
    return http.post(`users/${userId}/books`, params)
  }
}
