import { Box } from "@mui/material";
import React from "react";
import { Checkbox } from "../../common";
import styles from "./styles";

const StudioFeatures = ({ control }) => {
  return (
    <Box sx={styles.wrapper}>
      <Checkbox
        name="professionalLightingWquipment"
        label="Professional Lighting Equipment"
        customStyles={styles.input}
        control={control}
      />
      <Checkbox
        name="virtualReality"
        label="Virtual Reality Viewing Room"
        customStyles={styles.input}
        control={control}
      />
      <Checkbox
        name="customizableSets"
        label="Customizable Sets"
        customStyles={styles.input}
        control={control}
      />
      <Checkbox
        name="soundproofing"
        label="Soundproofing"
        customStyles={styles.input}
        control={control}
      />
      <Checkbox
        name="highResolutionMonitors"
        label="High-Resolution Monitors"
        customStyles={styles.input}
        control={control}
      />
      <Checkbox
        name="greenScreenCapability"
        label="Green Screen Capability"
        customStyles={styles.input}
        control={control}
      />
      <Checkbox
        name="varietyofBackdrops"
        label="Variety of Backdrops"
        customStyles={styles.input}
        control={control}
      />
      <Checkbox
        name="spaciousLayout"
        label="Spacious layout"
        customStyles={styles.input}
        control={control}
      />
    </Box>
  );
};

export default StudioFeatures;
