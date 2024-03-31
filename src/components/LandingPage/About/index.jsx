import { Box } from "@mui/material";
import React from "react";
import { aboutCarousalData } from "../../../constants";
import { SliderComponent } from "../../SliderComponent";
import styles from "./styles";

const About = () => {
  return (
    <Box
      className="container"
      component="section"
      id="about"
      sx={{
        minHeight: {
          xs: "min-content !important",
          sm: "100vh",
        },
      }}
    >
      <Box sx={styles.boxer}>
        <Box sx={styles.container}>
          <Box className="welcome" sx={styles.heading}>
            ABOUT US
          </Box>
          <Box sx={styles.subheading}>
            What Can <span className="outlineText">We Do</span>
          </Box>
          <Box sx={styles.description}>
            We're dedicated to providing content creators with the tools they
            need to bring their vision to life. Our ready-made sets cater to a
            variety of creative endeavors, offering a unique edge for content
            creators across different industries.
          </Box>
        </Box>
        <Box sx={styles.imageWrapper}>
          <Box
            sx={styles.image}
            component="img"
            src="https://s3-alpha-sig.figma.com/img/fe9f/845d/b8884d616e2f18bf28282f7a7b32458e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G~-qt-Z~btkiQrzcGMh0PKXFCtSR1ew9o6UKjL4IiSfqmd5Szc6AfOlWkglhpPobwSfup~0HT1G9hOT4W5NK8cHWeMxY5LfN8RRjlvsn6em-ce9AIY7HZc3~yxmyc1rBY~p5fmqax41bxeZ0qFmXXDhjEDmFKpv3xt3RtenVSViCpha40MJymrH7aS9Re78U~-aku-Gw2J-BoZmrgDgoIcFDIr-7ngGCL2PEHCJLgxg06l1UtkfdsPm7~WghjgWySalUtiyVbf-cz30zSdwB0Nzh5IZjKMFx9mhcHOzrKb864llIRmFrfN5X2U9F6QZ5HDZwbsvzJKv~Ivr7PchM0w__"
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: "3rem" }}>
        <SliderComponent
          autoplay
          showLeftArrow
          showRightArrow
          autoplaySpeed={6000}
          slideNum={5}
          data={aboutCarousalData}
        />
      </Box>
    </Box>
  );
};

export default About;
