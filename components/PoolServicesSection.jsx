"use client";

import "@/styles/PoolServicesSection.css";

import React from "react";



import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import { motion } from "framer-motion";
import Link from "next/link";
/* ================= SERVICES ================= */

const services = [
  {
    title: "Pool Construction",
    desc: "Professional swimming pool construction in Karachi for homes, villas & commercial projects.",
    img: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/pool-construction.jpeg",
  },
  {
    title: "Pool Installation",
    desc: "Complete swimming pool installation with modern engineering & waterproof systems.",
    img: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/pool-installation.jpeg",
  },
  {
    title: "Pool Repair Services",
    desc: "Leak fixing, crack repair & structural restoration for all pool types.",
    img: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/pool-repair.jpeg",
  },
  {
    title: "Pool Maintenance",
    desc: "Weekly & monthly pool cleaning, water balancing & maintenance services.",
    img: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/maintenance.jpeg",
  },
  {
    title: "Pool Equipment Supply",
    desc: "High-quality pumps, motors, ladders, lights & pool accessories supply.",
    img: "https://poolservicesimages.s3.ap-southeast-2.amazonaws.com/poolequipmentsupply.png",
  },

 
];

export default function PoolServicesSection() {
  return (
    <Box className="poolWrapper">

      {/* BACKGROUND BLUR */}
      <Box className="blurCircleOne" />
      <Box className="blurCircleTwo" />

      <Container maxWidth="xl">

        {/* ================= INTRO ================= */}

        <Box className="introSection">

          <Typography className="miniTag">
            PREMIUM SWIMMING POOL SERVICES
          </Typography>

          <Typography className="mainTitle">
            Pool Captain Swimming Pool Services in Karachi
          </Typography>

          <Typography className="subText">
            Pool Captain provides complete
            <b>
              {" "}pool construction, installation, repair, maintenance,
              filtration systems, pumps, chemicals & equipment supply{" "}
            </b>
            with modern engineering and luxury finishing for residential
            and commercial swimming pools across Pakistan.
          </Typography>

        </Box>

        {/* ================= SECTION HEADER ================= */}

        <Box className="sectionHeader">

          <Typography className="sectionTitle">
            Our Swimming Pool Services
          </Typography>

          <Typography className="sectionSubtitle">
            Luxury pool solutions with premium engineering & modern technology
          </Typography>

        </Box>

        {/* ================= CARDS ================= */}

        <Grid container spacing={4}>

          {services.map((item, i) => (

            <Grid xs={12} sm={6} md={4} lg={3} key={i}>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="cardMotion"
              >

                <Card
                  className="serviceCard"
                  style={{ backgroundImage: `url(${item.img})` }}
                >

                  {/* TOP GLASS */}
                  <Box className="glassEffect" />

                  {/* DARK OVERLAY */}
                  <Box className="overlay" />

                  {/* CONTENT */}
                  <CardContent className="cardContent">

                    <Box className="serviceNumber">
                      0{i + 1}
                    </Box>

                    <Typography className="cardTitle">
                      {item.title}
                    </Typography>

                    <Typography className="cardDesc">
                      {item.desc}
                    </Typography>

                    <Link href="/contact" passHref>
                      <Button className="cardBtn">
                        Request Service
                      </Button>
                    </Link>

                  </CardContent>

                </Card>

              </motion.div>

            </Grid>
          ))}

        </Grid>

        {/* ================= VIEW ALL BUTTON ================= */}

        <Box className="viewAllWrapper">

          <Link href="/pool-services">

            <Button className="viewAllBtn">
              View All Services
            </Button>

          </Link>

        </Box>

      </Container>

    </Box>
  );
}