"use client";

import "./blog.css";

export default function BlogPage() {
  return (
    <div className="blog-container">
      <div className="blog-card">
        <h1 className="blog-title">🚧 Blog Under Construction</h1>

        <p className="blog-text">
          We are currently working on our blog section.  
          Soon you will find updates, guides, and helpful articles here.
        </p>

        <div className="loader"></div>

        <p className="blog-subtext">
          Stay connected — something amazing is coming soon.
        </p>

        <button className="blog-btn" onClick={() => (window.location.href = "/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}