"use client";

import React from "react";
import Link from "next/link";

import "@/styles/PoolProductsSection.css";

import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import TuneIcon from "@mui/icons-material/Tune";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import WaterIcon from "@mui/icons-material/Water";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import OpacityIcon from "@mui/icons-material/Opacity";
import HighlightIcon from "@mui/icons-material/Highlight";

import { motion } from "framer-motion";

/* ================= PRODUCTS ================= */

const products = [
  {
    title: "Swimming Pool Pumps",
    desc: "High-performance swimming pool pumps for efficient water circulation and energy saving.",
    img: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/lx-pump.png",
    icon: <SettingsInputComponentIcon />,
  },
  {
    title: "Swimming Pool Sand Filters",
    desc: "Premium quality pool filtration systems for crystal clear and hygienic swimming pool water.",
    img: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/fivestar-filter-2.png",
    icon: <WaterIcon />,
  },
  {
    title: "Pool Cleaning Chemicals",
    desc: "Professional pool chemicals for water treatment, chlorine balancing and algae control.",
    img: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/pool-chemicals/chemical-cover.png",
    icon: <OpacityIcon />,
  },
  {
    title: "Pool Underwater Lights",
    desc: "Modern LED underwater pool lights for luxury swimming pool lighting solutions.",
    img: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/lights/light-rgb.png",
    icon: <HighlightIcon />,
  },
  {
    title: "Pool Cleaning Equipment",
    desc: "Advanced pool cleaning accessories and maintenance tools for residential and commercial pools.",
    img: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/cleaning-products/pool-cleaning-cover.png",
    icon: <HighlightIcon />,
  },
  {
    title: "Pool Equipment & Accessories",
    desc: "Stainless steel swimming pool ladders and premium accessories for safety and durability.",
    img: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/pool-accessories/pool-accessories-cover.png",
    icon: <HighlightIcon />,
  },
];

const features = [
  {
    icon: <VerifiedIcon />,
    title: "Premium Quality Products",
  },
  {
    icon: <TuneIcon />,
    title: "Advanced Pool Technology",
  },
  {
    icon: <SettingsInputComponentIcon />,
    title: "Professional Installation",
  },
  {
    icon: <LocalShippingIcon />,
    title: "Fast Delivery Across Karachi",
  },
];

export default function PoolProductsSection() {
  return (
    <Box className="productsWrapper">

      {/* BACKGROUND BLUR */}
      <Box className="blurCircleOne" />
      <Box className="blurCircleTwo" />

      {/* ================= HERO ================= */}

      <Box className="productsHero">

        <Box className="heroOverlay" />

        <Container maxWidth="lg" className="heroContent">

          <Chip
            icon={<WaterDropIcon />}
            label="Premium Swimming Pool Products"
            className="heroChip"
          />

          <h2 className="heroTitle">
            Swimming Pool Equipment & Products in Karachi
          </h2>

          <Typography className="heroSubtitle">
            Pool Captain provides premium swimming pool products in Karachi
            including pool pumps, sand filters, pool chemicals,
            underwater lights, pool cleaning equipment, ladders and
            complete swimming pool accessories for residential and
            commercial swimming pools across Pakistan.
          </Typography>

        </Container>

      </Box>

      {/* ================= FEATURES ================= */}

      <Container maxWidth="xl">

        <Grid
          container
          spacing={4}
          className="featureGrid"

        >

          {features.map((item, i) => (

            <Grid xs={6} md={3} key={i}>

              <motion.div whileHover={{ y: -8 }}>

                <Box className="featureBox">

                  <Box className="featureIcon">
                    {item.icon}
                  </Box>

                  <Typography className="featureTitle">
                    {item.title}
                  </Typography>

                </Box>

              </motion.div>

            </Grid>
          ))}

        </Grid>

      </Container>

      {/* ================= PRODUCTS ================= */}

      <Container maxWidth="xl">

        <Box className="sectionHeader">

          <h3 className="sectionTitle">
            Our Swimming Pool Products
          </h3>

          <Typography className="sectionSubtitle">
            Premium swimming pool equipment, accessories and filtration systems
            designed for durability, performance and luxury pool experiences.
          </Typography>

        </Box>

        <Grid
          container
          spacing={4}

        >

          {products.map((item, i) => (

            <Grid xs={12} sm={6} md={4} lg={3} key={i}>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="cardMotion"
              >

                <Card className="productCard">

                  {/* IMAGE */}
                  <Box className="productImageWrapper">

                    <img
                      src={item.img}
                      alt={item.title}
                      className="productImage"
                    />

                    <Box className="imageOverlay" />

                  </Box>

                  {/* CONTENT */}
                  <CardContent className="productContent">

                    {/* NUMBER */}
                    <Box className="productNumber">
                      0{i + 1}
                    </Box>

                    {/* ICON */}
                    <Box className="productIcon">
                      {item.icon}
                    </Box>

                    {/* TITLE */}
                    <Typography className="productTitle">
                      {item.title}
                    </Typography>

                    {/* DESCRIPTION */}
                    <Typography className="productDesc">
                      {item.desc}
                    </Typography>

                    {/* FEATURES */}
                    <Box className="productFeatures">

                      

                    </Box>

                    {/* BUTTON */}
                    <Link href="/contact" passHref>
                      <Button className="cardBtn">
                        Request Product
                      </Button>
                    </Link>

                  </CardContent>

                </Card>

              </motion.div>

            </Grid>
          ))}

        </Grid>

        {/* ================= VIEW ALL ================= */}

        <Box className="viewAllWrapper">

          <Link href="/pool-products">

            <Button className="viewAllBtn">
              View All Products
            </Button>

          </Link>

        </Box>

        {/* ================= SEO ================= */}

        <Box className="seoSection">

          <h3 className="seoHeading-title">
            Trusted Swimming Pool Equipment Supplier in Karachi
          </h3>

          <Typography className="seoText-paragraph">
            Pool Captain is a trusted swimming pool equipment supplier in Karachi Pakistan,
            providing premium swimming pool products and accessories for residential,
            commercial and luxury swimming pools. We supply swimming pool pumps,
            sand filters, pool chemicals, underwater LED lights, ladders,
            filtration systems, cleaning accessories and complete swimming pool equipment
            solutions with professional installation and maintenance support.

            <br /><br />

            Our swimming pool products are designed for high performance,
            durability, energy efficiency and long-lasting pool operation.
            Whether you need pool maintenance equipment, advanced filtration systems,
            water treatment chemicals or modern swimming pool accessories,
            Pool Captain delivers reliable and affordable pool equipment solutions across Karachi.
          </Typography>

        </Box>

      </Container>

    </Box>
  );
}