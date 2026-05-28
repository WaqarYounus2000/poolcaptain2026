"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/DetailsProducts.css";

export default function DetailsProducts({ data }) {
  if (!data) return <h1>Product Not Found</h1>;

  const safeImage =
    typeof data?.image === "string" && data.image.trim()
      ? data.image
      : "";

  useEffect(() => {
    // ✅ TITLE
    if (data?.seoTitle || data?.title) {
      document.title = data.seoTitle || data.title;
    }

    // ✅ DESCRIPTION
    if (data?.seoDesc) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = data.seoDesc;
    }

    // ✅ KEYWORDS
    if (data?.keywords?.length) {
      let kw = document.querySelector("meta[name='keywords']");
      if (!kw) {
        kw = document.createElement("meta");
        kw.name = "keywords";
        document.head.appendChild(kw);
      }
      kw.content = data.keywords.join(", ");
    }

    // ✅ OG TITLE
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = data.seoTitle || data.title;

    // ✅ OG DESC
    let ogDesc = document.querySelector("meta[property='og:description']");
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = data.seoDesc || "";

  }, [data]);

  return (
    <div className="dp-wrapper">

      {/* ================= HERO ================= */}
      <section className="dp-hero">

        <div className="dp-hero-image">
          <Image
            src={safeImage}
            alt={data.title}
            fill
            priority
          />
        </div>

        <div className="dp-hero-content">

          <span className="dp-badge">{data.category}</span>

          <h1>{data.heroTitle || data.title}</h1>

          <p>{data.heroDesc || data.shortDesc}</p>

          {/* QUICK SEO TAGS */}
          {data.keywords?.length > 0 && (
            <div className="dp-tags">
              {data.keywords.slice(0, 6).map((k, i) => (
                <span key={i}>{k}</span>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ================= SEO CONTENT ================= */}
      <section className="dp-content">

        <div className="dp-card">
          <h2>Overview</h2>
          <p>{data.seoDesc}</p>
        </div>

        {/* FEATURES */}
        {data.features?.length > 0 && (
          <div className="dp-card">
            <h2>Key Features</h2>
            <div className="dp-grid">
              {data.features.map((item, i) => (
                <div key={i} className="dp-item">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SPECIFICATIONS */}
        {data.specifications?.length > 0 && (
          <div className="dp-card dark">
            <h2>Specifications</h2>
            <div className="dp-grid">
              {data.specifications.map((item, i) => (
                <div key={i} className="dp-item">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BENEFITS */}
        {data.benefits?.length > 0 && (
          <div className="dp-card">
            <h2>Benefits</h2>
            <div className="dp-grid">
              {data.benefits.map((item, i) => (
                <div key={i} className="dp-item">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* ================= KEYWORDS SECTION ================= */}
      <section className="dp-keywords">
        <h3>SEO Keywords</h3>
        <p>{data.keywords?.join(", ")}</p>
      </section>

    </div>
  );
}