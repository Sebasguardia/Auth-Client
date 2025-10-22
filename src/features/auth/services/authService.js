// src/features/auth/services/authService.js
import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Interceptor corregido
api.interceptors.request.use((config) => {
  const cookies = document.cookie.split(';');
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('auth_token='));
  if (tokenCookie) {
    const token = tokenCookie.split('=')[1];
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Función para registro
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Función para login
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    const data = response.data;
    console.log('Respuesta de login:', data);
    
    // Setea la cookie
    if (data.token) {
      document.cookie = `auth_token=${data.token}; path=/; secure; samesite=none; max-age=86400`;
    }
    
    return data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error.response?.data || error.message;
  }
};

// Función para logout CORREGIDA
export const logoutUser = async () => {
  try {
    const response = await api.delete('/logout');
    
    // Borra la cookie correctamente
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'; // Por si acaso
    
    console.log('Logout exitoso, cookies borradas');
    return response.data;
  } catch (error) {
    console.error('Error en logout service:', error);
    // Aún así borrar las cookies localmente
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    throw error.response?.data || error.message;
  }
};