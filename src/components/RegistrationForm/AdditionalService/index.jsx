import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Box } from "@mui/material";
import React from "react";
import { Input } from "../../common";
import styles from "./styles";

const AdditionalService = ({ control, errors }) => {
  return (
    <Box sx={styles.wrapper}>
      <Input
        name="equipment"
        label="Equipment"
        placeholder="Equipment's"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <AddCircleOutlineOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="setDesign"
        label="Set Design"
        placeholder="Set Design"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <AddCircleOutlineOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <Input
        name="other"
        label="Other"
        placeholder="Other"
        control={control}
        customStyles={styles.input}
        errors={errors}
        startIcon={
          <Box sx={styles.icon}>
            <AddCircleOutlineOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
    </Box>
  );
};

export default AdditionalService;
