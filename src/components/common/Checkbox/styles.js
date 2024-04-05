const styles = {
  wrapper: {
    display: "flex",
    alignItems: "start",
    gap: "15px",
    margin: 0,
    "& .MuiFormControlLabel-label": {
      fontSize: {
        xs: "12px",
        sm: "14px",
      },
      color: "#C2C2C2",
    },
    "& .MuiCheckbox-root": {
      color: "white",
      borderRadius: "24px",
      padding: 0,
    },
    "& .Mui-checked": {
      backgroundColor: "transparent",
    },
  },
};

export default styles;
