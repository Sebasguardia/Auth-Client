// src/features/profile/services/profileService.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.MODE === 'development' 
  ? '' 
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

export const getProfile = async () => {
  try {
    const response = await api.get('/api/profile');
    return response.data;
  } catch (error) {
    console.error('Error en getProfile:', error);
    const errorMessage = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(errorMessage);
  }
};