import { Box } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { aboutCarousalData } from "../../constants";
import styles from "./styles";
import "./styles.css";

const About = () => {
  return (
    <Box className="container" component="section" id="about">
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

      <Box>
        <Swiper
          watchSlidesProgress={true}
          centeredSlides={true}
          slidesPerView={5}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {aboutCarousalData.map(({ image, text }, index) => {
            return (
              <SwiperSlide key={index} style={styles.slide}>
                <Box component="img" src={image} sx={styles.slideImage} />
                <Box sx={styles.slideText}>{text}</Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default About;
