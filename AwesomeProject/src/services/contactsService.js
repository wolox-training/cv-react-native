import api from '../config/api.js';

export function getContacts() {
  return api.get('/users')
}
