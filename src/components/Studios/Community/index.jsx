import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";

const Community = () => {
  return (
    <Box className="container" component="section">
      <Box sx={styles.container}>
        <Box className="welcome" sx={styles.heading}>
          Our Community
        </Box>
        <Box sx={styles.subheading}>
          Unlock New <span className="outlineText">Opportunities</span>
        </Box>
      </Box>
      <Box sx={styles.dataContainer}>
        <Box sx={styles.imageData}>
          <Box sx={styles.image} component="img" src="/opportunities.jpeg" />
          <Box sx={styles.textWrapper}>
            <Box sx={styles.texthHeading}>Ready to Grow Your Business?</Box>
            <Box sx={styles.textDescription}>
              Are you a studio owner looking to take your business to the next
              level? Join our vibrant community of studio owners at Vlippr
              Studio and discover a world of opportunities waiting for you.
            </Box>
            <Button endIcon={<ArrowOutwardIcon />} sx={styles.button}>
              Register Your Studio Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Community;
