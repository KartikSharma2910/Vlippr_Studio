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

  imageWrapper: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    columnGap: {
      xs: "20px",
      md: "8px",
    },
    rowGap: "20px",
  },

  imageContainer: {
    width: {
      xs: "100%",
      sm: "47%",
      md: "24%",
    },
    position: "relative",
  },

  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    objectPosition: "center",
    filter: "grayscale(100%)",
    transition: "all 0.3s",

    "&:hover": {
      cursor: "pointer",
      filter: "grayscale(0%)",
    },
  },

  imageText: {
    fontSize: "14px",
    textAlign: "center",
    marginTop: "0.8rem",
  },
};

export default styles;
