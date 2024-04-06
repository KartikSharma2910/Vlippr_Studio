const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  wrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
    rowGap: 2,
    width: "100%",
  },

  image: {
    width: {
      xs: "100%",
      md: "30%",
    },
    objectFit: "cover",
    objectPosition: "center",
    height: "350px",
  },

  button: {
    width: {
      xs: "180px",
      sm: "200px",
    },
    margin: "0 auto",
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    border: "1px solid white",
    color: "white",
  },
};

export default styles;
