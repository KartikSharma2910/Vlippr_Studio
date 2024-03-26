const styles = {
  boxer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: {
      xs: "column",
      md: "row",
    },
  },

  container: {
    display: "flex",
    flexDirection: "column",
    width: {
      xs: "100%",
      md: "40%",
    },
    gap: "10px",

    "& .welcome": {
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  heading: {
    fontSize: "18px",
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
  },

  subheading: {
    fontSize: "60px",
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
    fontSize: "16px",
    fontWeight: 400,
    color: "#8C8C8C",
  },

  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    marginTop: "2rem",
  },

  image: {
    width: {
      xs: "100%",
      md: "60%",
    },
    objectFit: "cover",
    objectPosition: "center",
  },

  slide: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },

  slideImage: {
    width: "100%",
    objectFit: "cover",
    opacity: "0.9",
  },

  slideText: {
    width: "20%",
    bottom: 0,
    textTransform: "uppercase",
    fontSize: "18px",
    zIndex: 100,
    fontWeight: 600,
    position: "absolute",
  },
};

export default styles;
