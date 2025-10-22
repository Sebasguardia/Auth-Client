// src/features/profile/services/profileService.js
import axios from 'axios';

const API_BASE_URL = '/api'; // Proxy

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Envía cookies si existen
});

// Interceptor: Lee token de cookie y envíalo en header
api.interceptors.request.use((config) => {
  const cookies = document.cookie.split(';');
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('auth_token=')); // Cambia 'token' si el nombre es 'auth_token'
  if (tokenCookie) {
    const token = tokenCookie.split('=')[1];
    config.headers.Authorization = `Bearer ${token}`;
    console.log('Token enviado en header:', token); // Log para depurar
  } else {
    console.log('No se encontró cookie de token');
  }
  return config;
});

// Función para obtener perfil
export const getProfile = async () => {
  try {
    console.log('Intentando obtener perfil...');
    const response = await api.get('/profile');
    console.log('Respuesta de perfil:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error en getProfile:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};