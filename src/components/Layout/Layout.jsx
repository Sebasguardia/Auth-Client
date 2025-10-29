// src/components/Layout/Layout.jsx
import React, { useEffect } from 'react';
import { useAuth } from '../../features/auth/hooks/useAuth';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  const { user } = useAuth();

  // Aplicar dark mode al cargar el layout
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {user && <Header />}
      <main className={user ? '' : ''}>
        {children}
      </main>
    </div>
  );
};

export default Layout;