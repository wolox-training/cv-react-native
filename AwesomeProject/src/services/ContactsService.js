import api from '../app/config/api.js';

export function getContacts() {
  return api.get('/users');
}
