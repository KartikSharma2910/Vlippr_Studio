import { Box, Button } from "@mui/material";
import React from "react";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import styles from "./styles";

const Gallery = () => {
  return (
    <Box className="container" component="section" sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.image} component="img" src="/photo1.jpeg" />
        <Box sx={styles.image} component="img" src="/photo2.jpeg" />
        <Box sx={styles.image} component="img" src="/photo3.jpeg" />
      </Box>
      <Box sx={styles.wrapper}>
        <Box sx={styles.image} component="img" src="/photo4.jpeg" />
        <Box sx={styles.image} component="img" src="/photo5.jpeg" />
        <Box sx={styles.image} component="img" src="/photo6.jpeg" />
      </Box>
      <Button endIcon={<ArrowOutwardOutlinedIcon />} sx={styles.button}>
        See More
      </Button>
    </Box>
  );
};

export default Gallery;
