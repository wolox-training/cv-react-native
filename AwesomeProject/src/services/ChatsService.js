import api from '../app/config/api.js';

export function getChats() {
  return api.get('/messages');
}
