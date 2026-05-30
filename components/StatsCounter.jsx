"use client";
import "@/styles/StatsCounter.css";

import { Container, Grid, Box, Typography, Card } from "@mui/material";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { number: 35, label: "Years Experience" },
  { number: 300, label: "Projects Completed" },
  { number: 500, label: "Happy Clients" },
  { number: 24, label: "24/7 Support" },
];

export default function StatsCounter() {
  return (
    <Box className="statsSection">
      <Container>

        <Box className="statsHeader">
          <h2 className="statsTitle">
            Our Achievements in Swimming Pool Industry
          </h2>

          <h3 className="statsSub">
            Trusted swimming pool construction company in Karachi with proven results
          </h3>
        </Box>



        <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    width: "100%",
    px: { xs: 2, sm: 3, md: 0 }, // mobile spacing fix
  }}
>
  <Grid
    container
    spacing={4}
    sx={{
      maxWidth: "1100px",
      width: "100%",
      justifyContent: "center",
    }}
  >
    {stats.map((item, i) => (
      <Grid  xs={6} sm={6} md={3} key={i}>

        <motion.div whileHover={{ y: -8 }}>

          <Card className="statsCard">

            <Typography className="statsNumber">
              <CountUp end={item.number} duration={3} />+
            </Typography>

            <Typography className="statsLabel">
              {item.label}
            </Typography>

          </Card>

        </motion.div>

      </Grid>
    ))}
  </Grid>
</Box>
       

      </Container>
    </Box>
  );
}