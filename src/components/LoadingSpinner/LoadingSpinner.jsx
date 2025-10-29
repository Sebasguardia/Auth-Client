// src/components/LoadingSpinner/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = ({ 
  size = 'medium', 
  variant = 'modern',
  className = "" 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  const variants = {
    // Spinner moderno con gradiente animado
    modern: (
      <div className={`${sizeClasses[size]} relative ${className}`}>
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 border-4 border-transparent rounded-full border-t-blue-500 border-r-purple-500 animate-spin"></div>
        {size === 'xlarge' && (
          <div className="absolute inset-1 border-4 border-transparent rounded-full border-b-pink-500 border-l-green-400 animate-spin" style={{animationDelay: '-0.5s'}}></div>
        )}
        <div className="absolute inset-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full"></div>
      </div>
    ),
    
    // Spinner con puntos animados que rebotan
    dots: (
      <div className={`flex space-x-2 ${className}`}>
        <div className={`w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-bounce-in`}></div>
        <div className={`w-3 h-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full animate-bounce-in`} style={{animationDelay: '0.1s'}}></div>
        <div className={`w-3 h-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full animate-bounce-in`} style={{animationDelay: '0.2s'}}></div>
      </div>
    ),
    
    // Spinner tipo pulso con gradiente
    pulse: (
      <div className={`${sizeClasses[size]} relative ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute inset-4 bg-white rounded-full"></div>
      </div>
    ),
    
    // Spinner tipo anillo con efecto de onda
    ring: (
      <div className={`${sizeClasses[size]} relative ${className}`}>
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 border-4 border-transparent rounded-full border-t-blue-500 animate-spin"></div>
        <div className="absolute inset-2 border-4 border-gray-100 rounded-full"></div>
        <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>
    ),

    // Spinner tipo onda expansiva
    wave: (
      <div className={`${sizeClasses[size]} relative ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-ping"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
        <div className="absolute inset-4 bg-white rounded-full"></div>
      </div>
    ),

    // Spinner tipo galaxia (perfecto para tu blog espacial)
    galaxy: (
      <div className={`${sizeClasses[size]} relative ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-gradient-shift bg-400%"></div>
        <div className="absolute inset-1 bg-white/90 rounded-full animate-pulse"></div>
        <div className="absolute inset-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-spin"></div>
      </div>
    )
  };

  return variants[variant] || variants.modern;
};

export default LoadingSpinner;