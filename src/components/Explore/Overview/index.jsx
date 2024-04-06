import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const Overview = () => {
  return (
    <Box className="container" component="section" sx={styles.wrapper}>
      <Box sx={styles.upperContainer}>
        <Box sx={styles.upperHeading}>NovaLens Studios</Box>
        <Box sx={styles.upperDescription}>
          <Box>Ample natural light</Box>
          <Box>Versatile backdrop options</Box>
        </Box>
      </Box>
      <Box sx={styles.mainContainer}>
        <Box sx={styles.container}>
          <Box sx={styles.description}>
            At NovaLens Studios, we redefine the art of photography with
            cutting-edge technology and unparalleled services. Located in the
            heart of Kerala, our studio combines modern aesthetics with
            industrial flair to provide a truly unique and immersive experience
            for photographers of all levels.
          </Box>
          <Box sx={styles.boxer}>
            <Box sx={styles.heading}>Studio Atmosphere</Box>
            <Box sx={styles.description}>
              Step into our state-of-the-art studio space, where sleek design
              meets functionality. Our industrial-inspired decor creates an
              atmosphere of creativity and innovation, setting the stage for
              unforgettable photoshoots.
            </Box>
          </Box>
          <Box sx={styles.boxer}>
            <Box sx={styles.heading}>Leading Technology</Box>
            <Box sx={styles.description}>
              Equipped with the latest in photography technology, NovaLens
              Studios offers industry-leading equipment and amenities to elevate
              your photography to new heights. From high-resolution cameras to
              advanced lighting setups, we provide everything you need to
              capture stunning images with precision and clarity.
            </Box>
          </Box>
          <Box sx={styles.boxer}>
            <Box sx={styles.heading}>Services Offered</Box>
            <Box sx={styles.description}>
              Our studio goes beyond just providing space – we offer a range of
              services to support your creative vision. Whether you're a
              professional photographer or an aspiring enthusiast, our team is
              here to assist you every step of the way. From concept development
              to post-production editing, we provide comprehensive support to
              ensure your photoshoot is a success.
            </Box>
          </Box>
        </Box>
        <Box sx={styles.divider} />
        <Box sx={styles.container}>
          <Box sx={styles.rightBox}>
            <Box sx={styles.heading}>Unique Features</Box>
            <Box sx={styles.lister}>
              <Box>
                ◦ Virtual Reality Viewing Room: Immerse yourself in your photos
                with our cutting-edge VR technology, allowing you to experience
                your images in a whole new dimension.
              </Box>
              <Box sx={styles.newDivider} />
              <Box>
                ◦ Customizable Sets: Transform your vision into reality with our
                customizable sets, tailored to suit your specific themes and
                aesthetics.
              </Box>
              <Box sx={styles.newDivider} />
              <Box>
                ◦ Professional Assistance: Our experienced team of photographers
                and technicians are on hand to provide guidance and support
                throughout your photoshoot, ensuring every detail is perfect.
              </Box>
            </Box>
          </Box>
          <Box sx={styles.boxer}>
            <Box sx={styles.heading}>Experience NovaLens Studios</Box>
            <Box sx={styles.description}>
              Join us at NovaLens Studios and experience photography in a whole
              new light. Whether you're capturing timeless portraits,
              breathtaking landscapes, or dynamic fashion shots, our studio
              provides the perfect backdrop for your creativity to shine.
              Welcome to a world where innovation meets imagination – welcome to
              NovaLens Studios.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
