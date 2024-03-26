import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const Work = () => {
  return (
    <Box className="container" component="section" id="work">
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          FEATURED WORKS
        </Box>
        <Box sx={styles.subheading}>
          Explore Our <span className="outlineText">Creative Projects</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Work;
