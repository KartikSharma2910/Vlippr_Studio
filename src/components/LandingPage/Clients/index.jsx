import { Box } from "@mui/material";
import React from "react";
import { clientData, clients } from "../../../constants";
import { SliderComponent } from "../../common";
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
      <Box sx={styles.slideWrapper}>
        <Box>
          <SliderComponent
            autoplay
            showLeftArrow
            showRightArrow
            autoplaySpeed={6000}
            slideNum={3}
            data={clientData}
          />
        </Box>
        <Box sx={styles.clientsWrapper}>
          {clients.map((url, index) => (
            <Box component="img" src={url} key={index} sx={styles.client} />
          ))}
        </Box>
      </Box>
      <Box sx={styles.imagesBoxer}>
        <Box sx={styles.leftBox}>
          <Box sx={styles.imageBox} component="img" src="/creativity1.jpeg" />
          <Box sx={styles.textContainer}>
            <Box sx={styles.textHead}>Short Film</Box>
            <Box sx={styles.textDesc}>Notes of Creativity</Box>
          </Box>
        </Box>
        <Box sx={styles.rightBox}>
          <Box sx={styles.rightMiniBoxUpper}>
            <Box sx={styles.miniBox}>
              <Box
                sx={styles.imageBox}
                component="img"
                src="/creativity2.jpeg"
              />
            </Box>
            <Box sx={styles.miniBox}>
              <Box
                sx={styles.imageBox}
                component="img"
                src="/creativity3.jpeg"
              />
            </Box>
          </Box>
          <Box sx={styles.rightMiniBoxLower}>
            <Box
              sx={{
                ...styles.imageBox,
                objectPosition: "top",
              }}
              component="img"
              src="/creativity4.jpeg"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
