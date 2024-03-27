const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",

    "& .welcome": {
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  heading: {
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "18px",
    },
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
  },

  subheading: {
    fontSize: {
      xs: "30px",
      sm: "40px",
      md: "60px",
    },
    fontWeight: 500,
    lineHeight: {
      xs: "40px",
      sm: "50px",
      md: "100px",
    },
    "& .outlineText": {
      "-webkit-text-stroke-width": "2px",
      "-webkit-text-stroke-color": "white",
      "-webkit-text-fill-color": "transparent",
      backgroundColor: " rgba(0, 0, 0, 0.5)",
    },
  },
};

export default styles;
