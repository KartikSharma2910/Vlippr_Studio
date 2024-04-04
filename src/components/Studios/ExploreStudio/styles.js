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

  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 3,
    columnGap: 2,
    marginTop: "4rem",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: {
      xs: "100%",
      sm: "48%",
      md: "31%",
    },
    padding: "10px",
    backgroundColor: "#1B1A1B",
  },

  cardInsideContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  cardImage: {
    width: "100%",
    objectFit: "cover",
  },

  cardHeading: {
    fontSize: "22px",
    fontWeight: 600,
  },

  cardPlace: {
    fontSize: "12px",
    fontWeight: 300,
  },

  divider: {
    width: "100%",
    borderTop: "0.5px solid #8C8C8C",
    opacity: "0.5",
  },

  cardList: {
    fontSize: "12px",
    color: "#8C8C8C",
  },

  cardButton: {
    marginTop: "1rem",
    width: "170px",
    fontSize: "13px",
    color: "white",
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
  },

  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardPrice: {
    fontSize: "11px",
    marginBottom: "0.5rem",
  },

  cardIcons: {
    display: "flex",
    gap: 1.5,
  },

  cardIcon: {
    fontSize: "22px",
    color: "#8C8C8C",
  },

  footerButtonWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4rem",
  },

  footerButton: {
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
};

export default styles;
