// src/features/blog/components/PostGrid.jsx
import React from 'react';
import PostCard from './PostCard';

const PostGrid = ({ posts, onPostClick, className = '' }) => {
  
  const handlePostClick = (postId) => {
    if (onPostClick) {
      onPostClick(postId);
    }
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-6 overflow-y-auto animate-fadeIn ${className}`}>
      {posts.map((post, index) => (
        <div 
          key={post.id} 
          className="animate-slide-up"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}
        >
          <PostCard 
            post={post} 
            onReadMore={() => handlePostClick(post.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
