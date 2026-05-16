"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaWater,
    FaTools,
    FaBuilding,
    FaHistory,
    FaCogs,
    FaSpa
} from "react-icons/fa";
import "@/styles/timeLInesection.css";
const timelineData = [
    {
        year: "Early 1990s",
        icon: <FaHistory />,
        title: "Foundation of Pool Captain",
        desc: "Started as a small family business in Karachi focused on swimming pool maintenance services for residential clients."
    },
    {
        year: "2000 - 2010",
        icon: <FaTools />,
        title: "Pool Repair & Maintenance Expansion",
        desc: "Expanded into pool repair, plumbing systems, filtration installation, leak detection, and maintenance contracts."
    },
    {
        year: "2010 - 2015",
        icon: <FaWater />,
        title: "Swimming Pool Construction",
        desc: "Entered full swimming pool construction including residential, commercial, and custom luxury pool projects."
    },
    {
        year: "2015 - 2020",
        icon: <FaCogs />,
        title: "Equipment & Chemical Supply",
        desc: "Provided pool equipment, filtration systems, pumps, cleaning systems, and water treatment chemicals."
    },
    {
        year: "2020 - Present",
        icon: <FaSpa />,
        title: "Luxury Spa & Resort Projects",
        desc: "Delivering jacuzzi systems, sauna installations, spa engineering, and resort-level swimming pool projects."
    },
    {
        year: "Today",
        icon: <FaBuilding />,
        title: "Leading Pool Company in Pakistan",
        desc: "Trusted swimming pool construction, maintenance, repair, and equipment supply company with 30+ years experience."
    }
];

export default function TimelineSection() {
    return (
        <section className="timeline_section">

            <div className="timeline_header">
                <h2>Our Journey & Timeline</h2>
                <p>
                    From pool maintenance in Karachi to luxury spa & resort engineering across Pakistan.
                </p>
            </div>

            <div className="timeline_container">

                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`timeline_item ${index % 2 === 0 ? "left" : "right"}`}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >

                        <div className="timeline_icon">
                            {item.icon}
                        </div>

                        <div className="timeline_content">

                            <span className="timeline_year">{item.year}</span>
                            <h3 className="timeline_content_title">{item.title}</h3>
                            <p>{item.desc}</p>

                        </div>

                    </motion.div>
                ))}

            </div>

        </section>
    );
}   