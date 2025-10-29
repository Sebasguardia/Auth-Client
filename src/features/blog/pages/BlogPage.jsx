// src/features/blog/pages/BlogPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DottedBackground from '../../../components/DottedBackground/DottedBackground';
import BlogHero from '../components/BlogHero';
import CategoryFilter from '../components/CategoryFilter';
import PostGrid from '../components/PostGrid';
import SearchBar from '../components/SearchBar';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorState from '../components/ErrorState';
import { useBlog } from '../hooks/useBlog';

const BlogPage = () => {
  const navigate = useNavigate();
  const {
    posts,
    categories,
    loading,
    error,
    loadPosts,
    searchPosts,
    loadPostsByCategory
  } = useBlog();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    sortBy: 'latest',
    timeRange: 'all',
    difficulty: 'all'
  });

  // Cargar posts al iniciar
  useEffect(() => {
    loadPosts();
  }, []);

  // Búsqueda con debounce
  useEffect(() => {
    if (searchQuery.trim()) {
      const timer = setTimeout(() => searchPosts(searchQuery), 500);
      return () => clearTimeout(timer);
    } else {
      loadPosts();
    }
  }, [searchQuery]);

  // Cargar posts por categoría
  useEffect(() => {
    if (activeFilters.categories.length > 0) {
      const category = activeFilters.categories[0];
      loadPostsByCategory(category);
    } else if (!searchQuery) {
      loadPosts();
    }
  }, [activeFilters.categories, searchQuery]);

  const handleSearch = (query) => setSearchQuery(query);
  const handleFilterChange = (filters) => setActiveFilters(filters);
  const handlePostClick = (postId) => navigate(`/blog/post/${postId}`);
  const handleRetry = () => window.location.reload();
  const handleGoHome = () => navigate('/');

  if (error) {
    return (
      <div className="relative min-h-screen">
        <DottedBackground />
        <ErrorState
          title="Error de Conexión"
          message="No pudimos cargar los artículos del blog. Por favor verifica tu conexión e intenta nuevamente."
          onRetry={handleRetry}
          onGoHome={handleGoHome}
          type="network"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <DottedBackground />

      {/* HERO */}
      <BlogHero onSearch={handleSearch} />

      {/* GALERÍA DEL SABER - Con colores armonizados */}
      <div className="relative z-10 -mt-4 sm:-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Encabezado con estilo único */}
          <div className="text-center mb-8 relative"> {/* CAMBIO: mb-12 a mb-8 */}
            
            {/* Elementos decorativos geométricos - Colores del BlogHero */}
            <div className="absolute -top-6 left-1/4 w-6 h-6 bg-blue-400/20 rounded-full blur-sm"></div>
            <div className="absolute top-4 right-1/3 w-4 h-4 bg-purple-400/30 rounded-lg rotate-45 blur-sm"></div>
            <div className="absolute -bottom-2 left-1/3 w-8 h-8 bg-pink-400/20 rounded-full blur-md"></div>
            <div className="absolute top-8 right-1/4 w-3 h-3 bg-blue-300/40 rounded-full blur-sm"></div>
            
            {/* Badge decorativo */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-100 mb-6"> {/* CAMBIO: mb-8 a mb-6 */}
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Biblioteca Digital
              </span>
            </div>

            {/* Título principal con colores del BlogHero */}
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"> {/* CAMBIO: mb-6 a mb-4 */}
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                  Explora Nuestro
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Universo de Ideas
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full transform scale-x-105"></div>
                </span>
              </h2>

              {/* Descripción poética */}
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light italic"> {/* CAMBIO: mb-8 a mb-6 */}
                  "Donde cada artículo es una constelación de conocimiento, 
                  cada tutorial una galaxia de posibilidades, y cada guía un portal hacia la innovación."
                </p>
              </div>
            </div>

            {/* Tarjetas de métricas con colores del BlogHero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6"> {/* CAMBIO: gap-6 a gap-4, agregado mb-6 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 shadow-lg border border-blue-200 transform hover:scale-105 transition-all duration-300"> {/* CAMBIO: p-6 a p-4 */}
                <div className="text-3xl font-bold text-blue-600 mb-2">{posts.length}</div>
                <div className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Constelaciones</div>
                <div className="text-xs text-blue-600 mt-1">Artículos brillantes en nuestro cosmos digital</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 shadow-lg border border-purple-200 transform hover:scale-105 transition-all duration-300"> {/* CAMBIO: p-6 a p-4 */}
                <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length}</div>
                <div className="text-sm font-semibold text-purple-800 uppercase tracking-wide">Galaxias</div>
                <div className="text-xs text-purple-600 mt-1">Categorías especializadas para explorar</div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-4 shadow-lg border border-pink-200 transform hover:scale-105 transition-all duration-300"> {/* CAMBIO: p-6 a p-4 */}
                <div className="text-3xl font-bold text-pink-600 mb-2">∞</div>
                <div className="text-sm font-semibold text-pink-800 uppercase tracking-wide">Horizontes</div>
                <div className="text-xs text-pink-600 mt-1">Combinaciones infinitas de aprendizaje</div>
              </div>
            </div>

            {/* Llamada a la acción sutil */}
            <div className="mt-6"> {/* CAMBIO: mt-10 a mt-6 */}
              <div className="inline-flex items-center gap-3 text-gray-500 text-sm">
                <svg className="w-4 h-4 animate-pulse text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Navega hacia el conocimiento - desplázate para explorar</span>
                <svg className="w-4 h-4 animate-pulse text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL - CAMBIOS PRINCIPALES AQUÍ */}
      <div className="relative z-10 mt-8"> {/* CAMBIO: mt-12 a mt-8 */}
        <div className="mx-auto py-4 bg-transparent"> {/* CAMBIO: py-8 a py-4 */}
          <div className="flex flex-col lg:flex-row gap-0">

            {/* SIDEBAR (FILTROS) */}
            <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 pl-2 lg:pl-4 xl:pl-6 border-r border-gray-100"> {/* CAMBIO: pl-4/6/10 a pl-2/4/6 */}
              <div className="sticky top-4 bg-white backdrop-blur-md shadow-lg rounded-2xl p-3"> {/* CAMBIO: p-4 a p-3 */}
                <CategoryFilter
                  onFilterChange={handleFilterChange}
                  categories={categories}
                  posts={posts}
                  className="w-full"
                />
              </div>
            </aside>

            {/* ÁREA PRINCIPAL - CAMBIOS DE PADDING AQUÍ */}
            <main className="flex-1 min-w-0 lg:-ml-2 xl:-ml-4 px-2 sm:px-4"> {/* CAMBIO: lg:-ml-4/6 a -ml-2/4, px-4/6 a px-2/4 */}
              {/* BARRA DE BÚSQUEDA MÓVIL */}
              <div className="lg:hidden mb-4"> {/* CAMBIO: mb-6 a mb-4 */}
                <SearchBar
                  onSearch={handleSearch}
                  placeholder="Buscar en nuestro universo..."
                />
              </div>

              {/* INFO RESULTADOS DE BÚSQUEDA */}
              {searchQuery && (
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow border border-white/20 p-3 mb-4 animate-fadeIn"> {/* CAMBIO: p-4 a p-3, mb-6 a mb-4 */}
                  <p className="text-gray-700 text-sm">
                    {posts.length} constelación{posts.length !== 1 ? 'es' : ''} encontrada{posts.length !== 1 ? 's' : ''} para{" "}
                    <strong className="text-blue-600">"{searchQuery}"</strong>
                  </p>
                  {posts.length === 0 && (
                    <p className="text-gray-500 text-xs mt-1">
                      No se encontraron artículos en esta galaxia. Prueba con diferentes términos.
                    </p>
                  )}
                </div>
              )}

              {/* INFO DE FILTRO POR CATEGORÍA */}
              {activeFilters.categories.length > 0 && !searchQuery && (
                <div className="bg-blue-50/90 backdrop-blur-sm rounded-lg shadow border border-blue-200 p-3 mb-4 animate-fadeIn"> {/* CAMBIO: p-4 a p-3, mb-6 a mb-4 */}
                  <p className="text-gray-700 text-sm">
                    Explorando la galaxia de{" "}
                    <strong className="text-blue-600">
                      {activeFilters.categories.join(', ')}
                    </strong>
                  </p>
                </div>
              )}

              {/* ESTADO DE CARGA */}
              {loading ? (
                <LoadingSkeleton type="grid" count={6} />
              ) : (
                <>
                  {/* GRID DE POSTS - SIN PADDING EXTRA */}
                  <PostGrid
                    posts={posts}
                    onPostClick={handlePostClick}
                    className="w-full"
                  />

                  {/* ESTADO VACÍO */}
                  {posts.length === 0 && !searchQuery && (
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow border border-white/20 p-6 text-center mt-6 animate-fadeIn"> {/* CAMBIO: p-8 a p-6, mt-8 a mt-6 */}
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        El universo está en calma
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Nuestras estrellas están preparando nuevo contenido cósmico.
                      </p>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;