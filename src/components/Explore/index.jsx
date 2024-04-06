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
        <Box
          sx={styles.image}
          component="img"
          src="https://s3-alpha-sig.figma.com/img/8171/8121/a0b36023f0a40b3f448442ade52ca6bc?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BJ3O97jSDe9oEH3HzM1eGqlTYuCmXV08QfczeUPeeUWlTSkPivYMmXtAwbCG~D3eTvEeOrkRdcdoEH8KBJsO8Hze5bR6AUgxxhihYxlmgiRT1J2hb4wwicIuKGOuEKsPZ7yB2Fj4s4K0eMgCt660cX0tFMPbOZ2824fGEJjQkDaADqTGgxjYNFbCONncPP2MBZwbO6CLq-jxQS4pWX~UC2JJLyP8RQS9IBHI3MOQgT5j3Jzc8OzMbAu1vZAnO-tJ3W03zcqUzTaEgXBLKqT6fLgNIFc8Rxsh6zVjpmcEO24TrhMdZQD44gobZycvjbnpnYRtc0F1qAzhn3ypogG4gg__"
        />
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
