"use client";

import React from "react";
import "@/styles/CommercialResidentialPoolSection.css";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import VerifiedIcon from "@mui/icons-material/Verified";

const services = [
  {
    icon: <ApartmentIcon />,
    title: "Commercial Pool Maintenance",
    desc: "Professional swimming pool maintenance services in Karachi for hotels, clubs, schools, gyms, apartments and commercial facilities.",
  },
  {
    icon: <HomeWorkIcon />,
    title: "Residential Pool Maintenance",
    desc: "Complete residential swimming pool cleaning, filtration inspection and water balancing for villas and homes.",
  },
  {
    icon: <WaterDropIcon />,
    title: "Water Treatment Solutions",
    desc: "Advanced chlorine treatment, algae removal, chemical balancing and crystal-clear water maintenance services.",
  },
  {
    icon: <EngineeringIcon />,
    title: "Pool Equipment Inspection",
    desc: "Expert inspection and servicing of pool pumps, filters, motors, underwater lights and circulation systems.",
  },
  {
    icon: <CleaningServicesIcon />,
    title: "Routine Pool Cleaning",
    desc: "Weekly and monthly swimming pool cleaning services ensuring hygiene, safety and long-term durability.",
  },
  {
    icon: <VerifiedIcon />,
    title: "Trusted Pool Experts",
    desc: "30+ years of experience in swimming pool maintenance, repair and construction services across Karachi Pakistan.",
  },
];

export default function CommercialResidentialPoolSection() {
  return (
    <Box className="maintenanceWrapper">

      {/* BACKGROUND OVERLAY */}
      <Box className="maintenanceOverlay" />

      <Container maxWidth="lg" className="maintenanceContainer">

        {/* ================= HEADER ================= */}
        <Box className="maintenanceHeader">

          <Typography className="maintenanceTitle">
            Commercial & Residential Swimming Pool Maintenance Services in Karachi
          </Typography>

          <Typography className="maintenanceSubtitle">
            Pool Captain provides professional swimming pool maintenance services in Karachi Pakistan
            for residential homes, villas, hotels, clubs, gyms, schools and commercial projects.
            We specialize in pool cleaning, filtration systems, water treatment, equipment servicing,
            leak inspection and complete swimming pool maintenance solutions.
          </Typography>

        </Box>

        {/* ================= CARDS ================= */}
        <Grid
          container
          spacing={4}
          
        >
          {services.map((item, i) => (
            <Grid  xs={12} sm={6} md={4} key={i}>

              <Card className="maintenanceCard">

                <CardContent className="maintenanceContent">

                  <Box className="maintenanceIcon">
                    {item.icon}
                  </Box>

                  <Typography className="maintenanceCardTitle">
                    {item.title}
                  </Typography>

                  <Typography className="maintenanceCardDesc">
                    {item.desc}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>
          ))}
        </Grid>

        {/* ================= SEO CONTENT ================= */}
        <Box className="seoSection">

          <Typography className="seoHeading">
            Trusted Swimming Pool Maintenance Company in Karachi
          </Typography>

          <Typography className="seoText">
            Pool Captain is one of the leading swimming pool maintenance companies in Karachi,
            offering premium commercial and residential swimming pool maintenance services with
            30+ years of experience. Our expert swimming pool technicians provide complete pool
            cleaning, water treatment, filtration system servicing, pool pump maintenance,
            underwater lighting inspection, leak detection and chemical balancing solutions.

            We maintain residential swimming pools, luxury villa pools, rooftop pools,
            hotel pools, club pools and commercial swimming pools using advanced maintenance
            techniques and high-quality pool chemicals. Our swimming pool maintenance services
            in Karachi focus on hygiene, water clarity, equipment efficiency and long-term durability.

            Whether you need weekly pool cleaning, monthly maintenance contracts or complete
            swimming pool equipment servicing, Pool Captain delivers reliable, affordable and
            professional pool maintenance services across Karachi Pakistan.
          </Typography>

          <Button className="maintenanceBtn">
            Request Maintenance Service
          </Button>

        </Box>

      </Container>

    </Box>
  );
}