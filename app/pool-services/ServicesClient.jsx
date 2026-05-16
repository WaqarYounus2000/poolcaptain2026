"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FAQComponent from "@/components/FAQComponent";
import { services } from "@/data/services";
import PoolServicesIntro from "@/components/PoolServicesIntro";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import CustomPoolSolutions from "@/components/CustomPoolSolutions";

import "./ServicesClient.css";

export default function ServicesClient() {
  return (
    <>

      <section className="servicesPage">

        {/* HERO SECTION */}
        <section className="servicesHeroSection">

          <div className="servicesHeroImageWrapper">
            <Image
              src="/images/poolServices/servicesHero.png"
              alt="Swimming Pool Services Karachi Pakistan"
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <div className="servicesHeroOverlay"></div>

          <motion.div
            className="servicesHeroContent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Swimming Pool Services in Karachi Pakistan</h1>

            <p>
              Construction • Maintenance • Repair • Chemicals • Equipment Supply • Spa Solutions
            </p>
          </motion.div>

        </section>
        <PoolServicesIntro />

        {/* SERVICES GRID */}
        <div className="servicesGrid">

          {services.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="serviceCard"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >

                <div className="serviceIcon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p className="serviceCard-paragrah">{item.desc}</p>

                <Link href={item.link} className="serviceBtn">
                  View Details →
                </Link>

              </motion.div>
            );
          })}

        </div>
        <BeforeAfterGallery />

        <FAQComponent />
        <CustomPoolSolutions />
      </section>
    </>
  );
}