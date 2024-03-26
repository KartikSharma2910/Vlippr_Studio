import { Box } from "@mui/material";
import React from "react";
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
    </Box>
  );
};

export default Studio;
