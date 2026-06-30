"use client";

import { motion } from "framer-motion";

import Image from "next/image";


import PoolServicesIntro from "@/components/PoolServicesIntro";


import styles from "./ServicesClient.module.css";

export default function ServicesClient({ services }) {
  return (
    <>

      <section className={styles.servicesPage}>
        {/* HERO SECTION */}
        <section className={styles.servicesHeroSection}>
          <div className={styles.servicesHeroImageWrapper}>
            <Image
              src="https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/pool-services-cover.webp"
              alt="Swimming Pool Services Karachi Pakistan"
              fill
              priority
              sizes="100vw"
              loading="eager"
              unoptimized
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <div className={styles.servicesHeroOverlay}></div>

          <motion.div
            className={styles.servicesHeroContent}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Swimming Pool Services in Karachi, Pakistan</h1>

            <p>
              Construction • Maintenance • Repair • Chemicals • Equipment Supply
              • Spa Solutions
            </p>
          </motion.div>
        </section>

        <PoolServicesIntro />



        <div className={styles.sectionHeader}>
          <h2>Browse Our Pool Services Categories</h2>

          <p>
            Complete swimming pool care solutions including Construction, cleaning, maintenance,
            repairs, chemical balancing & equipment servicing. Built for long-term
            performance, safety, and crystal-clear water results.
          </p>
        </div>





       

        </section>
    </>
  );
}