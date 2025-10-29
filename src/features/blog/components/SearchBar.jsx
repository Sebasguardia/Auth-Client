// src/features/blog/components/SearchBar.jsx
import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaMicrophone } from 'react-icons/fa';

const SearchBar = ({ onSearch, placeholder = "Buscar artículos...", className = '' }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Debounce search
  useEffect(() => {
    if (query.trim() === '') {
      onSearch && onSearch('');
      return;
    }

    const timer = setTimeout(() => {
      onSearch && onSearch(query);
      setIsTyping(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsTyping(true);
  };

  const handleClear = () => {
    setQuery('');
    onSearch && onSearch('');
  };

  const handleVoiceSearch = () => {
    // Simulación de búsqueda por voz
    alert('¡La búsqueda por voz se implementaría aquí!');
  };

  return (
    <div className={`relative max-w-2xl mx-auto transition-all duration-500 ${
      isFocused ? 'scale-105' : ''
    } ${className}`}>
      
      {/* Search Input */}
      <div className={`relative flex items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
        isFocused ? 'border-blue-500 shadow-2xl' : 'border-transparent'
      }`}>
        
        {/* Search Icon */}
        <FaSearch className={`absolute left-4 transition-colors duration-300 ${
          isFocused ? 'text-blue-500' : 'text-gray-400'
        }`} />
        
        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full py-4 pl-12 pr-20 bg-transparent border-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 text-lg font-medium"
        />

        {/* Clear Button */}
        {query && (
          <button 
            onClick={handleClear}
            className="absolute right-12 p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <FaTimes />
          </button>
        )}

        {/* Voice Search Button */}
        <button 
          onClick={handleVoiceSearch}
          className="absolute right-4 p-2 text-gray-400 hover:text-blue-500 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <FaMicrophone />
        </button>
      </div>

      {/* Loading Indicator */}
      {isTyping && query && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 flex gap-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      )}

      {/* Search Suggestions */}
      {isFocused && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fadeIn">
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100">
            <FaSearch className="text-gray-400" />
            <span>Buscar "{query}"</span>
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100">
            <FaSearch className="text-gray-400" />
            <span>Tutoriales de {query}</span>
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200">
            <FaSearch className="text-gray-400" />
            <span>Artículos sobre {query}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;