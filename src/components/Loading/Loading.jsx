// src/components/Loading/Loading.jsx
import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Loading = ({ message = "Cargando..." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="large" />
        <p className="text-gray-600 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Loading;