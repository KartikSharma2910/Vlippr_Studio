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
      // backgroundColor: " rgba(0, 0, 0, 0.5)",
    },
  },

  imageWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    marginTop: "1rem",
    height: "100%",
    width: "100%",
  },

  image: {
    width: "28%",
    height: "300px",
    objectFit: "cover",
    filter: "grayscale(100%)",
  },

  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "2rem",
  },

  card: {
    padding: "20px 40px",
    width: {
      xs: "100%",
      sm: "50%",
      md: "30%",
    },
    borderRadius: "8px",
    cursor: "pointer",
    position: "relative",
    height: "270px",
    transition: "all 0.4s ease",
    "& .welcome": {
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },

    "&:hover": {
      // border: "1px solid #8C8C8C",
      transform: "scale(0.97)",
    },
  },

  cardNumber: {
    position: "absolute",
    left: 15,
    fontSize: "11px",
    color: "#8C8C8C",
  },

  cardHeading: {
    fontSize: "28px",
    fontWeight: 600,
  },

  description: {
    marginTop: 3,
    fontSize: "13px",
    fontWeight: 200,
    color: "#8C8C8C",
  },

  buttonLabel: {
    position: "absolute",
    fontSize: "12px",
    bottom: 15,
    padding: 0,
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
  },
};

export default styles;
