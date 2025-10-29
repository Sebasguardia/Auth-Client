// src/features/blog/components/PostCard.jsx
import React, { useState } from 'react';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';

const PostCard = ({ post, onReadMore }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const defaultImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop';

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(post.id);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: 'bg-green-100 text-green-700 border-green-200',
      intermediate: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      advanced: 'bg-red-100 text-red-700 border-red-200'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getDifficultyText = (difficulty) => {
    const texts = {
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado'
    };
    return texts[difficulty] || difficulty;
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-0 w-full transition-all duration-300 ease-out cursor-pointer overflow-hidden flex flex-col h-full shadow-lg hover:scale-[1.02] hover:shadow-xl animate-fadeIn">
      {/* CAMBIO: Imagen más grande - altura aumentada significativamente */}
      <div className="relative overflow-hidden h-48 flex-shrink-0"> {/* Aumentado de h-40 a h-48 */}
        <img
          src={imageError ? defaultImage : post.image}
          alt={post.title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
        
        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`absolute top-2 right-2 w-7 h-7 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 border-none cursor-pointer hover:scale-110 ${
            isLiked 
              ? 'bg-red-500/90 text-white' 
              : 'bg-white/20 hover:bg-white/30 text-white'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isLiked ? 'scale-110' : ''
            }`}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>

        {/* Category Tag */}
        <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm capitalize">
          {post.category}
        </div>

        {/* Difficulty Badge */}
        <div className={`absolute bottom-2 left-2 border text-xs px-2 py-1 rounded-full backdrop-blur-sm font-medium ${getDifficultyColor(post.difficulty)}`}>
          {getDifficultyText(post.difficulty)}
        </div>
      </div>

      {/* CAMBIO: Contenido muy compacto - padding mínimo y márgenes reducidos */}
      <div className="p-2 flex flex-col flex-1"> {/* Reducido de p-4 a p-2 */}
        {/* Header with Title and Rating - más compacto */}
        <div className="flex items-start justify-between mb-1"> {/* mb-2 a mb-1 */}
          <h3 className="text-sm font-bold text-gray-800 line-clamp-2 transition-colors duration-200 flex-1 leading-tight hover:text-blue-600 pr-2"> {/* text-base a text-sm */}
            {post.title}
          </h3>
          <div className="flex items-center gap-1 text-amber-600 text-xs font-semibold flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3" 
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">{(post.popularity || post.likes / 20).toFixed(0)}</span> {/* Texto más pequeño */}
          </div>
        </div>

        {/* Excerpt - más compacto */}
        <p className="text-gray-600 text-xs leading-relaxed mb-2 line-clamp-2 flex-1"> {/* text-sm a text-xs */}
          {post.excerpt}
        </p>

        {/* Tags - más compactos */}
        <div className="flex flex-wrap gap-1 mb-2"> 
          {post.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-600 text-[10px] px-1 py-0.5 rounded transition-all duration-200 hover:bg-blue-100 hover:text-blue-700" 
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="bg-gray-100 text-gray-500 text-[10px] px-1 py-0.5 rounded"> {/* text-xs a text-[10px] */}
              +{post.tags.length - 2}
            </span>
          )}
        </div>

        {/* Meta Information - más compacta */}
        <div className="flex items-center justify-between mb-2">
          {/* Author */}
          <div className="flex items-center gap-1"> {/* gap-2 a gap-1 */}
            <img 
              src={post.authorAvatar} 
              alt={post.author}
              className="w-5 h-5 rounded-full object-cover" 
            />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-700">{post.author}</span>
              <span className="text-[9px] text-gray-500">{formatDate(post.publishedDate)}</span> {/* text-[10px] a text-[9px] */}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-1"> {/* gap-2 a gap-1 */}
            {/* Reading Time */}
            <div className="flex items-center gap-0.5 text-gray-500 text-[9px]"> {/* text-[10px] a text-[9px] */}
              <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* w-2.5 h-2.5 a w-2 h-2 */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime} min</span>
            </div>
          </div>
        </div>

        {/* Footer with Read Button - más compacto */}
        <div className="mt-auto">
          <Button 
            onClick={handleReadMore}
            className="w-full py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600" 
          >
            Leer Más
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;