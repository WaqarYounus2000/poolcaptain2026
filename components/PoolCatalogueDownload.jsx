"use client";

import { FaDownload, FaFilePdf, FaArrowRight } from "react-icons/fa";
import styles from "../styles/PoolCatalogueDownload.module.css";

export default function PoolCatalogueDownload() {
  const pdfUrl =
    "https://poolproducts.s3.ap-southeast-2.amazonaws.com/PoolCaptainCatalogue/poolcaptain-catalogue-2026.pdf";

  return (
    <section className={styles.catalogueSection}>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.catalogueCard}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <FaFilePdf />
            Product Catalogue
          </span>

          <h2 className={styles.title}>
            Download the Complete
            <span> Pool Captain Catalogue</span>
          </h2>

          <p className={styles.description}>
            Explore our complete range of swimming pool equipment,
            filtration systems, pumps, cleaning accessories, pool
            chemicals, lighting solutions, wellness products, and
            commercial aquatic equipment in one professionally
            designed catalogue.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>✓ Latest Products</div>
            <div className={styles.feature}>✓ Technical Specifications</div>
            <div className={styles.feature}>✓ Installation Solutions</div>
            <div className={styles.feature}>✓ Professional Equipment</div>
          </div>

          <div className={styles.actions}>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
            >
              <FaDownload />
              Download Catalogue
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.previewBtn}
            >
              View Online
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className={styles.previewArea}>
          <div className={styles.catalogueMockup}>
            <div className={styles.catalogueCover}>
              <FaFilePdf size={90} />

              <h3>POOL CAPTAIN</h3>

              <p>Product Catalogue</p>

              <span>2026 Edition</span>
            </div>

            <div className={styles.shadow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}