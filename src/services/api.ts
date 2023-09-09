import axios from 'axios';

import { REACT_APP_API_URL } from '../config/api';

export const api = axios.create({
  baseURL: REACT_APP_API_URL,
});
