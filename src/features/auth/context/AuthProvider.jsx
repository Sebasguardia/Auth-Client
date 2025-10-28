// src/features/auth/context/AuthProvider.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getProfile } from '../../profile/services/profileService';
import { logoutUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      setError(null);
      const profile = await getProfile();
      setUser(profile);
    } catch (error) {
      console.log('No autenticado:', error.message);
      setUser(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const login = (userData) => {
    setUser(userData);
    setError(null);
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      setUser(null);
      setError(null);
    }
  };

  const clearError = () => setError(null);

  const value = {
    user, 
    login, 
    logout, 
    loading, 
    error,
    clearError,
    checkAuth 
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};