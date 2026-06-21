"use client";

import "./aboutus.css";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import TimelineSection from "@/components/TimelineSection";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import {
    FaHotTub,
    FaUsers,
    FaWater,
    FaSpa,
    FaTools,
    FaStar,
    FaCogs,
    FaFlask,
    FaTrophy,
    FaHistory,
    FaBuilding,
} from "react-icons/fa";

/* HERO */


/* PROJECTS */
const joyland1 =  "https://poolproducts.s3.ap-southeast-2.amazonaws.com/achievementsProjects/joyland2.webp"
const  joyland2 = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/achievementsProjects/joyland1.webp"

const  khoj1 = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/achievementsProjects/khoj1.webp"
const khoj2 = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/achievementsProjects/khoj2.webp"
const khoj3 = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/achievementsProjects/khoj3.webp"
const khoj4 = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/achievementsProjects/khoj4.webp"
const khoj5 = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/achievementsProjects/khoj5.webp"
const khoj6 = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/achievementsProjects/khoj6.webp"

/* CLIENTS */
const karachigymkhana = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/karachigymkhana.webp"
const abdullahmall ="https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/abdullahmall.webp"
const asimjofa = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/asimjofa.webp"
const darululoom = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/darululoom.webp"
const dhacollege = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/dhacollege.webp"
const faujifoundation = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/faujifoundation.webp"
const iqrauniversity = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/iqrauniversity.webp"
const joyland = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/joyland-amusement-park.webp"
const rufifarm = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/rufi-farm-house.webp"
const landscape__logo = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/landscape-construction.webp"
const mandviwalla = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/mandviwala.webp"
const principal = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/principle-builders.webp"
const khojresorts = "https://poolproducts.s3.ap-southeast-2.amazonaws.com/ourClients/khoj-allana-hub-resorts.webp"

const servingData = [
    { imgSrc: karachigymkhana, title: "Karachi Gym Khana" },
    { imgSrc: abdullahmall, title: "Abdullah Mall Hyderabad" },
    { imgSrc: asimjofa, title: "Asim Jofa" },
    { imgSrc: dhacollege, title: "DHA College" },
    { imgSrc: faujifoundation, title: "Fauji Foundation" },
    { imgSrc: iqrauniversity, title: "Iqra University" },
    { imgSrc: joyland, title: "Joyland" },
    { imgSrc: rufifarm, title: "Rufi Farm" },
    { imgSrc: landscape__logo, title: "Landscape" },
    { imgSrc: mandviwalla, title: "Mandviwalla Motors" },
    { imgSrc: principal, title: "Principal Builders" },
    { imgSrc: khojresorts, title: "Khoj Resorts" },
    { imgSrc: darululoom, title: "Darul Uloom Karachi" },
];

/* ================= ANIMATION ================= */

const storyContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const storyItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const floatImage = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export default function AboutUsClient() {
    const [previewImg, setPreviewImg] = useState(null);

    return (
        <>

            {/* ================= HERO ================= */}
            <section className="aboutus_section1">

                <div className="heroImageWrapper">
                    <Image
                        src={"https://poolproducts.s3.ap-southeast-2.amazonaws.com/aboutandprojectsPirctures/aboutus-cover-poolcaptain.webp"}
                        alt="Pool Captain Swimming Pool Company Karachi Pakistan"
                        fill
                        priority
                        sizes="100vw"
                        unoptimized
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>

                <div className="aboutus_section1_overlay"></div>

                <motion.div
                    className="aboutus_section1_div1"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="aboutus_section1_h1">
                        <FaBuilding />
                        About Us
                    </h1>
                </motion.div>
            </section>

            {/* ================= STORY ================= */}
            <section className="aboutus_section2">
                <div className="aboutus_section2_Mdiv">

                    {/* IMAGE */}
                    <motion.div
                        className="image_div"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div animate="animate" variants={floatImage}>
                            <Image
                                src={"https://poolproducts.s3.ap-southeast-2.amazonaws.com/aboutandprojectsPirctures/pose1.webp"}
                                alt="Pool Captain Team Karachi Pakistan"
                                width={650}
                                height={750}
                                quality={95}
                                unoptimized
                                sizes="(max-width:768px) 100vw, 50vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                    borderRadius: "24px",
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* TEXT */}
                    <motion.div
                        className="paragraph_container"
                        variants={storyContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="aboutus_section2_Mdiv_title"
                            variants={storyItem}
                        >
                            <FaHistory />
                            OUR STORY
                        </motion.h2>

                        <div className="aboutus_section2_Mdiv_paragraph">

                            <motion.p variants={storyItem}>
                                Our journey began in the early 1990s, when our father founded Pool Captain in Karachi with a vision of honest and reliable pool maintenance services.
                            </motion.p>

                            <motion.p variants={storyItem}>
                                What started as a small family business slowly grew through dedication, trust, and quality service across residential pool maintenance.
                            </motion.p>

                            <motion.p variants={storyItem}>
                                Over time, we expanded into full swimming pool engineering — including construction, filtration, plumbing, leak detection, and renovation.
                            </motion.p>

                            <motion.p variants={storyItem}>
                                Today, we proudly deliver luxury pools, commercial projects, and resort-level spa systems across Pakistan, carrying forward a strong family legacy.
                            </motion.p>

                        </div>
                    </motion.div>

                </div>
            </section>
            {/* --------------------------------------------------------------------------------------- */}

            {/* ================= TIME LINE SECTION  ================= */}


            {/* ================= TIMELINE ================= */}
            <TimelineSection />







            {/* --------------------------------------------------------------------------------------- */}
            {/* --------------------------------------------------------------------------------------- */}



            {/* ================= OUR CORE VALUES ================= */}
            <section className="why_choose_section">

                <motion.div
                    className="why_choose_container"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >

                    <h2 className="why_choose_title">
                        <FaStar className="why-choose-PC" />
                        Our Core Values
                    </h2>

                    <p className="why_choose_subtitle">
                        At Pool Captain, our core values define how we deliver swimming pool construction, maintenance, repair, chemical treatment, and equipment supply services across Karachi Pakistan with trust and long-term reliability.
                    </p>

                    <div className="why_choose_grid">

                        {/* CARD 1 */}
                        <motion.div className="why_card" whileHover={{ y: -8 }}>
                            <FaHistory className="why_icon" />

                            <h3 className="why-cards-title">Legacy & Experience</h3>
                            <p>
                                Built on 30+ years of hands-on experience in swimming pool construction, maintenance, repair, and spa engineering across Karachi Pakistan.
                            </p>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div className="why_card" whileHover={{ y: -8 }}>
                            <FaBuilding className="why_icon" />

                            <h3 className="why-cards-title">Trust & Integrity</h3>
                            <p>
                                We believe in honest work, transparent pricing, and long-term relationships with clients in residential and commercial swimming pool projects.
                            </p>
                        </motion.div>

                        {/* CARD 3 */}
                        <motion.div className="why_card" whileHover={{ y: -8 }}>
                            <FaTools className="why_icon" />

                            <h3 className="why-cards-title">Technical Excellence</h3>
                            <p>
                                Expert swimming pool engineers delivering precision in plumbing, filtration systems, waterproofing, leak detection, and equipment installation.
                            </p>
                        </motion.div>

                        {/* CARD 4 */}
                        <motion.div className="why_card" whileHover={{ y: -8 }}>
                            <FaWater className="why_icon" />

                            <h3 className="why-cards-title">Quality & Durability</h3>
                            <p>
                                We ensure long-lasting swimming pool construction, maintenance, and repair work using high-quality materials and proven engineering methods.
                            </p>
                        </motion.div>

                        {/* CARD 5 */}
                        <motion.div className="why_card" whileHover={{ y: -8 }}>
                            <FaFlask className="why_icon" />

                            <h3 className="why-cards-title">Water Safety & Hygiene</h3>
                            <p>
                                Professional pool chemical treatment, water balancing, filtration care, and hygienic maintenance for safe swimming environments.
                            </p>
                        </motion.div>

                        {/* CARD 6 */}
                        <motion.div className="why_card" whileHover={{ y: -8 }}>
                            <FaCogs className="why_icon" />

                            <h3 className="why-cards-title">Responsibility & Ownership</h3>
                            <p>
                                We take full responsibility for every project—from swimming pool construction to maintenance and repair—ensuring complete accountability.
                            </p>
                        </motion.div>

                        {/* CARD 7 */}
                        <motion.div className="why_card" whileHover={{ y: -8 }}>
                            <FaStar className="why_icon" />

                            <h3 className="why-cards-title">Customer Satisfaction</h3>
                            <p>
                                24/7 client support with dedicated service for swimming pool maintenance, repair, and emergency assistance whenever needed.
                            </p>
                        </motion.div>

                        {/* CARD 8 (NEW SEO BOOST) */}
                        <motion.div className="why_card" whileHover={{ y: -8 }}>
                            <FaTools className="why_icon" />

                            <h3 className="why-cards-title">Complete Pool Solutions</h3>
                            <p>
                                From swimming pool construction, maintenance, repair, chemical supply, and equipment installation—we provide complete turnkey solutions in Karachi Pakistan.
                            </p>
                        </motion.div>

                    </div>

                </motion.div>

            </section>





            {/* --------------------------------------------------------------------------------------- */}
            {/* ================= ACHIEVEMENTS ================= */}
            <section className="achievements_section">

                <div className="achievements_header">
                    <h2 className="achievements_title">
                        <FaTrophy className="achievements_icon" />
                        Our Achievements
                    </h2>
                    <p className="achievements_subtitle">
                        Delivering premium swimming pool and spa experiences across Pakistan.
                    </p>
                </div>

                <div className="achievements_grid">

                    <div className="achievement_card">

                        <div className="achievement_images_scroll">

                            <Image src={joyland1} alt="Joyland"
                                width={500} height={300}
                                style={{ width: "100%", height: "220px", objectFit: "cover" }}
                                onClick={() => setPreviewImg(joyland1)}
                                unoptimized
                            />

                            <Image src={joyland2} alt="Joyland"
                                width={500} height={300}
                                style={{ width: "100%", height: "220px", objectFit: "cover" }}
                                onClick={() => setPreviewImg(joyland2)}
                                unoptimized
                            />

                        </div>

                        <div className="achievement_content">
                            <h3 className="our-achievements-title">Joyland – Rawalpindi</h3>
                            <p>Luxury spa systems including jacuzzi and hydrotherapy.</p>
                        </div>

                    </div>

                    <div className="achievement_card">

                        <div className="achievement_images_scroll">

                            {[khoj1, khoj2, khoj3, khoj4, khoj5, khoj6].map((img, i) => (
                                <Image
                                    key={i}
                                    src={img}
                                    alt="Khoj"
                                    width={500}
                                    height={300}
                                    style={{ width: "100%", height: "220px", objectFit: "cover" }}
                                    onClick={() => setPreviewImg(img)}
                                    unoptimized
                                />
                            ))}

                        </div>

                        <div className="achievement_content">
                            <h3 className="our-achievements-title">Khoj Resort</h3>
                            <p>Full resort spa engineering and wellness systems.</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* /////////////////////////////////////////////////////////////////////// */}

         
            {/* --------------------------------------------------------------------------------------- */}
            {/* ================= OUR PROCESS ================= */}
            <OurProcess />

            {/* ================= TESTIMONIALS ================= */}
            <Testimonials />
            {/* /////////////////////////////////////////////////////////////////////// */}

            {/* ================= CLIENTS ================= */}

            <section className="serving_section_1">
                <div className="achievements_header">
                    <h2 className="achievements_title">
                        <FaTrophy className="achievements_icon" />
                        Our Clients
                    </h2>
                    <p className="achievements_subtitle">
                        Our Trusted Client across Karachi,Pakistan
                    </p>
                </div>

                <div className="serving_card_container">


                    {servingData.map((data, index) => (
                        <div key={index} className="serving_card">

                            <Image
                                src={data.imgSrc}
                                alt={data.title}
                                width={170}
                                height={120}
                                unoptimized
                                style={{
                                    width: "100%",
                                    height: "120px",
                                    objectFit: "contain",
                                }}
                            />

                        </div>
                    ))}

                </div>

            </section>

            {/* ================= LIGHTBOX ================= */}
            {previewImg && (
                <div
                    className="image_preview_overlay"
                    onClick={() => setPreviewImg(null)}
                >
                    <Image
                        src={previewImg}
                        alt="Preview"
                        width={1200}
                        height={800}
                        style={{
                            width: "90vw",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                </div>
            )}




        </>
    );
}