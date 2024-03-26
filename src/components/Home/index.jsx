import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";

const Home = () => {
  return (
    <Box className="container" component="section" id="#" sx={styles.wrapper}>
      <Box sx={styles.dummy}></Box>
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          WELCOME TO VLIPPR STUDIO
        </Box>
        <Box sx={styles.subheading}>
          Be The Hero Of Your <span className="outlineText">Own Story</span>
        </Box>
        <Box sx={styles.description}>
          Find the Perfect Space for Your Creativity
        </Box>
        <Button endIcon={<ArrowOutwardIcon />} sx={styles.button}>
          Explore Studios Now
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
