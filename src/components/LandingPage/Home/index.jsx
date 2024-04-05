import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { homeCarousalData } from "../../../constants";
import { SliderComponent } from "../../common";
import styles from "./styles";

const Home = () => {
  const navigate = useNavigate();

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
        <Button
          endIcon={<ArrowOutwardIcon />}
          sx={styles.button}
          onClick={() => navigate("/studio")}
        >
          Explore Studios Now
        </Button>
      </Box>
      <Box sx={styles.backgroundSlider}>
        <SliderComponent
          autoplay
          autoplaySpeed={6000}
          mobileSlides={1}
          tabSlides={1}
          slideNum={1}
          data={homeCarousalData}
          borderRadius={0}
          height="100vh"
        />
      </Box>
    </Box>
  );
};

export default Home;
