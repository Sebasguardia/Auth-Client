// src/features/profile/components/ErrorState.jsx
import React from 'react';

const ErrorState = ({ title, message, onRetry, onGoHome }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {message}
        </p>

        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Reintentar
          </button>
          
          <button
            onClick={onGoHome}
            className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;