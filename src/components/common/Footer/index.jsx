import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import styles from "./styles";

const Footer = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "all",
    criteriaMode: "all",
  });

  return (
    <Box className="container" sx={styles.wrapper}>
      <Box sx={styles.upperContainer}>
        <Box sx={styles.headerWrapper}>
          <Box className="welcome" sx={styles.mainHeading}>
            Subscribe To
          </Box>
          <Box className="outlineText" sx={styles.subheading}>
            Our Newsletter
          </Box>
        </Box>
        <Box sx={styles.inputWrapper}>
          <Input
            name="email"
            placeholder="Enter Your Mail"
            control={control}
            errors={errors}
          />
          <Button sx={styles.button}>Submit</Button>
        </Box>
      </Box>
      <Box sx={styles.bottomWrapper}>
        <Box sx={styles.bottomContainer}>
          <Box sx={styles.heading}>Vilppr</Box>
          <Box>
            Vlippr Studio is a premier platform connecting studio owners with
            customers, offering hassle-free booking of affordable and convenient
            studio spaces.
          </Box>
          <Box>Discover the perfect studio for your needs today!</Box>
          <Box>
            Copyright information: © 2023 Vlippr Studio. All Rights Reserved.
          </Box>
        </Box>
        <Box sx={styles.bottomContainer}>
          <Box sx={styles.heading}>Company</Box>
          <Box>Terms of Service</Box>
          <Box>Privacy Policy</Box>
          <Box>FAQ</Box>
        </Box>
        <Box sx={styles.bottomContainer}>
          <Box sx={styles.heading}>Contact Us</Box>
          <Box>Email: info@angelsanddemonssmiler.com</Box>
          <Box>Phone: +1 (123) 456-7890</Box>
          <Box>Address: 123 Studio Way, City, State, Zip Code 5615158</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
