"use client";

import Image from "next/image";
import { useEffect } from "react";
import "../styles/DetailsProducts.css";

export default function DetailsProducts({ data }) {
  if (!data) return <h1>Product Not Found</h1>;

  const fallbackImage = "/images/products/placeholder.jpg";

  const safeImage =
    typeof data?.image === "string" && data.image.trim()
      ? data.image
      : fallbackImage;

  const safeSideImage =
    typeof data?.sideImage === "string" && data.sideImage.trim()
      ? data.sideImage
      : fallbackImage;

  // ✅ META TAGS (SEO)
  useEffect(() => {
    if (data?.metaTitle) {
      document.title = data.metaTitle;
    }

    if (data?.metaDescription) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = data.metaDescription;
    }

    if (data?.keywords) {
      let kw = document.querySelector("meta[name='keywords']");
      if (!kw) {
        kw = document.createElement("meta");
        kw.name = "keywords";
        document.head.appendChild(kw);
      }
      kw.content = data.keywords.join(", ");
    }
  }, [data]);

  const renderTable = (table) => {
    if (!table?.headers || !table?.rows) return null;

    return (
      <div className="details-card">
        <table>
          <thead>
            <tr>
              {table.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderList = (title, items) => {
    if (!items?.length) return null;

    return (
      <div className="details-card">
        <h2>{title}</h2>
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderSteps = () => {
    if (!data.treatmentSteps?.length) return null;

    return (
      <div className="details-card">
        <h2>Treatment Steps</h2>
        {data.treatmentSteps.map((step, i) => (
          <div key={i} className="step-box">
            <b>
              {step.step}. {step.title}
            </b>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderDosage = () => {
    if (!data.dosageGuide?.length) return null;

    const keys = Object.keys(data.dosageGuide[0]);

    return (
      <div className="details-card">
        <h2>Dosage Guide</h2>
        <table>
          <thead>
            <tr>
              {keys.map((k, i) => (
                <th key={i}>{k}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.dosageGuide.map((row, i) => (
              <tr key={i}>
                {keys.map((k, j) => (
                  <td key={j}>{row[k]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="details-wrapper">

      {/* HERO */}
      <div className="details-hero">
        <Image
          src={safeImage}
          alt={data.title}
          fill
          className="details-hero-image"
        />
        <div className="details-overlay" />
        <div className="details-hero-content">
          <h1>{data.title}</h1>
          <p>{data.shortDescription}</p>
        </div>
      </div>

      <div className="details-container">

        <div className="details-content">

          <div className="details-card">
            <h2>Introduction</h2>
            <p>{data.introduction}</p>
          </div>

          {renderList("Why Use", data.whyUse)}

          {data.recommendedLevel && (
            <div className="details-card">
              <h2>Recommended Level</h2>
              <p>{data.recommendedLevel}</p>
            </div>
          )}

          {data.idealRange && (
            <div className="details-card">
              <h2>Ideal Range</h2>
              <p>{data.idealRange}</p>
            </div>
          )}

          {renderSteps()}

          {renderTable(data.chlorineTypes)}
          {renderTable(data.waterConditionTable)}
          {renderTable(data.algaeComparisonTable)}
          {renderTable(data.safetyTable)}
          {renderTable(data.conditionTable)}
          {renderTable(data.problemTable)}

          {renderDosage()}

          {renderList("Expert Tips", data.expertTips)}
          {renderList("Common Mistakes", data.commonMistakes)}

          <div className="details-card">
            <h2>Conclusion</h2>
            <p>{data.conclusion}</p>
          </div>

        </div>

        <aside className="details-sidebar">
          <Image
            src={safeSideImage}
            alt={data.title}
            width={400}
            height={400}
          />
        </aside>

      </div>
    </div>
  );
}