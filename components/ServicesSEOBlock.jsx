"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaSwimmingPool,
  FaTools,
  FaWater,
  FaCogs,
  FaSpa,
  FaHammer,
  FaFilter,
  FaTint,
} from "react-icons/fa";
import "@/styles/servicesSeoBlock.css";


const services = [
  {
    icon: <FaSwimmingPool />,
    title: "Swimming Pool Construction",
    desc: "Custom residential and commercial swimming pool construction using modern engineering and durable materials.",
  },
  {
    icon: <FaTools />,
    title: "Pool Maintenance Services",
    desc: "Complete swimming pool maintenance including cleaning, balancing, inspection and routine servicing.",
  },
  {
    icon: <FaTint />,
    title: "Water Treatment & Chemicals",
    desc: "Professional pool water treatment, chemical balancing, and safe hygiene maintenance for crystal clear water.",
  },
  {
    icon: <FaFilter />,
    title: "Filtration System Installation",
    desc: "Advanced pool filtration systems, pumps and circulation upgrades for better performance and water quality.",
  },
  {
    icon: <FaSpa />,
    title: "Spa & Jacuzzi Installation",
    desc: "Luxury spa, jacuzzi, sauna and hydrotherapy pool installations for homes, resorts and commercial spaces.",
  },
  {
    icon: <FaCogs />,
    title: "Pool Equipment Supply",
    desc: "High-quality swimming pool equipment supply including motors, pumps, filters, lights and accessories.",
  },
  {
    icon: <FaHammer />,
    title: "Pool Repair & Renovation",
    desc: "Leak detection, structural repair, renovation and complete restoration of old swimming pools.",
  },
  {
    icon: <FaWater />,
    title: "Commercial Pool Projects",
    desc: "Large-scale swimming pool construction for hotels, resorts, gyms, clubs and housing societies.",
  },
];

export default function ServicesSEOBlock() {
  return (
    <section className="seoServices_section">

      <motion.div
        className="seoServices_header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Swimming Pool Services</h2>
        <p>
          Complete swimming pool solutions in Karachi Pakistan including construction, maintenance, repair, chemicals, filtration systems, spa installation and equipment supply.
        </p>
      </motion.div>

      <div className="seoServices_grid">

        {services.map((item, index) => (
          <motion.div
            key={index}
            className="seoServices_card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <div className="seoServices_icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}