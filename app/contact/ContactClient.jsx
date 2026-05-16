"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGoogle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import CustomPoolSolutions from "@/components/CustomPoolSolutions";
import { FiInstagram, FiFacebook } from "react-icons/fi";

import "./contact.css";

export default function ContactClient() {
  return (
    <div className="contact">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="heroGlow" />

        <div className="heroContent">
          <h1>Contact Pool Captain</h1>
          <p>
            Premium swimming pool construction, maintenance & water systems in Karachi.
            We deliver engineering excellence with modern design.
          </p>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="infoGrid">

        {/* CALL CARD */}
        <a href="tel:03008229745" className="glassCard">
          <div className="iconBox green">
            <FaPhoneAlt />
          </div>

          <h3>Call Now</h3>
          <p>0300 8229745</p>
          <span>Tap to call instantly</span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/923002538642"
          target="_blank"
          className="glassCard"
        >
          <div className="iconBox whatsapp">
            <FaWhatsapp />
          </div>

          <h3>WhatsApp</h3>
          <p>Chat with expert</p>
          <span>Fast response support</span>
        </a>

        {/* LOCATION */}
        <a
          href="https://www.google.com/maps/place/Pool+Captain+-+Sales+Swimming+Pool+Equipment,Installation,Repairs+Services+%26+Chemical+Care/@24.8097236,67.0348686,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33d502c83d4f7:0xed1aa3fbf71d85c6!8m2!3d24.8097236!4d67.0348686!16s%2Fg%2F11jj19tl4v?hl=en&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="glassCard"
        >
          <div className="iconBox blue">
            <FaMapMarkerAlt />
          </div>

          <h3>Our Location</h3>
          <p>Pool Captain Karachi</p>
          <span>
            Open in Google Maps <FaExternalLinkAlt />
          </span>
        </a>

      </section>

      {/* ================= SOCIAL ================= */}
      <section className="socialRow">

        <a href="https://www.facebook.com/PoolCont/photos/" target="_blank" className="socialBtn">
          <FiFacebook /> Facebook
        </a>

        <a href="https://www.instagram.com/poolcaptain0/" target="_blank" className="socialBtn">
          <FiInstagram /> Instagram
        </a>

        <a
          href="https://www.google.com/search?q=pool+captain&rlz=1C1VDKB_en-GBPK1181PK1181&oq=pool+captain&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGI8CMgcIAhAAGI8CMgYIAxBFGDwyBggEEEUYPNIBCDE1MDBqMGo3qAIHsAIB8QW6YALjXkTAe_EFumAC415EwHs&sourceid=chrome&ie=UTF-8"
          target="_blank"
          className="socialBtn"
        >
          <FaGoogle /> Google Profile
        </a>

      </section>
<CustomPoolSolutions/>
    </div>
  );
}