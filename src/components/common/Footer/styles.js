const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "60px",
  },

  upperContainer: {
    "& .welcome": {
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },

    "& .outlineText": {
      "-webkit-text-stroke-width": "2px",
      "-webkit-text-stroke-color": "white",
      "-webkit-text-fill-color": "transparent",
    },
  },

  headerWrapper: {
    position: "relative",
    width: {
      xs: "90%",
      sm: "70%",
      md: "55%",
    },
    margin: "0 auto 30px",
  },

  inputWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    margin: "0 auto",
    width: {
      xs: "90%",
      sm: "70%",
      md: "55%",
    },
  },

  button: {
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
    color: "white",
    height: {
      xs: "43px",
      sm: "50px",
    },
    width: "110px",
    fontSize: "16px",
    marginTop: {
      xs: "1.2rem",
      sm: "1.6rem",
    },
  },

  bottomWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: "30px",
  },

  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 30px",
    boxSizing: "border-box",
    gap: {
      xs: "15px",
      sm: "24px",
      md: "30px",
    },
    fontSize: "14px",
    color: "#808080",
    width: {
      xs: "100%",
      sm: "46%",
      md: "31%",
    },
  },

  image: {
    width: "70px",
    filter: "grayscale(100%) brightness(1000%)",
  },

  mainHeading: {
    fontSize: {
      xs: "25px",
      sm: "40px",
      md: "50px",
    },
    fontWeight: 500,
    lineHeight: {
      xs: "30px",
      sm: "40px",
      md: "60px",
    },
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
  },

  heading: {
    fontSize: "18px",
    color: "white",
    fontWeight: 600,
  },

  subheading: {
    position: "absolute",
    top: 20,
    left: 100,
    fontSize: {
      xs: "25px",
      sm: "40px",
      md: "50px",
    },
    fontWeight: 500,
    lineHeight: {
      xs: "30px",
      sm: "40px",
      md: "60px",
    },
  },
};

export default styles;
