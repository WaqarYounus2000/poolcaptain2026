"use client";

import "../styles/PoolServicesIntro.css";

import { motion } from "framer-motion";

import {
  FaSwimmingPool,
  FaTools,
  FaWater,
  FaHotTub,
  FaWrench,
  FaCheckCircle,
} from "react-icons/fa";

export default function PoolServicesIntro() {
  return (
    <section className="pool_intro_section">

      <div className="pool_intro_bg"></div>

      <motion.div
        className="pool_intro_container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* TITLE */}
        <div className="pool_intro_heading">

          <span className="pool_intro_tag">
            Premium Pool Engineering
          </span>

          <h2>
            Professional Swimming Pool Construction & Maintenance Services in Karachi Pakistan
          </h2>

          <p>
            Pool Captain is one of the leading swimming pool companies in Karachi Pakistan providing complete swimming pool construction, maintenance, renovation, repair, filtration systems, pool equipment supply and spa engineering solutions for residential and commercial projects.
          </p>

        </div>

        {/* CONTENT */}
        <div className="pool_intro_content">

          {/* LEFT */}
          <motion.div
            className="pool_intro_left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="pool_intro_card">

              <div className="pool_intro_icon">
                <FaSwimmingPool />
              </div>

              <div>
                <h3>Swimming Pool Construction</h3>

                <p>
                  The Pool-Captain is the leading swimming pool, spa/jacuzzi construction company in karachi Pakistan,
                  whether you live in any where, we cover all areas of pakistan and build serveral pool in in areas, clifton, DHA, phase-8,
                  behria town, gulshan-e-iqbal,nazimabad commander city , hyderabad over the years. Complete pool construction solution from pool excavation to pool cleaning and pool maintenance. Pool Plumbing and piping deliver all over the DHA,karachi & pakistan, The oldest pool builder and pool contractor company in karachi pakistan. 
                </p>
              </div>

            </div>

            <div className="pool_intro_card">

              <div className="pool_intro_icon">
                <FaTools />
              </div>

              <div>
                <h3>Pool Maintenance & Cleaning Services</h3>

                <p>
                  Professional swimming pool maintenance services across Pakistan, including expert pool cleaning services, swimming pool chemical balancing, water treatment, pool leak detection and repair, waterproofing solutions, filtration system maintenance, pump servicing, algae removal, pool deep cleaning, and complete swimming pool repair and renovation services. We provide reliable residential and commercial pool maintenance, ensuring crystal clear water, hygienic swimming conditions, and long-lasting pool performance.
                </p>
              </div>

            </div>

            <div className="pool_intro_card">

              <div className="pool_intro_icon">
                <FaHotTub />
              </div>

              <div>
                <h3>Jacuzzi, Sauna & Spa Solutions</h3>

                <p>
                  Complete spa engineering and wellness solutions including luxury jacuzzi installation services, sauna room construction, steam bath systems, hydrotherapy pool design and installation, spa plumbing and filtration systems, wellness resort development, and custom spa interior finishing with modern luxury aesthetics. We specialize in residential, commercial, and hotel spa projects, delivering energy-efficient, durable, and high-performance wellness systems designed for ultimate comfort, relaxation, and long-term reliability.
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="pool_intro_right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="pool_intro_feature_box">

              <h3>
                Trusted Pool Company in Pakistan
              </h3>

              <p>
                With over 30 years of experience, Pool Captain has become
                a trusted name for swimming pool construction, pool
                maintenance, pool renovation and pool equipment supply
                in Karachi and across Pakistan.
              </p>

              <ul>

                <li>
                  <FaCheckCircle />
                  Residential & Commercial Pool Projects
                </li>

                <li>
                  <FaCheckCircle />
                  Pool Chemical Supply & Water Treatment
                </li>

                <li>
                  <FaCheckCircle />
                  Pool Filtration Systems & Plumbing
                </li>

                <li>
                  <FaCheckCircle />
                  Resort & Luxury Spa Engineering
                </li>

                <li>
                  <FaCheckCircle />
                  Swimming Pool Equipment Installation
                </li>

                <li>
                  <FaCheckCircle />
                  Long-Term Maintenance Contracts
                </li>

              </ul>

            </div>

            <div className="pool_stats_grid">

              <div className="pool_stat_card">
                <FaWater className="stat_icon" />
                <h4>35+</h4>
                <p>Years Experience</p>
              </div>

              <div className="pool_stat_card">
                <FaWrench className="stat_icon" />
                <h4>500+</h4>
                <p>Projects Completed</p>
              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}