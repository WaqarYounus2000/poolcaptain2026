"use client";

import styles from "../styles/BlogGrid.module.css";
import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs = [] }) {
  // console.log("Received Blogs:", blogs);

  if (!blogs.length) {
    return (
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.headingArea}>
            <span className={styles.badge}>Pool Captain Blog</span>

            <h1 className={styles.title}>
              Expert Swimming Pool Guides & Maintenance Tips
            </h1>

            <p className={styles.description}>
              No blogs have been published yet.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.blogSection}>
      <div className={styles.bgGlowOne}></div>
      <div className={styles.bgGlowTwo}></div>

      <div className={styles.container}>
        <div className={styles.headingArea}>
          <span className={styles.badge}>Pool Captain Blog</span>

          <h1 className={styles.title}>
            Expert Swimming Pool Guides & Maintenance Tips
          </h1>

          <p className={styles.description}>
            Discover professional articles covering swimming pool
            construction, maintenance, filtration systems, equipment,
            leak detection, cleaning methods, and expert advice from the
            Pool Captain team.
          </p>
        </div>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}