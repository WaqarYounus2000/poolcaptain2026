"use client";

import "@/styles/serviceCoverage.css";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaSwimmingPool,
  FaTools,
  FaWater,
  FaCogs,
} from "react-icons/fa";

export default function ServiceCoverageSection() {
  return (
    <section className="service_coverage_section">

      {/* HEADER */}
      <motion.div
        className="service_coverage_header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          <FaSwimmingPool />
          Pool Services Across Karachi & Surroundings
        </h2>

        <p>
          We provide professional swimming pool construction, maintenance,
          repair, waterproofing, filtration systems, chemical balancing and
          equipment installation services across Karachi and nearby regions.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="service_coverage_grid">

        {/* LOCATIONS */}
        <motion.div
          className="coverage_card"
          whileHover={{ y: -6 }}
        >
          <FaMapMarkerAlt className="coverage_icon" />
          <h3>Service Areas</h3>
          <p>
            Karachi, DHA, Clifton, Bahria Town, Scheme 33, Gulshan-e-Iqbal,
            and nearby residential & commercial zones.
          </p>
        </motion.div>

        {/* CORE SEO */}
        <motion.div
          className="coverage_card"
          whileHover={{ y: -6 }}
        >
          <FaTools className="coverage_icon" />
          <h3>Pool Construction & Repair</h3>
          <p>
            Expert swimming pool construction, renovation, leak detection,
            tile replacement, waterproofing and structural repair services.
          </p>
        </motion.div>

        {/* MAINTENANCE */}
        <motion.div
          className="coverage_card"
          whileHover={{ y: -6 }}
        >
          <FaWater className="coverage_icon" />
          <h3>Maintenance & Chemicals</h3>
          <p>
            Weekly pool maintenance, chemical balancing, water treatment,
            cleaning services and algae control for all pool types.
          </p>
        </motion.div>

        {/* EQUIPMENT */}
        <motion.div
          className="coverage_card"
          whileHover={{ y: -6 }}
        >
          <FaCogs className="coverage_icon" />
          <h3>Equipment Installation</h3>
          <p>
            Pool pumps, filtration systems, heat pumps, jacuzzi systems,
            sauna and steam room equipment installation & servicing.
          </p>
        </motion.div>

      </div>

      {/* SEO FOOT NOTE (LIGHT, NOT HEAVY TEXT) */}
      <motion.div
        className="service_coverage_footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>
          Trusted swimming pool experts in Karachi delivering premium pool
          construction, maintenance and spa engineering solutions for residential,
          commercial and luxury resort projects.
        </p>
      </motion.div>

    </section>
  );
}