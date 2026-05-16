"use client";

import "../styles/BeforeAfterGallery.css";

import Image from "next/image";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  FaMapMarkerAlt,
  FaSwimmingPool,
  FaCheckCircle,
} from "react-icons/fa";

import { projectGalleryData } from "@/data/projectGalleryData";

export default function BeforeAfterGallery() {
  return (
    <section className="project_gallery_section">

      <div className="project_gallery_container">

        {/* HEADING */}
        <motion.div
          className="project_gallery_heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="gallery_tag">
            Premium Pool Projects
          </span>

          <h2>
            Swimming Pool Construction & Renovation Projects Across Pakistan
          </h2>

          <p>
            Explore our swimming pool construction, pool renovation,
            spa engineering and luxury wellness projects completed
            across Karachi and Pakistan for residential, commercial
            and resort developments.
          </p>

        </motion.div>

        {/* PROJECTS */}
        <div className="project_gallery_grid">

          {projectGalleryData.map((project, index) => (

            <motion.div
              key={project.id}
              className="project_gallery_card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              {/* IMAGE SLIDER */}
              <div className="project_slider_wrapper">

                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  navigation
                  loop={true}
                  className="project_swiper"
                >

                  {project.images.map((img, i) => (

                    <SwiperSlide key={i}>

                      <div className="project_image_box">

                        <Image
                          src={img}
                          alt={project.title}
                          fill
                          sizes="(max-width:768px) 100vw, 50vw"
                          style={{
                            objectFit: "cover",
                          }}
                        />

                      </div>

                    </SwiperSlide>

                  ))}

                </Swiper>

              </div>

              {/* CONTENT */}
              <div className="project_gallery_content">

                <div className="project_category">
                  <FaSwimmingPool />
                  {project.category}
                </div>

                <h3>
                  {project.title}
                </h3>

                <div className="project_location">

                  <FaMapMarkerAlt />

                  <span>
                    {project.location}
                  </span>

                </div>

                <p>
                  {project.description}
                </p>

                {/* FEATURES */}
                <div className="project_features">

                  {project.features.map((feature, i) => (

                    <span key={i}>

                      <FaCheckCircle />

                      {feature}

                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}