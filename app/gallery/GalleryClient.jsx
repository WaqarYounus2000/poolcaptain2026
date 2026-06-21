"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";

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

        // ❌ IMPORTANT: handle non-OK responses (404/500)
        if (!res.ok) {
          const text = await res.text();
          console.error("API ERROR RESPONSE:", text);
          throw new Error("API failed");
        }

        const data = await res.json();

        if (isMounted) {
          setMedia(Array.isArray(data?.data) ? data.data : []);
        }
      } catch (err) {
        console.error("FETCH ERROR:", err);
        if (isMounted) setMedia([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMedia();

    return () => {
      isMounted = false;
    };
  }, []);

  const currentItem = media?.[selectedIndex];
  const currentUrl = currentItem?.image || "";

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
    <div className={styles.galleryPage}>

      {/* HERO */}
      <section className={styles.galleryHero}>
        <div className={styles.heroBadge}>
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
      <section className={styles.gallerySection}>
        {loading ? (
          <div className={styles.loaderGrid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard} />
            ))}
          </div>
        ) : (
          <div className={styles.galleryGrid}>
            {media.map((item, i) => {
              const url = item?.image || "";
              const video = isVideo(url);

              return (
                <div
                  key={i}
                  className={styles.galleryCard}
                  onClick={() => setSelectedIndex(i)}
                >
                  <div className={styles.imageWrapper}>

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
                        className={styles.galleryImg}
                        loading="lazy"
                        unoptimized
                      />
                    )}

                    <div className={styles.watermarkOverlay}>
                      <Image src={"https://poolproducts.s3.ap-southeast-2.amazonaws.com/logo/logo.webp"} unoptimized fill alt="Pool Captain"/>
                                
                    </div>

                  </div>

                  <div className={styles.overlay}>
                    <span>View</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && media[selectedIndex] && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className={styles.lightboxBox}
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(currentUrl) ? (
              <video
                ref={videoRef}
                src={currentUrl}
                autoPlay
                muted={muted}
                className={styles.lightboxVideo}
              />
            ) : (
              <Image
                src={currentUrl}
                alt="Media"
                fill
                sizes="100vw"
                className={styles.lightboxImg}
                unoptimized
              />
            )}

            <div className={`${styles.watermarkOverlay} ${styles.lightboxWatermark}`}>
              <Image src={"https://poolproducts.s3.ap-southeast-2.amazonaws.com/logo/logo.webp"} width={300} height={300} unoptimized alt="Pool Captain"  />
                        
            </div>

            <div className={styles.mediaControls}>
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