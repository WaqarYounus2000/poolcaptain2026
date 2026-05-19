"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./gallery.css";

export default function GalleryClient() {
  const [media, setMedia] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchMedia = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();

        // console.log("API RESPONSE:", data);

        if (isMounted) {
          setMedia(data?.data || []);

          // ✅ POOL CAPTAIN IMAGE LOG (PUBLIC FOLDER)
          // console.log("POOL CAPTAIN IMAGE:", "/images/pool-captain.png");
        }
      } catch (err) {
        console.error("FETCH ERROR:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMedia();

    return () => {
      isMounted = false;
    };
  }, []);

  const currentItem = media[selectedIndex];
  const currentUrl = currentItem?.image || null;

  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);

  const next = () => {
    setSelectedIndex((prev) =>
      prev === media.length - 1 ? 0 : prev + 1
    );
    setIsPlaying(true);
  };

  const prev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? media.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const toggleFullScreen = () => {
    const el = document.querySelector(".lightboxBox");

    if (!document.fullscreenElement) {
      el?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
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
        <div className="heroBadge">
          Premium Pool Projects & Installations
        </div>

        <h1>
          Pool Captain <span>Luxury Gallery</span>
        </h1>

        <p>
          Explore swimming pools, jacuzzis, saunas, steam rooms,
          filtration systems and equipment installations.
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
            {media.map((item, i) => {
              const url = item.image;
              const video = isVideo(url);

              return (
                <div
                  key={i}
                  className="galleryCard"
                  onClick={() => setSelectedIndex(i)}
                >
                  <div className="imageWrapper">

                    {video ? (
                      <video
                        src={url}
                        className="galleryImg"
                        muted
                        autoPlay
                        loop
                        playsInline
                      />
                    ) : (
                      <Image
                        src={url}
                        alt={`Media ${i + 1}`}
                        fill
                        sizes="100vw"
                        className="galleryImg"
                        loading="lazy"
                      />
                    )}

                    {/* ✅ WATERMARK */}
                    <div className="watermarkOverlay">
                      <img src="/images/logo.png" alt="logo" />
                    </div>

                  </div>

                  <div className="overlay">
                    <span>View</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="lightbox"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="lightboxBox"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(currentUrl) ? (
              <video
                ref={videoRef}
                src={currentUrl}
                autoPlay
                muted={muted}
                className="lightboxVideo"
              />
            ) : (
              <Image
                src={currentUrl}
                alt="Media"
                fill
                sizes="100vw"
                className="lightboxImg"
              />
            )}

            {/* ✅ WATERMARK LIGHTBOX */}
            <div className="watermarkOverlay lightboxWatermark">
              <img src="/images/logo.png" alt="logo" />
            </div>

            <div className="mediaControls">
              <button onClick={prev}>⟨</button>

              {isVideo(currentUrl) && (
                <>
                  <button onClick={togglePlay}>
                    {isPlaying ? "❚❚" : "▶"}
                  </button>

                  <button onClick={toggleMute}>
                    {muted ? "🔇" : "🔊"}
                  </button>
                </>
              )}

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