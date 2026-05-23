"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import FAQComponent from "@/components/FAQComponent";
import {poolproductsfaqs} from "@/data/poolproductsfaqs";
import CustomPoolSolutions from "@/components/CustomPoolSolutions";
import { products } from "@/data/products";

import styles from "./ProductsClient.module.css";

export default function ProductsClient() {

  // GROUP BY CATEGORY
  const grouped = products.reduce((acc, item) => {
    const key = item.category || "Others";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  const categories = Object.keys(grouped);

  return (
    <section className={styles.servicesPage}>

      

      {/* ================= HERO ================= */}
      <section className={styles.servicesHeroSection}>

        <div className={styles.servicesHeroImageWrapper}>
          <Image
            src="/images/products/pool-product-bg.png"
            alt="Swimming Pool Products Karachi Pakistan"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.servicesHeroOverlay} />

        <motion.div
          className={styles.servicesHeroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Swimming Pool Products & Equipment</h1>
          <p>Premium Pumps • Filters • Chemicals • Accessories • Heating Systems</p>
        </motion.div>
      </section>

      {/* ================= PREMIUM CATEGORY NAV ================= */}
      <div className={styles.categoryNavWrapper}>
        <div className={styles.categoryNav}>

          {categories.map((cat, i) => (
            <a
              key={i}
              href={`#cat-${cat.replace(/\s+/g, "-")}`}
              className={styles.categoryNavItem}
            >
              {cat}
            </a>
          ))}

        </div>
      </div>
       {/* /////////////////////////////////// */}
      {/* ================= PREMIUM SEO SECTION ================= */}
      <section className={styles.seoPremiumSection}>

        <div className={styles.seoContainer}>

          <h2>Premium Swimming Pool & Spa Equipment in Karachi</h2>

          <p>
            We provide high-quality swimming pool equipment in Karachi, Pakistan including pool pumps, pool filters,
            swimming pool accessories, pool cleaning equipment, pool heat pumps, swimming pool heaters, sauna systems,
            steam generators, and hydrotherapy solutions. Our products are designed for residential pools, hotels,
            resorts, and commercial swimming pool projects with long-lasting durability and premium performance.
          </p>

          <div className={styles.seoGrid}>

            <div className={styles.seoCard}>
              <h3>Pool Pumps & Filtration</h3>
              <p>
                Energy-efficient swimming pool pumps in Karachi with advanced filtration systems ensuring crystal-clear
                water, strong circulation, and low maintenance performance.
              </p>
            </div>

            <div className={styles.seoCard}>
              <h3>Pool Cleaning Equipment</h3>
              <p>
                Professional pool cleaning tools including vacuum systems, brushes, and automatic cleaners for complete
                swimming pool maintenance in Karachi.
              </p>
            </div>

            <div className={styles.seoCard}>
              <h3>Heating & Heat Pumps</h3>
              <p>
                Swimming pool heat pumps and heaters in Pakistan designed for temperature control, energy efficiency,
                and year-round pool comfort.
              </p>
            </div>

            <div className={styles.seoCard}>
              <h3>Spa & Sauna Systems</h3>
              <p>
                Luxury sauna rooms, steam generators, and hydrotherapy systems for modern wellness projects in Karachi
                and across Pakistan.
              </p>
            </div>

          </div>

        </div>

      </section>
      {/* /////////////////////////////////// */}


     
      {/* ================= PRODUCTS ================= */}
      {Object.entries(grouped).map(([category, items], index) => (
        <section
          key={index}
          id={`cat-${category.replace(/\s+/g, "-")}`}
          className={styles.productCategorySection}
        >

          {/* CENTERED CATEGORY HEADING */}
          <div className={styles.categoryHeader}>
            <h2>{category}</h2>
            <div className={styles.categoryLine} />
          </div>

          <div className={styles.servicesGrid}>

            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
              >

                <div className={styles.productImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className={styles.serviceCardContent}>

                  <span className={styles.productCategory}>
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p className={styles.serviceCardparagrah}>
                    {item.shortDesc}
                  </p>

                  <div className={styles.productFeatures}>
                    {item.features?.slice(0, 3).map((f, i) => (
                      <span key={i} className={styles.featureBadge}>
                        ✔ {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/pool-products/${item.slug}`}
                    className={styles.serviceBtn}
                  >
                    View Details →
                  </Link>

                </div>

              </motion.div>
            ))}

          </div>
        </section>
      ))}

      {/* ================= SEO ================= */}
      <section className={styles.servicesSEOIntro}>
        <h2>Premium Swimming Pool Products Supplier in Karachi</h2>
        <p>
          We provide high-quality swimming pool pumps, filters, chemicals, lighting,
          cleaning tools and heating systems in Karachi Pakistan.
        </p>
      </section>

      <FAQComponent faqs = {poolproductsfaqs} />
      <CustomPoolSolutions />
    </section>
  );
}