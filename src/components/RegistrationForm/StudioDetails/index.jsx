import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import { Box } from "@mui/material";
import React from "react";
import { DropDown, Input } from "../../common";
import styles from "./styles";

const studioType = [
  {
    label: "Photography Studio",
    value: "Photography Studio",
  },
  {
    label: "Podcast Studio",
    value: "Podcast Studio",
  },
  {
    label: "Makeup Studio",
    value: "Makeup Studio",
  },
  {
    label: "Cooking Studio",
    value: "Cooking Studio",
  },
];

const StudioDetails = ({ control, errors }) => {
  return (
    <Box sx={styles.wrapper}>
      <Input
        name="studioName"
        label="Studio Name"
        placeholder="Studio Name"
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
      <DropDown
        name="studioType"
        label="Studio Type"
        placeholder="Studio Type"
        control={control}
        customStyles={styles.input}
        errors={errors}
        options={studioType}
        startIcon={
          <Box sx={styles.icon}>
            <StoreOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="address"
        label="Address"
        placeholder="Address"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <LocationOnOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="state"
        label="State"
        placeholder="State"
        type="textOnly"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <LocationOnOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="city"
        label="City"
        type="textOnly"
        placeholder="City"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <LocationOnOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="zipCode"
        label="Zip Code"
        type="number"
        placeholder="Zip Code"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <LocationOnOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="studioDescription"
        label="Studio Description"
        placeholder="Studio Description"
        control={control}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <ChairOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
    </Box>
  );
};

export default StudioDetails;
