const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
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
      // backgroundColor: " rgba(0, 0, 0, 0.5)",
    },
  },

  button: {
    width: {
      xs: "280px",
      sm: "300px",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    border: "1px solid white",
    color: "white",
  },

  dataContainer: {
    marginTop: "3rem",
  },

  imageData: {
    position: "relative",
  },

  image: {
    height: "520px",
    width: "100%",
    objectFit: "cover",
    filter: "grayscale(30%)",
    opacity: "0.9",
  },

  textWrapper: {
    display: "flex",
    width: {
      xs: "100%",
      sm: "70%",
    },
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: {
      xs: "25px",
      sm: "35px",
    },
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },

  texthHeading: {
    fontSize: {
      xs: "14px",
      sm: "18px",
    },
  },

  textDescription: {
    fontSize: {
      xs: "14px",
      sm: "16px",
    },
  },
};

export default styles;
