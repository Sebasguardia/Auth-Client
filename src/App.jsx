// src/App.jsx
import React from 'react';
import { AuthProvider } from './features/auth/context/AuthProvider';
import AppRouter from './router';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
