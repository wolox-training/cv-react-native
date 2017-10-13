import api from '../config/api.js'

export function login(email, password) {
  return api.post('/users/sessions', { email, password }).then((response) => {
    localStorage.setItem('access_token', response.data.token);
    api.defaults.headers.common['Authorization'] = response.data.token;
  });
}
