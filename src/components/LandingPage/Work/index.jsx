import { Box } from "@mui/material";
import React from "react";
import { featuredWorkData } from "../../../constants";
import { VideoSlider } from "../../VideoSlider";
import styles from "./styles";

const Work = () => {
  return (
    <Box
      className="container"
      component="section"
      id="work"
      sx={{ minHeight: "min-content !important" }}
    >
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          FEATURED WORKS
        </Box>
        <Box sx={styles.subheading}>
          Explore Our <span className="outlineText">Creative Projects</span>
        </Box>
      </Box>
      <Box sx={styles.videoPlayer}>
        <VideoSlider
          autoplay
          showLeftArrow
          showRightArrow
          autoplaySpeed={6000}
          slideNum={2}
          data={featuredWorkData}
        />
      </Box>
    </Box>
  );
};

export default Work;
