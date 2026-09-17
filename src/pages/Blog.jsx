import React from 'react';
import { blogPosts } from '../data/blog';
import { useSearch } from '../hooks/useSearch';
import SearchBar from '../components/SearchBar';
import './Blog.css';

const Blog = () => {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    blogPosts, 
    ['title', 'excerpt', 'tags', 'content']
  );

  return (
    <div className="blog-page container-prose">
      <div className="page-header">
        <h1 className="page-title">Blog</h1>
        <p className="page-description">
          An informal, ongoing space for observations, reads, and conclusions about supply chain.
        </p>
      </div>

      <div className="blog-search">
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          placeholder="Search posts or tags..." 
        />
      </div>

      <div className="blog-feed">
        {filteredItems.length > 0 ? (
          filteredItems.map(post => (
            <article key={post.id} className="blog-post">
              <header className="blog-post-header">
                <span className="blog-post-date font-mono">{post.date}</span>
                <h2 className="blog-post-title">{post.title}</h2>
                <div className="blog-post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-tag">
                      #{tag.toLowerCase().replace(/\s+/g, '-')}
                    </span>
                  ))}
                </div>
              </header>
              <div className="blog-post-content">
                {post.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))
        ) : (
          <div className="empty-state">
            <h3>No posts found</h3>
            <p>Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
