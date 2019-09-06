import http from '@services/http'

export default class ScanIsbn {
  static scanIsbn(isbnCode) {
    return http.post(`books/${isbnCode}`, {})
  }
}
