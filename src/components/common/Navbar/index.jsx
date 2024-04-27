import DragHandleSharpIcon from "@mui/icons-material/DragHandleSharp";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Drawer, IconButton, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useResponsive } from "../../../hooks/useResponsive";
import styles from "./styles";

const Navbar = ({ data = [] }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { screenType } = useResponsive();

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

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        ...styles.wrapper,
        backgroundColor: isScrolled ? "#fcfcfc" : "transparent",
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
          src="/logo.png"
        />
      </Box>

      {screenType === "TABLET" || screenType === "MOBILE" ? (
        <Box>
          <IconButton onClick={toggleDrawer}>
            <DragHandleSharpIcon
              sx={{ color: isScrolled ? "black" : "white" }}
            />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={handleDrawerClose}
            elevation={5}
            PaperProps={{ variant: "outlined" }}
            TransitionComponent={Slide}
            transitionDuration={{ enter: 300, exit: 300 }}
            sx={styles.drawer}
          >
            <Box sx={styles.drawerContent}>
              <Box sx={styles.drawerHeads}>Menu</Box>
              <Box sx={styles.drawerItemWrapper} onClick={handleDrawerClose}>
                {data.map(({ label, link }, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={link}
                    sx={styles.drawerItem}
                  >
                    {label}
                  </Box>
                ))}
              </Box>
              <Box sx={styles.drawerHeads}>Social</Box>
              <Box sx={styles.iconWrapper}>
                <FacebookSharpIcon sx={styles.icon} />
                <LinkedInIcon sx={styles.icon} />
                <TwitterIcon sx={styles.icon} />
              </Box>
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Box
          sx={{
            ...styles.listContainer,
            borderColor: isScrolled ? "black" : "white",
          }}
        >
          {data.map(({ label, link }, index) => (
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
      )}
    </Box>
  );
};

export default Navbar;
