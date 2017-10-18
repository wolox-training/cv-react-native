import api from '../config/api.js'

export function getBooks() {
  return api.get('/books');
}

export function getBookById(id) {
  return api.get(`/books/${id}`);
}
