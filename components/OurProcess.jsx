"use client";

import React from "react";
import { motion } from "framer-motion";

import {
    FaClipboardList,
    FaTools,
    FaWater,
    FaCogs,
    FaCheckCircle,
    FaBuilding
} from "react-icons/fa";
import "@/styles/ourprocess.css";
const processData = [
    {
        icon: <FaClipboardList />,
        title: "Site Inspection & Planning",
        desc: "We analyze site conditions and plan custom swimming pool construction, maintenance or renovation based on client requirements."
    },
    {
        icon: <FaTools />,
        title: "Technical Design & Engineering",
        desc: "Our engineers design pool structure, plumbing layout, filtration system and waterproofing with modern standards."
    },
    {
        icon: <FaWater />,
        title: "Pool Construction & Installation",
        desc: "We execute full swimming pool construction including concrete work, tiling, waterproofing and hydraulic systems."
    },
    {
        icon: <FaCogs />,
        title: "Equipment & System Setup",
        desc: "Installation of pool pumps, filters, chemical dosing systems, heating systems and water treatment equipment."
    },
    {
        icon: <FaCheckCircle />,
        title: "Testing & Quality Assurance",
        desc: "We test water quality, leakage, filtration performance and safety standards before project handover."
    },
    {
        icon: <FaBuilding />,
        title: "Maintenance & After-Sales Support",
        desc: "Regular pool maintenance, repair services, cleaning, chemical supply and long-term technical support."
    }
];

export default function OurProcess() {
    return (
        <section className="process_section">

            {/* HEADER */}
            <div className="process_header">
                <h2 className="our-prof-process-title">Our Professional Process</h2>
                <p className="our-prof-process-desc">
                    Complete swimming pool construction, maintenance, repair, filtration and spa engineering workflow in Pakistan.
                </p>
            </div>

            {/* GRID */}
            <div className="process_grid">

                {processData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="process_card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                    >

                        <div className="process_icon">
                            {item.icon}
                        </div>

                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>

                    </motion.div>
                ))}

            </div>

        </section>
    );
}