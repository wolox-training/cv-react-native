import api from '../app/config/api.js';

export function getGroups() {
  return api.get('/groups');
}
