import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";

const Features = () => {
  const cardsData = [
    {
      heading: "Ready-Made Convenience",
      description:
        "Say goodbye to the hassle of setting up and dismantling elaborate sets. With our ready-made studios, you can focus on creating content without worrying about the logistics.",
      buttonLabel: "Read More",
    },
    {
      heading: "Tailored for Content Creators",
      description:
        "Our studios are specifically designed to meet the unique needs of content creators, providing everything you need to produce high-quality videos and engage your audience.",
      buttonLabel: "Read More",
    },
    {
      heading: "Exceptional Quality",
      description:
        "We pride ourselves on offering top-notch studio spaces equipped with the latest technology and amenities, ensuring that your content stands out from the crowd.",
      buttonLabel: "Read More",
    },
  ];

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
      <Box>
        <Box sx={styles.imageWrapper}>
          <Box sx={styles.image} component="img" src="/videoMan.jpeg" />
          <Box sx={styles.image} component="img" src="/blackVideo.jpeg" />
          <Box sx={styles.image} component="img" src="/flags.jpeg" />
        </Box>
        <Box sx={styles.cardWrapper}>
          {cardsData.map(({ heading, description, buttonLabel }, index) => {
            return (
              <Box key={index} sx={styles.card}>
                <Box sx={styles.cardNumber}>0{index + 1}</Box>
                <Box sx={styles.cardHeading}>{heading}</Box>
                <Box sx={styles.description}>{description}</Box>
                <Button
                  endIcon={<ArrowForwardIosIcon />}
                  className="welcome"
                  sx={styles.buttonLabel}
                >
                  {buttonLabel}
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
