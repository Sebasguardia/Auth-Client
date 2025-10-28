// src/router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './features/auth/hooks/useAuth';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Profile from './features/profile/pages/Profile';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Componente de loading temporal
const SimpleLoading = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
    <div className="text-center space-y-4">
      <LoadingSpinner size="large" />
      <p className="text-gray-600 text-lg">Cargando...</p>
    </div>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <SimpleLoading />;
  }
  
  return user ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <SimpleLoading />;
  }
  
  return !user ? children : <Navigate to="/profile" />;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;