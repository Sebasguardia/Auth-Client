// src/features/auth/components/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children, imageUrl = "https://midu.dev/images/wallpapers/una-taza-de-javascript.png", imagePosition = "right" }) => {
  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-900">
      
      {/* Lado izquierdo - Formulario (si imagePosition es 'right') */}
      <div className={`w-full lg:w-3/6 flex items-center justify-center p-8 ${imagePosition === 'right' ? 'order-1' : 'order-2'}`}>
        {children}
      </div>

      {/* Lado derecho - Imagen completa (si imagePosition es 'right') */}
      <div className={`hidden lg:flex lg:w-3/6 ${imagePosition === 'right' ? 'order-2' : 'order-1'}`}>
        <img 
          src={imageUrl}
          alt="Desarrollo y tecnología"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;