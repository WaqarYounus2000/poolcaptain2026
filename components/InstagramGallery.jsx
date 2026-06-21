"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "../styles/InstagramGallery.css";

export default function InstagramGallery({
  images = [],
  title = "Gallery",
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const openImage = (index) => setActiveIndex(index);
  const closeImage = () => setActiveIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="igWrapper">

      {/* TITLE */}
      <h3 className="igTitle">{title}</h3>

      {/* GRID */}
      <div className="igGrid">
        {images.map((img, i) => (
          <div
            key={i}
            className="igItem"
            onClick={() => openImage(i)}
          >
            <Image
              src={img}
              alt={`gallery-${i}`}
              fill
              unoptimized
              className="igImage"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="igModal" onClick={closeImage}>

          <button className="igClose" onClick={closeImage}>
            <FaTimes />
          </button>

          <button className="igPrev" onClick={prevImage}>
            <FaChevronLeft />
          </button>

          <div className="igModalContent">
            <Image
              src={images[activeIndex]}
              alt="preview"
              fill
              className="igFullImage"
              unoptimized
            />
          </div>

          <button className="igNext" onClick={nextImage}>
            <FaChevronRight />
          </button>

        </div>
      )}

    </div>
  );
}