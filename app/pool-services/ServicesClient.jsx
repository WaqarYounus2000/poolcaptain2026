"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FAQComponent from "@/components/FAQComponent";
import { poolservicesfaqs } from "@/data/poolservicesfaqs";
import CategoryCardServices from "@/components/CategoryCardServices";
import PoolServicesIntro from "@/components/PoolServicesIntro";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import CustomPoolSolutions from "@/components/CustomPoolSolutions";

import styles from "./ServicesClient.module.css";

export default function ServicesClient({ services }) {
  return (
    <>

      {console.log(services)}
      <section className={styles.servicesPage}>
        {/* HERO SECTION */}
        <section className={styles.servicesHeroSection}>
          <div className={styles.servicesHeroImageWrapper}>
            <Image
              src="https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/pool-services-cover.png"
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
            <h1>Swimming Pool Services in Karachi Pakistan</h1>

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





        {/* SERVICES GRID */}

        <div className={styles.servicesGrid}>
          {services?.map((item, index) => {
            return (
              <motion.div
                key={item._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <CategoryCardServices
                  category={item}
                  href={`/pool-services/${item.slug}`}
                />
              </motion.div>
            );
          })}
        </div>

        <BeforeAfterGallery />

        <FAQComponent faqs={poolservicesfaqs} />

        <CustomPoolSolutions />
      </section>
    </>
  );
}