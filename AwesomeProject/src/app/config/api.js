import axios from 'axios';

const api = axios.create({
  baseURL: 'http://abe0cab1.ngrok.io'
});

export default api;
