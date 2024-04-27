import { Box } from "@mui/material";
import React from "react";
import { aboutCarousalData } from "../../../constants";
import { SliderComponent } from "../../common";
import styles from "./styles";

const About = () => {
  return (
    <Box
      className="container"
      component="section"
      id="about"
      sx={{
        minHeight: {
          xs: "min-content !important",
          sm: "100vh",
        },
      }}
    >
      <Box sx={styles.boxer}>
        <Box sx={styles.container}>
          <Box className="welcome" sx={styles.heading}>
            ABOUT US
          </Box>
          <Box sx={styles.subheading}>
            What Can <span className="outlineText">We Do</span>
          </Box>
          <Box sx={styles.description}>
            We're dedicated to providing content creators with the tools they
            need to bring their vision to life. Our ready-made sets cater to a
            variety of creative endeavors, offering a unique edge for content
            creators across different industries.
          </Box>
        </Box>
        <Box sx={styles.imageWrapper}>
          <Box sx={styles.image} component="img" src="/about.png" />
        </Box>
      </Box>
      <Box sx={{ marginTop: "3rem" }}>
        <SliderComponent
          autoplay
          showLeftArrow
          showRightArrow
          autoplaySpeed={6000}
          slideNum={5}
          data={aboutCarousalData}
        />
      </Box>
    </Box>
  );
};

export default About;
