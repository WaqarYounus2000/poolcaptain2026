"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/HeroSlider.css";

const sliderImages = [
  {
    image: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/slider/pool+jacuzi+construction.webp",
    title: "Swimming Pool & Jacuzzi Construction",
    description:
      "Swimming pool construction, spa/jacuzzi construction services.",
  },
  {
    image: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/slider/pool+maintenance+service.webp",
    title: "Pool Maintenance Services",
    description:
      "Complete cleaning and maintenance services for residential & commercial pools across Karachi.",
  },
  {
    image: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/slider/pool+equipment+installation.webp",
    title: "Pool Equipment Supply & Installation",
    description:
      "Pool pumps, pool filters & pool cleaning accessories with installation.",
  },
  {
    image: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/slider/pool+maintenance+service-2.webp",
    title: "Luxury Pool Design",
    description:
      "Beautiful and modern swimming pool designs for homes.",
  },
  {
    image: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/slider/pool-repair-service.webp",
    title: "Pool Repair Solutions",
    description:
      "Pool Leak detection service karachi, motor repair & filtration solutions.",
  },
  {
    image: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/slider/pool+tiling+and+repairs+service.webp",
    title: "Pool Tiling & Finishing",
    description:
      "New branded tiles supply and experts placement and instalaltion services"
  },
  {
    image: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/slider/sauna+construction.webp",
    title: "Sauna & Steam Room Construction",
    description:
      "Sauna & steam room construction with modern design, premium equipment installation, and complete wellness solutions."
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
              <Image src={slide.image} alt={slide.title} fill unoptimized />
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