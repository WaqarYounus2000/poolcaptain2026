"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/BlogCard.module.css";

export default function BlogCard({ blog }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={blog?.coverImage}
          alt={blog?.title}
          fill
          unoptimized
          loading="eager"
          className={styles.image}
        />

        <span className={styles.category}>
          {blog.category}
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{blog.createdBy}</span>
          <span>•</span>
          <span>
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>

        <h2 className={styles.title}>
          {blog.title}
        </h2>

        <p className={styles.summary}>
          {blog.summary}
        </p>

        <div className={styles.footer}>
          <span className={styles.readTime}>
            {blog.readTime}
          </span>

          <Link
            href={`/blogs/${blog.slug}`}
            className={styles.button}
          >
            View More →
          </Link>
        </div>
      </div>
    </article>
  );
}