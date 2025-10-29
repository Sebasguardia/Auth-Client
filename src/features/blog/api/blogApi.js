// src/features/blog/api/blogApi.js
import { blogService } from '../services/blogServices';

// Exportar todas las funciones del servicio simulado
export const getPosts = (filters = {}) => blogService.getPosts(filters);
export const getPostById = (id) => blogService.getPostById(id);
export const getPostComments = (postId) => blogService.getPostComments(postId);
export const getCategories = () => blogService.getCategories();
export const getFeaturedPosts = () => blogService.getFeaturedPosts();
export const searchPosts = (query) => blogService.searchPosts(query);
export const getPostsByCategory = (category) => blogService.getPostsByCategory(category);