// src/features/auth/services/authService.js
import axios from 'axios';

const API_BASE_URL = 'https://reflexoperu-v3.marketingmedico.vip/backend/public';

// Crear dos instancias de axios: una con credentials y otra sin
const apiWithCredentials = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const apiWithoutCredentials = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
});

// Función inteligente que intenta con credentials primero, luego sin
const makeRequest = async (method, url, data = null) => {
  try {
    // Primero intenta con credentials
    let response;
    if (method === 'get') {
      response = await apiWithCredentials.get(url);
    } else if (method === 'post') {
      response = await apiWithCredentials.post(url, data);
    } else if (method === 'delete') {
      response = await apiWithCredentials.delete(url);
    }
    return response.data;
  } catch (error) {
    // Si falla por CORS, intenta sin credentials y maneja cookies manualmente
    console.log('Intento con credentials falló, intentando sin credentials...');
    
    let response;
    const config = {
      headers: {
        'Authorization': `Bearer ${getCookie('auth_token')}`
      }
    };

    if (method === 'get') {
      response = await apiWithoutCredentials.get(url, config);
    } else if (method === 'post') {
      response = await apiWithoutCredentials.post(url, data, config);
    } else if (method === 'delete') {
      response = await apiWithoutCredentials.delete(url, config);
    }

    // Si es login/register, guarda el token manualmente
    if (url === '/api/login' && response.data.token) {
      setCookie('auth_token', response.data.token, 1);
    }

    return response.data;
  }
};

// Helper functions para cookies
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=None; Secure';
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
}

function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=None; Secure';
}

export const registerUser = async (userData) => {
  try {
    const data = await makeRequest('post', '/api/register', userData);
    return data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(errorMessage);
  }
};

export const loginUser = async (credentials) => {
  try {
    const data = await makeRequest('post', '/api/login', credentials);
    
    // Si usamos la segunda opción (sin credentials), el token viene en la respuesta
    if (data.token && !getCookie('auth_token')) {
      setCookie('auth_token', data.token, 1);
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
    await makeRequest('delete', '/api/logout');
    deleteCookie('auth_token');
  } catch (error) {
    deleteCookie('auth_token');
    const errorMessage = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(errorMessage);
  }
};