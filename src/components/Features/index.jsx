import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const Features = () => {
  return (
    <Box className="container" component="section" id="features">
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          Features
        </Box>
        <Box sx={styles.subheading}>
          What Sets <span className="outlineText">Us Apart</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
