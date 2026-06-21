"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

import "@/styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">

        {/* LOGO (IMAGE ONLY) */}
        <Link href="/" className="logo-section">
           <Image src={"https://poolproducts.s3.ap-southeast-2.amazonaws.com/logo/logo.webp"} unoptimized fill alt="Pool Captain" className="logo-image" />
          
        </Link>

        {/* DESKTOP MENU */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/pool-services" onClick={closeMenu}>Pool Services</Link>
          <Link href="/pool-products" onClick={closeMenu}>Pool Products</Link>
          <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/blogs" onClick={closeMenu}>Blogs</Link>
          <Link href="/pool-volume-calculator" onClick={closeMenu}>Pool Calculator</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <a href="tel:+923008229745" className="quote-btn">
            Call Now
          </a>

          <div
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

      </nav>
    </header>
  );
}