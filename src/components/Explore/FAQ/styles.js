const styles = {
  wrapper: {
    display: "flex",
    justifyContent: {
      md: "space-between",
    },
    flexDirection: {
      xs: "column",
      md: "row",
    },
    marginTop: "2rem",
  },

  container: {
    display: "flex",
    gap: "40px",
    flexDirection: "column",
    width: {
      xs: "100%",
      md: "58%",
    },
  },

  heading: {
    fontSize: "22px",
    fontWeight: 600,
    marginLeft: "20px",
  },

  accordianContainer: {
    "& .MuiAccordion-root": {
      backgroundColor: "transparent",
      border: "1px solid #8C8C8C",
      color: "white",
      margin: "20px",
    },
  },

  accordianIcon: {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: {
      xs: "41px",
      sm: "48px",
    },
    width: "50px",
  },

  accordianSummaryWrapper: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },

  accordianText: {
    fontSize: "14px",
    fontWeight: 500,
  },

  accordianDescription: {
    fontSize: "14px",
    color: "#8C8C8C",
    paddingLeft: "5%",
  },
};

export default styles;
