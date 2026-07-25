"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectCard.module.css";
import { FaArrowRight, FaMapMarkerAlt, FaImages } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <Link href={`/projects/${project.slug}`} className={styles.imageWrapper}>
        <Image
          src={project.coverImage}
          alt={project.imageAlt || project.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className={styles.image}
          priority={project.isFeatured}
          unoptimized
          
        />

        <div className={styles.overlay}></div>

        <span className={styles.category}>
          {project.category}
        </span>

        {project.imageCount > 0 && (
          <span className={styles.imageCount}>
            <FaImages />
            {project.imageCount} Photos
          </span>
        )}
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          {project.location && (
            <span>
              <FaMapMarkerAlt />
              {project.location}
            </span>
          )}

          {project.clientType && (
            <span>{project.clientType}</span>
          )}
        </div>

        <h2 className={styles.title}>
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h2>

        <p className={styles.summary}>
          {project.summary}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className={styles.button}
        >
          View Project
          <FaArrowRight />
        </Link>
      </div>
    </article>
  );
}