"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./gallery.css";

export default function GalleryClient() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();

        if (isMounted) {
          setImages(data?.data || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImages();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="galleryPage">
      {/* HERO */}
      <section className="galleryHero">
        <div className="heroBadge">Premium Pool Projects & Installations</div>

        <h1>
          Pool Captain <span>Luxury Gallery</span>
        </h1>

        <p>
          Explore our completed swimming pool projects, jacuzzi installations,
          sauna systems, steam rooms, heat pumps, filtration systems, and luxury
          pool equipment projects across Pakistan.
        </p>
      </section>

      {/* GALLERY */}
      <section className="gallerySection">
        {loading ? (
          <div className="loaderGrid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeletonCard" />
            ))}
          </div>
        ) : (
          <div className="galleryGrid">
            {images.map((img, i) => (
              <div
                className="galleryCard"
                key={i}
                onClick={() => setSelectedImage(img.image)}
              >
                <div className="imageWrapper">
                  <Image
                    src={img.image}
                    alt={`Pool Project ${i + 1}`}
                    fill
                    className="galleryImg"
                    loading="lazy"
                  />

                  {/* watermark */}
                  <div className="logoWatermark" />
                </div>

                <div className="overlay">
                  <span>View Project</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightboxBox">
            <Image
              src={selectedImage}
              alt="Pool Captain"
              fill
              className="lightboxImg"
              style={{ objectFit: "contain" }}
            />

            {/* watermark */}
            <div className="logoWatermark lightboxWatermark" />
          </div>
        </div>
      )}
    </div>
  );
}