// src/features/profile/services/profileService.js
import axios from 'axios';

const API_BASE_URL = 'https://reflexoperu-v3.marketingmedico.vip/backend/public';

const apiWithCredentials = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const apiWithoutCredentials = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
}

export const getProfile = async () => {
  try {
    // Primero intenta con credentials
    try {
      const response = await apiWithCredentials.get('/api/profile');
      return response.data;
    } catch (error) {
      // Si falla por CORS, intenta sin credentials pero con token en header
      console.log('Intento con credentials falló, intentando sin credentials...');
      const token = getCookie('auth_token');
      
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await apiWithoutCredentials.get('/api/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    }
  } catch (error) {
    console.error('Error en getProfile:', error);
    const errorMessage = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(errorMessage);
  }
};