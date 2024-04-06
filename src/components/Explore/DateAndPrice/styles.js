const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  dateContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  input: {
    width: "46%",
  },

  heading: {
    fontSize: "22px",
    fontWeight: 600,
  },

  checkboxWrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#191919",
    padding: "15px",
    gap: "20px",
    width: {
      xs: "100%",
      md: "60%",
    },
    margin: "0 auto",
  },

  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "14px",
  },

  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px",
    alignItems: "center",
    marginTop: "3rem",
  },

  button: {
    color: "white",
    height: "50px",
    width: "350px",
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
  },

  footerText: {
    fontSize: "14px",
    color: "#8C8C8C",
  },
};

export default styles;
