import axios from 'axios';
import { BASE_URL } from '../store/endpoints';

export const purposeApi = (userId) =>
  axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'x-user-id': userId,
    },
  });
