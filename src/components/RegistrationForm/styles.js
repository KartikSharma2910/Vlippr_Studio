const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10rem",
    zIndex: 10,
    width: "100%",
    gap: "30px",
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

  description: {
    textAlign: "center",
    fontSize: {
      xs: "18px",
      sm: "20px",
      md: "30px",
    },
    lineHeight: {
      xs: "18px",
      sm: "20px",
      md: "30px",
    },
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    margin: "4rem auto 0",
    width: {
      xs: "100%",
      md: "80%",
    },
  },

  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  formHeading: {
    fontSize: "16px",
    fontWeight: 600,
  },

  footer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "90%",
    fontSize: "16px",
    "& .linker": {
      color: "#357AF6",
    },
  },

  button: {
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
    color: "white",
    height: "50px",
    width: "450px",
    margin: "0 auto",
    fontSize: "16px",
  },
};

export default styles;
