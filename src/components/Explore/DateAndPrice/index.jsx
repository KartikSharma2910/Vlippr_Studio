import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Checkbox, Date } from "../../common";
import styles from "./styles";

const DateAndPrice = () => {
  const { control } = useForm({
    defaultValues: {
      startDate: "",
      endDate: "",
      lightiningEquipment: false,
      virtualRealityRoom: false,
      customizableSets: false,
      soundproofing: false,
      highResolutionMonitors: false,
      greenScreenCapability: false,
      varietyOfBackdrops: false,
    },
  });

  const price = "$29.99";

  return (
    <Box className="container" component="section" sx={styles.wrapper}>
      <Box sx={styles.heading}>Book Your Studio Session Today!</Box>
      <Box sx={styles.dateContainer}>
        <Date
          type="datetime-local"
          customStyles={styles.input}
          name="startDate"
          label="Time In"
          control={control}
        />
        <Date
          type="datetime-local"
          name="endDate"
          customStyles={styles.input}
          label="Time Out"
          control={control}
        />
      </Box>
      <Box sx={styles.checkboxWrapper}>
        <Box sx={styles.heading}>Additional Features</Box>
        <Box sx={styles.checkboxContainer}>
          <Checkbox
            name="lightiningEquipment"
            label="Professional Lighting Equipment"
            control={control}
          />
          <Box>{price}</Box>
        </Box>
        <Box sx={styles.checkboxContainer}>
          <Checkbox
            name="virtualRealityRoom"
            label="Virtual Reality Viewing Room"
            control={control}
          />
          <Box>{price}</Box>
        </Box>
        <Box sx={styles.checkboxContainer}>
          <Checkbox
            name="customizableSets"
            label="Customizable Sets"
            control={control}
          />
          <Box>{price}</Box>
        </Box>
        <Box sx={styles.checkboxContainer}>
          <Checkbox
            name="soundproofing"
            label="Soundproofing"
            control={control}
          />
          <Box>{price}</Box>
        </Box>
        <Box sx={styles.checkboxContainer}>
          <Checkbox
            name="highResolutionMonitors"
            label="High-Resolution Monitors"
            control={control}
          />
          <Box>{price}</Box>
        </Box>
        <Box sx={styles.checkboxContainer}>
          <Checkbox
            name="greenScreenCapability"
            label="Green Screen Capability"
            control={control}
          />
          <Box>{price}</Box>
        </Box>
        <Box sx={styles.checkboxContainer}>
          <Checkbox
            name="varietyOfBackdrops"
            label="Variety of Backdrops"
            control={control}
          />
          <Box>{price}</Box>
        </Box>
      </Box>
      <Box sx={styles.buttonWrapper}>
        <Button sx={styles.button}>Check Availability</Button>
        <Box sx={styles.footerText}>2 Free Pass Remaining *</Box>
      </Box>
    </Box>
  );
};

export default DateAndPrice;
