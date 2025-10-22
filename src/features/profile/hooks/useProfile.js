// src/features/profile/hooks/useProfile.js
import { useState, useEffect } from 'react';
import { getProfile } from '../services/profileService';
import { useAuth } from '../../auth/hooks/useAuth';

export const useProfile = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        try {
          const data = await getProfile();
          setProfile(data);
        } catch (error) {
          console.error('Error al obtener perfil:', error);
          logout(); // Si falla, cierra sesión
        } finally {
          setLoading(false);
        }
      };
      fetchProfile();
    }
  }, [user, logout]);

  return { profile, loading };
};
