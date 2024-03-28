import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";

const Home = () => {
  return (
    <Box className="container" component="section" id="#" sx={styles.wrapper}>
      <Box
        component="img"
        sx={styles.coverImage}
        src="https://s3-alpha-sig.figma.com/img/4dc2/2d4a/09d7fbfb6e22f0336bd6f50203671cef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFp74-rtCOHIpTaIDfI3vi9E1BY06LepR-KdiDj6GlTZ98HLu0zM~3lGlM2EvFg0h1KhENakEE2tOMyxnRWqWzjk4MLwMmC0OOkYfU8jguKK1tAPTJ4NvGeSBSy8eXP5AhDhxbIycUKe7dsTfgs7d0ArIieLrOWY44V6dnRs2o7T7ZAglFoBeuaw6HASXXTSvIDqGbiMGoVyGnM4-0R0I9Im8I24ebwcM6SKb6vEKp1URFn9O6XqwsBYnKO2ZtjP88qnYCQZHA50IFtCfUS2H-08UQYuFl1~Ync44Y6V63Q~fLLSwAnWL3B5Csr2UYmJp86huDs6PLCh5gJH2MhbXA__"
      />
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
