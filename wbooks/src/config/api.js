import axios from 'axios';
import { getAccessToken } from '../services/authentication';

const api = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/'
});

const token = getAccessToken();
if (token) {
  api.defaults.headers.common['Authorization'] = token;
}

export default api;
