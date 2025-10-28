// src/features/auth/services/authService.js
import axios from 'axios';

// Configuración para desarrollo y producción
const API_BASE_URL = import.meta.env.MODE === 'development' 
  ? '' // En desarrollo usa proxy
  : 'https://reflexoperu-v3.marketingmedico.vip/backend/public';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Interceptor para agregar token
api.interceptors.request.use((config) => {
  const token = getCookie('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Función auxiliar para obtener cookies
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export const registerUser = async (userData) => {
  try {
    // En desarrollo: /api/register → proxy → https://.../api/register
    // En producción: https://.../api/register
    const response = await api.post('/api/register', userData);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(errorMessage);
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/api/login', credentials);
    const data = response.data;
    console.log('Respuesta de login:', data);
    
    if (data.token) {
      document.cookie = `auth_token=${data.token}; path=/; max-age=86400; SameSite=Lax`;
    }
    
    return data;
  } catch (error) {
    console.error('Error en login:', error);
    const errorMessage = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(errorMessage);
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.delete('/api/logout');
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    return response.data;
  } catch (error) {
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    const errorMessage = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(errorMessage);
  }
};