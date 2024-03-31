const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mixBlendMode: "difference",
    backgroundColor: "#0A0A0A",
    position: "relative",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    width: "100%",
    gap: {
      xs: "30px",
      sm: "20px",
    },
    "& .welcome": {
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  subheading: {
    textAlign: "center",
    fontSize: {
      xs: "40px",
      sm: "70px",
      md: "80px",
    },
    fontWeight: 500,
    lineHeight: {
      xs: "50px",
      sm: "80px",
      md: "90px",
    },
    "& .outlineText": {
      "-webkit-text-stroke-width": "2px",
      "-webkit-text-stroke-color": "white",
      "-webkit-text-fill-color": "transparent",
    },
  },

  button: {
    width: {
      xs: "230px",
      sm: "260px",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    border: "1px solid white",
    color: "white",
  },

  backgroundSlider: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
};

export default styles;
