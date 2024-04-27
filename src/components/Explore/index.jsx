import { Box } from "@mui/material";
import React, { useState } from "react";
import { studioNavbar } from "../../constants";
import { Footer, Navbar } from "../common";
import DateAndPrice from "./DateAndPrice";
import FAQ from "./FAQ";
import Gallery from "./Gallery";
import Overview from "./Overview";
import styles from "./styles";

const Explore = () => {
  const [linker, setLinker] = useState(
    "overview" || "gallery" || "dateAndPrice" || "faq"
  );

  const navigators = [
    {
      label: "Overview",
      link: "overview",
    },
    {
      label: "Gallery",
      link: "gallery",
    },
    {
      label: "Date & Price",
      link: "dateAndPrice",
    },
    {
      label: "FAQ & Review",
      link: "faq",
    },
  ];

  const dataChanger = [
    {
      link: "overview",
      component: Overview,
    },
    {
      link: "gallery",
      component: Gallery,
    },
    {
      link: "dateAndPrice",
      component: DateAndPrice,
    },
    {
      link: "faq",
      component: FAQ,
    },
  ];

  return (
    <Box>
      <Navbar data={studioNavbar} />
      <Box sx={styles.upperContainer}>
        <Box sx={styles.image} component="img" src="/explore.jpeg" />
      </Box>
      <Box sx={styles.stripeWrapper}>
        {navigators.map((item, index) => {
          return (
            <Box
              key={index}
              onClick={() => setLinker(item.link)}
              className={linker === item.link ? "normal" : "outlineText"}
              sx={styles.stripeText}
            >
              {item.label}
            </Box>
          );
        })}
      </Box>
      {dataChanger.map(({ link, component: Component }, index) => {
        return (
          <Box hidden={linker !== link} key={index}>
            <Component />
          </Box>
        );
      })}
      <Footer />
    </Box>
  );
};

export default Explore;
