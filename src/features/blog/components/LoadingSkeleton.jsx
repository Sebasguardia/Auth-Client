// src/features/blog/components/LoadingSkeleton.jsx
import React from 'react';

const LoadingSkeleton = ({ type = 'grid', count = 6 }) => {
  // Componente de tarjeta individual para el grid
  const SkeletonCard = () => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 animate-pulse overflow-hidden">
      <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
          </div>
          <div className="h-6 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
          </div>
          <div className="h-6 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
          </div>
        </div>
        <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );

  // Componente para vista detalle
  const SkeletonDetail = () => (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="w-full h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>
      <div className="space-y-4">
        <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-4/6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );

  if (type === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {Array.from({ length: count }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (type === 'detail') {
    return <SkeletonDetail />;
  }

  return null;
};

export default LoadingSkeleton;