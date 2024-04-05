import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button } from "@mui/material";
import React from "react";
import { studioData } from "../../../constants";
import { SliderComponent } from "../../common";
import styles from "./styles";

const Studio = () => {
  return (
    <Box className="container" component="section" id="studio">
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          Our Diverse Studios
        </Box>
        <Box sx={styles.subheading}>
          Discover Your <span className="outlineText">Creative Heaven</span>
        </Box>
      </Box>
      <Box sx={styles.slideWrapper}>
        <Box>
          <SliderComponent
            autoplay
            showLeftArrow
            showRightArrow
            autoplaySpeed={6000}
            slideNum={3}
            data={studioData}
          />
        </Box>
        <Box sx={styles.slideText}>
          Explore our diverse range of studio spaces designed to inspire and
          empower your creative endeavors. From sleek photography studios to
          dynamic music recording spaces, we have the perfect setting to fuel
          your passion and unleash your creativity.
        </Box>
        <Button endIcon={<ArrowOutwardIcon />} sx={styles.button}>
          UNLOCK YOUR STUDIO's POTENTIAL
        </Button>
      </Box>
    </Box>
  );
};

export default Studio;
