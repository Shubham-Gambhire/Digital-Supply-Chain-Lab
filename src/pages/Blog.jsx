import React from 'react';
import { blogPosts } from '../data/blog';
import { useSearch } from '../hooks/useSearch';
import SearchBar from '../components/SearchBar';
import './Blog.css';

const Blog = () => {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    blogPosts, 
    ['title', 'tags', 'searchText']
  );

  const renderBlock = (block, index) => {
    if (block.type === 'heading') {
      return <h3 key={index} className="blog-content-heading">{block.text}</h3>;
    }

    if (block.type === 'list') {
      return (
        <ul key={index} className="blog-content-list">
          {block.items.map(item => <li key={item}>{item}</li>)}
        </ul>
      );
    }

    if (block.type === 'emphasis') {
      return <p key={index} className="blog-content-emphasis">{block.text}</p>;
    }

    if (block.type === 'quote') {
      return <p key={index} className="blog-content-quote">{block.text}</p>;
    }

    if (block.type === 'closing') {
      return <p key={index} className="blog-content-closing">{block.text}</p>;
    }

    return (
      <p key={index}>
        {block.label && <strong>{block.label} </strong>}
        {block.text}
      </p>
    );
  };

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
                {post.content.map(renderBlock)}
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
