"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/HeroSlider.css";

const sliderImages = [
  {
    image: "/images/slider/pic1.jpg",
    title: "Professional Pool Construction",
    description:
      "Modern swimming pool construction services in Karachi.",
  },
  {
    image: "/images/slider/pic2.jpg",
    title: "Pool Maintenance Services",
    description:
      "Complete cleaning and maintenance for residential pools.",
  },
  {
    image: "/images/slider/pic3.jpg",
    title: "Pool Equipment Installation",
    description:
      "Premium pool pumps, filters and accessories installation.",
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
      "Leak detection, motor repair and filtration solutions.",
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

                <button>Explore Services</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}