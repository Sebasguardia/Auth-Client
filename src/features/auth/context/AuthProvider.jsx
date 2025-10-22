// src/features/auth/context/AuthProvider.jsx
// src/features/auth/context/AuthProvider.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getProfile } from '../../profile/services/profileService';
import { logoutUser } from '../services/authService'; // Agrega este import
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const profile = await getProfile(); // Si hay cookie, esto funciona
        setUser(profile);
      } catch (error) {
        setUser(null); // No hay cookie o es inválida
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = (userData) => {
    setUser(userData); // Actualiza con datos básicos, pero getProfile dará detalles
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null); // El backend borra la cookie
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};