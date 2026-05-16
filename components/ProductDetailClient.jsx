"use client";

import React from "react";

import Link from "next/link";

import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";

import "@/app/pool-products/page.css";

export default function ProductDetailClient({ product }) {

  return (
    <Box className="detailWrapper">

      {/* HERO */}

      <Box
        className="detailHero"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      >

        <Box className="detailOverlay" />

        <Container
          maxWidth="lg"
          className="detailHeroContent"
        >

          <Typography className="detailTag">
            {product.category}
          </Typography>

          <Typography className="detailTitle">
            {product.heroTitle}
          </Typography>

          <Typography className="detailDesc">
            {product.heroDesc}
          </Typography>

        </Container>

      </Box>

      {/* DETAILS */}

      <Container maxWidth="lg">

        <Grid
          container
          spacing={5}
          className="detailGrid"
        >

          {/* IMAGE */}

          <Grid item xs={12} md={6}>

            <Box className="detailImageCard">

              <img
                src={product.image}
                alt={product.title}
                className="detailImage"
              />

            </Box>

          </Grid>

          {/* CONTENT */}

          <Grid item xs={12} md={6}>

            <Box className="detailContent">

              <Typography className="contentTitle">
                Product Features
              </Typography>

              <Box className="featureList">

                {product.features.map((feature, i) => (

                  <Box
                    key={i}
                    className="featureBox"
                  >
                    ✔ {feature}
                  </Box>

                ))}

              </Box>

              <Typography className="contentTitle secondTitle">
                Specifications
              </Typography>

              <Box className="specificationList">

                {product.specifications.map((item, i) => (

                  <Box
                    key={i}
                    className="specificationItem"
                  >
                    • {item}
                  </Box>

                ))}

              </Box>

              <Link href="/contact">

                <Button className="productBtn contactBtn">
                  Request Quote
                </Button>

              </Link>

            </Box>

          </Grid>

        </Grid>

        {/* BENEFITS */}

        <Box className="benefitsSection">

          <Typography className="benefitHeading">
            Benefits of {product.title}
          </Typography>

          <Grid container spacing={3}>

            {product.benefits.map((item, i) => (

              <Grid item xs={12} md={3} key={i}>

                <Box className="benefitCard">
                  {item}
                </Box>

              </Grid>

            ))}

          </Grid>

        </Box>

        {/* SEO */}

        <Box className="seoSection">

          <Typography className="seoHeading">
            {product.seoTitle}
          </Typography>

          <Typography className="seoText">
            {product.seoDesc}
          </Typography>

          <Box className="keywordWrapper">

            {product.keywords.map((keyword, i) => (

              <Box
                key={i}
                className="keywordChip"
              >
                {keyword}
              </Box>

            ))}

          </Box>

        </Box>

      </Container>

    </Box>
  );
}