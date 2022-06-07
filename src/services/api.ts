import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import baseURL from './baseURL';

const token = AsyncStorage.getItem('@token');

const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;