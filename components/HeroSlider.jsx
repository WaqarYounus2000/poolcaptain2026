"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/HeroSlider.css";

const sliderImages = [
  {
    image: "/images/slider/pic1.jpg",
    title: "Professional Pool Construction",
    description:
      "swimming pool construction, spa/jacuzzi construction services in Karachi, Pakistan",
  },
  {
    image: "/images/slider/pic2.jpg",
    title: "Pool Maintenance Services",
    description:
      "Complete cleaning and maintenance services for residential pools across Karachi.",
  },
  {
    image: "/images/slider/pic3.jpg",
    title: "Pool Equipment Supply & Installation",
    description:
      "Pool pumps, pool filters & pool cleaning accessories with installation.",
  },
  {
    image: "/images/slider/pic4.jpg",
    title: "Luxury Pool Design",
    description:
      "Beautiful and modern swimming pool designs for homes.",
  },
  {
    image: "/images/slider/pic5.jpg",
    title: "Pool Repair Solutions",
    description:
      "Pool Leak detection service karachi, motor repair & filtration solutions.",
  },
];

export default function HeroSlider() {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-wrapper">
              <img src={slide.image} alt={slide.title} />
              <div className="overlay"></div>

              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link href="/pool-services">
                  <button>Explore Services</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}