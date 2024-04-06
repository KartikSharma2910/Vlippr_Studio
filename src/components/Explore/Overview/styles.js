const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    justifyContent: "center",
    width: {
      xs: "90%",
      md: "80%",
    },
    margin: "0 auto",
  },

  upperContainer: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    gap: "20px",
  },

  upperHeading: {
    fontSize: "22px",
    fontWeight: 600,
  },

  upperDescription: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#8C8C8C",
  },

  mainContainer: {
    display: "flex",
    rowGap: 3,
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: {
      xs: "100%",
      md: "40%",
    },
  },

  boxer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  heading: {
    fontSize: "18px",
    fontWeight: 600,
  },

  description: {
    fontSize: "14px",
    color: "#8C8C8C",
  },

  divider: {
    backgroundColor: "#8C8C8C",
    height: "70vh",
    width: "0.5px",
    display: {
      xs: "none",
      md: "block",
    },
  },

  rightBox: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#191919",
    padding: "15px",
  },

  newDivider: {
    width: "100%",
    height: "1px",
    opacity: "0.6",
    backgroundColor: "#8C8C8C",
  },

  lister: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontSize: "14px",
    color: "#8C8C8C",
  },
};

export default styles;
