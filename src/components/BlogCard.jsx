import React from 'react';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-meta">
        <time className="blog-card-date font-mono" dateTime={post.publishedAt}>{post.date}</time>
      </div>
      <h3 className="blog-card-title">{post.title}</h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      
      <div className="blog-card-tags">
        {post.tags.map(tag => (
          <span key={tag} className="blog-tag">#{tag.toLowerCase().replace(/\s+/g, '-')}</span>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
