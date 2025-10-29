// src/components/ProtectedRoute/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useAuth';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center space-y-4">
          <LoadingSpinner size="large" />
          <p className="text-gray-600 dark:text-gray-400">Verificando autenticación...</p>
        </div>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;