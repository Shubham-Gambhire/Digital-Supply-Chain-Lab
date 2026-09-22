import React from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

const renderBlock = (block, index) => {
  if (block.type === 'heading') {
    return <h2 key={index} className="article-content-heading">{block.text}</h2>;
  }

  if (block.type === 'list') {
    return (
      <ul key={index} className="article-content-list">
        {block.items.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  if (block.type === 'emphasis') {
    return <p key={index} className="article-content-emphasis">{block.text}</p>;
  }

  if (block.type === 'quote') {
    return <p key={index} className="article-content-quote">{block.text}</p>;
  }

  if (block.type === 'closing') {
    return <p key={index} className="article-content-closing">{block.text}</p>;
  }

  return (
    <p key={index}>
      {block.label && <strong>{block.label} </strong>}
      {block.text}
    </p>
  );
};

const BlogArticle = ({ post }) => (
  <article className="article-page container-prose">
    <Link to="/blog" className="article-back">← All articles</Link>
    <header className="article-header">
      <time className="article-date font-mono" dateTime={post.publishedAt}>{post.date}</time>
      <h1 className="article-title">{post.title}</h1>
      <div className="blog-post-tags">
        {post.tags.map(tag => (
          <span key={tag} className="blog-tag">#{tag.toLowerCase().replace(/\s+/g, '-')}</span>
        ))}
      </div>
    </header>
    <div className="article-content">{post.content.map(renderBlock)}</div>
  </article>
);

export default BlogArticle;