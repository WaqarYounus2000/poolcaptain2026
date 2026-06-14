"use client";

import styles from "./CategoryClient.module.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function CategoryClient({ products = [], category, seo }) {
  const title = (category || "products").replace(/-/g, " ");

  return (
    <div className={styles.wrapper}>


      {/* HERO TITLE */}
      <div className={styles.header}>
        <h1 className={styles.title}>Best {title} In Karachi</h1>
        {/* <p className={styles.subtitle}>
          Premium Swimming Pool Equipment & Solutions
        </p> */}

      </div>


      {/* ////////////////////////// SEO TITLE AND DESCRIPTION //////////////////////// */}
      <section className={styles.seoHero}>
        <h1 className={styles.seo_title}>{seo.title}</h1>

        <p className={styles.subtitle}>
          {seo.description}
        </p>
      </section>

      




      {/* EMPTY STATE */}
      {products.length === 0 ? (
        <div className={styles.emptyBox}>
          <p>No products found in this category</p>
        </div>
      ) : (
        <div className={styles.grid}>

          {products.map((item) => (
            <div key={item._id} className={styles.card}>

              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="eager"
                  className={styles.image}
                  unoptimized
                />
              </div>

              {/* CONTENT */}
              <div className={styles.content}>

                <h3 className={styles.productTitle}>
                  {item.title}
                </h3>

                <p className={styles.desc}>
                  {item.shortDesc}
                </p>

                {/* FEATURES PREVIEW */}
                <div className={styles.tags}>
                  {item.features?.slice(0, 3).map((f, i) => (
                    <span key={i} className={styles.tag}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <Link
                  href={`/pool-products/${category}/${item.slug}`}
                  className={styles.button}
                >
                  View Details <FaArrowRight />
                </Link>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}