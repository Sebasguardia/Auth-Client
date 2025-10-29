// src/features/blog/components/CategoryFilter.jsx
import React, { useState, useMemo } from 'react';
import {
  FaHashtag,
  FaFire,
  FaClock,
  FaStar,
  FaCode,
  FaPalette,
  FaMobile,
  FaDatabase,
  FaPython,
  FaJs
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const CategoryFilter = ({ onFilterChange, categories = [], posts = [], className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    sortBy: 'latest',
    timeRange: 'all',
    difficulty: 'all'
  });

  // Calcular categorías basadas en los posts reales
  const categoryList = useMemo(() => {
    if (categories.length > 0) return categories;
    
    // Si no hay categorías proporcionadas, calcularlas de los posts
    const categoryCounts = posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {});

    const categoryConfig = {
      'react': { colorClass: 'border-blue-400 bg-blue-50 text-blue-600', icon: <FaCode /> },
      'javascript': { colorClass: 'border-yellow-400 bg-yellow-50 text-yellow-600', icon: <FaJs /> },
      'typescript': { colorClass: 'border-blue-500 bg-blue-50 text-blue-600', icon: <FaCode /> },
      'vue': { colorClass: 'border-green-400 bg-green-50 text-green-600', icon: <FaPalette /> },
      'python': { colorClass: 'border-blue-600 bg-blue-50 text-blue-700', icon: <FaPython /> },
      'nodejs': { colorClass: 'border-green-500 bg-green-50 text-green-600', icon: <FaDatabase /> },
      'css': { colorClass: 'border-blue-400 bg-blue-50 text-blue-600', icon: <FaPalette /> },
      'backend': { colorClass: 'border-gray-600 bg-gray-50 text-gray-700', icon: <FaDatabase /> },
      'frontend': { colorClass: 'border-red-400 bg-red-50 text-red-600', icon: <FaMobile /> }
    };

    return Object.entries(categoryCounts).map(([id, count]) => ({
      id,
      name: id.charAt(0).toUpperCase() + id.slice(1),
      count,
      ...categoryConfig[id]
    }));
  }, [categories, posts]);

  const difficulties = [
    { value: 'all', label: 'Todos los Niveles' },
    { value: 'beginner', label: 'Principiante' },
    { value: 'intermediate', label: 'Intermedio' },
    { value: 'advanced', label: 'Avanzado' }
  ];

  const timeRanges = [
    { value: 'all', label: 'Todo el Tiempo' },
    { value: 'week', label: 'Esta Semana' },
    { value: 'month', label: 'Este Mes' },
    { value: 'year', label: 'Este Año' }
  ];

  const sortOptions = [
    { value: 'latest', label: 'Más Recientes', icon: <FaClock /> },
    { value: 'popular', label: 'Más Populares', icon: <FaStar /> },
    { value: 'trending', label: 'Tendencia', icon: <FaFire /> }
  ];

  const handleCategoryToggle = (categoryId) => {
    setActiveFilters(prev => {
      const newCategories = prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [categoryId];
      const newFilters = { ...prev, categories: newCategories };
      onFilterChange && onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleSortChange = (sortBy) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev, sortBy };
      onFilterChange && onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleTimeRangeChange = (timeRange) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev, timeRange };
      onFilterChange && onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleDifficultyChange = (difficulty) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev, difficulty };
      onFilterChange && onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      categories: [],
      sortBy: 'latest',
      timeRange: 'all',
      difficulty: 'all'
    };
    setActiveFilters(clearedFilters);
    onFilterChange && onFilterChange(clearedFilters);
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  const getCategoryIcon = (categoryId) => {
    const icons = {
      'react': <FaCode />,
      'javascript': <FaJs />,
      'typescript': <FaCode />,
      'vue': <FaPalette />,
      'python': <FaPython />,
      'nodejs': <FaDatabase />,
      'css': <FaPalette />,
      'backend': <FaDatabase />,
      'frontend': <FaMobile />
    };
    return icons[categoryId] || <FaHashtag />;
  };

  return (
    <div className={`relative ${className}`}>
      {/* Botón móvil */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed z-50 bottom-6 right-6 bg-gradient-to-r from-blue-500 to-green-600 
                   text-white p-4 rounded-full shadow-xl flex items-center gap-2 
                   transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {isOpen ? <IoMdClose size={20} /> : <FaHashtag size={20} />}
        <span className="font-medium">Filtros</span>
      </button>

      {/* Sidebar */}
      <div className={`
        lg:sticky lg:top-6
        fixed inset-0 lg:relative
        z-40 lg:z-auto
        w-full lg:w-[19rem]
        bg-transparent
        rounded-none lg:rounded-2xl
        shadow-none
        border-0
        overflow-y-auto
        max-h-screen lg:max-h-[calc(100vh-3rem)]
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full p-6 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-800">Filtrar Artículos</h3>
            <button
              onClick={clearAllFilters}
              className="text-sm text-green-600 hover:text-green-700 px-2 py-1 rounded-md hover:bg-gray-100 transition"
            >
              Limpiar Todo
            </button>
          </div>

          {/* Categorías */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
              Categorías ({categoryList.length})
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {categoryList.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryToggle(category.id)}
                  className={`
                    flex flex-col items-center justify-center gap-1
                    p-2 border rounded-lg text-center
                    transition-all duration-200 min-h-[60px]
                    hover:translate-y-[-2px] hover:shadow-md
                    ${activeFilters.categories.includes(category.id)
                      ? 'border-green-500 bg-green-50 text-green-700 shadow-sm font-semibold'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-green-400 hover:bg-gray-50'}
                  `}
                >
                  <span className="text-sm">{getCategoryIcon(category.id)}</span>
                  <span className="text-[11px] font-medium truncate w-full">{category.name}</span>
                  <span className="text-[10px] text-gray-500">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Ordenar */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
              Ordenar Por
            </h4>
            <div className="space-y-2">
              {sortOptions.map(option => (
                <label key={option.value} className="flex items-center gap-3 px-2 py-2 rounded cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="sortBy"
                    value={option.value}
                    checked={activeFilters.sortBy === option.value}
                    onChange={() => handleSortChange(option.value)}
                    className="hidden"
                  />
                  <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition
                    ${activeFilters.sortBy === option.value ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}>
                    {activeFilters.sortBy === option.value && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    {option.icon}
                    <span className="capitalize">{option.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Rango de tiempo */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
              Rango de Tiempo
            </h4>
            <div className="space-y-2">
              {timeRanges.map(option => (
                <label key={option.value} className="flex items-center gap-3 px-2 py-2 rounded cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="timeRange"
                    value={option.value}
                    checked={activeFilters.timeRange === option.value}
                    onChange={() => handleTimeRangeChange(option.value)}
                    className="hidden"
                  />
                  <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition
                    ${activeFilters.timeRange === option.value ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}>
                    {activeFilters.timeRange === option.value && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Nivel de Dificultad */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
              Nivel de Dificultad
            </h4>
            <div className="space-y-2">
              {difficulties.map(option => (
                <label key={option.value} className="flex items-center gap-3 px-2 py-2 rounded cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="difficulty"
                    value={option.value}
                    checked={activeFilters.difficulty === option.value}
                    onChange={() => handleDifficultyChange(option.value)}
                    className="hidden"
                  />
                  <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition
                    ${activeFilters.difficulty === option.value ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}>
                    {activeFilters.difficulty === option.value && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtros Activos */}
          {(activeFilters.categories.length > 0 || activeFilters.difficulty !== 'all') && (
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Filtros Activos
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeFilters.categories.map(categoryId => {
                  const category = categoryList.find(c => c.id === categoryId);
                  return (
                    <span key={categoryId} className="inline-flex items-center gap-1 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {category?.name}
                      <button 
                        onClick={() => handleCategoryToggle(categoryId)}
                        className="w-3 h-3 rounded-full bg-white/20 text-white text-[10px] font-bold flex items-center justify-center hover:bg-white/30"
                      >
                        ×
                      </button>
                    </span>
                  );
                })}
                {activeFilters.difficulty !== 'all' && (
                  <span className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    {difficulties.find(d => d.value === activeFilters.difficulty)?.label}
                    <button 
                      onClick={() => handleDifficultyChange('all')}
                      className="w-3 h-3 rounded-full bg-white/20 text-white text-[10px] font-bold flex items-center justify-center hover:bg-white/30"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay móvil */}
      {isOpen && <div className="lg:hidden fixed inset-0 z-30 bg-black/50" onClick={toggleSidebar} />}
    </div>
  );
};

export default CategoryFilter;