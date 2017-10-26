import axios from 'axios';
import { getContacts } from '../services/contactService';

const api = axios.create({
  baseURL = 'http://localhost:3000/'
});

export default api;
