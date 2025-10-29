// src/features/blog/components/ErrorState.jsx
import React from 'react';
import { FaExclamationTriangle, FaRedo, FaHome } from 'react-icons/fa';
import Button from '../../../components/Button/Button';

const ErrorState = ({ 
  title = "Something went wrong", 
  message = "Please try again in a few moments.",
  onRetry,
  onGoHome,
  type = 'generic'
}) => {
  const getErrorConfig = () => {
    const configs = {
      generic: {
        icon: FaExclamationTriangle,
        color: 'text-yellow-500',
        gradient: 'from-yellow-400 to-orange-500',
        bgGradient: 'from-yellow-400 to-orange-500'
      },
      network: {
        icon: FaExclamationTriangle,
        color: 'text-red-500',
        gradient: 'from-red-400 to-pink-500',
        bgGradient: 'from-red-400 to-pink-500'
      },
      notFound: {
        icon: FaExclamationTriangle,
        color: 'text-blue-500',
        gradient: 'from-blue-400 to-purple-500',
        bgGradient: 'from-blue-400 to-purple-500'
      }
    };
    return configs[type] || configs.generic;
  };

  const config = getErrorConfig();
  const IconComponent = config.icon;

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="text-center max-w-md mx-auto relative">
        
        {/* Animated Icon */}
        <div className={`relative w-24 h-24 mx-auto mb-8 ${config.color}`}>
          <div 
            className={`absolute inset-0 bg-gradient-to-r ${config.bgGradient} rounded-full opacity-20 animate-pulse`}
          ></div>
          <IconComponent className="w-full h-full p-6 relative z-10 animate-bounce-in" />
        </div>

        {/* Error Text */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 animate-fadeIn">
            {title}
          </h2>
          <p className="text-gray-600 text-lg animate-fadeIn transition-delay-300">
            {message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn transition-delay-500">
          {onRetry && (
            <Button 
              onClick={onRetry}
              className="flex items-center gap-2 animate-pulse hover:animate-none"
            >
              <FaRedo className="w-4 h-4" />
              Try Again
            </Button>
          )}
          
          {onGoHome && (
            <Button 
              onClick={onGoHome}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <FaHome className="w-4 h-4" />
              Go Home
            </Button>
          )}
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div 
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-float"
            style={{
              top: '-4rem',
              left: '-4rem',
            }}
          ></div>
          <div 
            className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-float transition-delay-500"
            style={{
              bottom: '-2rem',
              right: '-2rem',
            }}
          ></div>
          <div 
            className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-float transition-delay-700"
            style={{
              top: '50%',
              right: '25%',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;