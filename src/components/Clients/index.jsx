import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const Clients = () => {
  return (
    <Box className="container" component="section" id="clients">
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          Our Popular Clients
        </Box>
        <Box sx={styles.subheading}>
          Meet Our <span className="outlineText">Esteemed Collaborators</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
