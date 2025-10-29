// src/components/Header/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {
  FaUser,
  FaCog,
  FaMoon,
  FaSun,
  FaSignOutAlt,
  FaBlog,
  FaBell,
  FaSearch,
  FaChevronDown,
  FaHome
} from 'react-icons/fa';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cargar preferencia de dark mode al iniciar
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    applyDarkMode(savedDarkMode);
  }, []);

  const applyDarkMode = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      window.location.reload();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      navigate('/login');
    } finally {
      setIsDropdownOpen(false);
    }
  };

  const handleProfile = () => {
    navigate('/profile');
    setIsDropdownOpen(false);
  };

  const handleBlog = () => {
    navigate('/blog');
    setIsDropdownOpen(false);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    applyDarkMode(newDarkMode);
  };

  // No mostrar header si no hay usuario autenticado
  if (!user) return null;

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo y Navegación */}
          <div className="flex items-center space-x-8">
            <button
              onClick={handleBlog}
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaBlog className="w-6 h-6" />
              <span>DevBlog</span>
            </button>
            
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={handleBlog}
                className={`transition-colors font-medium ${
                  location.pathname === '/blog' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Blog
              </button>
              <Link
                to="/profile"
                className={`transition-colors font-medium ${
                  location.pathname === '/profile' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Mi Perfil
              </Link>
            </nav>
          </div>

          {/* Barra de búsqueda (solo visible en blog) */}
          {location.pathname === '/blog' && (
            <div className="hidden lg:block flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          )}

          {/* Iconos de usuario y configuraciones */}
          <div className="flex items-center space-x-4">
            
            {/* Botón de notificaciones */}
            <button className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <FaBell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Toggle Dark Mode - MEJORADO */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {darkMode ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>

            {/* Dropdown de usuario */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user.role?.name || 'Usuario'}
                  </p>
                </div>
                <FaChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Menú desplegable */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                  
                  {/* Información del usuario */}
                  <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>

                  {/* Opciones del menú */}
                  <div className="py-2">
                    <button
                      onClick={handleProfile}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaUser className="w-4 h-4 mr-3" />
                      Mi Perfil
                    </button>
                    
                    <button
                      onClick={handleBlog}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaBlog className="w-4 h-4 mr-3" />
                      Blog
                    </button>

                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <FaCog className="w-4 h-4 mr-3" />
                      Configuración
                    </button>
                  </div>

                  {/* Separador */}
                  <div className="border-t border-gray-100 dark:border-gray-700"></div>

                  {/* Cerrar sesión */}
                  <div className="py-2">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <FaSignOutAlt className="w-4 h-4 mr-3" />
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;