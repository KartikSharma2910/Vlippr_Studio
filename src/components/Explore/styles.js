const styles = {
  upperContainer: {
    height: "100vh",
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  stripeWrapper: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    gap: 3,
    justifyContent: {
      xs: "space-between",
      md: "space-around",
    },
    padding: "20px 30px",
    backgroundColor: "#313131",

    "& .outlineText": {
      "-webkit-text-stroke-width": "1px",
      "-webkit-text-stroke-color": "white",
      "-webkit-text-fill-color": "transparent",
    },
  },

  stripeText: {
    fontSize: "28px",
    letterSpacing: "1px",
    fontWeight: 500,
    cursor: "pointer",
  },
};

export default styles;
