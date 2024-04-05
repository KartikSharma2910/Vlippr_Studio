import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import { Box } from "@mui/material";
import React from "react";
import { Input } from "../../common";
import styles from "./styles";

const PersonalInformation = ({ control, errors }) => {
  return (
    <Box sx={styles.wrapper}>
      <Input
        name="fullName"
        label="Full Name"
        type="textOnly"
        placeholder="Full Name"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <Person2OutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="email"
        label="Email Address"
        placeholder="Email Address"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <EmailOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="phoneNumber"
        label="Phone Number"
        placeholder="Phone Number"
        type="number"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <LocalPhoneOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="companyName"
        label="Company Name"
        placeholder="Company Name"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <StoreOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
    </Box>
  );
};

export default PersonalInformation;
