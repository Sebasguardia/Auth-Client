// src/router.jsx (corregido)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './features/auth/hooks/useAuth';
import Layout from './components/Layout/Layout';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Profile from './features/profile/pages/Profile';
import BlogPage from './features/blog/pages/BlogPage';
import PostDetailPage from './features/blog/pages/PostDetailPage';
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
  
  // CORRECCIÓN: Si el usuario NO está autenticado, muestra children (login/register)
  // Si ESTÁ autenticado, redirige al blog
  return !user ? children : <Navigate to="/blog" />;
};

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Auth Routes (solo para usuarios NO autenticados) */}
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          
          <Route path="/register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } />
          
          {/* Protected Routes (solo para usuarios autenticados) */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          {/* Blog Routes (COMPLETAMENTE PÚBLICAS pero con header si está autenticado) */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/post/:id" element={<PostDetailPage />} />
          
          {/* Default Route - CORRECCIÓN: Redirige al login si no autenticado, al blog si autenticado */}
          <Route path="/" element={<NavigateToAppropriateRoute />} />
          
          {/* 404 Route */}
          <Route path="*" element={
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-gray-600 mb-4">Página no encontrada</p>
                <a href="/blog" className="text-blue-500 hover:text-blue-700 font-medium">
                  Volver al Blog
                </a>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

// Componente auxiliar para redirigir según autenticación
const NavigateToAppropriateRoute = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <SimpleLoading />;
  }
  
  return user ? <Navigate to="/blog" /> : <Navigate to="/login" />;
};

export default AppRouter;