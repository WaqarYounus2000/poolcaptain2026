"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "../styles/CategoryCard.module.css";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/pool-products/${category.slug}`}  
      className={styles.cardLink}
    >
      <div className={styles.card}>

        <div className={styles.imageWrapper}>

          <Image
            src={category.image}
            alt={category.name}
            fill
            className={styles.image}
          />

          <div className={styles.overlay} />

        </div>

        <div className={styles.content}>

          <h3>{category.name}</h3>

          <p>
            {category.shortDescription}
          </p>

          <span className={styles.button}>
            Explore Products →
          </span>

        </div>

      </div>
    </Link>
  );
}