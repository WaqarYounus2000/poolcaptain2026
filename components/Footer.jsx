"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import "@/styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* WAVE TOP */}
      <div className="footer-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0a4d68"
            fillOpacity="1"
            d="M0,224L80,224C160,224,320,224,480,213.3C640,203,800,181,960,170.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <footer className="footer">
        {/* TOP SECTION */}
        <div className="footer-top">
          <div className="footer-social-text">
            <h3>Stay Connected With Pool Captain</h3>
            <p>
              Follow us on social media for pool projects, maintenance tips,
              accessories and latest updates.
            </p>
          </div>

          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/PoolCont"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/pool_captain0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/923002538642"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="footer-grid">
          {/* ABOUT */}
          <div className="footer-column">
            <div className="footer-logo-box">
              <img
                src="/images/logo.png"
                alt="Pool Captain"
                className="footer-logo"
              />

              <div>
                <h2>Pool Captain</h2>
                <span>Swimming Pool Experts</span>
              </div>
            </div>

            <p className="footer-about">
              Pool Captain provides professional swimming pool construction,
              maintenance, cleaning, filtration systems, accessories and repair
              services in Karachi with modern technology and experienced
              technicians.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <Link href="/">
                  <FaArrowRight /> Home
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <FaArrowRight /> About Us
                </Link>
              </li>

              <li>
                <Link href="/pool-services">
                  <FaArrowRight /> Pool Services
                </Link>
              </li>

              <li>
                <Link href="/pool-products">
                  <FaArrowRight /> Pool Products
                </Link>
              </li>

              <li>
                <Link href="/gallery">
                  <FaArrowRight /> Gallery
                </Link>
              </li>

              <li>
                <Link href="/blogs">
                  <FaArrowRight /> Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h4>Our Services</h4>

            <ul>
              <li>Swimming Pool Construction</li>
              <li>Pool Maintenance</li>
              <li>Pool Cleaning</li>
              <li>Pool Repair</li>
              <li>Water Filtration Systems</li>
              <li>Pool Accessories</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h4>Contact Information</h4>

            <div className="contact-item">
              <FaMapMarkerAlt />

              <a
                href="https://www.google.com/maps?cid=17085148438961423814"
                target="_blank"
                rel="noopener noreferrer"
              >
                Main 26th street Phase-5 DHa, Karachi.
              </a>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:poolcaptain021@gmail.com">
                poolcaptain021@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <a
                href="https://wa.me/923008229745"
                target="_blank"
                rel="noopener noreferrer"
              >
                +92 300 8229745
              </a>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <a
                href="https://wa.me/923002538642"
                target="_blank"
                rel="noopener noreferrer"
              >
                +92 300 2538642
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {year} Pool Captain. All Rights Reserved. Designed & Developed by PoolCaptain 
          </p>
        </div>
      </footer>
    </>
  );
}