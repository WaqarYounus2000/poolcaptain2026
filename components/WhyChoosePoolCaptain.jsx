"use client";
import "@/styles/WhyChoosePoolCaptain.css";
import React from "react";
import { Container, Grid, Box, Typography, Card, CardContent } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EngineeringIcon from "@mui/icons-material/Engineering";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WaterIcon from "@mui/icons-material/Water";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PublicIcon from "@mui/icons-material/Public";

const features = [
    {
        icon: <EngineeringIcon className="iconClass" />,
        title: "30+ Years Experience",
        desc: "Trusted swimming pool construction experts in Karachi delivering high-quality residential and commercial pool projects.",
    },
    {
        icon: <VerifiedIcon className="iconClass" />,
        title: "Professional Engineers",
        desc: "Skilled pool engineers ensuring safe, durable and modern swimming pool construction standards.",
    },
    {
        icon: <WaterIcon className="iconClass" />,
        title: "Complete Pool Solutions",
        desc: "From construction to maintenance, filtration, pumps, chemicals and repairs — everything under one roof.",
    },
    {
        icon: <BuildCircleIcon className="iconClass" />,
        title: "Advanced Technology",
        desc: "We use modern waterproofing, filtration and pool automation systems for long-lasting performance.",
    },
    {
        icon: <SupportAgentIcon className="iconClass" />,
        title: "24/7 Customer Support",
        desc: "Dedicated support team for maintenance, emergency repair and technical assistance in Karachi.",
    },
    {
        icon: <HandshakeIcon className="iconClass" />,
        title: "Trusted by Clients",
        desc: "Hundreds of happy residential, commercial and luxury pool project clients across Pakistan.",
    },
    {
        icon: <PublicIcon className="iconClass" />,
        title: "Karachi & Nationwide Service",
        desc: "Providing swimming pool construction and maintenance services across Karachi and surrounding areas.",
    },
    {
        icon: <CheckCircleIcon className="iconClass" />,
        title: "Quality Assurance",
        desc: "We guarantee premium quality materials, long-lasting construction and professional finishing.",
    },
];

export default function WhyChoosePoolCaptain() {
    return (
        <Box className="whyWrapper">

            <Container maxWidth="lg">

                {/* ================= HEADER ================= */}
                <Box className="whyHeader">

                    <Typography className="whyTitle">
                        Why Choose Pool Captain in Karachi?
                    </Typography>

                    <Typography className="whySubtitle">
                        Leading swimming pool construction & maintenance company in Karachi Pakistan,
                        delivering premium quality pool solutions with 35+ years of experience.
                    </Typography>

                </Box>

                {/* ================= FEATURES GRID ================= */}
                <Grid
                    container
                    spacing={3}
                    
                >
                    {features.map((item, i) => (
                        <Grid  xs={12} sm={6} md={3} key={i}>

                            <Card className="whyCard">

                                <CardContent className="whyContent">

                                    <Box className="whyIcon">
                                        {item.icon}
                                    </Box>

                                    <Typography className="whyCardTitle">
                                        {item.title}
                                    </Typography>

                                    <Typography className="whyCardDesc">
                                        {item.desc}
                                    </Typography>

                                </CardContent>

                            </Card>

                        </Grid>
                    ))}
                </Grid>

                {/* ================= SEO TEXT ================= */}
                <Box className="whySeo">

                    <Typography className="seoHeading">
                        Premium Swimming Pool Construction Company in Karachi
                    </Typography>

                    <Typography className="seoText">
                        Pool Captain is a trusted swimming pool construction company in Karachi Pakistan,
                        specializing in residential pools, commercial swimming pools, luxury pool designs,
                        waterproofing, filtration systems, pumps, chemicals, maintenance and complete pool
                        solutions. With over 35+ years of industry experience, we deliver durable, modern,
                        and high-quality swimming pool projects that meet international standards.
                    </Typography>

                </Box>

            </Container>

        </Box>
    );
}