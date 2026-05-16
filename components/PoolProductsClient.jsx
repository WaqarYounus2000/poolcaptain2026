"use client";

import React from "react";

import Link from "next/link";

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

import { poolProducts } from "@/data/poolProducts";

import "@/app/pool-products/page.css";

export default function PoolProductsClient() {
  return (
    <Box className="productsWrapper">

      {/* BACKGROUND EFFECTS */}

      <Box className="blurCircleOne" />
      <Box className="blurCircleTwo" />

      <Container maxWidth="xl">

        {/* HERO SECTION */}

        <Box className="introSection">

          <Typography className="miniTag">
            PREMIUM POOL PRODUCTS
          </Typography>

          <Typography className="mainTitle">
            Swimming Pool Products & Equipment
          </Typography>

          <Typography className="subText">
            Pool Captain supplies premium swimming pool products in Karachi
            including pumps, filters, chemicals, underwater lights,
            ladders and modern swimming pool accessories for residential,
            commercial and luxury swimming pools.
          </Typography>

        </Box>

        {/* SECTION HEADER */}

        <Box className="sectionHeader">

          <Typography className="sectionTitle">
            Our Pool Products
          </Typography>

          <Typography className="sectionSubtitle">
            Premium quality swimming pool equipment engineered for durability,
            performance and luxury pool experiences.
          </Typography>

        </Box>

        {/* PRODUCT GRID */}

        <Grid
          container
          spacing={4}
          justifyContent="center"
        >

          {poolProducts.map((item, i) => (

            <Grid  xs={12} sm={6} md={4} lg={3} key={item.id}>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >

                <Card className="productCard">

                  {/* IMAGE */}

                  <Box className="productImageWrapper">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="productImage"
                    />

                    <Box className="imageOverlay" />

                  </Box>

                  {/* CONTENT */}

                  <CardContent className="productContent">

                    <Box className="productNumber">
                      0{i + 1}
                    </Box>

                    <Typography className="productTitle">
                      {item.title}
                    </Typography>

                    <Typography className="productDesc">
                      {item.shortDesc}
                    </Typography>

                    {/* FEATURES */}

                    <Box className="productFeatures">

                      {item.features.slice(0, 3).map((feature, index) => (

                        <Box
                          key={index}
                          className="featureItem"
                        >
                          ✔ {feature}
                        </Box>

                      ))}

                    </Box>

                    {/* BUTTON */}

                    <Link
                      href={`/pool-products/${item.slug}`}
                      className="productLink"
                    >

                      <Button className="productBtn">
                        Read More
                      </Button>

                    </Link>

                  </CardContent>

                </Card>

              </motion.div>

            </Grid>
          ))}

        </Grid>

        {/* VIEW ALL BUTTON */}

        <Box className="viewAllWrapper">

          <Link href="/contact">

            <Button className="viewAllBtn">
              Request Pool Products
            </Button>

          </Link>

        </Box>

      </Container>

    </Box>
  );
}