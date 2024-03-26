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
    gap: "20px",
    "& .welcome": {
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  heading: {
    fontSize: "20px",
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
  },

  subheading: {
    fontSize: "90px",
    fontWeight: 500,
    lineHeight: "100px",
    "& .outlineText": {
      "-webkit-text-stroke-width": "2px",
      "-webkit-text-stroke-color": "white",
      "-webkit-text-fill-color": "transparent",
      backgroundColor: " rgba(0, 0, 0, 0.5)",
    },
  },

  description: {
    fontSize: "26px",
    fontWeight: 400,
  },

  button: {
    width: "280px",
    border: "1px solid white",
    color: "white",
  },
};

export default styles;
