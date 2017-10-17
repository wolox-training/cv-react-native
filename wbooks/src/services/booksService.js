import api from '../config/api.js'
import accessToken from '../app/utils/Constants.js'

export function getBooks() {
  return api.get('/books');
}

export function getBookById(id) {
  return api.get(`/books/${id}`);
}
