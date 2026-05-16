"use client";

import { useEffect, useState } from "react";
import "./gallery.css";

export default function GalleryClient() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();

        setImages(data.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="galleryPage">
      {/* HERO */}
      <section className="galleryHero">
        <div className="heroBadge">
          Premium Pool Projects & Installations
        </div>

        <h1>
          Pool Captain <span>Luxury Gallery</span>
        </h1>

        <p>
          Explore our completed swimming pool projects, jacuzzi installations,
          sauna systems, steam rooms, heat pumps, filtration systems, and
          luxury pool equipment projects across Pakistan.
        </p>
      </section>

      {/* GALLERY */}
      <section className="gallerySection">
        <div className="galleryGrid">
          {images.map((img, i) => (
            <div
              className="galleryCard"
              key={i}
              onClick={() => setSelectedImage(img.image)}
            >
              <img
                src={img.image}
                alt={`Pool Captain Project ${i + 1}`}
                className="galleryImg"
              />

              <div className="overlay">
                <span>View Project</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightboxBox">
            <img
              src={selectedImage}
              alt="Pool Captain"
              className="lightboxImg"
            />
          </div>
        </div>
      )}
    </div>
  );
}