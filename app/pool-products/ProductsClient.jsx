"use client";

import { motion } from "framer-motion";
import Image from "next/image";





import styles from "./ProductsClient.module.css";

export default function ProductsClient({ categories = [] }) {
  return (
    <section className={styles.servicesPage}>

      {/* ================= HERO ================= */}
      <section className={styles.servicesHeroSection}>

        <div className={styles.servicesHeroImageWrapper}>
          <Image
            src="https://poolproducts.s3.ap-southeast-2.amazonaws.com/pool-products-cover-desktop.png"
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

          <p>
            Premium Pumps • Filters • Chemicals •
            Accessories • Heating Systems
          </p>
        </motion.div>
      </section>

      {/* ================= CATEGORY NAV ================= */}
      <div className={styles.categoryNavWrapper}>
        <div className={styles.categoryNav}>

          {categories.map((cat) => (
            <a
              key={cat._id}
              href={`#${cat.slug}`}
              className={styles.categoryNavItem}
            >
              {cat.name}
            </a>
          ))}

        </div>
      </div>

      {/* ================= PREMIUM SEO SECTION ================= */}
      <section className={styles.seoPremiumSection}>

        <div className={styles.seoContainer}>

          <h2>
            Premium Swimming Pool & Spa Equipment
            in Karachi
          </h2>

          <p>
            We provide high-quality swimming pool
            equipment in Karachi, Pakistan including
            pool pumps, pool filters, swimming pool
            accessories, pool cleaning equipment,
            pool heat pumps, swimming pool heaters,
            sauna systems, steam generators, and
            hydrotherapy solutions.
          </p>

          <div className={styles.seoGrid}>

            <div className={styles.seoCard}>
              <h3>Pool Pumps & Filtration</h3>

              <p>
                Energy-efficient swimming pool pumps
                with advanced filtration systems.
              </p>
            </div>

            <div className={styles.seoCard}>
              <h3>Pool Cleaning Equipment</h3>

              <p>
                Professional pool cleaning tools
                including vacuum systems and brushes.
              </p>
            </div>

            <div className={styles.seoCard}>
              <h3>Heating & Heat Pumps</h3>

              <p>
                Swimming pool heat pumps and heaters
                designed for energy efficiency.
              </p>
            </div>

            <div className={styles.seoCard}>
              <h3>Spa & Sauna Systems</h3>

              <p>
                Luxury sauna rooms and steam
                generators for wellness projects.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* //////////////////////////////////////////////////////////////////// */}
      <section className={styles.wrapper}>

        <div className={styles.container}>

          <span className={styles.badge}>Pool Products Overview</span>

          <h2 className={styles.title}>
            Complete Range of Premium Pool Products in Karachi
          </h2>

          <p className={styles.lead}>
            Discover high-quality swimming pool solutions including pumps,
            filters, chemicals, heaters, lighting systems, and cleaning tools
            designed for residential and commercial pools in Pakistan.
          </p>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h3>Pool Equipment & Systems</h3>
              <p>
                Energy-efficient pool pumps, filtration systems, heat pumps,
                circulation systems, and automation solutions for modern pools.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Pool Chemicals</h3>
              <p>
                Chlorine, pH control chemicals, algaecides, shock treatment,
                and full water balancing solutions for crystal-clear water.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Cleaning Accessories</h3>
              <p>
                Telescopic poles, nets, vacuum heads, hoses, brushes, and
                professional cleaning tools for maintenance.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Lighting & Heating</h3>
              <p>
                LED pool lights, underwater lighting systems, heaters, heat pumps,
                fountains, and premium pool accessories.
              </p>
            </div>

          </div>

          <p className={styles.footerText}>
            Built for durability, performance, and long-term water quality
            management in Karachi’s climate conditions.
          </p>

        </div>

      </section>
      {/* //////////////////////////////////////////////////////////////////// */}

      {/* ================= CATEGORY PRODUCTS ================= */}
{/* 
      <section className={styles.categoriesSection}>

        <div className={styles.categoriesContainer}>

          <div className={styles.sectionHeading}>
            <span>Premium Categories</span>

            <h2>Explore Pool Product Categories</h2>

            <p>
              Browse our premium swimming pool
              equipment collection in Pakistan.
            </p>
          </div>

          <div className={styles.categoriesGrid}>

            {categories.map((category) => (
              <div
                key={category._id}
                id={category.slug}
              >
                <CategoryCard category={category} />
              </div>
            ))}

          </div>

        </div>

      </section> */}

      {/* ================= SEO ================= */}

      <section className={styles.servicesSEOIntro}>

        <h2>
          Premium Swimming Pool Products Supplier
          in Karachi
        </h2>

        <p>
          We provide high-quality swimming pool
          pumps, filters, chemicals, lighting,
          cleaning tools and heating systems in
          Karachi Pakistan.
        </p>

      </section>

















      

    </section>
  );
}