// src/features/profile/components/LoadingState.jsx
import React from 'react';

const LoadingState = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          {/* Encabezado */}
          <div className="mb-8">
            <div className="h-8 bg-gray-300 rounded w-64 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-96"></div>
          </div>

          {/* Contenido */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
                </div>
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-4 bg-gray-300 rounded"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="h-6 bg-gray-300 rounded w-48 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="h-32 bg-gray-300 rounded"></div>
                  <div className="h-32 bg-gray-300 rounded"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-16 bg-gray-300 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;