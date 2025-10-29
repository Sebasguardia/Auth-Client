// src/components/Loading/Loading.jsx
import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Loading = ({ 
  message = "Cargando...", 
  type = "fullscreen",
  className = "",
  showProgress = true
}) => {
  const containerClasses = {
    fullscreen: "min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-100 flex items-center justify-center",
    inline: "flex items-center justify-center p-4",
    card: "bg-white/80 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center shadow-lg border border-white/20"
  };

  const contentClasses = {
    fullscreen: "text-center space-y-6 animate-fade-in",
    inline: "text-center space-y-3 animate-fade-in",
    card: "text-center space-y-4 animate-fade-in"
  };

  return (
    <div className={`${containerClasses[type]} ${className}`}>
      <div className={contentClasses[type]}>
        <LoadingSpinner size="large" variant="modern" />
        
        <div className="space-y-2">
          <p className="text-gray-700 font-medium text-lg animate-pulse">{message}</p>
          <p className="text-gray-500 text-sm">Por favor espera un momento...</p>
        </div>
        
        {/* Loading progress bar for fullscreen */}
        {type === "fullscreen" && showProgress && (
          <div className="w-64 mx-auto space-y-2">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-shimmer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 animate-pulse">Preparando contenido...</p>
          </div>
        )}
      </div>

      {/* Elementos decorativos flotantes para fullscreen */}
      {type === "fullscreen" && (
        <>
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-400/20 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/30 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-pink-400/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </>
      )}
    </div>
  );
};

export default Loading;