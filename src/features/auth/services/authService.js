// src/features/auth/services/authService.js
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

// Funciones - en desarrollo las rutas serán /api/login (via proxy)
// en producción serán /api/login (directo al backend)
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/api/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/api/login', credentials);
    const data = response.data;
    console.log('Respuesta de login:', data);
    
    if (data.token) {
      document.cookie = `auth_token=${data.token}; path=/; max-age=86400`;
    }
    
    return data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error.response?.data || error.message;
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.delete('/api/logout');
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    return response.data;
  } catch (error) {
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    throw error.response?.data || error.message;
  }
};