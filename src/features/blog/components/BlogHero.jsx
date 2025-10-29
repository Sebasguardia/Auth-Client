// src/features/blog/components/BlogHero.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useBlog } from '../hooks/useBlog';

// Componente debounce para optimizar búsquedas
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const BlogHero = () => {
  const { searchPosts, featuredPosts, loading, posts, loadPosts } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Manejar búsqueda automática con debounce
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Buscando:', debouncedSearchTerm);
      searchPosts(debouncedSearchTerm);
    } else {
      // Si no hay término de búsqueda, cargar posts normales
      loadPosts();
    }
  }, [debouncedSearchTerm, searchPosts, loadPosts]);

  const handleSearchChange = useCallback((value) => {
    console.log('Cambio de búsqueda:', value);
    setSearchTerm(value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit búsqueda:', searchTerm);
    if (searchTerm) {
      searchPosts(searchTerm);
    } else {
      loadPosts();
    }
  };

  // Contador dinámico basado en posts actuales
  const weeklyPostsCount = posts.length > 0 ? posts.length : featuredPosts.length;

  return (
    <div className="relative min-h-screen flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16 lg:py-20">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl -z-10" />
      
      {/* Content - Con menos margen para acercar al centro */}
      <div className="lg:w-2/3 z-10 mr-4 lg:mr-8">
        <p className="text-sm font-normal tracking-widest text-gray-600 uppercase animate-fadeIn">
          Un Hub para Desarrolladores y Diseñadores
        </p>
        
        <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:mt-10 sm:text-5xl lg:text-6xl xl:text-7xl animate-slide-up">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 bg-[length:200%_200%] animate-gradient-shift">
            Inspiración Tech
          </span>{' '}
          Ilimitada
        </h1>
        
        <p className="max-w-lg mt-4 text-xl font-normal text-gray-600 sm:mt-8 animate-fadeIn delay-300">
          Descubre las últimas tendencias en desarrollo web, patrones de diseño 
          y tecnologías de vanguardia. Mantente inspirado y sigue aprendiendo.
        </p>
        
        {/* Search Container - Mejorado */}
        <form onSubmit={handleSubmit} className="relative max-w-xl mt-8 sm:mt-12 animate-slide-up delay-500">
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="Buscar artículos, tutoriales, guías..."
              value={searchTerm}
              className="w-full py-4 px-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       shadow-lg placeholder-gray-400 text-gray-700 transition-all duration-300
                       hover:shadow-xl focus:shadow-2xl pr-16"
              onChange={(e) => {
                handleSearchChange(e.target.value);
              }}
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-purple-600 
                        text-white p-2 rounded-xl hover:from-blue-600 hover:to-purple-700 
                        transition-all duration-300 transform hover:scale-110 active:scale-95
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Indicador de búsqueda mejorado */}
          {searchTerm && (
            <div className="mt-2 text-sm text-gray-500 animate-fadeIn">
              {loading ? 'Buscando...' : `Buscando: "${searchTerm}" - ${posts.length} resultados`}
            </div>
          )}
        </form>

        {/* Stats - Ahora más dinámico */}
        <div className="mt-8 animate-fadeIn delay-700">
          <div className="inline-flex items-center text-gray-600 font-medium 
                        bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full 
                        border border-gray-200">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>
              {searchTerm ? `${posts.length} resultados encontrados` : `${weeklyPostsCount} artículos disponibles`}
            </span>
          </div>
        </div>
      </div>

      {/* Illustration - Imagen más grande y sin fondo/marco */}
      <div className="hidden lg:flex lg:w-1/3 items-center justify-center ml-4 lg:ml-8">
        <div className="relative">
          <img 
            src="https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-logotipo-de-anillos-de-alta-tecnologia.png" 
            alt="Ilustración de Desarrollo"
            className="
              /* TAMAÑO - Puedes ajustar estos valores */
              w-96 h-80 xl:w-[500px] xl:h-[400px] 
              
              /* QUITAR FONDO Y MARCO - Elimina bordes y sombras */
              object-contain 
              /* Remueve el borde blanco */
              border-none 
              /* Remueve la sombra si no la quieres */
              /* shadow-none */
              
              /* Efectos opcionales - Descomenta si quieres mantener alguno */
              /* shadow-2xl hover:shadow-3xl */
              transform transition-all duration-300 animate-float
              
              /* Filtro para mejorar PNG con fondos transparentes */
              filter drop-shadow(0_10px_15px_rgba(0,0,0,0.1))
            "
            /* 
            INSTRUCCIONES PARA EDITAR LA IMAGEN:
            
            1. PARA CAMBIAR EL TAMAÑO: ajusta w-96, h-80, xl:w-[500px], xl:h-[400px]
            2. PARA QUITAR COMPLETAMENTE EL FONDO: asegúrate de que la imagen PNG tenga fondo transparente
            3. PARA CAMBIAR LA IMAGEN: reemplaza la URL en el src
            4. PARA QUITAR SOMBRAS: cambia shadow-2xl por shadow-none
            5. PARA AJUSTAR POSICIÓN: añade clases como -mt-8 o -mb-4
            */
          />
          
          {/* Efecto de brillo opcional - Descomenta si lo quieres */}
          {/*
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 to-purple-400/5 
                        rounded-lg pointer-events-none" />
          */}
        </div>
      </div>
    </div>
  );
};

export default BlogHero;