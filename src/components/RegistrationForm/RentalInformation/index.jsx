import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Box } from "@mui/material";
import React from "react";
import { Input } from "../../common";
import styles from "./styles";

const RentalInformation = ({ control, errors }) => {
  return (
    <Box sx={styles.wrapper}>
      <Input
        name="hourly"
        label="Hourly"
        placeholder="Hourly"
        customStyles={styles.input}
        control={control}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <LocalOfferOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="halfDay"
        label="Half Day"
        placeholder="Half Day"
        customStyles={styles.input}
        control={control}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <LocalOfferOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="fullDay"
        label="Full Day"
        placeholder="Full Day"
        customStyles={styles.input}
        control={control}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <LocalOfferOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
    </Box>
  );
};

export default RentalInformation;
