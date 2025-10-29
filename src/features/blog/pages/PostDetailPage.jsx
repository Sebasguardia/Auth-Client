// src/features/blog/pages/PostDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendar, FaUser, FaClock, FaShare, FaBookmark, FaHeart, FaCode, FaComment, FaArrowLeft, FaHome, FaList, FaChevronRight } from 'react-icons/fa';
import DottedBackground from '../../../components/DottedBackground/DottedBackground';
import Button from '../../../components/Button/Button';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorState from '../components/ErrorState';
import { getPostById, getPostComments } from '../api/blogApi';

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const [newComment, setNewComment] = useState('');
  const [commentSubmitting, setCommentSubmitting] = useState(false);

  // Datos mock para usuario actual
  const currentUser = {
    id: 1,
    name: 'Tú',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  };

  useEffect(() => {
    const loadPostData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [postResponse, commentsResponse] = await Promise.all([
          getPostById(id),
          getPostComments(id)
        ]);
        
        setPost(postResponse.data);
        setComments(commentsResponse.data);
        
      } catch (err) {
        setError('No se pudo cargar el artículo. Por favor intenta nuevamente.');
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      setTimeout(() => {
        loadPostData();
      }, 1000);
    }
  }, [id]);

  // Observer para detectar la sección activa
  useEffect(() => {
    if (!post) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1
      }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [post]);

  const handleBack = () => {
    navigate('/blog');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    console.log(isBookmarked ? 'Removido de favoritos' : 'Agregado a favoritos');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log(isLiked ? 'Like removido' : 'Like agregado');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setCommentSubmitting(true);
    
    setTimeout(() => {
      const newCommentObj = {
        id: Date.now(),
        postId: parseInt(id),
        content: newComment,
        author: currentUser.name,
        avatar: currentUser.avatar,
        date: new Date().toISOString(),
        likes: 0
      };

      setComments(prev => [newCommentObj, ...prev]);
      setNewComment('');
      setCommentSubmitting(false);
      
      alert('¡Comentario agregado exitosamente!');
    }, 500);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (body) => {
    if (!body) return 5;
    
    const wordsPerMinute = 200;
    let totalWords = 0;
    
    if (body.introduction) totalWords += body.introduction.split(/\s+/).length;
    if (body.conclusion) totalWords += body.conclusion.split(/\s+/).length;
    
    body.sections?.forEach(section => {
      if (section.content) totalWords += section.content.split(/\s+/).length;
      if (section.code) totalWords += section.code.split(/\s+/).length;
    });
    
    return Math.ceil(totalWords / wordsPerMinute) || 5;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Código copiado al portapapeles!');
  };

  if (loading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <DottedBackground />
        <LoadingSkeleton type="detail" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <DottedBackground />
        <ErrorState 
          title="Artículo No Encontrado"
          message="El artículo que buscas no existe o puede haber sido eliminado."
          onRetry={() => window.location.reload()}
          onGoHome={() => navigate('/blog')}
          type="notFound"
        />
      </div>
    );
  }

  const readTime = calculateReadTime(post.body);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <DottedBackground />
      
      {/* Contenido principal */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar - STICKY NORMAL (no fixed) */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6">
                {/* Botón Volver integrado */}
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-3 w-full p-3 mb-6 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  <span className="font-medium">Volver al Blog</span>
                </button>

                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaList className="w-4 h-4 text-blue-600" />
                  Navegación del Artículo
                </h3>
                
                {/* Lista de navegación */}
                <nav className="space-y-2 mb-6">
                  <button
                    onClick={() => scrollToSection('introduction')}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 border flex items-center gap-3 ${
                      activeSection === 'introduction' 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    <FaHome className="w-4 h-4" />
                    <span className="font-medium">Introducción</span>
                    <FaChevronRight className={`w-3 h-3 ml-auto transition-transform duration-200 ${
                      activeSection === 'introduction' ? 'rotate-90 text-blue-600' : 'opacity-0'
                    }`} />
                  </button>
                  
                  {post.body.sections?.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(`section-${index}`)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 border flex items-center gap-3 ${
                        activeSection === `section-${index}` 
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50 border-gray-200'
                    }`}
                    >
                      <FaCode className="w-4 h-4" />
                      <span className="font-medium">{section.title}</span>
                      <FaChevronRight className={`w-3 h-3 ml-auto transition-transform duration-200 ${
                        activeSection === `section-${index}` ? 'rotate-90 text-blue-600' : 'opacity-0'
                      }`} />
                    </button>
                  ))}
                  
                  <button
                    onClick={() => scrollToSection('conclusion')}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 border flex items-center gap-3 ${
                      activeSection === 'conclusion' 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    <FaBookmark className="w-4 h-4" />
                    <span className="font-medium">Conclusión</span>
                    <FaChevronRight className={`w-3 h-3 ml-auto transition-transform duration-200 ${
                      activeSection === 'conclusion' ? 'rotate-90 text-blue-600' : 'opacity-0'
                    }`} />
                  </button>
                </nav>

                {/* Acciones rápidas */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Acciones</h4>
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={handleBookmark}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 border ${
                        isBookmarked 
                          ? 'text-red-600 bg-red-50 border-red-200' 
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-gray-200'
                      }`}
                    >
                      <FaBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                      <span className="text-sm font-medium">
                        {isBookmarked ? 'Guardado' : 'Guardar'}
                      </span>
                    </button>
                    
                    <button 
                      onClick={handleLike}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 border ${
                        isLiked 
                          ? 'text-red-600 bg-red-50 border-red-200' 
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-gray-200'
                      }`}
                    >
                      <FaHeart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                      <span className="text-sm font-medium">
                        {isLiked ? 'Me gusta' : 'Dar like'}
                      </span>
                    </button>
                    
                    <button 
                      onClick={handleShare}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-50 border border-gray-200 transition-all duration-200"
                    >
                      <FaShare className="w-4 h-4" />
                      <span className="text-sm font-medium">Compartir</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Contenido del artículo - LAYOUT NORMAL */}
            <article className="flex-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-100/50 overflow-hidden">
                
                {/* Hero Section */}
                <div className="p-6 sm:p-8 border-b border-gray-200/50 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Imagen */}
                    <div className="lg:w-1/3">
                      <div className="rounded-xl overflow-hidden shadow-lg border border-blue-200/50">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 lg:h-64 object-cover"
                        />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="lg:w-2/3">
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {post.title}
                      </h1>
                      
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta información */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-600 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200/50">
                          <FaUser className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200/50">
                          <FaCalendar className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">{formatDate(post.publishedDate)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200/50">
                          <FaClock className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">{readTime} min de lectura</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200/50">
                          <FaHeart className="w-4 h-4 text-red-500" />
                          <span className="text-sm font-medium">{post.likes} likes</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags?.map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs px-3 py-1.5 rounded-full font-medium border border-blue-200/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENIDO COMPLETO */}
                <div className="p-6 sm:p-8 space-y-12">
                  
                  {/* Introducción */}
                  <section 
                    id="introduction" 
                    data-section="introduction"
                    className="scroll-mt-24"
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      Introducción
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {post.body?.introduction}
                      </p>
                    </div>
                  </section>

                  {/* Secciones del artículo */}
                  {post.body?.sections?.map((section, index) => (
                    <section 
                      key={index}
                      id={`section-${index}`}
                      data-section={`section-${index}`}
                      className="scroll-mt-24"
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        {section.title}
                      </h2>
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                          {section.content}
                        </p>
                        
                        {section.type === 'code' && section.code && (
                          <div className="relative mb-6 group">
                            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl p-4 overflow-x-auto border border-blue-500/20">
                              <pre className="text-gray-100 text-sm">
                                <code>{section.code}</code>
                              </pre>
                            </div>
                            <button
                              onClick={() => copyToClipboard(section.code)}
                              className="absolute top-3 right-3 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
                            >
                              <FaCode className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </section>
                  ))}

                  {/* Conclusión */}
                  <section 
                    id="conclusion" 
                    data-section="conclusion"
                    className="scroll-mt-24"
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      Conclusión
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {post.body?.conclusion}
                      </p>
                    </div>
                  </section>

                  {/* Call to Action */}
                  <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      ¿Te gustó este artículo?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Compártelo con tu red y ayuda a otros desarrolladores a descubrir este contenido.
                    </p>
                    <div className="flex justify-center">
                      <Button 
                        onClick={handleShare}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <FaShare className="w-4 h-4" />
                        Compartir Artículo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección de comentarios */}
              <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-100/50 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <FaComment className="text-blue-600" />
                    Comentarios ({comments.length})
                  </h3>
                </div>
                
                {/* Formulario para nuevo comentario */}
                <form onSubmit={handleAddComment} className="mb-8">
                  <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border border-blue-200/50 p-4">
                    <div className="flex items-start gap-4">
                      <img 
                        src={currentUser.avatar} 
                        alt={currentUser.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="font-medium text-gray-800">{currentUser.name}</span>
                        </div>
                        <textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Comparte tus pensamientos sobre este artículo..."
                          className="w-full h-24 px-4 py-3 bg-white rounded-lg border border-gray-300/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none transition-all duration-200"
                          disabled={commentSubmitting}
                          maxLength={500}
                        />
                        <div className="flex justify-between items-center mt-3">
                          <span className={`text-sm ${newComment.length > 500 ? 'text-red-500' : 'text-gray-500'}`}>
                            {newComment.length}/500 caracteres
                          </span>
                          <Button
                            type="submit"
                            disabled={!newComment.trim() || commentSubmitting || newComment.length > 500}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed px-6"
                          >
                            {commentSubmitting ? 'Publicando...' : 'Publicar Comentario'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                
                {/* Lista de comentarios */}
                <div className="space-y-4">
                  {comments.map(comment => (
                    <div key={comment.id} className="p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:border-blue-200/50 transition-all duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img 
                            src={comment.avatar} 
                            alt={comment.author}
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-800">{comment.author}</h4>
                            <p className="text-gray-500 text-sm">{formatDate(comment.date)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <button className="p-1 hover:text-red-500 transition-colors">
                            <FaHeart className="w-4 h-4" />
                          </button>
                          <span>{comment.likes}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                    </div>
                  ))}
                </div>

                {comments.length === 0 && (
                  <div className="text-center py-12 text-gray-500 bg-gray-50/50 rounded-xl border border-gray-200/50">
                    <FaComment className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium mb-2">No hay comentarios aún</p>
                    <p className="text-sm">¡Sé el primero en compartir tus pensamientos!</p>
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostDetailPage;