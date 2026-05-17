"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./gallery.css";

export default function GalleryClient() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();

        if (isMounted) setImages(data?.data || []);
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

  const fixImageUrl = (url) => (url ? url.replace(/\s+/g, "") : "");
  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);

  const currentItem = images[selectedIndex];
  const currentUrl = currentItem ? fixImageUrl(currentItem.image) : null;

  const next = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  const prev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const toggleFullScreen = () => {
    const el = document.querySelector(".lightboxBox");
    if (!document.fullscreenElement) el?.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

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

      {/* GRID */}
      <section className="gallerySection">
        {loading ? (
          <div className="loaderGrid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeletonCard" />
            ))}
          </div>
        ) : (
          <div className="galleryGrid">
            {images.map((img, i) => {
              console.log(img)
              const url = fixImageUrl(img.image);
              const video = isVideo(url);

              return (
                <div
                  key={i}
                  className="galleryCard"
                  onClick={() => setSelectedIndex(i)}
                >
                  <div className="imageWrapper">
                    {!video ? (
                      <Image
                        src={url}
                        alt={`Project ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="galleryImg"
                        loading="lazy"
                      />
                    ) : (
                      <video
                        src={url}
                        className="galleryImg"
                        muted
                        autoPlay
                        loop
                        playsInline
                      />
                    )}

                    <div className="logoWatermark" />
                  </div>

                  <div className="overlay">
                    <span>View Project</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <div
            className="lightboxBox"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MEDIA */}
            {!isVideo(currentUrl) ? (
              <Image
                src={currentUrl}
                alt="Project"
                fill
                sizes="100vw"
                className="lightboxImg"
              />
            ) : (
              <div className="videoWrapper">
                <video
                  ref={videoRef}
                  src={currentUrl}
                  autoPlay
                  muted={muted}
                  className="lightboxVideo"
                />
              </div>
            )}

            {/* WATERMARK */}
            <div className="logoWatermark lightboxWatermark" />

            {/* CONTROLS */}
            <div className="mediaControls">

              <button onClick={prev}>⟨</button>

              <button onClick={togglePlay}>
                {isPlaying ? "❚❚" : "▶"}
              </button>

              <button onClick={toggleMute}>
                {muted ? "🔇" : "🔊"}
              </button>

              <button onClick={next}>⟩</button>

              <button onClick={toggleFullScreen}>⛶</button>

              <button onClick={() => setSelectedIndex(null)}>✕</button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}