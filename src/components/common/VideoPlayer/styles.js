const styles = {
  wrapper: {
    position: "relative",
    borderRadius: "4px",
    boxShadow: "0 4px 62px 0 rgba(255, 255, 255, 0.21)",
    overflow: "hidden",
    backgroundColor: "black",
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  overlayWrapper: {
    position: "absolute",
    display: "flex",
    inset: "0 0 0 0",
    backgroundImage:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
    zIndex: 5,
    cursor: "pointer",
  },

  overlay: {
    position: "absolute",
    backgroundImage:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
    zIndex: 5,
    inset: "0 0 0 0",
  },

  title: {
    color: "white",
    padding: "12px 14px",
    fontSize: {
      mobile: "12px",
      tablet: "14px",
      laptop: "15px",
    },
    fontWeight: 600,
    whiteSpace: "nowrap",
    zIndex: 5,
  },

  playIcon: {
    width: "24%",
    marginBottom: "-35px",
    alignSelf: "center",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    cursor: "pointer",
  },

  thumbnail: {
    position: "absolute",
    inset: "0 0 0 0",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "nowrap",
    objectFit: "cover",
  },

  clockIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },

  accessIcon: {
    color: "white",
    fontSize: {
      mobile: "14px",
      tablet: "18px",
      laptop: "20px",
    },
  },

  videoWrapper: {
    width: "100%",
    height: "100%",
  },
};

export default styles;
