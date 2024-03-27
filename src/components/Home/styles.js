const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dummy: {
    width: "40%",
    display: {
      xs: "none",
      md: "block",
    },
  },

  container: {
    display: "flex",
    flexDirection: "column",
    width: {
      xs: "100%",
      md: "60%",
    },
    gap: {
      xs: "30px",
      sm: "20px",
    },
    "& .welcome": {
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  heading: {
    fontSize: {
      xs: "15px",
      sm: "18px",
      md: "20px",
    },
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
  },

  subheading: {
    fontSize: {
      xs: "30px",
      sm: "80px",
      md: "90px",
    },
    fontWeight: 500,
    lineHeight: {
      xs: "40px",
      sm: "80px",
      md: "100px",
    },
    "& .outlineText": {
      "-webkit-text-stroke-width": "2px",
      "-webkit-text-stroke-color": "white",
      "-webkit-text-fill-color": "transparent",
      backgroundColor: " rgba(0, 0, 0, 0.5)",
    },
  },

  description: {
    fontSize: {
      xs: "22px",
      sm: "24px",
      md: "26px",
    },
    fontWeight: 400,
  },

  button: {
    width: "280px",
    border: "1px solid white",
    color: "white",
  },
};

export default styles;
