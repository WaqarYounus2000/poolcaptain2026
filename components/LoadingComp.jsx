"use client";

import styles from "../styles/Loading.module.css";

export default function LoadingComp({ variant = "blog" }) {
  if (variant === "blog") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.overlay}></div>

          <div className={styles.heroContent}>
            <div className={styles.badge}></div>
            <div className={styles.title}></div>
            <div className={styles.subtitle}></div>

            <div className={styles.meta}>
              <div className={styles.avatar}></div>
              <div className={styles.metaText}></div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </aside>

          <main className={styles.main}>
            <div className={styles.summary}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.image}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </main>
        </div>
      </div>
    );
  }

  if (variant === "service") {
    return (
      <div className={styles.page}>
        <div className={styles.serviceHero}></div>

        <div className={styles.serviceContainer}>
          <div className={styles.serviceContent}>
            <div className={styles.heading}></div>

            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.lineSmall}></div>

            <div className={styles.image}></div>

            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>

            <div className={styles.headingSmall}></div>

            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>

          <aside className={styles.serviceSidebar}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </aside>
        </div>
      </div>
    );
  }

  if (variant === "product") {
    return (
      <div className={styles.productWrapper}>
        <div className={styles.productImage}></div>

        <div className={styles.productInfo}>
          <div className={styles.heading}></div>

          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.lineSmall}></div>

          <div className={styles.button}></div>
        </div>
      </div>
    );
  }

  if (variant === "category") {
  return (
    <div className={styles.categoryWrapper}>
      {/* Header */}
      <div className={styles.categoryHeader}>
        <div className={styles.heading}></div>
        <div className={styles.subtitle}></div>
      </div>

      {/* SEO Section */}
      <div className={styles.seoSection}>
        <div className={styles.headingSmall}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.lineSmall}></div>
      </div>

      {/* Product Grid */}
      <div className={styles.categoryGrid}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.categoryCard}>
            <div className={styles.categoryImage}></div>

            <div className={styles.categoryContent}>
              <div className={styles.productTitle}></div>

              <div className={styles.line}></div>
              <div className={styles.lineSmall}></div>

              <div className={styles.tagRow}>
                <div className={styles.tag}></div>
                <div className={styles.tag}></div>
                <div className={styles.tag}></div>
              </div>

              <div className={styles.button}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

if (variant === "product-detail") {
  return (
    <div className={styles.detailWrapper}>
      {/* Hero */}
      <div className={styles.detailHero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.detailHeroContent}>
          <div className={styles.badge}></div>

          <div className={styles.bigTitle}></div>

          <div className={styles.line}></div>
          <div className={styles.lineSmall}></div>

          <div className={styles.actionRow}>
            <div className={styles.actionBtn}></div>
            <div className={styles.actionBtnGhost}></div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className={styles.highlightGrid}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.highlightCard}>
            <div className={styles.headingSmall}></div>
            <div className={styles.lineSmall}></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={styles.detailContainer}>
        <div className={styles.heading}></div>

        <div className={styles.line}></div>

        {/* Technical cards */}
        <div className={styles.techGrid}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={styles.techCard}>
              <div className={styles.headingSmall}></div>

              <div className={styles.line}></div>
              <div className={styles.line}></div>

              <div className={styles.lineSmall}></div>
              <div className={styles.lineSmall}></div>
              <div className={styles.lineSmall}></div>
            </div>
          ))}
        </div>

        {/* Feature blocks */}
        {[1, 2, 3].map((block) => (
          <div key={block} className={styles.featureBlock}>
            <div className={styles.headingSmall}></div>

            <div className={styles.featureGrid}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.circle}></div>
                  <div className={styles.lineSmall}></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Gallery */}
        <div className={styles.headingSmall}></div>

        <div className={styles.galleryGrid}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.galleryImage}></div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaSkeleton}>
          <div className={styles.heading}></div>

          <div className={styles.lineSmall}></div>

          <div className={styles.actionBtn}></div>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className={styles.center}>
      <div className={styles.spinner}></div>
    </div>
  );
}