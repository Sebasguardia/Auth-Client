// src/features/profile/services/profileService.js
import axios from 'axios';

// En desarrollo usa proxy (/api), en producción usa URL directa
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://reflexoperu-v3.marketingmedico.vip/backend/public'
  : '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Interceptor se mantiene igual
api.interceptors.request.use((config) => {
  const cookies = document.cookie.split(';');
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('auth_token='));
  if (tokenCookie) {
    const token = tokenCookie.split('=')[1];
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getProfile = async () => {
  try {
    const response = await api.get('/api/profile');
    return response.data;
  } catch (error) {
    console.error('Error en getProfile:', error);
    throw error.response?.data || error.message;
  }
};