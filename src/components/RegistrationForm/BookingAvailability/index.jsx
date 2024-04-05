import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Box } from "@mui/material";
import React from "react";
import { DropDown } from "../../common";
import styles from "./styles";

const options = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
  {
    label: "5",
    value: "5",
  },
];

const BookingAvailability = ({ control, errors }) => {
  return (
    <Box sx={styles.wrapper}>
      <DropDown
        name="days"
        label="Days"
        control={control}
        customStyles={styles.input}
        errors={errors}
        options={options}
        startIcon={
          <Box sx={styles.icon}>
            <CalendarMonthOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
      <DropDown
        name="hours"
        label="Hours"
        control={control}
        customStyles={styles.input}
        errors={errors}
        options={options}
        startIcon={
          <Box sx={styles.icon}>
            <AccessTimeOutlinedIcon />
          </Box>
        }
        rules={{ required: "This is a required field" }}
      />
    </Box>
  );
};

export default BookingAvailability;
