// src/features/blog/hooks/useBlog.js
import { useState, useEffect } from 'react';
import { blogService } from '../services/blogServices';

export const useBlog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cargar todos los posts
  const loadPosts = async (filters = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response = await blogService.getPosts(filters);
      setPosts(response.data);
    } catch (err) {
      setError('Failed to load posts');
      console.error('Error loading posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar un post específico
  const loadPost = async (postId) => {
    try {
      setLoading(true);
      setError(null);
      const [postResponse, commentsResponse] = await Promise.all([
        blogService.getPostById(postId),
        blogService.getPostComments(postId)
      ]);
      
      setCurrentPost(postResponse.data);
      setComments(commentsResponse.data);
    } catch (err) {
      setError('Failed to load post');
      console.error('Error loading post:', err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar categorías
  const loadCategories = async () => {
    try {
      const response = await blogService.getCategories();
      setCategories(response.data);
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  // Cargar posts destacados
  const loadFeaturedPosts = async () => {
    try {
      const response = await blogService.getFeaturedPosts();
      setFeaturedPosts(response.data);
    } catch (err) {
      console.error('Error loading featured posts:', err);
    }
  };

  // Buscar posts
  const searchPosts = async (query) => {
    try {
      setLoading(true);
      const response = await blogService.searchPosts(query);
      setPosts(response.data);
    } catch (err) {
      setError('Failed to search posts');
      console.error('Error searching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar posts por categoría
  const loadPostsByCategory = async (category) => {
    try {
      setLoading(true);
      const response = await blogService.getPostsByCategory(category);
      setPosts(response.data);
    } catch (err) {
      setError('Failed to load category posts');
      console.error('Error loading category posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Efectos iniciales
  useEffect(() => {
    loadPosts();
    loadCategories();
    loadFeaturedPosts();
  }, []);

  return {
    // Estado
    posts,
    currentPost,
    comments,
    categories,
    featuredPosts,
    loading,
    error,
    
    // Acciones
    loadPosts,
    loadPost,
    loadCategories,
    loadFeaturedPosts,
    searchPosts,
    loadPostsByCategory,
    
    // Utilidades
    hasPosts: posts.length > 0,
    hasComments: comments.length > 0,
    hasCategories: categories.length > 0
  };
};