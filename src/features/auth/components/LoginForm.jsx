// src/features/auth/components/LoginForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const LoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const data = await loginUser({ email, password });
      login(data);
      onSuccess?.();
    } catch (err) {
      setError(err.message || 'Error en el inicio de sesión');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setEmail('torres13@gmail.com');
    setPassword('12345678');
  };

  return (
    <div className="w-full max-w-sm">
      
      {/* Header con Logo (solo en mobile) */}
      <div className="lg:hidden text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">DevHub</span>
        </div>
      </div>

      {/* Card del formulario SIN BORDES */}
      <div className="bg-transparent p-6 relative">
        
        {/* Dark Mode Toggle dentro del formulario */}
        <div className="absolute top-0 right-0">
          <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 
                     hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="Alternar modo oscuro"
          >
            <svg className="w-4 h-4 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <svg className="w-4 h-4 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>

        {/* Título del formulario */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Inicia sesión
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Ingresa a tu cuenta de DevHub
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-3 py-2 rounded-lg mb-4 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       placeholder-gray-500 dark:placeholder-gray-400 text-sm
                       transition-colors duration-200 shadow-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       placeholder-gray-500 dark:placeholder-gray-400 text-sm
                       transition-colors duration-200 shadow-sm"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600 dark:text-gray-400 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 bg-white dark:bg-gray-700"
              />
              <span className="ml-2">Recordarme</span>
            </label>
            <button 
              type="button"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 
                       font-medium transition-colors duration-200 text-sm"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2.5 px-4 
                     rounded-lg font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 
                     transition-colors duration-200 transform hover:scale-[1.02] active:scale-95
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                     focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <LoadingSpinner size="small" />
                <span>Iniciando sesión...</span>
              </div>
            ) : (
              'Iniciar Sesión'
            )}
          </button>

          {/* Demo Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 
                       text-sm font-medium transition-colors duration-200
                       border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 
                       hover:border-gray-400 dark:hover:border-gray-500"
            >
              Usar credenciales de demo
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-transparent text-gray-500 dark:text-gray-400">
              o continúa con
            </span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center items-center py-2.5 px-4 
                     border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300
                     hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center items-center py-2.5 px-4 
                     border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300
                     hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
            Twitter
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-6">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          ¿No tienes una cuenta?{' '}
          <Link 
            to="/register" 
            className="text-gray-900 dark:text-white font-semibold hover:text-gray-700 dark:hover:text-gray-300 
                     transition-colors duration-200"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;