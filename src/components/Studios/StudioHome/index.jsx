import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button } from "@mui/material";
import React from "react";
import { studioHomeCarousalData } from "../../../constants";
import { SliderComponent } from "../../SliderComponent";
import styles from "./styles";

const StudioHome = () => {
  return (
    <Box className="container" component="section" id="#" sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.subheading}>
          Your Sound, <div className="outlineText">Our Studio,</div>
          <div>Unleash Magic.</div>
        </Box>
        <Button endIcon={<ArrowOutwardIcon />} sx={styles.button}>
          Explore Studios
        </Button>
      </Box>
      <Box sx={styles.backgroundSlider}>
        <SliderComponent
          autoplay
          autoplaySpeed={6000}
          mobileSlides={1}
          tabSlides={1}
          slideNum={1}
          data={studioHomeCarousalData}
          borderRadius={0}
          height="100vh"
        />
      </Box>
    </Box>
  );
};

export default StudioHome;
