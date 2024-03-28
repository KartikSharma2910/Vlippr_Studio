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

  slideWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "3rem",
    marginTop: "3rem",
  },

  clientsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "3rem",
    gap: "2rem",
    justifyContent: "space-between",
    width: "90%",
    margin: "2rem auto",
  },

  client: {
    filter: "grayscale(100%)",
    objectFit: "contain",
    height: {
      xs: "50px",
      sm: "80px",
    },
    width: {
      xs: "60px",
      sm: "90px",
    },
  },

  imagesBoxer: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    height: "450px",
    opacity: "0.9",
    marginTop: "2.5rem",
  },

  leftBox: {
    position: "relative",
    height: {
      xs: "50%",
      md: "100%",
    },
    width: {
      xs: "100%",
      md: "50%",
    },
  },

  imageBox: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  rightBox: {
    display: "flex",
    flexDirection: "column",
    height: {
      xs: "50%",
      md: "100%",
    },
    width: {
      xs: "100%",
      md: "50%",
    },
  },

  rightMiniBoxUpper: {
    display: "flex",
    height: "50%",
  },

  rightMiniBoxLower: {
    height: "50%",
  },

  miniBox: {
    width: "50%",
  },

  textContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
    transform: "translate(-50%,-50%)",
  },

  textHead: {
    fontSize: "12px",
  },

  textDesc: {
    fontSize: "18px",
    fontWeight: 600,
  },
};

export default styles;
