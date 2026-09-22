import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { useSearch } from '../hooks/useSearch';
import SearchBar from '../components/SearchBar';
import BlogCard from '../components/BlogCard';
import './Blog.css';

const Blog = () => {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    blogPosts, 
    ['title', 'tags', 'searchText']
  );

  const newestFirst = [...filteredItems].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
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
          newestFirst.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className="blog-index-link">
              <BlogCard post={post} />
              <span className="blog-read-more">Read article →</span>
            </Link>
          ))
        ) : (
          <div className="empty-state">
            <h2>No posts found</h2>
            <p>Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
