import React from 'react';
import blogData from './blogData.json';
import './styles.css'; 

function Blog() {
  return (
    <div className="blog">
      <h1>Blog</h1>
      {blogData.map((article) => (
        <div key={article.id} className="article">
          <h2>{article.title}</h2>
          <p>Author: {article.author}</p>
          <p>Date: {article.date}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
