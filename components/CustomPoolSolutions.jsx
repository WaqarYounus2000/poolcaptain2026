"use client";

import "../styles/CustomPoolSolutions.css";

import React from "react";
import { motion } from "framer-motion";

import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaCogs } from "react-icons/fa";

export default function CustomPoolSolution() {
  return (
    <section className="custom_solution_section">

      <motion.div
        className="custom_solution_container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* HEADING */}
        <div className="custom_solution_header">

          <div className="custom_icon_box">
            <FaCogs />
          </div>

          <h2>Custom Pool Solution</h2>

          <p>
            If your required service is not listed in our swimming pool,
            spa, sauna or steam room services — don’t worry.
            We provide fully custom engineering solutions.
          </p>

          <span className="custom_subtext">
            Contact us for FREE consultation & project guidance
          </span>

        </div>

        {/* CONTACT OPTIONS */}
        <div className="custom_solution_grid">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/923002538642"
            target="_blank"
            className="custom_card whatsapp"
          >
            <FaWhatsapp />
            <h3>WhatsApp</h3>
            <p>Quick response on WhatsApp</p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:info@poolcaptain.pk"
            className="custom_card email"
          >
            <FaEnvelope />
            <h3>Email Us</h3>
            <p>Send your project details</p>
          </a>

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/PoolCont/photos/"
            target="_blank"
            className="custom_card facebook"
          >
            <FaFacebook />
            <h3>Facebook</h3>
            <p>Follow our updates</p>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/poolcaptain0/"
            target="_blank"
            className="custom_card instagram"
          >
            <FaInstagram />
            <h3>Instagram</h3>
            <p>See our projects</p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/poolcaptain"
            target="_blank"
            className="custom_card linkedin"
          >
            <FaLinkedin />
            <h3>LinkedIn</h3>
            <p>Professional profile</p>
          </a>

        </div>

      </motion.div>

    </section>
  );
}