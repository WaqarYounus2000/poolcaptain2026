"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CategoryCardServices.module.css"
import * as Icons from "react-icons/fa";

export default function CategoryCardServices({ category, href }) {
  const Icon = Icons[category?.icon];

  return (
    
    <Link href={href} className={styles.cardLink}>
      <div className={styles.card}>

        <div className={styles.imageWrapper}>
          <Image
            src={category?.image}
            alt={category?.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.overlay} />
        </div>

        <div className={styles.content}>

          {Icon && <Icon size={35} className={styles.icon} />}

          <h3>{category?.title}</h3>

          <p>{category?.shortDesc}</p>

          <span className={styles.button}>
            Explore Service →
          </span>

        </div>

      </div>
    </Link>
  );
}