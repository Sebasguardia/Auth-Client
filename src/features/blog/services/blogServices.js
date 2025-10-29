import { mockPosts, mockCategories, mockComments } from '../data/mockData';

// Simular delay de API
const simulateApiCall = (data, delay = 500) => 
  new Promise((resolve) => setTimeout(() => resolve({ data }), delay));

const simulateError = (message, delay = 500) =>
  new Promise((_, reject) => setTimeout(() => reject(new Error(message)), delay));

export const blogService = {
  /**
   * Obtener todos los posts con filtros opcionales
   * @param {Object} filters - Filtros para la búsqueda
   * @returns {Promise}
   */
  async getPosts(filters = {}) {
    try {
      let filteredPosts = [...mockPosts];
      
      // Aplicar filtros
      if (filters.category) {
        filteredPosts = filteredPosts.filter(post => 
          post.category === filters.category
        );
      }
      
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filteredPosts = filteredPosts.filter(post =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.excerpt.toLowerCase().includes(searchTerm) ||
          post.body.introduction.toLowerCase().includes(searchTerm) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }
      
      if (filters.featured !== undefined) {
        filteredPosts = filteredPosts.filter(post => 
          post.featured === filters.featured
        );
      }
      
      if (filters.difficulty) {
        filteredPosts = filteredPosts.filter(post => 
          post.difficulty === filters.difficulty
        );
      }
      
      // Ordenar por fecha de publicación (más reciente primero)
      filteredPosts.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
      
      return await simulateApiCall(filteredPosts);
    } catch (error) {
      console.error('Error in getPosts:', error);
      throw error;
    }
  },

  /**
   * Obtener un post específico por ID
   * @param {number|string} id - ID del post
   * @returns {Promise}
   */
  async getPostById(id) {
    try {
      const postId = parseInt(id);
      const post = mockPosts.find(post => post.id === postId);
      
      if (!post) {
        return await simulateError('Post not found');
      }
      
      return await simulateApiCall(post);
    } catch (error) {
      console.error('Error in getPostById:', error);
      throw error;
    }
  },

  /**
   * Obtener comentarios de un post específico
   * @param {number|string} postId - ID del post
   * @returns {Promise}
   */
  async getPostComments(postId) {
    try {
      const id = parseInt(postId);
      const comments = mockComments.filter(comment => comment.postId === id);
      
      // Ordenar comentarios por fecha (más reciente primero)
      comments.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      return await simulateApiCall(comments);
    } catch (error) {
      console.error('Error in getPostComments:', error);
      throw error;
    }
  },

  /**
   * Obtener todas las categorías
   * @returns {Promise}
   */
  async getCategories() {
    try {
      return await simulateApiCall(mockCategories);
    } catch (error) {
      console.error('Error in getCategories:', error);
      throw error;
    }
  },

  /**
   * Obtener posts destacados
   * @returns {Promise}
   */
  async getFeaturedPosts() {
    try {
      const featuredPosts = mockPosts
        .filter(post => post.featured)
        .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
        .slice(0, 5); // Limitar a 5 posts destacados
      
      return await simulateApiCall(featuredPosts);
    } catch (error) {
      console.error('Error in getFeaturedPosts:', error);
      throw error;
    }
  },

  /**
   * Buscar posts por término de búsqueda
   * @param {string} query - Término de búsqueda
   * @returns {Promise}
   */
  async searchPosts(query) {
    try {
      if (!query || query.trim() === '') {
        return await this.getPosts();
      }
      
      const searchTerm = query.toLowerCase().trim();
      const results = mockPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.body.introduction.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        post.author.toLowerCase().includes(searchTerm)
      );
      
      return await simulateApiCall(results);
    } catch (error) {
      console.error('Error in searchPosts:', error);
      throw error;
    }
  },

  /**
   * Obtener posts por categoría
   * @param {string} category - Categoría a filtrar
   * @returns {Promise}
   */
  async getPostsByCategory(category) {
    try {
      const categoryPosts = mockPosts
        .filter(post => post.category === category)
        .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
      
      return await simulateApiCall(categoryPosts);
    } catch (error) {
      console.error('Error in getPostsByCategory:', error);
      throw error;
    }
  },

  /**
   * Obtener posts populares (ordenados por popularidad)
   * @param {number} limit - Límite de posts a retornar
   * @returns {Promise}
   */
  async getPopularPosts(limit = 5) {
    try {
      const popularPosts = [...mockPosts]
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, limit);
      
      return await simulateApiCall(popularPosts);
    } catch (error) {
      console.error('Error in getPopularPosts:', error);
      throw error;
    }
  },

  /**
   * Obtener posts relacionados basados en tags y categoría
   * @param {number|string} postId - ID del post actual
   * @param {number} limit - Límite de posts relacionados
   * @returns {Promise}
   */
  async getRelatedPosts(postId, limit = 3) {
    try {
      const currentPost = mockPosts.find(post => post.id === parseInt(postId));
      if (!currentPost) {
        return await simulateApiCall([]);
      }
      
      const relatedPosts = mockPosts
        .filter(post => 
          post.id !== parseInt(postId) && (
            post.category === currentPost.category ||
            post.tags.some(tag => currentPost.tags.includes(tag))
          )
        )
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, limit);
      
      return await simulateApiCall(relatedPosts);
    } catch (error) {
      console.error('Error in getRelatedPosts:', error);
      throw error;
    }
  },

  /**
   * Obtener posts por autor
   * @param {string} author - Nombre del autor
   * @returns {Promise}
   */
  async getPostsByAuthor(author) {
    try {
      const authorPosts = mockPosts
        .filter(post => post.author === author)
        .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
      
      return await simulateApiCall(authorPosts);
    } catch (error) {
      console.error('Error in getPostsByAuthor:', error);
      throw error;
    }
  },

  /**
   * Obtener estadísticas del blog
   * @returns {Promise}
   */
  async getBlogStats() {
    try {
      const totalPosts = mockPosts.length;
      const totalComments = mockComments.length;
      const totalLikes = mockPosts.reduce((sum, post) => sum + post.likes, 0);
      const authors = [...new Set(mockPosts.map(post => post.author))];
      
      const stats = {
        totalPosts,
        totalComments,
        totalLikes,
        totalAuthors: authors.length,
        averageReadTime: Math.round(mockPosts.reduce((sum, post) => sum + post.readTime, 0) / totalPosts),
        mostPopularCategory: this.getMostPopularCategory()
      };
      
      return await simulateApiCall(stats);
    } catch (error) {
      console.error('Error in getBlogStats:', error);
      throw error;
    }
  },

  /**
   * Función auxiliar para obtener la categoría más popular
   * @returns {string}
   */
  getMostPopularCategory() {
    const categoryCounts = {};
    mockPosts.forEach(post => {
      categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    });
    
    return Object.keys(categoryCounts).reduce((a, b) => 
      categoryCounts[a] > categoryCounts[b] ? a : b
    );
  },

  /**
   * Incrementar likes de un post
   * @param {number|string} postId - ID del post
   * @returns {Promise}
   */
  async likePost(postId) {
    try {
      const post = mockPosts.find(p => p.id === parseInt(postId));
      if (post) {
        post.likes += 1;
        post.popularity += 1;
      }
      return await simulateApiCall({ success: true, likes: post.likes });
    } catch (error) {
      console.error('Error in likePost:', error);
      throw error;
    }
  },

  /**
   * Agregar un comentario a un post
   * @param {number|string} postId - ID del post
   * @param {Object} commentData - Datos del comentario
   * @returns {Promise}
   */
  async addComment(postId, commentData) {
    try {
      const newComment = {
        id: Math.max(...mockComments.map(c => c.id)) + 1,
        postId: parseInt(postId),
        author: commentData.author,
        avatar: commentData.avatar,
        content: commentData.content,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      
      mockComments.push(newComment);
      
      // Incrementar contador de comentarios en el post
      const post = mockPosts.find(p => p.id === parseInt(postId));
      if (post) {
        post.comments += 1;
        post.popularity += 2;
      }
      
      return await simulateApiCall(newComment);
    } catch (error) {
      console.error('Error in addComment:', error);
      throw error;
    }
  }
};