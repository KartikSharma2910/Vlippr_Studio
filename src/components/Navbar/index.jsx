import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { navbar } from "../../constants";
import styles from "./styles";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  console.log(isScrolled);

  return (
    <Box
      sx={{
        ...styles.wrapper,
        backgroundColor: isScrolled ? "white" : "transparent",
        borderBottom: isScrolled ? "none" : "1px solid white",
      }}
    >
      <Box>
        <Box
          sx={{
            ...styles.image,
            filter: isScrolled ? "none" : "grayscale(100%) brightness(1000%)",
          }}
          component="img"
          src="https://s3-alpha-sig.figma.com/img/2fb2/04bf/2f6fdad30e09c745c239d3a394367025?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PEnBACeEJmS6pcBADmN5lsMeATapEO64z8Vh6q1rHUAm3tYrw3JCss7bfjkTztycADYVzfwNWVokP18mVbJSaBasU9d84pW~RRnT4fE0HGBlE1rZJ4kErke0J6mmH4Ubaf~xSL2L~HJkBByCB53yXBDErQ4IFR0HoiVduUn8qslNd~moXpRNgBa7D-frSZFTqg~E93RfW1GrQiVPrpOqizAQtN6dgJ9ToVH73g6cCNRH7e9j27nT8IhnP4sXLorBwOsRpHDowN-zw6u~q-O52FKXkIlRPOVCQJBuKkgpcCw0UjeO3Aggy30MvWxgfiynuqTk4awEOvN42h8Pwjljow__"
        />
      </Box>
      <Box
        sx={{
          ...styles.listContainer,
          borderColor: isScrolled ? "black" : "white",
        }}
      >
        {navbar.map(({ label, link }, index) => (
          <Box
            key={index}
            component="a"
            href={link}
            sx={{ ...styles.list, color: isScrolled ? "black" : "white" }}
          >
            {label}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
