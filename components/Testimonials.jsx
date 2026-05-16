"use client";

import React from "react";
import { motion } from "framer-motion";
import "@/styles/testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Ahmed Raza",
        role: "Residential Client - Karachi",
        text: "Pool Captain built our swimming pool with excellent quality. Their maintenance service is also very professional and timely.",
        rating: 5,
    },
    {
        name: "Sarah Khan",
        role: "Homeowner - DHA Karachi",
        text: "Very professional team for pool construction and repair. They handled everything from filtration system to finishing perfectly.",
        rating: 5,
    },
    {
        name: "Ali Enterprises",
        role: "Commercial Project Client",
        text: "We hired them for a commercial swimming pool project. Excellent engineering, equipment supply, and after-service support.",
        rating: 5,
    },
    {
        name: "Land Scape",
        role: "Construction Partner",
        text: "Reliable company for spa and pool construction. Their technical team is highly skilled in modern pool systems.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials_section">

            {/* HEADER */}
            <div className="testimonials_header">
                <h2 className="what_our_clientSays_title">What Our Clients Say</h2>
                <p className="what_our_clientSays_desc" >
                    We are thrilled to share some heartwarming testimonial straight from the mouths of our satisfied clients.
                </p>
            </div>

            {/* GRID */}
            <div className="testimonials_grid">

                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        className="testimonial_card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                    >

                        <div className="quote_icon">
                            <FaQuoteLeft />
                        </div>

                        <p className="testimonial_text">
                            {item.text}
                        </p>

                        <div className="rating">
                            {Array.from({ length: item.rating }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>

                        <div className="client_info">
                            <h4>{item.name}</h4>
                            <span>{item.role}</span>
                        </div>

                    </motion.div>
                ))}

            </div>

        </section>
    );
}